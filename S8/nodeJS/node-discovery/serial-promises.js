/*
Javascript a 2 mode de fonctionnement distincts:
- Mode synchrone: les instructions sont exécutées les unes après les autres, dans l'ordre dans lequel elles ont été écrites.
- Mode asynchrone: les instructions sont exécutées dans un ordre différent de celui dans lequel elles ont été écrites. La finalité de ce mode est de ne pas bloquer l'exécution du programme pendant que des tâches asynchrones sont en cours d'exécution. Cela permet d'exécuter plusieurs tâches en même temps.

Il existe plusieurs façon d'implémenter le mode asynchrone en Javascript.


Le callback : pour les mettre en place on fourni une fonction qui sera exécutée que lorsque la tâche asynchrone sera terminée. Cette fonction est appelée "callback" car elle est appelée par le système asynchrone.

l'inconvénient majeur du callback est que si l'on souhaite en éxécuter plusieurs en série, il faut imbriquer les callbacks les unes dans les autres, ce qui rend le code difficile à lire et à maintenir.

jeDemandeDeLireUnFichier('lefichier.txt', function (err, data) {
    if (err) {
        return console.log('Erreur: ' + err);
    }
    console.log('Contenu du fichier: ' + data);
    jeDemandeDeLireUnAutreFichier('lefichier2.txt', function (err, data) {
        if (err) {
            return console.log('Erreur: ' + err);
        }
        console.log('Contenu du fichier: ' + data);
    });
});

Pour éviter ce problème, on peut utiliser les promesses.
La première façon d'implémenter des promesses est d'utiliser les méthode .then() et .catch().
Elle a l'avantage de permettre de chaîner les promesses et de centraliser la gestion des erreurs.

jeDemandeDeLireUnFichier('lefichier.txt').then(function (data) {
    console.log('Contenu du fichier: ' + data);
    return jeDemandeDeLireUnAutreFichier('lefichier2.txt');
}).then(function (data) {
    console.log('Contenu du fichier: ' + data);
}).catch(function (err) {
    console.log('Erreur: ' + err);
});

Par contre elle ne simplifie pas l'implémentation, elle se contente de fournir le méthode de callback dans un autre format.

Afin de régler ce problème de lisibilité, on peut utiliser les fonctions asynchrones dans un contexte async qui permet d'utiliser le mot clé await.
On se retrouvera avec un code plus lisible et plus facile à maintenir.

(async () => {
    try {
        const data = await jeDemandeDeLireUnFichier('lefichier.txt');
        console.log('Contenu du fichier: ' + data);
        const data2 = await jeDemandeDeLireUnAutreFichier('lefichier2.txt');
        console.log('Contenu du fichier: ' + data2);
    } catch (err) {
        console.log('Erreur: ' + err);
    }
})()
*/