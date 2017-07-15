/*
感謝您觀看這份程式碼
作品名稱: Timer
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2017/7/15
版本: 1.0.0.6
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var label1; // (Label)
var button1; // (Button)
var textBox1; // (textarea)
var timers = []; // (Timer array)
var audio = [];  // audios played when time's up (Audio array)
var numAudio = 125; // number of audio files (integer)
var button2; // add timer (Button)
var musicPlaying = false; // a music is being played in this page (boolean)
var musicNumber = 0; // debug use only (integer)

/* p5 functions */
function setup(){
    

    label1 = document.createElement("label");
    document.body.appendChild(label1);
    label1.innerHTML = "How many timers do you want?";

    textBox1 = document.createElement("textarea");
    document.body.appendChild(textBox1);
    textBox1.innerHTML = "2";

    button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.innerHTML = "Confirm";
    button1.addEventListener("click", button1_Clicked);

            /* Set audios **/
    for(var i = 0; i < numAudio; i++){
        var fileName = i + ".mp3";
        audio[i] = new Audio(fileName);
    }
    console.log(audio);
    setInterval(draw, 3000); // execute even when this page lose focus
}

function draw(){
    var isPlaying = false;
            /*for(var i = 0; i < numAudio; i++){
                if(audio[i].currentTime > 0 && !audio[i].paused && !audio[i].ended && audio[i].readyState > 2){
                    isPlaying = true;
                }
            }*/
            isPlaying = audio[musicNumber].currentTime > 0 && !audio[musicNumber].paused && !audio[musicNumber].ended && audio[musicNumber].readyState > 2;
            
            if(isPlaying){
                console.log(musicNumber + " playing");
            }else{
                 if(audio[musicNumber].paused){
                console.log(musicNumber + " audio paused");
              } if(audio[musicNumber].currentTime <= 0){
                console.log(musicNumber + " audio currentTime not positive: " + audio[musicNumber].currentTime);
              } if(audio[musicNumber].ended){
                console.log(musicNumber + " audio ended");
              } if(audio[musicNumber].readyState <= 2){
                console.log(musicNumber + " audio not ready: " + audio[musicNumber].readyState);
            }
            }
    for(var i = 0; i < timers.length; i++){
        timers[i].update();
        timers[i].show();
    }
}

/* User-defined functions */
function ShowTime(){ // (void)
　document.getElementById('showbox').innerHTML = new Date();
　setTimeout('ShowTime()',1000);
}
function button1_Clicked(){ // onclick event (void)
    console.log("button1 clicked");
    var numButtons = parseInt(textBox1.value);
    for(var i = 0; i < numButtons; i++){
        timers[i] = new Timer();
        timers[i].initialization();
    }
    document.body.removeChild(button1);
    document.body.removeChild(label1);
    document.body.removeChild(textBox1);

    createP('');

    button2 = document.createElement("button");
    document.body.appendChild(button2);
    button2.innerHTML = "Add timer";
    button2.addEventListener("click", addTimer);
}
function addTimer(){
    var l = timers.length;
    timers[l] = new Timer();
    timers[l].initialization();
}
