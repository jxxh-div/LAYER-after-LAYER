var speed = 700;    // 스크롤 스피드 수치로 사용할 변수    
let banner_conut = 2000;
let banner_speed = 20000;

let bannerLeft=0;
let first=1;
let last;
let imgCnt=0;
let toggle = 0;
let rotateNumber = 0;
let rotateNumber2 = 0;
//0 left, 1 main, 2 aside, 3right, 4name, 5contact
const time = 500;
const menuSpeed = 200;
const m_menuSpeed = 300;
function mobileMenu(){
    
        $("#mo_menu").on('click',function(){
            if (toggle == 0){
                toggle = 1;
                $("#m1").animate({
                    marginTop:"18px",
                },m_menuSpeed,function(){
                    if(rotateNumber === 0){
                        $(this).toggleClass('rotate_m1');
                        ++rotateNumber;
                    }else{
                        $(this).toggleClass('rotate_m1 rotate_m1_to');
                    }
                });

                $("#m2").animate({
                    marginTop:"-4px",
                    marginBottom:"-12px",
                },m_menuSpeed,function(){
                    if(rotateNumber2 === 0){
                        $(this).toggleClass('rotate_m2');
                        ++rotateNumber2;
                    }else{
                        $(this).toggleClass('rotate_m2 rotate_m2_to');
                    }
                    $("#main_menu").fadeIn(menuSpeed);
                });

                $("#m3").fadeOut(menuSpeed);

            } else{
                toggle = 0;
                $("#main_menu").fadeOut(m_menuSpeed,function(){
                    $("#m1").toggleClass("rotate_m1 rotate_m1_to");
                    $("#m2").toggleClass("rotate_m2 rotate_m2_to");
                });
                
                $("#m3").delay(m_menuSpeed).fadeIn(menuSpeed);

                $("#m1").delay(m_menuSpeed).animate({
                    marginTop:"8px",
                },m_menuSpeed);

                $("#m2").delay(m_menuSpeed).animate({
                    marginTop:"8px",
                    marginBottom:"0px",
                },m_menuSpeed);
                
            }
        });

    
}
$(document).ready(function() {
    loading1();

    mobileMenu();

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
    $("#loading_L1").animate({
        top:"50%",
    },300, function() {
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
    $("#loading_L2").animate({
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
      $("#loading_A").animate({
        top:"50%",
    },400, function() {
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
    $("#loading_x").animate({
        top:"50%",
    },600, function() {
        $( this ).animate( {
        top:"48%",
        left:"41%",
        //paddingTop:"10px"
        }, 50, function() {
            $( this ).animate( {
            top:"50%",
            left:"42%",
            //paddingTop:"0px"
            }, 50 );
          });
      });
      $("#loading_o").animate({
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
    $("#loading_l").animate({
        top:"50%",
    },200, function() {
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
      $("#loading_tw").animate({
        top:"50%",
    },600, function() {
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