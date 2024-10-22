window.addEventListener('DOMContentLoaded',init,false);
function init(){
    const exampleButton = document.getElementById('testExample');
    exampleButton.addEventListener('click',buttonClicked,false);
}
function buttonClicked(){
    alert("You clicked me!")
}