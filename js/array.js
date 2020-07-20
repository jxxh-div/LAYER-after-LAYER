
let artist_contents = [];
let artist_info = [];
let artist_contact = [];
let artist_main = [];

const artists = [
    ["./img/artist/The71_left.png","./img/artist/The71_main.png","./img/artist/The71_aside.png","./img/artist/The71_right.png","The71_","dkbeam@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"],
    ["./img/artist/GEETRUO_O2_left.png","./img/artist/GEETRUO_O2_main.png","./img/artist/GEETRUO_O2_aside.png","./img/artist/GEETRUO_O2_right.png","GEETRUO_O2","GEETRUO_O2@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"],
    ["./img/artist/GEETRUO_O_left.png","./img/artist/GEETRUO_O_main.png","./img/artist/GEETRUO_O_aside.png","./img/artist/GEETRUO_O_right.png","GEETRUO_O","GEETRUO_O@naver.com"]
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
                    artist_contents.push(`<a href=""><img src="./img/instagram.png" alt="instargam link" /></a>`)
                    artist_contents.push(`<a href=""><img src="./img/twitter.png" alt="twitter link" /></a>`)
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
        artist_main.push(`<div class="box" onclick="box(${index})" ><img src="${item[0]}" /></div>`);           
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
   
});


