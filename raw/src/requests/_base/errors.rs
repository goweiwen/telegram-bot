use std::error;
use std::fmt;

use http::StatusCode;

use crate::types::*;

#[derive(Debug)]
pub struct Error(ErrorKind);

#[derive(Debug)]
pub(crate) enum ErrorKind {
    EmptyBody,
    TelegramError(TelegramError),
    DetachedError(String),
    Json(::serde_json::Error),
}

#[derive(Debug)]
pub struct TelegramError {
    pub status_code: StatusCode,
    pub description: String,
    pub parameters: Option<ResponseParameters>,
}

impl Error {
    pub fn as_telegram_error(&self) -> Option<&TelegramError> {
        match self {
            Error(ErrorKind::TelegramError(error)) => Some(error),
            _ => None,
        }
    }
}

impl From<::serde_json::Error> for ErrorKind {
    fn from(error: ::serde_json::Error) -> Self {
        ErrorKind::Json(error)
    }
}

impl From<ErrorKind> for Error {
    fn from(kind: ErrorKind) -> Self {
        Error(kind)
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match &self.0 {
            ErrorKind::EmptyBody => write!(f, "empty body"),
            ErrorKind::TelegramError(TelegramError {
                status_code,
                description,
                parameters,
            }) => {
                write!(f, "{}: {}", status_code, description)?;
                if let Some(parameters) = parameters {
                    if let Some(chat_id) = parameters.migrate_to_chat_id {
                        write!(f, ", migrate to chat id: {}", chat_id)?;
                    }
                    if let Some(seconds) = parameters.retry_after {
                        write!(f, ", retry after: {}", seconds)?;
                    }
                }
                Ok(())
            }
            ErrorKind::DetachedError(s) => f.write_str(&s),
            ErrorKind::Json(error) => write!(f, "{}", error),
        }
    }
}

impl error::Error for Error {}
