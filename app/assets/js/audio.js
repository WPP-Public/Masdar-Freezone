// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change
$('#share-current-podcast').on('click', function () {
    navigator.clipboard.writeText('https://omny.fm/shows/future-forward-an-unusual-tech-dialog/space-with-astrobiologist-future-mars-walker-alyss')
})
const audioPlayer = document.querySelector(".audio-player");
var audio = new Audio(
    "assets/audio/episode-6.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

// console.dir(audio);

audio.addEventListener(
    "loadeddata",
    () => {
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
            audio.duration
        );
        audio.volume = .75;
    },
    false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = document.querySelector(".volume-slider");
// console.log(volumeSlider)
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".toggle-play");
playBtn.addEventListener(
    "click",
    () => {
        if (audio.paused) {
            // playBtn.classList.remove("play");
            // playBtn.classList.add("pause");
            $('.toggle-play').html("<svg width='49' height='48' viewBox='0 0 49 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M48.5 24.001C48.5 10.7461 37.7548 0.000976562 24.5 0.000976562C11.2452 0.000976562 0.5 10.7461 0.5 24.001C0.5 37.2558 11.2452 48.001 24.5 48.001C37.7548 48.001 48.5 37.2558 48.5 24.001Z' fill='#C4D4DC'/><path d='M18.5 31.001H22.5V17.001H18.5V31.001ZM26.5 17.001V31.001H30.5V17.001H26.5Z' fill='#2E5264'/></svg>")
            audio.play();
        } else {
            // playBtn.classList.remove("pause");
            // playBtn.classList.add("play");
            $('.toggle-play').html("<svg width='49' height='48' viewBox='0 0 49 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24.5 0C37.8 0 48.5 10.7 48.5 24C48.5 37.3 37.8 48 24.5 48C11.2 48 0.5 37.3 0.5 24C0.5 10.7 11.2 0 24.5 0Z' fill='#C4D4DC'/><path d='M34 24L21 31V17L34 24Z' fill='#2E5264'/></svg>")
            audio.pause();
        }
    },
    false
);

// audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
//     const volumeEl = audioPlayer.querySelector(".volume-container .volume");
//     audio.muted = !audio.muted;
//     if (audio.muted) {
//         volumeEl.classList.remove("icono-volumeMedium");
//         volumeEl.classList.add("icono-volumeMute");
//     } else {
//         volumeEl.classList.add("icono-volumeMedium");
//         volumeEl.classList.remove("icono-volumeMute");
//     }
// });
$('#mute-button').on('click', function () {
    // audio.muted = !audio.muted;
    // if (audio.muted) {
    //     $('#mute-button').html("<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 9V15H7L12 20V4L7 9H3ZM10 8.8V15.1L7.8 13H5V11H7.8L10 8.8Z' fill='#C4D4DC'/><path d='M15.0655 8.16936L14.0756 9.1593L20.7223 15.806L21.7122 14.8161L15.0655 8.16936Z' fill='#C4D4DC'/><path d='M13.7889 14.7921L14.7788 15.7821L21.4256 9.13533L20.4356 8.14539L13.7889 14.7921Z' fill='#C4D4DC'/></svg>");
    // } else {
    //     $('#mute-button').html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M3 9.00096V15.001H7L12 20.001V4.00096L7 9.00096H3ZM10 8.83096V15.171L7.83 13.001H5V11.001H7.83L10 8.83096ZM16.5 12.001C16.5 10.231 15.48 8.71096 14 7.97096V16.021C15.48 15.291 16.5 13.771 16.5 12.001ZM14 3.23096V5.29096C16.89 6.15096 19 8.83096 19 12.001C19 15.171 16.89 17.851 14 18.711V20.771C18.01 19.861 21 16.281 21 12.001C21 7.72096 18.01 4.14096 14 3.23096Z' fill='#C4D4DC'/></svg>");
    // }
    $('.volume-slider').toggleClass('d-none')
});
$('.back-track-btn button').on('click', function () {
    audio.currentTime = audio.currentTime - 10
})
$('.next-track-btn button').on('click', function () {
    audio.currentTime = audio.currentTime + 10
})
$('.close-accordion').on('click', function () {
    $('.toggle-play').html("<svg width='49' height='48' viewBox='0 0 49 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24.5 0C37.8 0 48.5 10.7 48.5 24C48.5 37.3 37.8 48 24.5 48C11.2 48 0.5 37.3 0.5 24C0.5 10.7 11.2 0 24.5 0Z' fill='#C4D4DC'/><path d='M34 24L21 31V17L34 24Z' fill='#2E5264'/></svg>")
    audio.pause();
})
//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

