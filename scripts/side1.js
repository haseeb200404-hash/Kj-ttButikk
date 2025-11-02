import ProductsModule from "./Modules/ProductsModule.js";

/* 
// Henter handlekurven fra localStorage eller setter en tom liste
*/
let cart = JSON.parse(localStorage.getItem("cart")) || [];
/*
Seksjonen hvor produkter skal vises
*/
const productSection = document.querySelector(".products-container");

/*
Funksjon for å legge til produkt i handlekurv
*/
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.navn} er lagt til i handlekurven!`);
}
/*Funksjon som viser alle produkter
*/
const showAll = () => {
  const allProducts = ProductsModule.getAll();
  let htmlTxt = "";

  allProducts.forEach(product => {
    htmlTxt += `
 <div class="xs-12 sm-6 md-4 lg-3">
   <article class="product-box">
 <img src="images/${product.bilde}" alt="${product.navn}" />                
  <div class="text-content">
 <h3 class="product-box__title">${product.navn}</h3>
   <p class="product-box__price">${product.pris} kr</p>
   <button class="button add-to-cart" data-id="${product.id}">                            
    Legg i handlekurv <i class="fa-solid fa-cart-shopping"></i>
     </button>    
        </div>
      </article>
     </div>
    `;
  });
/* fyller produktene i handlekurven */
  productSection.innerHTML = htmlTxt;
/* legger til klikkevent */
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const product = ProductsModule.getById(id);
      addToCart(product);
    });
  });
};
/* viser produktene når siden lastes inn */
showAll();
