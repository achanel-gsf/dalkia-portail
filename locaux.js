// Configuration des locaux
// Pour ajouter un local : dupliquez un bloc, modifiez le code, le nom, l'URL d'intervention et le PDF.

// intervention: "https://externe.optimatracabilite.gsf.fr/public/pleaze/418?token=8b0227a578fba9afb075b810b745d033",
// planning: "pdf/Interventions_bureaux_reunion_r1.pdf"

const LOCAUX = {

  // =====================================================
  // RDC - 8 locaux
  // =====================================================

  "kaly-rdc-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-nord-rdc",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-nord-rdc.pdf"
  },

  "kaly-rdc-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-sud-rdc",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-sud-rdc.pdf"
  },

  "kaly-rdc-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-est-rdc",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-est-rdc.pdf"
  },

  "kaly-rdc-bureaux": {
    nom: "Bureaux",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-rdc",
    planning: "https://A-MODIFIER-PLANNING/bureaux-rdc.pdf"
  },

  "kaly-rdc-hall-accueil": {
    nom: "Hall Accueil",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/hall-accueil-rdc",
    planning: "https://A-MODIFIER-PLANNING/hall-accueil-rdc.pdf"
  },

  "kaly-rdc-magasin": {
    nom: "Magasin",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/magasin-rdc",
    planning: "https://A-MODIFIER-PLANNING/magasin-rdc.pdf"
  },

  "kaly-rdc-sdr-acacia": {
    nom: "SDR Acacia",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-acacia-rdc",
    planning: "https://A-MODIFIER-PLANNING/sdr-acacia-rdc.pdf"
  },

  "kaly-rdc-sdr-albizia": {
    nom: "SDR Albizia",
    etage: "RDC",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-albizia-rdc",
    planning: "https://A-MODIFIER-PLANNING/sdr-albizia-rdc.pdf"
  },


  // =====================================================
  // R+1 - 8 locaux
  // =====================================================

  "kaly-r1-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-nord-r1",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-nord-r1.pdf"
  },

  "kaly-r1-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-sud-r1",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-sud-r1.pdf"
  },

  "kaly-r1-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-est-r1",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-est-r1.pdf"
  },

  "kaly-r1-place-village": {
    nom: "Place du Village",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/place-village-r1",
    planning: "https://A-MODIFIER-PLANNING/place-village-r1.pdf"
  },

  "kaly-r1-circulations": {
    nom: "Circulations",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/circulations-r1",
    planning: "https://A-MODIFIER-PLANNING/circulations-r1.pdf"
  },

  "kaly-r1-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-nord-r1",
    planning: "https://A-MODIFIER-PLANNING/bureaux-nord-r1.pdf"
  },

  "kaly-r1-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-sud-r1",
    planning: "https://A-MODIFIER-PLANNING/bureaux-sud-r1.pdf"
  },

  "kaly-r1-sdr-cedre": {
    nom: "SDR Cèdre",
    etage: "R+1",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-cedre-r1",
    planning: "https://A-MODIFIER-PLANNING/sdr-cedre-r1.pdf"
  },


  // =====================================================
  // R+2 - 7 locaux
  // =====================================================

  "kaly-r2-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-nord-r2",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-nord-r2.pdf"
  },

  "kaly-r2-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-sud-r2",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-sud-r2.pdf"
  },

  "kaly-r2-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-est-r2",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-est-r2.pdf"
  },

  "kaly-r2-circulations": {
    nom: "Circulations",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/circulations-r2",
    planning: "https://A-MODIFIER-PLANNING/circulations-r2.pdf"
  },

  "kaly-r2-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-nord-r2",
    planning: "https://A-MODIFIER-PLANNING/bureaux-nord-r2.pdf"
  },

  "kaly-r2-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-sud-r2",
    planning: "https://A-MODIFIER-PLANNING/bureaux-sud-r2.pdf"
  },

  "kaly-r2-sdr-erable": {
    nom: "SDR Erable",
    etage: "R+2",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-erable-r2",
    planning: "https://A-MODIFIER-PLANNING/sdr-erable-r2.pdf"
  },


  // =====================================================
  // R+3 - 9 locaux
  // =====================================================

  "kaly-r3-sanitaires-nord": {
    nom: "Sanitaires Nord",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-nord-r3",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-nord-r3.pdf"
  },

  "kaly-r3-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-sud-r3",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-sud-r3.pdf"
  },

  "kaly-r3-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-est-r3",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-est-r3.pdf"
  },

  "kaly-r3-circulations": {
    nom: "Circulations",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/circulations-r3",
    planning: "https://A-MODIFIER-PLANNING/circulations-r3.pdf"
  },

  "kaly-r3-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-nord-r3",
    planning: "https://A-MODIFIER-PLANNING/bureaux-nord-r3.pdf"
  },

  "kaly-r3-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-sud-r3",
    planning: "https://A-MODIFIER-PLANNING/bureaux-sud-r3.pdf"
  },

  "kaly-r3-sdr-orme": {
    nom: "SDR Orme",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-orme-r3",
    planning: "https://A-MODIFIER-PLANNING/sdr-orme-r3.pdf"
  },

  "kaly-r3-sdr-paletuvier": {
    nom: "SDR Palétuvier",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-paletuvier-r3",
    planning: "https://A-MODIFIER-PLANNING/sdr-paletuvier-r3.pdf"
  },

  "kaly-r3-sdr-pin-parasol": {
    nom: "SDR Pin parasol",
    etage: "R+3",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-pin-parasol-r3",
    planning: "https://A-MODIFIER-PLANNING/sdr-pin-parasol-r3.pdf"
  },


  // =====================================================
  // R+4 - 6 locaux
  // =====================================================

  "kaly-r4-sanitaires-sud": {
    nom: "Sanitaires Sud",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-sud-r4",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-sud-r4.pdf"
  },

  "kaly-r4-sanitaires-est": {
    nom: "Sanitaires Est",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sanitaires-est-r4",
    planning: "https://A-MODIFIER-PLANNING/sanitaires-est-r4.pdf"
  },

  "kaly-r4-circulations": {
    nom: "Circulations",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/circulations-r4",
    planning: "https://A-MODIFIER-PLANNING/circulations-r4.pdf"
  },

  "kaly-r4-bureaux-nord": {
    nom: "Bureaux Nord",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-nord-r4",
    planning: "https://A-MODIFIER-PLANNING/bureaux-nord-r4.pdf"
  },

  "kaly-r4-bureaux-sud": {
    nom: "Bureaux Sud",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/bureaux-sud-r4",
    planning: "https://A-MODIFIER-PLANNING/bureaux-sud-r4.pdf"
  },

  "kaly-r4-sdr-sequoia": {
    nom: "SDR Sequoia",
    etage: "R+4",
    site: "Kaly",
    optima: "https://A-MODIFIER-OPTIMA/sdr-sequoia-r4",
    planning: "https://A-MODIFIER-PLANNING/sdr-sequoia-r4.pdf"
  }

};
