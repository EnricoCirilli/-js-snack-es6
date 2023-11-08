
// variable biciDaCorsa 


    const bicicle = {
    rider : [
    {
        nome: 'Bianchi',
       peso: 1,
    },
    {
       nome: 'Cannondale',
        peso : 2,
    },
    {
        nome :'Graziella',
       peso : 4,
    },
    {
       nome:'Pinarello',
       peso : 3,
    }
]

};
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const {rider} = bicicle;

for(let i = 0; i < rider.length; i++){

    const riders = rider[i];
    const {nome, peso} = riders;

    console.log(nome, peso);
}

if (peso = 1){
    console.log(`la bianchi ha il peso minore di ${peso}`);
}
