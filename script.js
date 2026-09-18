const select = document.getElementById('tolotra');
const divs = document.querySelectorAll('#formulaire > div');

select.addEventListener('change', () => {
    divs.forEach(div => div.style.display = 'none');

    if (select.value) {
        const divASelectionner = document.querySelector('.' + select.value);
        if (divASelectionner) {
            divASelectionner.style.display = 'block';
            document.querySelector('h1 span').textContent = 0 + ' Ar';
        }
    }
});

const dateDebutFilazana = document.getElementById('date_debut_filazana');
const dateFinFilazana = document.getElementById('date_fin_filazana');
const lignesFilazana = document.getElementById('lignes_filazana');

function genererLignesFilazana() {
    if (!dateDebutFilazana.value || !dateFinFilazana.value) {
        return;
    }

    lignesFilazana.innerHTML = '';

    let dateActuelle = new Date(dateDebutFilazana.value);
    const dateFin = new Date(dateFinFilazana.value);

    while (dateActuelle <= dateFin) {
        const dateStr = dateActuelle.toISOString().split('T')[0];

        const ligne = document.createElement('div');
        ligne.innerHTML = `
            <span>${dateStr}</span>
            <label>Matin <input type="checkbox" name="creneaux[${dateStr}][matin]"></label>
            <label>Midi <input type="checkbox" name="creneaux[${dateStr}][midi]"></label>
            <label>Soir <input type="checkbox" name="creneaux[${dateStr}][soir]"></label>
        `;
        lignesFilazana.appendChild(ligne);

        dateActuelle.setDate(dateActuelle.getDate() + 1);
    }
}

dateDebutFilazana.addEventListener('change', genererLignesFilazana);
dateFinFilazana.addEventListener('change', genererLignesFilazana);

function calculerMontantFilazana() {
    const prixParCreneau = document.getElementById('fidirambola').checked ? 2000 : 1000;
    const checkboxesCreneaux = lignesFilazana.querySelectorAll('input[type="checkbox"]:checked');
    const montant = checkboxesCreneaux.length * prixParCreneau;

    document.querySelector('h1 span').textContent = montant + ' Ar';
}

lignesFilazana.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        calculerMontantFilazana();
    }
});

document.getElementById('fidirambola').addEventListener('change', calculerMontantFilazana);

const dateDebutSpot = document.getElementById('date_debut_spot');
const dateFinSpot = document.getElementById('date_fin_spot');
const lignesSpot = document.getElementById('lignes_spot');

function genererLignesSpot() {
    if (!dateDebutSpot.value || !dateFinSpot.value) {
        return;
    }

    lignesSpot.innerHTML = '';

    let dateActuelle = new Date(dateDebutSpot.value);
    const dateFin = new Date(dateFinSpot.value);

    while (dateActuelle <= dateFin) {
        const dateStr = dateActuelle.toISOString().split('T')[0];

        const ligne = document.createElement('div');
        ligne.innerHTML = `
            <span>${dateStr}</span>
            <label>Matin <input type="checkbox" name="creneaux_spot[${dateStr}][matin]"></label>
            <label>Midi <input type="checkbox" name="creneaux_spot[${dateStr}][midi]"></label>
            <label>Soir <input type="checkbox" name="creneaux_spot[${dateStr}][soir]"></label>
        `;
        lignesSpot.appendChild(ligne);

        dateActuelle.setDate(dateActuelle.getDate() + 1);
    }
}

function calculerMontantSpot() {
    const prixParCreneau = document.getElementById('fidirambola_spot').checked ? 4000 : 2000;
    const checkboxesCreneaux = lignesSpot.querySelectorAll('input[type="checkbox"]:checked');
    const montant = checkboxesCreneaux.length * prixParCreneau;

    document.querySelector('h1 span').textContent = montant + ' Ar';
}

dateDebutSpot.addEventListener('change', genererLignesSpot);
dateFinSpot.addEventListener('change', genererLignesSpot);

