/* Dolci Storie — gelateria in Bovisa, Milano.
   Sopra: PLUMBING_V 2 dal boilerplate del Toolkit, adattato nella sola
   costante SITE. Sotto il marcatore: il codice-firma — l'interruttore
   DOLCE ⇄ SALATO, che è il gesto del sito. */

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO ══════════ */
  var SITE = {
    slug: 'dolci-storie',
    whatsapp: { number: '', message: '', ids: [] },  // nessun cellulare verificato: solo telefono
    /* orari letti a schermo sul pannello Maps espanso (19/7/2026):
       aperto 7/7 dalle 13; chiude 23:30, venerdì e sabato a mezzanotte */
    hours: {
      0: [['13:00', '23:30']],
      1: [['13:00', '23:30']],
      2: [['13:00', '23:30']],
      3: [['13:00', '23:30']],
      4: [['13:00', '23:30']],
      5: [['13:00', '24:00']],
      6: [['13:00', '24:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1500,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 960,
    EN: {
      'skip': 'Skip to content',
      'brand.aria': 'Dolci Storie, back to top',
      'burger.aria': 'Open menu',
      'lang.aria': 'Passa all’italiano',
      'lang.txt': 'IT',
      'nav.banco': 'The counter', 'nav.lab': 'Workshop', 'nav.granita': 'Granita',
      'nav.listino': 'Prices', 'nav.voci': 'Reviews', 'nav.dove': 'Find us', 'nav.cta': 'Call',

      'hero.kicker': 'Artisan gelato · Bovisa, Milan',
      'hero.t1': 'Sweet,', 'hero.t2': 'or salted.',
      'hero.sub': 'In the same counter you will find pistachio and salted pistachio, dark chocolate and salted dark chocolate. Twenty-four flavours, and a decision to make.',
      'sw.dolce': 'Sweet', 'sw.salato': 'Salted',
      'sw.aria': 'Switch to the salted flavours',
      'sw.hint': '↑ Try it: it changes the whole page, like changing your mind at the counter.',
      'hero.rating': 'from 751 Google reviews',

      'banco.eyebrow': 'The counter',
      'banco.h': 'Twenty-four tubs,<br>two ways of being in the world.',
      'g.yogurt': 'Yoghurt, walnuts and honey',
      'g.mono': 'Single-origin chocolates',
      'g.vegani': 'Vegan flavours',
      'g.formaggi': 'Gourmet flavours made with cheese',
      'banco.nota': 'The flavours change with the seasons and with whatever is good: these are the ones most often in the case. The salted selection is smaller on purpose — it is made when it comes out right.',
      'banco.cap': 'The labels are handwritten, one per tub.',

      'lab.eyebrow': 'Workshop in full view',
      'lab.h': 'The gelato is made there,<br>while you buy it.',
      'lab.p1': 'There is no back room where the work disappears: the workshop is behind the glass, and anyone who walks in sees the machine, the tubs coming back full and the hands filling them.',
      'lab.p2': 'It is also why the flavour list is never the same two months running: from the classic creams to nuts, to single-origin chocolates, all the way to gourmet flavours made with cheese.',
      'lab.tip': 'Before you decide, ask for a taste. They give it gladly, and it is the quickest way to work out which side you are on.',

      'gr.eyebrow': 'When it arrives',
      'gr.h': 'The granita is eaten<br>with a spoon.',
      'gr.p': 'You do not drink it through a straw: it is the thick kind, the kind that stands up. It is seasonal, and when it arrives no billboard announces it — they write it by hand on a card propped against the counter.',
      'gr.q': '“The granitas are here”',
      'gr.src': '— the handwritten sign, photographed in the shop',

      'li.eyebrow': 'Prices',
      'li.h': 'The prices are the ones<br>written on the wall.',
      'li.1': 'Baby, two small scoops', 'li.2': 'Small, two scoops',
      'li.3': 'Medium, three scoops', 'li.4': 'Large, four scoops',
      'li.5': 'Brioche with gelato', 'li.6': 'Cone with whipped cream',
      'li.7': 'Thick shake, 300 cc', 'li.8': 'Thick shake, 500 cc',
      'li.9': 'Cream or chocolate, double', 'li.10': 'Cream and chocolate, double',
      'li.star': '★ One portion of whipped cream or liquid chocolate is <strong>included in the price</strong>. It is written on their own sign, and it is the thing that surprises first-time customers most.',
      'li.nota': 'There are also take-away tubs, from half a kilo up, and the shakes can be made with rice milk. Prices noted in the shop: confirm them at the counter.',

      'voci.eyebrow': 'Google reviews',
      'voci.h': '4.4 out of 751.',
      'v1.p': '“Found by chance walking through the neighbourhood. The first time I had a cone with excellent, characterful flavours — gianduia and salted pistachio were stunning. Highly recommended!”',
      'v1.c': 'Rosa Maria Smiles',
      'v2.p': '“More than perfect gelato, you can choose — included in the price — whether to have melted chocolate underneath or cream. The portion is spot on and for that I recommend it warmly.”',
      'v2.c': 'Valentina Dicorato',
      'v3.p': '“I came in today by chance, and no chance was ever better. The girl who served me was so kind, she let me taste two (cannolo and cinnamon), both outstanding. Huge choice, great flavours, you can taste the quality of the ingredients.”',
      'v3.c': 'Serena Cesandri',
      'v4.p': '“The best gelateria I have ever tried in all of Milan. Kind, polite staff, a small but lovely place, original flavours that are anything but predictable!!”',
      'v4.c': 'Gaia Traversi',
      'v5.p': '“A generous portion for two flavours in the cup. And included in the price you can add cream or loose chocolate at the bottom!”',
      'v5.c': 'Angela Hu',
      'v6.p': '“One word: EXCELLENT! Dolci Storie, on Via degli Imbriani, is the ideal place to stop for a great gelato, whether in a cone or a cup.”',
      'v6.c': 'Franco Eugenio Castellano',

      'sala.eyebrow': 'The shop', 'sala.h': 'Small, and full.',
      'sala.a1': 'Enlarge: the counter',
      'sala.a2': 'Enlarge: two pistachio cones',
      'sala.a3': 'Enlarge: the price list on the wall',
      'sala.nota': 'There are few public photos of the shop: these are the verified ones. With a dedicated photo shoot, the counter would deserve far more.',

      'dove.eyebrow': 'Where we are', 'dove.h': 'Bovisa,<br>open late.',
      'dove.serv': 'Eat in · take away · home delivery',
      'dove.cta': 'Call the gelateria',
      'dove.maptitle': 'Map: Dolci Storie, Via degli Imbriani 47, Milan',
      'd.lun': 'Monday', 'd.mar': 'Tuesday', 'd.mer': 'Wednesday', 'd.gio': 'Thursday',
      'd.ven': 'Friday', 'd.sab': 'Saturday', 'd.dom': 'Sunday',

      'faq.h': 'Questions',
      'f1.q': 'What are the salted flavours?',
      'f1.a': 'Alongside the classics the counter keeps salted versions of the same bases — salted pistachio and salted dark chocolate — plus gourmet flavours made with cheese. Same ingredients, taken the other way.',
      'f2.q': 'Are cream and chocolate charged extra?',
      'f2.a': 'No. Their sign says one portion of whipped cream or liquid chocolate is included in the price. You only pay for a double.',
      'f3.q': 'Do you make granita?',
      'f3.a': 'Yes, and it is the kind you eat with a spoon, not drink. It is seasonal: when it arrives they write it by hand on the counter sign.',
      'f4.q': 'What time do you open?',
      'f4.a': 'Every day from 1 pm until 11:30 pm — Friday and Saturday until midnight. We do not serve breakfast.',
      'f5.q': 'Can I order for delivery?',
      'f5.a': 'Yes: besides the counter there is take-away and home delivery. For tubs, a phone call is best.',
      'f6.q': 'Can I taste before choosing?',
      'f6.a': 'Yes, and you should: it is the quickest way to tell whether the pistachio you want is the sweet one or the salted one.',

      'foot.orari': 'Every day 1 pm – 11:30 pm',
      'foot.we': 'Friday and Saturday until midnight',
      'foot.demo': 'Demo website made by',
      'ab.call': 'Call', 'ab.map': 'Find us', 'lb.close': 'Close',
    },
  };
  /* ═════════════════════════════════════════════════════════════════ */

  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' + encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; }
    });
  }

  /* ---------- GSAP: registrazione IMMEDIATA + reveal + watchdog ---------- */
  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) {
        els.forEach(function (el) {
          ScrollTrigger.getAll().forEach(function (st) { if (st.trigger === el && !st.progress) st.kill(); });
        });
      }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else if ('IntersectionObserver' in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
  } else {
    showAllReveals();
  }

  /* ---------- intro ---------- */
  var intro = document.getElementById(SITE.introId);
  var heroEntrance = window.bespokeHeroEntrance || function () {};
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 700);
    heroEntrance();
  }
  function killIntroNow() {
    if (!intro) return;
    var el = intro; intro = null;
    el.remove();
    heroEntrance();
  }
  if (reducedMotion || !intro) {
    if (intro) { intro.remove(); intro = null; }
    heroEntrance();
  } else {
    setTimeout(hideIntro, SITE.introDuration);
    setTimeout(hideIntro, 6000);
    intro.addEventListener('click', hideIntro);
  }

  /* ---------- burger ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    };
    var openNav = function () {
      killIntroNow();
      lastFocus = document.activeElement;
      nav.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    };
    burger.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > SITE.breakpointMenu) closeNav();
    });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) {
      lightboxImg.src = src; lightboxImg.alt = alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    };
    var closeLb = function () {
      lightbox.hidden = true; lightboxImg.src = '';
      document.body.style.overflow = '';
      if (opener) { opener.focus(); opener = null; }
    };
    document.querySelectorAll('[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn;
        var img = btn.querySelector('img');
        openLb(btn.getAttribute('data-full'), img ? img.alt : '');
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  /* ---------- orari dinamici Europe/Rome ---------- */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) {
      var s = toMin(wins[i][0]), e = toMin(wins[i][1]);
      if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) };
    }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) {
      var pe = toMin(pw[j][1]);
      if (pe > 1440 && now.mins < pe - 1440) return { open: true, day: prev, closesAt: fmt(pe) };
    }
    for (var k = 0; k < wins.length; k++) {
      if (now.mins < toMin(wins[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) };
    }
    for (var d = 1; d <= 7; d++) {
      var nd = (now.day + d) % 7;
      var nw = SITE.hours[nd] || [];
      if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) };
    }
    return { open: false, day: now.day };
  }

  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) {
      row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day);
    });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  /* ---------- i18n overlay ---------- */
  var originals = {};
  var I18N_ATTRS = [
    ['data-i18n', null],
    ['data-i18n-aria', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-title', 'title'],
  ];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  }
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}

  /* ---------- action-bar mobile ---------- */
  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () {
      actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ══════════ FINE PLUMBING — sotto, il codice-firma ══════════ */

  /* header: bordo quando si scrolla */
  var header = document.getElementById('header');
  if (header) {
    var headerScroll = function () { header.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', headerScroll, { passive: true });
    headerScroll();
  }

  /* ---------- FIRMA: l'interruttore DOLCE ⇄ SALATO ----------
     Il fatto distintivo di questa gelateria è che davanti al banco devi
     scegliere: il pistacchio o il pistacchio salato. Qui la scelta è
     cliccabile — e non cambia solo la lista dei gusti, ribalta la palette
     dell'intera pagina (le variabili di stato in :root). Le transizioni
     vivono nel CSS: qui si commuta soltanto lo stato, così senza GSAP e
     con reduced-motion l'interruttore continua a funzionare. */
  var gusto = document.getElementById('gusto');
  var dolce = document.getElementById('gustiDolce');
  var salato = document.getElementById('gustiSalato');

  if (gusto && dolce && salato) {
    var applica = function (isSalato) {
      document.body.classList.toggle('salato', isSalato);
      gusto.setAttribute('aria-checked', isSalato ? 'true' : 'false');
      // `hidden` e non display: così il pannello nascosto esce anche
      // dall'albero di accessibilità, non solo dalla vista
      dolce.hidden = isSalato;
      salato.hidden = !isSalato;
      // i chip che entrano ora non hanno mai incontrato il loro trigger:
      // vanno resi visibili a mano, altrimenti restano a opacità 0
      var entrati = (isSalato ? salato : dolce).querySelectorAll('.reveal');
      entrati.forEach(function (el) { el.classList.add('in-view'); });
      if (hasGsap && !reducedMotion) gsap.set(entrati, { opacity: 1, y: 0 });
      if (hasST) ScrollTrigger.refresh();
    };

    gusto.addEventListener('click', function () {
      applica(gusto.getAttribute('aria-checked') !== 'true');
    });
    // la barra spaziatrice su role="switch" non genera click in tutti i browser
    gusto.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        applica(gusto.getAttribute('aria-checked') !== 'true');
      }
    });
  }
})();
