function openPanel(){
    let gridElement = document.getElementById("grid-container");
    let mainBodyElement = document.getElementById("main");
    var keyframeTime = 0;

    if (gridElement.classList.contains("focus")){
        mainBodyElement.firstElementChild.style.display = "block";
        gridElement.classList.replace("focus", "defocus");
    }
    else if (mainBodyElement.classList.contains("anim_reload") == false){
        mainBodyElement.classList.add("anim_reload");
    };

    mainBodyElement.addEventListener('animationend', function() {
        mainBodyElement.classList.remove("anim_reload");
    })
}