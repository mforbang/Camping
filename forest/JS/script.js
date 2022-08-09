let scene, tree, a;

// // animate fire.
window.onload = function(){

fire = document.querySelector("#fire");
scene = document.querySelector("#scene");
}

var fire = true;
$('#fire').click(function(e){
    if(fire)
        $(e.target).animate({width:'50px'}, 150, function(){
            //do stuff after animation
        });

    else
        $(e.target).animate({width:'280px'}, 150, function(){
            //do stuff after animation
        });
    fire=!fire;
});