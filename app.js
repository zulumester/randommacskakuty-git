const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);


function getRandomCat(){

    fetch("https://thatcopy.pw/catapi/rest/")
    .then(res => res.json())
    .then(data => {

        cat_result.innerHTML = `<img src=${data.url} alt='cat' />`;
    });
}

function getRandomDog(){

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {

        dog_result.innerHTML = `<img src=${data.message} alt='cat' />`;

    });
}