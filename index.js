// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado 
// en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 
// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener 
// la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css 
// nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento 
// como el 1 no como el 0.
// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para
// el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>


// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

var lista = document.getElementsByClassName('color-list')[0]

for (i = 0; i < colorList.length; i++) {
  let li = document.createElement('li')
  li.className = "color-item"

  let divColor = document.createElement('div')
  divColor.className = "color-name"
  divColor.innerHTML = `Color: ${colorList[i].colorName}`
  li.appendChild(divColor)

  let divMuestra = document.createElement('div')
  divMuestra.className = "color-show"
  divMuestra.innerHTML = 'Muestra'
  divMuestra.style.backgroundColor = `${colorList[i].hex}`
  li.appendChild(divMuestra)

  let buttonNext = document.createElement('button')
  buttonNext.className = "color-set"
  buttonNext.innerHTML = 'Next item color'
  li.appendChild(buttonNext)

  let buttonPage = document.createElement('button')
  buttonPage.className = "color-set"
  buttonPage.innerHTML = 'Page color'
  li.appendChild(buttonPage)

  lista.appendChild(li)
}

for (i = 1; i < lista.children.length; i++) {
  if (i % 2 == 0) {
    lista.children[i].classList.add('color-item--odd')
  }
}

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
var body = document.getElementsByTagName('body')[0]

body.addEventListener('click', () => {
  alert('body')
})
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
var lis = document.getElementsByTagName('li')

for (i = 1; i < lis.length; i++) {
  let color = lis[i].firstChild.textContent.split(': ')[1]

  lis[i].addEventListener('click', (e) => {
    e.stopPropagation()
    alert(color)
  })
}
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
for (i = 1; i < lis.length; i++) {
  let liCambiar
  if (i == lis.length - 1) {
    liCambiar = lis[1]
  } else {
    liCambiar = lis[i].nextSibling
  }

  let estiloFondo = lis[i].children[1].style.backgroundColor

  lis[i].children[2].addEventListener('click', (e) => {
    e.stopPropagation()
    liCambiar.style.backgroundColor = estiloFondo
  })
}
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).
for (i = 1; i < lis.length; i++) {
  let estiloFondo = lis[i].children[1].style.backgroundColor

  lis[i].children[3].addEventListener('click', (e) => {
    e.stopPropagation()
    body.style.backgroundColor = estiloFondo
  })
}