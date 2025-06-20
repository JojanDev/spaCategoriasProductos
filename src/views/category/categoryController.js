import { validarFormulario } from "./validateForm";

export const category = async () => {
  const categorias = (await getCategorias()).data;

  const section = document.querySelector('section');

  console.log(section);
  
  categorias.forEach(categoria => {
    console.log(categoria);
    
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('p');

    const contenedorBtns = document.createElement('div');
    const btnEdit = document.createElement('button');
    const btnDelet = document.createElement('button');

    card.classList.add('card');
    body.classList.add('body');
    title.classList.add('title');
    contenedorBtns.classList.add('contenedorBtns');
    btnEdit.classList.add('boton-card', 'btnEdit');
    btnDelet.classList.add('boton-card', 'btnDelete');

    title.textContent = `${categoria.nombre}`;
    body.textContent = `${categoria.descripcion}`;

    btnEdit.textContent = "Edit";
    btnDelet.textContent = "Delete";

    contenedorBtns.append(btnEdit, btnDelet);
    card.append(title, body, contenedorBtns);
    // console.log(card);
    section.appendChild(card);
  });

  validarFormulario();
}

const getCategorias = async () => {
  const response = await fetch('http://localhost:4044/api/categorias');
  return await response.json();
}