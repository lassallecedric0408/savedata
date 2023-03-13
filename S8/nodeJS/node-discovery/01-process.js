// Comme dans un navigateur on peut utilise l'objet console pour afficher des messages dans la console (le terminal en Node.js)
console.log('01-process.js');

// process est un objet global qui contient des informations sur le processus en cours
// console.log(process);

// 2 façon de récupérer le répertoire de travail courant
// process.cwd() est une méthode qui retourne le répertoire de travail courant
console.log('process.cwd(): ', process.cwd());
// __dirname est une variable qui contient le répertoire de travail courant (mais attention elle ne fonctionne pas quand votre application est de type "Module" vous verrez cela plus tard)
console.log('__dirname: ', __dirname);
// on peut si on le souhaite changer de répertoire de travail avec la commande
process.chdir('./rep');
console.log('process.cwd() après changement: ', process.cwd());

// on peut obtenir également des informations précises sur l'utilisation des ressources de la machine su laquelle tourne le processus node.
console.log('process.cpuUsage()', process.cpuUsage());

// Grâce à uptime on peut connaitre le temps écoulé depuis le lancement du processus courant en secondes
console.log('process.uptime()', process.uptime());

// Dans le cas d'une erreur que l'on considère comme fatale, on peu quitter le processus courant avec le code par défaut 0, pour dire qu'une erreur est intervenue
// process.exit();

//Dans le cas la fin manuel du processus est normal (sans erreur) on enverra alors le code 1
// Si plus aucune instruction n'est a écuté dans un script et que plus aucune tâche asynchrone n'est en attente d'exécution, node terminera automatiquement le processus courant.
// process.exit(1);

process.kill(process.pid);// On peut également mettre fin a un processus en particulier en précisant l'id de celui-ci
process.kill(process.pid);