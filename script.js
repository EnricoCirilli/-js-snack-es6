
// variable biciDaCorsa 

const bicicle = [
    {
        brand: 'Bianchi',
        weigth: 1,
    },
    {
        brand: 'Cannondale',
        weigth : 2,
    },
    {
        brand :'Graziella',
        weigth : 4,
    },
    {
        brand :'Pinarello',
        weigth : 3,
    },
]

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//console.log(biciDaCorsa);

const {brand, weigth} = bicicle;
console.log(brand, weigth);
