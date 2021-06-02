const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const middleSection = document.getElementById('middle-section');
const colorField = document.getElementById('color-field');
const topSection = document.getElementById('top-section');
let bottomSection = document.getElementById('bottom-section');
let pronounField = document.getElementById('pronoun-field');
    const pronounBtn = document.getElementById('pgp');
const pronouns = document.getElementById('pronouns');

submitBtn.addEventListener('click', ()=>{
    console.log(inputField.value);
    console.log(middleSection.textContent);
    middleSection.textContent = inputField.value;
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
    bottomSection.style.backgroundColor = colorField.value;

})

pronounBtn.addEventListener('click', ()=>{
    pronouns.textContent = pronounField.value;
} )


