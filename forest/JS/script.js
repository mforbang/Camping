let scene, forest;
window.onload = function(){
    scene = document.querySelector("a-scene");
    forest = document.getElementById("tree");
    clone = forest.cloneNode(true);
    clone.setAttribute("position",{x:5,y:0,z:-5});
    scene.append(clone);
}