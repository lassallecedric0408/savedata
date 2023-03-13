/*

Pour ce qui est du parallélisme, on peut également utiliser les 3 façon suivantes:

Le callback devient un peu plus lisible, mais on a toujours le souci de gestion des erreurs.

jeDemandeDeLireUnFichier('lefichier.txt', function (err, data) {
    if (err) {
        return console.log('Erreur: ' + err);
    }
    console.log('Contenu du fichier: ' + data);
});
jeDemandeDeLireUnAutreFichier('lefichier2.txt', function (err, data) {
    if (err) {
        return console.log('Erreur: ' + err);
    }
    console.log('Contenu du fichier: ' + data);
});

Les prommesses avec .then() et .catch() n'on aucun avantage par rapport aux callbacks

jeDemandeDeLireUnFichier('lefichier.txt').then(function (data) {
    console.log('Contenu du fichier: ' + data);
}).catch(function (err) {
    console.log('Erreur: ' + err);
});
jeDemandeDeLireUnAutreFichier('lefichier2.txt').then(function (data) {
    console.log('Contenu du fichier: ' + data);
}).catch(function (err) {
    console.log('Erreur: ' + err);
});

Par contre les promesses avec async/await retes tout aussi lisible et bougrements efficace pour l'executions de celles-ci en parallèle, grâce à la méthode Promise.all()

(async () => {
    try {
        const promises = [];
        promises.push(jeDemandeDeLireUnFichier('lefichier.txt'));
        promises.push(jeDemandeDeLireUnAutreFichier('lefichier2.txt'));
        const [data, data2] = await Promise.all(promises);
    } catch (err) {
        console.log('Erreur: ' + err);
    }
})()
*/