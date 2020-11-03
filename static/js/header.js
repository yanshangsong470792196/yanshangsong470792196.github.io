const header = document.createElement('header');
const activeKey = document.body.getAttribute('nav');
const shortCut = document.createElement('link');
shortCut.rel = 'shortcut icon';
shortCut.href = './static/imgs/logo1.png';
document.head.appendChild(shortCut);
const data = [
    { key: 'index', href: './index.html', label: '首页' },
    { key: 'introduction', href: './introduction.html', label: '企业简介' },
    { key: 'solution', href: './solution.html', label: '解决方案' },
    { key: 'product', href: './product.html', label: '产品中心' },
    { key: 'news', href: './news.html', label: '新闻动态' },
    { key: 'contact', href: './contact.html', label: '联系我们' },
]
var header_html = '<a class="mr-4" href="./index.html"><img src="./static/imgs/logo.png" width="185px" alt="" /></a><ul class="nav">' + getNavs(data) + '</ul>'
header.innerHTML = header_html;

if (isChrome()) {
    document.body.append(header);
} else {
    var div = document.createElement('div')
    div.appendChild(header)
    copyNodes(document.body, div);
}

// handler
function getNavs(data) {
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<a class="nav-link ' + (activeKey == data[i].key ? 'active' : '') + '" href="' + data[i].href + '">' + data[i].label + '</a>'
    }
    return html
}

function copyNodes(nodeTo, nodeFrom) {
    if (!nodeTo || !nodeFrom)
        return;

    var ownerDoc = (nodeTo.nodeType == Node.DOCUMENT_NODE ? nodeTo : nodeTo.ownerDocument);
    var nodes = nodeFrom.childNodes;
    if (ownerDoc.importNode) {
        for (var i = 0; i < nodes.length; i++) {
            nodeTo.appendChild(ownerDoc.importNode(nodes[i], true));
        }
    } else {
        for (var i = 0; i < nodes.length; i++) {
            nodeTo.appendChild(nodes[i].cloneNode(true));
        }
    }
}

function isChrome() {
    return window.navigator.userAgent.indexOf("Chrome") > -1
}