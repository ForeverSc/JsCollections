
//IE9+及其他浏览器
var parser=new DOMParser();
var xmldom=parser.parseFromString("<root><child/></root>",text/xml);

xmldom.documentElement.tagName;
xmldom.documentElement.firstChild.tagName;





//IE8及其以下
function createDocument() {
    if (typeof arguments.callee.activeXString != "string") {
        var version = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0", "MSXML2.0.DOMDocument"],
            i, len;
        for (i = 0, len = version.length; i < len; i++) {
            try {
                new ActiveXObject(version[i]);
                arguments.callee.activeXString = version[i];
                break;
            } catch (ex) {

            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}

var xmldom = createDocument();
xmldom.loadXML("<root><child/></root>");
alert(xmldom.documentElement.tagName);