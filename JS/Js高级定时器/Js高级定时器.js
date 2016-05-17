function anotherInterval(fn, interval) {
    setTimeout(function() {
        fn(); //这样可以保证每次执行都在函数执行完毕后，若没有执行完新的事件不会加入进程队列中。
        setTimeout(arguments.callee, interval);
    }, interval);
}

//不能使用argument.callee的情况下，用递归代替
function setTime(func, interval) {
    setTimeout(function() {
        func();
        setTime(func, interval);
    }, interval);
}
