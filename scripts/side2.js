const cart = JSON.parse(localStorage.getItem("cart")) || [];

/* 
finner seksjonen i html hvor handlekurven skal vises
 */
const cartSection = document.querySelector(".cart-container");
/* 
sjekker om handler kurven er tom eller hvis det er ikke produkter i den så viser den
en melding til brukeren
*/
if (cart.length === 0) {
  cartSection.innerHTML = "<p>Handlekurven din har ikke noe kjøtt :(</p>";
} else {
  let total = 0;
/* 
starter html for handlekurv tabllen
*/
  let htmlTxt = `
    <h2>Oversikt over handlekurven</h2>
    <table class="cart-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Navn</th>
          <th>Bilde</th>
          <th>Pris</th>
        </tr>
      </thead>
      <tbody>
  `;
2
  /* 
  går gjennom hvert produkt i handlekurven og
   legger til en rad i tabellen for hvert produkt
  */
  cart.forEach(product => {
    htmlTxt += `
      <tr>
        <td>${product.id}</td>
        <td>${product.navn}</td>
        <td>
          <img class="cart-img" src="images/${product.bilde}" alt="${product.navn}">
        </td>
        <td>${product.pris} kr</td>
      </tr>
    `;
    total += product.pris;
  });
/* 
legger til avslutnings html og total pris
*/
  htmlTxt += `
      </tbody>
    </table>
    <h3 class="cart-total">Total: ${total} kr</h3>
  `;

  cartSection.innerHTML = htmlTxt;
}
