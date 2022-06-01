let nilaiRotateDetik = 0;
let nilaiRotateMenit = 0;
let nilaiRotateJam = 0;

const jarumDetik = document.querySelector('.second');
const jarumMenit = document.querySelector('.minut');
const jarumJam = document.querySelector('.jam');

setInterval(() => {
    nilaiRotateDetik += 6;
    jarumDetik.style.transform = `rotate(${nilaiRotateDetik}deg)`;
    jarumMenit.style.transform = `rotate(${nilaiRotateMenit}deg)`;
    jarumJam.style.transform = `rotate(${nilaiRotateJam}deg)`;
    
        if(nilaiRotateDetik === 360) {
            nilaiRotateDetik = 6;
            nilaiRotateMenit += 6;
        }else if (nilaiRotateMenit === 360 || nilaiRotateDetik === 360) {
            nilaiRotateJam += 6;
            nilaiRotateMenit = 0;
        }
}, 1000);

