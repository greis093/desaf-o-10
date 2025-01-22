import "./style.css";
// 1.Selecciono los botones en HTML
let buttonCatA = document.querySelector("#cat-A");
let buttonCatB = document.querySelector("#cat-B");
let buttonCatC = document.querySelector("#cat-C");

//2.Creo un array para guardar los gatitos
let arrayCats = [];

//3.Referenciamos el elemento del DOM que va a contener la carita de los gatos en HTML
let contenedorCats = document.getElementById("contenedorCats");

//4. Creo una funcion añadir caritas
function addCat(caritaCat) {
  //5.Crear caritas como Span
  let carita = document.createElement("span");
  carita.textContent = caritaCat;
  contenedorCats.appendChild(carita);

  //6.Añade la carita al array
  arrayCats.push(caritaCat);

  //7.Añadir la cajas
  if (arrayCats.length > 4) {
    //7.1 Seleccionamos 5 ultimos elementos
    let catsIguales = arrayCats.slice(-5);
    //7.2 Comparamos los elementos que sean iguales
    if (catsIguales.every((gato) => gato === caritaCat)) {
      //7.3 Creamos un elemeto caja
      let caja = document.createElement("small");
      caja.textContent = "📦";
      //7.4 Seleccionamos todo el array y eliminamos el elemento span (gatitos)
      let newarrayCats = contenedorCats.querySelectorAll("span");
      newarrayCats.forEach((caritaCat) => caritaCat.remove());
      contenedorCats.prepend(caja);
      arrayCats = [];
    }
  }
}
buttonCatA.addEventListener("click", function () {
  addCat("😻");
});
buttonCatB.addEventListener("click", function () {
  addCat("😺");
});
buttonCatC.addEventListener("click", () => addCat("😹"));

//3. Añadir carita con un click

//2.Creamos un elemento dinamico que va a contener cada carita
