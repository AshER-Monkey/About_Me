function playAudioCC() { 
	var audioCC = document.getElementById("audioCC");
	audioCC.play();
	audioCC.volume = 0.2;
} 

function pauseAudioCC() { 
    audioCC.pause(); 
}

function startAni() { 
    document.getElementById("loading01").className = "loading01";
    document.getElementById("loading02").className = "loading02";
    document.getElementById("loading03").className = "loading03";
}

function pauseAni() { 
    var bird1 = document.getElementById("loading01");
    var bird2 = document.getElementById("loading02");
    var bird3 = document.getElementById("loading03");
    bird1.classList.add("pause");
    bird2.classList.add("pause");
    bird3.classList.add("pause");
}


function playAudioScream() { 
	var audio1 = document.getElementById("audio1");
	audio1.play();
	audio1.volume = 0.2;
} 