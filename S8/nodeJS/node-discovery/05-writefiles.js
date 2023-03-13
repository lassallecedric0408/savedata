const fs = require('node:fs');
const path = require('node:path');

const filename = 'settings.json';
const settings = {
    name: 'node-discovery',
    version: '1.0.0',
    description: 'Node.js discovery',
    keywords: ['node', 'discovery', 'module', 'js'],
}

// Ici on va faire en sorte de créer un fichier json à partir de notre objet settings
// On va donc utiliser la méthode JSON.stringify pour transformer notre objet en string
const content = JSON.stringify(settings, null, 2);
// On va ensuite utiliser la méthode writeFileSync du module fs pour écrire notre string dans un fichier
// On va utiliser la méthode path.join pour créer le chemin vers le fichier
const pathfile = path.join(process.cwd(),filename);
// Il faut préciser le chemin vers le fichier, le contenu à écrire et l'encodage
fs.writeFileSync(pathfile, content, 'utf8');

// Version asynchrone
(async () => {
    try {
        fs.promises.writeFile(pathfile, content, 'utf8');
    }catch(err) {
        console.error(err);
    }
})();

// Afin de gérer l'écriture de gros fichiers on aura plutôt tendance à utiliser la méthode createWriteStream du module fs qui retourne un objet de type WriteStream qui permet d'écrire dans un fichier en plusieurs fois. Cela évite de surcharger la mémoire vive de la machine.

(async () => {
    try {
        const pathfile2 = path.join(process.cwd(),'numbers.txt');

        // La création d'un stream n'est pas une promesse, cela créer directement un objet de type WriteStream
        const stream = fs.createWriteStream(pathfile2, 'utf8');

        // Array.from({length: 100}) créer un tableau de 100 éléments tous undefined
        for(let index=0; index< 100; index+=1) {
            // On écrit une ligne à chaque itération dans le stream, cette méthode est synchrone
            stream.write(`${index}\n`);
        }

        // On ferme le stream, par contre lui il est asynchrone
        // Await exécute la promesse et attend qu'elle soit résolue avant de continuer l'exécution du code
        await stream.end();
    }catch(err) {
        console.error(err);
    }
})();

// De nombreuses méthodes de fs sont disponibles, en fait toute la panoplie d'outil que l'on peut trouver dans un terminal de type bash ou zsh, se retrouve également dans node.
// On pourrait faire en sorte par exemple de copier le fichier fraichement créé afin d'en faire une sauvegarde

(async () => {
    try {
        const source = path.join(process.cwd(),'numbers.txt');
        const destination = path.join(process.cwd(),'numbers.txt.bak');
        await fs.promises.copyFile(source, destination/*, fs.constants.COPYFILE_EXCL*/);
    } catch(err) {
        console.error(err);
    }
})();

const stats = fs.statSync(path.join(process.cwd(),'numbers.txt'));

console.log(stats);

console.log(stats.mode.toString(8));