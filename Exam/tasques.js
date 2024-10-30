const fs = require('fs');


//Tasca 1

try {

var dataJSON = fs.readFileSync('./Exam/productes.json', 'utf8');

} catch (error) {
    console.error('Error:', error);
}


function llegirProductes(json) {

    const productes = JSON.parse(json);

    return productes;    

}



arrayProductes = llegirProductes(dataJSON);

//Tasca 2

function mostrarProducte(producte) {

    console.log(`Nom: ${producte.nom}`);
    console.log(`Marca: ${producte.marca}`);
    console.log(`Categoria: ${producte.categoria}`);
    console.log(`Preu: ${producte.preu}`);
    for (var propety in producte.caracteristiques) {
        console.log(`${propety}: ${producte.caracteristiques[propety]}`);
    }

}



//Tasca 3

function mostrarProductes(productes) {

    productes.forEach(producte => {
        console.log(`Nom: ${producte.nom}`);
        console.log(`Marca: ${producte.marca}`);
        console.log(`Categoria: ${producte.categoria}`);
        console.log(`Preu: ${producte.preu}`);
        for (var propety in producte.caracteristiques) {
            console.log(`${propety}: ${producte.caracteristiques[propety]}`);
        }
        console.log(`\n`);
    });

}



//Tasca 4

id = 2;

function mostrarProducteID(productes, id) {

    const producte = productes.find(producte => producte.id === id);

    console.log(`Nom: ${producte.nom}`);
    console.log(`Marca: ${producte.marca}`);
    console.log(`Categoria: ${producte.categoria}`);
    console.log(`Preu: ${producte.preu}`);
    for (var propety in producte.caracteristiques) {
        console.log(`${propety}: ${producte.caracteristiques[propety]}`);
    }

}


//Tasca 5

mostrarProducte(arrayProductes[0]);

mostrarProductes(arrayProductes);

mostrarProducteID(arrayProductes, id);

