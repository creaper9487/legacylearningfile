let player;
let currentPlay = 0;

function onYouTubeIframeAPIReady(){
    console.log("onYouTubeIframeAPIReady");
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[currentPlay][0],
            end:playTime[currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playButton").on("click", function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log(event.data);
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
        })
        }else{
            currentPlay=0
            $("h2").text("");
            //last
            player.cueVideoById({
                videoId:playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            })

        }
    }
    if(event.data==1) $("h2").text(player.getVideoData().title);
}