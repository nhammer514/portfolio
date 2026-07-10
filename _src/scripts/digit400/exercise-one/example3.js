function grabNumOfElement(tagName){
    let numOfElement = 0
    document.querySelectorAll(tagName).forEach( header => {
      numOfElement += 1;
    })
    alert("Number of " + tagName + " elements: " + numOfElement);
}