const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const middleSection = document.getElementById('middle-section');
const colorField = document.getElementById('color-field');
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
const pronounField = document.getElementById('pronoun-field');
const pronounBtn = document.getElementById('pgp');
const pronouns = document.getElementById('pronouns');



// name button 
submitBtn.addEventListener('click', ()=>{
    middleSection.textContent = inputField.value;
    topSection.style.backgroundColor = colorField.value;
    bottomSection.style.backgroundColor = colorField.value;

});

// pronoun button
pronounBtn.addEventListener('click', ()=>{
    pronouns.textContent = pronounField.value;
});


