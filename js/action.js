var speed = 700;    // 스크롤 스피드 수치로 사용할 변수    
let banner_conut = 2000;
let banner_speed = 20000;

let bannerLeft=0;
let first=1;
let last;
let imgCnt=0;
//0 left, 1 main, 2 aside, 3right, 4name, 5contact
const time = 500;

$(document).ready(function() {
    loading1();
    //     $("#loading_page2").animate({
    //         top:"50%",
    //     },500, function() {
    //         $( this ).animate( {
    //         top:"49%",
    //         //paddingTop:"10px"
    //         }, 50, function() {
    //             $( this ).animate( {
    //             top:"50%",
    //             //paddingTop:"0px"
    //             }, 50 );
    //           });
    //       });

    $(".loading").click(function(){
        $(this).animate({
            marginLeft:"100%",
          }, 500);
    })

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

    if( imgCnt > 5){                //배너 6개 이상이면 이동시킴
        last = imgCnt;

        setInterval(() => {

            $img.each(function(){
                $(this).css("left", $(this).position().left+0.5); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);//1
            $last = $("#banner"+last);//6

            if($last.position().left > 2450) { 
                $last.css("left", -350);
                last--;
                first++;

                if(last < 1){last = 8}
                if(first > 7){first = 1}
            }
        });
    }
});

function scrolling(obj){
    if (!obj){  // 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
        $('html, body').animate({scrollTop:0},speed);
    }else{
        var posTop = $(obj).offset().top;   // posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
        $('html, body').animate({scrollTop:posTop}, speed ) // body의 스크롤이동 : posTop
    }
};

const loading1 = () =>{
    $("#loading_page").animate({
        top:"50%",
    },500, function() {
        $( this ).animate( {
        top:"49%",
        //paddingTop:"10px"
        }, 50, function() {
            $( this ).animate( {
            top:"50%",
            //paddingTop:"0px"
            }, 50 );
          });
      });
}