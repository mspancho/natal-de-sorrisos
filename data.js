/* ============================================================
   Natal de Sorrisos site configuration
   Everything the team edits lives in this file.
   After editing, commit to GitHub and the site updates.
   ============================================================ */

window.NATAL_CONFIG = {

  /* Language shown first: "en", "pt", "es", or "auto" (browser language). */
  defaultLanguage: "auto",

  /* ---------- Payments (all donations go to Brown Umeed) ---------- */
  venmo: {
    username: "brown_umeed"            /* without the @ */
  },
  zelle: {
    recipient: "7862662630",           /* enrolled U.S. mobile number */
    display: "786-266-2630",
    accountName: "Brown Umeed",
    qrImage: ""                        /* optional: e.g. "assets/zelle-qr.png" exported from the bank app */
  },

  /* ---------- Confirmation form (Google Forms) ----------
     1. Create the form (see README for the question list).
     2. Paste the form's "viewform" link below.
     3. Optional but recommended: use "Get pre-filled link" in Google Forms,
        pick any gift in the dropdown, and copy the entry.XXXXXX ids here so
        the site pre-selects the gift the donor clicked.                 */
  form: {
    url: "",                           /* e.g. "https://docs.google.com/forms/d/e/1FAIpQL.../viewform" */
    giftEntry: "",                     /* e.g. "entry.1234567890" (the Gift dropdown) */
    amountEntry: ""                    /* e.g. "entry.2345678901" (the Amount question), optional */
  },

  /* ---------- Live status (published Google Sheet tab, CSV) ----------
     Publish ONLY the "Status" tab of the form's response sheet
     (File > Share > Publish to web > Status > CSV) and paste the link.
     Columns: gift_id, claimed, quantity (quantity optional).            */
  statusCsvUrl: "",
  refreshSeconds: 60,

  /* ---------- Currency ----------
     The site tries a live USD/BRL rate first and falls back to this one. */
  fx: {
    brlPerUsd: 5.78,
    live: true
  },

  /* ---------- Contact & links ---------- */
  contact: {
    email: "umeed@brown.edu",
    instagram: "https://www.instagram.com/brown_umeed/",
    instagramHandle: "@brown_umeed",
    website: "https://brownumeed.org/"
  },
  casaAura: {
    website: "https://aura.org.br/",
    instagram: ""
  },

  pricesCheckedOn: "2026-11-16",

  /* ---------- Gifts ----------
     id          two-digit text, used in payment notes ("Natal de Sorrisos #04")
     quantity    how many of this gift Casa Aura would like
     claimed     fallback count when no statusCsvUrl is set
     illustration  one of: truck, doll, kitchen, garage, dress, tractor,
                   ball, headphones, pens, blocks
     image       optional photo path (e.g. "assets/gifts/04.jpg") that
                 replaces the illustration if you have rights to a photo   */
  gifts: [
    {
      id: "01",
      name: { en: "Mix Ball dump truck", pt: "Caminhão Mix Ball", es: "Camión volquete Mix Ball" },
      brand: "Calesita",
      ageMin: 2, ageMax: 3,
      priceBrl: 148.00,
      store: "Ri Happy",
      url: "https://www.rihappy.com.br/caminhao-mix-ball---calesita-1001947989/p",
      illustration: "truck",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "02",
      name: { en: "Miyo baby doll with sounds and accessories", pt: "Boneca Miyo com som e acessórios", es: "Muñeca Miyo con sonidos y accesorios" },
      brand: "Cotiplás",
      ageMin: 3, ageMax: 5,
      priceBrl: 129.95,
      store: "PBKIDS",
      url: "https://www.pbkids.com.br/boneca-miyo-menina-com-sons-de-bebe-cotiplas/p",
      illustration: "doll",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "03",
      name: { en: "Classic 1601 play kitchen", pt: "Cozinha Classic 1601", es: "Cocina de juguete Classic 1601" },
      brand: "Cotiplás",
      ageMin: 3, ageMax: 6,
      priceBrl: 115.25,
      store: "Formosa",
      url: "https://www.formosa.com.br/cozinha-infantil-classic-cotiplas6822/p",
      illustration: "kitchen",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "04",
      name: { en: "Hot Wheels City garage (HDR28)", pt: "Garagem Hot Wheels City HDR28", es: "Garaje Hot Wheels City (HDR28)" },
      brand: "Mattel",
      ageMin: 4, ageMax: 8,
      priceBrl: 139.90,
      store: "Ri Happy",
      url: "https://www.rihappy.com.br/pista-estacionamento-no-centro-da-cidade---carrinho---hot-wheels-city---mattel-1003227792/p",
      illustration: "garage",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "05",
      name: { en: "Barbie Fashionistas doll (HYT88)", pt: "Barbie Fashionistas HYT88", es: "Muñeca Barbie Fashionistas (HYT88)" },
      brand: "Mattel",
      ageMin: 5, ageMax: 9,
      priceBrl: 116.09,
      store: "Colibri Toys",
      url: "https://www.colibritoys.com/boneca-barbie-fashionistas-230-vestido-rosa-recorte-coracao",
      illustration: "dress",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "06",
      name: { en: "LEGO City tractor, 204 pieces (60498)", pt: "LEGO City Trator 60498, 204 peças", es: "Tractor LEGO City, 204 piezas (60498)" },
      brand: "LEGO",
      ageMin: 6, ageMax: 10,
      priceBrl: 139.99,
      store: "Magazine Luiza",
      url: "https://www.magazineluiza.com.br/lego-city-tractor-60498-204-pecas/p/240994000/br/lgci/?seller_id=magazineluiza",
      illustration: "tractor",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "07",
      name: { en: "RX 100 XXVI futsal ball", pt: "Bola Futsal RX 100 XXVI", es: "Balón de fútbol sala RX 100 XXVI" },
      brand: "Penalty",
      ageMin: 9, ageMax: 11,
      priceBrl: 139.99,
      store: "Penalty",
      url: "https://www.penalty.com.br/bola-futsal-penalty-rx-100-xxvi/p",
      illustration: "ball",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "08",
      name: { en: "Bluetooth headphones (TAH1108BK/55)", pt: "Headphone Bluetooth TAH1108BK/55", es: "Audífonos Bluetooth (TAH1108BK/55)" },
      brand: "Philips",
      ageMin: 12, ageMax: 16,
      priceBrl: 94.10,
      store: "Pichau",
      url: "https://www.pichau.com.br/fone-de-ouvido-philips-bluetooth-preto-tah1108bk-55",
      illustration: "headphones",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "09",
      name: { en: "Pitt hand-lettering pen set, 6 pens", pt: "Estojo Pitt Hand Lettering, 6 canetas", es: "Estuche Pitt Hand Lettering, 6 rotuladores" },
      brand: "Faber-Castell",
      ageMin: 12, ageMax: 16,
      priceBrl: 132.00,
      store: "Magazine Luiza",
      url: "https://www.magazineluiza.com.br/estojo-canetas-artisticas-pitt-hand-lettering-com-6-cores-faber-castell/p/jf28a6j66h/pa/pcan/",
      illustration: "pens",
      image: "",
      quantity: 1,
      claimed: 0
    },
    {
      id: "10",
      name: { en: "Jenga wooden stacking game", pt: "Jogo Jenga de madeira", es: "Juego Jenga de madera" },
      brand: "Hasbro",
      ageMin: 12, ageMax: 16,
      priceBrl: 99.99,
      store: "Ri Happy",
      url: "https://www.rihappy.com.br/jogo-jenga---hasbro-1003260721/p",
      illustration: "blocks",
      image: "",
      quantity: 1,
      claimed: 0
    }
  ]
};
