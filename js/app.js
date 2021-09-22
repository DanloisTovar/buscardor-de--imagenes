// selectores:
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const paginacion = document.querySelector('#paginacion');

// inicio:

window.onload = () => {
  formulario.addEventListener('submit', validarFormulario);
};

// *********************************************

// funciones:

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector('#termino').value;

  if (terminoBusqueda === '') {
    mostrarAlerta('agrega un termino de busqueda.');
    return;
  }
  f;
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector('.bg-red-100');
  if (!existeAlerta) {
    const alerta = document.createElement('p');
    alerta.classList.add(
      'bg-red-100',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'max-w-xl',
      'mx-auto',
      'mt-6',
      'text-center'
    );

    alerta.innerHTML = `  
   <strong class="font-bold" >Error <span class="block sm:inline">${mensaje}</span></strong> 
   `;

    //  insertar en html:
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
