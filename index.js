window.onload = inicio;

function inicio(){
  
  for(let i=1; i<=49; i++) {
    document.querySelector('#box').insertAdjacentHTML("beforeend",`<div class="carre">${i}</div>`);
  }
    
  for(let i=0; i<49; i++){
    document.querySelectorAll('.carre')[i].onclick=colorear;
  }
}

function colorear(){
  //segundo:
  if(this.style.color != "white"){
    this.style.backgroundColor='red';
    this.style.color='white';

    let numero=this.innertHTML;
    document.querySelector('#box').insertAdjacentHTML("afterend",`<div class="carre2">${numero}</div>`);
  }
  else {
    
    this.style = null;
    //null va eleiminar las propiedades de js y va a tomar la de css
  }
  //primer(this) va sustituir :
  // document.querySelectorAll('.carre')[0].style.backgroundColor='red';
  
  
}

