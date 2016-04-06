function getQueryStringArgs(){
            //取得查询字符串并去掉开头的问号
        var qs=(location.search.length>0?location.search.substring(1),""),//注意检测是否为空
            //保存数据对象
            args={},
            //取得每一项
            items=qs.length?qs.split("&"):[],//注意检测是否为空
            item=null,
            name=null,
            value=null,
            i=0,
            len=items.length;
        for(i=0;i<len;i++){
            item=items[i].split("=");
            name=decodeURIComponent(item[0]);//注意decodeURIComponent
            value=decodeURIComponent(item[1]);//注意decodeURIComponent
            if(name.length){
                args[name]=value;
            }
        }
        return args;
    }