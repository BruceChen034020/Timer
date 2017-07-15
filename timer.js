function Timer(){
    this.display; // (Label)
    this.reset; // (Button)
    this.start; // (Button)
    this.stop; // stop / pause (Button)
    this.annotation; // (TextBox)
    this.nowTime; // (Date)
    this.textBoxHr; // (Textarea)
    this.textBoxMin; // (textarea)
    this.labelHr; // (Label)
    this.labelMin; // (Label)
    this.label5; // (Label)
    this.destination; //(Date)
    let self = this; // this (Timer)
    this.active; // whether this timer is active (boolean)

    this.initialization = function(){ // (void)
        
        this.active = false;
        
        createP('');
        
        this.display = document.createElement("label");
        document.body.appendChild(this.display);
        this.display.innerHTML = "00 : 00 : 00";
        this.display.style.fontSize = "72px";
        
        this.textBoxHr = document.createElement("textarea");
        document.body.appendChild(this.textBoxHr);
        this.textBoxHr.innerHTML = "0";

        this.labelHr = document.createElement("label");
        document.body.appendChild(this.labelHr);
        this.labelHr.innerHTML = "Hours";

        this.textBoxMin = document.createElement("textarea");
        document.body.appendChild(this.textBoxMin);
        this.textBoxMin.innerHTML = "0";

        this.labelMin = document.createElement("label");
        document.body.appendChild(this.labelMin);
        this.labelMin.innerHTML = "Minutes";

        this.reset = document.createElement("button");
        document.body.appendChild(this.reset);
        this.reset.innerHTML = "Reset";
        this.reset.addEventListener("click", this.Reset);
        
        this.start = document.createElement("button");
        //document.body.appendChild(this.start);
        this.start.innerHTML = "Start";

        this.stop = document.createElement("button");
        //document.body.appendChild(this.stop);
        this.stop.innerHTML = "Stop";

        createP('');

        this.label5 = document.createElement("label");
        document.body.appendChild(this.label5);
        this.label5.innerHTML = "Destination: ";

        createP('');

        this.annotation = document.createElement("textarea");
        document.body.appendChild(this.annotation);
        this.annotation.innerHTML = "註解";

        this.nowTime = new Date();

        this.destination = new Date();
        console.log(this.textBoxHr);
        console.log(this);
        console.log(this.display);


    }

    this.Reset = function(){ // onclick event (void)
        console.log(self.textBoxHr);
        console.log("Reset");
        self.nowTime = new Date();
        var nt = self.nowTime.getTime();
        console.log("nt = " + nt);
        console.log(self.textBoxHr);
        console.log(parseInt(self.textBoxHr.value));
        console.log(self.textBoxMin);
        console.log(parseInt(self.textBoxHr.value)*60*60*1000 + parseInt(self.textBoxMin.value)*60*1000);
        nt += parseInt(self.textBoxHr.value)*60*60*1000 + parseInt(self.textBoxMin.value)*60*1000;
        console.log("nt = " + nt);
        self.destination = new Date();
        self.destination.setTime(nt);
        console.log(this);
        console.log(self.destination);
        console.log(self);
        console.log(self.textBoxHr);
        self.active = true;
    }

    this.show = function(){ // update screen (void)

        this.label5.innerHTML = "Destination: " + this.destination;
        var now = new Date();
        var interval = parseInt(this.destination - now);

        var hr = parseInt(interval /60/60/1000);

        var min = parseInt(interval/60/1000) % 60;
        var sec = parseInt(interval/1000) % 60;
        this.display.innerHTML = hr + " : " + min + " : " + sec;
        if(!this.active){
            this.label5.innerHTML = "Destination: ";
            this.display.innerHTML = "00 : 00 : 00";
        }
    }

    this.update = function(){ // see if time's up (void)
        var now = new Date();
        var interval = parseInt(this.destination - now);
        if(interval <= 0 && this.active === true){
            for(var i = 0; i < numAudio; i++){
                audio[i].pause();
                audio[i].currentTime = 0;
            }
            var random1 = Math.random();
            random1 *= audio.length;
            random1 = parseInt(random1);
            audio[random1].play();
            console.log("\r\n\r\nplay music #" + random1 + "\r\n");
            this.active = false;
            if(random1 === 0){
                console.log("123");
                for(var i = 1; i <= 34; i++){
                    setTimeout(function(){ audio[0].play(); console.log("play"); }, i*1780);
                    
                }
            }
            if(random1 === 119){
                for(var i = 1; i <= 12; i++){
                    setTimeout(function(){ audio[119].play(); console.log("play"); }, i*5500);
                    
                }
            }
        }
    }
}