const generateBtn = document.getElementById('#generate-advice');

generateBtn.addEventListener('click', function(){
    bringAdvice()
})

window.addEventListener('load', function(){
    bringAdvice()
})

async function bringAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    let adviceStored = await res.json()
    const textStored = document.getElementById('text-here');
    const idStored = document.getElementById('advice-number');
    textStored.innerHTML = `"${adviceStored.slip.advice}"`;
    console.log(adviceStored);
    idStored.innerHTML = `Advice #${adviceStored.slip.id}`;
    }

