function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") { //有点类似惰性函数，后面将赋值给这个activeXString
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR Object available");
    }
}




//最简单的get请求情况

var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful:" + xhr.status);
        }
    }
};
xhr.open("get", "example.txt", true); //true表示异步请求,false表同步，同步情况下不需要判定readyState
xhr.setRequestHeader("MyHeader", "MyValue"); //要设置的话必须在open之后，send之前
xhr.send(null); //必须传入

//xhr.abort();//取消异步请求

//有查询的GET请求
//常将查询字符串放在URL中
function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

var url = "example.txt";
url = addURLParam(url, "name", "David");
xhr.open("get", url, true);



//post请求
xhr.open("post", "example.txt", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
xhr.send(serialize(form));

//formdata不必设置请求头部，直接将表单数据发送出去,ie不支持
//1
var data = new FormData();
data.append("name", "David");
//2
var data = new FormData(document.forms[0]);
xhr.send(data);

//3
xhr.open("post", "example.txt", true);
var form = document.getElementById("user-info");
xhr.send(new FormData(form));



//超时设定，仅ie8支持
var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      try{
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            alert(xhr.responseText);
        }else{
            alert("Request was unsuccessful"+xhr.status);
        }
      }catch(ex){
          //假设
      }
    }
};

xhr.open("get","",true);
xhr.timeout=1000;//仅ie8支持
xhr.ontimeout=function(){
    alert();
}
xhr.send(null);


//通用超时
var xhr = new XMLHttpRequest (); 
xhr.onreadystatechange = function () {  
    if (this.readyState == 4) {  
        clearTimeout(timeout);  
        // do something with response data 
    }  
}  
var timeout = setTimeout( function () {  
    xhr.abort(); // call error callback  
}, 60*1000 /* timeout after a minute */ ); 
xhr.open('GET', url, true);  
xhr.send();
