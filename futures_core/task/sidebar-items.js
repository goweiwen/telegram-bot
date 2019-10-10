initSidebarItems({"enum":[["Poll","Indicates whether a value is available or if the current task has been scheduled to receive a wakeup instead."]],"struct":[["Context","The `Context` of an asynchronous task."],["RawWaker","A `RawWaker` allows the implementor of a task executor to create a [`Waker`] which provides customized wakeup behavior."],["RawWakerVTable","A virtual function pointer table (vtable) that specifies the behavior of a [`RawWaker`]."],["SpawnError","An error that occurred during spawning."],["Waker","A `Waker` is a handle for waking up a task by notifying its executor that it is ready to be run."]],"trait":[["LocalSpawn","The `LocalSpawn` is similar to [`Spawn`], but allows spawning futures that don't implement `Send`."],["Spawn","The `Spawn` trait allows for pushing futures onto an executor that will run them to completion."]]});