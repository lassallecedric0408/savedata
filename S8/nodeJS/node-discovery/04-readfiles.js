const fs = require('node:fs');
const path = require('node:path');
//console.log(fs);

//const filename = 'test.txt';
const filename = '01-process.js';
const pathfile = path.join(process.cwd(),filename);

// Afin de lire un fichier, on utilise la méthode readFileSync du module fs qui est la version synchrone de readFile, en 2eme argument on passe l'encodage du fichier, qui permet de s'assurer que le fichier sera lu en utf8 et en même d'obernir une string (lisible par un utilisateur humain) et non un buffer (lisible par un programme)
const content = fs.readFileSync(pathfile, 'utf8');
console.log('content en sync: ', content);

// On peut également utiliser la méthode readFile du module fs qui est la version asynchrone de readFileSync, elle prend en 2eme argument une callback qui sera appelée lorsque le fichier aura été lu
fs.readFile(pathfile, 'utf8', (err, content) => {
    if (err) {
        return console.error(err);
    }
    console.log('content en async: ', content);
});

// On peut également utiliser la méthode readFile contenu dans la propriété promises du module, elle retourne une promesse qui sera résolue lorsque le fichier aura été lu
fs.promises
    .readFile(pathfile, 'utf8')
    .then((content) => {
        console.log('content en async avec promises: ', content);
    })
    .catch((err) => {
        console.error(err);
    }
);

// On  peut simplifier l'implémentation de la promesses avec async/await mais ca oblige à créer une fonction nommée ou IIFE
async function read() {
    try {
        const content = await fs.promises.readFile(pathfile, 'utf8');
        console.log('content en async avec await: ', content);
    } catch (err) {
        console.error(err);
    }
};

read();

