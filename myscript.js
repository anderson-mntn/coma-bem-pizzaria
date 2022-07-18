//onload mobile pizzas - nao ta mt mobile mas é pra teste do desk
window.addEventListener('load', ()=>{
    pizzaPromoUlMob.style.display = 'none'
    pizzaTradUlMob.style.display = 'none'
    pizzaCard.style.display = 'none'
    pizzaCard2.style.display = 'none'
})

// Selectors Desk

//Pizza selectors
let pizzaPromoUl = document.querySelector('.pizza-promo-ul')
let pizzaCard = document.querySelector('#pizza-card')
let pizzaCard2 = document.querySelector('#pizza-card2')
let pizzaBtnDesk = document.querySelector('#pizza-button')

//Trad
let pizzaTradUlDesk = document.querySelector('#pizza-trad-ul')

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

//Promo pizza mobile
let pizzaPromoUlMob = document.querySelector('.pizza-promo-mob')
let pizzaPromoTitleMob = document.querySelector('.promo-title-mob')
let border = document.querySelector('.border-hide3')

pizzaPromoUlMob.innerHTML += pizzaPromoUl.innerHTML

pizzaPromoTitleMob.addEventListener("click", () =>{
    if (pizzaPromoUlMob.style.display === 'none'){
        pizzaPromoUlMob.style.display = "block"
        // border.style.width = "20%"
        
    } else {
        // border.style.width = "90%"
        pizzaPromoUlMob.style.display = "none"
    }
})

//Pizza Trad mobile
let pizzaTradUlMob = document.querySelector('.pizza-trad-mob')
let pizzaTradTitleMob = document.querySelector('.trad-title-mob')

pizzaTradUlMob.innerHTML += pizzaTradUlDesk.innerHTML

pizzaTradTitleMob.addEventListener("click", () =>{
    if (pizzaTradUlMob.style.display === 'none'){
        pizzaTradUlMob.style.display = "block"
        // border.style.width = "20%"
        
    } else {
        // border.style.width = "90%"
        pizzaTradUlMob.style.display = "none"
    }
})

//Especial pizza


let pizzaEspeTitleMob = document.querySelector('.espe-title-mob')
let pizzaEspeUlMob = document.querySelector('.pizza-espe-mob-item')

let pizzaEspeUlDesk = document.querySelector('#pizza-especial-ul')
pizzaEspeUlMob.innerHTML += pizzaEspeUlDesk.innerHTML



// //Trad
// pizzaTradTitleMob.addEventListener("click", () =>{
//     if (pizzaTradUlMob.style.display === 'none'){
//         pizzaTradUlMob.style.display = "block"
//         border.style.width = "20%"
        
//     } else {
//         border.style.width = "90%"
//         pizzaTradUlMob.style.display = "none"
//     }
// })

