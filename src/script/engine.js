const pianoKeys= document.querySelectorAll('.piano-keys .key')
const volumeslider = document.querySelector('.volume-slider input')
let audio = new Audio("src/audio/a.wav")
let mapedkeys = [];
const keysCheck=document.querySelector(".keys-check input");

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
};
    

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedkeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
    if (mapedkeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeslider.addEventListener('input', handleVolume)

const showhidekeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheck.addEventListener('click', showhidekeys)