const footer = document.createElement('footer');
const footerStyle = document.createElement('link');

footerStyle.rel = 'stylesheet';
footerStyle.href = './static/lib/iconfont/iconfont.css';
document.head.appendChild(footerStyle)

var footer_html = '<div class="container d-flex flex-wrap text-white justify-content-between pt-3">';
footer_html += '<div><img class="lazyload" data-original="./static/imgs/logo-white.png" alt="" width="178px" /></div>';
footer_html += '<dl class="menus"><dt>产品中心</dt><dd><a href="./product_detail.html?id=civil">智能民用燃气表</a></dd>';
footer_html += '<dd><a href="./product_detail.html?id=commercial">智能工商业燃气表</a></dd><dd><a href="./product_detail.html?id=cloudServices">智慧云服务</a></dd>';
footer_html += '<dd><a href="./product_detail.html?id=bigData">燃气大数据</a></dd></dl>';
footer_html += '<dl class="menus"><dt>解决方案</dt><dd><a href="./solution_detail.html?id=e2e">智慧燃气端到端整体解决方案</a></dd>';
footer_html += '<dd><a href="./solution_detail.html?id=iot">NB-IoT智慧燃气解决方案</a></dd><dd><a href="./solution_detail.html?id=icCard">IC卡预付费智慧燃气解决方案</a></dd>';
footer_html += '<dd><a href="./solution_detail.html?id=gas">智慧燃气工商户解决方案</a></dd></dl>';

footer_html += '<div class="contact pt-1"><img class="lazyload" data-original="./static/imgs/qrcode.jpg" alt="" /><p class="text-center mb-0 mt-3">扫描关注二维码</p>';
footer_html += '<p class="text-center mb-0">获取更多信息</p></div>';

footer_html += '<div class="about pt-1"><dd><i class="iconfont icontelephone mr-2"></i>028-85247292</dd>';
footer_html += '<dd><i class="iconfont iconemail mr-2"></i>sales@cdzkhy.com</dd><dd class="d-flex"><i class="iconfont iconmap mr-2"></i>';
footer_html += '<p class="address">成都市高新区益州大道中段1858号<br />天府软件园G区7栋12层</p></dd></div></div>';
footer_html += '<div class="copyright text-center border-top border-secondary py-2">COPYRIGHT @ 2017 中科慧源 ALL RIGHTS RESERVED. 蜀ICP备17002467号</div>';

footer.innerHTML = footer_html;
document.body.appendChild(footer)