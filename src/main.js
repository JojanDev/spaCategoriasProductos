//Importaciones
import "./style.css";
import "remixicon/fonts/remixicon.css";
import * as CategoryController from "./views/category/CategoryController";
import * as ProductController from "./views/product/ProductController";
import * as HomeController from "./views/home/homeController";
import { validarFormulario } from "./views/category/validateForm";

//Variables
const main = document.querySelector(".main");

const rutas = [
  {
    name: "category",
    path: "/src/views/category/index.html",
    src: CategoryController.category,
  },
  {
    name: "product",
    path: "/src/views/product/index.html",
    src: ProductController.product,
  },
  {
    name: "home",
    path: "/src/views/home/index.html",
    src: HomeController.home,
  },
  {
    name: "createCategory",
    path: "/src/views/category/createCategory.html",
    src: validarFormulario,
  },
];

//Funciones
const get = async (path) => {
  const response = await fetch(path);
  const data = await response.text();
  return data;
};

const enrutador = async (locationHash) => {
  const hash = locationHash.slice(1);

  const vista = rutas.find(({ name }) => name == hash);
  // console.log(vista);

  main.innerHTML = await get(vista.path);
  // window.location.hash = vista.name + vista.path;
  vista.src();
};

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  enrutador(location.hash);

  //Hashchange
  window.addEventListener("hashchange", async (e) => {
    enrutador(location.hash);
  });
});
