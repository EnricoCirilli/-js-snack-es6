
// variable biciDaCorsa 


    const biciclette = [
    
        {
        nome: "Bianchi",
       peso: 14
        },
        {
       nome: 'Cannondale',
        peso : 13
    
        },
        {
        nome :'Graziella',
       peso : 21
       },
     {
       nome:'AAAA',
       peso : 11
    },
    {
        nome:'BBB',
        peso : 16
     },
     {
        nome:'CCC',
        peso : 19
     },
]

let minPeso = biciclette[0].peso;

biciclette.forEach((item)=> {
const {nome, peso} = item;
console.log(nome, peso);

if (peso < minPeso) {
    minPeso = peso;
}

});

console.log(minPeso);