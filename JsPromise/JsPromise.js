"use strict";
window.onload=function(){
    var val = 1;

// 我们假设step1, step2, step3都是ajax调用后端或者是
// 在Node.js上查询数据库的异步操作
// 每个步骤都有对应的失败和成功处理回调
// 需求是这样，step1、step2、step3必须按顺序执行
function step1(resolve, reject) {
    console.log('步骤一：执行');
    if (val >= 1) {
        resolve('Hello I am No.1');
    } else if (val === 0) {
        reject(val);
    }
}

function step2(resolve, reject) {
    console.log('步骤二：执行');
    if (val === 1) {
        resolve('Hello I am No.2');
    } else if (val === 0) {
        reject(val);
    }
}

function step3(resolve, reject) {
    console.log('步骤三：执行');
    if (val === 1) {
        resolve('Hello I am No.3');
    } else if (val === 0) {
        reject(val);
    }
}

new Promise(step1).then(function(val){
    console.info(val);
    return new Promise(step2);//返回一个新的Promise对象调用then函数传入下一步的事件处理函数
}).then(function(val){
    console.info(val);
    return new Promise(step3);
}).then(function(val){
    console.info(val);
    return val;
}).then(function(val){
    console.info(val);
    return val;
});
}

"use strict";
window.onload=function(){
 var p2 = new Promise(function(resolve, reject) {
  resolve(1);//resolve,reject就是两个回调函数，分别对应then中的两个函数
});
//在then方法中通常传递两个参数，一个 resolve 函数，一个 reject 函数。
//1.resolve 返回一个新 Promise，返回一个新Promise之后再调用的then就是新Promise中的逻辑了。
//2.resolve 返回一个值，返回一个值会传递到下一个then的resolve方法参数中。
p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value); // 2
});

        
}