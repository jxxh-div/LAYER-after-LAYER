
let artist_contents = [];
let artist_info = [];
let artist_contact = [];
let artist_main = [];
//left,main,aside,right,name,mail,Thumnail,insta,twitter
//0   ,1   ,2    ,3    ,4   ,5   ,6       ,7    ,8
const artists = [
    ["./img/artist/The71_left.png","./img/artist/The71_main.png","./img/artist/The71_aside.png","./img/artist/The71_right.png","The71_","dkbeam@naver.com","./img/Thumnail/THE71_Thumnail.png","",""],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com","./img/Thumnail/Thumnail_geetruo_o.png","",""],
    ["","","","","","","./img/Thumnail/Thumnail_HEEZEY.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail__DALI-PARK.png",""],
    ["","","","","","","./img/Thumnail/Thumnail_ADHR.png",""],
    ["","","","","","","./img/Thumnail/Thumnail_pumpum.png",""],
    ["","","","","","","./img/Thumnail/Thumnail_ohohaoho.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_미래의미래.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_won.png",""],
    ["","","","","","","./img/Thumnail/Thumnail_yigyurae.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_HAKYUN.jpeg",""],
    ["","","","","","","./img/Thumnail/Thumnail_ttissue.png",""],
    ["","","","","","","./img/Thumnail/Thumnail_pluto-project.jpeg",""],
    ["","","","","","","./img/Thumnail/Thumnail_EIM.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_0810.jpg.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_en9ook.jpg",""],
    ["","","","","","","./img/Thumnail/Thumnail_live-kyuseon-lee_라큐리.jpeg",""],
    ["","","","","","","./img/Thumnail/Thumnail_waterwood_수목.png",""],
    
]
const save = [];
    function box(item){
        console.log(artists[item][0])
        $(`#overlay`).fadeIn(300);
        if(item === 0 || item){
            artist_contents.push(`<div id="popup_contents">`);
                artist_contents.push(`<img id="popup_left"  src="${artists[item][0]}" />`);
                artist_contents.push(`<img id="popup_main" src="${artists[item][1]}" />`);
                artist_contents.push(`<img id="popup_aside"  src="${artists[item][2]}" />`);
                artist_contents.push(`<img id="popup_right" src="${artists[item][3]}" />`);

                artist_contents.push(`<div id="popup_info">`);
                    artist_contents.push(`<h3>`+artists[item][4]+`</h3>`);
                    artist_contents.push(`<a href="${artists[item][6]}"><img src="./img/instagram.svg" alt="instargam link" /></a>`)
                    artist_contents.push(`<a href="${artists[item][7]}"><img src="./img/twitter.svg" alt="twitter link" /></a>`)
                artist_contents.push(`</div>`);
    
                artist_contents.push(`<div id="popup_contact">`);
                    artist_contents.push(`<h4>CONTACT</h4>`);
                    artist_contents.push(`<p>`+artists[item][5]+`</p>`);
                artist_contents.push(`</div>`);

            artist_contents.push(`</div>`);  //**주의** </ div>라고쓰면 주석처리됨.


        }
            
            $('#popup_contents').html(artist_contents.join(''));
    };

$(document).ready(function() {

    $.each(artists, function(index, item) {
        artist_main.push(`
        <div class="box" onclick="box(${index})" >
            <div>
                <img src="${item[6]}" />
                <h1 id="Thumbnail_name">${item[4]}<h1>
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
    $('.box').hover(function(){
        $('#Thumbnail_name').animate({
            display:"block",
        },500);

        $(this).animate({
            backgroundColor: "#0000000",
            opacity:"0.5",
        },500);
    }, function(){
        $(this).animate({
            backgroundColor: "",
            opacity:"1",
        });
    });
   
});


