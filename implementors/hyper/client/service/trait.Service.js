(function() {var implementors = {};
implementors["hyper"] = [{text:"impl&lt;B&gt; <a class=\"trait\" href=\"hyper/client/service/trait.Service.html\" title=\"trait hyper::client::service::Service\">Service</a>&lt;<a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"hyper/client/conn/struct.SendRequest.html\" title=\"struct hyper::client::conn::SendRequest\">SendRequest</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a> + 'static,&nbsp;</span>",synthetic:false,types:["hyper::client::conn::SendRequest"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"hyper/client/service/trait.Service.html\" title=\"trait hyper::client::service::Service\">Service</a>&lt;<a class=\"struct\" href=\"hyper/struct.Uri.html\" title=\"struct hyper::Uri\">Uri</a>&gt; for <a class=\"struct\" href=\"hyper/client/struct.HttpConnector.html\" title=\"struct hyper::client::HttpConnector\">HttpConnector</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"hyper/client/connect/dns/trait.Resolve.html\" title=\"trait hyper::client::connect::dns::Resolve\">Resolve</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;R::<a class=\"type\" href=\"hyper/client/connect/dns/trait.Resolve.html#associatedtype.Future\" title=\"type hyper::client::connect::dns::Resolve::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["hyper::client::connect::http::HttpConnector"]},{text:"impl&lt;C, B, T&gt; <a class=\"trait\" href=\"hyper/client/service/trait.Service.html\" title=\"trait hyper::client::service::Service\">Service</a>&lt;T&gt; for <a class=\"struct\" href=\"hyper/client/service/struct.Connect.html\" title=\"struct hyper::client::service::Connect\">Connect</a>&lt;C, B, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tower_make/make_connection/trait.MakeConnection.html\" title=\"trait tower_make::make_connection::MakeConnection\">MakeConnection</a>&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"tower_make/make_connection/trait.MakeConnection.html#associatedtype.Connection\" title=\"type tower_make::make_connection::MakeConnection::Connection\">Connection</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"tower_make/make_connection/trait.MakeConnection.html#associatedtype.Future\" title=\"type tower_make::make_connection::MakeConnection::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"tower_make/make_connection/trait.MakeConnection.html#associatedtype.Error\" title=\"type tower_make::make_connection::MakeConnection::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"hyper/body/trait.Payload.html#associatedtype.Data\" title=\"type hyper::body::Payload::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["hyper::client::service::Connect"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()