function login() {
    document.writeln('<div class="ywtop"><div class="ywtop_con"><div class="ywtop_sethome"><a onclick="this.style.behavior=\'url(#default#homepage)\';this.setHomePage(\'https://www.beqege.com\');"  href="#">将本站设为首页</a></div>');
    document.writeln('<div class="ywtop_addfavorite"><a href="javascript:window.external.addFavorite(\'https://www.beqege.com\',\'笔趣阁_书友最值得收藏的网络小说阅读网\')">收藏笔趣阁</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=\"_blank\" href=\"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=beqegecom%40outlook.com\"><font color=\'red\'>联系我们</font></a></div>');
    document.writeln('<div class="nri">');
    var islogin = $.cookie('islogin') || 0;
    if (islogin) { document.write('<a href="/bookcase.php" target="_top">我的书架</a> | <a href="/logout.php" target="_self">退出登录</a>'); } else { document.write('<form name="mylogin" id="mylogin" method="post" action="/login.php"><div class="cc"><div class="txt">账号：</div><div class="inp"><input type="text" name="uname" id="username"></div></div><div class="cc"><div class="txt">密码：</div><div class="inp"><input type="password" name="pass" id="password"></div></div><div class="frii"><input type="hidden" name="action" value="login"><input type="submit" name="submit" class="int" value="登陆"></div><div class="ccc"><div class="txtt"></div><div class="txtt"><a href="/register.php">用户注册</a></div></div></form>'); }
    document.writeln('</div></div></div>');
}
function panel() { document.writeln("<form action=\"/search.php\" name=\"form\" id=\"sform\" method=\"post\">"); document.writeln("  <div class=\"search\">"); document.writeln("      <input name=\"keyword\" id=\"keyword\" type=\"text\" class=\"input\" value=\"输入需要搜索的小说\" onblur=\"if (value ==\'\'){value=\'输入需要搜索的小说\'}\" onfocus=\"if (value ==\'输入需要搜索的小说\'){value =\'\'}\" id=\"wd\"/><span class=\"s_btn\"><input type=\"button\" value=\" 搜 索 \" class=\"button\" onClick=\"window.location='/search.php?keyword='+encodeURI($('#keyword').val());\"></span>"); document.writeln("  </div>"); document.writeln("</form>"); }
function baidu(data) { var li = new Array(); $.each(data.s, function (idx, keyword) { li.push("<li>" + keyword + '</li>'); }); $('#oul').html(li.join('')); $('#bot_box').show(); }
$(function () {
    $('#keyword').keyup(function () {
        if ($(this).val() == '') { $('#bot_box').hide(); } else {
            var oScript = document.createElement('script'); oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + $(this).val() + '&cb=baidu'
            document.body.appendChild(oScript); oScript.remove();
        }
    });
    $('#oul').delegate('li', 'click', function () {
        $('#keyword').val($(this).text()); $('#bot_box').hide();
    });
}); function footer() {
    document.writeln('<p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>');
    document.writeln('<p>Copyright © 2015 笔趣阁 All Rights Reserved.</p>');
    document.writeln("<p><a href='/sitemap/1.html'>网站地图</a></p>")
    var indexUrl = $("head>meta[property='og:url']").attr('content') || '';
    if (indexUrl) {
        var bookid = indexUrl.match(/\/([0-9]+)\/$/)[1] || 0;
        (function () {
            var hm = document.createElement("script"); hm.src = "/modules/article/stat.php?action=visit&bookid=" + bookid;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
}
function addBookCase(bookid) { var url = "/bookcase.php"; var target = url + '?action=addbook&bookid=' + bookid; $.get(target, function () { location.href = url; }); }
function addBookMark(bookid, chapterid, chaptername) { var url = "/bookcase.php"; var target = url + '?action=bookmark'; $.get(target, { bookid, chapterid, chaptername }, function () { location.href = url; }); }
function listindex1() { document.writeln('listindex1'); }
function listindex2() { document.writeln('listindex2'); }
function listindex3() { document.writeln('listindex3'); }
function read1() { document.writeln("<div style=\"text-align:center;margin:10px 0;\" >"); document.writeln('read1'); document.writeln('</div>'); }
function read2() { document.writeln('<div class="con_ad">'); document.writeln('<div class="ad_1">'); document.write('ad_1'); document.writeln('</div>'); document.writeln('<div class="ad_2">'); document.write('ad_2'); document.writeln('</div>'); document.writeln('<div class="ad_3">'); document.write('ad_3'); document.writeln('</div>'); document.writeln('</div>'); }
function read3() { document.writeln("<div style=\"text-align:center;margin:10px 0;\" >"); document.writeln('read3'); document.writeln('</div>'); }
function read4() { document.writeln("<div style=\"text-align:center;margin:10px 0;\" >"); document.writeln('read4'); document.writeln('</div>'); }
$(document).ready(function (e) { $('.publish').on('click', function () { var target = '/feedback.php?message=' + encodeURI($(this).attr('message')); $.get(target, function () { console.log('Success!'); }); }); }); (function () {
    var bp = document.createElement('script'); var curProtocol = window.location.protocol.split(':')[0]; if (curProtocol === 'https') { bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'; }
    else { bp.src = 'http://push.zhanzhang.baidu.com/push.js'; }
    var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(bp, s);
})();