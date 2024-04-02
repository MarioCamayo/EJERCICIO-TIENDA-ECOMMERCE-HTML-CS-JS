// se selecciona los tres elementos donde se le agregaran los contenidos
const shopContent = document.getElementById('shopContent')
const verCarrito = document.getElementById('verCarrito')
const modalContainer = document.getElementById('modalContainer')


// se crea un array para que almacene los productos seleccionados
let carrito = []


// --------se recorre los productos y se le añade a un contenedor---------
products.forEach(product =>{
  const content = document.createElement('div')
  content.classList.add('card')
  content.innerHTML = `
  <img src='${product.imagen}'>
  <h3>${product.name}</h3>
  <p>${product.price}</p>
  `
  shopContent.append(content)


  // ------------se crea el botón de comprar----------------
  let btnCompar= document.createElement('button')
  btnCompar.innerText = 'Comprar'
  btnCompar.classList.add('btn-ventas')
  content.append(btnCompar)



  // ---------se le agrega un evento al botón------------
  btnCompar.addEventListener('click', ()=>{
   carrito.push({
      id:product.id,
      imagen:product.imagen,
      name:product.name,
      price:product.price
    })
   console.log(carrito)
  })
})


// ------------se agrega un evento al icono del carrito--------------
verCarrito.addEventListener('click', ()=>{
  modalContainer.innerHTML = ''
  modalContainer.style.display = 'flex'
  const modal = document.createElement('div')
  modal.className = 'modal'
  modal.innerHTML = `
  <h1 class='modal-title'>Carrito</h1>
  `
  modalContainer.append(modal)


// ------------------se crea un botón para el modal---------------
const modalButton = document.createElement('h1')
modalButton.className = 'modalButton'
modalButton.innerText = 'x'

modalButton.addEventListener('click', ()=>{
  modalContainer.style.display = 'none'
})

modal.append(modalButton)

carrito.forEach(product =>{
  let carritoContenido = document.createElement('div')
  carritoContenido.className = 'modal-content'
  carritoContenido.innerHTML = `
   <img src='${product.imagen}'>
   <h3>${product.name}</h3>
   <p>S/.${product.price}</p>
  `
  modalContainer.append(carritoContenido)
   })

   const total = carrito.reduce((acc, element)=>acc + element.price,0)
   const totalBuying = document.createElement('div')
   totalBuying.classList.add('total-content')
   totalBuying.innerHTML = `total a pagar: S/. ${total}`
   modalContainer.append(totalBuying)
})