const playButtons = document.querySelectorAll('.play-episode-button');
playButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Decide title and description based on clicked button
        if ($("body").hasClass("en")) {
            switch (button.id) {
                case "play-episode-1":
                    updateContent("Season 1: Episode 1", "assets/audio/episode-1.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/electric-vehicles-with-sam-collins-formula-1-tv-pr");
                    break;
                case "play-episode-2":
                    updateContent("Season 1: Episode 2", "assets/audio/episode-2.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/the-metaverse-with-timoni-west-vice-president-of-u");
                    break;
                case "play-episode-3":
                    updateContent("Season 1: Episode 3", "assets/audio/episode-3.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/5g-with-tommy-adebayo-digital-creator-aka-gadgetsb");
                    break;
                case "play-episode-4":
                    updateContent("Season 1: Episode 4", "assets/audio/episode-4.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/artificial-intelligence-with-dr-abdel-rahman-almah");
                    break;
                case "play-episode-5":
                    updateContent("Season 1: Episode 5", "assets/audio/episode-5.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/agri-tech-with-ceo-founder-of-byalinepate-richard");
                    break;
                case "play-episode-6":
                    updateContent("Season 1: Episode 6", "assets/audio/episode-6.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/space-with-astrobiologist-future-mars-walker-alyss");
                    break;
                case "play-episode-2-1":
                    updateContent("Season 2: Episode 1", "assets/audio/episode-1-2.mp3", "https://www.youtube.com/watch?v=1UJzNc3gsb0&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=6");
                    break;
                case "play-episode-2-2":
                    updateContent("Season 2: Episode 2", "assets/audio/episode-2-2.mp3", "https://www.youtube.com/watch?v=OSsWIRSGx-o&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=5");
                    break;
                case "play-episode-3-2":
                    updateContent("Season 2: Episode 3", "assets/audio/episode-3-2.mp3", "https://www.youtube.com/watch?v=2PH32_iefgo&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=4");
                    break;
                case "play-episode-4-2":
                    updateContent("Season 2: Episode 4", "assets/audio/episode-4-2.mp3", "https://www.youtube.com/watch?v=h4Cen1mtHoI&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=3");
                    break;
                case "play-episode-5-2":
                    updateContent("Season 2: Episode 5", "assets/audio/episode-5-2.mp3", "https://www.youtube.com/watch?v=AL8fG31S-3w&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=2");
                    break;
                case "play-episode-6-2":
                    updateContent("Season 2: Episode 6", "assets/audio/episode-6-2.mp3", "https://www.youtube.com/watch?v=dp97f5fod-M&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=1");
                    break;
            }
        }
        else {
            if ($("body").hasClass("ar")) {
                switch (button.id) {
                    case "play-episode-1":
                        updateContent("الموسم الأول: الحلقة 1", "../assets/audio/episode-1.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/electric-vehicles-with-sam-collins-formula-1-tv-pr");
                        break;
                    case "play-episode-2":
                        updateContent("الموسم الأول: الحلقة 2", "../assets/audio/episode-2.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/the-metaverse-with-timoni-west-vice-president-of-u");
                        break;
                    case "play-episode-3":
                        updateContent("الموسم الأول: الحلقة 3", "../assets/audio/episode-3.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/5g-with-tommy-adebayo-digital-creator-aka-gadgetsb");
                        break;
                    case "play-episode-4":
                        updateContent("الموسم الأول: الحلقة 4", "../assets/audio/episode-4.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/artificial-intelligence-with-dr-abdel-rahman-almah");
                        break;
                    case "play-episode-5":
                        updateContent("الموسم الأول: الحلقة 5", "../assets/audio/episode-5.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/agri-tech-with-ceo-founder-of-byalinepate-richard");
                        break;
                    case "play-episode-6":
                        updateContent("الموسم الأول: الحلقة 6", "../assets/audio/episode-6.mp3", "https://omny.fm/shows/future-forward-an-unusual-tech-dialog/space-with-astrobiologist-future-mars-walker-alyss");
                        break;
                    case "play-episode-2-1":
                        updateContent(" الموسم الثاني: الحلقة 1", "../assets/audio/episode-1-2.mp3", "https://www.youtube.com/watch?v=1UJzNc3gsb0&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=6");
                        break;
                    case "play-episode-2-2":
                        updateContent(" الموسم الثاني: الحلقة 2", "../assets/audio/episode-2-2.mp3", "https://www.youtube.com/watch?v=OSsWIRSGx-o&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=5");
                        break;
                    case "play-episode-3-2":
                        updateContent(" الموسم الثاني: الحلقة 3", "../assets/audio/episode-3-2.mp3", "https://www.youtube.com/watch?v=2PH32_iefgo&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=4");
                        break;
                    case "play-episode-4-2":
                        updateContent(" الموسم الثاني: الحلقة 4", "../assets/audio/episode-4-2.mp3", "https://www.youtube.com/watch?v=h4Cen1mtHoI&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=3");
                        break;
                    case "play-episode-5-2":
                        updateContent(" الموسم الثاني: الحلقة 5", "../assets/audio/episode-5-2.mp3", "https://www.youtube.com/watch?v=AL8fG31S-3w&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=2");
                        break;
                    case "play-episode-6-2":
                        updateContent(" الموسم الثاني: الحلقة 6", "../assets/audio/episode-6-2.mp3", "https://www.youtube.com/watch?v=dp97f5fod-M&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=1");
                        break;
                }
            }
        }

    });
});
function updateContent(title, track, link) {
    $('.sticky-section .sticky-section-child').css('position', 'fixed');
    $('.sticky-section .sticky-section-child').css('transform', 'translateY(0)');
    document.getElementById('track-title').textContent = title;
    $('.toggle-play').html("<svg width='49' height='48' viewBox='0 0 49 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24.5 0C37.8 0 48.5 10.7 48.5 24C48.5 37.3 37.8 48 24.5 48C11.2 48 0.5 37.3 0.5 24C0.5 10.7 11.2 0 24.5 0Z' fill='#C4D4DC'/><path d='M34 24L21 31V17L34 24Z' fill='#2E5264'/></svg>")
    audio.pause();
    audio = new Audio(track);
    audio.addEventListener(
        "loadeddata",
        () => {
            audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
                audio.duration
            );
            audio.volume = .75;
        },
        false
    );
    $('.toggle-play').html("<svg width='49' height='48' viewBox='0 0 49 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M48.5 24.001C48.5 10.7461 37.7548 0.000976562 24.5 0.000976562C11.2452 0.000976562 0.5 10.7461 0.5 24.001C0.5 37.2558 11.2452 48.001 24.5 48.001C37.7548 48.001 48.5 37.2558 48.5 24.001Z' fill='#C4D4DC'/><path d='M18.5 31.001H22.5V17.001H18.5V31.001ZM26.5 17.001V31.001H30.5V17.001H26.5Z' fill='#2E5264'/></svg>")
    audio.play();
    $('#share-current-podcast').on('click', function () {
        navigator.clipboard.writeText(link)
    })
}

