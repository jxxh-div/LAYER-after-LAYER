
let artist_contents = [];
let artist_info = [];
let artist_contact = [];
let artist_main = [];
let random = [];
let r_index = 0;
//left,main,aside,right,name,mail,Thumnail,insta,twitter,상세페이지 이름.
//0   ,1   ,2    ,3    ,4   ,5   ,6       ,7    ,8      ,9
//01, 02, 03, 04 로 바꾸기
let root = "./img/artist/"
const artists = [
    [`${root}The71_01.png`,"./img/artist/The71_02.png","./img/artist/The71_03.png","./img/artist/The71_04.png","THE71_<br> 더기","dkbeam@naver.com","./img/Thumnail/THE71_Thumnail.png","https://www.instagram.com/the71_","https://twitter.com/the71__","THE71"],
    //더기
    ["./img/artist/GEETRUO_O_01.png","./img/artist/GEETRUO_O_02.png","./img/artist/GEETRUO_O_03.png","./img/artist/GEETRUO_O_04.png","GEETRUO_O<br>지트루","GEETRUO_O@naver.com","./img/Thumnail/Thumnail_geetruo_o.png","","","GEETRUO_O"],
    //지트루
    [`${root}heezey_01.png`,`${root}heezey_02.png`,`${root}heezey_03.png`,`${root}heezey_04.png`,"HEEZEY<br>히지","heezey.bae@gmail.com","./img/Thumnail/Thumnail_HEEZEY.png","https://www.instagram.com/xheezeyx","","HEEZEY"],
    //히지
    [`${root}dali_park_01.png`,`${root}dali_park_02.png`,`${root}dali_park_03.png`,`${root}dali_park_04.png`,"DALI-PARK<br>박달리","dali_park@naver.com ","./img/Thumnail/Thumnail__DALI-PARK.png","https://www.instagram.com/dali__park","","DALI-PARK"],
    //박달리
    [`${root}adhr_01.png`,`${root}adhr_02.png`,`${root}adhr_03.png`,`${root}adhr_04.png`,"ADHR<br>어도러블호러","blue_shower@naver.com","./img/Thumnail/Thumnail_ADHR.png","https://www.instagram.com/adorable_horror","https://twitter.com/acho_acho_","ADHR"],
    //어도러블호러
    [`${root}pumpum_01.png`,`${root}pumpum_02.png`,`${root}pumpum_03.png`,`${root}pumpum_04.png`,"pumpum<br>펌펌","pumypumy99@gmail.com","./img/Thumnail/Thumnail_pumpum.png","https://www.instagram.com/pumpum_rum_","https://twitter.com/pumpum_rum_","pumpum"],
    //펌펌
    [`${root}ohohaoho_01.png`,`${root}ohohaoho_02.png`,`${root}ohohaoho_03.png`,`${root}ohohaoho_04.png`,"ohohaoho<br>온 아나 아노","ohohaoho.official@gmail.com ","./img/Thumnail/Thumnail_ohohaoho.jpg","https://www.instagram.com/ohohaoho","","ohohaoho"],
    //온 아나 아노
    [`${root}mirai_01.png`,`${root}mirai_02.png`,`${root}mirai_03.png`,`${root}mirai_04.png`,"mirai.cool<br>미래의미래","mirainoe@naver.com","./img/Thumnail/Thumnail_mirai.jpg","https://www.instagram.com/mirai.cool","https://twitter.com/mirainoe ","미래의미래"],
    //미래
    [`${root}won_01.png`,`${root}won_02.png`,`${root}won_03.png`,`${root}won_04.png`,"won<br>원","940519__@hanmail.net","./img/Thumnail/Thumnail_won.png","https://www.instagram.com/44won44","https://twitter.com/44won44","won"],
    //원
    [`${root}yigyurae_01.png`,`${root}yigyurae_02.png`,`${root}yigyurae_03.png`,`${root}yigyurae_04.png`,"yigyurae<br>이겨레","gyurae@peachesoneuniverse.com","./img/Thumnail/Thumnail_yigyurae.jpg","https://www.instagram.com/yigyurae","","yigyurae"],
    //이겨레
    [`${root}ha_qn_01.png`,`${root}ha_qn_02.png`,`${root}ha_qn_03.png`,`${root}ha_qn_04.png`,"ha_qn<br>하균","desingerkim@naver.com","./img/Thumnail/Thumnail_HAKYUN.jpeg","https://www.instagram.com/ha_qn","","ha_qn"],
    //하균
    [`${root}ttissue_01.png`,`${root}ttissue_02.png`,`${root}ttissue_03.png`,`${root}ttissue_04.png`,"Ttissue<br>티슈","ttissue89@gmail.com","./img/Thumnail/Thumnail_ttissue.png","https://www.instagram.com/ttissue89","","Ttissue"],
    //티슈
    [`${root}plutoproject_01.png`,`${root}plutoproject_02.png`,`${root}plutoproject_03.png`,`${root}plutoproject_04.png`,"pluto project<br>플루토 프로젝트","tkfkd2865@naver.com","./img/Thumnail/Thumnail_pluto-project.jpeg","https://www.instagram.com/pluto.project","","pluto project"],
    //플루토
    [`${root}EIM_01.png`,`${root}EIM_02.png`,`${root}EIM_03.png`,`${root}EIM_04.png`,"EIM<br>준휘","june1ght6@gmail.com ","./img/Thumnail/Thumnail_EIM.png","https://www.instagram.com/ifeellikeim_alive","","EIM"],
    //준휘
    [`${root}0810.jpg_01.png`,`${root}0810.jpg_02.png`,`${root}0810.jpg_03.png`,`${root}0810.jpg_04.png`,"0810.jpg <br>지수","0810.jpg 96o81o@naver.com","./img/Thumnail/Thumnail_0810.jpg.jpg","https://www.instagram.com/_iggies_","","0810.jpg"],
    //지수
    [`${root}eun9ook_01.png`,`${root}eun9ook_02.png`,`${root}eun9ook_03.png`,`${root}eun9ook_04.png`,"en9ook<br>은국","199683@naver.com","./img/Thumnail/Thumnail_en9ook.png","https://www.instagram.com/eun9ook","","en9ook"],
    //은국
    ["./img/artist/lkl_01.png","./img/artist/lkl_02.png","./img/artist/lkl_03.png","./img/artist/lkl_04.png","live kyuseon lee<br>라큐리의 터세상","kyuseon_lee@naver.com ","./img/Thumnail/Thumnail_live-kyuseon-lee.jpeg","https://www.instagram.com/live_computer_center_lee","","라큐리의 컴퓨터세상"],
    //라큐리
    [`${root}waterwood_01.png`,`${root}waterwood_02.png`,`${root}waterwood_03.png`,`${root}waterwood_04.png`,"waterwood<br>수목","waterwood33@gmail.com ","./img/Thumnail/Thumnail_waterwood.png","https://www.instagram.com/_waterwood","","waterwood"],
    //수목
    
]
const save = [];
// function shuffleRandom(n){
//     var ar = new Array();
//     var temp;
//     var rnum;
   
