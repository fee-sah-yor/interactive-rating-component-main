var submit = document.getElementById('submit');
var returnAgain = document.getElementById('return');
const rating = document.querySelector('#rating');
const rates = document.querySelectorAll('.btn');

rates.forEach((rate) => {
    rate.addEventListener('click', () =>{
  rating.innerHTML = rate.innerHTML;
    })
})

submit.addEventListener('click', () =>{
    document.querySelector('.container').classList.add('active');
});

returnAgain.addEventListener('click', () =>{
    document.querySelector('.container').classList.remove('active');
})
