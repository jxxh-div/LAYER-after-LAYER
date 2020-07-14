var speed = 700;    // 스크롤 스피드 수치로 사용할 변수    
function scrolling(obj){
    if (!obj){  // 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
        $('html, body').animate({scrollTop:0},speed);
    }else{
        var posTop = $(obj).offset().top;   // posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
        $('html, body').animate({scrollTop:posTop}, speed ) // body의 스크롤이동 : posTop
    }
};
let banner_conut = 2000;
let banner_speed = 20000;



$(document).ready(function() {
    let bannerLeft=0;
    let first=1;
    let last;
    let imgCnt=0;
    let $img = $("#banner_in div");
    let $first;
    let $last;


    $("ul li a").click(function(){  // 네비게이션 클릭시
        var direction = $(this).attr("href");   // direction = 클릭한 요소의 href 속성
        scrolling( direction ); // direction 을 인자로 함수 실행
        return false;   // 본래 이벤트 방지
    });

    $img.each(function(){ // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += 350
        $(this).attr("id", "banner"+(++imgCnt)); // img에 id 속성 추가
    });

    if( imgCnt > 5){                //배너 5개 이상이면 이동시킴
        last = imgCnt;

        setInterval(() => {

            $img.each(function(){
                $(this).css("left", $(this).position().left+10); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            
            // console.log($first.position().left)
            if($first.position().left > 1300) {   // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", 0);

                first++;
                last++;
                if(last > imgCnt) { last=1; }   
                if(first > imgCnt) { first=1; }
                // console.log(first)
                // console.log(last)
            }
        },50);

    }
    
    $('#overlay').click(function() {
        $('#overlay').fadeOut(300);
    });

    $('#close').click(function() {
        $('#overlay').fadeOut(300);
    });
});

function box(item){
    $('#overlay').fadeIn(300); 
};