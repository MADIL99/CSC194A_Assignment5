function helloAlert(){
    alert("Hello, world!");
    document.getElementById("textarea").style.fontSize = "24pt"; //do I make this 24pt or 4em?

}

function makeFancy(){
    alert("We're going to make this fancy!");
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
}

function stopFancy(){
    alert("We're going to NOT make this fancy!")
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";
}

function makeUpper(){
    var textarea = document.getElementById("textarea");
    //const button = document.getElementById("mooButton");

    //button.addEventListener('click', () => textarea.value = textarea.value.toUpperCase());

    textarea.value = textarea.value.toUpperCase();
}

function addMoo(){
    var str = document.getElementById("textarea").value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textarea").value = str;
}

function mooFunc(){
    makeUpper();
    addMoo();
}