console.log("js running");
var classDiv = document.getElementsByClassName('keys');
// console.log(classDiv[0]);
// console.log(classDiv[0].classList);
//classDiv[0].classList.add('keychange');
// classDiv[0].classList.remove('keys');
// console.log(classDiv[0].classList);
('keychange');
document.body.addEventListener('keydown',function(e){
    var keyCode =e.key;
    keyCode=keyCode.toLowerCase();
    console.log(keyCode);
    sounds(keyCode);
    
});
function sounds(keyCode){
    switch(keyCode){
        case "a":
            var clap = new Audio('New folder/clap.wav');
            clap.play();
            myfuntion(0);
        break;
        case "s":
            var hihat = new Audio('New folder/hihat.wav');
            hihat.play();
            myfuntion(1);
        break;
        case "d":
            var kick = new Audio('New folder/kick.wav');
            kick.play();
            myfuntion(2);
        break;
        case "f":
            var openhat = new Audio('New folder/openhat.wav');
            openhat.play();
            myfuntion(3);
        break;
        case "g":
            var boom = new Audio('New folder/boom.wav');
            boom.play();
            myfuntion(4);
        break;
        case "h":
            var ride = new Audio('New folder/ride.wav');
            ride.play();
            myfuntion(5);
        break;
        case "j":
            var snare = new Audio('New folder/snare.wav');
            snare.play();
            myfuntion(6);
        break;
        case "k":
            var tom = new Audio('New folder/tom.wav');
            tom.play();
            myfuntion(7);
        break;
        case "l":
            var tink = new Audio('New folder/tink.wav');
            tink.play();
            myfuntion(8);
        break;
        default:
    }
}

function myfuntion(a){
            classDiv[a].classList.add('keychange');
            setTimeout(function(){
            classDiv[a].classList.remove('keychange');
},200);
}