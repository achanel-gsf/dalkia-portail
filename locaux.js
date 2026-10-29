// intervention: "https://externe.optimatracabilite.gsf.fr/public/pleaze/418?token=8b0227a578fba9afb075b810b745d033",
// planning: "pdf/Interventions_bureaux_reunion_r1.pdf"

// ==================================================
// CONFIGURATION DES LOCAUX - DALKIA KALY
// ==================================================
//
// A MODIFIER POUR CHAQUE LOCAL :
// - intervention : URL Optima
// - planning     : chemin du PDF
//
// ATTENTION : mettre uniquement l'URL Optima.
// Ne pas mettre de balise <a href="...">.
//
// ==================================================

const locaux = {

  // ==================================================
  // RDC - 8 LOCAUX
  // ==================================================

  "kaly-rdc-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_01",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-nord.pdf"
  },

  "kaly-rdc-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_02",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-sud.pdf"
  },

  "kaly-rdc-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_03",
    planning: "plannings/A_MODIFIER-rdc-sanitaires-est.pdf"
  },

  "kaly-rdc-bureaux": {
    nom: "Bureaux",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_04",
    planning: "plannings/A_MODIFIER-rdc-bureaux.pdf"
  },

  "kaly-rdc-hall-accueil": {
    nom: "Hall Accueil",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_05",
    planning: "plannings/A_MODIFIER-rdc-hall-accueil.pdf"
  },

  "kaly-rdc-magasin": {
    nom: "Magasin",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_06",
    planning: "plannings/A_MODIFIER-rdc-magasin.pdf"
  },

  "kaly-rdc-sdr-acacia": {
    nom: "Salle de réunion Acacia",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_07",
    planning: "plannings/A_MODIFIER-rdc-sdr-acacia.pdf"
  },

  "kaly-rdc-sdr-albizia": {
    nom: "Salle de réunion Albizia",
    etage: "RDC",
    intervention: "https://optima.example.com/A_MODIFIER_08",
    planning: "plannings/A_MODIFIER-rdc-sdr-albizia.pdf"
  },


  // ==================================================
  // R+1 - 8 LOCAUX
  // ==================================================

  "kaly-r1-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_09",
    planning: "plannings/A_MODIFIER-r1-sanitaires-nord.pdf"
  },

  "kaly-r1-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_10",
    planning: "plannings/A_MODIFIER-r1-sanitaires-sud.pdf"
  },

  "kaly-r1-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_11",
    planning: "plannings/A_MODIFIER-r1-sanitaires-est.pdf"
  },

  "kaly-r1-place-village": {
    nom: "Place du Village",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_12",
    planning: "plannings/A_MODIFIER-r1-place-village.pdf"
  },

  "kaly-r1-circulations": {
    nom: "Circulations",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_13",
    planning: "plannings/A_MODIFIER-r1-circulations.pdf"
  },

  "kaly-r1-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_14",
    planning: "plannings/A_MODIFIER-r1-bureaux-nord.pdf"
  },

  "kaly-r1-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_15",
    planning: "plannings/A_MODIFIER-r1-bureaux-sud.pdf"
  },

  "kaly-r1-sdr-cedre": {
    nom: "Salle de réunion Cèdre",
    etage: "R+1",
    intervention: "https://optima.example.com/A_MODIFIER_16",
    planning: "plannings/A_MODIFIER-r1-sdr-cedre.pdf"
  },


  // ==================================================
  // R+2 - 7 LOCAUX
  // ==================================================

  "kaly-r2-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_17",
    planning: "plannings/A_MODIFIER-r2-sanitaires-nord.pdf"
  },

  "kaly-r2-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_18",
    planning: "plannings/A_MODIFIER-r2-sanitaires-sud.pdf"
  },

  "kaly-r2-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_19",
    planning: "plannings/A_MODIFIER-r2-sanitaires-est.pdf"
  },

  "kaly-r2-circulations": {
    nom: "Circulations",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_20",
    planning: "plannings/A_MODIFIER-r2-circulations.pdf"
  },

  "kaly-r2-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_21",
    planning: "plannings/A_MODIFIER-r2-bureaux-nord.pdf"
  },

  "kaly-r2-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_22",
    planning: "plannings/A_MODIFIER-r2-bureaux-sud.pdf"
  },

  "kaly-r2-sdr-erable": {
    nom: "Salle de réunion Érable",
    etage: "R+2",
    intervention: "https://optima.example.com/A_MODIFIER_23",
    planning: "plannings/A_MODIFIER-r2-sdr-erable.pdf"
  },


  // ==================================================
  // R+3 - 9 LOCAUX
  // ==================================================

  "kaly-r3-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_24",
    planning: "plannings/A_MODIFIER-r3-sanitaires-nord.pdf"
  },

  "kaly-r3-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_25",
    planning: "plannings/A_MODIFIER-r3-sanitaires-sud.pdf"
  },

  "kaly-r3-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_26",
    planning: "plannings/A_MODIFIER-r3-sanitaires-est.pdf"
  },

  "kaly-r3-circulations": {
    nom: "Circulations",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_27",
    planning: "plannings/A_MODIFIER-r3-circulations.pdf"
  },

  "kaly-r3-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_28",
    planning: "plannings/A_MODIFIER-r3-bureaux-nord.pdf"
  },

  "kaly-r3-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_29",
    planning: "plannings/A_MODIFIER-r3-bureaux-sud.pdf"
  },

  "kaly-r3-sdr-orme": {
    nom: "Salle de réunion Orme",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_30",
    planning: "plannings/A_MODIFIER-r3-sdr-orme.pdf"
  },

  "kaly-r3-sdr-paletuvier": {
    nom: "Salle de réunion Palétuvier",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_31",
    planning: "plannings/A_MODIFIER-r3-sdr-paletuvier.pdf"
  },

  "kaly-r3-sdr-pin-parasol": {
    nom: "Salle de réunion Pin parasol",
    etage: "R+3",
    intervention: "https://optima.example.com/A_MODIFIER_32",
    planning: "plannings/A_MODIFIER-r3-sdr-pin-parasol.pdf"
  },


  // ==================================================
  // R+4 - 6 LOCAUX
  // ==================================================

  "kaly-r4-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_33",
    planning: "plannings/A_MODIFIER-r4-sanitaires-sud.pdf"
  },

  "kaly-r4-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_34",
    planning: "plannings/A_MODIFIER-r4-sanitaires-est.pdf"
  },

  "kaly-r4-circulations": {
    nom: "Circulations",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_35",
    planning: "plannings/A_MODIFIER-r4-circulations.pdf"
  },

  "kaly-r4-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_36",
    planning: "plannings/A_MODIFIER-r4-bureaux-nord.pdf"
  },

  "kaly-r4-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_37",
    planning: "plannings/A_MODIFIER-r4-bureaux-sud.pdf"
  },

  "kaly-r4-sdr-sequoia": {
    nom: "Salle de réunion Sequoia",
    etage: "R+4",
    intervention: "https://optima.example.com/A_MODIFIER_38",
    planning: "plannings/A_MODIFIER-r4-sdr-sequoia.pdf"
  }

};
