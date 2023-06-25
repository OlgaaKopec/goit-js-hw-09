const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

let changeColor = null
startButton.addEventListener('click', function() {
    startButton.disabled = true;
    changeColor = setInterval(function() {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  })

  stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    clearInterval(changeColor);
  })

  const website = document.createElement('div')
  website.classList.add('website')
  website.appendChild(startButton)
  website.appendChild(stopButton)
document.body.insertBefore(website, document.body.secondChild)
