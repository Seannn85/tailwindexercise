const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const food = document.getElementById('food');


burger.addEventListener('click',()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }

})

food.addEventListener('click',(e)=>
{
    e.preventDefault();
})