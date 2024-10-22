function typeText(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

function slideIn(selector, delay) {
    const element = document.getElementById(selector);
    if (!element) {
        console.error('Element not found:', selector);
        return;
    }
    setTimeout(() => {
        element.style.right = '100px'; 
    }, delay);
}

document.addEventListener("DOMContentLoaded", function() {
    typeText('typed-text', "hi, i'm helena sierpińska", 100, function() {
        setTimeout(function() {
            typeText('typed-subtext', "> computer science student | cybersecurity enthusiast", 100, function() {
                setTimeout(function() {
                    typeText('typed-contact', " feel free to contact me! :]", 100);
                }, 500);
            });
        }, 500);
    });
    slideIn('terminal2', 9000);
});

document.addEventListener("DOMContentLoaded", () => {
    const terminals = [
        { terminal: document.getElementById('terminal'), header: document.getElementById('header') },
        { terminal: document.getElementById('terminal2'), header: document.getElementById('header2') }
    ];

    terminals.forEach(({ terminal, header }) => {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - terminal.getBoundingClientRect().left;
            offsetY = e.clientY - terminal.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                terminal.style.left = `${e.clientX - offsetX}px`;
                terminal.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });
});
