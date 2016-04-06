//保证处理事件代码能在大多数浏览器下运行的对象方法
var EventUtil = {
    readyEvent:function(fn){
        if(fn==null){
            fn=document;
        }
        var oldonload=window.onload;
        if(typeof window.onload!=="function"){
            window.onload=fn;
        }else{
            window.onload=function(){
              oldonload();
              fn();
            };
        }
        
    },
    
    
    
    addHandler: function (element, type, handler) {
        if (element.addEventListener) { //DOM2级方法，事件处理程序按照添加顺序依次执行
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) { //ie中，<=ie8时事件处理程序会以相反顺序被触发
            element.attachEvent("on" + type, handler);
        } else { //DOM0级方法，只支持一个事件处理程序
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
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    },
    getButton:function(event){
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta:function(event){
        if(event.wheelDelta){
            return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
        }else{
            return -event.detail*40;
        }
    },
    getCharCode:function(event){
        if(typeof event.charCode== "number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    }

};