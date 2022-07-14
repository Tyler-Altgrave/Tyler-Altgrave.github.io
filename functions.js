function getElementByText(tag, text) {
    var divs = document.querySelectorAll(tag), i;
    for (i = 0; i < divs.length; ++i) {
        if(divs[i].textContent.includes(text)){
            console.log(divs[i])
        }
    }
}

function removeElementByText(tag, text) {
    var divs = document.querySelectorAll(tag), i;
    for (i = 0; i < divs.length; ++i) {
        if(divs[i].textContent.includes(text)){
            divs[i].remove()
        }
    }
}

function getClosestParentToElementByText(tag, text, parent) {
    var divs = document.querySelectorAll(tag), i;
    for (i = 0; i < divs.length; ++i) {
        if(divs[i].textContent.includes(text)){
            console.log(divs[i].closest(parent))
        }
    }
}

function removeClosestParentToElementByText(tag, text, parent) {
    var divs = document.querySelectorAll(tag), i;
    for (i = 0; i < divs.length; ++i) {
        if(divs[i].textContent.includes(text)){
            divs[i].closest(parent).remove()
        }
    }
}