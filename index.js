var num = document.querySelectorAll("button").length;
for(var i=0; i<num; i++)
{
        document.querySelectorAll(".drum")[i].addEventListener("click", function()
        {
            var clicked = this.textContent;
            play(clicked);
            animation(clicked);
        });
}

document.addEventListener("keydown", function(Event)
{
    play(Event.key)
    animation(Event.key);
});

function animation(key)
{
    var classOfKeyPressed = document.querySelector("." + key);
    classOfKeyPressed.classList.add("pressed");
    setTimeout(function()
    {
        classOfKeyPressed.classList.remove("pressed");
    }, 100);
}

function play(key)
{
    switch(key)
    {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;       
                
    }
}