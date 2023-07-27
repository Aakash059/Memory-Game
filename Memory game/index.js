const cardarry = [
    {
        name: 'fries',
        img: 'fries.png',


    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    },

    {
        name: 'fries',
        img: 'fries.png',


    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    { 
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    },
    

]
console.log(cardarry)

cardarry.sort(() =>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
let cardschosen=[]
let cardchosenId=[]
const cardsWon=[]

function createboard(){
    for(let i=0 ;i<cardarry.length;i++)
{
   const card= document.createElement('img')
   card.setAttribute('src','blank.png')
   card.setAttribute('data-id',i)
card.addEventListener('click',flipcard)

   gridDisplay.appendChild(card)
  
}
}
createboard()

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardchosenId[0]
    const optionTwoId=cardchosenId[1]

    if(optionOneId==optionTwoId){
        alert('You have clicked the same imagee!')
    }

    console.log('Check for Match!')
    if(cardschosen[0]==cardschosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','white.png')
        cards[optionTwoId].setAttribute('src','white.png')
        cards[optionOneId].removeEventListener('click','flipCard')
        cards[optionTwoId].removeEventListener('click','flipCard')
cardsWon.push(cardschosen)

    }
    cardschosen=[]
cardchosenId=[]
}



function flipcard()
{
    let cardId=this.getAttribute('data-id')
   
   cardschosen.push(cardarry[cardId].name) 
   cardchosenId.push(cardId )
   console.log(cardschosen)
   console.log(cardchosenId )
this.setAttribute('src',cardarry[cardId].img)

if(cardschosen.length===2){
    setTimeout(checkMatch,500) 
}
}
