

console.log("Hello World");

let song1=new Audio("Eredaze - Torn Apart (Audio)(MP3_320K).mp3");
let song2=new Audio("Egzod _ Maestro Chives - Royalty (ft. Neoni) (Wiguez _ Alltair Remix) [NCS Release](MP3_160K).mp3");
let song3=new Audio("TheFatRat - Unity(MP3_160K).mp3");
let song4=new Audio("Alan Walker - Faded(MP3_160K).mp3");
let song5=new Audio("Charlie Puth - Attention (Lyrics)(MP3_160K).mp3");
let song6=new Audio("Sam Smith _ Kim Petras - Unholy ( Lyrics) _ Creepin_ - Metro Boomin_ The Weeknd_ 21 Savage(MP3_160K).mp3");
let song7=new Audio("Coke Studio Season 9_ Afreen Afreen_ Rahat Fateh Ali Khan _ Momina Mustehsan(MP3_160K).mp3");

let masterPlay=document.getElementById('masterPlay');

let Aud1=new Audio("songs/Alan Walker - Alone (Lyrics)(MP3_160K).mp3");

let icon=document.getElementById("icon");

// icon.style.maskImage="./imgs/svgs/circle-pause-regular.svg";


function play(){
        if(Aud1.paused||Aud1.currentTime<=0){
                Aud1.play();               
        }else{
                Aud1.pause();
        }     
}


function sng1(){
        if(song1.paused||song1.currentTime<=0){
                song1.play();
        
        }else{
                song1.pause();
        }            
}

function sng2(){

        if(song2.paused||song2.currentTime<=0){
                song2.play();
        }else{
                song2.pause();
        }      
        // song2.play();
}

function sng3(){
        song3.play();
}

function sng4(){
        song4.play();
}

function sng5(){
        song5.play();
}

function sng6(){
        song6.play();
}

function sng7(){
        song7.play();
}


function toggleBar(){
        const search=document.querySelector(".search");
        search.classList.toggle("active");
}


function toggleHome(){
        const subHome=document.querySelector(".subHome");
        subHome.classList.toggle("active1");

}