import Swal from 'sweetalert2'

export const validarFormulario = () => {
  document.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (!e.target.classList.contains('boton-form')) {
      console.log("si");
      
      return;
    }
    const nombre = (document.querySelector('#nombre')).value;
    const descripcion = (document.querySelector('#descripcion')).value;

    if (!validarTexto(nombre)) {
      Swal.fire({
        title: 'Error!',
        text: 'El campo nombre solo acepta letras',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  })
}

const validarTexto = (text) => {
  return /^[A-Za-z]$/.test(text);
}