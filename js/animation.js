const bgm = document.getElementById("bgm");
const btn = document.getElementById("music-btn");

bgm.volume = 0.25;

let playing = false;

// Icon Music
const musicIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
</svg>
`;

// Icon Pause
const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0A.5.5 0 0 1 10 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
</svg>
`;

btn.innerHTML = musicIcon;

btn.addEventListener("click", () => {

    if (!playing) {

        bgm.play();
        btn.innerHTML = pauseIcon;
        playing = true;

    } else {

        bgm.pause();
        btn.innerHTML = musicIcon;
        playing = false;

    }

});