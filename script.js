document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements as they scroll into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check for elements in view
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Create floating hearts in the background
    const heartsContainer = document.querySelector('.hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        // Random position, size, and animation duration
        const left = Math.random() * 100;
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 10 + 5;
        
        heart.style.left = left + 'vw';
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = duration + 's';
        
        // Add some delay for a more natural look
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Create hearts at regular intervals
    setInterval(createHeart, 300);
    
    // Animate header elements
    setTimeout(() => {
        document.getElementById('title').classList.add('opacity-100', 'translate-y-0');
    }, 500);
    
    setTimeout(() => {
        document.getElementById('names').classList.add('opacity-100', 'translate-y-0');
    }, 800);
    
    setTimeout(() => {
        document.getElementById('years').classList.add('opacity-100', 'translate-y-0');
    }, 1100);
    
    // Love button functionality
    const loveButton = document.getElementById('loveButton');
    const loveCounter = document.getElementById('loveCounter');
    const countElement = document.getElementById('count');
    let count = 0;
    
    loveButton.addEventListener('click', function() {
        // Show counter if hidden
        if (loveCounter.classList.contains('hidden')) {
            loveCounter.classList.remove('hidden');
        }
        
        // Increment counter
        count++;
        countElement.textContent = count;
        
        // Create love explosion effect
        createLoveExplosion();
        
        // Special effects at certain counts
        if (count === 10) {
            alert('Your love is growing stronger! ❤️');
        } else if (count === 50) {
            alert('Wow! That\'s a lot of love! 💖');
        } else if (count === 100) {
            document.body.style.background = 'linear-gradient(to right, #F8C8DC, #E6E6FA)';
            alert('You\'ve unlocked a special background! 💕');
        }
    });
    
    function createLoveExplosion() {
        const explosion = document.createElement('div');
        explosion.classList.add('love-explosion');
        document.body.appendChild(explosion);
        
        // Create multiple hearts for the explosion
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('explosion-heart');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            
            // Random position and delay
            const angle = Math.random() * 360;
            const delay = Math.random() * 0.5;
            
            heart.style.transform = `rotate(${angle}deg)`;
            heart.style.animationDelay = delay + 's';
            
            explosion.appendChild(heart);
        }
        
        // Remove explosion after animation completes
        setTimeout(() => {
            explosion.remove();
        }, 2000);
    }
});