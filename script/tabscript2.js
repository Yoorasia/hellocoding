start(); //메서드화 되어버린...그는 함수!!!
var imgs = 2;
var now = 0;

//html 페이지가 떴을 때, 같이 로드되는 녀석
function start(){
    $('.imgs > img').eq(0).siblings().css({"opacity":"0"});
    setInterval(function(){
        slider();
    }, 3000);
}

//슬라이더 디자인 함수 작업 = 이미지 전환 방식 설정
function slider(){
    var next = (now + 1) % imgs;//1개 추가 (나눗셈 과 나머지)

    $('.imgs > img').eq(now).animate({"opacity":0}, 1000); 
    $('.imgs > img').eq(next).css({"opacity":1});

    //구문 업데이트
    now = next; //2개째 추가된
}