//     //전달받은 매개변수 n만큼 배열 생성 ( 1~n )
//     for(var i=1; i<=n; i++){
//         ar.push(i);
//     }

//     //값을 서로 섞기
//     for(var i=0; i< ar.length ; i++)
//     {
//         rnum = Math.floor(Math.random() *n); //난수발생
//         temp = ar[i];
//         ar[i] = ar[rnum];
//         ar[rnum] = temp;
//     }

//     return ar;
// }
    function box(item){
        $(`#overlay`).fadeIn(300);
        if(item === 0 || item){
            artist_contents.push(`<div id="popup_contents">`);
                artist_contents.push(`<img id="popup_left"  src="${artists[item][0]}" />`);
                artist_contents.push(`<img id="popup_main" src="${artists[item][1]}" />`);
                artist_contents.push(`<img id="popup_aside"  src="${artists[item][2]}" />`);
                artist_contents.push(`<img id="popup_right" src="${artists[item][3]}" />`);

                artist_contents.push(`<div id="popup_info">`);
                    artist_contents.push(`<p>`+artists[item][9]+`</p>`);//상세페이지 이름.
                    artist_contents.push(`<a id="insta" href="${artists[item][7]}"><img src="./img/instagram.svg" alt="instargam link" /></a>`)
                    if(artists[item][8] !== ""){
                        artist_contents.push(`<a href="${artists[item][8]}"><img src="./img/twitter.svg" alt="twitter link" /></a>`)
                    }
                artist_contents.push(`</div>`);
    
                artist_contents.push(`<div id="popup_contact">`);
                    artist_contents.push(`<p id="p_email">`+artists[item][5]+`</p>`);//이메일
                artist_contents.push(`</div>`);

            artist_contents.push(`</div>`);  //**주의** </ div>라고쓰면 주석처리됨.

        }
            
            $('.popup_contents').html(artist_contents.join(''));
    };
$(document).ready(function() {
    // console.log(shuffleRandom(18))

    $.each(artists, function(index, item) {
        // console.log(artists[shuffleRandom(18)[index]][6]);
        artist_main.push(`
        <div class="box" id="box${item[index]}" onclick="box(${index})" >
            <div class="Thumbnail_name${item[index]}" id="Thumbnail_name">${item[4]}</div>
            <div id="Thumnail_img">
                <img src="${item[6]}" />
            </div>
        </div>`);
    });
    
    $('.wrapper').html(artist_main.join(''));

    $('#overlay').click(function() {
        $('#overlay').fadeOut(300);
        artist_contents.length = 0;
        artist_info.length = 0;
        artist_contact.length = 0;
    });

    $('#close').click(function() {
        $('#overlay').fadeOut(300);
        artist_contents.length = 0;
        artist_info.length = 0;
        artist_contact.length = 0;
    });


    for(let i =0; i<19; i++){
        $(`#box${i}`).hover(function(){
            $(`.Thumbnail_name${i}`).css({
                display:"block",
            },500);
        }, function(){
            $(`.Thumbnail_name${i}`).css({
                display:"none",
            }, 500);
        });
    }
});


