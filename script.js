const root = document.documentElement;

function buttonClick(event) {
    const btn = event.target;

    btn.classList.toggle('open');

    const content = btn.nextElementSibling;

    if (content) {
        content.classList.toggle('open');

        root.style.setProperty('--content-height', content.scrollHeight + 'px');
      
        const buttons = document.querySelectorAll('button');
        buttons.forEach(otherButton => {
            if (otherButton !== btn && otherButton.classList.contains('open')) {
                otherButton.classList.remove('open');
                const otherContent = otherButton.nextElementSibling;
                otherContent.classList.remove('open');
                otherContent.style.setProperty('--content-height', '0');
            }
        });
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
