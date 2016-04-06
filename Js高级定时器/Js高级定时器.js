function anotherInterval(fn,interval){
    setTimeout(function(){
      fn();//这样可以保证每次执行都在函数执行完毕后，若没有执行完新的事件不会加入进程队列中。
      setTimeout(arguments.callee,interval);
    },interval);
}