lignesSpot.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        calculerMontantSpot();
    }
});

document.getElementById('fidirambola_spot').addEventListener('change', calculerMontantSpot);

const dateDebutAnelanelany = document.getElementById('date_debut_anelanelany');
const dateFinAnelanelany = document.getElementById('date_fin_anelanelany');
const lignesAnelanelany = document.getElementById('lignes_anelanelany');

function genererLignesAnelanelany() {
    if (!dateDebutAnelanelany.value || !dateFinAnelanelany.value) {
        return;
    }

    lignesAnelanelany.innerHTML = '';

    let dateActuelle = new Date(dateDebutAnelanelany.value);
    const dateFin = new Date(dateFinAnelanelany.value);

    while (dateActuelle <= dateFin) {
        const dateStr = dateActuelle.toISOString().split('T')[0];

        const ligne = document.createElement('div');
        ligne.innerHTML = `
            <span>${dateStr}</span>
            <label>10h <input type="checkbox" name="creneaux_anelanelany[${dateStr}][dix]"></label>
            <label>10h30 <input type="checkbox" name="creneaux_anelanelany[${dateStr}][dix30]"></label>
            <label>12h30 <input type="checkbox" name="creneaux_anelanelany[${dateStr}][douze30]"></label>
            <label>13h30 <input type="checkbox" name="creneaux_anelanelany[${dateStr}][treize30]"></label>
            <label>19h30 <input type="checkbox" name="creneaux_anelanelany[${dateStr}][dixneuf30]"></label>
        `;
        lignesAnelanelany.appendChild(ligne);

        dateActuelle.setDate(dateActuelle.getDate() + 1);
    }
}

function calculerMontantAnelanelany() {
    const prixParCreneau = document.getElementById('fidirambola_anelanelany').checked ? 10000 : 5000;
    const checkboxesCreneaux = lignesAnelanelany.querySelectorAll('input[type="checkbox"]:checked');
    const montant = checkboxesCreneaux.length * prixParCreneau;

    document.querySelector('h1 span').textContent = montant + ' Ar';
}

dateDebutAnelanelany.addEventListener('change', genererLignesAnelanelany);
dateFinAnelanelany.addEventListener('change', genererLignesAnelanelany);

lignesAnelanelany.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        calculerMontantAnelanelany();
    }
});

document.getElementById('fidirambola_anelanelany').addEventListener('change', calculerMontantAnelanelany);

const moisPrecedentTolotrasa = document.getElementById('mois_precedent_tolotrasa');
const moisSuivantTolotrasa = document.getElementById('mois_suivant_tolotrasa');
const moisAfficheTolotrasa = document.getElementById('mois_affiche_tolotrasa');
const grilleTolotrasa = document.getElementById('grille_tolotrasa');

let dateAffichee = new Date();
const datesSelectionneesTolotrasa = new Set();