const buttonss = document.querySelectorAll('.readmore');
buttonss.forEach(button => {
    button.addEventListener('click', function () {
        switch (button.id) {
            case "button-open-1":
                $('#text-open-1').toggleClass('descriptive-text')
                break;
            case "button-open-2":
                $('#text-open-2').toggleClass('descriptive-text')
                break;
            case "button-open-3":
                $('#text-open-3').toggleClass('descriptive-text')
                break;
            case "button-open-4":
                $('#text-open-4').toggleClass('descriptive-text')
                break;
            case "button-open-5":
                $('#text-open-5').toggleClass('descriptive-text')
                break;
        }
    })
})

const shareButtons = document.querySelectorAll('.share-episode-button');
shareButtons.forEach(button => {
    button.addEventListener('click', function () {
        switch (button.id) {
            case "share-episode-1":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/electric-vehicles-with-sam-collins-formula-1-tv-pr")
                alert("Link copied to clipboard");
                break;
            case "share-episode-2":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/the-metaverse-with-timoni-west-vice-president-of-u")
                alert("Link copied to clipboard");
                break;
            case "share-episode-3":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/5g-with-tommy-adebayo-digital-creator-aka-gadgetsb")
                alert("Link copied to clipboard");
                break;
            case "share-episode-4":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/artificial-intelligence-with-dr-abdel-rahman-almah")
                alert("Link copied to clipboard");
                break;
            case "share-episode-5":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/agri-tech-with-ceo-founder-of-byalinepate-richard")
                alert("Link copied to clipboard");
                break;
            case "share-episode-6":
                navigator.clipboard.writeText("https://omny.fm/shows/future-forward-an-unusual-tech-dialog/space-with-astrobiologist-future-mars-walker-alyss")
                alert("Link copied to clipboard");
                break;
            case "share-episode-2-1":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=1UJzNc3gsb0&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=6")
                alert("Link copied to clipboard");
                break;
            case "share-episode-2-2":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=OSsWIRSGx-o&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=5")
                alert("Link copied to clipboard");
                break;
            case "share-episode-3-2":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=2PH32_iefgo&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=4")
                alert("Link copied to clipboard");
                break;
            case "share-episode-4-2":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=h4Cen1mtHoI&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=3")
                alert("Link copied to clipboard");
                break;
            case "share-episode-5-2":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=AL8fG31S-3w&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=2")
                alert("Link copied to clipboard");
                break;
            case "share-episode-6-2":
                navigator.clipboard.writeText("https://www.youtube.com/watch?v=dp97f5fod-M&list=PLReEIw7Qc70Yxhb4a3Ydx6G8RhByMDxQo&index=1")
                alert("Link copied to clipboard");
                break;
        }

    });
});
