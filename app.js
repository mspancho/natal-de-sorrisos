/* ============================================================
   Natal de Sorrisos app.js
   No build step, no dependencies. Reads window.NATAL_CONFIG (data.js).
   ============================================================ */
(function () {
  "use strict";

  const cfg = window.NATAL_CONFIG;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------------------------------------------------- i18n */
  const I18N = {
    en: {
      title: "Natal de Sorrisos | Casa Aura + Brown Umeed",
      skip: "Skip to the tree",
      "hero.title": "Christmas of Smiles",
      "nav.gifts": "All gifts", "nav.how": "How a gift arrives", "nav.umeed": "Give to Umeed",
      "hero.lede": "Real Christmas gifts for the children and teens of Casa Aura in Belo Horizonte, Brazil.",
      "hero.body": "Every ornament on this tree is a real gift, chosen by Casa Aura's team for a child in cancer treatment. Pick an ornament, send the amount to Brown Umeed through Venmo or Zelle, and Umeed passes the full amount to Casa Aura, who buys and wraps the present.",
      "hero.cta1": "See all ten gifts", "hero.cta2": "Give to Umeed",
      "tree.hint": "Hover over an ornament to see the gift. On a phone, tap.",
      "who.title": "Who's behind this",
      "who.aura": "A support house in Belo Horizonte, Brazil. Since 1998, Casa Aura has welcomed children and teens up to 17 who travel from across the country for cancer treatment, blood disorders, and transplants, together with the family members who stay by their side. Around 70 volunteers keep the house playful, with school support, outings, and celebrations like this one.",
      "who.umeed": "Umeed means hope in Hindi and Urdu. The student group raises funds and awareness for cancer patients in low- and middle-income countries, through benefit concerts, a fun run, and a day of giving, and sends the proceeds to partner organizations that cover treatment and hospital costs. This Christmas, Umeed collects the donations and transfers the full amount to Casa Aura.",
      "photo.caption": "Christmas at Casa Aura.",
      "gifts.title": "All ten gifts",
      "gifts.intro": "Ages 2 to 16. Prices come from the linked Brazilian stores on 16 November 2026, exclude shipping, and can change. Dollar amounts use today's exchange rate, rounded up.",
      "how.title": "How a gift reaches a child",
      "how.s1t": "Pick an ornament", "how.s1": "Each one is a real gift with a price and an age range.",
      "how.s2t": "Send the amount to Brown Umeed", "how.s2": "Venmo @brown_umeed or Zelle 786-266-2630. Put the gift number in the note.",
      "how.s3t": "Confirm in the short form", "how.s3": "Tell us which gift you covered and whether you want to stay anonymous or share your name and a message with the family. The ornament lights up once you confirm.",
      "how.s4t": "Casa Aura does the shopping", "how.s4": "Umeed transfers the money to Casa Aura. The team in Belo Horizonte buys the gift, wraps the present, and hands the present to the child at the Christmas celebration.",
      "umeed.title": "Support treatment all year",
      "umeed.body": "Beyond Christmas, Brown Umeed covers treatment and hospital costs for low-income cancer patients in Brazil and India through partner organizations. A general donation goes wherever the need is greatest.",
      "umeed.amount": "Choose an amount", "umeed.other": "Other",
      "footer.joint": "Natal de Sorrisos is a joint campaign of Casa de Apoio Aura and Umeed at Brown University.",
      "footer.questions": "Questions? Write to", "footer.or": "or find Umeed on Instagram at",
      "footer.prices": "Prices checked on 16 November 2026 at the linked stores, without shipping, and subject to change and availability. Please confirm the manufacturer's age rating before buying.",
      progress: "{taken} of {total} gifts taken",
      gift: "Gift {id}", ages: "ages {a} to {b}",
      taken: "Taken", available: "Available",
      "pop.confirmEmail": "I've paid, confirm by email",
      "mail.body": "Hello Umeed team,\n\nI sent {usd} for gift #{id} ({name}) through Venmo or Zelle.\n\nPlease mark one:\n[ ] Keep me anonymous\n[ ] You may share my name and this message with the family\n\nMy name:\nMessage for the child or family:\n",
      "tree.hintTouch": "Tap an ornament to see the gift and give.",
      "pop.confirm": "I've paid, confirm my gift", "pop.more": "More details",
      "pop.takenNote": "Already taken. Pick another ornament or give one more of these.",
      "pop.nopay": "Payment links are being set up. Write to {email} to give this gift.",
      "modal.step1": "1. Send {usd} to Brown Umeed",
      "modal.venmoHint": "Venmo opens with the amount and the note filled in.",
      "modal.zelleHint": "In your bank app, send to this number and add the note.",
      "modal.copyNumber": "Copy number", "modal.copyNote": "Copy note", "modal.note": "Note",
      "modal.step2": "2. Confirm your gift",
      "modal.step2body": "The form asks whether you would like to stay anonymous or share your name and a message with the family. The ornament lights up once you confirm.",
      "modal.formBtn": "Open the confirmation form",
      "modal.formMissing": "The confirmation form is being set up. The button above opens an email to {email} with the gift number instead.",
      "modal.store": "See the product at {store}",
      "modal.fine": "If this gift is already taken when your donation arrives, Umeed and Casa Aura put the amount toward another gift or clothing for the children.",
      "modal.zelleGeneral": "Send with Zelle",
      "umeed.zelleNote": "Brown Umeed donation",
      copied: "Copied", "aria.close": "Close",
      "fx.live": "Dollar amounts use today's exchange rate (US$ 1 = R$ {rate}), rounded up to the next dollar.",
      "fx.fallback": "Dollar amounts use an approximate rate (US$ 1 = R$ {rate}), rounded up to the next dollar.",
      "list.give": "Give this gift", "list.giveAgain": "Give one more",
      "aria.ornament": "Gift {id}, {name}, {usd}"
    },
    pt: {
      title: "Natal de Sorrisos | Casa Aura + Brown Umeed",
      skip: "Ir para a árvore",
      "hero.title": "Natal de Sorrisos",
      "nav.gifts": "Todos os presentes", "nav.how": "Como o presente chega", "nav.umeed": "Doar para a Umeed",
      "hero.lede": "Presentes de Natal de verdade para as crianças e adolescentes da Casa Aura, em Belo Horizonte.",
      "hero.body": "Cada enfeite desta árvore é um presente de verdade, escolhido pela equipe da Casa Aura para uma criança em tratamento contra o câncer. Escolha um enfeite, envie o valor para a Brown Umeed pelo Venmo ou Zelle, e a Umeed repassa o valor integral à Casa Aura, que compra e embrulha o presente.",
      "hero.cta1": "Ver os dez presentes", "hero.cta2": "Doar para a Umeed",
      "tree.hint": "Passe o mouse sobre um enfeite para ver o presente. No celular, toque.",
      "who.title": "Quem está por trás",
      "who.aura": "Uma casa de apoio em Belo Horizonte. Desde 1998, a Casa Aura acolhe crianças e adolescentes de até 17 anos que vêm de todo o Brasil para tratamento de câncer, doenças hematológicas e transplantes, junto com os familiares que os acompanham. Cerca de 70 voluntários mantêm a casa alegre, com apoio escolar, passeios e celebrações como esta.",
      "who.umeed": "Umeed significa esperança em hindi e urdu. O grupo de estudantes arrecada fundos e conscientiza sobre o câncer em países de baixa e média renda, com concertos beneficentes, uma corrida e um dia de doações, e envia o valor arrecadado a organizações parceiras que cobrem custos de tratamento e hospitalares. Neste Natal, a Umeed recebe as doações e repassa o valor integral à Casa Aura.",
      "photo.caption": "Natal na Casa Aura.",
      "gifts.title": "Os dez presentes",
      "gifts.intro": "De 2 a 16 anos. Os preços foram consultados nas lojas brasileiras indicadas em 16 de novembro de 2026, não incluem frete e podem mudar. Os valores em dólar usam a cotação do dia, arredondados para cima.",
      "how.title": "Como o presente chega até a criança",
      "how.s1t": "Escolha um enfeite", "how.s1": "Cada um é um presente real, com preço e faixa etária.",
      "how.s2t": "Envie o valor para a Brown Umeed", "how.s2": "Venmo @brown_umeed ou Zelle 786-266-2630. Coloque o número do presente na mensagem.",
      "how.s3t": "Confirme no formulário", "how.s3": "Diga qual presente você cobriu e se prefere ficar no anonimato ou compartilhar seu nome e uma mensagem com a família. O enfeite se acende assim que você confirma.",
      "how.s4t": "A Casa Aura faz as compras", "how.s4": "A Umeed transfere o dinheiro para a Casa Aura. A equipe em Belo Horizonte compra o presente, embrulha e entrega à criança na festa de Natal.",
      "umeed.title": "Apoie o tratamento o ano inteiro",
      "umeed.body": "Além do Natal, a Brown Umeed cobre custos de tratamento e hospitalares de pacientes com câncer de baixa renda no Brasil e na Índia, por meio de organizações parceiras. Uma doação geral vai para onde a necessidade é maior.",
      "umeed.amount": "Escolha um valor", "umeed.other": "Outro",
      "footer.joint": "Natal de Sorrisos é uma campanha conjunta da Casa de Apoio Aura e da Umeed, da Brown University.",
      "footer.questions": "Dúvidas? Escreva para", "footer.or": "ou encontre a Umeed no Instagram em",
      "footer.prices": "Valores consultados em 16 de novembro de 2026 nas lojas indicadas, sem frete, sujeitos a alterações e disponibilidade. Antes da compra, confirme a classificação etária indicada pelo fabricante.",
      progress: "{taken} de {total} presentes garantidos",
      gift: "Presente {id}", ages: "{a} a {b} anos",
      taken: "Garantido", available: "Disponível",
      "pop.confirmEmail": "Já paguei, confirmar por e-mail",
      "mail.body": "Olá, equipe da Umeed,\n\nEnviei {usd} para o presente #{id} ({name}) pelo Venmo ou Zelle.\n\nMarque uma opção:\n[ ] Prefiro ficar no anonimato\n[ ] Podem compartilhar meu nome e esta mensagem com a família\n\nMeu nome:\nMensagem para a criança ou família:\n",
      "tree.hintTouch": "Toque em um enfeite para ver o presente e doar.",
      "pop.confirm": "Já paguei, confirmar presente", "pop.more": "Mais detalhes",
      "pop.takenNote": "Já garantido. Escolha outro enfeite ou dê mais um destes.",
      "pop.nopay": "Os links de pagamento estão sendo configurados. Escreva para {email} para dar este presente.",
      "modal.step1": "1. Envie {usd} para a Brown Umeed",
      "modal.venmoHint": "O Venmo abre com o valor e a mensagem preenchidos.",
      "modal.zelleHint": "No aplicativo do seu banco, envie para este número e inclua a mensagem.",
      "modal.copyNumber": "Copiar número", "modal.copyNote": "Copiar mensagem", "modal.note": "Mensagem",
      "modal.step2": "2. Confirme seu presente",
      "modal.step2body": "O formulário pergunta se você prefere ficar no anonimato ou compartilhar seu nome e uma mensagem com a família. O enfeite se acende assim que você confirma.",
      "modal.formBtn": "Abrir o formulário de confirmação",
      "modal.formMissing": "O formulário de confirmação está sendo configurado. O botão acima abre um e-mail para {email} com o número do presente.",
      "modal.store": "Ver o produto na loja {store}",
      "modal.fine": "Se este presente já estiver garantido quando sua doação chegar, a Umeed e a Casa Aura usam o valor em outro presente ou em roupas para as crianças.",
      "modal.zelleGeneral": "Enviar pelo Zelle",
      "umeed.zelleNote": "Doação Brown Umeed",
      copied: "Copiado", "aria.close": "Fechar",
      "fx.live": "Os valores em dólar usam a cotação do dia (US$ 1 = R$ {rate}), arredondados para cima.",
      "fx.fallback": "Os valores em dólar usam uma cotação aproximada (US$ 1 = R$ {rate}), arredondados para cima.",
      "list.give": "Dar este presente", "list.giveAgain": "Dar mais um",
      "aria.ornament": "Presente {id}, {name}, {usd}"
    },
    es: {
      title: "Natal de Sorrisos | Casa Aura + Brown Umeed",
      skip: "Ir al árbol",
      "hero.title": "Navidad de Sonrisas",
      "nav.gifts": "Todos los regalos", "nav.how": "Cómo llega el regalo", "nav.umeed": "Donar a Umeed",
      "hero.lede": "Regalos de Navidad reales para los niños y adolescentes de Casa Aura, en Belo Horizonte, Brasil.",
      "hero.body": "Cada adorno de este árbol es un regalo real, elegido por el equipo de Casa Aura para un niño en tratamiento contra el cáncer. Elige un adorno, envía el monto a Brown Umeed por Venmo o Zelle, y Umeed entrega el monto completo a Casa Aura, que compra y envuelve el regalo.",
      "hero.cta1": "Ver los diez regalos", "hero.cta2": "Donar a Umeed",
      "tree.hint": "Pasa el cursor sobre un adorno para ver el regalo. En el celular, tócalo.",
      "who.title": "Quiénes están detrás",
      "who.aura": "Una casa de apoyo en Belo Horizonte, Brasil. Desde 1998, Casa Aura acoge a niños y adolescentes de hasta 17 años que viajan desde todo el país para recibir tratamiento contra el cáncer, enfermedades hematológicas y trasplantes, junto con los familiares que los acompañan. Unos 70 voluntarios mantienen la casa alegre, con apoyo escolar, paseos y celebraciones como esta.",
      "who.umeed": "Umeed significa esperanza en hindi y urdu. El grupo estudiantil recauda fondos y crea conciencia sobre el cáncer en países de ingresos bajos y medios, con conciertos benéficos, una carrera y un día de donaciones, y envía lo recaudado a organizaciones aliadas que cubren costos de tratamiento y hospitalarios. Esta Navidad, Umeed recibe las donaciones y transfiere el monto completo a Casa Aura.",
      "photo.caption": "Navidad en Casa Aura.",
      "gifts.title": "Los diez regalos",
      "gifts.intro": "De 2 a 16 años. Los precios provienen de las tiendas brasileñas enlazadas, consultados el 16 de noviembre de 2026, no incluyen envío y pueden cambiar. Los montos en dólares usan el tipo de cambio del día, redondeados hacia arriba.",
      "how.title": "Cómo llega el regalo al niño",
      "how.s1t": "Elige un adorno", "how.s1": "Cada uno es un regalo real, con precio y rango de edad.",
      "how.s2t": "Envía el monto a Brown Umeed", "how.s2": "Venmo @brown_umeed o Zelle 786-266-2630. Escribe el número del regalo en la nota.",
      "how.s3t": "Confirma en el formulario", "how.s3": "Cuéntanos qué regalo cubriste y si prefieres permanecer en el anonimato o compartir tu nombre y un mensaje con la familia. El adorno se enciende en cuanto confirmas.",
      "how.s4t": "Casa Aura hace las compras", "how.s4": "Umeed transfiere el dinero a Casa Aura. El equipo en Belo Horizonte compra el regalo, lo envuelve y lo entrega al niño en la celebración navideña.",
      "umeed.title": "Apoya el tratamiento todo el año",
      "umeed.body": "Más allá de la Navidad, Brown Umeed cubre costos de tratamiento y hospitalarios de pacientes con cáncer de bajos ingresos en Brasil e India, a través de organizaciones aliadas. Una donación general va adonde la necesidad es mayor.",
      "umeed.amount": "Elige un monto", "umeed.other": "Otro",
      "footer.joint": "Natal de Sorrisos es una campaña conjunta de Casa de Apoio Aura y Umeed, de Brown University.",
      "footer.questions": "¿Preguntas? Escribe a", "footer.or": "o encuentra a Umeed en Instagram en",
      "footer.prices": "Precios consultados el 16 de noviembre de 2026 en las tiendas enlazadas, sin envío, sujetos a cambios y disponibilidad. Antes de comprar, confirma la clasificación por edad indicada por el fabricante.",
      progress: "{taken} de {total} regalos apadrinados",
      gift: "Regalo {id}", ages: "{a} a {b} años",
      taken: "Apadrinado", available: "Disponible",
      "pop.confirmEmail": "Ya pagué, confirmar por correo",
      "mail.body": "Hola, equipo de Umeed:\n\nEnvié {usd} para el regalo #{id} ({name}) por Venmo o Zelle.\n\nMarca una opción:\n[ ] Prefiero permanecer en el anonimato\n[ ] Pueden compartir mi nombre y este mensaje con la familia\n\nMi nombre:\nMensaje para el niño o la familia:\n",
      "tree.hintTouch": "Toca un adorno para ver el regalo y donar.",
      "pop.confirm": "Ya pagué, confirmar mi regalo", "pop.more": "Más detalles",
      "pop.takenNote": "Ya apadrinado. Elige otro adorno o regala uno más de estos.",
      "pop.nopay": "Los enlaces de pago se están configurando. Escribe a {email} para dar este regalo.",
      "modal.step1": "1. Envía {usd} a Brown Umeed",
      "modal.venmoHint": "Venmo se abre con el monto y la nota ya completados.",
      "modal.zelleHint": "En la app de tu banco, envía a este número e incluye la nota.",
      "modal.copyNumber": "Copiar número", "modal.copyNote": "Copiar nota", "modal.note": "Nota",
      "modal.step2": "2. Confirma tu regalo",
      "modal.step2body": "El formulario pregunta si prefieres permanecer en el anonimato o compartir tu nombre y un mensaje con la familia. El adorno se enciende en cuanto confirmas.",
      "modal.formBtn": "Abrir el formulario de confirmación",
      "modal.formMissing": "El formulario de confirmación se está configurando. El botón de arriba abre un correo a {email} con el número del regalo.",
      "modal.store": "Ver el producto en {store}",
      "modal.fine": "Si este regalo ya está apadrinado cuando llegue tu donación, Umeed y Casa Aura destinan el monto a otro regalo o a ropa para los niños.",
      "modal.zelleGeneral": "Enviar con Zelle",
      "umeed.zelleNote": "Donación Brown Umeed",
      copied: "Copiado", "aria.close": "Cerrar",
      "fx.live": "Los montos en dólares usan el tipo de cambio del día (US$ 1 = R$ {rate}), redondeados hacia arriba.",
      "fx.fallback": "Los montos en dólares usan un tipo de cambio aproximado (US$ 1 = R$ {rate}), redondeados hacia arriba.",
      "list.give": "Dar este regalo", "list.giveAgain": "Dar uno más",
      "aria.ornament": "Regalo {id}, {name}, {usd}"
    }
  };
  const HTML_LANG = { en: "en", pt: "pt-BR", es: "es" };
  const LOCALE = { en: "en-US", pt: "pt-BR", es: "es-419" };

  let lang = "en";
  function t(key, vars) {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    if (vars) Object.keys(vars).forEach(k => { s = s.split("{" + k + "}").join(String(vars[k])); });
    return s;
  }

  function detectLanguage() {
    try {
      const saved = localStorage.getItem("natal-lang");
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    const pref = (cfg.defaultLanguage || "auto").toLowerCase();
    if (pref !== "auto" && I18N[pref]) return pref;
    const langs = navigator.languages || [navigator.language || "en"];
    for (const l of langs) {
      const base = String(l).toLowerCase().slice(0, 2);
      if (base === "pt" || base === "es") return base;
      if (base === "en") return "en";
    }
    return "en";
  }

  function setLanguage(next) {
    lang = I18N[next] ? next : "en";
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t("title");
    try { localStorage.setItem("natal-lang", lang); } catch (e) { /* ignore */ }
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
    const smile = $("#smile");
    if (smile) smile.toggleAttribute("hidden", lang === "pt");
    const hint = $(".tree-hint");
    if (hint && window.matchMedia && window.matchMedia("(hover: none)").matches) hint.textContent = t("tree.hintTouch");
    $$(".lang-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $(".modal-close").setAttribute("aria-label", t("aria.close"));
    renderAll();
  }

  /* ---------------------------------------------------------- money */
  let fx = { rate: cfg.fx.brlPerUsd, live: false };

  function usdFor(brl) { return Math.ceil(brl / fx.rate); }
  function fmtUsd(n) { return "US$ " + new Intl.NumberFormat(LOCALE[lang], { maximumFractionDigits: 0 }).format(n); }
  function fmtBrl(n) { return "R$ " + new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n); }
  function fmtRate(n) { return new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n); }

  function fetchWithTimeout(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    return fetch(url, { signal: ctrl.signal, cache: "no-store" }).finally(() => clearTimeout(timer));
  }

  async function loadRate() {
    if (!cfg.fx.live) return;
    const sources = [
      async () => { const r = await fetchWithTimeout("https://api.frankfurter.app/latest?from=USD&to=BRL", 5000); const j = await r.json(); return j.rates && j.rates.BRL; },
      async () => { const r = await fetchWithTimeout("https://open.er-api.com/v6/latest/USD", 5000); const j = await r.json(); return j.rates && j.rates.BRL; }
    ];
    for (const src of sources) {
      try {
        const v = Number(await src());
        if (v > 0 && isFinite(v)) { fx = { rate: v, live: true }; renderAll(); return; }
      } catch (e) { /* try the next source */ }
    }
  }

  /* ---------------------------------------------------------- status */
  const status = {};        /* id -> { claimed, quantity } */
  cfg.gifts.forEach(g => { status[g.id] = { claimed: Number(g.claimed) || 0, quantity: Math.max(1, Number(g.quantity) || 1) }; });

  function parseCsv(text) {
    const rows = []; let row = [], field = "", inQ = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else { inQ = false; } }
        else { field += c; }
      } else if (c === '"') { inQ = true; }
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
      else if (c !== "\r") { field += c; }
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows.filter(r => r.some(v => String(v).trim() !== ""));
  }

  async function loadStatus() {
    if (!cfg.statusCsvUrl) return;
    try {
      const sep = cfg.statusCsvUrl.includes("?") ? "&" : "?";
      const r = await fetchWithTimeout(cfg.statusCsvUrl + sep + "t=" + Date.now(), 8000);
      if (!r.ok) return;
      const rows = parseCsv(await r.text());
      if (rows.length < 2) return;
      const head = rows[0].map(h => h.trim().toLowerCase());
      const iId = head.findIndex(h => h === "gift_id" || h === "id" || h === "gift");
      const iClaimed = head.findIndex(h => h === "claimed" || h === "confirmed" || h === "count");
      const iQty = head.findIndex(h => h === "quantity" || h === "qty");
      if (iId < 0 || iClaimed < 0) return;
      rows.slice(1).forEach(r => {
        const raw = String(r[iId] || "").trim().match(/\d+/);
        if (!raw) return;
        const id = raw[0].padStart(2, "0");
        if (!status[id]) return;
        const claimed = parseInt(String(r[iClaimed]).replace(/[^\d-]/g, ""), 10);
        if (!isNaN(claimed)) status[id].claimed = Math.max(0, claimed);
        if (iQty >= 0) { const q = parseInt(String(r[iQty]).replace(/[^\d]/g, ""), 10); if (q > 0) status[id].quantity = q; }
      });
      renderAll();
    } catch (e) { /* keep the last known state */ }
  }

  function isTaken(g) { const s = status[g.id]; return s.claimed >= s.quantity; }

  /* ---------------------------------------------------------- links */
  function payNote(g) { return "Natal de Sorrisos #" + g.id; }
  function venmoUrl(amount, note) {
    if (!cfg.venmo || !cfg.venmo.username) return "";
    const u = cfg.venmo.username.replace(/^@/, "");
    return "https://venmo.com/" + encodeURIComponent(u) + "?txn=pay&amount=" + encodeURIComponent(amount) + "&note=" + encodeURIComponent(note);
  }
  function formLabel(g) { return g.formLabel || (g.id + " - " + g.name.en); }
  function formUrl(g, amount) {
    if (!cfg.form || !cfg.form.url) return "";
    const params = [];
    if (cfg.form.giftEntry && g) params.push(encodeURIComponent(cfg.form.giftEntry) + "=" + encodeURIComponent(formLabel(g)));
    if (cfg.form.amountEntry && amount) params.push(encodeURIComponent(cfg.form.amountEntry) + "=" + encodeURIComponent(amount));
    const base = cfg.form.url.split("#")[0];
    const sep = base.includes("?") ? "&" : "?";
    return params.length ? base + sep + "usp=pp_url&" + params.join("&") : base;
  }
  function mailtoUrl(g, amount) {
    const subject = "Natal de Sorrisos #" + g.id;
    const body = t("mail.body", { usd: fmtUsd(amount), id: g.id, name: nameOf(g) });
    return "mailto:" + cfg.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
  const hasVenmo = () => Boolean(cfg.venmo && cfg.venmo.username);
  const hasZelle = () => Boolean(cfg.zelle && cfg.zelle.recipient);

  /* ---------------------------------------------------------- helpers */
  const RINGS = ["#30B0B8", "#C0489A", "#F8C818", "#17A050", "#7A2A7E"];
  const SLOTS = [
    [300, 200],
    [246, 320], [354, 320],
    [192, 440], [300, 440], [408, 440],
    [150, 570], [250, 570], [350, 570], [450, 570]
  ];
  function ringOf(i) { return RINGS[i % RINGS.length]; }
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function artHtml(g) {
    if (g.image) return '<img src="' + esc(g.image) + '" alt="">';
    return '<svg aria-hidden="true" focusable="false"><use href="#g-' + esc(g.illustration || "blocks") + '"></use></svg>';
  }
  function nameOf(g) { return g.name[lang] || g.name.en; }
  function metaOf(g) { return esc(g.brand) + ", " + t("ages", { a: g.ageMin, b: g.ageMax }); }
  function checkSvg() { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { el.hidden = true; }, 1800);
  }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err) { /* nothing more to try */ }
      document.body.removeChild(ta);
    }
    toast(t("copied"));
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-copy]");
    if (b) { e.preventDefault(); copyText(b.getAttribute("data-copy")); }
  });

  /* ---------------------------------------------------------- tree */
  const stage = $("#tree-stage");
  const ornamentsEl = $("#ornaments");
  const popover = $("#popover");
  let firstRender = true;

  function renderOrnaments() {
    const existing = $$(".ornament", ornamentsEl);
    cfg.gifts.forEach((g, i) => {
      const slot = SLOTS[i] || SLOTS[SLOTS.length - 1];
      let btn = existing[i];
      if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ornament" + (firstRender ? " animate" : "");
        btn.style.animationDelay = (0.08 * i) + "s";
        btn.dataset.id = g.id;
        btn.innerHTML = '<span class="orn-cap" aria-hidden="true"></span>' +
          '<span class="orn-ball">' + artHtml(g) + '</span>' +
          '<span class="orn-num" aria-hidden="true">' + esc(g.id) + '</span>' +
          '<span class="orn-check" aria-hidden="true" hidden>' + checkSvg() + '</span>';
        attachOrnamentEvents(btn, g);
        ornamentsEl.appendChild(btn);
      }
      btn.style.setProperty("--x", (slot[0] / 600 * 100) + "%");
      btn.style.setProperty("--y", (slot[1] / 760 * 100) + "%");
      btn.style.setProperty("--ring", ringOf(i));
      const taken = isTaken(g);
      btn.classList.toggle("is-taken", taken);
      $(".orn-check", btn).hidden = !taken;
      btn.setAttribute("aria-label", t("aria.ornament", { id: g.id, name: nameOf(g), usd: fmtUsd(usdFor(g.priceBrl)) }) + (taken ? ", " + t("taken") : ""));
    });
    firstRender = false;
  }

  /* popover state */
  let popGift = null, popBtn = null, pinned = false, hideTimer = null, ignoreFocusUntil = 0;
  function refocus(btn) { ignoreFocusUntil = Date.now() + 400; btn.focus({ preventScroll: true }); }

  function cancelHide() { clearTimeout(hideTimer); hideTimer = null; }
  function scheduleHide() { cancelHide(); hideTimer = setTimeout(() => { if (!pinned) closePopover(); }, 160); }

  function popoverHtml(g) {
    const usd = usdFor(g.priceBrl);
    const taken = isTaken(g);
    const i = cfg.gifts.indexOf(g);
    let pay = "";
    if (hasVenmo()) pay += '<a class="btn btn-venmo btn-small" href="' + esc(venmoUrl(usd, payNote(g))) + '" target="_blank" rel="noopener">Venmo</a>';
    if (hasZelle()) pay += '<button type="button" class="btn btn-zelle btn-small" data-zelle="' + esc(g.id) + '">Zelle</button>';
    const form = formUrl(g, usd);
    const confirm = form
      ? '<a class="btn btn-form btn-small pop-confirm" href="' + esc(form) + '" target="_blank" rel="noopener">' + t("pop.confirm") + '</a>'
      : '<a class="btn btn-form btn-small pop-confirm" href="' + esc(mailtoUrl(g, usd)) + '">' + t("pop.confirmEmail") + '</a>';
    return '<div class="pop-head">' +
        '<div class="pop-thumb" style="--ring:' + ringOf(i) + '">' + artHtml(g) + '</div>' +
        '<div><p class="pop-kicker">' + t("gift", { id: g.id }) + '</p><p class="pop-title" id="pop-title">' + esc(nameOf(g)) + '</p></div>' +
        (taken ? '<span class="pop-status">' + checkSvg().replace("<svg", '<svg width="14" height="14"') + t("taken") + '</span>' : "") +
      '</div>' +
      '<p class="pop-meta">' + metaOf(g) + '</p>' +
      '<p class="pop-price"><span class="pop-usd">' + fmtUsd(usd) + '</span><span class="pop-brl">' + fmtBrl(g.priceBrl) + '</span></p>' +
      (pay ? '<div class="pop-pay">' + pay + '</div>' : '<p class="pop-nopay">' + t("pop.nopay", { email: esc(cfg.contact.email) }) + '</p>') +
      confirm +
      (taken ? '<p class="pop-taken-note">' + t("pop.takenNote") + '</p>' : "") +
      '<a href="#" class="pop-more" data-more="' + esc(g.id) + '">' + t("pop.more") + '</a>';
  }

  function placePopover(btn) {
    const s = stage.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    popover.style.left = "0px"; popover.style.top = "0px";
    const pw = popover.offsetWidth, ph = popover.offsetHeight, gap = 12;
    const bx = b.left - s.left, by = b.top - s.top;
    let left, top;
    const narrow = s.width < 520 || window.innerWidth < 760;
    if (narrow) {
      left = bx + b.width / 2 - pw / 2;
      const minLeft = 16 - s.left, maxLeft = window.innerWidth - 16 - pw - s.left;
      left = Math.max(minLeft, Math.min(maxLeft, left));
      top = by + b.height + gap;
      if (b.bottom + gap + ph > window.innerHeight - 8 && by - gap - ph >= -s.top + 8) top = by - gap - ph;
    } else {
      const roomRight = window.innerWidth - 16 - b.right;
      const roomLeft = b.left - 16;
      if (roomRight >= pw + gap || roomRight >= roomLeft) left = bx + b.width + gap;
      else left = bx - gap - pw;
      top = by + b.height / 2 - ph / 2;
      const vTop = s.top + top;
      if (vTop < 84) top += 84 - vTop;                                  /* keep clear of the sticky header */
      const vBottom = s.top + top + ph;
      if (vBottom > window.innerHeight - 8) top -= vBottom - (window.innerHeight - 8);
    }
    popover.style.left = Math.round(left) + "px";
    popover.style.top = Math.round(top) + "px";
  }

  function openPopover(btn, g, pin) {
    cancelHide();
    if (popBtn && popBtn !== btn) popBtn.classList.remove("is-open");
    popGift = g; popBtn = btn; pinned = Boolean(pin) || (pinned && popBtn === btn);
    popover.innerHTML = popoverHtml(g);
    popover.hidden = false;
    btn.classList.add("is-open");
    placePopover(btn);
    if (pin) {
      const first = popover.querySelector("a, button");
      if (first) first.focus({ preventScroll: true });
    }
  }
  function closePopover() {
    cancelHide();
    popover.hidden = true;
    pinned = false;
    if (popBtn) popBtn.classList.remove("is-open");
    popGift = null; popBtn = null;
  }

  function attachOrnamentEvents(btn, g) {
    btn.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") openPopover(btn, g, false); });
    btn.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && !pinned) scheduleHide(); });
    btn.addEventListener("focus", () => { if (Date.now() < ignoreFocusUntil) return; if (!pinned || popBtn !== btn) openPopover(btn, g, false); });
    btn.addEventListener("blur", () => { if (!pinned) scheduleHide(); });
    btn.addEventListener("click", () => {
      if (pinned && popBtn === btn) { closePopover(); refocus(btn); }
      else openPopover(btn, g, true);
    });
  }

  popover.addEventListener("pointerenter", cancelHide);
  popover.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && !pinned) scheduleHide(); });
  popover.addEventListener("focusin", cancelHide);
  popover.addEventListener("focusout", e => {
    if (!popover.contains(e.relatedTarget) && e.relatedTarget !== popBtn) scheduleHide();
  });
  popover.addEventListener("click", e => {
    const more = e.target.closest("[data-more]");
    if (more) { e.preventDefault(); const g = giftById(more.getAttribute("data-more")); closePopover(); openGiftModal(g); return; }
    const z = e.target.closest("[data-zelle]");
    if (z) { const g = giftById(z.getAttribute("data-zelle")); closePopover(); openGiftModal(g, true); }
  });
  document.addEventListener("pointerdown", e => {
    if (popover.hidden) return;
    if (popover.contains(e.target) || e.target.closest(".ornament")) return;
    closePopover();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !popover.hidden) { const b = popBtn; closePopover(); if (b) refocus(b); }
  });
  window.addEventListener("resize", () => { if (!popover.hidden && popBtn) placePopover(popBtn); });
  window.addEventListener("scroll", () => { if (!popover.hidden && popBtn && !pinned) closePopover(); }, { passive: true });

  function giftById(id) { return cfg.gifts.find(g => g.id === id); }

  /* ---------------------------------------------------------- gift list */
  function renderGiftGrid() {
    const grid = $("#gift-grid");
    grid.innerHTML = cfg.gifts.map((g, i) => {
      const usd = usdFor(g.priceBrl), taken = isTaken(g);
      return '<article class="gift-card" style="--ring:' + ringOf(i) + '">' +
        '<div class="gift-top"><div class="gift-thumb">' + artHtml(g) + '</div>' +
          '<div><p class="gift-id">' + t("gift", { id: g.id }) + '</p><h3 class="gift-name">' + esc(nameOf(g)) + '</h3></div></div>' +
        '<p class="gift-meta">' + metaOf(g) + '</p>' +
        '<p class="gift-price"><span class="gift-usd">' + fmtUsd(usd) + '</span><span class="gift-brl">' + fmtBrl(g.priceBrl) + '</span></p>' +
        '<p class="gift-store"><a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + t("modal.store", { store: esc(g.store) }) + '</a></p>' +
        '<div class="gift-foot">' +
          '<span class="status-pill' + (taken ? " is-taken" : "") + '">' + (taken ? t("taken") : t("available")) + '</span>' +
          '<button type="button" class="btn btn-primary btn-small" data-open="' + esc(g.id) + '">' + (taken ? t("list.giveAgain") : t("list.give")) + '</button>' +
        '</div>' +
      '</article>';
    }).join("");
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-open]");
    if (b) openGiftModal(giftById(b.getAttribute("data-open")));
  });

  /* ---------------------------------------------------------- progress */
  function renderProgress() {
    const total = cfg.gifts.length;
    const taken = cfg.gifts.filter(isTaken).length;
    const pct = total ? Math.round(taken / total * 100) : 0;
    $("#progress-label").textContent = t("progress", { taken, total });
    $("#progress-pct").textContent = pct + "%";
    const bar = $("#progress-bar");
    bar.setAttribute("aria-valuemax", String(total));
    bar.setAttribute("aria-valuenow", String(taken));
    requestAnimationFrame(() => { $("#progress-fill").style.width = pct + "%"; });
    $("#fx-note").textContent = t(fx.live ? "fx.live" : "fx.fallback", { rate: fmtRate(fx.rate) });
  }

  /* ---------------------------------------------------------- modal */
  const modal = $("#gift-modal");
  const modalBody = $("#modal-body");

  function zelleBlock(note) {
    if (!hasZelle()) return "";
    const z = cfg.zelle;
    return '<p><strong>Zelle</strong>. ' + t("modal.zelleHint") + '</p>' +
      '<div class="copy-row"><code>' + esc(z.display || z.recipient) + (z.accountName ? ' <span class="fineprint">(' + esc(z.accountName) + ')</span>' : "") + '</code>' +
        '<button type="button" class="copy-btn" data-copy="' + esc(z.recipient) + '">' + t("modal.copyNumber") + '</button></div>' +
      '<div class="copy-row"><code>' + esc(note) + '</code>' +
        '<button type="button" class="copy-btn" data-copy="' + esc(note) + '">' + t("modal.copyNote") + '</button></div>' +
      (z.qrImage ? '<img class="zelle-qr" src="' + esc(z.qrImage) + '" alt="Zelle QR code">' : "");
  }

  function openGiftModal(g, focusZelle) {
    if (!g) return;
    const i = cfg.gifts.indexOf(g);
    const usd = usdFor(g.priceBrl), taken = isTaken(g), note = payNote(g);
    const form = formUrl(g, usd);
    modalBody.innerHTML =
      '<div class="modal-head"><div class="modal-thumb" style="--ring:' + ringOf(i) + '">' + artHtml(g) + '</div>' +
        '<div><p class="modal-kicker">' + t("gift", { id: g.id }) + '</p><h2 id="modal-title">' + esc(nameOf(g)) + '</h2><p class="modal-meta">' + metaOf(g) + '</p></div></div>' +
      '<p class="modal-price"><span class="modal-usd">' + fmtUsd(usd) + '</span><span class="pop-brl">' + fmtBrl(g.priceBrl) + '</span>' +
        (taken ? '<span class="status-pill is-taken">' + t("taken") + '</span>' : "") + '</p>' +
      '<p class="gift-store"><a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + t("modal.store", { store: esc(g.store) }) + '</a></p>' +
      '<div class="modal-step"><h3>' + t("modal.step1", { usd: fmtUsd(usd) }) + '</h3>' +
        (hasVenmo() ? '<div class="pay-row"><a class="btn btn-venmo" href="' + esc(venmoUrl(usd, note)) + '" target="_blank" rel="noopener">Venmo</a></div><p class="fineprint">' + t("modal.venmoHint") + '</p>' : "") +
        '<div id="modal-zelle">' + zelleBlock(note) + '</div>' +
        (!hasVenmo() && !hasZelle() ? '<p>' + t("pop.nopay", { email: esc(cfg.contact.email) }) + '</p>' : "") +
      '</div>' +
      '<div class="modal-step"><h3>' + t("modal.step2") + '</h3><p>' + t("modal.step2body") + '</p>' +
        (form ? '<a class="btn btn-form" href="' + esc(form) + '" target="_blank" rel="noopener">' + t("modal.formBtn") + '</a>'
              : '<a class="btn btn-form" href="' + esc(mailtoUrl(g, usd)) + '">' + t("pop.confirmEmail") + '</a><p class="fineprint" style="margin-top:8px">' + t("modal.formMissing", { email: esc(cfg.contact.email) }) + '</p>') +
      '</div>' +
      '<p class="modal-fine">' + t("modal.fine") + '</p>';
    showModal();
    if (focusZelle) { const z = $("#modal-zelle .copy-btn"); if (z) z.focus(); }
  }

  function openZelleModal(amount, note) {
    modalBody.innerHTML =
      '<h2 id="modal-title">' + t("modal.zelleGeneral") + '</h2>' +
      '<p class="modal-price"><span class="modal-usd">' + fmtUsd(amount) + '</span></p>' +
      zelleBlock(note);
    showModal();
  }

  function showModal() {
    if (typeof modal.showModal === "function") { if (!modal.open) modal.showModal(); }
    else { modal.setAttribute("open", ""); }
    modal.scrollTop = 0;
  }
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

  /* ---------------------------------------------------------- Umeed */
  let umeedAmount = 25;
  function renderUmeed() {
    const venmo = $("#umeed-venmo");
    if (hasVenmo()) { venmo.href = venmoUrl(umeedAmount, t("umeed.zelleNote")); venmo.hidden = false; } else { venmo.hidden = true; }
    $("#umeed-zelle").hidden = !hasZelle();
  }
  $("#umeed-chips").addEventListener("click", e => {
    const chip = e.target.closest(".chip[data-amount]");
    if (!chip) return;
    $$("#umeed-chips .chip").forEach(c => c.classList.remove("is-selected"));
    chip.classList.add("is-selected");
    $("#umeed-custom").value = "";
    umeedAmount = Number(chip.dataset.amount);
    renderUmeed();
  });
  $("#umeed-custom").addEventListener("input", e => {
    const v = Math.max(1, Math.floor(Number(e.target.value) || 0));
    if (!v) return;
    $$("#umeed-chips .chip").forEach(c => c.classList.remove("is-selected"));
    e.target.closest(".chip").classList.add("is-selected");
    umeedAmount = v;
    renderUmeed();
  });
  $("#umeed-zelle").addEventListener("click", () => openZelleModal(umeedAmount, t("umeed.zelleNote")));

  /* ---------------------------------------------------------- render all */
  function renderAll() {
    renderOrnaments();
    renderGiftGrid();
    renderProgress();
    renderUmeed();
    if (!popover.hidden && popGift && popBtn) { popover.innerHTML = popoverHtml(popGift); placePopover(popBtn); }
  }

  /* ---------------------------------------------------------- boot */
  $("#lang-switch").addEventListener("click", e => {
    const b = e.target.closest(".lang-btn");
    if (b) setLanguage(b.dataset.lang);
  });
  $$('[data-link="aura"]').forEach(a => { if (cfg.casaAura && cfg.casaAura.website) a.href = cfg.casaAura.website; });
  $$('[data-link="umeed"]').forEach(a => { if (cfg.contact.website) a.href = cfg.contact.website; });
  $$('[data-link="umeed-ig"]').forEach(a => { if (cfg.contact.instagram) a.href = cfg.contact.instagram; });
  const email = $("#footer-email");
  if (email) { email.href = "mailto:" + cfg.contact.email; email.textContent = cfg.contact.email; }
  const ig = $("#footer-ig");
  if (ig) { ig.href = cfg.contact.instagram; ig.textContent = cfg.contact.instagramHandle || cfg.contact.instagram; }

  setLanguage(detectLanguage());
  loadRate();
  loadStatus();
  if (cfg.statusCsvUrl) {
    const every = Math.max(20, Number(cfg.refreshSeconds) || 60) * 1000;
    setInterval(() => { if (document.visibilityState === "visible") loadStatus(); }, every);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") loadStatus(); });
  }
})();
