//Simple YouTube Skipper by SkyNoxt
setInterval(function () {
    if (document.querySelector(".ad-showing")) {
        let video = document.querySelector("video");
        if (!isNaN(video.duration)) video.currentTime = video.duration;
        else document.querySelector(".ytp-ad-skip-button-container").click();
    }
}, 1000);