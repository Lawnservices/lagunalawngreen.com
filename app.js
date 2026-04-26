const saluda = document.getElementById('header');
window.onload = () =>{ 
const ana = new Date().getFullYear();
document.getElementById('time').textContent = ana;

const nuevo = document.createElement('p');
nuevo.textContent = 'THE BEST PRICES IN THE AREA.';
nuevo.classList.add('fade-in');
setTimeout(() => {
    document.getElementById('nuevomensaje').appendChild(nuevo);

     
    void nuevo.offsetWidth;
    nuevo.classList.add('visible');


}, 4000);

 
let nuevos = "Primera visita";
localStorage.setItem('visita', nuevos);

 
let cliente = localStorage.getItem('visita');

if(cliente){
    
    document.getElementById('mensaje').textContent = cliente;
}
 

};