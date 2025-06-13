//Importaciones
import './style.css';
import 'remixicon/fonts/remixicon.css';
import * as categoryController from './views/category/categoryController.js';
import * as productController from './views/product/productController.js';
import * as homeController from './views/home/homeController.js';

//Variables
const main = document.querySelector('.main');

const rutas = [
  {
    name: "category",
    path: "/src/views/category/index.html",
    src: categoryController
  },
  {
    name: "product",
    path: "/src/views/product/index.html",
    src: productController
  },
  {
    name: "home",
    path: "/src/views/home/index.html",
    src: homeController
  }
];

//Funciones
const get = async(folder) => {
  const response = await fetch(`src/views/${folder}/index.html`);
  const data = await response.text();
  return data;
}

const enrutador = async (locationHash) => {
  const hash = locationHash.slice(1);

  const vista = rutas.find(({ name }) => name == hash);
  console.log(vista);

  main.innerHTML = await get(vista.name);
  // window.location.hash = vista.name + vista.path;
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  enrutador(location.hash);

  //Hashchange
  window.addEventListener('hashchange', async(e) => {
    enrutador(location.hash);
  })
})