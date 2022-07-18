//onload mobile pizzas - nao ta mt mobile mas é pra teste do desk
window.addEventListener('load', ()=>{
    pizzaPromoUlMob.style.display = 'none'
    pizzaCard.style.display = 'none'
    pizzaCard2.style.display = 'none'
})

// Selectors Desk

//Pizza selectors
let pizzaPromoUl = document.querySelector('.pizza-promo-ul')
let pizzaCard = document.querySelector('#pizza-card')
let pizzaCard2 = document.querySelector('#pizza-card2')
let pizzaBtnDesk = document.querySelector('#pizza-button')

//Esfiha selectors
let esfihaButtonDesk = document.querySelector('.esfiha-button')
let esfihaCardDesk = document.querySelector('.esfiha-card')


// Functions Desk

//Pizza btn
pizzaBtnDesk.addEventListener('click', () =>{
    pizzaCard.style.display = 'flex'
    pizzaCard2.style.display = 'flex'
    esfihaCardDesk.style.display = "none"
})

//Esfiha functions
esfihaButtonDesk.addEventListener('click', ()=>{
    pizzaCard.style.display = 'none'
    pizzaCard2.style.display = 'none'
    esfihaCardDesk.style.display = "grid"
})




// Seletores Mobile ---------------------------------------

// Buttons 
let pizzaBtnMob = document.querySelector('.pizza-button-mob')

//Promo pizza
let pizzaPromoUlMob = document.querySelector('.pizza-promo-mob')
let pizzaPromoTitle = document.querySelector('.promo-title-mob')



// MOBILE ULs
pizzaPromoUlMob.innerHTML += pizzaPromoUl.innerHTML



// Functions Mobile ---------------------------------------

//Promo
pizzaPromoTitle.addEventListener("click", () =>{
    if (pizzaPromoUlMob.style.display === 'none'){
        pizzaPromoUlMob.style.display = "block"
    } else {
        pizzaPromoUlMob.style.display = "none"
    }
})

