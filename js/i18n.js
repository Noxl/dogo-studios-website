(function () {
  var translations = {
    en: {
      common: {
        nav: { home: "Home", apps: "Apps", contact: "Contact", privacy: "Privacy" },
        footer: { copy: "© 2026 Dogo Studios. All rights reserved." }
      },
      home: {
        hero: {
          title1: "Mobile apps, crafted",
          title2: "move by move.",
          lead: "Dogo Studios is an indie studio designing focused, beautiful mobile experiences — starting with the game of Go.",
          cta_explore: "Explore our apps",
          cta_contact: "Get in touch"
        },
        featured: {
          eyebrow: "Featured app",
          heading: "Meet Tsumego Dojo",
          tag: "Go / Board game",
          title: "Tsumego Dojo",
          desc: "Sharpen your Go with bite-sized life-and-death puzzles. Train anywhere, track your progress, and climb from beginner to dan.",
          cta: "Learn more"
        }
      },
      apps: {
        hero: { title: "Our Apps", sub: "Thoughtful mobile experiences, built by Dogo Studios." },
        tsumego: {
          tag: "Go / Board game",
          title: "Tsumego Dojo",
          placeholder: "[ Placeholder — app description coming soon. Add your text here later: what Tsumego Dojo does, key features, who it's for, and download links. ]",
          appstore: "App Store — coming soon",
          googleplay: "Google Play — coming soon"
        },
        more: {
          eyebrow: "Coming soon",
          heading: "More apps on the way",
          desc: "We're just getting started. New Dogo Studios apps will appear here."
        }
      },
      contact: {
        hero: { title: "Contact Us", sub: "Questions, feedback, or bug reports — we'd love to hear from you." },
        form: {
          name: "Name", name_ph: "Your name",
          email: "Email", email_ph: "you@example.com",
          message: "Message", message_ph: "How can we help?",
          submit: "Send message",
          alert: "Thanks! This is a demo form — hook it up to email or a form service later."
        },
        list: {
          email_label: "Email", email_value: "[ your@email.com — add later ]",
          social_label: "Social", social_value: "[ @handle — add later ]",
          response_label: "Response time", response_value: "We usually reply within a few business days."
        }
      },
      privacy: {
        hero: { title: "Privacy Policy", sub: "Last updated: July 28, 2026" },
        overview: {
          h: "Overview",
          p: "Dogo Studios (\"we\", \"us\", \"our\") builds mobile apps, including Tsumego Dojo (the \"App\"). This Privacy Policy explains what information is involved when you use the App and how it is handled. Tsumego Dojo works without an account and without us collecting any personal data directly from you — the only data processing involved comes from the third-party advertising service (Google AdMob) used to display ads in the App."
        },
        noaccount: {
          h: "No account, no personal data collected by us",
          p: "Tsumego Dojo does not require you to create an account, sign in, or provide any personal information such as your name, email address, or location to use the App. We do not run any servers that store your puzzle progress, purchase history, or any other personal data. Any progress or settings saved by the App stay on your device and are never sent to us."
        },
        iap: {
          h: "In-app purchases",
          p: "Tsumego Dojo offers optional puzzle collections for purchase within the App. All purchases are processed entirely by the Apple App Store or Google Play billing systems. We never see, collect, or store your payment details — that information is handled directly by Apple or Google under their own privacy policies. We only receive confirmation that a purchase was completed, so the corresponding content can be unlocked on your device."
        },
        ads: {
          h: "Advertising — Google AdMob",
          p1: "The App displays a banner advertisement using Google AdMob, a third-party advertising service. Independently of us, AdMob may collect and process certain information automatically in order to serve and measure ads, including:",
          li1: "Device identifiers, such as your device's advertising ID",
          li2: "IP address and the approximate location derived from it",
          li3: "Device information (model, operating system, language, screen size)",
          li4: "Ad activity, such as ad requests, impressions, and clicks",
          li5: "Cookies or similar technologies used by Google",
          p2: "This data is collected and processed by Google, not by us, and is governed by Google's own policies:",
          link1: "Google Privacy Policy",
          link2: "How Google uses information from sites or apps that use its services",
          p3: "We do not have access to this data ourselves, and we do not combine it with any other information."
        },
        adchoices: {
          h: "Your ad choices",
          p1: "You can control ad personalization, or opt out of it, through:",
          li1: "Android — Settings → Google → Ads → \"Opt out of Ads Personalization\" or \"Reset advertising ID\"",
          li2: "iOS — when prompted by the App Tracking Transparency permission you can decline tracking, or later change it under Settings → Privacy & Security → Tracking",
          li3: "Google Ads Settings",
          li4: "Industry opt-out (US)",
          li5: "Industry opt-out (EU)",
          p2: "If you are located in the European Economic Area, the UK, or Switzerland, Google may ask for your consent before showing personalized ads, in line with Google's EU User Consent Policy."
        },
        children: {
          h: "Children's privacy",
          p: "Tsumego Dojo is not directed at children under the age of 13 (or the relevant age of digital consent in your country), and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can address it."
        },
        rights: {
          h: "Your rights (GDPR / CCPA)",
          p: "Because we do not collect or store personal data ourselves, there is generally no personal data held by us for you to access, correct, or delete. Requests relating to information collected by Google AdMob — for example under the GDPR, UK GDPR, or the California Consumer Privacy Act/CPRA — should be directed to Google, using the tools linked above or via myaccount.google.com/data-and-privacy. You are welcome to contact us as well using the details below."
        },
        retention: {
          h: "Data retention & security",
          p: "Since we do not collect or store personal data on our own servers, there is no personal data for us to retain or secure. Any data processed by Google AdMob is retained and secured according to Google's own policies and practices."
        },
        international: {
          h: "International data transfers",
          p: "Where applicable, data processed by Google AdMob may be transferred to and processed in the United States or other countries where Google or its partners operate, in accordance with Google's privacy policy and applicable safeguards."
        },
        changes: {
          h: "Changes to this policy",
          p: "We may update this Privacy Policy from time to time, for example to reflect changes in the App or in applicable law. Changes will be posted on this page with an updated \"Last updated\" date. We encourage you to review this page periodically."
        },
        contact: { h: "Contact", pre: "Questions about this policy? Reach us via the", link: "contact page", post: "." }
      }
    },

    fr: {
      common: {
        nav: { home: "Accueil", apps: "Applications", contact: "Contact", privacy: "Confidentialité" },
        footer: { copy: "© 2026 Dogo Studios. Tous droits réservés." }
      },
      home: {
        hero: {
          title1: "Des applications mobiles, façonnées",
          title2: "coup par coup.",
          lead: "Dogo Studios est un studio indépendant qui conçoit des expériences mobiles épurées et soignées — en commençant par le jeu de Go.",
          cta_explore: "Découvrir nos applications",
          cta_contact: "Nous contacter"
        },
        featured: {
          eyebrow: "Application phare",
          heading: "Découvrez Tsumego Dojo",
          tag: "Go / Jeu de plateau",
          title: "Tsumego Dojo",
          desc: "Affûtez votre Go avec des problèmes de vie et de mort courts et efficaces. Entraînez-vous partout, suivez votre progression et grimpez du niveau débutant au dan.",
          cta: "En savoir plus"
        }
      },
      apps: {
        hero: { title: "Nos applications", sub: "Des expériences mobiles soignées, conçues par Dogo Studios." },
        tsumego: {
          tag: "Go / Jeu de plateau",
          title: "Tsumego Dojo",
          placeholder: "[ Emplacement réservé — description de l'application à venir. Ajoutez ici votre texte plus tard : ce que fait Tsumego Dojo, ses fonctionnalités clés, à qui il s'adresse, et les liens de téléchargement. ]",
          appstore: "App Store — bientôt disponible",
          googleplay: "Google Play — bientôt disponible"
        },
        more: {
          eyebrow: "Bientôt disponible",
          heading: "D'autres applications arrivent",
          desc: "Nous ne faisons que commencer. De nouvelles applications Dogo Studios apparaîtront ici."
        }
      },
      contact: {
        hero: { title: "Contactez-nous", sub: "Questions, retours ou rapports de bugs — nous serions ravis de vous lire." },
        form: {
          name: "Nom", name_ph: "Votre nom",
          email: "E-mail", email_ph: "vous@exemple.com",
          message: "Message", message_ph: "Comment pouvons-nous vous aider ?",
          submit: "Envoyer le message",
          alert: "Merci ! Ceci est un formulaire de démonstration — connectez-le plus tard à un e-mail ou à un service de formulaires."
        },
        list: {
          email_label: "E-mail", email_value: "[ votre@email.com — à ajouter plus tard ]",
          social_label: "Réseaux sociaux", social_value: "[ @pseudo — à ajouter plus tard ]",
          response_label: "Délai de réponse", response_value: "Nous répondons généralement sous quelques jours ouvrés."
        }
      },
      privacy: {
        hero: { title: "Politique de confidentialité", sub: "Dernière mise à jour : 28 juillet 2026" },
        overview: {
          h: "Aperçu",
          p: "Dogo Studios (« nous ») conçoit des applications mobiles, dont Tsumego Dojo (l'« Application »). Cette politique de confidentialité explique quelles informations sont concernées lorsque vous utilisez l'Application et comment elles sont traitées. Tsumego Dojo fonctionne sans compte et sans que nous collections nous-mêmes de données personnelles directement auprès de vous — le seul traitement de données provient du service publicitaire tiers (Google AdMob) utilisé pour afficher des publicités dans l'Application."
        },
        noaccount: {
          h: "Aucun compte, aucune donnée personnelle collectée par nous",
          p: "Tsumego Dojo ne vous demande pas de créer un compte, de vous connecter ou de fournir des informations personnelles telles que votre nom, votre adresse e-mail ou votre localisation pour utiliser l'Application. Nous n'exploitons aucun serveur stockant votre progression dans les problèmes, votre historique d'achats ou toute autre donnée personnelle. La progression et les paramètres enregistrés par l'Application restent sur votre appareil et ne nous sont jamais transmis."
        },
        iap: {
          h: "Achats intégrés",
          p: "Tsumego Dojo propose des collections de problèmes optionnelles à l'achat au sein de l'Application. Tous les achats sont traités intégralement par les systèmes de facturation de l'App Store d'Apple ou de Google Play. Nous ne voyons, ne collectons ni ne stockons jamais vos informations de paiement — ces informations sont gérées directement par Apple ou Google selon leurs propres politiques de confidentialité. Nous recevons uniquement la confirmation qu'un achat a été effectué, afin de débloquer le contenu correspondant sur votre appareil."
        },
        ads: {
          h: "Publicité — Google AdMob",
          p1: "L'Application affiche une bannière publicitaire via Google AdMob, un service publicitaire tiers. Indépendamment de nous, AdMob peut collecter et traiter automatiquement certaines informations afin de diffuser et de mesurer les publicités, notamment :",
          li1: "Des identifiants d'appareil, comme l'identifiant publicitaire de votre appareil",
          li2: "L'adresse IP et la localisation approximative qui en est déduite",
          li3: "Des informations sur l'appareil (modèle, système d'exploitation, langue, taille d'écran)",
          li4: "L'activité publicitaire, telle que les demandes, impressions et clics sur les publicités",
          li5: "Des cookies ou technologies similaires utilisés par Google",
          p2: "Ces données sont collectées et traitées par Google, et non par nous, et sont régies par les propres politiques de Google :",
          link1: "Politique de confidentialité de Google",
          link2: "Comment Google utilise les informations provenant de sites ou d'applications utilisant ses services",
          p3: "Nous n'avons pas nous-mêmes accès à ces données et ne les combinons avec aucune autre information."
        },
        adchoices: {
          h: "Vos choix en matière de publicité",
          p1: "Vous pouvez contrôler la personnalisation des publicités, ou vous en désinscrire, via :",
          li1: "Android — Paramètres → Google → Annonces → « Désactiver la personnalisation des annonces » ou « Réinitialiser l'identifiant publicitaire »",
          li2: "iOS — lorsque l'autorisation de suivi (App Tracking Transparency) vous est demandée, vous pouvez la refuser, ou la modifier plus tard dans Réglages → Confidentialité et sécurité → Suivi",
          li3: "Paramètres des annonces Google",
          li4: "Désinscription sectorielle (États-Unis)",
          li5: "Désinscription sectorielle (UE)",
          p2: "Si vous vous trouvez dans l'Espace économique européen, au Royaume-Uni ou en Suisse, Google peut vous demander votre consentement avant d'afficher des publicités personnalisées, conformément à la politique de consentement des utilisateurs de l'UE de Google."
        },
        children: {
          h: "Confidentialité des enfants",
          p: "Tsumego Dojo ne s'adresse pas aux enfants de moins de 13 ans (ou l'âge de consentement numérique applicable dans votre pays), et nous ne collectons pas sciemment de données personnelles auprès d'enfants. Si vous pensez qu'un enfant nous a transmis des données personnelles, veuillez nous contacter afin que nous puissions y remédier."
        },
        rights: {
          h: "Vos droits (RGPD / CCPA)",
          p: "Comme nous ne collectons ni ne stockons nous-mêmes de données personnelles, il n'y a généralement aucune donnée personnelle détenue par nous à laquelle vous pourriez accéder, que vous pourriez corriger ou supprimer. Les demandes concernant les informations collectées par Google AdMob — par exemple au titre du RGPD, du RGPD britannique ou du California Consumer Privacy Act/CPRA — doivent être adressées à Google, via les outils mentionnés ci-dessus ou via myaccount.google.com/data-and-privacy. Vous pouvez également nous contacter en utilisant les coordonnées ci-dessous."
        },
        retention: {
          h: "Conservation des données et sécurité",
          p: "Comme nous ne collectons ni ne stockons de données personnelles sur nos propres serveurs, nous n'avons aucune donnée personnelle à conserver ou à sécuriser. Les données traitées par Google AdMob sont conservées et sécurisées conformément aux propres politiques et pratiques de Google."
        },
        international: {
          h: "Transferts internationaux de données",
          p: "Le cas échéant, les données traitées par Google AdMob peuvent être transférées et traitées aux États-Unis ou dans d'autres pays où Google ou ses partenaires opèrent, conformément à la politique de confidentialité de Google et aux garanties applicables."
        },
        changes: {
          h: "Modifications de cette politique",
          p: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre, par exemple pour refléter des changements dans l'Application ou dans la législation applicable. Les modifications seront publiées sur cette page avec une date de « dernière mise à jour » actualisée. Nous vous encourageons à consulter cette page régulièrement."
        },
        contact: { h: "Contact", pre: "Des questions sur cette politique ? Contactez-nous via la", link: "page de contact", post: "." }
      }
    },

    es: {
      common: {
        nav: { home: "Inicio", apps: "Aplicaciones", contact: "Contacto", privacy: "Privacidad" },
        footer: { copy: "© 2026 Dogo Studios. Todos los derechos reservados." }
      },
      home: {
        hero: {
          title1: "Aplicaciones móviles, creadas",
          title2: "jugada a jugada.",
          lead: "Dogo Studios es un estudio independiente que diseña experiencias móviles cuidadas y minimalistas — empezando por el juego de Go.",
          cta_explore: "Explorar nuestras apps",
          cta_contact: "Contáctanos"
        },
        featured: {
          eyebrow: "App destacada",
          heading: "Conoce Tsumego Dojo",
          tag: "Go / Juego de mesa",
          title: "Tsumego Dojo",
          desc: "Perfecciona tu Go con problemas de vida y muerte breves. Entrena donde quieras, sigue tu progreso y sube de principiante a dan.",
          cta: "Saber más"
        }
      },
      apps: {
        hero: { title: "Nuestras apps", sub: "Experiencias móviles cuidadas, creadas por Dogo Studios." },
        tsumego: {
          tag: "Go / Juego de mesa",
          title: "Tsumego Dojo",
          placeholder: "[ Marcador de posición — descripción de la app próximamente. Añade aquí tu texto más adelante: qué hace Tsumego Dojo, sus funciones clave, para quién es y los enlaces de descarga. ]",
          appstore: "App Store — próximamente",
          googleplay: "Google Play — próximamente"
        },
        more: {
          eyebrow: "Próximamente",
          heading: "Más apps en camino",
          desc: "Esto es solo el comienzo. Nuevas apps de Dogo Studios aparecerán aquí."
        }
      },
      contact: {
        hero: { title: "Contáctanos", sub: "Preguntas, comentarios o informes de errores — nos encantaría saber de ti." },
        form: {
          name: "Nombre", name_ph: "Tu nombre",
          email: "Correo electrónico", email_ph: "tu@ejemplo.com",
          message: "Mensaje", message_ph: "¿Cómo podemos ayudarte?",
          submit: "Enviar mensaje",
          alert: "¡Gracias! Este es un formulario de demostración — conéctalo más adelante a un correo o a un servicio de formularios."
        },
        list: {
          email_label: "Correo electrónico", email_value: "[ tu@email.com — añadir más adelante ]",
          social_label: "Redes sociales", social_value: "[ @usuario — añadir más adelante ]",
          response_label: "Tiempo de respuesta", response_value: "Solemos responder en pocos días hábiles."
        }
      },
      privacy: {
        hero: { title: "Política de privacidad", sub: "Última actualización: 28 de julio de 2026" },
        overview: {
          h: "Resumen",
          p: "Dogo Studios (\"nosotros\") crea aplicaciones móviles, incluida Tsumego Dojo (la \"App\"). Esta política de privacidad explica qué información interviene cuando usas la App y cómo se trata. Tsumego Dojo funciona sin cuenta y sin que nosotros recopilemos ningún dato personal directamente de ti — el único tratamiento de datos proviene del servicio publicitario de terceros (Google AdMob) usado para mostrar anuncios en la App."
        },
        noaccount: {
          h: "Sin cuenta, sin datos personales recopilados por nosotros",
          p: "Tsumego Dojo no requiere que crees una cuenta, inicies sesión o proporciones información personal como tu nombre, correo electrónico o ubicación para usar la App. No operamos ningún servidor que almacene tu progreso en los problemas, tu historial de compras ni ningún otro dato personal. El progreso y los ajustes guardados por la App permanecen en tu dispositivo y nunca se nos envían."
        },
        iap: {
          h: "Compras dentro de la app",
          p: "Tsumego Dojo ofrece colecciones de problemas opcionales para comprar dentro de la App. Todas las compras se procesan íntegramente a través de los sistemas de facturación de la App Store de Apple o de Google Play. Nunca vemos, recopilamos ni almacenamos tus datos de pago — esa información la gestionan directamente Apple o Google conforme a sus propias políticas de privacidad. Solo recibimos la confirmación de que una compra se ha completado, para poder desbloquear el contenido correspondiente en tu dispositivo."
        },
        ads: {
          h: "Publicidad — Google AdMob",
          p1: "La App muestra un anuncio en banner mediante Google AdMob, un servicio publicitario de terceros. De forma independiente a nosotros, AdMob puede recopilar y procesar automáticamente cierta información para mostrar y medir anuncios, entre ella:",
          li1: "Identificadores del dispositivo, como el ID de publicidad de tu dispositivo",
          li2: "Dirección IP y la ubicación aproximada derivada de ella",
          li3: "Información del dispositivo (modelo, sistema operativo, idioma, tamaño de pantalla)",
          li4: "Actividad publicitaria, como solicitudes, impresiones y clics en anuncios",
          li5: "Cookies o tecnologías similares utilizadas por Google",
          p2: "Estos datos los recopila y procesa Google, no nosotros, y se rigen por las propias políticas de Google:",
          link1: "Política de privacidad de Google",
          link2: "Cómo usa Google la información de los sitios o apps que utilizan sus servicios",
          p3: "Nosotros mismos no tenemos acceso a estos datos ni los combinamos con ninguna otra información."
        },
        adchoices: {
          h: "Tus opciones sobre publicidad",
          p1: "Puedes controlar la personalización de anuncios, o desactivarla, a través de:",
          li1: "Android — Ajustes → Google → Anuncios → \"Inhabilitar personalización de anuncios\" o \"Restablecer el ID de publicidad\"",
          li2: "iOS — cuando se te solicite el permiso de seguimiento (App Tracking Transparency) puedes rechazarlo, o cambiarlo más tarde en Ajustes → Privacidad y seguridad → Seguimiento",
          li3: "Configuración de anuncios de Google",
          li4: "Exclusión sectorial (EE. UU.)",
          li5: "Exclusión sectorial (UE)",
          p2: "Si te encuentras en el Espacio Económico Europeo, el Reino Unido o Suiza, Google puede solicitar tu consentimiento antes de mostrar anuncios personalizados, conforme a la Política de consentimiento de usuarios de la UE de Google."
        },
        children: {
          h: "Privacidad de los menores",
          p: "Tsumego Dojo no está dirigida a menores de 13 años (o la edad de consentimiento digital aplicable en tu país), y no recopilamos conscientemente datos personales de menores. Si crees que un menor nos ha facilitado datos personales, contáctanos para que podamos resolverlo."
        },
        rights: {
          h: "Tus derechos (RGPD / CCPA)",
          p: "Como no recopilamos ni almacenamos datos personales nosotros mismos, por lo general no hay datos personales en nuestro poder a los que puedas acceder, corregir o eliminar. Las solicitudes relacionadas con la información recopilada por Google AdMob — por ejemplo, conforme al RGPD, el RGPD del Reino Unido o la California Consumer Privacy Act/CPRA — deben dirigirse a Google, mediante las herramientas enlazadas arriba o a través de myaccount.google.com/data-and-privacy. También puedes contactarnos usando los datos indicados abajo."
        },
        retention: {
          h: "Conservación de datos y seguridad",
          p: "Como no recopilamos ni almacenamos datos personales en nuestros propios servidores, no tenemos datos personales que conservar ni proteger. Los datos procesados por Google AdMob se conservan y protegen conforme a las propias políticas y prácticas de Google."
        },
        international: {
          h: "Transferencias internacionales de datos",
          p: "Cuando corresponda, los datos procesados por Google AdMob pueden transferirse y tratarse en Estados Unidos o en otros países donde Google o sus socios operan, de acuerdo con la política de privacidad de Google y las garantías aplicables."
        },
        changes: {
          h: "Cambios en esta política",
          p: "Podemos actualizar esta política de privacidad de vez en cuando, por ejemplo para reflejar cambios en la App o en la legislación aplicable. Los cambios se publicarán en esta página con una fecha de \"última actualización\" actualizada. Te animamos a revisar esta página periódicamente."
        },
        contact: { h: "Contacto", pre: "¿Tienes preguntas sobre esta política? Contáctanos a través de la", link: "página de contacto", post: "." }
      }
    }
  };

  var FLAGS = { en: "🇬🇧", fr: "🇫🇷", es: "🇪🇸" };

  function resolveKey(dict, key) {
    return key.split(".").reduce(function (acc, part) {
      return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, dict);
  }

  function t(key) {
    var lang = getSavedLang();
    return resolveKey(translations[lang], key) || resolveKey(translations.en, key) || key;
  }

  function getSavedLang() {
    return localStorage.getItem("dogo-lang") || "en";
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = resolveKey(translations[lang], el.getAttribute("data-i18n"));
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = resolveKey(translations[lang], el.getAttribute("data-i18n-placeholder"));
      if (value != null) el.setAttribute("placeholder", value);
    });

    var flagEl = document.getElementById("langFlag");
    if (flagEl) flagEl.textContent = FLAGS[lang] || FLAGS.en;

    document.querySelectorAll(".lang-menu button[data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("dogo-lang", lang);
  }

  function initLangSwitch() {
    var btn = document.getElementById("langBtn");
    var menu = document.getElementById("langMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("button[data-lang]").forEach(function (item) {
      item.addEventListener("click", function () {
        applyLanguage(item.getAttribute("data-lang"));
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function () {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    applyLanguage(getSavedLang());
  });

  window.dogoI18n = { applyLanguage: applyLanguage, t: t };
})();
