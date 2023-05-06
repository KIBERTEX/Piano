const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
  console.log(newUrl)
  new Audio(newUrl).play()
}

const blackKeyBoardKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP'];
const whiteKeyBoardKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB'];
const allKeyBoardKeys = blackKeyBoardKeys.concat(whiteKeyBoardKeys);

// Add event listener to document to listen for keydown events
document.addEventListener('keydown', (event) => {
  if (allKeyBoardKeys.includes(event.code)) {
    // Determine which piano key to play sound for based on key's position in sequence
    const keyIndex = allKeyBoardKeys.indexOf(event.code)
    if (keyIndex >= 0 && keyIndex < pianoKeys.length) {
      const newUrl = '24-piano-keys/key' + (keyIndex + 1).toString().padStart(2, '0') + '.mp3'
      playSound(newUrl)
      // Add "active" class to the corresponding piano key element
      pianoKeys[keyIndex].classList.add('active')
    }
  }
})

// Add event listener to document to listen for keyup events
document.addEventListener('keyup', (event) => {
  const keyIndex = allKeyBoardKeys.indexOf(event.code);
  if (keyIndex >= 0 && keyIndex < pianoKeys.length) {
    pianoKeys[keyIndex].classList.remove('active');
  }
})

// Add event listener to each piano key to listen for click events
pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : (i + 1)
  const newUrl = '24-piano-keys/key' + number + '.mp3'
  pianoKey.addEventListener('click', () => {
    playSound(newUrl)
    // Add "active" class to the clicked piano key element
    pianoKey.classList.add('active')
    setTimeout(() => {
      pianoKey.classList.remove('active');
    }, 200);
  })
})