const nomsMois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function genererGrilleTolotrasa() {
    grilleTolotrasa.innerHTML = '';

    const annee = dateAffichee.getFullYear();
    const mois = dateAffichee.getMonth();

    moisAfficheTolotrasa.textContent = nomsMois[mois] + ' ' + annee;

    const premierJour = new Date(annee, mois, 1);
    const nombreJoursMois = new Date(annee, mois + 1, 0).getDate();

    // décalage pour commencer un lundi (0 = dimanche dans JS, donc on ajuste)
    let decalage = premierJour.getDay() - 1;
    if (decalage < 0) decalage = 6;

    for (let i = 0; i < decalage; i++) {
        const caseVide = document.createElement('div');
        grilleTolotrasa.appendChild(caseVide);
    }

    for (let jour = 1; jour <= nombreJoursMois; jour++) {
        const dateStr = `${annee}-${String(mois + 1).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;

        const caseJour = document.createElement('div');
        caseJour.textContent = jour;
        caseJour.style.cursor = 'pointer';
        caseJour.style.border = '1px solid #ccc';
        caseJour.style.display = 'inline-block';
        caseJour.style.padding = '5px';

        if (datesSelectionneesTolotrasa.has(dateStr)) {
            caseJour.style.backgroundColor = 'lightgreen';
        }

        caseJour.addEventListener('click', () => {
            if (datesSelectionneesTolotrasa.has(dateStr)) {
                datesSelectionneesTolotrasa.delete(dateStr);
            } else {
                datesSelectionneesTolotrasa.add(dateStr);
            }
            genererGrilleTolotrasa();
            calculerMontantTolotrasa();
        });

        grilleTolotrasa.appendChild(caseJour);
    }
}

function calculerMontantTolotrasa() {
    const montant = datesSelectionneesTolotrasa.size * 5000;
    document.querySelector('h1 span').textContent = montant + ' Ar';
}

moisPrecedentTolotrasa.addEventListener('click', () => {
    dateAffichee.setMonth(dateAffichee.getMonth() - 1);
    genererGrilleTolotrasa();
});

moisSuivantTolotrasa.addEventListener('click', () => {
    dateAffichee.setMonth(dateAffichee.getMonth() + 1);
    genererGrilleTolotrasa();
});

genererGrilleTolotrasa();

const semainesSakaiza = document.getElementById('semaines_sakaiza');
const ajouterSemaineSakaiza = document.getElementById('ajouter_semaine_sakaiza');
let compteurSemaineSakaiza = 0;

function calculerFinSemaineSakaiza(dateDebutStr) {
    let date = new Date(dateDebutStr);
    let joursComptes = 0;
    let dateFin;

    while (joursComptes < 6) {
        if (date.getDay() !== 0) { // 0 = dimanche
            joursComptes++;
            dateFin = new Date(date);
        }
        if (joursComptes < 6) {
            date.setDate(date.getDate() + 1);
        }
    }

    return dateFin;
}

function ajouterLigneSemaineSakaiza() {
    const index = compteurSemaineSakaiza++;

    const ligne = document.createElement('div');
    ligne.dataset.index = index;
    ligne.innerHTML = `
        <label>Manomboka ny <input type="date" class="date_semaine_sakaiza"></label>
        <label>Maraina <input type="checkbox" class="maraina_sakaiza"></label>
        <label>Hariva <input type="checkbox" class="hariva_sakaiza"></label>
    `;
    semainesSakaiza.appendChild(ligne);

    const inputDate = ligne.querySelector('.date_semaine_sakaiza');

    // calcule la date min autorisée à partir de la semaine précédente
    const lignesExistantes = semainesSakaiza.querySelectorAll('div[data-index]');
    if (lignesExistantes.length > 1) {
        const ligneAvant = lignesExistantes[lignesExistantes.length - 2];
        const dateAvant = ligneAvant.querySelector('.date_semaine_sakaiza').value;

        if (dateAvant) {
            const finAvant = calculerFinSemaineSakaiza(dateAvant);
            let minSuivant = new Date(finAvant);
            minSuivant.setDate(minSuivant.getDate() + 1);

            if (minSuivant.getDay() === 0) {
                minSuivant.setDate(minSuivant.getDate() + 1);
            }

            inputDate.min = minSuivant.toISOString().split('T')[0];
        }
    }

    inputDate.addEventListener('change', () => {
        const date = new Date(inputDate.value);
        if (date.getDay() === 0) {
            alert("Tsy azo atao ny manomboka amin'ny alahady");
            inputDate.value = '';
            return;
        }
        calculerMontantSakaiza();
    });

    ligne.querySelector('.maraina_sakaiza').addEventListener('change', calculerMontantSakaiza);
    ligne.querySelector('.hariva_sakaiza').addEventListener('change', calculerMontantSakaiza);
}

function calculerMontantSakaiza() {
    let montant = 0;
    const lignes = semainesSakaiza.querySelectorAll('div[data-index]');

    lignes.forEach(ligne => {
        const maraina = ligne.querySelector('.maraina_sakaiza').checked;
        const hariva = ligne.querySelector('.hariva_sakaiza').checked;

        if (maraina && hariva) {
            montant += 20000;
        } else if (maraina || hariva) {
            montant += 10000;
        }
    });

    document.querySelector('h1 span').textContent = montant + ' Ar';
}

ajouterSemaineSakaiza.addEventListener('click', ajouterLigneSemaineSakaiza);

ajouterLigneSemaineSakaiza();

const chansonsHafatra = document.getElementById('chansons_hafatra');
const ajouterChansonHafatra = document.getElementById('ajouter_chanson_hafatra');

function creerBlocChansonHafatra() {
    const bloc = document.createElement('div');
    bloc.className = 'bloc_chanson_hafatra';
    bloc.style.border = '1px solid #999';
    bloc.style.margin = '10px 0';
    bloc.style.padding = '10px';
    bloc.innerHTML = `
        <input type="text" class="nom_chanson_hafatra" placeholder="Nom chanson"><br><br>
        <button type="button" class="mois_precedent">&lt;</button>
        <span class="mois_affiche"></span>
        <button type="button" class="mois_suivant">&gt;</button>
        <div class="grille_calendrier"></div>
    `;
    chansonsHafatra.appendChild(bloc);

    let dateAffichee = new Date();
    const datesSelectionnees = new Set();

    const grille = bloc.querySelector('.grille_calendrier');
    const moisAffiche = bloc.querySelector('.mois_affiche');

    function genererGrille() {
        grille.innerHTML = '';

        const annee = dateAffichee.getFullYear();
        const mois = dateAffichee.getMonth();

        moisAffiche.textContent = nomsMois[mois] + ' ' + annee;

        const premierJour = new Date(annee, mois, 1);
        const nombreJoursMois = new Date(annee, mois + 1, 0).getDate();

        let decalage = premierJour.getDay() - 1;
        if (decalage < 0) decalage = 6;

        for (let i = 0; i < decalage; i++) {
            grille.appendChild(document.createElement('div'));
        }

        for (let jour = 1; jour <= nombreJoursMois; jour++) {
            const dateStr = `${annee}-${String(mois + 1).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;

            const caseJour = document.createElement('div');
            caseJour.textContent = jour;
            caseJour.style.cursor = 'pointer';
            caseJour.style.border = '1px solid #ccc';
            caseJour.style.display = 'inline-block';
            caseJour.style.padding = '5px';

            if (datesSelectionnees.has(dateStr)) {
                caseJour.style.backgroundColor = 'lightgreen';
            }

            caseJour.addEventListener('click', () => {
                if (datesSelectionnees.has(dateStr)) {
                    datesSelectionnees.delete(dateStr);
                } else {
                    datesSelectionnees.add(dateStr);
                }
                genererGrille();
                calculerMontantHafatra();
            });

            grille.appendChild(caseJour);
        }
    }

    bloc.querySelector('.mois_precedent').addEventListener('click', () => {
        dateAffichee.setMonth(dateAffichee.getMonth() - 1);
        genererGrille();
    });

    bloc.querySelector('.mois_suivant').addEventListener('click', () => {
        dateAffichee.setMonth(dateAffichee.getMonth() + 1);
        genererGrille();
    });

    bloc.dataset.nbDates = 0;
    bloc._getNbDates = () => datesSelectionnees.size;

    genererGrille();
}

function calculerMontantHafatra() {
    let montant = 0;
    chansonsHafatra.querySelectorAll('.bloc_chanson_hafatra').forEach(bloc => {
        montant += 1000 * bloc._getNbDates();
    });

    document.querySelector('h1 span').textContent = montant + ' Ar';
}

ajouterChansonHafatra.addEventListener('click', creerBlocChansonHafatra);
creerBlocChansonHafatra();