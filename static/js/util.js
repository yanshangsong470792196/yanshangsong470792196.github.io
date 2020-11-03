//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function loadImage(url, callback) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.onload = function() {
        img.onload = null;
        callback && callback(img);
    };
    img.src = url;
}
// 基于loadImage
function preloadImage(data) {
    for (var i = 0; i < data.length; i++) {
        loadImage(data[i].imgUrl, (typeof(data[i].callback) == 'function') && data[i].callback)
    }
}