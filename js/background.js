$(document).ready(function () {
    setInterval("turnImgs()", 3000);
    cur_img = $("#background-div").children().length - 1;
});

function fadeIn(e) {
    e.className = "bg fadein";
};

function fadeOut(e) {
    e.className = "bg";
};

//图片轮播函数
function turnImgs() {
    var imgs = $("#background-div").children();
    if (cur_img == 0) {
        fadeOut(imgs[cur_img]);
        cur_img = imgs.length - 1;
        fadeIn(imgs[cur_img]);
    } else if (cur_img > 0) {
        fadeOut(imgs[cur_img]);
        fadeIn(imgs[cur_img - 1]);
        cur_img--;
    } else {
    }
}