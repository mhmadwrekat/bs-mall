'use strict' ;

let srcimg = [
  'wine-glass.jpg','water-can.jpg','unicorn.jpg','tauntaun.jpg','sweep.png','shark.jpg','scissors.jpg',
  'pet-sweep.jpg','pen.jpg','dragon.jpg','dog-duck.jpg','cthulhu.jpg','chair.jpg',
  'bubblegum.jpg','breakfast.jpg','boots.jpg','bathroom.jpg','banana.jpg','bag.jpg'
] ;

const section = document.getElementById('pic') ;
const list = document.getElementById('button') ;

let picOne = document.getElementById('picOne') ;
let picTwo = document.getElementById('picTwo') ;
let picThree = document.getElementById('picThree') ;
let counterClick = 25 ;
let count = 0 ;

let one = 0 ;
let two = 0 ;
let three = 0 ;
function stand (name , picSrc)
{
  this.name = name ;
  this.pic = picSrc ;
  this.see = 0 ;
  this.votes = 0 ;

  stand.arr.push(this) ;
}

stand.arr = [] ;

for ( let i = 0 ; i < srcimg.length ; i++)
{
  new stand ( srcimg[i].split('.')[0] , srcimg[i] ) ;
}

function print ()
{
  one = randNum( 0 , srcimg.length -1 ) ;

  do {
    two = randNum( 0 , srcimg.length -1 ) ;
  } while (one === two) ;

  do {
    three = randNum( 0 , srcimg.length -1 ) ;
  } while (two === three || one === three) ;

  picOne.src = ('./img/' + stand.arr[one].pic) ;
  picTwo.src = ('./img/' + stand.arr[two].pic) ;
  picThree.src = ('./img/' + stand.arr[three].pic) ;

  stand.arr[one].see++ ;
  stand.arr[two].see++ ;
  stand.arr[three].see++ ;
}

print () ;

section.addEventListener('click' , secFunc) ;

list.addEventListener('click',evenList) ;

function evenList ()
{
  const list = document.getElementById('list') ;

  let ul = document.createElement('ul');
  list.appendChild(ul) ;
  for ( let i = 0 ; i < stand.arr.length ; i++ )
  {let li = document.createElement('li');
    li.textContent = stand.arr[i].name + ' had ' + stand.arr[i].votes + ' Votes and was seen ' + stand.arr[i].see + ' times .' ;
    ul.appendChild(li) ;
  }
}

function secFunc (happend)
{
  if (happend.target.id === 'picOne' || happend.target.id === 'picTwo' || happend.target.id === 'picThree')
  {
    if ( count < counterClick )
    {
      if (happend.target.id === 'picOne')
      {print () ;
        count++ ;
        stand.arr[one].votes++ ;/* */
      }
      if (happend.target.id === 'picTwo')
      {print () ;
        count++ ;
        stand.arr[two].votes++;/* */
      }if (happend.target.id === 'picThree')
      {print () ;
        count++ ;
        stand.arr[three].votes++;/* */
      }
    }
  }
  else if ((happend.target.id === 'pic') && (count < counterClick))
  {print () ;
    count++ ;}

  if (count >= counterClick)
  {
    document.getElementById('pic').removeEventListener('click' , secFunc) ;
  }
}

function randNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
