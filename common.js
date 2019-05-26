$(document).ready(function(){

    setInterval(function(){
        $(".container_img_position_itemFirst").addClass('animateImg');
        setInterval(function(){
        $(".container_img_position_itemFirst").removeClass('animateImg');
        }, 4000);
    }, 0000);
    setInterval(function(){
        $(".container_img_position_itemSecond").addClass('animateImg');
        setInterval(function(){
        $(".container_img_position_itemSecond").removeClass('animateImg');
        }, 4000);
    }, 2000);
    setInterval(function(){
        $(".container_img_position_itemLast").addClass('animateImg');
        setInterval(function(){
        $(".container_img_position_itemLast").removeClass('animateImg');
        }, 4000);
    }, 4000);


});
