/**
 * Created by Administrator on 2017/7/2.
 */

function init() {
    setInterval("changeImg()", 1000);

    //设置显示广告图片的定时操作
    time = setInterval("shouAD()", 3000)
}
var i = 1;
function changeImg() {
    i++;
    document.getElementById("img1").src = "../img/" + i + ".jpg";
    if (i == 3) {
        i = 0;
    }
}

function shouAD() {
    var adEle = document.getElementById("img2");
    adEle.style.display = "block";
    clearInterval(time);
    time = setInterval("hiddenAd()", 3000);
}
function hiddenAd() {
    document.getElementById("img2").style.display = "none";
    clearInterval(time);
}
