function openPage(el_id){
    let gridElement = document.getElementById("grid-container");
    let navElement = document.getElementById("nav");
    let mainBodyElement = document.getElementById("main");
    let contentElement = document.getElementById("content");
    let pageTitle = el_id.split("-")[1];
    let newContent = fetchContents(pageTitle);
    
    mainBodyElement.addEventListener('animationend', function() {
        if (mainBodyElement.classList.contains("anim_reload")){
            mainBodyElement.classList.remove("anim_reload");
            mainBodyElement.classList.add("anim_reloadFinish");
        }
        else{
            contentElement.innerHTML = newContent;
        }
    });

    if (gridElement.classList.contains("focus")){
        mainBodyElement.firstElementChild.style.display = "block";
        gridElement.classList.replace("focus", "defocus");
        navElement.removeChild(navElement.children[0]);
        contentElement.innerHTML = newContent;
    }
    else if (mainBodyElement.classList.contains("anim_reload") == false){
        mainBodyElement.classList.add("anim_reload");
    }

    if (mainBodyElement.classList.contains("anim_reloadFinish")){
        mainBodyElement.classList.remove("anim_reloadFinish");
    };
};