// On récupère un module par son nom, bien que son nom représente également le répertoire dans lequel il se trouve.
// pour determiner le module à récupérer il va remonter chaque repertoire jusqu'à la racine du disque dur, jusqu'à trouver un sous-repertoire "os" dans un repertoire "node_modules", si ok sous-repertoire "os" n'a été trouvé, alors il tentera de récupérer un module natif nommé "os", si aucun module "os" n'a été trouvé alors il renverra unune erreur d'importation.

// const unknown = require('unknown'); // Renvoi une erreur "Cannot find module 'unknown'"

const os = require('os');

// Il existe un alias pour bien voir que c'est un module natif de node
//const os = require('node:os');

// A partir de la version 18 de Node c'est officialisé l'import de module via les ESM (EcmaScript Module)
// import * as os from 'os';

//console.log(os)

// Afin de s'assurer de la représentation du formatage sur tout les systèmes d'exploitation on utilisera plutôt os.EOL que le caractère arbitraire de notre choix. Car chaque OS à son propre retour ligne.

// Ces 2 exemples auront la même représentation sur linux et MacOS, mais seront différentes sous Windows car il utilise "\r\n" pour un retour ligne.
console.log('texte\nmultiligne');
console.log(`texte${os.EOL}multiligne`);

// Même si la propriété EOL est la plus utilisé dans une application, on peut retrouver plusieurs méthodes nous permettant d'analyser la situation actuel d'un OS

// On peut par exemple analyser la mémoire disponible sur le serveur
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());

console.log('os.platform():', os.platform());
console.log('os.userInfo():', os.userInfo());