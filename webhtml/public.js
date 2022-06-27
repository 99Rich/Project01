// 导航栏
window.onscroll=function(){
    // 获取滚动条滚动时距离顶部距离
    var juli=document.documentElement.scrollTop||document.body.scrollTop;

    var nav=document.querySelector(".nav");
    if(juli>=720){
        nav.style.backgroundColor="rgba(0, 0, 0, 0.726)";
    }
    else{
        nav.style.background="none"
    }
}


// 轮播图
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});



