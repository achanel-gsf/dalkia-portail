// Configuration des locaux
// Pour ajouter un local : dupliquez un bloc, modifiez le code, le nom, l'URL d'intervention et le PDF.

// intervention: "https://externe.optimatracabilite.gsf.fr/public/pleaze/418?token=8b0227a578fba9afb075b810b745d033",
// planning: "pdf/Interventions_bureaux_reunion_r1.pdf"

const locaux = {

  // ==================================================
  // RDC - 8 LOCAUX
  // ==================================================

  "kaly-rdc-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-nord.pdf"
  },

  "kaly-rdc-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-sud.pdf"
  },

  "kaly-rdc-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-est.pdf"
  },

  "kaly-rdc-bureaux": {
    nom: "Bureaux",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-bureaux.pdf"
  },

  "kaly-rdc-hall-accueil": {
    nom: "Hall Accueil",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-hall-accueil.pdf"
  },

  "kaly-rdc-magasin": {
    nom: "Magasin",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-magasin.pdf"
  },

  "kaly-rdc-sdr-acacia": {
    nom: "Salle de réunion Acacia",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-sdr-acacia.pdf"
  },

  "kaly-rdc-sdr-albizia": {
    nom: "Salle de réunion Albizia",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-rdc-sdr-albizia.pdf"
  },


  // ==================================================
  // R+1 - 8 LOCAUX
  // ==================================================

  "kaly-r1-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-sanitaires-nord.pdf"
  },

  "kaly-r1-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-sanitaires-sud.pdf"
  },

  "kaly-r1-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-sanitaires-est.pdf"
  },

  "kaly-r1-place-village": {
    nom: "Place du Village",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-place-village.pdf"
  },

  "kaly-r1-circulations": {
    nom: "Circulations",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-circulations.pdf"
  },

  "kaly-r1-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-bureaux-nord.pdf"
  },

  "kaly-r1-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-bureaux-sud.pdf"
  },

  "kaly-r1-sdr-cedre": {
    nom: "Salle de réunion Cèdre",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r1-sdr-cedre.pdf"
  },


  // ==================================================
  // R+2 - 7 LOCAUX
  // ==================================================

  "kaly-r2-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-sanitaires-nord.pdf"
  },

  "kaly-r2-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-sanitaires-sud.pdf"
  },

  "kaly-r2-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-sanitaires-est.pdf"
  },

  "kaly-r2-circulations": {
    nom: "Circulations",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-circulations.pdf"
  },

  "kaly-r2-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-bureaux-nord.pdf"
  },

  "kaly-r2-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-bureaux-sud.pdf"
  },

  "kaly-r2-sdr-erable": {
    nom: "Salle de réunion Érable",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r2-sdr-erable.pdf"
  },


  // ==================================================
  // R+3 - 9 LOCAUX
  // ==================================================

  "kaly-r3-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sanitaires-nord.pdf"
  },

  "kaly-r3-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sanitaires-sud.pdf"
  },

  "kaly-r3-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sanitaires-est.pdf"
  },

  "kaly-r3-circulations": {
    nom: "Circulations",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-circulations.pdf"
  },

  "kaly-r3-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-bureaux-nord.pdf"
  },

  "kaly-r3-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-bureaux-sud.pdf"
  },

  "kaly-r3-sdr-orme": {
    nom: "Salle de réunion Orme",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sdr-orme.pdf"
  },

  "kaly-r3-sdr-paletuvier": {
    nom: "Salle de réunion Palétuvier",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sdr-paletuvier.pdf"
  },

  "kaly-r3-sdr-pin-parasol": {
    nom: "Salle de réunion Pin parasol",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r3-sdr-pin-parasol.pdf"
  },


  // ==================================================
  // R+4 - 6 LOCAUX
  // ==================================================

  "kaly-r4-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-sanitaires-sud.pdf"
  },

  "kaly-r4-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-sanitaires-est.pdf"
  },

  "kaly-r4-circulations": {
    nom: "Circulations",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-circulations.pdf"
  },

  "kaly-r4-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-bureaux-nord.pdf"
  },

  "kaly-r4-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-bureaux-sud.pdf"
  },

  "kaly-r4-sdr-sequoia": {
    nom: "Salle de réunion Sequoia",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER",
    planning: "plannings/A_MODIFIER-r4-sdr-sequoia.pdf"
  }

};
