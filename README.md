# Portail GSF - DALKIA

Ce dossier contient une page web compatible GitHub Pages pour :

- demander une intervention selon le local scanne ;
- consulter le planning d'intervention correspondant au local.

## Fichiers

```text
index.html
locaux.js
pdf/
  planning-bureaux-kaly-r1-batiment-nord.pdf
```

## Mise en ligne sur GitHub Pages

1. Creer un depot GitHub public, par exemple `dalkia-portail`.
2. Envoyer `index.html`, `locaux.js` et le dossier `pdf` dans le depot.
3. Aller dans `Settings` puis `Pages`.
4. Choisir `Deploy from a branch`.
5. Selectionner la branche `main` et le dossier `/root`.
6. Enregistrer.

GitHub donnera ensuite une adresse du type :

```text
https://votre-compte.github.io/dalkia-portail/
```

## URL a utiliser pour le QR code

Pour le local deja configure :

```text
https://votre-compte.github.io/dalkia-portail/?local=bureaux-kaly-r1-batiment-nord
```

Remplacer `votre-compte` par votre identifiant GitHub.

## Ajouter un nouveau local

1. Ajouter le PDF du planning dans le dossier `pdf`.
2. Ouvrir `locaux.js`.
3. Ajouter un bloc comme ceci :

```javascript
"sanitaires-rdc": {
  nom: "Sanitaires RDC",
  site: "DALKIA",
  intervention: "https://url-du-formulaire-optima",
  planning: "pdf/planning-sanitaires-rdc.pdf"
}
```

L'URL du QR code sera ensuite :

```text
https://votre-compte.github.io/dalkia-portail/?local=sanitaires-rdc
```
