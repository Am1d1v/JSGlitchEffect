

const container = document.querySelector('.container');

// Create 20 divs for glitch effect
for(let i = 0; i < 20; i++){
    const glitchBox =  document.createElement('div');
    glitchBox.classList.add('box');

    container.appendChild(glitchBox);
}

const glitches = document.querySelectorAll('.box')

// Random glitch appear

setInterval(() => {
    glitches.forEach((glitch) => {
        glitch.style.left = Math.random() * 100 + 'vw';
        glitch.style.top = Math.random() * 100 + 'vh';
        glitch.style.height = Math.random() * 100 + 'px';
        glitch.style.width = Math.random() * 400 + 'px';
        glitch.style.backgroundPosition = Math.random() * 50 + 'px';
    });
}, 600);