const green = document.getElementById("greennote");
const modal2 = document.getElementById("modal2");
const overlay1 = document.getElementById("overlay");
const close2 = document.getElementById("close2");




green.addEventListener("click", function() {
    modal2.classList.add("active");
    overlay1.classList.add("active");
});
close2.addEventListener("click", function() {
    modal2.classList.remove("active");
    overlay1.classList.remove("active");
});



const music = document.getElementById("musicnote");
const modal3 = document.getElementById("modal3");
const close3 = document.getElementById("close3");

const songs =[
{
    name: "Unloveable-Mild",
    audio: "1/Mild1.mp3"
},
{
    name: "เข้าใจเเต่ทําไม่ได้-Mild",
    audio: "1/Mild2.mp3" 
},
{
    name: "ผู้ป่วยความจําเสื่อม-Mild",
    audio:"1/Mild3.mp3"
},
{
    name: "สมมติฐาน(hypothesis)-Mild",
    audio: "1/Mild4.mp3"
},
{
    name: "อีกนานไหม-Mild",
    audio: "1/Mild5.mp3"
},
{
    name: "รักล้นใจ-Mild",
    audio: "1/Mild6.mp3"
},
];


music.addEventListener("click", function() {
    console.log("clicked");
    modal3.classList.add("active");
    overlay1.classList.add("active");
});
close3.addEventListener("click", function() {
    modal3.classList.remove("active");
    overlay1.classList.remove("active");
});

const songSlider = document.getElementById("slider-song");
const songName = document.getElementById("song-name");
const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");
const audio = document.createElement("audio");
let currentSongindex = 0;

function updateSong() {
    const song = songs[currentSongindex];
    songName.innerText = song.name;
    audio.src = song.audio;
    audio.onloadedmetadata = function() {
    songSlider.value = 0;
    songSlider.max = audio.duration;
    }
}

updateSong();

function moveSlider() {
    songSlider.value = audio.currentTime;
}


setInterval(moveSlider, 1000);


songSlider.addEventListener("change", function(){
    audio.currentTime = songSlider.value;
});



prevSongButton.addEventListener("click", function(){
    if(currentSongindex == 0){
        return;
    } else {
    currentSongindex--;
    updateSong();
}});
nextSongButton.addEventListener("click", function(){
    if(currentSongindex == songs.length - 1){
        return;
    } else {
    currentSongindex++;
    updateSong();
}});

playpauseButton.addEventListener("click", function(){
   if (!audio.paused){
    audio.pause();
   }
   else{
    audio.play();
   }
});
audio.addEventListener("ended", function(){
    currentSongindex++;
    updateSong();
    audio.play();
})

const result = document.getElementById("p67");
const answermusic2 = document.getElementById("music-random2");
const submitmusic = document.getElementById("submitmusic");

submitmusic.addEventListener("click", function(){

    if (answermusic2.checked){
        result.classList.remove("wrong");
        result.classList.add("right");
        result.innerHTML = "CORRECT!!";
    }else{
        result.classList.add("wrong");
        result.classList.remove("right");
        result.innerHTML = "WRONG!!";

    }
});

const red = document.getElementById("rednote")
const modalcard = document.getElementById("modalcard")
const closered = document.getElementById("closered")

red.addEventListener("click", function() {
    modalcard.classList.add("active");
    overlay1.classList.add("active");
});
closered.addEventListener("click", function() {
    modalcard.classList.remove("active");
    overlay1.classList.remove("active");
});

const card1 = document.getElementById("thecard1");
const card2 = document.getElementById("thecard2");
card1.addEventListener("click", function() {
    card1.classList.toggle("is-flipped");
});
card2.addEventListener("click", function() {
    card2.classList.toggle("is-flipped");
});

const blackcat = document.getElementById("blackcat");
const first = document.getElementById("first");
const OK = document.getElementById("OK");
blackcat.addEventListener("click", function(){
    first.classList.add("active");
    overlay1.classList.add("active");
});
OK.addEventListener("click", function(){
    first.classList.remove("active");
    overlay1.classList.remove("active");
});
 overlay1.classList.add("active");