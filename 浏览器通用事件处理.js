//保证处理事件代码能在大多数浏览器下运行的对象方法
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {//DOM2级方法，事件处理程序按照添加顺序依次执行
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {//ie中，<=ie8时事件处理程序会以相反顺序被触发
            element.attachEvent("on" + type, handler);
        } else {//DOM0级方法，只支持一个事件处理程序
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget: function(event){
        return event.target||event.srcElement;
    },
    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
    
};