var CookieUtil = {
    get: function getCookie(name) {
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
            arr = null;
        if (arr = document.cookie.match(reg)) {
            return decodeURIComponent(arr[2]); //RegExp.$2;
        } else {
            return null;
        }
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;

    },
    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }

}