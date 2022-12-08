const img = document.querySelectorAll('.images__item');

const img2 = document.querySelectorAll('.container');

console.log(img);

img.forEach(image =>{
    image.addEventListener('click',()=>{
        img.forEach(image=>{
            image.classList.remove('images__item--active');

        })
        image.classList.add('images__item--active');
    })
})
