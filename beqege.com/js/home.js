function showlogin() {
    var user_login_status = $.cookie('islogin') || 0;
    if (user_login_status == 1) { document.write('<div id="login_top"><a class="login_topbtn c_index_login" href="/bookcase.php">我的书架</a></div>'); } else { document.write('<div id="login_top"><a class="login_topbtn c_index_login" href="/login.php">登录</a><a href="/register.php" class="login_topbtn c_index_login">注册</a></div>'); }
}
function search() {
    document.writeln("<form class=\'searchForm\' method=\'post\' action=\'/search.php\'>");
    document.writeln("  <input type=\'text\' id=\'keyword\' name=\'keyword\' autocomplete=\"off\" class=\'searchForm_input\' placeholder=\'输入书名•作者\' />");
    document.writeln("  <span class=\'serach_span\'><span class=\'s_submitbtn\'>搜索</span></span>"); document.writeln("  <div class=\'searchTarge\'>");
    document.writeln('      <div class="bqqsug"> <ul class="auto"></ul> </div>'); document.writeln("  </div>"); document.writeln("</form> ");
}
function count() { }
function CloseDiv() { document.getElementById('ljPz').style.display = 'none'; document.cookie = 'isClose'; }
window.onload = function () { var arrStr = document.cookie; if (arrStr.indexOf("isClose") > -1) { CloseDiv(); } }
function listindex1() { document.writeln('<div class="read-block">listindex1</div>') }
function listindex2() { document.writeln('<div class="read-block">listindex2</div>') }
function listindex3() { document.writeln('<div class="read-block">listindex3</div>') }
function read1() { document.writeln('<div class="read-block">read1</div>') }
function read2() { document.writeln('<div class="read-block">read2</div>') }
function read3() { }
function read4() { }
function baidu(data) { var li = new Array(); $.each(data.s, function (idx, keyword) { li.push("<li>" + keyword + '</li>'); }); $('.auto').html(li.join('')); $('.searchTarge').show(); }
$(function () {
    $('#keyword').keyup(function () {
        if ($(this).val() == '') { $('.searchTarge').hide(); } else {
            var oScript = document.createElement('script'); oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + $(this).val() + '&cb=baidu'
            document.body.appendChild(oScript);
            oScript.remove();
        }
    });
    $('.auto').delegate('li', 'click', function () { $('#keyword').val($(this).text()); $('.searchTarge').hide(); });
    $('.publish').on('click', function () {
        var target = '/feedback.php?message=' + encodeURI($(this).attr('message'));
        $.get(target, function () { console.log('Success!'); });
    });
});; (function () {
    var bp = document.createElement('script'); var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') { bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'; }
    else { bp.src = 'http://push.zhanzhang.baidu.com/push.js'; }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();