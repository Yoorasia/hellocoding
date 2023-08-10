$(".tab_menu>li>a").click(function(){
    $(this).parent().addClass('tab_on').siblings().removeClass('tab_on');
    //모던 자바: (서버 통신 되어지는 것까지 고려)이벤트 버블 방지책
    //일반 자바: false, true << 논리값 반환
    return false;
});