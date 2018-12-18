function winOpen(){
    window.open("https://pp23-gestbook.firebaseapp.com","win","width:400,height:400,top:100,left:100")
}

// var now = 1 ;
// function ani(){$(".slide").delay(2000).animate({"left"})}

$(".slides").append($(".slide").eq(0).clone());
$(".slide").each(function(i){
    $(this).css({"left":(i*100)+"%"});
});

var num = 1;
var interval = setInterval(slideFn, 3000);
function slideFn() {
    $(".slides").stop().animate({"left":-(num*100)+"%"}, 500, function(){
        if(num == $(".slide").length - 1) {
            $(this).css({"left":0});
            num = 0;
        }
        num++;
    });
}
