$(document).ready(function () {
    setTimeout(() => {
        showFirst();
        $(".alert-button-confirm").click(function () {
            dismiss();
        });
    }, 2000);

    audioAutoPlay("bg-audio");
});

function confirm(title, message, image, confirmText, cancelText, confirm, cancel) {
    var html = '<div class="alert-div"><div class="alert-main-div"><div class="alert-title">' + title + '</div><div class="alert-message">' + message + '</div><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button><button type="button" class="alert-button-cancel">' + cancelText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
    $(".alert-button-cancel").click(function () {
        dismiss(cancel);
    });
}

function confirmWithoutTitle(message, image, confirmText, cancelText, confirm, cancel) {
    var html = '<div class="alert-div"><div class="alert-main-div"><br><div class="alert-message">' + message + '</div><br><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button><button type="button" class="alert-button-cancel">' + cancelText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
    $(".alert-button-cancel").click(function () {
        dismiss(cancel);
    });
}

function alertWithoutTitle(message, image, confirmText, confirm) {
    var html = '<div class="alert-div"><div class="alert-main-div"><br><div class="alert-message">' + message + '</div><br><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
}

function show() {
    $(".alert-div").animate({
        opacity: '1',
        top: '80px',
    }, 200, function () {
        // $(".main-div").css('background', "#AAAAAA");
    });
}

function dismiss(callback) {
    // $(".main-div").css('animation', 'color-dismiss 0.1s')
    // $(".main-div").css('-webkit-animation', 'color-dismiss 0.1s')
    $(".alert-div").animate({
        opacity: '0',
    }, 100, function () {
        // $(".main-div").css('background', "#FFFFFF");
        $(".alert-div").remove();
        callback();
    });
}

function showFirst() {
    confirm("XX小姐姐！", "我中意你啊，做我女朋友好么？", "兴奋.gif", '我答应！', '我拒绝！', function () {
        showAgree()
    }, function () {
        showSecond();
    });
}

function showAgree() {
    confirmWithoutTitle("真的么？好嗨森啊~~明天咱们去领证吧！", "嗨森.gif", "好的！", "妈的智障！", function () {
        showResult("从此两个人过上了没羞没躁的生活", "舔舔.gif")
    }, function () {
        showDisagree();
    })
}

function showDisagree() {
    showResult("人生为何如此的艰难...", "求不骗.gif")
}

function showResult(message, image) {
    var html = '<br><br><br><h2 style="text-align: center">' + message + '</h2><br><div style="width: 100%; height: 260px;"><img src="img/' + image + '" style="height: 260px; margin: auto; position: absolute; left: 0px; right: 0px"></div><br><div style="text-align: center"><button type="button" class="alert-button-restart">重新开始</button></div>';
    $(".main-div").html(html);
    $(".alert-button-restart").click(function () {
        restart();
    })
}

function restart() {
    showFirst();
}

function showSecond() {
    alertWithoutTitle("别酱......再考虑考虑呗......", "吐血.gif", "好的", function() {
        showThird();
    })
}


function showThird() {
    confirmWithoutTitle('房产证写你的名字！<br>我妈会游泳！<br>生孩子保大，男女都行！<br>银行卡归你管！<br>我会做家务，做饭！<br>不抽烟不喝酒不赌博！<br>宠你，不凶你！<br>至始至终守护你！<br>......<br>真的不再考虑考虑么？', '献花.gif', '欣然接受！', '继续拒绝！', function () {
        showAgree();
    }, function () {
        showFourth()
    })
}

function showFourth() {
    alertWithoutTitle('我知道，你喜欢吃橙子、车厘子<br>喜欢喝奈雪の茶、梨山、六个核桃<br>喜欢吃椰子鸡、真功夫、汉堡王<br>不喜欢甜食、肥肉，不吃葱<br>吃蛋不吃蛋黄，苹果要榨汁<br>我对你的每一句话奉若圣旨<br>记在脑里，放在心上', '好看.gif', '继续', function () {
        showFifth();
    })
}

function showFifth() {
    confirmWithoutTitle('我中意的不只是你的颜值，也欣赏你的孝顺和努力<br>我们年龄相配，生肖相合，地域相符<br>如此天作之合，你真的忍心拒绝吗？', '泪流满面.gif', "看你这么诚心诚意，我就勉强接受吧！", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还是残忍拒绝！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", function () {
        showAgree();
    }, function () {
        showDisagree();
    })
}

function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
        audio.play();
    }, false);
}