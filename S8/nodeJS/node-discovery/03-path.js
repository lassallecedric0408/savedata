const path = require('node:path');

// console.log(path);

// Comme dans le module OS qui permet de récupérer le delimiter de ligne os.EOL, on grâce au module path récupérer le séparateur de chemin de fichier
console.log('path.sep:', path.sep);
//console.log('/Users/yann/Sites/oClock/Promos/Meduse/node-d1-discovery');
console.log(`${path.sep}Users${path.sep}yann${path.sep}Sites${path.sep}oClock${path.sep}Promos${path.sep}Meduse${path.sep}node-d1-discovery`);

// Là on peut constater que c'est pas super pratique/lisible, on va donc utiliser la méthode join du module path
console.log(path.join('/Users', 'yann', 'Sites', 'oClock', 'Promos', 'Meduse', 'node-d1-discovery'));
// Ce qui correspond en fait à transformer les argument du join en tableau et de faire un vrai join sur ce tableau en utilisatnt path.sep comme séparateur de join
console.log(['/Users', 'yann', 'Sites', 'oClock', 'Promos', 'Meduse', 'node-d1-discovery'].join(path.sep));

// On peut normaliser un chemin pour supprimier les // par exemple
console.log("path.normalize('//Users//yann//Sites//oClock/Promos/Meduse/node-d1-discovery'):", path.normalize('//Users//yann//Sites//oClock/Promos/Meduse/node-d1-discovery'));

// On peut résoudre un chemin relatif par rapport à un chemin absolu
// La méthode la plus couramment utilisé est path.resolve qui va prendre en premier argument le chemin de base et en second () ou plus argument le chemin relatif
console.log(
    "path.resolve(process.cwd(), '01-process.js'):",
    path.resolve(process.cwd(), '01-process.js')
);

// PLus complexe avec plus d'arguments utilisés
console.log(
    "path.resolve(process.cwd(), '01-process.js'):",
    path.resolve(process.cwd(), '..', 'node-d1-discovery', '01-process.js')
);// /Users/yann/Sites/oClock/Promos/Meduse/node-d1-discovery/01-process.js

console.log("path.dirname(__filename):", path.dirname(__filename));
// égal à 
console.log('===');
console.log('process.cwd():', process.cwd());

// Imaginons que l'on rcupère un chemin fichier complet, on peut récupérer le répertoire pareent de ce fichier avec la méthode path.dirname
console.log("path.dirname('/Users/yann/.zshrc')", path.dirname('/Users/yann/.zshrc'));

// En fonction du chemain complet d'un fichier
console.log('__filename:', __filename);
// On peut récupérer seukement le nom du fichier avec la méthode path.basename
console.log('path.basename(__filename):', path.basename(__filename));

// On peut également récupérer l'extension du fichier avec la méthode path.extname
console.log('path.extname(__filename):', path.extname(__filename));