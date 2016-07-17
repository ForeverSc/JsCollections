var fileObj=document.getElementById('file').files[0];//先获取fileObj 
var formData=new FormData();//必须自己新建一个FormData，用来存放fileObj
formData.append('file',fileObj);//调用append方法
$.ajax({});//ajax请求，直接发送

//fileObj.size,fileObj.type可用来判定文件大小和类型 size<10*1024*1024