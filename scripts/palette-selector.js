// set favicon for colors
// *
// *

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
    document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}



// check localstorage for theme
// *
// *

let getPalette = JSON.parse(localStorage.getItem("palette"));
console.log(getPalette);

if(getPalette === "magenta") {
    magenta();
}

if(getPalette === "blue") {
    blue();
}

if(getPalette === "yellow") {
    yellow();
}

if(getPalette === "red") {
    red();
}


// var color
var palette;

// magenta - palette selector
// *
// *

function magenta() {
    var element = document.body;

    // remove other classes
    if(element.classList.contains("red")) {
        element.classList.remove("red");
    } else if(element.classList.contains("yellow")) {
        element.classList.remove("yellow");
    } else if(element.classList.contains("blue")) {
        element.classList.remove("blue");
    }

    // add the class
    element.classList.add("magenta");

    // sets the palette if it contains the class for localStorage
    if(element.classList.contains("magenta")) {
        palette = "magenta";
    } 

    // save localstorage
    localStorage.setItem("palette", JSON.stringify(palette));

    // favicon save
    var favicon = "http://memento.today/assets/favicon.svg";
    changeFavicon('http://memento.today/assets/favicon.svg');
    localStorage.setItem("favicon", JSON.stringify(favicon));
}


// blue - palette selector
// *
// *

function blue() {
    var element = document.body;

    // remove other classes
    if(element.classList.contains("red")) {
        element.classList.remove("red");
    } else if(element.classList.contains("yellow")) {
        element.classList.remove("yellow");
    } else if(element.classList.contains("magenta")) {
        element.classList.remove("magenta");
    }

    // add the class
    element.classList.add("blue");

    // sets the palette if it contains the class for localStorage
    if(element.classList.contains("blue")) {
        palette = "blue";
    } 

    // save localstorage
    localStorage.setItem("palette", JSON.stringify(palette));

    // favicon save
    var favicon = "http://memento.today/assets/favicon-b.svg";
    changeFavicon('http://memento.today/assets/favicon-b.svg');
    localStorage.setItem("favicon", JSON.stringify(favicon));
}


// yellow - palette selector
// *
// *

function yellow() {
    var element = document.body;
    
    // remove other classes
    if(element.classList.contains("red")) {
        element.classList.remove("red");
    } else if(element.classList.contains("blue")) {
        element.classList.remove("blue");
    } else if(element.classList.contains("magenta")) {
        element.classList.remove("magenta");
    }

    // add the class
    element.classList.add("yellow");

    // sets the palette if it contains the class for localStorage
    if(element.classList.contains("yellow")) {
        palette = "yellow";
    } 

    // save localstorage
    localStorage.setItem("palette", JSON.stringify(palette));

    // favicon save
    var favicon = "http://memento.today/assets/favicon-y.svg";
    changeFavicon('http://memento.today/assets/favicon-y.svg');
    localStorage.setItem("favicon", JSON.stringify(favicon));
}


// red - palette selector
// *
// *

function red() {
    var element = document.body;
    
    // remove other classes
    if(element.classList.contains("yellow")) {
        element.classList.remove("yellow");
    } else if(element.classList.contains("blue")) {
        element.classList.remove("blue");
    } else if(element.classList.contains("magenta")) {
        element.classList.remove("magenta");
    }

    // add the class
    element.classList.add("red");

    // sets the palette if it contains the class for localStorage
    if(element.classList.contains("red")) {
        palette = "red";
    } 

    // save localstorage
    localStorage.setItem("palette", JSON.stringify(palette));


    // favicon save
    var favicon = "http://memento.today/assets/favicon-r.svg";
    changeFavicon('http://memento.today/assets/favicon-r.svg');
    localStorage.setItem("favicon", JSON.stringify(favicon));
}
