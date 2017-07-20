var songs=["songs/DreamHigh.mp3","songs/Dreaming.mp3","songs/Maybe.mp3","songs/StoryOfMyLife.mp3","songs/Closer.mp3","songs/Hurt.mp3","songs/Try.mp3"]
var title=["DreamHigh","Dreaming","Maybe","Story Of My Life","Closer","Hurt","Try"];
var sound;
var volume=0.1;
var playing=0;
$("#DreamHigh").on("click",function(){
	playing=0;
	play();
})
$("#Dreaming").on("click",function(){
	playing=1;
	play();
})
$("#Maybe").on("click",function(){
	playing=2;
	play();
})
$("#StoryOfMyLife").on("click",function(){
	playing=3;
	play();
})
$("#Closer").on("click",function(){
	playing=4;
	play();
})
$("#Hurt").on("click",function(){
	playing=5;
	play();
})
$("#Try").on("click",function(){
	playing=6;
	play();
})
$("#btnPause").on("click",function(){
	sound.pause();
	$("#btnPause").fadeOut(200,function(){
		$("#btnPlay").fadeIn();
	})
	
})
$("#btnPlay").on("click",function(){
	sound.play();
	$("#btnPlay").fadeOut(200,function(){
		$("#btnPause").fadeIn();
	})
})
$("#btnDown").on("click",function(){
	sound.fade(volume,volume-0.1,0.1);
	if(volume==0){
		volume=0;
	}else{
		volume=volume-0.1;
	}
})
$("#btnUp").on("click",function(){
	sound.fade(volume,volume+0.1,0.1);
	if(volume==1){
		volume=1;
	}else{
		volume=volume+0.1;
	}
})
$("#btnAfter").on("click",function(){
	playing=playing+1;
	play();
})
$("#btnBefore").on("click",function(){
	playing=playing-1;
	play();
})
function play(obj){
	if(playing<0 || playing>=songs.length){
		playing=0;
		$("#title").text(title[playing]);
		$("#title").fadeIn();
	}
	if(sound){
		sound.pause()
		$(".toolkit").fadeIn();
		sound= new Howl({
			urls: [songs[playing]],
			volume:volume,
			onend:function(){
				playing=playing+1;
				play();
			}
		}).play()
		$("#title").text(title[playing]);
		$("#title").fadeIn();
	}else{
		$(".toolkit").fadeIn();
		sound= new Howl({
			urls: [songs[playing]],
			volume:volume,
			onend:function(){
				playing=playing+1;
				play();
			}
		}).play()
		$("#title").text(title[playing]);
		$("#title").fadeIn();
	}
}
$("#koreanHead").on("click",function(){
	$("#korean").fadeToggle(1000);
})
$("#americanHead").on("click",function(){
	$("#american").fadeToggle(1000);
})
$("#gotTalentHead").on("click",function(){
	$("#gotTalent").fadeToggle(1000);
})

