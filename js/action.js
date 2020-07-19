var speed = 700;    // 스크롤 스피드 수치로 사용할 변수    
let banner_conut = 2000;
let banner_speed = 20000;

let bannerLeft=0;
let first=1;
let last;
let imgCnt=0;

// <div id="popup_contents">
    //     <div id="popup_left"></div>
    //     <div id="popup_main"></div>
    //     <div id="popup_aside"></div>
    //     <div id="popup_right"></div>
    // </div>
    // <div id="popup_info">
    //     <h3>artistName</h1>
    //     <img src="./img/instagram.png" alt="instargam tag" />
    //     <img src="img/twitter.png" alt="twitter tag" />
    // </div>
    // <div id="popup_contact">
    //     <h4>contact</h4>
    //     <p>dkbeam@naver.com</p>
    // </div>



$(document).ready(function() {
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

    if( imgCnt > 6){                //배너 6개 이상이면 이동시킴
        last = imgCnt;

        setInterval(() => {
            $img.each(function(){
                $(this).css("left", $(this).position().left+0.5); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);//1
            $last = $("#banner"+last);//6
            
            if($last.position().left > 2100) { 
                $last.css("left", -350);
                last--;
                first++;

                if(last < 2){last = 6}
                if(first > 5){first = 1}
            }
        });
    }


    $('#overlay').click(function() {
        $('#overlay').fadeOut(300);
    });

    $('#close').click(function() {
        $('#overlay').fadeOut(300);
    });

    $.getJSON('../LAL.json', function(data){
        let html = [];
        $.each(data, function(i, item) {
            // html.push('<div class="popup_contents">');
                html.push('<div id="popup_contents">');
                    html.push('<div >' + item.artist[0].left + '</div>');
                    html.push('<div >' + item.lastName[0].main + '</div>');
                    html.push('<div >' + item.lastName[0].aside + '</div>');
                    html.push('<div >' + item.lastName[0].right+ '</div>');
                html.push('</div>'); html.push('</div>');
            // html.push('</div>'); html.push('</div>');
       });
    });

    $('#artistJson').html(html.join(''));
    // menu_event();
});

function scrolling(obj){
    if (!obj){  // 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
        $('html, body').animate({scrollTop:0},speed);
    }else{
        var posTop = $(obj).offset().top;   // posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
        $('html, body').animate({scrollTop:posTop}, speed ) // body의 스크롤이동 : posTop
    }
};

function box(item){
    $('#overlay').fadeIn(300); 
    if(item === 1){
        console.log("item1")
    }else if(item === 2){  
        console.log("item2")
    }
};
// let menu_event = function(){
//     $('#main_menu li a').click(function(){
//         $('#listStyle').css("display","block");
//     })
// };