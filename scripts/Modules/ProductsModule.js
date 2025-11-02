const ProductsModule = (() => {
/* 
lager kjøtt data, lager flere forskjellige kjøtt
 produkter med id, navn, bilde og pris
*/ 
  const kjøttdata = [
    { id: 1,
       navn: "chipotle pølse",
        bilde: "chipotle-polse.jpg", 
        pris: 99
       },
    { 
      id: 2,
       navn: "farikalkjøtt",
        bilde: "farikalkjøtt.jpg",
         pris: 149
        },
    { 
      id: 3,
       navn: "grillpølse",
        bilde: "grillpolser.jpg",
         pris: 99
        },
    { 
      id: 4,
       navn: "karbonadedeig",
        bilde: "karbonadedeig.jpg", 
        pris: 329
       },
    { 
      id: 5,
       navn: "karbonader",
        bilde: "karbonader.jpg",
         pris: 229
        },
    { 
      id: 6,
       navn: "kyllingkjøttdeig",
        bilde: "kyllingkjottdeig.jpg",
         pris: 449
         },
    { 
      id: 7,
       navn: "røkte pølser",
        bilde: "rokte-kjottpølser.jpg",
         pris: 89
         },
    { 
      id: 8,
       navn: "wienerpølser",
        bilde: "wienerpolser.jpg",
         pris: 249
         }
  ];
/* retunerer produkter by get all,
 og henter produkter via id fra get by id */
  const getAll = () => kjøttdata;
  const getById = (id) => kjøttdata.find(item => item.id === id);
/*
retunererer get all og get by id slik at de kan brukes i andre filer
 */
  return {
    getAll,
    getById
  };

})();
/*
eksporterer products module slik at den kan brukes i andre filer
*/
export default ProductsModule;
