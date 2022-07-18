//onload mobile pizzas - nao ta mt mobile mas é pra teste do desk
window.addEventListener('load', ()=>{
    pizzaPromoUlMob.style.display = 'none'
    pizzaTradUlMob.style.display = 'none'
    pizzaEspeUlMob.style.display = 'none'
    pizzaDoceUlMob.style.display = 'none'
    pizzaCard.style.display = 'none'
    pizzaCard2.style.display = 'none'
    //--
    pizzaCardMob.style.display = 'none'
    esfihaUlMob.style.display = 'none'


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

let pizzaCardMob = document.querySelector('.pizza-card-mob')

// Buttons 
let pizzaBtnMob = document.querySelector('.pizza-button-mob')
pizzaBtnMob.addEventListener('click', () => {
    pizzaCardMob.style.display = 'block'
    esfihaUlMob.style.display = 'none'
    sorveteCardMob.style.display = 'none'
})

//Promo pizza mobile
let pizzaPromoUlMob = document.querySelector('.pizza-promo-mob')
let pizzaPromoTitleMob = document.querySelector('.promo-title-mob')
let border = document.querySelector('.border-hide3')
let borderPromo = document.querySelector('.border-promo')
let borderPromo2 = document.querySelector('.border-promo2')
let borderPromo3 = document.querySelector('.border-promo3')

pizzaPromoUlMob.innerHTML += pizzaPromoUl.innerHTML

pizzaPromoTitleMob.addEventListener("click", () =>{
    if (pizzaPromoUlMob.style.display === 'none'){
        pizzaPromoUlMob.style.display = "block"
        borderPromo.style.display = 'block'
        // border.style.width = "20%"
        
    } else {
        // border.style.width = "90%"
        pizzaPromoUlMob.style.display = "none"
        borderPromo.style.display = 'none'
    }
})

//Pizza Trad mobile
let pizzaTradUlMob = document.querySelector('.pizza-trad-mob')
let pizzaTradTitleMob = document.querySelector('.trad-title-mob')

pizzaTradUlMob.innerHTML += pizzaTradUlDesk.innerHTML

pizzaTradTitleMob.addEventListener("click", () =>{
    if (pizzaTradUlMob.style.display === 'none'){
        pizzaTradUlMob.style.display = "block"
        borderPromo2.style.display = 'block'
        // border.style.width = "20%"
        
    } else {
        // border.style.width = "90%"
        pizzaTradUlMob.style.display = "none"
        borderPromo2.style.display = 'none'
    }
})

//Especial pizza MOBILE
let pizzaEspeTitleMob = document.querySelector('.espe-title-mob')
let pizzaEspeUlMob = document.querySelector('.pizza-espe-mob-item')

let pizzaEspeUlDesk = document.querySelector('#pizza-especial-ul')
pizzaEspeUlMob.innerHTML += pizzaEspeUlDesk.innerHTML

pizzaEspeTitleMob.addEventListener("click", () =>{
    if (pizzaEspeUlMob.style.display === 'none'){
        pizzaEspeUlMob.style.display = "block"
        borderPromo3.style.display = 'block'
        // border.style.width = "20%"
        
    } else {
        // border.style.width = "90%"
        pizzaEspeUlMob.style.display = "none"
        borderPromo3.style.display = 'none'
    }
})

//Doces pizza mobile
let pizzaDoceTitleMob = document.querySelector('.doces-title-mob')
let pizzaDoceUlMob = document.querySelector('.pizza-doce-mob')
let pizzaDoceUlDesk = document.querySelector('#pizza-doce-ul')

pizzaDoceTitleMob.addEventListener('click', () =>{
    if (pizzaDoceUlMob.style.display === 'none'){
        pizzaDoceUlMob.style.display = "block"
        
    } else {
        // border.style.width = "90%"
        pizzaDoceUlMob.style.display = "none"
       
    }
})

//Esfihas mobile
let esfihaBtnMob = document.querySelector('.esfiha-button-mob')
let esfihaUlMob = document.querySelector('.esfiha-card-mob')
let esfihaDeskUl = document.querySelector('.esfiha-card')
esfihaUlMob.innerHTML = esfihaDeskUl.innerHTML

esfihaBtnMob.addEventListener('click', () => {
    pizzaCardMob.style.display = 'none'
    sorveteCardMob.style.display = 'none'
    esfihaUlMob.style.display = 'block'
})

//Sorvete display mobile
let sorveteCardDesk = document.querySelector('#sorvete-card')
let sorveteCardMob = document.querySelector('.sorvete-card-mob')
let sorveteBtnMob = document.querySelector('.sorvete-button-mob')
sorveteCardMob.innerHTML =  sorveteCardDesk.innerHTML
sorveteBtnMob.addEventListener('click', () =>{
    sorveteCardMob.style.display = "block"
    esfihaUlMob.style.display = 'none'
    pizzaCardMob.style.display = 'none'
})