const starField = document.getElementById('star-field');
for(let i=0;i<=100;i++){
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random()*3+1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random()*100}%`
    star.style.left = `${Math.random()*100}%`
    star.style.animationDelay = `-${Math.random()*3}s`;
    starField.appendChild(star);
}
const particleField = document.getElementById('particle-field');
for(let i=0;i<=20;i++){
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = `${Math.random()*100}%`;
    particle.style.left = `${Math.random()*100}%`;
    particle.style.animationDelay = `-${Math.random()*3}s`;
    particleField.appendChild(particle);
}
function showTab(){
    window.location.href = "dashBoard.html";
    
}