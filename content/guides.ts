// Données des guides piliers (contenu éditorial informationnel).
// Chaque guide alimente une page /guides/[slug] avec Article + FAQPage JSON-LD.

export type GuideSection = {
  h2: string;
  paragraphs: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  updated: string; // ISO date, pour lastmod + dateModified
  lede: string; // chapô sous le H1
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  related: string[]; // slugs d'autres guides
};

export const GUIDES: Guide[] = [
  {
    slug: "prix-borne-de-recharge",
    metaTitle: "Prix d'une borne de recharge en 2026 : le vrai coût installé | Choisis Ta borne",
    metaDescription:
      "Combien coûte une borne de recharge installée en 2026 ? De 990 à 1990 € posée selon la puissance et la distance au tableau. Détail des prix, aides (TVA 5,5 %, ADVENIR) et devis gratuit.",
    h1: "Prix d'une borne de recharge en 2026 : combien ça coûte, posée ?",
    updated: "2026-07-08",
    lede: "Le prix d'une borne de recharge installée dépend surtout de la puissance choisie, de la distance entre le tableau électrique et la borne, et des travaux annexes. Voici les fourchettes réelles, aides déduites.",
    sections: [
      {
        h2: "Le prix d'une borne de recharge installée",
        paragraphs: [
          "Pour une borne à domicile, comptez entre 990 € et 1 990 € posée pour une puissance de 7,4 à 11 kW, matériel et main-d'œuvre compris. Ce tarif inclut la borne (wallbox), le câblage, la protection électrique dédiée et la mise en service par un électricien certifié IRVE.",
          "La borne seule (le matériel) représente 400 à 900 € selon la marque et les options (pilotage, mesure de consommation, câble attaché). La pose et le raccordement électrique constituent le reste du devis.",
        ],
      },
      {
        h2: "Ce qui fait varier le prix",
        paragraphs: [
          "Trois facteurs pèsent l'essentiel du devis :",
        ],
        list: [
          "La distance entre le tableau électrique et la borne : au-delà de 15 m, le câblage et le passage de gaine augmentent la facture.",
          "La puissance et le type de compteur : une 7,4 kW se branche en monophasé (cas le plus courant) ; les 11 et 22 kW nécessitent un compteur triphasé.",
          "Les travaux annexes : tranchée, percement, mise à la terre à reprendre, ajout d'un tableau divisionnaire.",
        ],
      },
      {
        h2: "Les aides qui réduisent la facture en 2026",
        paragraphs: [
          "La TVA réduite à 5,5 % s'applique automatiquement sur la pose d'une borne dans un logement de plus de deux ans : elle est déjà intégrée au devis de nos installateurs partenaires.",
          "En copropriété, la prime ADVENIR peut couvrir jusqu'à 960 € des travaux d'installation individuelle. Le crédit d'impôt pour borne de recharge, lui, a pris fin : méfiez-vous des sites qui le mentionnent encore.",
        ],
      },
      {
        h2: "Faut-il une borne ou une simple prise renforcée ?",
        paragraphs: [
          "Une prise renforcée (type Green'up) coûte moins cher à installer mais plafonne autour de 3,7 kW et n'offre ni pilotage ni sécurité équivalente. Pour un usage quotidien, la borne dédiée reste plus rapide, plus sûre et éligible aux aides.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le prix moyen d'une borne de recharge installée ?",
        a: "Entre 990 € et 1 990 € posée pour une borne de 7,4 à 11 kW à domicile, avant déduction des aides (TVA réduite à 5,5 %, prime ADVENIR en copropriété).",
      },
      {
        q: "La TVA réduite est-elle automatique ?",
        a: "Oui, la TVA à 5,5 % s'applique de plein droit sur la pose d'une borne dans un logement achevé depuis plus de deux ans, et elle est déjà intégrée au devis de l'installateur.",
      },
      {
        q: "Le crédit d'impôt borne de recharge existe-t-il encore ?",
        a: "Non, le crédit d'impôt spécifique à la borne de recharge n'est plus en vigueur. Les aides valables sont la TVA réduite à 5,5 % et la prime ADVENIR (copropriété).",
      },
    ],
    related: ["aides-borne-de-recharge", "choisir-puissance-borne"],
  },
  {
    slug: "aides-borne-de-recharge",
    metaTitle: "Aides borne de recharge 2026 : TVA 5,5 % et prime ADVENIR | Choisis Ta borne",
    metaDescription:
      "Quelles aides pour installer une borne de recharge en 2026 ? TVA réduite à 5,5 % et prime ADVENIR jusqu'à 960 € en copropriété, cumulables. Le crédit d'impôt a pris fin. Explications et devis gratuit.",
    h1: "Aides pour une borne de recharge en 2026 : ce à quoi vous avez droit",
    updated: "2026-07-08",
    lede: "En 2026, deux dispositifs réduisent réellement le coût d'une borne de recharge : la TVA réduite à 5,5 % et la prime ADVENIR. Voici comment ils fonctionnent et se cumulent.",
    sections: [
      {
        h2: "La TVA réduite à 5,5 %",
        paragraphs: [
          "La pose d'une borne de recharge bénéficie du taux de TVA réduit à 5,5 %, contre 20 % en temps normal, dès lors que le logement est achevé depuis plus de deux ans. L'avantage est appliqué directement par l'installateur sur le devis — vous n'avez aucune démarche à faire.",
        ],
      },
      {
        h2: "La prime ADVENIR (copropriété)",
        paragraphs: [
          "La prime ADVENIR soutient l'installation de bornes sur les places de stationnement en copropriété. Pour une installation individuelle, elle peut couvrir jusqu'à 50 % des coûts dans la limite de 960 €.",
          "Elle concerne aussi les installations collectives et les infrastructures de recharge partagées. Nos installateurs partenaires montent le dossier ADVENIR pour vous.",
        ],
      },
      {
        h2: "Ces aides sont-elles cumulables ?",
        paragraphs: [
          "Oui. La TVA à 5,5 % et la prime ADVENIR se cumulent : en copropriété, vous bénéficiez du taux réduit sur la pose ET de la prime sur le coût des travaux. C'est la combinaison la plus avantageuse en 2026.",
        ],
      },
      {
        h2: "Le crédit d'impôt a disparu",
        paragraphs: [
          "Attention : le crédit d'impôt pour la transition énergétique dédié aux bornes de recharge n'existe plus. De nombreux sites continuent de l'afficher pour paraître plus attractifs — ce n'est plus une aide valable. Ne fondez pas votre budget dessus.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelles aides pour une borne de recharge en 2026 ?",
        a: "La TVA réduite à 5,5 % sur la pose (logement de plus de deux ans) et la prime ADVENIR jusqu'à 960 € en copropriété. Ces deux aides sont cumulables.",
      },
      {
        q: "Puis-je cumuler la TVA réduite et la prime ADVENIR ?",
        a: "Oui, les deux dispositifs se cumulent. En copropriété, vous profitez du taux de TVA à 5,5 % sur la pose et de la prime ADVENIR sur le coût des travaux.",
      },
      {
        q: "Y a-t-il encore un crédit d'impôt pour la borne de recharge ?",
        a: "Non. Le crédit d'impôt spécifique à la borne de recharge a pris fin. Seules la TVA réduite à 5,5 % et la prime ADVENIR restent en vigueur.",
      },
    ],
    related: ["prix-borne-de-recharge", "borne-recharge-copropriete"],
  },
  {
    slug: "choisir-puissance-borne",
    metaTitle: "7,4, 11 ou 22 kW : quelle puissance de borne de recharge choisir ? | Choisis Ta borne",
    metaDescription:
      "Quelle puissance de borne de recharge choisir ? 7,4 kW en monophasé pour la majorité des foyers, 11 et 22 kW en triphasé pour les gros rouleurs. Guide de choix clair et devis gratuit.",
    h1: "7,4, 11 ou 22 kW : quelle puissance de borne de recharge choisir ?",
    updated: "2026-07-08",
    lede: "La bonne puissance dépend de votre compteur (monophasé ou triphasé), de votre kilométrage et de votre véhicule. Dans la grande majorité des foyers, la 7,4 kW est le choix le plus pertinent.",
    sections: [
      {
        h2: "La 7,4 kW : le bon choix pour la plupart des foyers",
        paragraphs: [
          "La borne 7,4 kW fonctionne en monophasé, c'est-à-dire sur l'installation électrique standard de la majorité des maisons françaises. Elle recharge une batterie complète pendant la nuit — largement suffisant pour un usage quotidien.",
          "C'est la puissance que nous recommandons par défaut : le meilleur rapport coût / recharge sans travaux d'adaptation du compteur.",
        ],
      },
      {
        h2: "La 11 kW : pour les gros rouleurs en triphasé",
        paragraphs: [
          "La 11 kW nécessite un compteur triphasé. Elle divise par deux le temps de recharge par rapport à la 7,4 kW et convient aux foyers qui roulent beaucoup ou qui rechargent deux véhicules.",
          "Si vous n'êtes pas déjà en triphasé, le passage au triphasé auprès de votre gestionnaire de réseau engendre un coût et un délai supplémentaires à anticiper.",
        ],
      },
      {
        h2: "La 22 kW : usage intensif et professionnel",
        paragraphs: [
          "La 22 kW s'adresse aux flottes, aux copropriétés et aux professionnels. Elle exige un abonnement électrique adapté et un véhicule capable d'accepter cette puissance en courant alternatif — ce qui n'est pas le cas de tous les modèles.",
        ],
      },
      {
        h2: "Comment savoir si je suis en mono ou en triphasé ?",
        paragraphs: [
          "Regardez votre tableau électrique ou votre facture : en monophasé, l'arrivée compte une phase et un neutre ; en triphasé, trois phases. En cas de doute, l'installateur le vérifie lors de la visite et vous oriente vers la bonne puissance.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle puissance de borne choisir : 7,4, 11 ou 22 kW ?",
        a: "La 7,4 kW est recommandée dans la majorité des cas : compatible monophasé et suffisante pour recharger complètement pendant la nuit. Les 11 et 22 kW nécessitent un compteur triphasé (gros rouleurs, flottes, copropriétés).",
      },
      {
        q: "La 7,4 kW est-elle assez rapide ?",
        a: "Oui pour un usage quotidien : elle recharge une batterie complète en une nuit. La puissance supérieure n'est utile que si vous roulez beaucoup ou rechargez plusieurs véhicules.",
      },
      {
        q: "Faut-il le triphasé pour une borne de recharge ?",
        a: "Non, pas pour une 7,4 kW qui fonctionne en monophasé. Le triphasé n'est nécessaire que pour les bornes 11 et 22 kW.",
      },
    ],
    related: ["prix-borne-de-recharge", "aides-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-copropriete",
    metaTitle: "Installer une borne de recharge en copropriété : droit à la prise et ADVENIR | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge en copropriété : le droit à la prise, la prime ADVENIR jusqu'à 960 € et les démarches en assemblée. Guide complet et devis gratuit d'installateurs IRVE certifiés.",
    h1: "Installer une borne de recharge en copropriété : le guide complet",
    updated: "2026-07-08",
    lede: "En copropriété, installer une borne sur sa place de parking est un droit. Entre le « droit à la prise », la prime ADVENIR et les démarches en assemblée, voici comment procéder sereinement.",
    sections: [
      {
        h2: "Le droit à la prise",
        paragraphs: [
          "Tout occupant d'une place de stationnement (propriétaire ou locataire) peut faire installer une borne à ses frais grâce au « droit à la prise ». Il suffit d'informer le syndic ; la copropriété ne peut s'y opposer que pour un motif sérieux et légitime, examiné en assemblée.",
        ],
      },
      {
        h2: "Installation individuelle ou collective ?",
        paragraphs: [
          "Deux approches coexistent : l'installation individuelle sur votre seule place, ou une infrastructure collective (colonne montante) qui pré-équipe le parking pour tous les copropriétaires. La solution collective mutualise les coûts mais nécessite un vote en assemblée générale.",
        ],
      },
      {
        h2: "La prime ADVENIR en copropriété",
        paragraphs: [
          "La prime ADVENIR est particulièrement avantageuse en copropriété : jusqu'à 960 € pour une installation individuelle, et des montants dédiés pour les infrastructures collectives. Nos installateurs partenaires constituent le dossier à votre place.",
        ],
      },
      {
        h2: "Les démarches, étape par étape",
        paragraphs: [
          "Le parcours type est simple et nos installateurs vous accompagnent à chaque étape :",
        ],
        list: [
          "Informer le syndic de votre projet par lettre recommandée.",
          "Faire réaliser une étude technique par un installateur IRVE certifié.",
          "Présenter le projet en assemblée générale (pour information ou pour vote selon le cas).",
          "Faire poser la borne et monter le dossier de prime ADVENIR.",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je installer une borne en copropriété sans l'accord de tous ?",
        a: "Oui, grâce au droit à la prise : vous informez le syndic et la copropriété ne peut refuser que pour un motif sérieux et légitime. L'installation se fait à vos frais sur votre place.",
      },
      {
        q: "Quelle aide pour une borne en copropriété ?",
        a: "La prime ADVENIR, jusqu'à 960 € pour une installation individuelle, cumulable avec la TVA réduite à 5,5 %. Des montants spécifiques existent pour les infrastructures collectives.",
      },
      {
        q: "Locataire, ai-je le droit d'installer une borne ?",
        a: "Oui. Le droit à la prise s'applique aussi aux locataires : vous informez le propriétaire et le syndic, puis faites poser la borne à vos frais.",
      },
    ],
    related: ["aides-borne-de-recharge", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-de-recharge-maison",
    metaTitle: "Borne de recharge maison : installation, prix et aides 2026 | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge à la maison : wallbox ou prise renforcée, puissance 7,4/11/22 kW, prix posé, TVA 5,5 % et prime ADVENIR. Guide complet + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Borne de recharge à la maison : le guide complet pour bien s'équiper",
    updated: "2026-07-12",
    lede: "Installer une borne de recharge à domicile est la solution la plus pratique et la plus économique pour recharger sa voiture électrique. Wallbox murale, puissance, prix, aides et installation par un électricien IRVE certifié : voici tout ce qu'il faut savoir.",
    sections: [
      {
        h2: "Pourquoi installer une borne de recharge à la maison",
        paragraphs: [
          "Recharger à domicile, c'est brancher sa voiture électrique chaque soir comme un smartphone et repartir chaque matin avec une batterie pleine. Le coût de l'électricité à la maison (surtout en heures creuses) est bien inférieur à celui des bornes de recharge publiques.",
          "Une borne de recharge murale (wallbox) est aussi plus rapide et bien plus sûre qu'une prise domestique classique : elle dispose d'une ligne électrique dédiée, de protections adaptées et d'une puissance stable, sans risque de surchauffe.",
        ],
      },
      {
        h2: "Wallbox ou prise renforcée en maison individuelle ?",
        paragraphs: [
          "La prise renforcée (type Green'Up) délivre environ 3,2 kW : suffisante pour un petit rouleur, mais lente. La wallbox, elle, monte de 7,4 kW (monophasé) à 22 kW (triphasé) et recharge la plupart des véhicules en une nuit.",
          "Pour une maison avec garage ou place privative, la wallbox est presque toujours le meilleur choix : recharge rapide, pilotage possible, et éligibilité aux aides (la prise renforcée y donne aussi droit, mais la wallbox reste plus confortable au quotidien).",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir à domicile",
        paragraphs: [
          "En maison individuelle, la puissance dépend de votre compteur : en monophasé, on installe une borne 7,4 kW ; en triphasé, on peut monter à 11 ou 22 kW.",
          "Pour un usage quotidien classique, 7,4 kW suffit largement à recharger une batterie pendant la nuit. Un installateur IRVE certifié valide la puissance selon votre abonnement électrique et votre véhicule.",
        ],
        list: [
          "7,4 kW (monophasé) : recharge complète en une nuit, idéal pour la plupart des foyers.",
          "11 kW (triphasé) : recharge accélérée, adapté aux gros rouleurs.",
          "22 kW (triphasé) : recharge la plus rapide à domicile, utile en cas de véhicule compatible et d'usage intensif.",
        ],
      },
      {
        h2: "Prix et aides pour une borne de recharge maison",
        paragraphs: [
          "Comptez entre 990 € et 1 990 € pour une borne de recharge installée à la maison, selon la puissance et la distance entre le tableau électrique et l'emplacement de la borne. Ce prix inclut le matériel, le câblage, la protection dédiée et la mise en service.",
          "En maison individuelle, vous bénéficiez de la TVA réduite à 5,5 % sur la pose (logement de plus de 2 ans). L'installation doit être réalisée par un électricien certifié IRVE, condition obligatoire pour toute borne de plus de 3,7 kW et pour les aides.",
        ],
      },
    ],
    faq: [
      { q: "Combien coûte une borne de recharge à la maison ?", a: "Entre 990 € et 1 990 € posée pour une borne de 7,4 à 11 kW, avant TVA réduite à 5,5 %. Le prix dépend de la puissance et de la distance au tableau électrique. Comparez 3 devis gratuits." },
      { q: "Peut-on installer soi-même une borne de recharge chez soi ?", a: "Non pour une wallbox de plus de 3,7 kW : la loi impose un installateur certifié IRVE. C'est aussi la condition pour bénéficier des aides et de l'assurance." },
      { q: "Faut-il changer son compteur pour une borne à domicile ?", a: "Pas forcément. Un installateur IRVE vérifie la puissance disponible ; une borne pilotable ajuste sa charge pour éviter de dépasser votre abonnement, souvent sans surcoût d'abonnement." },
    ],
    related: ["prix-borne-de-recharge", "choisir-puissance-borne", "aides-borne-de-recharge"],
  },
  {
    slug: "borne-de-recharge-entreprise",
    metaTitle: "Borne de recharge entreprise : parking, flotte et aides 2026 | Choisis Ta borne",
    metaDescription:
      "Installer des bornes de recharge en entreprise : parking salariés, flotte de véhicules, gestion de charge, aides ADVENIR entreprise. Guide + devis gratuits d'installateurs IRVE certifiés.",
    h1: "Borne de recharge en entreprise : équiper son parking et sa flotte",
    updated: "2026-07-12",
    lede: "Installer des bornes de recharge en entreprise valorise votre parking, fidélise vos salariés et électrifie votre flotte. Voici les solutions, la gestion de charge, les obligations (loi LOM) et les aides pour les professionnels.",
    sections: [
      {
        h2: "Pourquoi installer des bornes de recharge en entreprise",
        paragraphs: [
          "Équiper le parking d'une entreprise en bornes de recharge répond à une demande croissante des salariés en véhicule électrique, tout en soignant l'image RSE de la société. C'est aussi indispensable pour électrifier une flotte de véhicules professionnels.",
          "La loi d'orientation des mobilités (LOM) impose d'ailleurs un pré-équipement, voire l'installation de bornes, dans les parkings des bâtiments tertiaires selon leur taille.",
        ],
      },
      {
        h2: "Gestion de charge et bornes intelligentes",
        paragraphs: [
          "En entreprise, plusieurs bornes fonctionnent souvent en simultané : la gestion de charge dynamique répartit la puissance disponible entre les véhicules pour éviter de dépasser l'abonnement électrique du site.",
          "Les bornes communicantes (protocole OCPP) permettent aussi le suivi de consommation, la facturation par utilisateur et le contrôle d'accès par badge RFID — utile pour refacturer la recharge aux salariés ou aux visiteurs.",
        ],
      },
      {
        h2: "Prix et aides pour les bornes de recharge professionnelles",
        paragraphs: [
          "Le prix dépend du nombre de bornes, de la puissance et des travaux de raccordement (parfois une extension de puissance auprès d'Enedis). Un installateur IRVE certifié établit un devis sur mesure après étude du site.",
          "Les entreprises et copropriétés peuvent mobiliser le programme ADVENIR, qui subventionne une partie de l'installation de bornes sur parking professionnel ou partagé. Nos partenaires vous accompagnent dans le montage du dossier.",
        ],
      },
    ],
    faq: [
      { q: "Combien coûte l'installation de bornes de recharge en entreprise ?", a: "Le prix est sur mesure : il dépend du nombre de bornes, de la puissance et du raccordement. Nos installateurs IRVE certifiés réalisent une étude et un devis gratuit adaptés à votre parking." },
      { q: "Quelles aides pour une borne de recharge en entreprise ?", a: "Le programme ADVENIR subventionne l'installation de bornes sur parkings professionnels et partagés. Le montant dépend du type d'installation et du nombre de points de charge." },
      { q: "Mon entreprise est-elle obligée d'installer des bornes ?", a: "La loi LOM impose un pré-équipement ou l'installation de bornes dans les parkings de certains bâtiments tertiaires, selon leur nombre de places. Un professionnel IRVE vérifie vos obligations." },
    ],
    related: ["aides-borne-de-recharge", "choisir-puissance-borne"],
  },
  {
    slug: "prise-renforcee-ou-wallbox",
    metaTitle: "Prise renforcée ou wallbox : que choisir pour recharger ? | Choisis Ta borne",
    metaDescription:
      "Prise renforcée (Green'Up) ou wallbox : comparatif puissance, sécurité, prix et temps de recharge pour votre voiture électrique. Le guide pour bien choisir + 3 devis gratuits IRVE.",
    h1: "Prise renforcée ou wallbox : le comparatif pour bien choisir",
    updated: "2026-07-12",
    lede: "Faut-il une simple prise renforcée ou une vraie borne de recharge (wallbox) pour sa voiture électrique ? On compare puissance, temps de recharge, sécurité, prix et aides pour vous aider à décider.",
    sections: [
      {
        h2: "La prise renforcée : simple mais limitée",
        paragraphs: [
          "Une prise renforcée (type Green'Up) est une prise domestique améliorée, sécurisée pour la recharge, qui délivre environ 3,2 kW — soit un peu plus qu'une prise classique (2,3 kW), mais bien moins qu'une borne.",
          "Elle coûte moins cher à installer, mais recharge lentement : compter une nuit entière, voire davantage, pour un véhicule à grosse batterie. Elle convient surtout aux petits rouleurs et aux hybrides rechargeables.",
        ],
      },
      {
        h2: "La wallbox : la vraie borne de recharge",
        paragraphs: [
          "La wallbox est une borne de recharge murale dédiée, de 7,4 kW (monophasé) à 22 kW (triphasé). Elle recharge 2 à 7 fois plus vite qu'une prise renforcée et offre des fonctions avancées : pilotage, programmation en heures creuses, mesure de consommation.",
          "Sur le plan de la sécurité, la wallbox dispose de protections intégrées (différentiel, détection de défaut) et d'une ligne dédiée, ce qui la rend nettement plus sûre pour une recharge quotidienne.",
        ],
      },
      {
        h2: "Prise renforcée ou wallbox : le verdict",
        paragraphs: [
          "Pour un usage occasionnel et un petit budget, la prise renforcée dépanne. Mais pour recharger sereinement une voiture électrique au quotidien, la wallbox est le choix recommandé : plus rapide, plus sûre, et éligible aux aides comme la prise renforcée.",
          "Dans les deux cas, l'installation par un électricien IRVE certifié est vivement conseillée (et obligatoire pour une wallbox de plus de 3,7 kW).",
        ],
      },
    ],
    faq: [
      { q: "Quelle différence entre prise renforcée et wallbox ?", a: "La prise renforcée délivre ~3,2 kW (recharge lente) ; la wallbox va de 7,4 à 22 kW (recharge rapide) avec des fonctions de pilotage et une sécurité renforcée." },
      { q: "La prise renforcée donne-t-elle droit aux aides ?", a: "Oui, la TVA réduite à 5,5 % s'applique aussi à l'installation d'une prise renforcée par un professionnel, comme pour une wallbox." },
      { q: "Combien de temps pour recharger avec une prise renforcée ?", a: "Comptez environ 15 à 25 km d'autonomie récupérés par heure, soit souvent une nuit complète pour une recharge importante — contre 2 à 3 fois plus rapide en wallbox 7,4 kW." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "temps-de-recharge-voiture-electrique",
    metaTitle: "Temps de recharge d'une voiture électrique : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Combien de temps pour recharger une voiture électrique ? Temps de recharge selon la puissance (3,7 / 7,4 / 11 / 22 kW), la batterie et la borne. Calcul simple + 3 devis gratuits d'installateurs IRVE.",
    h1: "Temps de recharge d'une voiture électrique : combien de temps faut-il ?",
    updated: "2026-07-12",
    lede: "Le temps de recharge d'une voiture électrique dépend de trois facteurs : la puissance de la borne, la capacité de la batterie et la puissance que le véhicule accepte. Voici comment l'estimer simplement.",
    sections: [
      {
        h2: "Comment calculer son temps de recharge",
        paragraphs: [
          "Le calcul de base est simple : temps de recharge (en heures) = capacité de la batterie (en kWh) ÷ puissance de charge (en kW). Par exemple, une batterie de 50 kWh sur une borne de 7,4 kW se recharge en environ 7 heures.",
          "En pratique, il faut ajouter une petite marge (pertes de charge) et tenir compte de la puissance maximale que votre voiture accepte : certains véhicules ne dépassent pas 7,4 ou 11 kW en courant alternatif, même sur une borne 22 kW.",
        ],
      },
      {
        h2: "Temps de recharge selon la puissance de la borne",
        paragraphs: [
          "Plus la borne est puissante, plus la recharge est rapide — à condition que le véhicule suive. Voici des ordres de grandeur pour une batterie moyenne (autour de 50 à 60 kWh) :",
        ],
        list: [
          "Prise renforcée (3,2 kW) : environ 15 à 20 heures pour une recharge complète.",
          "Wallbox 7,4 kW (monophasé) : environ 7 à 8 heures — idéal pour recharger la nuit.",
          "Wallbox 11 kW (triphasé) : environ 5 heures.",
          "Wallbox 22 kW (triphasé) : environ 2 h 30 à 3 heures, si le véhicule l'accepte.",
        ],
      },
      {
        h2: "Recharge à domicile : la nuit, la solution idéale",
        paragraphs: [
          "À domicile, la vitesse de recharge importe moins qu'on ne le croit : brancher chaque soir sur une wallbox 7,4 kW suffit à retrouver une batterie pleine chaque matin, en profitant des heures creuses pour réduire la facture.",
          "Un installateur IRVE certifié dimensionne la borne selon votre véhicule et votre usage pour un temps de recharge optimal, sans surdimensionner inutilement.",
        ],
      },
    ],
    faq: [
      { q: "Combien de temps pour recharger une voiture électrique à la maison ?", a: "Sur une wallbox 7,4 kW, comptez environ 7 à 8 heures pour une batterie de 50 kWh, soit une nuit. En 11 kW, environ 5 heures." },
      { q: "Une borne 22 kW recharge-t-elle toujours plus vite ?", a: "Seulement si votre voiture accepte 22 kW en courant alternatif. Beaucoup de modèles plafonnent à 7,4 ou 11 kW : au-delà, la borne n'accélère pas la recharge." },
      { q: "Vaut-il mieux recharger en heures creuses ?", a: "Oui : une borne pilotable programme la recharge en heures creuses pour réduire nettement le coût, sans intervention de votre part." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison"],
  },
  {
    slug: "borne-de-recharge-tesla",
    metaTitle: "Borne de recharge Tesla (Model 3, Model Y) : installation 2026 | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Tesla Model 3 ou Model Y à domicile ? Wall Connector ou wallbox universelle, puissance, prix, installation IRVE. Guide + 3 devis gratuits d'installateurs certifiés.",
    h1: "Borne de recharge pour Tesla : quelle solution à domicile ?",
    updated: "2026-07-12",
    lede: "Vous roulez en Tesla Model 3, Model Y ou autre et souhaitez recharger à domicile ? On compare le Tesla Wall Connector et les wallbox universelles, la puissance adaptée et l'installation par un électricien IRVE certifié.",
    sections: [
      {
        h2: "Wall Connector Tesla ou wallbox universelle ?",
        paragraphs: [
          "Le Tesla Wall Connector est la borne de recharge de la marque : elle recharge jusqu'à 11 kW (triphasé) et se pilote depuis l'application Tesla. Elle fonctionne aussi avec d'autres véhicules équipés d'une prise Type 2.",
          "Une wallbox universelle (Wallbox Pulsar, Hager Witty, etc.) recharge tout aussi bien une Tesla, avec un connecteur Type 2 standard. Le choix dépend de votre préférence pour l'écosystème Tesla ou pour une borne multimarque.",
        ],
      },
      {
        h2: "Quelle puissance pour recharger une Tesla",
        paragraphs: [
          "Les Tesla acceptent jusqu'à 11 kW en courant alternatif (triphasé) à domicile. Sur un compteur monophasé, une borne 7,4 kW recharge parfaitement une Model 3 ou Model Y en une nuit.",
          "Inutile de viser 22 kW en courant alternatif : les Tesla plafonnent à 11 kW en AC. Pour aller plus vite, ce sont les Superchargeurs (courant continu) sur autoroute qui prennent le relais.",
        ],
      },
      {
        h2: "Installation et prix d'une borne pour Tesla",
        paragraphs: [
          "Comme toute borne de plus de 3,7 kW, l'installation doit être faite par un électricien certifié IRVE. Comptez de 990 € à 1 990 € posée selon la puissance et la distance au tableau, avant TVA réduite à 5,5 %.",
          "Nos installateurs IRVE certifiés posent aussi bien un Wall Connector Tesla qu'une wallbox universelle, et vous transmettent 3 devis gratuits sous 24h pour comparer.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne de recharge pour une Tesla Model 3 ou Model Y ?", a: "Le Tesla Wall Connector ou une wallbox universelle Type 2 conviennent. En monophasé, une borne 7,4 kW recharge votre Tesla en une nuit ; en triphasé, jusqu'à 11 kW." },
      { q: "Peut-on recharger une Tesla sur une borne d'une autre marque ?", a: "Oui. Les Tesla utilisent le connecteur Type 2 standard en Europe : elles se rechargent sur n'importe quelle wallbox universelle." },
      { q: "Faut-il une borne 22 kW pour une Tesla ?", a: "Non : les Tesla acceptent au maximum 11 kW en courant alternatif à domicile. Une borne 22 kW ne rechargera pas plus vite en AC." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "installer-borne-de-recharge",
    metaTitle: "Installer une borne de recharge : étapes, IRVE et démarches 2026 | Choisis Ta borne",
    metaDescription:
      "Comment installer une borne de recharge pour voiture électrique ? Étapes, obligation d'un installateur IRVE certifié, délais, démarches en maison et copropriété. Guide + 3 devis gratuits.",
    h1: "Installer une borne de recharge : comment ça se passe, étape par étape",
    updated: "2026-07-12",
    lede: "De la demande de devis à la mise en service, installer une borne de recharge suit un parcours simple lorsqu'on passe par un installateur IRVE certifié. Voici les étapes, les délais et les démarches selon votre logement.",
    sections: [
      {
        h2: "Les étapes de l'installation d'une borne de recharge",
        paragraphs: [
          "L'installation d'une borne de recharge se déroule en quelques étapes claires, encadrées par un professionnel certifié IRVE :",
        ],
        list: [
          "1. Demande de devis et étude : puissance, emplacement, distance au tableau électrique.",
          "2. Validation du devis et planification de l'intervention.",
          "3. Pose de la borne, tirage du câble et raccordement au tableau avec protection dédiée.",
          "4. Mise en service, tests et remise de l'attestation de conformité.",
        ],
      },
      {
        h2: "Pourquoi un installateur IRVE certifié est obligatoire",
        paragraphs: [
          "En France, l'installation d'une borne de recharge de plus de 3,7 kW doit être réalisée par un électricien qualifié IRVE (Infrastructure de Recharge pour Véhicule Électrique). C'est une obligation légale, mais aussi la condition pour bénéficier des aides (TVA 5,5 %, ADVENIR) et pour garantir la sécurité de l'installation.",
          "La pose respecte la norme NF C 15-100, avec une ligne dédiée et des protections adaptées. L'installateur remet une attestation de conformité en fin de chantier.",
        ],
      },
      {
        h2: "Installer une borne en maison ou en copropriété",
        paragraphs: [
          "En maison individuelle, l'installation est simple et rapide : souvent une demi-journée pour raccorder une wallbox au tableau électrique.",
          "En copropriété, le droit à la prise vous permet de faire installer une borne sur votre place de parking, même sans l'accord préalable de tous les copropriétaires. Votre installateur monte le dossier technique pour l'assemblée générale et coordonne avec le syndic.",
        ],
      },
    ],
    faq: [
      { q: "Qui peut installer une borne de recharge ?", a: "Un électricien certifié IRVE. C'est obligatoire pour toute borne de plus de 3,7 kW et pour bénéficier des aides et de l'assurance." },
      { q: "Combien de temps prend l'installation d'une borne ?", a: "En maison, souvent une demi-journée. Le délai global, du devis à la pose, est généralement de 1 à 2 semaines ; un peu plus en copropriété à cause des démarches en assemblée générale." },
      { q: "Quelles démarches pour installer une borne en copropriété ?", a: "Vous activez le droit à la prise : notification au syndic, présentation en assemblée générale, puis installation à vos frais par un professionnel IRVE. Nos partenaires gèrent le dossier technique." },
    ],
    related: ["borne-recharge-copropriete", "borne-de-recharge-maison", "aides-borne-de-recharge"],
  },
  {
    slug: "cout-recharge-voiture-electrique",
    metaTitle: "Coût de recharge d'une voiture électrique : prix et économies 2026 | Choisis Ta borne",
    metaDescription:
      "Combien coûte la recharge d'une voiture électrique à domicile ? Prix au kWh, coût d'un plein, économies face à l'essence, heures creuses. Guide + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Coût de recharge d'une voiture électrique : combien ça coûte vraiment ?",
    updated: "2026-07-12",
    lede: "Recharger sa voiture électrique à domicile coûte bien moins cher qu'un plein d'essence. Voici le prix réel au kWh, le coût d'un « plein » électrique et les économies réalisées chaque année.",
    sections: [
      {
        h2: "Le prix de la recharge à domicile",
        paragraphs: [
          "À domicile, vous payez l'électricité au tarif de votre contrat, autour de 0,20 à 0,25 € le kWh (moins en heures creuses). Pour une batterie de 50 kWh, un « plein » revient donc à environ 10 à 12 €, soit près de 300 km d'autonomie.",
          "Ramené au kilomètre, cela représente souvent 2 à 4 € les 100 km — contre 8 à 12 € pour une voiture essence équivalente. La borne de recharge à domicile est de loin la solution la plus économique.",
        ],
      },
      {
        h2: "Recharge à domicile, bornes publiques et essence : le comparatif",
        paragraphs: [
          "La recharge à domicile reste la moins chère. Les bornes publiques rapides (courant continu) sont pratiques en voyage mais coûtent plus cher au kWh. Comparé à l'essence, l'écart reste très favorable à l'électrique pour un usage quotidien.",
        ],
        list: [
          "Recharge à domicile (heures creuses) : ~2 à 3 € les 100 km.",
          "Recharge à domicile (tarif de base) : ~3 à 4 € les 100 km.",
          "Borne publique rapide : plus variable, souvent 6 à 10 € les 100 km.",
          "Voiture essence équivalente : environ 8 à 12 € les 100 km.",
        ],
      },
      {
        h2: "Comment réduire encore le coût de recharge",
        paragraphs: [
          "Une borne pilotable programme la recharge en heures creuses, quand l'électricité est la moins chère, automatiquement. C'est le premier levier d'économie.",
          "Coupler la borne à des panneaux solaires permet de recharger avec sa propre production et de réduire la facture à presque zéro sur la part solaire. Un installateur IRVE certifié vous conseille la configuration la plus rentable.",
        ],
      },
    ],
    faq: [
      { q: "Combien coûte un plein d'une voiture électrique à la maison ?", a: "Environ 10 à 12 € pour une batterie de 50 kWh au tarif domestique, soit près de 300 km. En heures creuses, c'est encore moins." },
      { q: "La recharge électrique est-elle moins chère que l'essence ?", a: "Oui, nettement : environ 2 à 4 € les 100 km à domicile contre 8 à 12 € pour une essence équivalente." },
      { q: "Faut-il un contrat heures creuses pour recharger ?", a: "Ce n'est pas obligatoire, mais un contrat heures creuses couplé à une borne pilotable réduit sensiblement le coût de la recharge." },
    ],
    related: ["prix-borne-de-recharge", "borne-recharge-panneaux-solaires", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "prime-advenir",
    metaTitle: "Prime ADVENIR 2026 : montant, conditions et démarches | Choisis Ta borne",
    metaDescription:
      "La prime ADVENIR finance l'installation d'une borne de recharge en copropriété et en entreprise (jusqu'à 960 € et plus). Montants, conditions et démarches 2026 + 3 devis gratuits d'installateurs IRVE.",
    h1: "Prime ADVENIR 2026 : de quoi s'agit-il et combien pouvez-vous toucher ?",
    updated: "2026-07-12",
    lede: "La prime ADVENIR est l'aide de référence pour financer une borne de recharge en copropriété ou en entreprise. Voici les montants, les conditions et comment en bénéficier.",
    sections: [
      {
        h2: "Qu'est-ce que la prime ADVENIR ?",
        paragraphs: [
          "Le programme ADVENIR subventionne l'installation d'infrastructures de recharge pour véhicules électriques. Il cible principalement les copropriétés (parties communes et places individuelles) et les entreprises, avec un budget renouvelé chaque année.",
          "La prime prend en charge un pourcentage du coût d'installation (matériel et pose), dans la limite d'un plafond qui dépend du type de projet.",
        ],
      },
      {
        h2: "Les montants de la prime ADVENIR",
        paragraphs: [
          "Les montants varient selon le type d'installation. Pour une borne individuelle en copropriété, la prime peut atteindre plusieurs centaines d'euros ; pour l'infrastructure collective d'un immeuble, le soutien est plus élevé.",
        ],
        list: [
          "Borne individuelle en copropriété : jusqu'à 960 € selon le barème.",
          "Infrastructure collective d'immeuble : prise en charge d'une partie importante des travaux.",
          "Bornes en entreprise (parking privé ou ouvert) : soutien selon l'usage et le nombre de points de charge.",
        ],
      },
      {
        h2: "Conditions et démarches pour obtenir ADVENIR",
        paragraphs: [
          "Pour être éligible, l'installation doit être réalisée par un installateur labellisé et respecter les critères techniques du programme (borne pilotable, conformité). C'est l'installateur qui monte généralement le dossier de prime pour vous.",
          "Nos partenaires IRVE certifiés vérifient votre éligibilité, intègrent la prime au devis et gèrent les démarches administratives.",
        ],
      },
    ],
    faq: [
      { q: "Quel est le montant de la prime ADVENIR en 2026 ?", a: "Jusqu'à 960 € pour une borne individuelle en copropriété, et davantage pour une infrastructure collective ou un projet d'entreprise, selon le barème en vigueur." },
      { q: "Qui peut bénéficier de la prime ADVENIR ?", a: "Principalement les copropriétés et les entreprises. La maison individuelle n'est pas éligible à ADVENIR, mais bénéficie de la TVA réduite à 5,5 %." },
      { q: "Comment demander la prime ADVENIR ?", a: "L'installateur labellisé monte le dossier pour vous et déduit la prime du devis. Nos partenaires s'occupent des démarches." },
    ],
    related: ["aides-borne-de-recharge", "borne-recharge-copropriete", "borne-de-recharge-entreprise"],
  },
  {
    slug: "borne-recharge-locataire",
    metaTitle: "Borne de recharge locataire : le droit à la prise en 2026 | Choisis Ta borne",
    metaDescription:
      "Locataire en copropriété ou en maison : installez une borne de recharge grâce au droit à la prise. Démarches, information du propriétaire et du syndic, prix, aides. Guide + 3 devis gratuits IRVE.",
    h1: "Borne de recharge en tant que locataire : c'est possible grâce au droit à la prise",
    updated: "2026-07-12",
    lede: "Être locataire n'empêche pas d'installer une borne de recharge sur sa place de parking. Le « droit à la prise » vous le garantit. Voici comment procéder, étape par étape.",
    sections: [
      {
        h2: "Le droit à la prise s'applique aux locataires",
        paragraphs: [
          "Le droit à la prise permet à tout occupant — propriétaire comme locataire — de faire installer une borne de recharge sur sa place de stationnement, à ses frais, sans pouvoir se le voir refuser sans motif sérieux et légitime.",
          "Que vous soyez en copropriété ou dans un logement loué avec parking privatif, vous pouvez donc équiper votre place d'une borne de recharge.",
        ],
      },
      {
        h2: "Les démarches pour un locataire",
        paragraphs: [
          "La procédure est simple : vous informez votre propriétaire (bailleur) de votre projet par courrier recommandé. En copropriété, le syndic est également informé et le sujet peut être présenté en assemblée générale, sans que celle-ci puisse s'opposer sans motif légitime.",
          "L'installation est ensuite réalisée par un installateur IRVE certifié, avec un comptage individuel de la consommation pour que la recharge vous soit facturée à vous, et non à la copropriété.",
        ],
      },
      {
        h2: "Prix et aides pour un locataire",
        paragraphs: [
          "Le locataire finance sa borne, mais peut bénéficier des mêmes aides : TVA réduite à 5,5 % sur la pose, et prime ADVENIR en copropriété. Le coût reste identique à celui d'un propriétaire dans la même configuration.",
          "Nos installateurs IRVE certifiés vous accompagnent dans les démarches et le montage du dossier d'aides, avec 3 devis gratuits sous 24h.",
        ],
      },
    ],
    faq: [
      { q: "Un locataire peut-il installer une borne de recharge ?", a: "Oui. Le droit à la prise s'applique aux locataires : vous informez le propriétaire et, en copropriété, le syndic, puis faites poser la borne à vos frais." },
      { q: "Le propriétaire peut-il refuser une borne de recharge ?", a: "Il ne peut s'y opposer que pour un motif sérieux et légitime. Dans la grande majorité des cas, l'installation est de droit." },
      { q: "Quelles aides pour un locataire ?", a: "TVA réduite à 5,5 % sur la pose, et prime ADVENIR en copropriété — les mêmes aides que pour un propriétaire." },
    ],
    related: ["borne-recharge-copropriete", "aides-borne-de-recharge", "prime-advenir"],
  },
  {
    slug: "borne-recharge-hybride-rechargeable",
    metaTitle: "Borne de recharge pour hybride rechargeable (PHEV) : le guide | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une voiture hybride rechargeable (PHEV) ? Puissance adaptée, prise renforcée ou wallbox, prix, aides. Guide complet + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Borne de recharge pour hybride rechargeable : quelle solution choisir ?",
    updated: "2026-07-12",
    lede: "Une voiture hybride rechargeable (PHEV) a une batterie plus petite qu'une électrique, mais gagne beaucoup à être rechargée à domicile. Voici la solution de recharge la mieux adaptée.",
    sections: [
      {
        h2: "Recharger un hybride rechargeable au quotidien",
        paragraphs: [
          "Un hybride rechargeable dispose d'une batterie de 10 à 20 kWh environ, offrant quelques dizaines de kilomètres en tout électrique. Recharger chaque nuit permet de rouler en électrique au quotidien et de n'utiliser le moteur thermique qu'en appoint.",
          "Comme la batterie est petite, une puissance de charge modérée suffit : nul besoin d'une borne très puissante.",
        ],
      },
      {
        h2: "Prise renforcée ou wallbox pour un PHEV ?",
        paragraphs: [
          "Pour un hybride rechargeable, une prise renforcée (3,2 kW) ou une petite wallbox 7,4 kW recharge la batterie en quelques heures, largement le temps d'une nuit.",
          "La wallbox reste plus confortable et plus sûre pour un usage quotidien, et prépare le terrain si vous passez plus tard au 100 % électrique. Un installateur IRVE certifié vous conseille selon votre véhicule.",
        ],
      },
      {
        h2: "Prix et aides pour recharger un hybride",
        paragraphs: [
          "Le prix d'installation est identique à celui d'une borne classique : de 990 € à 1 990 € posée selon la configuration, avant TVA réduite à 5,5 %.",
          "Les hybrides rechargeables donnent droit aux mêmes aides que les véhicules électriques pour l'installation d'une borne à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une voiture hybride rechargeable ?", a: "Une prise renforcée (3,2 kW) ou une wallbox 7,4 kW suffit largement, la batterie d'un PHEV étant petite. La wallbox reste plus confortable et évolutive." },
      { q: "Combien de temps pour recharger un hybride rechargeable ?", a: "Selon la batterie (10 à 20 kWh), quelques heures sur une prise renforcée ou une wallbox 7,4 kW — le temps d'une nuit." },
      { q: "Un hybride rechargeable donne-t-il droit aux aides borne ?", a: "Oui, l'installation d'une borne pour un PHEV bénéficie des mêmes aides (TVA 5,5 %, ADVENIR en copropriété)." },
    ],
    related: ["prise-renforcee-ou-wallbox", "borne-de-recharge-maison", "choisir-puissance-borne"],
  },
  {
    slug: "quelle-borne-de-recharge-choisir",
    metaTitle: "Quelle borne de recharge choisir en 2026 ? Comparatif et conseils | Choisis Ta borne",
    metaDescription:
      "Comment choisir sa borne de recharge : puissance, marques (Wallbox, Hager, Schneider), pilotage, câble, budget. Le guide d'achat complet + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Quelle borne de recharge choisir ? Le guide d'achat 2026",
    updated: "2026-07-12",
    lede: "Face à la multitude de wallbox disponibles, comment choisir la bonne borne de recharge ? Voici les vrais critères — puissance, pilotage, marque, budget — pour décider sereinement.",
    sections: [
      {
        h2: "Les critères pour bien choisir sa borne",
        paragraphs: [
          "Le premier critère est la puissance, à accorder avec votre compteur (7,4 kW en monophasé, 11 ou 22 kW en triphasé) et votre véhicule. Viennent ensuite le pilotage (programmation heures creuses, gestion de charge), le type de câble (attaché ou prise Type 2), et la connectivité (Wi-Fi, application).",
          "Le budget entre aussi en jeu : une borne pilotable et connectée coûte un peu plus, mais rentabilise vite par les économies d'heures creuses.",
        ],
        list: [
          "Puissance : 7,4 kW (monophasé) ou 11/22 kW (triphasé).",
          "Pilotage : programmation heures creuses, gestion dynamique.",
          "Câble : attaché (pratique) ou prise Type 2 (polyvalent).",
          "Connectivité : suivi de consommation via application.",
        ],
      },
      {
        h2: "Les principales marques de wallbox",
        paragraphs: [
          "Plusieurs marques font référence sur le marché français : Wallbox (Pulsar), Hager (Witty), Schneider, ou encore des modèles IRV'OHM. Toutes proposent des bornes fiables ; le choix se fait sur les fonctions, le design et le budget.",
          "Un installateur IRVE certifié saura vous orienter vers le modèle adapté à votre logement et à votre véhicule, sans surpayer des options inutiles.",
        ],
      },
      {
        h2: "Borne pilotable et connectée : utile ou pas ?",
        paragraphs: [
          "Une borne pilotable ajuste sa puissance pour ne pas dépasser votre abonnement et programme la recharge en heures creuses : c'est le meilleur moyen de réduire la facture. La connectivité permet en plus de suivre sa consommation.",
          "Pour la plupart des foyers, une wallbox pilotable est le bon compromis entre prix et confort.",
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure borne de recharge ?", a: "Il n'y a pas de « meilleure » borne universelle : le bon choix dépend de votre compteur, de votre véhicule et de votre usage. Une wallbox 7,4 kW pilotable convient à la majorité des foyers." },
      { q: "Faut-il une borne connectée ?", a: "Ce n'est pas indispensable, mais une borne pilotable (heures creuses, gestion de charge) réduit la facture et se rentabilise vite." },
      { q: "Quelle marque de borne choisir ?", a: "Wallbox, Hager, Schneider figurent parmi les valeurs sûres. Un installateur IRVE vous oriente selon vos besoins réels." },
    ],
    related: ["choisir-puissance-borne", "prix-borne-de-recharge", "borne-de-recharge-maison"],
  },
  {
    slug: "borne-recharge-panneaux-solaires",
    metaTitle: "Borne de recharge et panneaux solaires : recharge solaire 2026 | Choisis Ta borne",
    metaDescription:
      "Coupler une borne de recharge à des panneaux solaires pour recharger sa voiture avec l'énergie du soleil. Autoconsommation, borne solaire intelligente, économies. Guide + 3 devis gratuits IRVE.",
    h1: "Borne de recharge et panneaux solaires : recharger sa voiture grâce au soleil",
    updated: "2026-07-12",
    lede: "Associer une borne de recharge à des panneaux solaires permet de recharger sa voiture électrique avec sa propre énergie, quasi gratuitement. Voici comment fonctionne la recharge solaire.",
    sections: [
      {
        h2: "Recharger sa voiture en autoconsommation solaire",
        paragraphs: [
          "Avec des panneaux solaires, l'électricité produite dans la journée peut alimenter directement votre borne de recharge : c'est l'autoconsommation. Vous rechargez alors votre voiture avec une énergie gratuite et renouvelable.",
          "L'idéal est de recharger en journée, quand la production solaire est au maximum — parfait pour les véhicules stationnés à domicile la journée.",
        ],
      },
      {
        h2: "La borne solaire intelligente",
        paragraphs: [
          "Une borne pilotable dite « solaire » détecte le surplus de production photovoltaïque et l'utilise en priorité pour recharger la voiture, plutôt que de le réinjecter au réseau à faible valeur.",
          "Elle module automatiquement la puissance de charge selon l'ensoleillement, maximisant la part d'énergie solaire dans votre recharge.",
        ],
      },
      {
        h2: "Rentabilité de la recharge solaire",
        paragraphs: [
          "Recharger sa voiture au solaire réduit fortement le coût au kilomètre : l'énergie autoconsommée est quasi gratuite une fois l'installation amortie. C'est particulièrement rentable pour les gros rouleurs.",
          "Un installateur IRVE certifié dimensionne l'ensemble (borne + pilotage solaire) selon votre installation photovoltaïque et vos habitudes.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on recharger sa voiture électrique avec des panneaux solaires ?", a: "Oui. Une borne pilotable utilise le surplus de production solaire pour recharger la voiture en priorité, en autoconsommation." },
      { q: "Qu'est-ce qu'une borne de recharge solaire ?", a: "Une borne intelligente qui détecte le surplus photovoltaïque et module sa puissance pour recharger la voiture avec l'énergie solaire plutôt que de l'injecter au réseau." },
      { q: "La recharge solaire est-elle rentable ?", a: "Oui, surtout pour les gros rouleurs : l'énergie autoconsommée est quasi gratuite, ce qui réduit fortement le coût au kilomètre." },
    ],
    related: ["cout-recharge-voiture-electrique", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "credit-impot-borne-recharge",
    metaTitle: "Crédit d'impôt borne de recharge : ce qui a changé en 2026 | Choisis Ta borne",
    metaDescription:
      "Le crédit d'impôt pour l'installation d'une borne de recharge a évolué. Ce à quoi vous avez droit en 2026 : TVA réduite 5,5 %, prime ADVENIR, aides restantes. Guide + 3 devis gratuits d'installateurs IRVE.",
    h1: "Crédit d'impôt borne de recharge : où en est-on en 2026 ?",
    updated: "2026-07-12",
    lede: "Le crédit d'impôt pour l'installation d'une borne de recharge a longtemps aidé les particuliers. Voici ce qu'il en reste en 2026 et les aides qui prennent le relais.",
    sections: [
      {
        h2: "Le crédit d'impôt borne de recharge : historique",
        paragraphs: [
          "Le crédit d'impôt pour la transition énergétique couvrait une partie du coût d'installation d'une borne de recharge à domicile. Ce dispositif spécifique a évolué et a été remplacé ou clôturé selon les années.",
          "Il est donc essentiel de se référer aux aides réellement en vigueur en 2026 plutôt qu'aux anciennes informations qui circulent encore.",
        ],
      },
      {
        h2: "Les aides réellement disponibles en 2026",
        paragraphs: [
          "En 2026, l'installation d'une borne de recharge à domicile bénéficie surtout de la TVA réduite à 5,5 % sur la pose (logement de plus de 2 ans), à condition de passer par un installateur certifié IRVE.",
          "En copropriété et en entreprise, la prime ADVENIR (jusqu'à 960 € et plus) prend le relais pour financer une partie de l'installation.",
        ],
        list: [
          "TVA réduite à 5,5 % sur la pose, via un installateur IRVE.",
          "Prime ADVENIR en copropriété et en entreprise.",
          "Aides locales ponctuelles selon les collectivités.",
        ],
      },
      {
        h2: "Comment financer sa borne de recharge",
        paragraphs: [
          "Le meilleur moyen de réduire le coût est de comparer plusieurs devis et de mobiliser les aides applicables à votre situation. Nos installateurs IRVE certifiés intègrent directement la TVA réduite et, le cas échéant, la prime ADVENIR au devis.",
          "Recevez 3 devis gratuits sous 24h pour comparer prix et aides sans vous engager.",
        ],
      },
    ],
    faq: [
      { q: "Le crédit d'impôt pour une borne de recharge existe-t-il encore ?", a: "Le crédit d'impôt spécifique a évolué et n'est plus la principale aide. En 2026, on mobilise surtout la TVA réduite à 5,5 % et la prime ADVENIR en copropriété." },
      { q: "Quelles aides pour une borne à domicile en 2026 ?", a: "La TVA réduite à 5,5 % sur la pose (via un installateur IRVE), et la prime ADVENIR en copropriété ou en entreprise." },
      { q: "Comment payer moins cher sa borne ?", a: "Comparez plusieurs devis et cumulez les aides applicables. Nos partenaires les intègrent directement au devis." },
    ],
    related: ["aides-borne-de-recharge", "prime-advenir", "prix-borne-de-recharge"],
  },
  {
    slug: "wallbox-connectee",
    metaTitle: "Wallbox connectée : borne de recharge pilotable et intelligente | Choisis Ta borne",
    metaDescription:
      "Une wallbox connectée pilote la recharge en heures creuses, suit la consommation et gère la charge dynamique. Avantages, marques, prix. Guide + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Wallbox connectée : faut-il une borne de recharge pilotable ?",
    updated: "2026-07-12",
    lede: "Une wallbox connectée fait bien plus que recharger : elle optimise la facture, suit la consommation et sécurise l'installation. Voici pourquoi la borne pilotable séduit de plus en plus.",
    sections: [
      {
        h2: "Qu'est-ce qu'une wallbox connectée ?",
        paragraphs: [
          "Une wallbox connectée est une borne de recharge reliée au Wi-Fi ou au réseau mobile, pilotable depuis une application. Elle communique avec votre installation électrique pour adapter la charge en temps réel.",
          "Contrairement à une borne simple, elle offre la programmation, la mesure de consommation et souvent le contrôle d'accès.",
        ],
      },
      {
        h2: "Les avantages d'une borne pilotable",
        paragraphs: [
          "Le principal atout est l'économie : la borne programme la recharge en heures creuses, quand l'électricité est la moins chère. La gestion de charge dynamique évite aussi de dépasser votre abonnement en modulant la puissance.",
        ],
        list: [
          "Programmation automatique en heures creuses.",
          "Gestion de charge dynamique (ne dépasse pas l'abonnement).",
          "Suivi de la consommation via application.",
          "Compatibilité avec la recharge solaire (surplus photovoltaïque).",
        ],
      },
      {
        h2: "Prix et marques de wallbox connectées",
        paragraphs: [
          "Une wallbox connectée coûte un peu plus qu'une borne basique, mais se rentabilise rapidement par les économies d'heures creuses. Les marques Wallbox (Pulsar), Hager (Witty) ou Schneider proposent des modèles pilotables reconnus.",
          "Un installateur IRVE certifié vous oriente vers le modèle adapté à votre logement et à votre budget.",
        ],
      },
    ],
    faq: [
      { q: "Une wallbox connectée en vaut-elle la peine ?", a: "Oui pour la plupart des foyers : la programmation en heures creuses et la gestion de charge réduisent la facture et se rentabilisent vite." },
      { q: "Comment fonctionne la gestion de charge dynamique ?", a: "La borne mesure la consommation du logement et module sa puissance pour ne jamais dépasser votre abonnement électrique, évitant les coupures." },
      { q: "Une borne connectée fonctionne-t-elle avec des panneaux solaires ?", a: "Oui, une wallbox pilotable peut recharger en priorité avec le surplus solaire, en autoconsommation." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "cout-recharge-voiture-electrique", "borne-recharge-panneaux-solaires"],
  },
  {
    slug: "entretien-borne-recharge",
    metaTitle: "Entretien et dépannage d'une borne de recharge : le guide | Choisis Ta borne",
    metaDescription:
      "Comment entretenir sa borne de recharge et que faire en cas de panne ? Durée de vie, maintenance, garantie, dépannage par un électricien IRVE. Guide + 3 devis gratuits d'installateurs certifiés.",
    h1: "Entretien et dépannage d'une borne de recharge : ce qu'il faut savoir",
    updated: "2026-07-12",
    lede: "Une borne de recharge est un équipement robuste qui demande peu d'entretien. Voici comment la maintenir en bon état et réagir en cas de panne.",
    sections: [
      {
        h2: "Une borne de recharge demande peu d'entretien",
        paragraphs: [
          "Une wallbox correctement installée par un professionnel IRVE ne nécessite quasiment aucun entretien courant. Un simple contrôle visuel du câble et du connecteur suffit, ainsi qu'un nettoyage occasionnel.",
          "Pour les bornes en usage intensif ou en entreprise, une vérification périodique par un électricien certifié est recommandée.",
        ],
      },
      {
        h2: "Que faire en cas de panne de borne ?",
        paragraphs: [
          "En cas de dysfonctionnement (borne qui ne charge plus, voyant d'erreur), commencez par vérifier le disjoncteur dédié et le câble. Si le problème persiste, un électricien IRVE diagnostique et répare l'installation.",
          "Les bornes connectées facilitent le diagnostic à distance grâce à leur application.",
        ],
      },
      {
        h2: "Durée de vie et garantie",
        paragraphs: [
          "Une borne de recharge de qualité a une durée de vie de 10 ans ou plus. Le matériel est généralement garanti 2 à 5 ans selon la marque, et l'installation bénéficie de la garantie de l'installateur.",
          "Nos partenaires IRVE certifiés assurent la pose et peuvent intervenir pour la maintenance et le dépannage.",
        ],
      },
    ],
    faq: [
      { q: "Une borne de recharge nécessite-t-elle un entretien ?", a: "Très peu : un contrôle visuel du câble et du connecteur, et un nettoyage occasionnel. Une vérification périodique est conseillée en usage intensif." },
      { q: "Que faire si ma borne ne charge plus ?", a: "Vérifiez le disjoncteur dédié et le câble. Si le souci persiste, un électricien certifié IRVE diagnostique et répare l'installation." },
      { q: "Quelle est la durée de vie d'une borne de recharge ?", a: "10 ans ou plus pour une borne de qualité, avec une garantie matériel de 2 à 5 ans selon la marque." },
    ],
    related: ["installer-borne-de-recharge", "quelle-borne-de-recharge-choisir"],
  },
  {
    slug: "borne-recharge-immeuble-neuf",
    metaTitle: "Borne de recharge en immeuble neuf : pré-équipement et loi 2026 | Choisis Ta borne",
    metaDescription:
      "Immeuble neuf ou récent : pré-équipement obligatoire des parkings, installation d'une borne de recharge sur place pré-câblée, démarches. Ce que dit la loi + 3 devis gratuits d'installateurs IRVE.",
    h1: "Borne de recharge en immeuble neuf : pré-équipement et installation",
    updated: "2026-07-12",
    lede: "Les immeubles neufs et récents doivent pré-équiper leurs parkings pour la recharge électrique. Voici ce que cela implique et comment installer votre borne sur une place pré-câblée.",
    sections: [
      {
        h2: "Le pré-équipement obligatoire dans le neuf",
        paragraphs: [
          "La réglementation impose, pour les immeubles neufs dotés d'un parking, un pré-équipement d'une partie des places : fourreaux, chemins de câbles et dimensionnement électrique pour accueillir des bornes de recharge.",
          "Ce pré-équipement facilite et réduit fortement le coût d'installation ultérieure d'une borne sur votre place.",
        ],
      },
      {
        h2: "Installer sa borne sur une place pré-équipée",
        paragraphs: [
          "Sur une place déjà pré-câblée, l'installation d'une wallbox est simple et rapide : il suffit de tirer la ligne depuis l'attente prévue et de poser la borne avec son comptage individuel.",
          "Un installateur IRVE certifié réalise le raccordement et la mise en service dans le respect de la norme NF C 15-100.",
        ],
      },
      {
        h2: "Prix et aides en immeuble neuf",
        paragraphs: [
          "Grâce au pré-équipement, le coût d'installation est souvent inférieur à celui d'une copropriété ancienne. La prime ADVENIR et la TVA réduite peuvent s'appliquer selon la configuration.",
          "Recevez 3 devis gratuits d'installateurs IRVE certifiés sous 24h pour comparer.",
        ],
      },
    ],
    faq: [
      { q: "Un immeuble neuf est-il obligé d'être pré-équipé pour la recharge ?", a: "Oui, la réglementation impose un pré-équipement d'une partie des places de parking dans les immeubles neufs avec stationnement." },
      { q: "Est-ce moins cher d'installer une borne sur une place pré-équipée ?", a: "Oui : le pré-câblage réduit fortement les travaux, donc le coût d'installation de votre borne." },
      { q: "Faut-il l'accord de la copropriété en immeuble neuf ?", a: "Le droit à la prise s'applique ; sur une place pré-équipée, la démarche est simplifiée. Nos partenaires gèrent le dossier." },
    ],
    related: ["borne-recharge-copropriete", "borne-recharge-locataire", "aides-borne-de-recharge"],
  },
  {
    slug: "alternative-zeplug",
    metaTitle: "Alternative à Zeplug : comparez les installateurs de bornes IRVE | Choisis Ta borne",
    metaDescription:
      "Vous cherchez une alternative à Zeplug pour votre borne de recharge en copropriété ou en maison ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h. Sans engagement.",
    h1: "Alternative à Zeplug : comparez avant de choisir votre borne de recharge",
    updated: "2026-07-12",
    lede: "Zeplug est un acteur connu de la recharge, notamment en copropriété. Avant de vous engager avec un seul prestataire, comparer plusieurs offres d'installateurs IRVE certifiés peut vous faire économiser. Voici comment.",
    sections: [
      {
        h2: "Ce que propose Zeplug",
        paragraphs: [
          "Zeplug est surtout connu pour ses solutions de recharge en copropriété, avec la mise en place d'une infrastructure collective et un accompagnement des immeubles. C'est une offre intégrée, souvent packagée.",
          "Comme pour tout acteur unique, l'offre est standardisée : vous obtenez une proposition, mais sans point de comparaison direct avec d'autres installateurs.",
        ],
      },
      {
        h2: "Pourquoi comparer plusieurs devis plutôt qu'un seul prestataire",
        paragraphs: [
          "Le prix et les prestations d'installation d'une borne varient sensiblement d'un installateur à l'autre. Demander plusieurs devis met les professionnels en concurrence et vous aide à obtenir le meilleur rapport qualité-prix.",
          "C'est exactement le rôle d'un comparateur : vous présenter plusieurs offres d'installateurs certifiés IRVE, pour choisir en connaissance de cause.",
        ],
      },
      {
        h2: "Choisis Ta borne : le comparateur gratuit d'installateurs IRVE",
        paragraphs: [
          "Choisis Ta borne met en relation particuliers et copropriétés avec un réseau d'installateurs IRVE certifiés partout en France. Vous décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits sous 24h.",
          "Le service est 100 % gratuit et sans engagement : vous comparez, puis vous choisissez librement l'installateur qui vous convient, avec la TVA réduite à 5,5 % et la prime ADVENIR intégrées le cas échéant.",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à Zeplug ?", a: "Choisis Ta borne est un comparateur : au lieu d'une seule offre, vous recevez jusqu'à 3 devis d'installateurs IRVE certifiés pour comparer prix et prestations, gratuitement et sans engagement." },
      { q: "Le comparateur est-il vraiment gratuit ?", a: "Oui, la mise en relation et les devis sont 100 % gratuits et sans engagement." },
      { q: "Puis-je comparer des offres pour une borne en copropriété ?", a: "Oui. Nos installateurs partenaires maîtrisent le droit à la prise et l'installation en copropriété, et vous accompagnent sur la prime ADVENIR." },
    ],
    related: ["borne-recharge-copropriete", "prime-advenir", "prix-borne-de-recharge"],
  },
  {
    slug: "alternative-chargeguru",
    metaTitle: "Alternative à ChargeGuru : comparez plusieurs devis IRVE | Choisis Ta borne",
    metaDescription:
      "Cherchez-vous une alternative à ChargeGuru pour installer votre borne de recharge ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h. Particuliers et copropriétés, sans engagement.",
    h1: "Alternative à ChargeGuru : comparez plusieurs installateurs avant de choisir",
    updated: "2026-07-12",
    lede: "ChargeGuru est un installateur reconnu de bornes de recharge. Mais avant de retenir un seul prestataire, comparer plusieurs devis d'installateurs IRVE certifiés permet souvent d'optimiser le prix. Voici comment procéder.",
    sections: [
      {
        h2: "Ce que propose ChargeGuru",
        paragraphs: [
          "ChargeGuru se positionne comme installateur de bornes de recharge IRVE, pour les particuliers comme pour les copropriétés. C'est un acteur unique avec sa propre grille de prestations.",
          "Passer par un seul installateur est pratique, mais ne vous donne pas de point de comparaison sur le prix et les options.",
        ],
      },
      {
        h2: "L'intérêt de comparer plusieurs installateurs IRVE",
        paragraphs: [
          "À prestation équivalente, le devis d'installation d'une borne peut varier de plusieurs centaines d'euros selon l'installateur et la configuration. Comparer plusieurs propositions vous met en position de force.",
          "Un comparateur vous fait gagner du temps : au lieu de contacter plusieurs entreprises une à une, vous recevez plusieurs devis d'un coup.",
        ],
      },
      {
        h2: "Choisis Ta borne : comparez gratuitement en 24h",
        paragraphs: [
          "Avec Choisis Ta borne, vous décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis d'installateurs IRVE certifiés sous 24h, partout en France.",
          "C'est gratuit, sans engagement, et les aides (TVA 5,5 %, prime ADVENIR en copropriété) sont intégrées aux devis pour comparer le vrai prix final.",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à ChargeGuru ?", a: "C'est un comparateur : vous recevez jusqu'à 3 devis d'installateurs IRVE certifiés pour comparer, au lieu d'une seule offre. Gratuit et sans engagement." },
      { q: "Combien de temps pour recevoir les devis ?", a: "Jusqu'à 3 devis gratuits sous 24h après avoir décrit votre projet." },
      { q: "Les installateurs sont-ils certifiés IRVE ?", a: "Oui, tous nos partenaires sont qualifiés IRVE, condition obligatoire pour les bornes de plus de 3,7 kW et pour les aides." },
    ],
    related: ["installer-borne-de-recharge", "prix-borne-de-recharge", "quelle-borne-de-recharge-choisir"],
  },
  {
    slug: "alternative-beev",
    metaTitle: "Alternative à Beev : comparez les devis d'installateurs IRVE | Choisis Ta borne",
    metaDescription:
      "Vous cherchez une alternative à Beev pour votre borne de recharge ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h, partout en France. Sans engagement.",
    h1: "Alternative à Beev : comparez plusieurs devis pour votre borne de recharge",
    updated: "2026-07-12",
    lede: "Beev est une plateforme active dans l'univers des bornes de recharge et de la mobilité électrique. Pour l'installation à domicile, comparer plusieurs devis d'installateurs IRVE certifiés reste le meilleur moyen d'optimiser votre budget.",
    sections: [
      {
        h2: "Ce que propose Beev",
        paragraphs: [
          "Beev se positionne autour des bornes de recharge et de la mobilité électrique, avec une offre en ligne. C'est l'un des acteurs que l'on retrouve lorsqu'on cherche à équiper son logement.",
          "Comme toujours, une offre unique gagne à être comparée avec d'autres pour valider le juste prix.",
        ],
      },
      {
        h2: "Comparer, c'est payer le juste prix",
        paragraphs: [
          "Le coût d'installation d'une borne dépend de la puissance, de la distance au tableau électrique et des travaux annexes. Ces paramètres font varier les devis d'un installateur à l'autre.",
          "En recevant plusieurs propositions, vous identifiez rapidement l'offre la plus adaptée à votre logement et à votre budget.",
        ],
      },
      {
        h2: "Choisis Ta borne : le comparateur gratuit et sans engagement",
        paragraphs: [
          "Choisis Ta borne vous met en relation avec des installateurs IRVE certifiés dans toute la France. Décrivez votre projet et recevez jusqu'à 3 devis gratuits sous 24h.",
          "Vous comparez librement et choisissez l'installateur de votre choix, aides comprises (TVA 5,5 %, ADVENIR en copropriété).",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à Beev ?", a: "Choisis Ta borne est un comparateur d'installateurs IRVE : vous recevez jusqu'à 3 devis gratuits à comparer, sans engagement." },
      { q: "Le service est-il payant ?", a: "Non, la mise en relation et les devis sont entièrement gratuits." },
      { q: "Où intervenez-vous ?", a: "Partout en France : notre réseau d'installateurs IRVE certifiés couvre l'ensemble du territoire." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "prix-borne-de-recharge", "borne-de-recharge-maison"],
  },
  {
    slug: "alternative-izi-by-edf",
    metaTitle: "Alternative à IZI by EDF : comparez les installateurs IRVE | Choisis Ta borne",
    metaDescription:
      "Une alternative à IZI by EDF pour installer votre borne de recharge ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h. Particuliers et copropriétés, sans engagement.",
    h1: "Alternative à IZI by EDF : comparez avant d'installer votre borne",
    updated: "2026-07-12",
    lede: "IZI by EDF, du groupe EDF, propose notamment l'installation de bornes de recharge à domicile. La notoriété d'une grande marque est rassurante, mais comparer plusieurs devis d'installateurs IRVE certifiés reste souvent plus avantageux.",
    sections: [
      {
        h2: "Ce que propose IZI by EDF",
        paragraphs: [
          "IZI by EDF est l'offre de services à domicile du groupe EDF, qui inclut l'installation de bornes de recharge pour véhicules électriques. C'est une offre packagée, portée par une grande marque.",
          "La notoriété a un intérêt, mais elle ne garantit pas à elle seule le meilleur prix pour votre installation.",
        ],
      },
      {
        h2: "Pourquoi comparer plusieurs offres",
        paragraphs: [
          "Faire jouer la concurrence entre plusieurs installateurs IRVE permet d'ajuster le devis à votre situation réelle (puissance, distance au tableau, copropriété ou maison) et d'éviter de payer pour des prestations inutiles.",
          "Un comparateur regroupe ces devis pour vous, en un seul geste.",
        ],
      },
      {
        h2: "Choisis Ta borne : comparez gratuitement des installateurs certifiés",
        paragraphs: [
          "Choisis Ta borne vous connecte à des installateurs IRVE certifiés partout en France. En 2 minutes, décrivez votre projet et recevez jusqu'à 3 devis gratuits sous 24h.",
          "Le service est gratuit et sans engagement, avec les aides intégrées (TVA 5,5 %, prime ADVENIR en copropriété) pour comparer le prix final.",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à IZI by EDF ?", a: "C'est un comparateur : vous recevez jusqu'à 3 devis d'installateurs IRVE certifiés à comparer, gratuitement et sans engagement, au lieu d'une seule offre." },
      { q: "Est-ce fiable ?", a: "Nos partenaires sont des installateurs certifiés IRVE, qualification obligatoire pour installer une borne et bénéficier des aides." },
      { q: "Comment obtenir mes devis ?", a: "Décrivez votre projet en ligne en 2 minutes ; vous recevez jusqu'à 3 devis gratuits sous 24h." },
    ],
    related: ["aides-borne-de-recharge", "prix-borne-de-recharge", "installer-borne-de-recharge"],
  },
  {
    slug: "alternative-totalenergies",
    metaTitle: "Alternative à TotalEnergies : comparez les devis de bornes IRVE | Choisis Ta borne",
    metaDescription:
      "Cherchez-vous une alternative à TotalEnergies pour votre borne de recharge à domicile ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h. Sans engagement.",
    h1: "Alternative à TotalEnergies : comparez avant de choisir votre borne",
    updated: "2026-07-12",
    lede: "TotalEnergies, énergéticien, propose des solutions de recharge pour véhicules électriques. Pour l'installation d'une borne à domicile, comparer plusieurs devis d'installateurs IRVE certifiés reste le moyen le plus sûr d'optimiser le prix.",
    sections: [
      {
        h2: "Ce que propose TotalEnergies",
        paragraphs: [
          "TotalEnergies est un énergéticien qui propose notamment des solutions de recharge (à domicile, en entreprise et via un réseau de bornes publiques). C'est une offre portée par un grand groupe.",
          "Une offre unique de grande marque gagne, là aussi, à être comparée pour valider le juste prix.",
        ],
      },
      {
        h2: "L'avantage de la comparaison",
        paragraphs: [
          "Comparer plusieurs installateurs IRVE certifiés vous permet d'obtenir un devis vraiment adapté à votre logement, et de bénéficier des aides au meilleur coût final.",
          "Le comparateur rassemble ces devis pour vous éviter de démarcher plusieurs entreprises.",
        ],
      },
      {
        h2: "Choisis Ta borne : le comparateur gratuit",
        paragraphs: [
          "Avec Choisis Ta borne, décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis d'installateurs IRVE certifiés sous 24h, partout en France.",
          "C'est gratuit, sans engagement, aides incluses (TVA 5,5 %, ADVENIR en copropriété).",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à TotalEnergies ?", a: "Choisis Ta borne est un comparateur d'installateurs IRVE : vous comparez jusqu'à 3 devis gratuits au lieu d'une seule offre, sans engagement." },
      { q: "Le comparateur coûte-t-il quelque chose ?", a: "Non, la mise en relation et les devis sont 100 % gratuits." },
      { q: "Puis-je comparer pour une entreprise ?", a: "Oui, nos partenaires installent aussi des bornes pour les parkings d'entreprise et les flottes." },
    ],
    related: ["borne-de-recharge-entreprise", "prix-borne-de-recharge", "aides-borne-de-recharge"],
  },
  {
    slug: "alternative-waat",
    metaTitle: "Alternative à Waat : comparez les installateurs de bornes IRVE | Choisis Ta borne",
    metaDescription:
      "Une alternative à Waat pour équiper votre copropriété ou entreprise en bornes de recharge ? Comparez gratuitement 3 devis d'installateurs IRVE certifiés sous 24h. Sans engagement.",
    h1: "Alternative à Waat : comparez plusieurs devis pour vos bornes de recharge",
    updated: "2026-07-12",
    lede: "Waat est un acteur de la recharge orienté copropriétés et entreprises. Avant de retenir un seul opérateur, comparer plusieurs devis d'installateurs IRVE certifiés permet d'obtenir la meilleure offre. Voici comment.",
    sections: [
      {
        h2: "Ce que propose Waat",
        paragraphs: [
          "Waat se positionne sur l'installation et l'exploitation de bornes de recharge, principalement pour les copropriétés et les entreprises. C'est une offre d'opérateur intégré.",
          "Pour ce type de projet collectif, comparer plusieurs propositions est particulièrement utile, tant les configurations varient.",
        ],
      },
      {
        h2: "Comparer pour un projet copropriété ou entreprise",
        paragraphs: [
          "L'équipement d'un parking collectif dépend du nombre de places, de la puissance disponible et de la gestion de charge. Ces paramètres font varier fortement les devis d'un installateur à l'autre.",
          "Recevoir plusieurs offres vous aide à choisir la solution la plus adaptée et la mieux dimensionnée.",
        ],
      },
      {
        h2: "Choisis Ta borne : comparez gratuitement des installateurs certifiés",
        paragraphs: [
          "Choisis Ta borne met en relation copropriétés et entreprises avec des installateurs IRVE certifiés partout en France. Décrivez votre projet et recevez plusieurs devis gratuits sous 24h.",
          "Gratuit et sans engagement, avec l'accompagnement sur la prime ADVENIR pour les projets collectifs.",
        ],
      },
    ],
    faq: [
      { q: "Choisis Ta borne est-il une alternative à Waat ?", a: "C'est un comparateur : vous recevez plusieurs devis d'installateurs IRVE certifiés à comparer, gratuitement, pour votre copropriété ou entreprise." },
      { q: "Gérez-vous les projets en copropriété et entreprise ?", a: "Oui, nos partenaires maîtrisent le droit à la prise, la gestion de charge et la prime ADVENIR pour les projets collectifs." },
      { q: "Est-ce gratuit et sans engagement ?", a: "Oui, la mise en relation et les devis sont gratuits et sans engagement." },
    ],
    related: ["borne-de-recharge-entreprise", "borne-recharge-copropriete", "prime-advenir"],
  },
  {
    slug: "comparateur-borne-de-recharge",
    metaTitle: "Comparateur de borne de recharge : le meilleur installateur IRVE | Choisis Ta borne",
    metaDescription:
      "Comparez gratuitement les installateurs de bornes de recharge IRVE certifiés : prix, prestations, aides. 3 devis sous 24h, sans engagement. Le comparateur de borne de recharge en France.",
    h1: "Comparateur de borne de recharge : comparez les installateurs IRVE",
    updated: "2026-07-12",
    lede: "Plutôt que de choisir au hasard, un comparateur de borne de recharge vous permet de mettre plusieurs installateurs IRVE certifiés en concurrence et de payer le juste prix. Voici comment ça marche.",
    sections: [
      {
        h2: "Pourquoi utiliser un comparateur de borne de recharge",
        paragraphs: [
          "Le prix et les prestations d'installation d'une borne varient fortement d'un professionnel à l'autre. Un comparateur vous fait gagner du temps et de l'argent : vous recevez plusieurs devis d'un coup, sans démarcher chaque entreprise.",
          "Vous comparez ainsi sur des critères objectifs — prix, puissance, délais, aides — au lieu de vous fier à une seule offre.",
        ],
      },
      {
        h2: "Comment fonctionne le comparateur",
        paragraphs: [
          "Vous décrivez votre projet en 2 minutes (type de logement, véhicule, puissance souhaitée). Le comparateur transmet votre demande à des installateurs IRVE certifiés proches de chez vous.",
          "Vous recevez jusqu'à 3 devis gratuits sous 24h, puis vous choisissez librement — ou pas. Aucun engagement.",
        ],
      },
      {
        h2: "Ce que vous comparez vraiment",
        paragraphs: [
          "Au-delà du prix, un bon comparatif porte sur la puissance proposée, la marque de la borne, les fonctions (pilotage, connectivité), les délais d'installation et les aides intégrées (TVA 5,5 %, prime ADVENIR).",
        ],
        list: [
          "Prix installé, aides déduites.",
          "Puissance et marque de la borne.",
          "Délai d'installation.",
          "Certification IRVE et garanties.",
        ],
      },
    ],
    faq: [
      { q: "Le comparateur de borne de recharge est-il gratuit ?", a: "Oui, la mise en relation et les 3 devis sont 100 % gratuits et sans engagement." },
      { q: "Combien de devis vais-je recevoir ?", a: "Jusqu'à 3 devis d'installateurs IRVE certifiés, sous 24h après votre demande." },
      { q: "Suis-je obligé de choisir un installateur ?", a: "Non. Vous comparez librement et choisissez seulement si une offre vous convient." },
    ],
    related: ["meilleur-installateur-borne-recharge", "prix-borne-de-recharge", "quelle-borne-de-recharge-choisir"],
  },
  {
    slug: "meilleur-installateur-borne-recharge",
    metaTitle: "Meilleur installateur de borne de recharge : comment le choisir | Choisis Ta borne",
    metaDescription:
      "Comment choisir le meilleur installateur de borne de recharge en 2026 ? Certification IRVE, devis, garanties, avis. Comparez gratuitement 3 installateurs certifiés sous 24h.",
    h1: "Meilleur installateur de borne de recharge : les critères pour bien choisir",
    updated: "2026-07-12",
    lede: "Le « meilleur » installateur de borne de recharge n'est pas le même pour tout le monde : c'est celui qui correspond à votre logement, votre budget et vos délais. Voici comment le trouver.",
    sections: [
      {
        h2: "Les critères d'un bon installateur de borne",
        paragraphs: [
          "Un bon installateur est avant tout certifié IRVE, transparent sur son devis, et capable d'expliquer ses choix techniques (puissance, câblage, protections). La proximité géographique et les délais comptent aussi.",
          "Les garanties (matériel et pose) et le suivi après installation font la différence sur le long terme.",
        ],
      },
      {
        h2: "L'importance de la certification IRVE",
        paragraphs: [
          "La qualification IRVE est obligatoire pour installer une borne de plus de 3,7 kW et pour bénéficier des aides. Elle garantit une pose conforme à la norme NF C 15-100 et une attestation en fin de chantier.",
          "N'envisagez jamais une borne posée par un électricien non certifié : c'est un risque pour la sécurité et pour votre assurance.",
        ],
      },
      {
        h2: "Comparer pour trouver le meilleur",
        paragraphs: [
          "Le meilleur moyen d'identifier le bon installateur est de comparer plusieurs devis. Choisis Ta borne vous met en relation avec des installateurs IRVE certifiés et vous transmet jusqu'à 3 devis gratuits sous 24h.",
          "Vous comparez prix, prestations et délais, puis choisissez en toute sérénité.",
        ],
      },
    ],
    faq: [
      { q: "Comment reconnaître un bon installateur de borne ?", a: "Il est certifié IRVE, transparent sur son devis, respecte la norme NF C 15-100 et offre des garanties matériel et pose." },
      { q: "Pourquoi la certification IRVE est-elle importante ?", a: "Elle est obligatoire au-delà de 3,7 kW, conditionne les aides et garantit une installation sûre et conforme." },
      { q: "Comment comparer les installateurs ?", a: "En demandant plusieurs devis. Choisis Ta borne vous en fournit jusqu'à 3, gratuits, sous 24h." },
    ],
    related: ["comparateur-borne-de-recharge", "installer-borne-de-recharge", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-de-recharge-22-kw",
    metaTitle: "Borne de recharge 22 kW : prix, triphasé et pour qui en 2026 | Choisis Ta borne",
    metaDescription:
      "Borne de recharge 22 kW : installation en triphasé, prix, temps de recharge, véhicules compatibles. Faut-il vraiment 22 kW à domicile ? Guide + 3 devis gratuits d'installateurs IRVE.",
    h1: "Borne de recharge 22 kW : est-ce le bon choix à domicile ?",
    updated: "2026-07-12",
    lede: "La borne de recharge 22 kW est la plus puissante en courant alternatif à domicile. Mais elle n'est utile que dans certains cas. Voici pour qui elle vaut le coup, et à quel prix.",
    sections: [
      {
        h2: "Ce qu'est une borne 22 kW",
        paragraphs: [
          "Une borne 22 kW fonctionne en triphasé et délivre la puissance maximale en courant alternatif pour une recharge à domicile. Elle recharge un véhicule compatible en 2 h 30 à 3 heures environ.",
          "Attention : elle nécessite un compteur triphasé, et surtout un véhicule capable d'accepter 22 kW en AC — ce qui n'est pas le cas de la majorité des modèles.",
        ],
      },
      {
        h2: "Pour qui la borne 22 kW est-elle utile ?",
        paragraphs: [
          "La 22 kW est pertinente pour les gros rouleurs pressés, les véhicules acceptant cette puissance, ou un usage partagé (plusieurs véhicules à recharger rapidement).",
          "Pour un usage domestique classique, une borne 7,4 ou 11 kW suffit largement : brancher la nuit recharge la batterie sans avoir besoin de 22 kW.",
        ],
      },
      {
        h2: "Prix et installation d'une borne 22 kW",
        paragraphs: [
          "Une borne 22 kW coûte un peu plus qu'une 7,4 kW, et son installation exige un compteur triphasé. Un installateur IRVE certifié vérifie la faisabilité et dimensionne l'installation.",
          "Recevez 3 devis gratuits sous 24h pour comparer le prix d'une borne 22 kW adaptée à votre logement.",
        ],
      },
    ],
    faq: [
      { q: "Faut-il une borne 22 kW à la maison ?", a: "Rarement : elle n'est utile que si votre véhicule accepte 22 kW en courant alternatif et que vous avez un compteur triphasé. Sinon, 7,4 ou 11 kW suffit." },
      { q: "Quel temps de recharge en 22 kW ?", a: "Environ 2 h 30 à 3 heures pour une batterie moyenne, à condition que le véhicule accepte cette puissance." },
      { q: "Une borne 22 kW nécessite-t-elle du triphasé ?", a: "Oui, le 22 kW en courant alternatif requiert un compteur triphasé." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-11-kw", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "borne-de-recharge-11-kw",
    metaTitle: "Borne de recharge 11 kW : prix, triphasé et avantages 2026 | Choisis Ta borne",
    metaDescription:
      "Borne de recharge 11 kW : installation en triphasé, prix, temps de recharge, pour qui. Le bon compromis entre 7,4 et 22 kW ? Guide + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Borne de recharge 11 kW : le bon compromis à domicile ?",
    updated: "2026-07-12",
    lede: "La borne de recharge 11 kW offre une recharge nettement plus rapide que le 7,4 kW, sans les contraintes du 22 kW. Voici pour qui c'est le bon choix.",
    sections: [
      {
        h2: "Ce qu'est une borne 11 kW",
        paragraphs: [
          "Une borne 11 kW fonctionne en triphasé et recharge une batterie moyenne en environ 5 heures. C'est un excellent compromis : plus rapide que le 7,4 kW, et compatible avec bien plus de véhicules que le 22 kW.",
          "Elle nécessite un compteur triphasé, courant dans de nombreux logements récents.",
        ],
      },
      {
        h2: "Pour qui la borne 11 kW est-elle adaptée ?",
        paragraphs: [
          "La 11 kW convient aux conducteurs qui roulent beaucoup ou veulent une recharge plus rapide qu'en 7,4 kW, tout en gardant la compatibilité avec la plupart des véhicules électriques.",
          "Si vous n'avez que du monophasé, une borne 7,4 kW reste la solution ; le passage au triphasé peut être étudié par un installateur.",
        ],
      },
      {
        h2: "Prix et installation d'une borne 11 kW",
        paragraphs: [
          "Le prix d'une borne 11 kW est proche de celui d'une 7,4 kW ; c'est surtout le compteur triphasé qui conditionne l'installation. Un installateur IRVE certifié valide la faisabilité.",
          "Comparez 3 devis gratuits sous 24h pour une borne 11 kW adaptée à votre logement.",
        ],
      },
    ],
    faq: [
      { q: "Quelle différence entre 7,4, 11 et 22 kW ?", a: "7,4 kW en monophasé (recharge en une nuit), 11 kW en triphasé (recharge accélérée, très compatible), 22 kW en triphasé (le plus rapide, mais peu de véhicules l'acceptent)." },
      { q: "La borne 11 kW nécessite-t-elle du triphasé ?", a: "Oui, le 11 kW requiert un compteur triphasé." },
      { q: "Quel temps de recharge en 11 kW ?", a: "Environ 5 heures pour une batterie moyenne de 50 kWh." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-22-kw", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "cable-de-recharge-type-2",
    metaTitle: "Câble de recharge Type 2 : bien le choisir en 2026 | Choisis Ta borne",
    metaDescription:
      "Câble de recharge Type 2 : longueur, puissance (mono ou triphasé), câble attaché ou détachable. Comment bien choisir son câble de recharge pour voiture électrique. Guide + 3 devis gratuits IRVE.",
    h1: "Câble de recharge Type 2 : comment bien le choisir ?",
    updated: "2026-07-12",
    lede: "Le connecteur Type 2 est le standard européen de la recharge. Câble attaché ou détachable, longueur, puissance : voici comment choisir le bon câble pour votre borne et votre voiture électrique.",
    sections: [
      {
        h2: "Le Type 2, standard européen de recharge",
        paragraphs: [
          "En Europe, la quasi-totalité des voitures électriques et des bornes utilisent le connecteur Type 2 pour la recharge en courant alternatif. C'est la norme, aussi bien à domicile que sur les bornes publiques.",
          "Votre borne à domicile sera donc équipée en Type 2, que ce soit avec un câble attaché ou une prise.",
        ],
      },
      {
        h2: "Câble attaché ou prise Type 2 ?",
        paragraphs: [
          "Une borne à câble attaché est plus pratique au quotidien : vous branchez directement, sans sortir de câble. Une borne à prise (Type 2) est plus polyvalente : vous utilisez votre propre câble et pouvez le changer.",
          "Le choix dépend de vos habitudes ; un installateur IRVE certifié vous conseille selon votre configuration.",
        ],
      },
      {
        h2: "Longueur et puissance du câble",
        paragraphs: [
          "La longueur du câble (souvent 5 à 7 m) doit couvrir la distance entre la borne et la prise du véhicule. La puissance du câble (monophasé ou triphasé) doit correspondre à celle de la borne pour ne pas brider la recharge.",
          "Un câble sous-dimensionné limite la vitesse de recharge : mieux vaut l'accorder à la borne.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce qu'un câble de recharge Type 2 ?", a: "C'est le câble au standard européen pour la recharge en courant alternatif, utilisé par la quasi-totalité des voitures électriques et des bornes." },
      { q: "Câble attaché ou détachable : que choisir ?", a: "Le câble attaché est plus pratique au quotidien ; la prise Type 2 est plus polyvalente. Cela dépend de vos habitudes." },
      { q: "Quelle longueur de câble de recharge ?", a: "Généralement 5 à 7 m, à adapter à la distance entre la borne et la prise de votre véhicule." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-de-recharge-maison", "choisir-puissance-borne"],
  },
  {
    slug: "borne-de-recharge-pas-cher",
    metaTitle: "Borne de recharge pas cher : payer moins cher en 2026 | Choisis Ta borne",
    metaDescription:
      "Borne de recharge pas cher : comparer les devis, mobiliser les aides (TVA 5,5 %, prime ADVENIR), choisir la bonne puissance. Nos astuces pour réduire le prix + 3 devis gratuits d'installateurs IRVE.",
    h1: "Borne de recharge pas cher : comment réduire le prix de votre installation",
    updated: "2026-07-12",
    lede: "Installer une borne de recharge pas cher, c'est possible sans rogner sur la qualité : il suffit de comparer, de mobiliser les bonnes aides et de choisir la puissance juste. Voici comment.",
    sections: [
      {
        h2: "Comparer les devis pour payer moins cher",
        paragraphs: [
          "Le premier levier pour une borne de recharge pas chère est la mise en concurrence : à prestation équivalente, les devis varient de plusieurs centaines d'euros d'un installateur à l'autre.",
          "Comparer 3 devis d'installateurs IRVE certifiés vous garantit le juste prix, sans surpayer.",
        ],
      },
      {
        h2: "Mobiliser toutes les aides",
        paragraphs: [
          "La TVA réduite à 5,5 % sur la pose (logement de plus de 2 ans) réduit immédiatement la facture. En copropriété et en entreprise, la prime ADVENIR finance une partie de l'installation.",
          "Nos partenaires intègrent ces aides directement au devis, pour comparer le vrai prix final.",
        ],
        list: [
          "TVA réduite à 5,5 % via un installateur IRVE.",
          "Prime ADVENIR en copropriété et entreprise.",
          "Aides locales éventuelles selon la collectivité.",
        ],
      },
      {
        h2: "Choisir la puissance juste",
        paragraphs: [
          "Inutile de surpayer une borne 22 kW si une 7,4 kW recharge votre véhicule en une nuit. Dimensionner la borne à votre usage réel évite les dépenses inutiles.",
          "Un installateur IRVE certifié vous conseille la puissance la plus adaptée, sans vous vendre du surdimensionné.",
        ],
      },
    ],
    faq: [
      { q: "Comment installer une borne de recharge pas cher ?", a: "Comparez plusieurs devis, mobilisez les aides (TVA 5,5 %, ADVENIR) et choisissez la puissance adaptée à votre usage réel." },
      { q: "Quel est le prix minimum d'une borne installée ?", a: "Autour de 990 € posée pour une borne 7,4 kW avant aides, selon la distance au tableau électrique. Comparez pour trouver la meilleure offre." },
      { q: "Les aides rendent-elles la borne moins chère ?", a: "Oui : la TVA à 5,5 % et la prime ADVENIR (en copropriété/entreprise) réduisent sensiblement le prix final." },
    ],
    related: ["prix-borne-de-recharge", "aides-borne-de-recharge", "comparateur-borne-de-recharge"],
  },
  {
    slug: "monophase-ou-triphase-borne",
    metaTitle: "Borne de recharge monophasé ou triphasé : que choisir ? | Choisis Ta borne",
    metaDescription:
      "Borne de recharge en monophasé ou triphasé ? Différences, puissances (7,4 / 11 / 22 kW), compteur, prix. Le guide pour bien choisir + 3 devis gratuits d'installateurs IRVE certifiés.",
    h1: "Borne de recharge monophasé ou triphasé : comment choisir ?",
    updated: "2026-07-12",
    lede: "Le choix entre une borne monophasée et triphasée dépend de votre compteur, de votre véhicule et de la vitesse de recharge souhaitée. Voici comment trancher simplement.",
    sections: [
      {
        h2: "Monophasé et triphasé : quelle différence ?",
        paragraphs: [
          "Le monophasé est le raccordement le plus courant en maison : il permet une borne jusqu'à 7,4 kW. Le triphasé, présent dans certains logements, autorise des bornes plus puissantes de 11 ou 22 kW.",
          "En clair : monophasé = jusqu'à 7,4 kW ; triphasé = 11 ou 22 kW selon le véhicule.",
        ],
      },
      {
        h2: "Quel choix selon votre situation ?",
        paragraphs: [
          "Si vous avez un compteur monophasé et un usage classique, une borne 7,4 kW recharge votre voiture en une nuit : inutile de passer au triphasé.",
          "Si vous roulez beaucoup ou possédez un véhicule acceptant 11/22 kW en courant alternatif, le triphasé accélère la recharge. Le passage au triphasé se demande à votre gestionnaire de réseau.",
        ],
        list: [
          "Monophasé : borne jusqu'à 7,4 kW, recharge en une nuit.",
          "Triphasé : borne 11 kW (très compatible) ou 22 kW (peu de véhicules l'acceptent).",
        ],
      },
      {
        h2: "Faire le point avec un installateur IRVE",
        paragraphs: [
          "Un installateur certifié IRVE vérifie votre type de compteur et votre abonnement, puis recommande la puissance adaptée sans surdimensionner. Il peut aussi étudier un passage en triphasé si nécessaire.",
          "Recevez 3 devis gratuits sous 24h pour comparer les solutions mono et triphasé.",
        ],
      },
    ],
    faq: [
      { q: "Comment savoir si j'ai du monophasé ou du triphasé ?", a: "Regardez votre tableau électrique ou votre facture ; un installateur IRVE peut aussi le vérifier lors de l'étude. Le monophasé est le plus courant en maison." },
      { q: "Faut-il passer au triphasé pour une borne ?", a: "Pas forcément : le monophasé suffit pour une borne 7,4 kW, qui recharge en une nuit. Le triphasé n'est utile que pour du 11 ou 22 kW." },
      { q: "Le triphasé recharge-t-il toujours plus vite ?", a: "Seulement si votre véhicule accepte 11 ou 22 kW en courant alternatif. Sinon, la recharge est identique au monophasé." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-11-kw", "borne-de-recharge-22-kw"],
  },
  {
    slug: "borne-recharge-renault",
    metaTitle: "Borne de recharge pour Renault (Zoe, Megane E-Tech) : le guide | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Renault électrique (Zoe, Megane E-Tech, Scenic E-Tech) ? Puissance adaptée, wallbox, prix, installation IRVE. Guide + 3 devis gratuits d'installateurs certifiés.",
    h1: "Borne de recharge pour Renault : quelle solution à domicile ?",
    updated: "2026-07-12",
    lede: "Vous roulez en Renault Zoe, Megane E-Tech ou Scenic E-Tech ? Voici la borne de recharge la mieux adaptée à votre modèle pour recharger sereinement à domicile.",
    sections: [
      {
        h2: "Quelle puissance pour recharger une Renault électrique",
        paragraphs: [
          "La Renault Zoe est réputée pour accepter jusqu'à 22 kW en courant alternatif — un cas plutôt rare qui permet une recharge très rapide sur une borne triphasée 22 kW. Les Megane E-Tech et Scenic E-Tech acceptent généralement jusqu'à 7,4 ou 11 kW en AC.",
          "En monophasé, une borne 7,4 kW recharge parfaitement une Renault en une nuit ; en triphasé, vous profitez de la pleine puissance de votre modèle.",
        ],
      },
      {
        h2: "Quelle borne choisir pour une Renault",
        paragraphs: [
          "Toute wallbox universelle à connecteur Type 2 convient à une Renault électrique. Le choix se fait sur la puissance (accordée à votre compteur et à la voiture) et les fonctions (pilotage, heures creuses).",
          "Un installateur IRVE certifié valide la configuration idéale selon votre modèle Renault et votre logement.",
        ],
      },
      {
        h2: "Prix et installation",
        paragraphs: [
          "Comptez de 990 € à 1 990 € posée selon la puissance et la distance au tableau, avant TVA réduite à 5,5 %. L'installation doit être réalisée par un électricien certifié IRVE.",
          "Recevez 3 devis gratuits sous 24h pour équiper votre Renault à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Renault Zoe ?", a: "La Zoe accepte jusqu'à 22 kW en courant alternatif : une borne triphasée 22 kW la recharge très vite. En monophasé, une borne 7,4 kW suffit pour une nuit." },
      { q: "Quelle borne pour une Megane E-Tech ?", a: "La Megane E-Tech accepte généralement 7,4 à 11 kW en AC : une wallbox 7,4 kW (monophasé) ou 11 kW (triphasé) est idéale." },
      { q: "Faut-il une borne de la marque Renault ?", a: "Non, toute wallbox universelle Type 2 recharge une Renault électrique." },
    ],
    related: ["borne-de-recharge-tesla", "choisir-puissance-borne", "borne-de-recharge-maison"],
  },
  {
    slug: "borne-recharge-peugeot",
    metaTitle: "Borne de recharge pour Peugeot (e-208, e-2008) : le guide | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Peugeot électrique (e-208, e-2008, e-308) ? Puissance, wallbox Type 2, prix, installation IRVE. Guide + 3 devis gratuits d'installateurs certifiés.",
    h1: "Borne de recharge pour Peugeot : quelle solution à domicile ?",
    updated: "2026-07-12",
    lede: "Peugeot e-208, e-2008, e-308… Voici la borne de recharge la mieux adaptée à votre Peugeot électrique pour recharger facilement à domicile.",
    sections: [
      {
        h2: "Quelle puissance pour recharger une Peugeot électrique",
        paragraphs: [
          "Les Peugeot électriques (e-208, e-2008, e-308) acceptent généralement jusqu'à 7,4 kW en monophasé, et jusqu'à 11 kW en triphasé sur les versions récentes.",
          "Une borne 7,4 kW recharge votre Peugeot en une nuit à domicile ; le 11 kW en triphasé accélère la recharge si votre modèle et votre compteur le permettent.",
        ],
      },
      {
        h2: "Quelle borne choisir pour une Peugeot",
        paragraphs: [
          "Une wallbox universelle à connecteur Type 2 convient à toutes les Peugeot électriques. Priorisez une borne pilotable pour recharger en heures creuses et réduire la facture.",
          "Un installateur IRVE certifié vous conseille la puissance adaptée à votre modèle et à votre logement.",
        ],
      },
      {
        h2: "Prix et installation",
        paragraphs: [
          "De 990 € à 1 990 € posée selon la puissance et la configuration, avant TVA réduite à 5,5 %. La pose est réalisée par un électricien certifié IRVE.",
          "Comparez 3 devis gratuits sous 24h pour équiper votre Peugeot à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Peugeot e-208 ?", a: "Une wallbox 7,4 kW (monophasé) recharge la e-208 en une nuit ; en triphasé, jusqu'à 11 kW sur les versions compatibles." },
      { q: "Faut-il une borne de la marque Peugeot ?", a: "Non, toute wallbox universelle Type 2 recharge une Peugeot électrique." },
      { q: "Quel temps de recharge pour une Peugeot électrique ?", a: "Environ 7 à 8 heures sur une borne 7,4 kW pour une batterie moyenne, soit une nuit." },
    ],
    related: ["borne-de-recharge-tesla", "borne-recharge-renault", "choisir-puissance-borne"],
  },
  {
    slug: "borne-recharge-volkswagen",
    metaTitle: "Borne de recharge pour Volkswagen (ID.3, ID.4) : le guide | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Volkswagen électrique (ID.3, ID.4, ID.7) ? Puissance, wallbox Type 2, prix, installation IRVE. Guide + 3 devis gratuits d'installateurs certifiés.",
    h1: "Borne de recharge pour Volkswagen : quelle solution à domicile ?",
    updated: "2026-07-12",
    lede: "Volkswagen ID.3, ID.4, ID.7… Voici comment bien choisir la borne de recharge adaptée à votre Volkswagen électrique pour une recharge sereine à domicile.",
    sections: [
      {
        h2: "Quelle puissance pour recharger une Volkswagen électrique",
        paragraphs: [
          "Les Volkswagen de la gamme ID acceptent généralement jusqu'à 11 kW en courant alternatif (triphasé), et 7,4 kW en monophasé. C'est une bonne compatibilité pour une recharge à domicile efficace.",
          "En monophasé, une borne 7,4 kW recharge votre ID en une nuit ; en triphasé, une borne 11 kW accélère la recharge.",
        ],
      },
      {
        h2: "Quelle borne choisir pour une Volkswagen",
        paragraphs: [
          "Une wallbox universelle Type 2 convient à toutes les Volkswagen électriques. Une borne pilotable permet de programmer la recharge en heures creuses.",
          "Un installateur IRVE certifié valide la puissance selon votre modèle et votre compteur.",
        ],
      },
      {
        h2: "Prix et installation",
        paragraphs: [
          "De 990 € à 1 990 € posée selon la puissance et la distance au tableau, avant TVA réduite à 5,5 %, par un électricien certifié IRVE.",
          "Recevez 3 devis gratuits sous 24h pour équiper votre Volkswagen à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Volkswagen ID.3 ou ID.4 ?", a: "Une wallbox 11 kW (triphasé) exploite la pleine puissance AC des ID ; en monophasé, une borne 7,4 kW recharge en une nuit." },
      { q: "Faut-il une borne de la marque Volkswagen ?", a: "Non, toute wallbox universelle Type 2 recharge une Volkswagen électrique." },
      { q: "Quel temps de recharge pour une Volkswagen ID ?", a: "Environ 5 heures en 11 kW, ou 7 à 8 heures en 7,4 kW pour une batterie moyenne." },
    ],
    related: ["borne-recharge-renault", "borne-recharge-peugeot", "borne-de-recharge-11-kw"],
  },
  {
    slug: "borne-recharge-camping-car",
    metaTitle: "Borne de recharge pour camping-car électrique : le guide | Choisis Ta borne",
    metaDescription:
      "Recharger un camping-car ou van électrique à domicile : puissance, prise, wallbox adaptée, prix, installation IRVE. Le guide complet + 3 devis gratuits d'installateurs certifiés.",
    h1: "Borne de recharge pour camping-car électrique : ce qu'il faut savoir",
    updated: "2026-07-12",
    lede: "Les camping-cars et vans électriques arrivent, avec de grosses batteries à recharger. Voici la solution de recharge la mieux adaptée à domicile.",
    sections: [
      {
        h2: "Recharger un camping-car ou van électrique",
        paragraphs: [
          "Un camping-car ou van électrique dispose souvent d'une batterie de grande capacité : une borne de recharge à domicile est indispensable pour recharger dans de bons délais, bien plus vite qu'une prise domestique.",
          "La puissance à privilégier dépend de la capacité de charge du véhicule en courant alternatif.",
        ],
      },
      {
        h2: "Quelle borne pour un camping-car",
        paragraphs: [
          "Une wallbox 7,4 kW (monophasé) ou 11 kW (triphasé) est généralement le bon choix. Vérifiez l'espace nécessaire : un camping-car demande un emplacement dégagé et un câble suffisamment long.",
          "Un installateur IRVE certifié adapte la puissance et l'emplacement de la borne à votre véhicule.",
        ],
      },
      {
        h2: "Prix et installation",
        paragraphs: [
          "Le prix reste comparable à une installation classique (990 € à 1 990 € posée selon la configuration), avant TVA réduite à 5,5 %.",
          "Comparez 3 devis gratuits sous 24h pour recharger votre camping-car électrique à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on recharger un camping-car électrique à domicile ?", a: "Oui, avec une borne de recharge adaptée à la puissance du véhicule ; c'est bien plus rapide et sûr qu'une prise domestique." },
      { q: "Quelle puissance pour un camping-car électrique ?", a: "Une borne 7,4 kW (monophasé) ou 11 kW (triphasé) convient généralement, selon la capacité de charge AC du véhicule." },
      { q: "Faut-il un emplacement particulier ?", a: "Oui, prévoyez un accès dégagé et un câble assez long ; un installateur IRVE adapte la pose à votre camping-car." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "droit-a-la-prise",
    metaTitle: "Droit à la prise : installer une borne en copropriété (2026) | Choisis Ta borne",
    metaDescription:
      "Le droit à la prise vous permet d'installer une borne de recharge sur votre place en copropriété, à vos frais, sans vote de l'assemblée. Procédure, délais, aides et devis gratuit.",
    h1: "Droit à la prise : installer sa borne de recharge en copropriété",
    updated: "2026-07-15",
    lede: "Le « droit à la prise » garantit à tout occupant d'une place de stationnement en copropriété la possibilité de faire installer une borne de recharge à ses frais. Voici comment l'exercer, étape par étape.",
    sections: [
      {
        h2: "Qu'est-ce que le droit à la prise ?",
        paragraphs: [
          "Le droit à la prise permet à un propriétaire comme à un locataire d'équiper d'une borne de recharge la place de stationnement dont il a l'usage, en copropriété, sans avoir à obtenir l'accord préalable de l'assemblée générale. L'installation est individuelle et à la charge du demandeur.",
          "La copropriété ne peut s'opposer à cette installation que pour un motif sérieux et légitime — par exemple des travaux de recharge déjà prévus ou une impossibilité technique — et doit alors saisir le tribunal. En pratique, l'immense majorité des demandes aboutit.",
        ],
      },
      {
        h2: "La procédure, étape par étape",
        paragraphs: [
          "La démarche est encadrée et relativement simple :",
        ],
        list: [
          "Faites établir un devis par un installateur certifié IRVE, avec un descriptif technique des travaux.",
          "Notifiez le syndic par lettre recommandée avec accusé de réception, en joignant ce descriptif détaillé.",
          "Le syndic inscrit la question à l'ordre du jour de la prochaine assemblée générale, pour information.",
          "La copropriété dispose d'un délai pour s'opposer via le tribunal en cas de motif légitime ; à défaut, votre projet est validé.",
          "Passé ce délai, l'installateur réalise la pose et la mise en service.",
        ],
      },
      {
        h2: "Qui paie, et quelles aides ?",
        paragraphs: [
          "Dans le cadre du droit à la prise, l'installation individuelle est à la charge de celui qui la demande. La TVA réduite à 5,5 % s'applique sur la pose, et la prime ADVENIR peut couvrir jusqu'à 960 € des travaux en copropriété.",
          "Votre borne peut être raccordée à votre compteur individuel — vous payez alors votre électricité sur votre facture habituelle, sans abonnement à un opérateur tiers — ou à une colonne dédiée si la copropriété en dispose.",
        ],
      },
      {
        h2: "Individuel ou collectif : que choisir ?",
        paragraphs: [
          "Le droit à la prise est la voie la plus rapide pour un besoin individuel. Si plusieurs copropriétaires sont intéressés, une infrastructure collective votée en assemblée générale peut s'avérer plus économique à l'échelle de l'immeuble.",
          "Nos installateurs IRVE partenaires vous conseillent la solution la plus adaptée et vous transmettent jusqu'à 3 devis gratuits à comparer.",
        ],
      },
    ],
    faq: [
      { q: "Le syndic peut-il refuser mon installation ?", a: "Il ne peut s'y opposer que pour un motif sérieux et légitime (travaux déjà prévus, impossibilité technique) et doit alors saisir le tribunal. Un simple refus de principe n'est pas recevable." },
      { q: "Un locataire peut-il exercer le droit à la prise ?", a: "Oui. Le locataire informe le propriétaire de son projet ; celui-ci ne peut s'y opposer que pour un motif sérieux et légitime, dans les mêmes conditions que la copropriété." },
      { q: "Combien coûte une borne en copropriété via le droit à la prise ?", a: "Comptez généralement de 1 200 à 2 000 € posée selon la distance de câblage jusqu'à votre place, avant déduction de la TVA à 5,5 % et de la prime ADVENIR (jusqu'à 960 €)." },
      { q: "Faut-il un vote de l'assemblée générale ?", a: "Non, pas pour une installation individuelle : le point est seulement inscrit à l'ordre du jour pour information. Un vote n'est nécessaire que pour une infrastructure collective." },
    ],
    related: ["borne-recharge-copropriete", "vote-assemblee-generale-borne", "prime-advenir", "borne-recharge-locataire"],
  },
  {
    slug: "loi-lom-copropriete",
    metaTitle: "Loi LOM et bornes de recharge : les obligations en copropriété | Choisis Ta borne",
    metaDescription:
      "Ce que la loi LOM impose aux copropriétés et aux parkings en matière de bornes de recharge : pré-équipement, droit à la prise, mise à l'ordre du jour en AG. Le point 2026.",
    h1: "Loi LOM : quelles obligations pour les bornes de recharge ?",
    updated: "2026-07-15",
    lede: "La loi d'orientation des mobilités (LOM) a renforcé les obligations liées à la recharge dans les immeubles et les parkings. Voici ce qu'elle change concrètement pour les copropriétés.",
    sections: [
      {
        h2: "Ce que prévoit la loi LOM",
        paragraphs: [
          "Adoptée en 2019, la loi LOM vise à accélérer le déploiement des bornes de recharge. Elle agit sur trois leviers pour les immeubles : le pré-équipement des parkings, le renforcement du droit à la prise, et l'obligation d'inscrire la question de la recharge à l'ordre du jour d'une assemblée générale.",
          "L'objectif est de lever les principaux freins à l'installation en copropriété, en particulier les blocages liés à la décision collective.",
        ],
      },
      {
        h2: "Le pré-équipement des parkings neufs",
        paragraphs: [
          "Les bâtiments neufs et ceux faisant l'objet d'une rénovation importante et dotés d'un parking doivent être pré-équipés : fourreaux, chemins de câbles et dimensionnement électrique permettant d'installer facilement des bornes par la suite.",
          "Ce pré-équipement réduit fortement le coût d'une installation ultérieure, car l'infrastructure lourde est déjà en place.",
        ],
      },
      {
        h2: "L'obligation d'équipement des parkings existants",
        paragraphs: [
          "Au-delà du neuf, la réglementation impose progressivement un nombre minimal de bornes dans certains parcs de stationnement, notamment les grands parkings de bâtiments non résidentiels. Les seuils et échéances évoluant régulièrement, mieux vaut vérifier ceux en vigueur pour votre situation.",
          "Pour une copropriété résidentielle, l'enjeu principal reste de ne pas entraver le droit à la prise et d'anticiper une éventuelle infrastructure collective.",
        ],
      },
      {
        h2: "Vos obligations en tant que copropriété",
        paragraphs: [
          "Concrètement, une copropriété doit permettre l'exercice du droit à la prise, inscrire la question de la recharge à l'ordre du jour d'une assemblée générale lorsque la demande se présente, et étudier les solutions collectives adaptées à l'immeuble.",
          "Anticiper ces sujets évite les blocages et valorise le bâti : un immeuble prêt pour la recharge est un vrai atout pour les copropriétaires.",
        ],
      },
    ],
    faq: [
      { q: "La copropriété est-elle obligée d'installer des bornes ?", a: "Elle n'est pas tenue d'équiper elle-même toutes les places, mais elle ne peut entraver le droit à la prise et doit inscrire la question de la recharge à l'ordre du jour d'une AG lorsqu'elle est saisie." },
      { q: "Le pré-équipement est-il obligatoire dans le neuf ?", a: "Oui, les parkings des bâtiments neufs ou lourdement rénovés doivent être pré-équipés (fourreaux, chemins de câbles, dimensionnement) pour faciliter l'installation future de bornes." },
      { q: "Qui décide de l'installation collective ?", a: "L'assemblée générale des copropriétaires, à la majorité simple (article 24) pour une infrastructure collective sur les parties communes." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "vote-assemblee-generale-borne", "borne-recharge-immeuble-neuf"],
  },
  {
    slug: "vote-assemblee-generale-borne",
    metaTitle: "Borne de recharge en AG : règles de vote en copropriété | Choisis Ta borne",
    metaDescription:
      "Faut-il un vote en assemblée générale pour installer une borne ? Majorité applicable, différence entre installation individuelle et collective, ordre du jour. Le guide clair.",
    h1: "Assemblée générale : les règles de vote pour une borne de recharge",
    updated: "2026-07-15",
    lede: "Selon que la borne est individuelle ou collective, les règles de vote en assemblée générale diffèrent. Voici comment vous y retrouver pour faire aboutir votre projet.",
    sections: [
      {
        h2: "Installation individuelle : pas de vote, une simple information",
        paragraphs: [
          "Si vous installez une borne pour votre seul usage via le droit à la prise, aucun vote n'est nécessaire pour autoriser les travaux. Le point est inscrit à l'ordre du jour de l'assemblée générale uniquement pour information.",
          "La copropriété ne peut s'opposer à votre projet que pour un motif sérieux et légitime, en saisissant le tribunal — pas par un simple vote défavorable.",
        ],
      },
      {
        h2: "Installation collective : un vote à la majorité simple",
        paragraphs: [
          "Lorsque la copropriété décide d'installer une infrastructure collective de recharge sur les parties communes, la décision se prend en assemblée générale à la majorité de l'article 24, c'est-à-dire la majorité des voix exprimées des copropriétaires présents ou représentés.",
          "Cette majorité simple, plus facile à réunir qu'une majorité qualifiée, a été retenue précisément pour faciliter le déploiement des bornes.",
        ],
      },
      {
        h2: "Bien préparer le passage en AG",
        paragraphs: [
          "Pour maximiser vos chances, préparez le dossier en amont :",
        ],
        list: [
          "Demandez au syndic, par lettre recommandée, l'inscription du point à l'ordre du jour avant l'envoi des convocations.",
          "Joignez une étude technique et un ou plusieurs devis d'installateurs IRVE.",
          "Présentez le plan de financement, prime ADVENIR comprise.",
          "Proposez un opérateur ou installateur et le mode de facturation de l'électricité.",
        ],
      },
      {
        h2: "Après le vote",
        paragraphs: [
          "Une fois la résolution adoptée, la copropriété choisit l'installateur, planifie les travaux, puis fait vérifier l'installation (Consuel) avant la mise en service.",
          "Nos partenaires IRVE accompagnent les copropriétés de l'étude au raccordement, et fournissent des devis clairs à présenter en assemblée.",
        ],
      },
    ],
    faq: [
      { q: "Quelle majorité pour installer une borne collective ?", a: "La majorité de l'article 24, soit la majorité des voix exprimées des copropriétaires présents ou représentés. C'est une majorité simple." },
      { q: "Le syndic peut-il bloquer l'inscription à l'ordre du jour ?", a: "Non. Sur demande d'un copropriétaire, notifiée dans les formes, le syndic doit inscrire la question de la recharge à l'ordre du jour de l'assemblée générale." },
      { q: "Qui finance l'infrastructure collective ?", a: "Le financement est décidé en AG : il peut être mutualisé entre copropriétaires, porté par un opérateur tiers, et soutenu par la prime ADVENIR." },
    ],
    related: ["droit-a-la-prise", "loi-lom-copropriete", "borne-recharge-copropriete", "prime-advenir"],
  },
  {
    slug: "borne-recharge-sans-abonnement",
    metaTitle: "Borne de recharge sans abonnement en copropriété : possible ? | Choisis Ta borne",
    metaDescription:
      "Peut-on installer une borne de recharge sans abonnement mensuel en copropriété ? Oui, en raccordant la borne à votre compteur individuel. Avantages, limites et devis gratuit.",
    h1: "Borne de recharge sans abonnement : est-ce possible ?",
    updated: "2026-07-15",
    lede: "Beaucoup d'offres de recharge en copropriété s'accompagnent d'un abonnement mensuel à un opérateur. Il existe pourtant des solutions sans abonnement récurrent. Voici lesquelles.",
    sections: [
      {
        h2: "Pourquoi certaines offres imposent un abonnement",
        paragraphs: [
          "Les solutions collectives opérées par un tiers incluent la supervision des bornes, la facturation individualisée de l'électricité et la maintenance. Ces services sont facturés sous forme d'un abonnement mensuel, souvent de quelques euros à quelques dizaines d'euros.",
          "C'est pratique en immeuble partagé, mais cela représente un coût récurrent qui s'ajoute au prix de l'électricité consommée.",
        ],
      },
      {
        h2: "La solution sans abonnement : la borne sur votre compteur",
        paragraphs: [
          "En exerçant le droit à la prise, vous pouvez faire raccorder une borne à votre propre compteur individuel. L'électricité consommée apparaît alors sur votre facture habituelle, sans intermédiaire ni abonnement à un opérateur.",
          "Vous êtes propriétaire de la borne, vous maîtrisez votre contrat d'électricité et vous pouvez optimiser la recharge en heures creuses.",
        ],
      },
      {
        h2: "Avantages et limites",
        paragraphs: [
          "Cette formule a des atouts, mais aussi quelques contraintes à connaître :",
        ],
        list: [
          "Avantages : aucun frais mensuel, maîtrise du tarif, propriété de la borne, recharge pilotable en heures creuses.",
          "Limites : le câblage jusqu'à votre compteur peut être long selon l'emplacement, et il n'y a pas de facturation mutualisée entre plusieurs utilisateurs.",
        ],
      },
      {
        h2: "Comment obtenir un devis sans abonnement",
        paragraphs: [
          "Précisez à l'installateur que vous souhaitez une borne raccordée à votre compteur individuel, de préférence une wallbox pilotable. Nos installateurs IRVE partenaires proposent cette formule sans abonnement.",
          "Décrivez votre projet en quelques minutes et recevez jusqu'à 3 devis gratuits à comparer.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on vraiment éviter l'abonnement mensuel ?", a: "Oui, en raccordant la borne à votre compteur individuel via le droit à la prise. Vous payez alors seulement votre électricité, sans abonnement à un opérateur." },
      { q: "Qui paie l'électricité dans ce cas ?", a: "Vous, directement, via votre contrat d'électricité habituel. La consommation de la borne s'ajoute simplement à votre facture." },
      { q: "Faut-il l'accord du syndic ?", a: "Le droit à la prise vous permet d'installer sans vote de l'AG ; vous notifiez seulement le syndic, qui ne peut s'opposer que pour un motif légitime." },
    ],
    related: ["droit-a-la-prise", "borne-recharge-copropriete", "wallbox-connectee", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-parking-exterieur",
    metaTitle: "Borne de recharge en parking extérieur de copropriété | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge sur un parking extérieur de copropriété : borne étanche, câblage enterré, droit à la prise et aides. Le guide complet 2026 et devis gratuit.",
    h1: "Borne de recharge en parking extérieur de copropriété",
    updated: "2026-07-15",
    lede: "Les parkings extérieurs de copropriété ont leurs propres contraintes : intempéries, distance au tableau, câblage enterré. Voici comment y installer une borne dans les règles de l'art.",
    sections: [
      {
        h2: "Les spécificités d'un parking extérieur",
        paragraphs: [
          "Une borne installée dehors est exposée à la pluie, au gel, à la chaleur et aux UV. Il faut donc une borne conçue pour l'extérieur, avec un indice de protection élevé (IP54 au minimum), montée sur un pied ou sur un mur abrité.",
          "La robustesse du matériel et la qualité de l'étanchéité du raccordement conditionnent la fiabilité de l'installation dans le temps.",
        ],
      },
      {
        h2: "Le câblage et le raccordement",
        paragraphs: [
          "Sur un parking extérieur, la distance jusqu'au local électrique est souvent plus importante qu'en sous-sol. Le passage du câble se fait généralement en fourreau enterré, ce qui implique une tranchée.",
          "Une étude du cheminement par un installateur IRVE permet de chiffrer précisément ce poste, qui pèse souvent l'essentiel de l'écart de prix d'un devis à l'autre.",
        ],
      },
      {
        h2: "Droit à la prise et aides",
        paragraphs: [
          "Le droit à la prise s'applique aussi bien en extérieur qu'en sous-sol : vous pouvez équiper votre place à vos frais, sans vote de l'assemblée. La TVA réduite à 5,5 % et la prime ADVENIR (jusqu'à 960 €) réduisent la facture.",
          "Selon le nombre de demandeurs, une solution individuelle ou une infrastructure collective peut être privilégiée.",
        ],
      },
      {
        h2: "Bien choisir sa borne extérieure",
        paragraphs: [
          "Quelques critères à vérifier pour un parking extérieur :",
        ],
        list: [
          "Indice de protection IP54 ou supérieur, résistance aux chocs (IK).",
          "Câble attaché ou prise Type 2 selon votre usage.",
          "Borne pilotable pour programmer la charge en heures creuses.",
          "Verrouillage ou identification pour éviter les usages non autorisés.",
        ],
      },
    ],
    faq: [
      { q: "Une borne classique tient-elle dehors ?", a: "Seules les bornes prévues pour l'extérieur, avec un indice de protection suffisant (IP54 et plus), doivent être installées en extérieur. Une borne d'intérieur n'est pas adaptée." },
      { q: "Faut-il enterrer le câble ?", a: "Le plus souvent oui : le câble chemine en fourreau enterré entre le local électrique et la place, ce qui nécessite une tranchée." },
      { q: "Le froid endommage-t-il la borne ?", a: "Une borne extérieure de qualité supporte le gel. La recharge peut être plus lente par grand froid, mais l'installation reste fiable." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "borne-recharge-immeuble-neuf", "prime-advenir"],
  },
  {
    slug: "borne-recharge-hlm",
    metaTitle: "Borne de recharge en HLM et logement social : le guide | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge en HLM : droit à la prise du locataire, rôle du bailleur social, prime ADVENIR. Toutes les solutions pour recharger en logement social.",
    h1: "Borne de recharge en HLM : quelles solutions ?",
    updated: "2026-07-15",
    lede: "Recharger sa voiture électrique quand on est locataire d'un logement social est tout à fait possible. Voici les droits des locataires et le rôle du bailleur.",
    sections: [
      {
        h2: "Le droit à la prise s'applique aussi en HLM",
        paragraphs: [
          "Le locataire du parc social bénéficie du droit à la prise : il peut demander l'installation d'une borne sur la place de stationnement dont il a l'usage. La démarche passe par le bailleur, qui ne peut s'y opposer que pour un motif sérieux et légitime.",
          "Pour une solution individuelle, l'installation est en principe à la charge du demandeur, avec le bénéfice des aides.",
        ],
      },
      {
        h2: "Le rôle du bailleur social",
        paragraphs: [
          "Le bailleur peut aussi prendre l'initiative d'une infrastructure collective pour équiper le parking de la résidence. C'est souvent la solution la plus cohérente à l'échelle d'un immeuble social.",
          "La concertation entre locataires et bailleur facilite le choix de la puissance, du nombre de points de charge et du mode de facturation.",
        ],
      },
      {
        h2: "Financement et aides",
        paragraphs: [
          "La prime ADVENIR soutient l'installation de bornes en logement social, en individuel comme en collectif. La TVA réduite s'applique sur la pose, et les coûts d'une infrastructure collective peuvent être répartis ou portés par un opérateur.",
          "Ces dispositifs rendent la recharge accessible même en logement social.",
        ],
      },
      {
        h2: "Les étapes pour recharger en HLM",
        paragraphs: [
          "Pour avancer sereinement :",
        ],
        list: [
          "Contactez votre bailleur pour l'informer de votre projet.",
          "Demandez un devis à un installateur IRVE (solution individuelle) ou proposez une infrastructure collective.",
          "Vérifiez l'éligibilité à la prime ADVENIR.",
          "Faites réaliser la pose et la mise en service par un professionnel certifié.",
        ],
      },
    ],
    faq: [
      { q: "Un locataire HLM peut-il installer une borne ?", a: "Oui, grâce au droit à la prise, en informant le bailleur. Celui-ci ne peut s'opposer que pour un motif sérieux et légitime." },
      { q: "Qui paie l'installation en HLM ?", a: "Pour une solution individuelle, le demandeur, avec l'aide de la prime ADVENIR et de la TVA réduite. Pour une infrastructure collective, le financement est défini avec le bailleur." },
      { q: "Le bailleur peut-il refuser ?", a: "Seulement pour un motif sérieux et légitime (impossibilité technique, travaux déjà prévus). Un refus de principe n'est pas recevable." },
    ],
    related: ["droit-a-la-prise", "borne-recharge-locataire", "prime-advenir", "borne-recharge-copropriete"],
  },
  {
    slug: "aides-achat-voiture-electrique",
    metaTitle: "Aides à l'achat d'une voiture électrique en 2026 | Choisis Ta borne",
    metaDescription:
      "Bonus écologique, leasing social, aides locales : le point sur les aides à l'achat d'une voiture électrique en 2026 pour les particuliers, et comment les cumuler.",
    h1: "Aides à l'achat d'une voiture électrique : le guide 2026",
    updated: "2026-07-15",
    lede: "Plusieurs dispositifs peuvent réduire le prix d'achat d'une voiture électrique. Voici les principales aides pour les particuliers en 2026 et leurs conditions.",
    sections: [
      {
        h2: "Le bonus écologique",
        paragraphs: [
          "Le bonus écologique est l'aide principale de l'État pour l'achat ou la location longue durée d'un véhicule électrique neuf. Il est soumis à des conditions de prix du véhicule et, désormais, de revenus du foyer, et son montant est révisé chaque année par arrêté.",
          "Il est généralement déduit directement du prix par le vendeur, ou remboursé après l'achat sur présentation des justificatifs.",
        ],
      },
      {
        h2: "Le leasing social et autres dispositifs",
        paragraphs: [
          "Selon les campagnes, un dispositif de location longue durée à tarif réduit peut être proposé aux ménages modestes pour accéder à un VE neuf. La prime à la conversion, elle, a beaucoup évolué et peut être suspendue : vérifiez sa disponibilité au moment de votre achat.",
          "Ces dispositifs étant régulièrement ajustés, appuyez-vous toujours sur le barème officiel en vigueur.",
        ],
      },
      {
        h2: "Les aides locales",
        paragraphs: [
          "Régions, métropoles et communes proposent parfois des aides complémentaires, souvent cumulables avec le bonus national, en particulier dans les zones à faibles émissions. L'Île-de-France en est un bon exemple.",
          "Renseignez-vous auprès de votre collectivité : ces aides changent fréquemment.",
        ],
      },
      {
        h2: "Et l'aide pour la borne de recharge ?",
        paragraphs: [
          "Au-delà du véhicule, l'installation de votre borne bénéficie de la TVA réduite à 5,5 % et, en copropriété, de la prime ADVENIR jusqu'à 960 €. Recharger à domicile est ce qui rend l'électrique vraiment économique.",
          "Nos installateurs IRVE intègrent ces aides directement au devis.",
        ],
      },
    ],
    faq: [
      { q: "Le bonus écologique existe-t-il encore en 2026 ?", a: "Oui, mais ses conditions (prix, revenus) et son montant sont revus chaque année. Consultez le barème officiel en vigueur avant l'achat." },
      { q: "Les aides sont-elles cumulables ?", a: "Le bonus national se cumule souvent avec des aides locales et, pour la borne, avec la TVA à 5,5 % et la prime ADVENIR." },
      { q: "Y a-t-il des conditions de revenus ?", a: "Oui, le montant du bonus écologique est désormais modulé selon le revenu fiscal de référence du foyer." },
    ],
    related: ["prime-advenir", "aides-borne-de-recharge", "bonus-ecologique", "credit-impot-borne-recharge"],
  },
  {
    slug: "bonus-ecologique",
    metaTitle: "Bonus écologique 2026 : montant et conditions | Choisis Ta borne",
    metaDescription:
      "Le bonus écologique aide à l'achat d'une voiture électrique neuve. Conditions de prix, de revenus et montant 2026 : ce qu'il faut savoir avant d'acheter.",
    h1: "Bonus écologique : montant et conditions en 2026",
    updated: "2026-07-15",
    lede: "Le bonus écologique est l'aide de référence pour l'achat d'une voiture électrique neuve. Voici son fonctionnement et ses conditions actualisées.",
    sections: [
      {
        h2: "À quoi sert le bonus écologique",
        paragraphs: [
          "Le bonus écologique est une subvention destinée à l'achat ou à la location longue durée d'un véhicule électrique neuf respectant un plafond de prix et des critères environnementaux. Son objectif est de rendre l'électrique plus accessible.",
          "Il concerne principalement les particuliers, avec des règles adaptées selon les catégories de véhicules.",
        ],
      },
      {
        h2: "Les conditions à respecter",
        paragraphs: [
          "Plusieurs conditions encadrent le bonus :",
        ],
        list: [
          "Un prix d'achat du véhicule sous un plafond fixé par l'État.",
          "Un véhicule électrique éligible, respectant un score environnemental.",
          "Un montant modulé selon le revenu fiscal de référence du foyer.",
          "Un engagement à ne pas revendre le véhicule avant un certain délai.",
        ],
      },
      {
        h2: "Quel montant en 2026 ?",
        paragraphs: [
          "Le montant du bonus dépend de votre situation et est révisé chaque année. Les plafonds de prix et les barèmes évoluant régulièrement, consultez toujours l'arrêté en vigueur au moment de votre achat pour connaître le montant exact.",
          "Les foyers les plus modestes bénéficient en général du montant le plus élevé.",
        ],
      },
      {
        h2: "Comment en bénéficier",
        paragraphs: [
          "Le plus simple est que le concessionnaire déduise le bonus du prix à l'achat. À défaut, vous pouvez en demander le remboursement en fournissant les justificatifs requis.",
          "Pensez aussi aux aides pour la borne : TVA 5,5 % et prime ADVENIR en copropriété.",
        ],
      },
    ],
    faq: [
      { q: "Quel est le montant du bonus en 2026 ?", a: "Il est modulé selon vos revenus et révisé chaque année. Référez-vous au barème officiel en vigueur, car montants et plafonds changent régulièrement." },
      { q: "Une voiture d'occasion est-elle éligible ?", a: "Le bonus écologique cible avant tout les véhicules neufs. Les règles pour l'occasion évoluent : vérifiez le dispositif en cours." },
      { q: "Est-il cumulable avec une aide locale ?", a: "Oui, dans la plupart des cas, le bonus national se cumule avec les aides des régions, métropoles ou communes." },
    ],
    related: ["aides-achat-voiture-electrique", "prime-advenir", "forfait-mobilites-durables", "aides-borne-de-recharge"],
  },
  {
    slug: "aides-voiture-electrique-ile-de-france",
    metaTitle: "Aides voiture électrique en Île-de-France 2026 | Choisis Ta borne",
    metaDescription:
      "Quelles aides pour passer à l'électrique en Île-de-France ? Dispositifs régionaux et métropolitains, ZFE du Grand Paris, aides à la borne. Le point 2026.",
    h1: "Aides à la voiture électrique en Île-de-France",
    updated: "2026-07-15",
    lede: "En Île-de-France, aux aides nationales s'ajoutent des dispositifs régionaux et métropolitains, souvent liés à la zone à faibles émissions du Grand Paris.",
    sections: [
      {
        h2: "Les aides nationales, valables partout",
        paragraphs: [
          "Le bonus écologique pour l'achat d'un VE et les aides à la borne (TVA réduite à 5,5 %, prime ADVENIR en copropriété) s'appliquent aussi en Île-de-France.",
          "Ce sont le socle des aides pour tout automobiliste francilien.",
        ],
      },
      {
        h2: "Les dispositifs régionaux et métropolitains",
        paragraphs: [
          "La Région Île-de-France et la Métropole du Grand Paris ont proposé des aides à l'acquisition ou à la conversion vers un véhicule propre, souvent liées à la ZFE et à des conditions de ressources ou d'usage.",
          "Ces dispositifs et leurs montants évoluant régulièrement, vérifiez ceux en vigueur auprès de la Région et de la Métropole.",
        ],
      },
      {
        h2: "La ZFE et la recharge",
        paragraphs: [
          "La zone à faibles émissions du Grand Paris restreint la circulation des véhicules les plus polluants selon leur vignette Crit'Air. Les véhicules électriques n'y sont pas concernés, ce qui renforce l'intérêt de passer à l'électrique.",
          "Encore faut-il pouvoir recharger facilement : d'où l'importance d'une borne à domicile.",
        ],
      },
      {
        h2: "Installer sa borne en Île-de-France",
        paragraphs: [
          "La région compte une forte proportion de copropriétés : le droit à la prise et la prime ADVENIR y sont particulièrement utiles pour équiper sa place de parking.",
          "Nos installateurs IRVE couvrent toute l'Île-de-France et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Quelles aides régionales en Île-de-France ?", a: "La Région et la Métropole du Grand Paris ont proposé des aides à l'achat ou à la conversion, souvent liées à la ZFE. Vérifiez les dispositifs en cours, car ils évoluent." },
      { q: "La ZFE oblige-t-elle à passer à l'électrique ?", a: "Non, mais elle restreint les véhicules les plus polluants. L'électrique n'est pas concerné par ces restrictions." },
      { q: "Les aides sont-elles cumulables ?", a: "Oui, les aides nationales se cumulent généralement avec les dispositifs régionaux et métropolitains, ainsi qu'avec les aides à la borne." },
    ],
    related: ["aides-achat-voiture-electrique", "droit-a-la-prise", "prime-advenir", "borne-recharge-copropriete"],
  },
  {
    slug: "forfait-mobilites-durables",
    metaTitle: "Forfait mobilités durables : en profiter pour son VE | Choisis Ta borne",
    metaDescription:
      "Le forfait mobilités durables permet à un employeur de prendre en charge une partie des trajets domicile-travail. Fonctionne-t-il pour la voiture électrique ? Le guide.",
    h1: "Forfait mobilités durables : comment en bénéficier ?",
    updated: "2026-07-15",
    lede: "Le forfait mobilités durables (FMD) permet à votre employeur de participer à vos trajets domicile-travail avec des modes plus propres. Voici ce qu'il couvre.",
    sections: [
      {
        h2: "Qu'est-ce que le forfait mobilités durables",
        paragraphs: [
          "Le FMD est un dispositif facultatif par lequel un employeur peut prendre en charge tout ou partie des frais de trajet domicile-travail effectués avec des modes de déplacement plus durables. Cette prise en charge est exonérée d'impôt et de cotisations dans la limite d'un plafond annuel révisé régulièrement.",
          "Il couvre notamment le vélo, le covoiturage et certains usages partagés de véhicules électriques.",
        ],
      },
      {
        h2: "S'applique-t-il à la voiture électrique ?",
        paragraphs: [
          "Le covoiturage et certains services de mobilité partagée en véhicule électrique sont éligibles. En revanche, l'usage individuel de sa propre voiture, même électrique, n'entre en principe pas dans le FMD.",
          "Les modalités précises dépendent de l'accord d'entreprise : renseignez-vous auprès de votre employeur.",
        ],
      },
      {
        h2: "Quel montant",
        paragraphs: [
          "La prise en charge peut atteindre plusieurs centaines d'euros par an, dans la limite du plafond exonéré. Elle est, sous conditions, cumulable avec la prise en charge des abonnements de transport en commun.",
          "Le plafond étant réévalué régulièrement, vérifiez le montant en vigueur.",
        ],
      },
      {
        h2: "Comment en profiter",
        paragraphs: [
          "Parlez-en à votre employeur ou à votre service RH, et conservez les justificatifs demandés. Le FMD vient compléter les aides à l'achat du véhicule et à l'installation de la borne.",
          "C'est un levier souvent méconnu pour réduire le coût de la mobilité électrique.",
        ],
      },
    ],
    faq: [
      { q: "Le FMD couvre-t-il ma voiture électrique personnelle ?", a: "L'usage individuel classique n'est en principe pas éligible ; le covoiturage et certains VE partagés le sont. Vérifiez l'accord de votre entreprise." },
      { q: "Quel est le plafond exonéré ?", a: "Plusieurs centaines d'euros par an, dans une limite révisée régulièrement. Consultez le plafond en vigueur." },
      { q: "L'employeur est-il obligé de le proposer ?", a: "Non, le forfait mobilités durables est un dispositif facultatif pour l'employeur." },
    ],
    related: ["aides-achat-voiture-electrique", "bonus-ecologique", "cout-recharge-voiture-electrique", "prime-advenir"],
  },
  {
    slug: "prix-borne-recharge-copropriete",
    metaTitle: "Prix d'une borne de recharge en copropriété (2026) | Choisis Ta borne",
    metaDescription:
      "Combien coûte une borne de recharge en copropriété ? Prix d'une installation individuelle (droit à la prise) et d'une infrastructure collective, aides déduites.",
    h1: "Prix d'une borne de recharge en copropriété",
    updated: "2026-07-15",
    lede: "Le coût d'une borne en copropriété dépend surtout du type de solution — individuelle ou collective — et de la distance de câblage. Voici les fourchettes réelles.",
    sections: [
      {
        h2: "Le prix d'une borne individuelle (droit à la prise)",
        paragraphs: [
          "Pour équiper votre seule place via le droit à la prise, comptez généralement de 1 200 à 2 000 € posée, selon la distance entre le local électrique et votre emplacement et la complexité du passage de câble.",
          "La TVA réduite à 5,5 % et la prime ADVENIR (jusqu'à 960 €) viennent en déduction de ce montant.",
        ],
      },
      {
        h2: "Le prix d'une infrastructure collective",
        paragraphs: [
          "Une infrastructure collective (colonne montante dédiée, tableau, chemins de câbles) représente un investissement plus élevé globalement, mais mutualisé entre les utilisateurs. Elle est souvent portée par un opérateur ou financée par la copropriété.",
          "La prime ADVENIR soutient spécifiquement ces infrastructures collectives, ce qui réduit fortement le reste à charge.",
        ],
      },
      {
        h2: "Ce qui fait varier la facture",
        paragraphs: [
          "Plusieurs postes pèsent sur le devis :",
        ],
        list: [
          "La distance jusqu'au local technique ou au tableau.",
          "Un emplacement en sous-sol ou en parking extérieur.",
          "Le nombre de points de charge à prévoir.",
          "La supervision et la facturation individualisée.",
          "Les éventuels travaux de génie civil (tranchée, percements).",
        ],
      },
      {
        h2: "Réduire le coût",
        paragraphs: [
          "Si plusieurs copropriétaires sont intéressés, une infrastructure collective mutualise les frais et devient souvent plus avantageuse par place. La prime ADVENIR et la comparaison de 3 devis IRVE font le reste.",
          "Nos partenaires établissent des devis clairs, à présenter en assemblée générale si besoin.",
        ],
      },
    ],
    faq: [
      { q: "Combien coûte une borne individuelle en copropriété ?", a: "Généralement de 1 200 à 2 000 € posée selon la distance de câblage, avant TVA à 5,5 % et prime ADVENIR." },
      { q: "Qui paie l'infrastructure collective ?", a: "Son financement est décidé en assemblée générale : mutualisé, porté par un opérateur, et soutenu par la prime ADVENIR." },
      { q: "Peut-on avoir une borne en copro sans abonnement ?", a: "Oui, en raccordant une borne individuelle à votre compteur via le droit à la prise, sans opérateur tiers." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "prime-advenir", "prix-borne-de-recharge"],
  },
  {
    slug: "prix-kwh-electricite",
    metaTitle: "Prix du kWh pour recharger sa voiture électrique en 2026 | Choisis Ta borne",
    metaDescription:
      "Quel est le prix du kWh pour recharger sa voiture électrique à domicile ? Ce qui fait varier le tarif, l'intérêt des heures creuses et le coût réel aux 100 km.",
    h1: "Prix du kWh : combien coûte la recharge à domicile ?",
    updated: "2026-07-15",
    lede: "Le coût de la recharge dépend directement du prix du kilowattheure de votre contrat d'électricité. Voici ce qui le fait varier et comment le réduire.",
    sections: [
      {
        h2: "Le prix du kWh à domicile",
        paragraphs: [
          "Le prix du kWh dépend de votre contrat d'électricité : tarif réglementé ou offre de marché, option base ou heures pleines / heures creuses. Ce tarif évolue régulièrement au fil des révisions.",
          "C'est ce prix, appliqué à l'énergie réellement consommée par la voiture, qui détermine le coût de votre recharge.",
        ],
      },
      {
        h2: "Ce qui fait varier le prix du kWh",
        paragraphs: [
          "Plusieurs facteurs entrent en jeu :",
        ],
        list: [
          "Le fournisseur et le type de contrat souscrit.",
          "L'option tarifaire : base, ou heures pleines / heures creuses.",
          "La puissance souscrite de votre compteur.",
          "Les taxes et les évolutions réglementaires.",
        ],
      },
      {
        h2: "L'intérêt des heures creuses",
        paragraphs: [
          "En option heures pleines / heures creuses, recharger la nuit réduit nettement le coût. Une borne pilotable programme automatiquement la charge sur ces plages, sans que vous ayez à y penser.",
          "C'est le principal levier pour payer sa recharge moins cher à domicile.",
        ],
      },
      {
        h2: "Le coût réel aux 100 km",
        paragraphs: [
          "À domicile, en heures creuses, la recharge revient à quelques euros aux 100 km — bien en dessous d'un plein d'essence et des tarifs des bornes publiques rapides.",
          "C'est cet écart qui rend la voiture électrique économique à l'usage.",
        ],
      },
    ],
    faq: [
      { q: "Quel est le prix moyen du kWh ?", a: "Il dépend de votre contrat et évolue régulièrement. L'option heures creuses permet de recharger à un tarif plus bas la nuit." },
      { q: "Recharger en heures creuses est-il vraiment avantageux ?", a: "Oui, l'écart de prix avec les heures pleines est significatif sur un usage quotidien." },
      { q: "Combien coûte la recharge aux 100 km ?", a: "À domicile en heures creuses, quelques euros aux 100 km, très loin du coût de l'essence ou des bornes rapides publiques." },
    ],
    related: ["cout-recharge-voiture-electrique", "heures-creuses-recharge-voiture-electrique", "wallbox-connectee", "borne-recharge-panneaux-solaires"],
  },
  {
    slug: "abonnement-borne-de-recharge",
    metaTitle: "Abonnement pour borne de recharge : est-ce nécessaire ? | Choisis Ta borne",
    metaDescription:
      "Faut-il un abonnement pour une borne de recharge ? Différence entre borne à domicile sur son compteur et solution opérée en copropriété. Le point sur les coûts.",
    h1: "Abonnement borne de recharge : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Certaines offres de recharge s'accompagnent d'un abonnement, d'autres non. Tout dépend de qui exploite la borne. Voici comment y voir clair.",
    sections: [
      {
        h2: "À domicile : pas d'abonnement dédié",
        paragraphs: [
          "Une borne installée chez vous et raccordée à votre compteur ne nécessite aucun abonnement supplémentaire : vous payez l'électricité consommée sur votre contrat habituel. Seul compte l'abonnement électrique que vous avez déjà.",
          "C'est le cas le plus courant pour une maison individuelle ou une borne individuelle en copropriété.",
        ],
      },
      {
        h2: "En copropriété opérée : un abonnement mensuel",
        paragraphs: [
          "Lorsqu'une infrastructure collective est gérée par un opérateur tiers, celui-ci facture ses services (supervision, facturation, maintenance) sous forme d'un abonnement mensuel. C'est pratique en immeuble partagé, mais cela ajoute un coût récurrent.",
          "Le montant varie selon l'opérateur et les services inclus.",
        ],
      },
      {
        h2: "Que couvre l'abonnement d'un opérateur",
        paragraphs: [
          "En général, l'abonnement finance :",
        ],
        list: [
          "La supervision et le pilotage des bornes.",
          "La facturation individualisée de l'électricité.",
          "La maintenance et l'assistance.",
          "Parfois la location de la borne elle-même.",
        ],
      },
      {
        h2: "Comment éviter ou réduire l'abonnement",
        paragraphs: [
          "Pour éviter tout abonnement, optez pour une borne individuelle raccordée à votre compteur via le droit à la prise. Comparez aussi les offres des opérateurs si une solution collective s'impose.",
          "Nos installateurs IRVE proposent des formules sans abonnement récurrent.",
        ],
      },
    ],
    faq: [
      { q: "Faut-il un abonnement pour une borne à domicile ?", a: "Non. Raccordée à votre compteur, la borne n'ajoute aucun abonnement : vous payez seulement l'électricité consommée." },
      { q: "Combien coûte l'abonnement d'un opérateur ?", a: "Cela varie selon l'opérateur et les services inclus (supervision, facturation, maintenance). C'est un coût mensuel récurrent." },
      { q: "Peut-on éviter l'abonnement en copropriété ?", a: "Oui, avec une borne individuelle sur votre compteur via le droit à la prise, sans opérateur tiers." },
    ],
    related: ["borne-recharge-sans-abonnement", "cout-recharge-voiture-electrique", "wallbox-connectee", "borne-recharge-copropriete"],
  },
  {
    slug: "heures-creuses-recharge-voiture-electrique",
    metaTitle: "Heures creuses et recharge de voiture électrique en 2026 | Choisis Ta borne",
    metaDescription:
      "Recharger sa voiture électrique en heures creuses fait baisser la facture. Comment ça marche, l'évolution des plages d'heures creuses et le rôle de la borne pilotable.",
    h1: "Recharger sa voiture électrique en heures creuses",
    updated: "2026-07-15",
    lede: "Programmer la recharge sur les heures creuses est le moyen le plus simple de réduire le coût de la recharge à domicile. Voici comment en tirer parti.",
    sections: [
      {
        h2: "Pourquoi recharger en heures creuses",
        paragraphs: [
          "En option heures pleines / heures creuses, le prix du kWh est plus bas pendant les plages d'heures creuses. Une charge complète effectuée la nuit coûte donc nettement moins cher qu'en heures pleines ou sur une borne publique.",
          "Comme la voiture reste branchée plusieurs heures, il est facile de caler la charge sur ces créneaux avantageux.",
        ],
      },
      {
        h2: "L'évolution des plages d'heures creuses",
        paragraphs: [
          "Les plages d'heures creuses ont évolué, avec l'apparition de créneaux supplémentaires en journée à certaines périodes de l'année. Vos plages exactes figurent sur votre facture ou dans votre espace client.",
          "Vérifiez-les pour programmer la borne au bon moment et maximiser l'économie.",
        ],
      },
      {
        h2: "Le rôle de la borne pilotable",
        paragraphs: [
          "Une wallbox connectée programme automatiquement la charge sur vos heures creuses et peut se synchroniser avec votre contrat. Le délestage dynamique évite par ailleurs de dépasser la puissance souscrite.",
          "Vous rechargez au meilleur tarif sans avoir à surveiller quoi que ce soit.",
        ],
      },
      {
        h2: "Combien peut-on économiser",
        paragraphs: [
          "L'écart entre heures pleines et heures creuses est significatif. Sur un usage quotidien, l'économie annuelle réalisée en rechargeant la nuit est loin d'être négligeable.",
          "C'est, avec l'installation d'une borne dédiée, le meilleur moyen de réduire le coût de la recharge.",
        ],
      },
    ],
    faq: [
      { q: "Quand ont lieu les heures creuses ?", a: "Elles dépendent de votre contrat et de votre zone ; vos plages figurent sur votre facture. Elles peuvent inclure des créneaux de nuit et, selon les périodes, de journée." },
      { q: "Faut-il une borne pilotable ?", a: "Ce n'est pas obligatoire, mais une borne pilotable programme la charge automatiquement sur les heures creuses et évite les dépassements de puissance." },
      { q: "L'économie est-elle réelle ?", a: "Oui, l'écart de prix HP/HC appliqué à une recharge quotidienne représente une économie annuelle notable." },
    ],
    related: ["cout-recharge-voiture-electrique", "prix-kwh-electricite", "wallbox-connectee", "borne-recharge-panneaux-solaires"],
  },
  {
    slug: "autonomie-voiture-electrique",
    metaTitle: "Autonomie d'une voiture électrique : ce qu'il faut savoir | Choisis Ta borne",
    metaDescription:
      "Quelle est l'autonomie réelle d'une voiture électrique ? Ce qui la fait varier (froid, vitesse, conduite), autonomie WLTP vs réelle, et comment l'optimiser au quotidien.",
    h1: "Autonomie d'une voiture électrique : le guide",
    updated: "2026-07-15",
    lede: "L'autonomie est l'une des premières questions au moment de passer à l'électrique. Voici ce qu'elle recouvre vraiment et ce qui la fait varier.",
    sections: [
      {
        h2: "Autonomie WLTP et autonomie réelle",
        paragraphs: [
          "L'autonomie annoncée par les constructeurs suit le cycle normalisé WLTP. Elle donne un repère utile pour comparer les modèles, mais l'autonomie réelle est généralement inférieure, surtout sur autoroute.",
          "La plupart des modèles récents offrent une autonomie WLTP souvent comprise entre 300 et 600 km selon la taille de la batterie et le segment.",
        ],
      },
      {
        h2: "Ce qui fait varier l'autonomie",
        paragraphs: [
          "Plusieurs facteurs jouent :",
        ],
        list: [
          "La température : le froid réduit temporairement l'autonomie.",
          "La vitesse : l'autoroute consomme plus que la ville.",
          "Le style de conduite et l'usage du chauffage ou de la climatisation.",
          "Le relief, la charge transportée et la pression des pneus.",
        ],
      },
      {
        h2: "Optimiser son autonomie au quotidien",
        paragraphs: [
          "Anticiper le freinage pour profiter de la régénération, préconditionner l'habitacle pendant que la voiture est branchée et rouler à vitesse modérée sur autoroute permettent de préserver l'autonomie.",
          "Recharger à domicile chaque nuit rend l'autonomie quasi illimitée pour les trajets quotidiens : vous partez toujours avec une batterie pleine.",
        ],
      },
      {
        h2: "L'autonomie suffit-elle pour vous ?",
        paragraphs: [
          "Pour la grande majorité des trajets domicile-travail et des déplacements du quotidien, l'autonomie des voitures électriques actuelles est largement suffisante.",
          "Pour les longs trajets, le réseau de recharge rapide et une borne à domicile pour partir chargé règlent l'essentiel des situations.",
        ],
      },
    ],
    faq: [
      { q: "Quelle est l'autonomie moyenne d'une voiture électrique ?", a: "Souvent entre 300 et 600 km en cycle WLTP selon la batterie et le modèle ; l'autonomie réelle est un peu inférieure, surtout sur autoroute." },
      { q: "Le froid réduit-il beaucoup l'autonomie ?", a: "Oui, temporairement. Préconditionner la batterie et l'habitacle pendant la charge limite cet impact." },
      { q: "Comment gagner en autonomie ?", a: "Rouler à vitesse modérée, anticiper le freinage régénératif, préconditionner branché et bien gonfler les pneus." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "voiture-electrique-hiver", "cout-recharge-voiture-electrique", "choisir-voiture-electrique"],
  },
  {
    slug: "cout-entretien-voiture-electrique",
    metaTitle: "Coût d'entretien d'une voiture électrique : moins cher ? | Choisis Ta borne",
    metaDescription:
      "L'entretien d'une voiture électrique coûte-t-il moins cher qu'un thermique ? Moins de pièces d'usure, pas de vidange, freins préservés : le point sur les économies.",
    h1: "Combien coûte l'entretien d'une voiture électrique ?",
    updated: "2026-07-15",
    lede: "Moins de pièces mécaniques, pas de vidange : l'entretien d'une voiture électrique est réputé plus économique. Voici pourquoi, et ce qui reste à surveiller.",
    sections: [
      {
        h2: "Pourquoi l'entretien est plus léger",
        paragraphs: [
          "Un moteur électrique compte beaucoup moins de pièces mobiles qu'un moteur thermique. Pas de vidange, pas de courroie de distribution, pas de filtres à huile ni d'embrayage classique : de nombreux postes d'entretien disparaissent.",
          "Résultat : les révisions sont généralement plus simples et moins fréquentes.",
        ],
      },
      {
        h2: "Des freins qui durent plus longtemps",
        paragraphs: [
          "Le freinage régénératif, qui ralentit la voiture en récupérant de l'énergie, sollicite beaucoup moins les plaquettes et disques. Ceux-ci s'usent donc plus lentement que sur un véhicule thermique.",
          "C'est une source d'économie souvent sous-estimée.",
        ],
      },
      {
        h2: "Ce qui reste à entretenir",
        paragraphs: [
          "Certains postes demeurent :",
        ],
        list: [
          "Pneumatiques, à surveiller car le couple immédiat peut les user.",
          "Liquide de refroidissement de la batterie et de l'électronique.",
          "Filtre d'habitacle, essuie-glaces, direction et suspensions.",
          "Contrôles de sécurité et mises à jour logicielles.",
        ],
      },
      {
        h2: "Et la batterie ?",
        paragraphs: [
          "La batterie est le composant clé. Elle bénéficie généralement d'une garantie constructeur de plusieurs années ou d'un kilométrage élevé, et sa capacité se dégrade lentement avec un usage normal.",
          "Au global, le budget entretien d'une électrique est le plus souvent inférieur à celui d'un thermique équivalent.",
        ],
      },
    ],
    faq: [
      { q: "L'entretien d'une électrique est-il vraiment moins cher ?", a: "Le plus souvent oui : pas de vidange, moins de pièces d'usure et des freins préservés par la régénération réduisent la facture." },
      { q: "Faut-il changer la batterie régulièrement ?", a: "Non. La batterie est garantie plusieurs années / un kilométrage élevé et se dégrade lentement en usage normal." },
      { q: "Quels postes restent à surveiller ?", a: "Surtout les pneus, le liquide de refroidissement, le filtre d'habitacle et les contrôles de sécurité." },
    ],
    related: ["cout-reel-voiture-electrique", "voiture-electrique-ou-thermique", "cout-recharge-voiture-electrique", "entretien-borne-recharge"],
  },
  {
    slug: "cout-reel-voiture-electrique",
    metaTitle: "Combien coûte réellement une voiture électrique ? | Choisis Ta borne",
    metaDescription:
      "Prix d'achat, aides, recharge, entretien, assurance : le coût réel d'une voiture électrique sur la durée. Comparaison avec le thermique et leviers d'économie.",
    h1: "Combien coûte réellement une voiture électrique ?",
    updated: "2026-07-15",
    lede: "Au-delà du prix affiché, c'est le coût total sur la durée qui compte. Voici comment évaluer le vrai budget d'une voiture électrique.",
    sections: [
      {
        h2: "Le prix d'achat, aides déduites",
        paragraphs: [
          "À l'achat, une électrique reste souvent plus chère qu'un thermique équivalent, mais le bonus écologique et les aides locales réduisent l'écart. Sur le marché de l'occasion, les prix se sont nettement rapprochés.",
          "C'est le point de départ du calcul, pas la conclusion.",
        ],
      },
      {
        h2: "Le coût d'usage, bien plus bas",
        paragraphs: [
          "C'est là que l'électrique reprend l'avantage : recharge à domicile en heures creuses à quelques euros aux 100 km, entretien allégé, et fiscalité souvent favorable. Sur plusieurs années, ces économies s'accumulent.",
          "Plus vous roulez, plus l'électrique devient intéressante à l'usage.",
        ],
      },
      {
        h2: "Les postes à intégrer",
        paragraphs: [
          "Pour un calcul complet, additionnez :",
        ],
        list: [
          "L'achat, aides déduites, et la décote éventuelle.",
          "La recharge (idéalement à domicile en heures creuses).",
          "L'entretien et l'assurance.",
          "Le coût d'installation d'une borne, amorti sur la durée.",
        ],
      },
      {
        h2: "Le rôle décisif de la recharge à domicile",
        paragraphs: [
          "Recharger chez soi, en heures creuses, est le principal levier d'économie : le coût au kilomètre chute par rapport à l'essence et aux bornes publiques rapides.",
          "Une borne à domicile, éligible à la TVA 5,5 % et à la prime ADVENIR en copropriété, se rentabilise d'autant plus vite.",
        ],
      },
    ],
    faq: [
      { q: "Une électrique revient-elle moins cher qu'un thermique ?", a: "Sur la durée, souvent oui : le surcoût à l'achat est compensé par une recharge et un entretien bien moins coûteux, surtout si vous roulez beaucoup." },
      { q: "Quel est le principal levier d'économie ?", a: "La recharge à domicile en heures creuses, qui ramène le coût du kilomètre à quelques euros aux 100 km." },
      { q: "Faut-il compter le prix de la borne ?", a: "Oui, mais amorti sur plusieurs années et diminué des aides (TVA 5,5 %, ADVENIR), il pèse peu face aux économies d'usage." },
    ],
    related: ["cout-recharge-voiture-electrique", "cout-entretien-voiture-electrique", "aides-achat-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "voiture-electrique-hiver",
    metaTitle: "Voiture électrique en hiver : autonomie et conseils | Choisis Ta borne",
    metaDescription:
      "Le froid réduit l'autonomie d'une voiture électrique. Pourquoi, de combien, et comment limiter l'impact : préconditionnement, recharge, conduite. Nos conseils.",
    h1: "Voiture électrique en hiver : bien gérer le froid",
    updated: "2026-07-15",
    lede: "Le froid affecte temporairement l'autonomie et la recharge d'une voiture électrique. Avec quelques réflexes, l'impact reste très gérable.",
    sections: [
      {
        h2: "Pourquoi le froid réduit l'autonomie",
        paragraphs: [
          "À basse température, la chimie de la batterie est moins performante et le chauffage de l'habitacle consomme de l'énergie. L'autonomie baisse donc temporairement en hiver, avant de revenir à la normale au retour des beaux jours.",
          "Cette baisse est réversible : elle n'abîme pas la batterie.",
        ],
      },
      {
        h2: "Préconditionner, le bon réflexe",
        paragraphs: [
          "Préchauffer la batterie et l'habitacle pendant que la voiture est encore branchée est la meilleure parade : la voiture part à température sans puiser dans son autonomie.",
          "La plupart des modèles permettent de programmer ce préconditionnement à l'heure de départ.",
        ],
      },
      {
        h2: "Recharge et conduite par temps froid",
        paragraphs: [
          "Quelques habitudes limitent l'impact du froid :",
        ],
        list: [
          "Recharger la nuit, branché, pour partir chaud le matin.",
          "Utiliser le volant et les sièges chauffants plutôt que tout le chauffage.",
          "Anticiper le freinage pour profiter de la régénération.",
          "Garer la voiture à l'abri quand c'est possible.",
        ],
      },
      {
        h2: "L'atout d'une borne à domicile",
        paragraphs: [
          "Avec une borne à domicile, vous rechargez chaque nuit et préconditionnez facilement : l'hiver devient un non-sujet pour vos trajets quotidiens.",
          "C'est le confort d'une voiture toujours prête, à température, chaque matin.",
        ],
      },
    ],
    faq: [
      { q: "De combien baisse l'autonomie en hiver ?", a: "La baisse est temporaire et variable selon la température et l'usage du chauffage. Le préconditionnement branché la limite fortement." },
      { q: "Le froid abîme-t-il la batterie ?", a: "Non, la baisse d'autonomie liée au froid est réversible et n'endommage pas la batterie." },
      { q: "Comment partir chaud le matin ?", a: "En préconditionnant l'habitacle et la batterie pendant que la voiture est branchée, idéalement sur une borne à domicile." },
    ],
    related: ["autonomie-voiture-electrique", "temps-de-recharge-voiture-electrique", "borne-de-recharge-maison", "wallbox-connectee"],
  },
  {
    slug: "voiture-electrique-ou-thermique",
    metaTitle: "Voiture électrique ou thermique : que choisir en 2026 ? | Choisis Ta borne",
    metaDescription:
      "Électrique ou thermique : coût, usage, recharge, revente. Les critères concrets pour choisir selon vos trajets et savoir si l'électrique est fait pour vous.",
    h1: "Voiture électrique ou thermique : que choisir ?",
    updated: "2026-07-15",
    lede: "Le bon choix dépend surtout de vos trajets et de votre possibilité de recharger. Voici les critères concrets pour décider sereinement.",
    sections: [
      {
        h2: "La question clé : pouvez-vous recharger à domicile ?",
        paragraphs: [
          "C'est le critère déterminant. Si vous disposez d'un stationnement où installer une borne — maison ou place en copropriété via le droit à la prise — l'électrique prend tout son sens : recharge nocturne, coût au kilomètre imbattable.",
          "Sans solution de recharge pratique, l'expérience est moins évidente.",
        ],
      },
      {
        h2: "Le coût, à l'achat et à l'usage",
        paragraphs: [
          "À l'achat, l'électrique est souvent plus chère, mais les aides réduisent l'écart. À l'usage, elle reprend l'avantage : recharge bon marché, entretien allégé, fiscalité favorable.",
          "Plus votre kilométrage est élevé, plus l'électrique devient rentable.",
        ],
      },
      {
        h2: "L'usage au quotidien",
        paragraphs: [
          "Pour comparer selon votre profil :",
        ],
        list: [
          "Trajets quotidiens et urbains : l'électrique excelle.",
          "Longs trajets fréquents : possible avec la recharge rapide, à anticiper.",
          "Confort : silence, souplesse et absence de vibrations côté électrique.",
          "Écologie : pas d'émissions à l'usage.",
        ],
      },
      {
        h2: "Notre synthèse",
        paragraphs: [
          "Si vous pouvez recharger chez vous et roulez régulièrement, l'électrique est aujourd'hui le choix le plus économique et le plus confortable pour la majorité des automobilistes.",
          "La première étape est souvent d'étudier l'installation d'une borne : nos partenaires IRVE vous conseillent gratuitement.",
        ],
      },
    ],
    faq: [
      { q: "L'électrique convient-elle aux longs trajets ?", a: "Oui, avec le réseau de recharge rapide et un départ batterie pleine depuis chez soi ; il faut simplement anticiper les arrêts." },
      { q: "Quand l'électrique est-elle la plus rentable ?", a: "Quand vous pouvez recharger à domicile en heures creuses et que vous roulez régulièrement." },
      { q: "Faut-il absolument une borne à domicile ?", a: "C'est le principal facteur de confort et d'économie. La recharge à domicile fait toute la différence." },
    ],
    related: ["cout-reel-voiture-electrique", "autonomie-voiture-electrique", "choisir-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "acheter-voiture-electrique-occasion",
    metaTitle: "Acheter une voiture électrique d'occasion : le guide | Choisis Ta borne",
    metaDescription:
      "Comment bien acheter une voiture électrique d'occasion ? Vérifier l'état de la batterie, l'historique, la garantie et le mode de recharge. Nos conseils pour éviter les pièges.",
    h1: "Acheter une voiture électrique d'occasion : ce qu'il faut vérifier",
    updated: "2026-07-15",
    lede: "Le marché de l'occasion électrique s'est étoffé et les prix ont baissé. Voici les points essentiels à contrôler avant d'acheter.",
    sections: [
      {
        h2: "L'état de la batterie, priorité n°1",
        paragraphs: [
          "La batterie est le cœur du véhicule. Renseignez-vous sur son état de santé (capacité restante), le kilométrage et l'historique de charge. Certains constructeurs et outils permettent d'estimer cette capacité résiduelle.",
          "Vérifiez aussi la garantie batterie encore applicable, souvent exprimée en années ou en kilomètres.",
        ],
      },
      {
        h2: "Historique et entretien",
        paragraphs: [
          "Comme pour tout véhicule d'occasion, demandez le carnet d'entretien, l'historique des révisions et les éventuelles réparations. Une voiture électrique bien suivie est un gage de fiabilité.",
          "Assurez-vous que les mises à jour logicielles ont été effectuées.",
        ],
      },
      {
        h2: "Batterie en pleine propriété ou en location ?",
        paragraphs: [
          "Sur certains modèles anciens, la batterie pouvait être louée séparément. Vérifiez si la batterie est incluse dans l'achat ou soumise à une location mensuelle, car cela change le budget total.",
          "Les modèles récents intègrent généralement la batterie à la vente.",
        ],
      },
      {
        h2: "Anticiper la recharge",
        paragraphs: [
          "Avant l'achat, prévoyez votre solution de recharge : une borne à domicile transforme l'expérience et sécurise votre autonomie au quotidien.",
          "Nos installateurs IRVE vous établissent un devis gratuit adapté à votre futur véhicule.",
        ],
      },
    ],
    faq: [
      { q: "Comment vérifier l'état de la batterie d'occasion ?", a: "En consultant l'état de santé (capacité restante), le kilométrage, l'historique de charge et la garantie batterie encore valable." },
      { q: "La batterie est-elle toujours incluse ?", a: "Sur les modèles récents oui ; certains anciens véhicules avaient une batterie en location. Vérifiez-le avant d'acheter." },
      { q: "Faut-il prévoir une borne avant l'achat ?", a: "C'est fortement conseillé : une borne à domicile rend l'usage bien plus simple et économique." },
    ],
    related: ["autonomie-voiture-electrique", "cout-reel-voiture-electrique", "location-batterie-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "location-batterie-voiture-electrique",
    metaTitle: "Location ou achat de la batterie de voiture électrique ? | Choisis Ta borne",
    metaDescription:
      "Faut-il acheter ou louer la batterie de sa voiture électrique ? Différences, avantages et limites de chaque formule, et ce qui prévaut sur les modèles récents.",
    h1: "Acheter ou louer la batterie de sa voiture électrique ?",
    updated: "2026-07-15",
    lede: "Historiquement, certaines voitures électriques étaient vendues avec une batterie en location. Voici ce que recouvrent ces deux formules et laquelle privilégier.",
    sections: [
      {
        h2: "Le principe de la location de batterie",
        paragraphs: [
          "Sur certains modèles, notamment plus anciens, la batterie était louée séparément moyennant un loyer mensuel. Le prix d'achat du véhicule était plus bas, mais s'ajoutait un abonnement, parfois modulé selon le kilométrage.",
          "En contrepartie, le loueur garantissait la batterie et son remplacement en cas de défaillance.",
        ],
      },
      {
        h2: "La batterie en pleine propriété",
        paragraphs: [
          "Aujourd'hui, la grande majorité des véhicules électriques neufs intègrent la batterie à la vente : vous en êtes propriétaire, sans loyer. La batterie bénéficie d'une garantie constructeur de plusieurs années ou d'un kilométrage élevé.",
          "C'est le modèle devenu standard sur le marché.",
        ],
      },
      {
        h2: "Avantages et limites de chaque formule",
        paragraphs: [
          "Pour comparer :",
        ],
        list: [
          "Location : prix d'achat plus bas, batterie garantie, mais loyer mensuel récurrent.",
          "Achat : pas de loyer, valeur de revente plus lisible, mais coût initial plus élevé.",
          "Sur l'occasion : bien vérifier le statut de la batterie avant de signer.",
        ],
      },
      {
        h2: "Que choisir aujourd'hui ?",
        paragraphs: [
          "Pour un véhicule récent, la pleine propriété est la norme et généralement la plus simple à gérer. Si vous visez un modèle ancien avec batterie en location, intégrez le loyer dans votre budget total.",
          "Dans tous les cas, prévoyez une solution de recharge à domicile pour profiter pleinement de votre voiture.",
        ],
      },
    ],
    faq: [
      { q: "La location de batterie existe-t-elle encore ?", a: "Elle concernait surtout des modèles anciens. Les véhicules récents intègrent presque toujours la batterie à l'achat." },
      { q: "Vaut-il mieux acheter ou louer la batterie ?", a: "Pour un modèle récent, l'achat (pleine propriété) est la norme et le plus simple. La location peut se justifier sur certains véhicules d'occasion, loyer compris dans le budget." },
      { q: "La batterie achetée est-elle garantie ?", a: "Oui, par une garantie constructeur exprimée en années ou en kilomètres, couvrant une dégradation anormale." },
    ],
    related: ["acheter-voiture-electrique-occasion", "cout-reel-voiture-electrique", "autonomie-voiture-electrique", "choisir-voiture-electrique"],
  },
  {
    slug: "choisir-voiture-electrique",
    metaTitle: "Comment bien choisir sa voiture électrique en 2026 ? | Choisis Ta borne",
    metaDescription:
      "Autonomie, puissance de charge, budget, usage : les critères pour bien choisir sa voiture électrique. Le guide pour ne pas se tromper et anticiper la recharge.",
    h1: "Comment bien choisir sa voiture électrique ?",
    updated: "2026-07-15",
    lede: "Autonomie, recharge, budget, usage : quelques critères clés suffisent pour choisir la voiture électrique adaptée à vos besoins. Voici lesquels.",
    sections: [
      {
        h2: "Définir son usage réel",
        paragraphs: [
          "Commencez par vos trajets : distance quotidienne, fréquence des longs trajets, usage urbain ou routier. Un usage majoritairement quotidien demande moins d'autonomie qu'on ne le croit.",
          "Cet usage guide le choix de l'autonomie et du gabarit.",
        ],
      },
      {
        h2: "Autonomie et puissance de charge",
        paragraphs: [
          "Regardez l'autonomie WLTP, mais aussi la puissance de charge acceptée en courant continu (recharge rapide) et en courant alternatif (recharge à domicile). Une bonne charge AC permet de profiter pleinement d'une borne domestique.",
          "Ces deux paramètres comptent autant que l'autonomie brute.",
        ],
      },
      {
        h2: "Budget et aides",
        paragraphs: [
          "Intégrez le prix, les aides (bonus écologique, aides locales) et le coût d'usage. Pensez aussi à l'installation d'une borne, éligible à la TVA 5,5 % et à la prime ADVENIR en copropriété.",
          "C'est le coût total, pas seulement le prix affiché, qui doit guider la décision.",
        ],
      },
      {
        h2: "Anticiper la recharge à domicile",
        paragraphs: [
          "Le confort d'une électrique repose largement sur la recharge à domicile. Vérifiez la faisabilité d'une borne chez vous avant l'achat.",
          "Nos installateurs IRVE réalisent une étude et un devis gratuits pour votre projet.",
        ],
      },
    ],
    faq: [
      { q: "Quelle autonomie choisir ?", a: "Adaptez-la à vos trajets : un usage quotidien demande moins d'autonomie qu'on ne l'imagine. Regardez aussi la puissance de charge acceptée." },
      { q: "La puissance de charge est-elle importante ?", a: "Oui : la charge rapide (DC) compte pour les longs trajets, et la charge AC pour bien profiter d'une borne à domicile." },
      { q: "Faut-il prévoir la borne avant d'acheter ?", a: "Idéalement oui, car la recharge à domicile conditionne le confort et l'économie d'usage." },
    ],
    related: ["autonomie-voiture-electrique", "voiture-electrique-ou-thermique", "quelle-borne-de-recharge-choisir", "borne-de-recharge-maison"],
  },
  {
    slug: "voitures-electriques-plus-grande-autonomie",
    metaTitle: "Voitures électriques à grande autonomie : comment choisir | Choisis Ta borne",
    metaDescription:
      "Quelles voitures électriques offrent la plus grande autonomie ? Ce qui distingue les modèles longue distance, les critères à comparer et l'importance de la recharge.",
    h1: "Les voitures électriques à grande autonomie",
    updated: "2026-07-15",
    lede: "L'autonomie progresse d'année en année. Voici ce qui distingue les modèles taillés pour les longues distances et comment bien les comparer.",
    sections: [
      {
        h2: "Ce qui fait une grande autonomie",
        paragraphs: [
          "L'autonomie dépend surtout de la capacité de la batterie (en kWh) et de l'efficience du véhicule (consommation aux 100 km). À capacité égale, une voiture bien profilée et légère ira plus loin.",
          "Les modèles longue distance combinent une grosse batterie et une bonne aérodynamique, avec des autonomies WLTP qui atteignent souvent 500 à 600 km, parfois davantage.",
        ],
      },
      {
        h2: "Autonomie annoncée et autonomie réelle",
        paragraphs: [
          "L'autonomie WLTP sert de repère de comparaison, mais l'autonomie réelle dépend de la vitesse, de la température et du style de conduite. Sur autoroute, comptez une valeur inférieure à l'annonce.",
          "Pour un usage longue distance, regardez aussi la puissance de charge rapide : récupérer beaucoup de kilomètres en peu de temps compte autant que l'autonomie brute.",
        ],
      },
      {
        h2: "Les critères à comparer",
        paragraphs: [
          "Au-delà des kilomètres annoncés, comparez :",
        ],
        list: [
          "La capacité de la batterie et la consommation moyenne.",
          "La puissance de charge rapide (DC) et la courbe de charge.",
          "La puissance de charge à domicile (AC).",
          "Le confort, le volume et le budget.",
        ],
      },
      {
        h2: "Grande autonomie et recharge à domicile",
        paragraphs: [
          "Même avec une grande autonomie, la recharge à domicile reste le meilleur confort au quotidien : vous partez chaque matin avec une batterie pleine et ne dépendez du réseau rapide que pour les longs trajets.",
          "Nos installateurs IRVE dimensionnent la borne selon la capacité de charge AC de votre véhicule.",
        ],
      },
    ],
    faq: [
      { q: "Quelle autonomie pour les modèles longue distance ?", a: "Souvent 500 à 600 km WLTP, parfois plus, en combinant une grosse batterie et une bonne efficience. L'autonomie réelle est un peu inférieure sur autoroute." },
      { q: "L'autonomie suffit-elle pour les longs trajets ?", a: "Oui, à condition d'anticiper les arrêts de recharge rapide. La puissance de charge DC est alors aussi importante que l'autonomie." },
      { q: "Faut-il une borne à domicile ?", a: "Elle reste le meilleur confort quotidien, même avec une grande autonomie : batterie pleine chaque matin, sans détour par une station." },
    ],
    related: ["autonomie-voiture-electrique", "choisir-voiture-electrique", "recharge-rapide-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "idees-recues-voiture-electrique",
    metaTitle: "Idées reçues sur la voiture électrique : le vrai du faux | Choisis Ta borne",
    metaDescription:
      "Autonomie, prix, batterie, écologie : on démêle les principales idées reçues sur la voiture électrique pour y voir clair avant de se lancer.",
    h1: "Voiture électrique : démêler le vrai du faux",
    updated: "2026-07-15",
    lede: "La voiture électrique traîne encore quelques idées reçues. Voici un point factuel sur les plus répandues.",
    sections: [
      {
        h2: "« L'autonomie est trop faible »",
        paragraphs: [
          "Pour l'immense majorité des trajets quotidiens, l'autonomie des modèles actuels est largement suffisante. Les longs trajets se gèrent avec la recharge rapide et un départ batterie pleine depuis chez soi.",
          "La contrainte perçue est souvent bien supérieure à la réalité d'usage.",
        ],
      },
      {
        h2: "« La batterie s'use trop vite »",
        paragraphs: [
          "Les batteries récentes se dégradent lentement en usage normal et sont garanties plusieurs années ou un kilométrage élevé. En fin de vie automobile, elles trouvent une seconde vie en stockage stationnaire ou sont recyclées.",
          "La longévité est bien meilleure que ne le laissent penser certaines idées reçues.",
        ],
      },
      {
        h2: "« Ce n'est pas si écologique »",
        paragraphs: [
          "La fabrication d'une batterie a un coût environnemental, mais l'absence d'émissions à l'usage et un mix électrique décarboné rendent le bilan global favorable sur la durée de vie, surtout en France.",
          "Le recyclage et la seconde vie des batteries améliorent encore ce bilan.",
        ],
      },
      {
        h2: "« Recharger est compliqué »",
        paragraphs: [
          "Avec une borne à domicile, la recharge est au contraire plus simple qu'un passage à la station : vous branchez le soir, la voiture est prête le matin.",
          "C'est précisément là que nos installateurs IRVE interviennent, avec un devis gratuit adapté à votre logement.",
        ],
      },
    ],
    faq: [
      { q: "L'autonomie est-elle vraiment un problème ?", a: "Rarement au quotidien : les autonomies actuelles couvrent largement les trajets courants, et la recharge rapide gère les longs trajets." },
      { q: "La batterie dure-t-elle longtemps ?", a: "Oui, elle se dégrade lentement en usage normal, est garantie plusieurs années, puis recyclée ou réutilisée en stockage." },
      { q: "La recharge est-elle contraignante ?", a: "Avec une borne à domicile, c'est plus simple qu'à la station : on branche le soir, la voiture est prête le matin." },
    ],
    related: ["autonomie-voiture-electrique", "recyclage-batterie-voiture-electrique", "voiture-electrique-ou-thermique", "cout-reel-voiture-electrique"],
  },
  {
    slug: "recyclage-batterie-voiture-electrique",
    metaTitle: "Recyclage des batteries de voiture électrique : que deviennent-elles ? | Choisis Ta borne",
    metaDescription:
      "Que deviennent les batteries de voiture électrique en fin de vie ? Seconde vie en stockage, recyclage des matériaux, réglementation. Le point sur leur devenir.",
    h1: "Recyclage et seconde vie des batteries de voiture électrique",
    updated: "2026-07-15",
    lede: "Loin d'être un déchet, une batterie de voiture électrique en fin de vie automobile connaît souvent une seconde vie, puis un recyclage de ses matériaux. Explications.",
    sections: [
      {
        h2: "Une fin de vie automobile, pas une fin d'usage",
        paragraphs: [
          "Une batterie retirée d'un véhicule conserve généralement une part importante de sa capacité. Elle n'est donc pas immédiatement un déchet : elle peut servir ailleurs, notamment pour du stockage d'énergie.",
          "C'est le principe de la seconde vie des batteries.",
        ],
      },
      {
        h2: "La seconde vie en stockage stationnaire",
        paragraphs: [
          "Réassemblées, ces batteries alimentent des systèmes de stockage : lissage de la production solaire, soutien du réseau, alimentation de sites. Elles y prolongent leur utilité pendant plusieurs années.",
          "Cette étape retarde le recyclage et valorise la batterie.",
        ],
      },
      {
        h2: "Le recyclage des matériaux",
        paragraphs: [
          "En fin de seconde vie, la batterie est recyclée pour récupérer des matériaux précieux (lithium, nickel, cobalt, cuivre). Les filières progressent et visent des taux de récupération de plus en plus élevés.",
          "La réglementation encadre ce recyclage et fixe des objectifs de valorisation.",
        ],
      },
      {
        h2: "Un bilan qui s'améliore",
        paragraphs: [
          "Seconde vie et recyclage améliorent le bilan environnemental global du véhicule électrique sur toute sa durée de vie.",
          "C'est un argument de plus en faveur d'une mobilité électrique bien pensée, à commencer par une recharge sobre à domicile.",
        ],
      },
    ],
    faq: [
      { q: "Les batteries de voiture électrique se recyclent-elles ?", a: "Oui. Après une éventuelle seconde vie en stockage, elles sont recyclées pour récupérer lithium, nickel, cobalt et cuivre." },
      { q: "Qu'est-ce que la seconde vie d'une batterie ?", a: "Une batterie retirée du véhicule conserve de la capacité et peut servir au stockage d'énergie stationnaire pendant plusieurs années." },
      { q: "Le recyclage est-il réglementé ?", a: "Oui, une réglementation encadre la collecte et la valorisation des batteries, avec des objectifs de récupération des matériaux." },
    ],
    related: ["idees-recues-voiture-electrique", "voiture-electrique-ecologie", "autonomie-voiture-electrique", "borne-recharge-panneaux-solaires"],
  },
  {
    slug: "retrofit-voiture-electrique",
    metaTitle: "Rétrofit : convertir sa voiture thermique en électrique | Choisis Ta borne",
    metaDescription:
      "Le rétrofit permet de transformer une voiture thermique en voiture électrique. Principe, homologation, coût et intérêt : le point sur cette solution.",
    h1: "Rétrofit : convertir sa voiture thermique en électrique",
    updated: "2026-07-15",
    lede: "Le rétrofit consiste à remplacer le moteur thermique d'un véhicule par une motorisation électrique. Voici comment ça marche et à qui ça s'adresse.",
    sections: [
      {
        h2: "Le principe du rétrofit",
        paragraphs: [
          "Le rétrofit électrique remplace le moteur thermique, le réservoir et la transmission d'un véhicule existant par un moteur électrique et une batterie. La voiture conserve sa carrosserie et son habitacle, mais roule à l'électrique.",
          "C'est une façon de prolonger la vie d'un véhicule en le décarbonant.",
        ],
      },
      {
        h2: "Une opération encadrée et homologuée",
        paragraphs: [
          "Le rétrofit est autorisé en France selon un cadre réglementaire précis : il doit être réalisé par des professionnels habilités, avec des kits homologués, et le véhicule doit respecter des conditions d'ancienneté et de sécurité.",
          "L'homologation garantit la conformité et la sécurité du véhicule transformé.",
        ],
      },
      {
        h2: "Coût et intérêt",
        paragraphs: [
          "Le rétrofit représente un investissement, dont le montant dépend du véhicule et du kit. Il séduit surtout pour des véhicules à forte valeur sentimentale, des utilitaires ou des flottes spécifiques.",
          "Des aides locales peuvent, selon les cas, soutenir cette conversion.",
        ],
      },
      {
        h2: "Après le rétrofit : la recharge",
        paragraphs: [
          "Un véhicule rétrofité se recharge comme une voiture électrique classique. Une borne à domicile en fait une solution pratique et économique au quotidien.",
          "Nos installateurs IRVE adaptent la borne à la puissance de charge de votre véhicule converti.",
        ],
      },
    ],
    faq: [
      { q: "Le rétrofit est-il légal en France ?", a: "Oui, dans un cadre réglementaire précis : kits homologués, professionnels habilités et conditions d'ancienneté et de sécurité du véhicule." },
      { q: "Combien coûte un rétrofit ?", a: "Cela dépend du véhicule et du kit ; c'est un investissement conséquent, parfois soutenu par des aides locales." },
      { q: "Comment recharge-t-on un véhicule rétrofité ?", a: "Comme une voiture électrique classique : idéalement sur une borne à domicile adaptée à sa puissance de charge." },
    ],
    related: ["voiture-electrique-ou-thermique", "cout-reel-voiture-electrique", "borne-de-recharge-maison", "autonomie-voiture-electrique"],
  },
  {
    slug: "voiture-electrique-taxi-vtc",
    metaTitle: "Voiture électrique pour taxi et VTC : est-ce rentable ? | Choisis Ta borne",
    metaDescription:
      "Passer à l'électrique quand on est taxi ou VTC : coût au kilomètre, recharge, confort, image. Pourquoi c'est souvent gagnant pour les gros rouleurs.",
    h1: "Voiture électrique pour taxi et VTC : les avantages",
    updated: "2026-07-15",
    lede: "Pour un taxi ou un VTC, qui parcourt beaucoup de kilomètres, l'électrique peut être particulièrement rentable. Voici pourquoi.",
    sections: [
      {
        h2: "Un coût au kilomètre imbattable",
        paragraphs: [
          "Les taxis et VTC roulent beaucoup : c'est précisément le profil où l'électrique est la plus avantageuse. Recharger à domicile en heures creuses ramène le coût de l'énergie très en dessous du carburant.",
          "Plus le kilométrage est élevé, plus l'économie annuelle est importante.",
        ],
      },
      {
        h2: "Un entretien réduit",
        paragraphs: [
          "Moins de pièces d'usure, pas de vidange, des freins préservés par la régénération : l'entretien allégé est un atout pour un véhicule très sollicité, avec moins d'immobilisations.",
          "C'est autant de temps et d'argent gagnés.",
        ],
      },
      {
        h2: "Confort et image",
        paragraphs: [
          "Le silence et la souplesse de conduite améliorent le confort des passagers, un vrai plus pour l'activité. L'électrique valorise aussi l'image d'un service moderne et propre.",
          "Dans les zones à faibles émissions, elle garantit en outre l'accès sans restriction.",
        ],
      },
      {
        h2: "La recharge, clé de la rentabilité",
        paragraphs: [
          "La rentabilité repose sur la capacité à recharger au bon endroit et au bon prix. Une borne au domicile du chauffeur, rechargée la nuit, est la solution la plus économique.",
          "Nos installateurs IRVE dimensionnent la borne selon l'usage intensif et le véhicule.",
        ],
      },
    ],
    faq: [
      { q: "L'électrique est-elle rentable pour un taxi ou VTC ?", a: "Souvent oui : le fort kilométrage maximise les économies de recharge et d'entretien par rapport au thermique." },
      { q: "Comment recharger efficacement ?", a: "Idéalement à domicile en heures creuses, complété par la recharge rapide en journée pour les grosses journées." },
      { q: "Quel intérêt en zone à faibles émissions ?", a: "L'électrique n'est pas concernée par les restrictions de circulation, ce qui garantit l'accès à l'activité." },
    ],
    related: ["cout-reel-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison", "electrifier-flotte-automobile"],
  },
  {
    slug: "assurance-voiture-electrique",
    metaTitle: "Assurance voiture électrique : ce qu'il faut savoir | Choisis Ta borne",
    metaDescription:
      "Comment assurer une voiture électrique ? Spécificités liées à la batterie et à la borne, points à vérifier dans le contrat et conseils pour bien choisir.",
    h1: "Quelle assurance pour sa voiture électrique ?",
    updated: "2026-07-15",
    lede: "Assurer une voiture électrique ressemble à l'assurance d'un thermique, avec quelques spécificités liées à la batterie et à la recharge. Le point.",
    sections: [
      {
        h2: "Les mêmes garanties de base",
        paragraphs: [
          "Comme pour tout véhicule, l'assurance au tiers est obligatoire, et vous pouvez ajouter des garanties (tous risques, bris de glace, vol, assistance). Le fonctionnement général est identique à celui d'un thermique.",
          "Les critères habituels (profil, usage, kilométrage) s'appliquent.",
        ],
      },
      {
        h2: "Les spécificités liées à la batterie",
        paragraphs: [
          "La batterie étant le composant le plus coûteux, vérifiez sa couverture, en particulier si elle est en location. Certains contrats prévoient des garanties adaptées à la batterie et à ses dommages.",
          "Lisez attentivement les conditions concernant ce point.",
        ],
      },
      {
        h2: "La borne et le câble de recharge",
        paragraphs: [
          "Pensez à la protection de votre borne de recharge et de votre câble : certains contrats habitation ou auto peuvent couvrir le vol ou les dommages de ces équipements. Vérifiez ce qui est inclus.",
          "Une borne bien installée par un professionnel IRVE limite par ailleurs les risques.",
        ],
      },
      {
        h2: "Bien comparer les offres",
        paragraphs: [
          "Comparez les garanties, les franchises et l'assistance, en tenant compte des spécificités électriques. Certaines offres se veulent adaptées aux véhicules électriques.",
          "Le bon contrat est celui qui couvre l'usage réel de votre véhicule et de votre installation de recharge.",
        ],
      },
    ],
    faq: [
      { q: "Assurer une électrique coûte-t-il plus cher ?", a: "Pas nécessairement ; cela dépend du modèle, du profil et des garanties. Les critères habituels d'assurance s'appliquent." },
      { q: "La batterie est-elle couverte ?", a: "Selon les contrats. Vérifiez sa couverture, surtout si elle est en location, car c'est le composant le plus coûteux." },
      { q: "La borne de recharge est-elle assurée ?", a: "Parfois, via l'assurance habitation ou auto. Vérifiez la couverture du vol et des dommages de la borne et du câble." },
    ],
    related: ["cout-reel-voiture-electrique", "location-batterie-voiture-electrique", "borne-de-recharge-maison", "entretien-borne-recharge"],
  },
  {
    slug: "partir-en-vacances-voiture-electrique",
    metaTitle: "Partir en vacances en voiture électrique : nos conseils | Choisis Ta borne",
    metaDescription:
      "Longs trajets, recharge sur autoroute, planification : nos conseils pour partir en vacances sereinement en voiture électrique et éviter le stress de l'autonomie.",
    h1: "Partir en vacances en voiture électrique : le guide",
    updated: "2026-07-15",
    lede: "Les longs trajets en voiture électrique se préparent, mais n'ont plus rien d'un casse-tête. Voici comment partir en vacances sereinement.",
    sections: [
      {
        h2: "Planifier ses arrêts de recharge",
        paragraphs: [
          "Sur un long trajet, l'idéal est de planifier ses recharges rapides le long de l'itinéraire, en profitant des pauses naturelles. Les planificateurs d'itinéraire intègrent les bornes rapides et l'autonomie du véhicule.",
          "Recharger de 20 à 80 % est le plus efficace : c'est sur cette plage que la charge rapide est la plus performante.",
        ],
      },
      {
        h2: "Partir avec une batterie pleine",
        paragraphs: [
          "Le meilleur départ commence à la maison : une borne à domicile permet de partir avec 100 % d'autonomie, ce qui réduit le nombre d'arrêts dès le premier tronçon.",
          "C'est un confort décisif les jours de grand départ.",
        ],
      },
      {
        h2: "Adapter sa conduite",
        paragraphs: [
          "Sur autoroute, une vitesse un peu plus modérée augmente sensiblement l'autonomie et réduit le temps total avec les recharges. Anticiper le freinage et gérer la climatisation aide également.",
          "Quelques ajustements suffisent à fluidifier le trajet.",
        ],
      },
      {
        h2: "Sur place",
        paragraphs: [
          "À destination, repérez les points de recharge (hébergement, ville) pour récupérer de l'autonomie tranquillement, souvent en charge lente pendant la nuit.",
          "De retour chez vous, la borne à domicile reprend le relais pour le quotidien.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on partir loin en voiture électrique ?", a: "Oui, en planifiant les recharges rapides le long de l'itinéraire et en partant batterie pleine depuis chez soi." },
      { q: "Faut-il recharger à 100 % en route ?", a: "Non, recharger de 20 à 80 % est plus rapide et plus efficace sur les bornes rapides." },
      { q: "Comment limiter les arrêts ?", a: "Partir avec une batterie pleine grâce à une borne à domicile et adopter une vitesse modérée sur autoroute." },
    ],
    related: ["autonomie-voiture-electrique", "recharge-rapide-voiture-electrique", "voyager-europe-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "voyager-europe-voiture-electrique",
    metaTitle: "Voyager en Europe en voiture électrique : le guide | Choisis Ta borne",
    metaDescription:
      "Recharge, badges d'accès, planification : nos conseils pour voyager en Europe en voiture électrique et recharger facilement d'un pays à l'autre.",
    h1: "Voyager en Europe en voiture électrique",
    updated: "2026-07-15",
    lede: "Le réseau de recharge européen s'est densifié : traverser plusieurs pays en voiture électrique est désormais accessible, à condition de bien s'organiser.",
    sections: [
      {
        h2: "Un réseau de recharge dense en Europe",
        paragraphs: [
          "Les grands axes européens sont bien équipés en bornes de recharge rapide, notamment le long des autoroutes. Voyager d'un pays à l'autre en électrique est devenu réaliste pour la plupart des itinéraires.",
          "La couverture progresse encore chaque année.",
        ],
      },
      {
        h2: "Badges et accès à la recharge",
        paragraphs: [
          "Pour recharger facilement à l'étranger, un badge ou une application d'itinérance donne accès à de nombreux réseaux avec une seule facturation. Prévoyez-en un ou deux avant le départ.",
          "Vérifiez la compatibilité des connecteurs, aujourd'hui largement standardisés en Europe.",
        ],
      },
      {
        h2: "Planifier son itinéraire",
        paragraphs: [
          "Comme pour tout long trajet, utilisez un planificateur qui intègre les bornes rapides, l'autonomie et les pauses. Prévoyez des alternatives de recharge en cas d'affluence.",
          "Recharger de 20 à 80 % reste la façon la plus efficace d'avancer.",
        ],
      },
      {
        h2: "Avant de partir",
        paragraphs: [
          "Partez batterie pleine depuis chez vous et renseignez-vous sur les particularités locales (réseaux, moyens de paiement). À votre retour, la borne à domicile reprend le relais.",
          "Nos installateurs IRVE vous équipent pour partir toujours chargé.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on recharger facilement partout en Europe ?", a: "Les grands axes sont bien équipés en bornes rapides et les connecteurs sont largement standardisés. Un badge d'itinérance simplifie l'accès." },
      { q: "Faut-il un badge de recharge ?", a: "C'est recommandé : un badge ou une application d'itinérance donne accès à de nombreux réseaux avec une facturation unique." },
      { q: "Comment préparer un long trajet international ?", a: "Planifier les recharges rapides, partir batterie pleine et prévoir des alternatives en cas d'affluence." },
    ],
    related: ["partir-en-vacances-voiture-electrique", "autonomie-voiture-electrique", "recharge-rapide-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "recharger-voiture-electrique-appartement",
    metaTitle: "Recharger sa voiture électrique en appartement : 3 solutions | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique quand on vit en appartement ? Borne sur sa place en copropriété, prise renforcée, recharge publique : les 3 solutions.",
    h1: "Recharger sa voiture électrique en appartement",
    updated: "2026-07-15",
    lede: "Vivre en appartement ne vous prive pas de la recharge à domicile. Voici les trois grandes solutions selon votre situation de stationnement.",
    sections: [
      {
        h2: "Solution 1 : une borne sur votre place en copropriété",
        paragraphs: [
          "Si vous disposez d'une place de parking, le droit à la prise vous permet d'y installer une borne à vos frais, sans vote de l'assemblée générale. C'est la solution la plus confortable : vous rechargez chez vous, la nuit.",
          "La borne peut être raccordée à votre compteur individuel, avec la TVA à 5,5 % et la prime ADVENIR à la clé.",
        ],
      },
      {
        h2: "Solution 2 : la prise renforcée",
        paragraphs: [
          "À défaut de borne, une prise renforcée offre une recharge plus lente mais plus sûre qu'une prise domestique classique. Elle peut dépanner pour de petits besoins, mais reste moins performante et moins protégée qu'une borne dédiée.",
          "Pour un usage quotidien, la borne reste préférable.",
        ],
      },
      {
        h2: "Solution 3 : la recharge publique ou au travail",
        paragraphs: [
          "Sans stationnement privatif, la recharge sur bornes publiques (voirie, parkings, supermarchés) ou sur le lieu de travail prend le relais. C'est fonctionnel, mais souvent plus coûteux et moins pratique que la recharge à domicile.",
          "Repérez les points proches de chez vous et privilégiez la charge lente quand c'est possible.",
        ],
      },
      {
        h2: "Quelle solution pour vous ?",
        paragraphs: [
          "Dès que vous avez une place attitrée, la borne via le droit à la prise est presque toujours le meilleur choix : coût, confort et sécurité.",
          "Nos installateurs IRVE évaluent gratuitement la faisabilité sur votre place de parking.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une borne en appartement ?", a: "Oui, si vous avez une place de parking : le droit à la prise vous permet d'y installer une borne sans vote de l'assemblée générale." },
      { q: "La prise renforcée suffit-elle ?", a: "Elle dépanne, mais reste plus lente et moins protégée qu'une borne dédiée. Pour un usage quotidien, la borne est préférable." },
      { q: "Comment faire sans place attitrée ?", a: "On s'appuie alors sur la recharge publique ou au travail, en privilégiant la charge lente quand c'est possible." },
    ],
    related: ["droit-a-la-prise", "borne-recharge-copropriete", "prise-renforcee-ou-wallbox", "borne-recharge-locataire"],
  },
  {
    slug: "borne-recharge-exterieure",
    metaTitle: "Borne de recharge extérieure : bien la choisir et l'installer | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge en extérieur : indice de protection, fixation, câblage, sécurité. Comment choisir une borne qui résiste aux intempéries.",
    h1: "Borne de recharge extérieure : le guide",
    updated: "2026-07-15",
    lede: "Installer une borne dehors — dans une allée, une cour ou un carport — demande un matériel adapté aux intempéries. Voici les points à connaître.",
    sections: [
      {
        h2: "Une borne conçue pour l'extérieur",
        paragraphs: [
          "Une borne installée dehors doit résister à la pluie, au gel, à la chaleur et aux UV. Elle affiche pour cela un indice de protection élevé (IP54 au minimum) et une bonne résistance aux chocs (indice IK).",
          "Une borne d'intérieur n'est pas adaptée à une pose en extérieur.",
        ],
      },
      {
        h2: "Fixation et emplacement",
        paragraphs: [
          "La borne se fixe au mur d'une façade abritée ou sur un pied dédié si aucun support n'est disponible. L'emplacement se choisit en fonction du stationnement du véhicule et de la longueur du câble.",
          "Un positionnement réfléchi facilite le branchement au quotidien.",
        ],
      },
      {
        h2: "Câblage et sécurité",
        paragraphs: [
          "Le câble chemine souvent en fourreau enterré depuis le tableau, ce qui peut nécessiter une tranchée. L'installation par un électricien IRVE garantit la conformité (protection différentielle 30 mA, norme NF C 15-100) et la sécurité.",
          "C'est un gage de fiabilité dans la durée.",
        ],
      },
      {
        h2: "Les bons réflexes de choix",
        paragraphs: [
          "Pour une borne extérieure durable :",
        ],
        list: [
          "Indice de protection IP54 ou plus, bonne résistance mécanique (IK).",
          "Borne pilotable pour programmer la charge en heures creuses.",
          "Verrouillage ou identification contre les usages non autorisés.",
          "Câble attaché ou prise Type 2 selon vos besoins.",
        ],
      },
    ],
    faq: [
      { q: "Une borne peut-elle rester dehors ?", a: "Oui, à condition d'être conçue pour l'extérieur avec un indice de protection suffisant (IP54 et plus). Une borne d'intérieur ne convient pas." },
      { q: "Faut-il enterrer le câble ?", a: "Souvent oui, en fourreau enterré depuis le tableau, ce qui implique une tranchée." },
      { q: "Le froid pose-t-il problème ?", a: "Une borne extérieure de qualité supporte le gel ; la recharge peut être un peu plus lente par grand froid." },
    ],
    related: ["borne-de-recharge-maison", "installer-borne-de-recharge", "borne-recharge-parking-exterieur", "wallbox-connectee"],
  },
  {
    slug: "consuel-irve",
    metaTitle: "Consuel et borne de recharge IRVE : est-ce obligatoire ? | Choisis Ta borne",
    metaDescription:
      "Le Consuel est-il obligatoire pour une borne de recharge ? Rôle de l'attestation, cas d'une installation domestique et d'une infrastructure collective. Le point.",
    h1: "Consuel IRVE : quand est-il nécessaire ?",
    updated: "2026-07-15",
    lede: "Le Consuel atteste la conformité d'une installation électrique. Voici quand il intervient pour une borne de recharge, à domicile comme en collectif.",
    sections: [
      {
        h2: "À quoi sert le Consuel",
        paragraphs: [
          "Le Consuel est l'organisme qui délivre l'attestation de conformité d'une installation électrique. Cette attestation est notamment requise lors d'un raccordement neuf ou d'une modification importante de l'installation par le gestionnaire de réseau.",
          "Elle garantit que l'installation respecte les normes de sécurité en vigueur.",
        ],
      },
      {
        h2: "Pour une borne à domicile",
        paragraphs: [
          "Pour une borne domestique posée sur une installation existante par un électricien certifié IRVE, une attestation Consuel n'est pas systématiquement exigée. Le professionnel engage sa responsabilité sur la conformité des travaux.",
          "Les cas de raccordement neuf ou de forte modification peuvent toutefois nécessiter cette attestation.",
        ],
      },
      {
        h2: "Pour une infrastructure collective",
        paragraphs: [
          "En immeuble collectif, la mise en place d'une infrastructure de recharge implique souvent des travaux plus lourds et un contrôle de conformité, avec attestation à la clé avant mise en service.",
          "L'installateur IRVE et l'opérateur gèrent cette étape.",
        ],
      },
      {
        h2: "La garantie d'une pose certifiée IRVE",
        paragraphs: [
          "Dans tous les cas, faire appel à un installateur certifié IRVE est la meilleure garantie de conformité et d'éligibilité aux aides. C'est aussi une condition pour la prime ADVENIR.",
          "Nos partenaires prennent en charge l'ensemble des démarches.",
        ],
      },
    ],
    faq: [
      { q: "Le Consuel est-il obligatoire pour une borne à domicile ?", a: "Pas systématiquement pour une borne posée sur une installation existante par un électricien IRVE. Il l'est en cas de raccordement neuf ou de modification importante." },
      { q: "Et en copropriété ?", a: "Une infrastructure collective implique souvent un contrôle de conformité avec attestation avant mise en service." },
      { q: "Pourquoi choisir un installateur IRVE ?", a: "C'est la garantie d'une pose conforme, sûre et éligible aux aides comme la prime ADVENIR." },
    ],
    related: ["installer-borne-de-recharge", "borne-recharge-copropriete", "meilleur-installateur-borne-recharge", "prime-advenir"],
  },
  {
    slug: "recharge-rapide-voiture-electrique",
    metaTitle: "Recharge rapide d'une voiture électrique : comment ça marche | Choisis Ta borne",
    metaDescription:
      "Tout savoir sur la recharge rapide en courant continu : puissance, plage 20-80 %, courbe de charge, coût. Quand l'utiliser et pourquoi la recharge à domicile reste la base.",
    h1: "Tout savoir sur la recharge rapide",
    updated: "2026-07-15",
    lede: "La recharge rapide en courant continu permet de récupérer beaucoup d'autonomie en peu de temps, idéale pour les longs trajets. Voici son fonctionnement.",
    sections: [
      {
        h2: "Recharge rapide : le courant continu",
        paragraphs: [
          "La recharge rapide utilise des bornes en courant continu (DC), beaucoup plus puissantes que la recharge à domicile en courant alternatif. On les trouve surtout sur les axes routiers et autoroutiers.",
          "Elle sert avant tout à récupérer rapidement de l'autonomie lors des longs trajets.",
        ],
      },
      {
        h2: "La plage 20-80 % et la courbe de charge",
        paragraphs: [
          "La charge rapide est la plus efficace entre 20 et 80 % de batterie : au-delà, elle ralentit pour préserver la batterie. C'est pourquoi on conseille de ne pas viser 100 % sur une borne rapide en itinérance.",
          "La puissance réellement délivrée dépend du véhicule, de la borne et de la température de la batterie.",
        ],
      },
      {
        h2: "Coût et bon usage",
        paragraphs: [
          "La recharge rapide est plus coûteuse que la recharge à domicile. Elle est précieuse en déplacement, mais ne doit pas être votre solution quotidienne si vous pouvez recharger chez vous.",
          "L'idéal est de combiner charge rapide en voyage et charge à domicile au quotidien.",
        ],
      },
      {
        h2: "La recharge à domicile reste la base",
        paragraphs: [
          "Pour l'usage courant, rien ne remplace une borne à domicile : recharge nocturne à bas coût, batterie pleine chaque matin, et charge douce qui ménage la batterie.",
          "Nos installateurs IRVE dimensionnent votre borne selon votre véhicule et votre logement.",
        ],
      },
    ],
    faq: [
      { q: "Pourquoi recharger seulement jusqu'à 80 % en rapide ?", a: "Au-delà de 80 %, la charge ralentit fortement pour préserver la batterie. La plage 20-80 % est la plus efficace en itinérance." },
      { q: "La recharge rapide abîme-t-elle la batterie ?", a: "Un usage occasionnel est sans souci. La charge à domicile, plus douce, reste préférable au quotidien." },
      { q: "Est-elle plus chère ?", a: "Oui, la recharge rapide publique coûte plus cher que la recharge à domicile en heures creuses." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "partir-en-vacances-voiture-electrique", "autonomie-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "v2g-vehicle-to-grid",
    metaTitle: "V2G (vehicle-to-grid) : la recharge bidirectionnelle expliquée | Choisis Ta borne",
    metaDescription:
      "Le V2G permet à une voiture électrique de restituer de l'énergie au réseau ou au logement. Principe, conditions, intérêt et limites de la recharge bidirectionnelle.",
    h1: "V2G : tout savoir sur la recharge bidirectionnelle",
    updated: "2026-07-15",
    lede: "Le vehicle-to-grid (V2G) transforme la voiture électrique en batterie sur roues, capable de restituer de l'énergie. Voici ce que recouvre cette technologie.",
    sections: [
      {
        h2: "Le principe du V2G",
        paragraphs: [
          "Habituellement, la borne envoie de l'énergie vers la voiture. Avec le V2G, l'échange devient bidirectionnel : le véhicule peut aussi restituer de l'électricité, vers le réseau (V2G) ou vers le logement (V2H, vehicle-to-home).",
          "La voiture agit alors comme une réserve d'énergie mobile.",
        ],
      },
      {
        h2: "À quoi ça sert",
        paragraphs: [
          "Le V2G permet, par exemple, de restituer de l'énergie aux heures de pointe et de recharger aux heures creuses, ou d'alimenter le logement en cas de besoin. À grande échelle, cela aide à équilibrer le réseau électrique.",
          "C'est un levier d'optimisation énergétique prometteur.",
        ],
      },
      {
        h2: "Les conditions techniques",
        paragraphs: [
          "Le V2G nécessite un véhicule compatible, une borne bidirectionnelle spécifique et un cadre contractuel adapté avec un opérateur. L'offre reste encore émergente et se développe progressivement.",
          "Toutes les voitures et toutes les bornes ne sont pas compatibles aujourd'hui.",
        ],
      },
      {
        h2: "Faut-il attendre le V2G ?",
        paragraphs: [
          "Le V2G est prometteur mais encore en déploiement. En attendant, une borne pilotable classique permet déjà d'optimiser la recharge en heures creuses et de réduire la facture.",
          "Nos installateurs IRVE vous orientent vers la solution adaptée à vos besoins actuels.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que le V2G ?", a: "Le vehicle-to-grid permet à la voiture de restituer de l'énergie au réseau (V2G) ou au logement (V2H), grâce à une recharge bidirectionnelle." },
      { q: "Ma voiture est-elle compatible ?", a: "Le V2G requiert un véhicule et une borne compatibles ainsi qu'un contrat adapté. L'offre reste émergente." },
      { q: "Le V2G est-il déjà disponible ?", a: "Il se déploie progressivement. En attendant, une borne pilotable optimise déjà la recharge en heures creuses." },
    ],
    related: ["wallbox-connectee", "heures-creuses-recharge-voiture-electrique", "borne-recharge-panneaux-solaires", "pilotage-energetique-recharge"],
  },
  {
    slug: "ou-recharger-voiture-electrique",
    metaTitle: "Où recharger sa voiture électrique ? Toutes les options | Choisis Ta borne",
    metaDescription:
      "Domicile, travail, voirie, bornes publiques rapides : où recharger sa voiture électrique selon votre usage, et pourquoi la recharge à domicile reste la plus avantageuse.",
    h1: "Où et comment recharger sa voiture électrique ?",
    updated: "2026-07-15",
    lede: "Il existe plusieurs endroits pour recharger sa voiture électrique. Voici un panorama clair pour choisir selon votre usage.",
    sections: [
      {
        h2: "À domicile : la solution reine",
        paragraphs: [
          "Recharger chez soi est le moyen le plus pratique et le plus économique : vous branchez le soir, la voiture est prête le matin, à un coût bien inférieur aux bornes publiques, surtout en heures creuses.",
          "C'est la base pour la grande majorité des conducteurs.",
        ],
      },
      {
        h2: "Au travail",
        paragraphs: [
          "De plus en plus d'entreprises équipent leurs parkings. Recharger pendant la journée de travail complète idéalement la recharge à domicile, surtout pour les gros rouleurs.",
          "C'est un avantage apprécié des salariés.",
        ],
      },
      {
        h2: "Sur la voirie et les bornes publiques",
        paragraphs: [
          "En ville, la recharge sur voirie ou dans les parkings publics dépanne, notamment sans stationnement privatif. Sur les axes routiers, les bornes rapides permettent de récupérer vite de l'autonomie.",
          "Ces solutions sont utiles mais généralement plus coûteuses que le domicile.",
        ],
      },
      {
        h2: "Le bon mix pour votre usage",
        paragraphs: [
          "L'idéal est de faire de la recharge à domicile la base, complétée par la recharge au travail et la recharge rapide pour les longs trajets.",
          "Nos installateurs IRVE vous aident à mettre en place la brique domicile, la plus rentable.",
        ],
      },
    ],
    faq: [
      { q: "Où est-il le moins cher de recharger ?", a: "À domicile, surtout en heures creuses : le coût au kilomètre est très inférieur à celui des bornes publiques rapides." },
      { q: "Peut-on recharger sans borne à domicile ?", a: "Oui, via la recharge au travail, sur voirie ou sur bornes publiques, mais c'est souvent moins pratique et plus coûteux." },
      { q: "Quel est le meilleur mix ?", a: "La recharge à domicile comme base, complétée par le travail et la recharge rapide pour les longs trajets." },
    ],
    related: ["borne-de-recharge-maison", "cout-recharge-voiture-electrique", "recharge-rapide-voiture-electrique", "recharger-voiture-electrique-appartement"],
  },
  {
    slug: "stationnement-gratuit-voiture-electrique",
    metaTitle: "Stationnement gratuit pour voiture électrique : où et comment ? | Choisis Ta borne",
    metaDescription:
      "Certaines villes offrent un stationnement gratuit ou réduit aux voitures électriques. Comment en profiter, conditions et démarches. Le point sur cet avantage.",
    h1: "Stationnement gratuit pour voiture électrique",
    updated: "2026-07-15",
    lede: "Plusieurs villes encouragent l'électrique par des facilités de stationnement. Voici comment savoir si vous pouvez en bénéficier.",
    sections: [
      {
        h2: "Un avantage variable selon les villes",
        paragraphs: [
          "Certaines communes proposent le stationnement gratuit ou à tarif réduit pour les véhicules électriques, en voirie ou dans certains parkings. Cet avantage n'est pas généralisé : il dépend de la politique locale.",
          "Il faut donc se renseigner ville par ville.",
        ],
      },
      {
        h2: "Les conditions à connaître",
        paragraphs: [
          "Quand il existe, cet avantage peut nécessiter une inscription, un macaron ou une carte de stationnement dédiée, parfois sous conditions (résident, durée limitée). Les règles varient d'une commune à l'autre.",
          "Renseignez-vous auprès de votre mairie pour les modalités exactes.",
        ],
      },
      {
        h2: "Au-delà du stationnement",
        paragraphs: [
          "Les véhicules électriques bénéficient aussi d'autres avantages : accès aux zones à faibles émissions sans restriction, parfois voies réservées ou tarifs préférentiels. Autant d'atouts au quotidien.",
          "Ces avantages renforcent l'intérêt de passer à l'électrique en ville.",
        ],
      },
      {
        h2: "L'essentiel reste la recharge",
        paragraphs: [
          "Le principal levier d'économie demeure la recharge à domicile en heures creuses. Le stationnement avantageux est un bonus appréciable, pas le cœur du sujet.",
          "Nos installateurs IRVE vous équipent pour recharger chez vous au meilleur coût.",
        ],
      },
    ],
    faq: [
      { q: "Le stationnement est-il gratuit partout pour les électriques ?", a: "Non, cela dépend de chaque commune. Certaines offrent la gratuité ou un tarif réduit, d'autres non." },
      { q: "Comment en bénéficier ?", a: "Selon les villes, via une inscription, un macaron ou une carte dédiée, parfois sous conditions. Renseignez-vous en mairie." },
      { q: "Quels autres avantages en ville ?", a: "L'accès sans restriction aux zones à faibles émissions et, selon les villes, des facilités de circulation ou de tarif." },
    ],
    related: ["aides-voiture-electrique-ile-de-france", "cout-reel-voiture-electrique", "borne-de-recharge-maison", "voiture-electrique-ou-thermique"],
  },
  {
    slug: "recharger-scooter-electrique",
    metaTitle: "Comment recharger un scooter électrique ? | Choisis Ta borne",
    metaDescription:
      "Recharger un scooter ou deux-roues électrique : batterie amovible, prise domestique, temps de charge et sécurité. Le guide pratique pour bien recharger.",
    h1: "Comment recharger un scooter électrique ?",
    updated: "2026-07-15",
    lede: "Le scooter électrique se recharge simplement, souvent sur une prise domestique. Voici les bonnes pratiques pour une recharge sûre et efficace.",
    sections: [
      {
        h2: "Batterie amovible ou intégrée",
        paragraphs: [
          "De nombreux scooters électriques disposent d'une batterie amovible que l'on peut remonter chez soi pour la recharger sur une prise classique. D'autres modèles se rechargent directement, le scooter branché.",
          "Ce détail change la façon de recharger au quotidien.",
        ],
      },
      {
        h2: "Sur quelle prise recharger",
        paragraphs: [
          "La plupart des deux-roues électriques se rechargent sur une prise domestique standard via leur chargeur dédié, en quelques heures. La puissance étant modérée, une borne de voiture n'est généralement pas nécessaire.",
          "Veillez toutefois à utiliser une prise en bon état et un circuit adapté.",
        ],
      },
      {
        h2: "Sécurité et bonnes pratiques",
        paragraphs: [
          "Quelques réflexes pour recharger en sécurité :",
        ],
        list: [
          "Utiliser le chargeur d'origine fourni avec le scooter.",
          "Recharger dans un endroit sec et ventilé.",
          "Éviter les multiprises et rallonges de mauvaise qualité.",
          "Surveiller l'état de la batterie et respecter les consignes du constructeur.",
        ],
      },
      {
        h2: "Et si vous avez aussi une voiture électrique",
        paragraphs: [
          "Si vous possédez également une voiture électrique, une borne à domicile s'occupe de la voiture pendant que le scooter se recharge sur une prise dédiée.",
          "Nos installateurs IRVE peuvent prévoir un circuit adapté à vos différents véhicules.",
        ],
      },
    ],
    faq: [
      { q: "Faut-il une borne pour un scooter électrique ?", a: "Non, la plupart se rechargent sur une prise domestique via leur chargeur dédié. Une borne de voiture n'est pas nécessaire." },
      { q: "Combien de temps pour recharger ?", a: "Généralement quelques heures selon la capacité de la batterie et le chargeur fourni." },
      { q: "Peut-on recharger une batterie amovible chez soi ?", a: "Oui, c'est l'un des atouts des scooters à batterie amovible : on la remonte pour la recharger sur une prise classique." },
    ],
    related: ["prise-renforcee-ou-wallbox", "temps-de-recharge-voiture-electrique", "borne-de-recharge-maison", "borne-recharge-hybride-rechargeable"],
  },
  {
    slug: "borne-recharge-alfen",
    metaTitle: "Borne de recharge Alfen : caractéristiques et usages | Choisis Ta borne",
    metaDescription:
      "La borne Alfen est réputée pour sa robustesse et sa gestion de charge, notamment en entreprise et en copropriété. Caractéristiques, atouts et cas d'usage.",
    h1: "Borne de recharge Alfen : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Le fabricant Alfen est reconnu pour ses bornes robustes et évolutives, souvent retenues en entreprise et en copropriété. Tour d'horizon.",
    sections: [
      {
        h2: "Un fabricant orienté professionnel",
        paragraphs: [
          "Alfen est un constructeur européen de bornes de recharge, apprécié pour la solidité de ses équipements et leurs fonctions de gestion de charge. Ses bornes équipent aussi bien des particuliers que des sites collectifs.",
          "La marque est particulièrement présente sur les projets d'entreprise et de copropriété.",
        ],
      },
      {
        h2: "La gestion de charge et le pilotage",
        paragraphs: [
          "L'un des atouts des bornes Alfen est la gestion dynamique de la puissance (load balancing), qui répartit l'énergie disponible entre plusieurs bornes sans dépasser l'abonnement du site.",
          "C'est précieux dès que plusieurs points de charge cohabitent.",
        ],
      },
      {
        h2: "Pour quels usages",
        paragraphs: [
          "Les bornes Alfen conviennent à de nombreux contextes : maison individuelle, parking de copropriété, flotte d'entreprise ou parking de bureaux. Leur robustesse en fait un choix durable.",
          "Le modèle et la puissance se choisissent selon votre installation et votre véhicule.",
        ],
      },
      {
        h2: "Bien la faire installer",
        paragraphs: [
          "Comme toute borne, une Alfen doit être posée par un électricien certifié IRVE pour garantir la conformité, la sécurité et l'éligibilité aux aides.",
          "Nos installateurs partenaires vous conseillent la borne et la puissance adaptées, Alfen ou autre marque de qualité.",
        ],
      },
    ],
    faq: [
      { q: "La borne Alfen est-elle adaptée à la maison ?", a: "Oui, comme à la copropriété et à l'entreprise. On choisit le modèle et la puissance selon l'installation et le véhicule." },
      { q: "Qu'est-ce que la gestion de charge Alfen ?", a: "Une répartition dynamique de la puissance entre plusieurs bornes pour ne pas dépasser l'abonnement électrique du site." },
      { q: "Qui peut installer une borne Alfen ?", a: "Un électricien certifié IRVE, pour garantir conformité, sécurité et éligibilité aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "wallbox-connectee", "borne-de-recharge-entreprise", "borne-recharge-copropriete"],
  },
  {
    slug: "borne-recharge-parking-interieur",
    metaTitle: "Borne de recharge en parking intérieur de copropriété | Choisis Ta borne",
    metaDescription:
      "Installer une borne en parking intérieur ou en sous-sol de copropriété : droit à la prise, sécurité incendie, ventilation, câblage. Le guide complet et devis gratuit.",
    h1: "Borne de recharge en parking intérieur de copropriété",
    updated: "2026-07-15",
    lede: "Les parkings intérieurs et sous-sols de copropriété sont le cas le plus fréquent pour installer une borne. Voici les points clés d'une pose réussie.",
    sections: [
      {
        h2: "Le cas le plus courant en copropriété",
        paragraphs: [
          "En immeuble, la majorité des places se trouvent en parking intérieur ou en sous-sol. Le droit à la prise vous permet d'y équiper votre place à vos frais, sans vote de l'assemblée générale.",
          "La borne peut être raccordée à votre compteur individuel, sans abonnement à un opérateur.",
        ],
      },
      {
        h2: "Sécurité et ventilation",
        paragraphs: [
          "En sous-sol, l'installation respecte des règles de sécurité, notamment en matière de protection électrique et de dispositions incendie. Un installateur IRVE connaît ces contraintes et pose une borne conforme.",
          "La sécurité de l'ensemble de la copropriété est ainsi préservée.",
        ],
      },
      {
        h2: "Câblage et distance au tableau",
        paragraphs: [
          "Le principal poste de coût est le cheminement du câble entre le tableau ou la colonne électrique et votre place. Une étude préalable permet de chiffrer précisément ce trajet.",
          "C'est ce qui explique l'essentiel des écarts de prix d'un devis à l'autre.",
        ],
      },
      {
        h2: "Individuel ou collectif",
        paragraphs: [
          "Pour une seule place, le droit à la prise est la voie la plus rapide. Si plusieurs copropriétaires sont intéressés, une infrastructure collective votée en assemblée peut être plus économique.",
          "Nos installateurs IRVE vous conseillent et fournissent jusqu'à 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une borne en sous-sol de copropriété ?", a: "Oui, via le droit à la prise, dans le respect des règles de sécurité et incendie, avec une pose par un installateur IRVE." },
      { q: "Faut-il l'accord de l'assemblée générale ?", a: "Non pour une installation individuelle : le point est seulement inscrit à l'ordre du jour pour information." },
      { q: "Qu'est-ce qui fait varier le prix ?", a: "Surtout la distance de câblage entre le tableau ou la colonne et votre place de parking." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "borne-recharge-parking-exterieur", "prime-advenir"],
  },
  {
    slug: "voiture-electrique-ecologie",
    metaTitle: "La voiture électrique est-elle écologique ? Le vrai bilan | Choisis Ta borne",
    metaDescription:
      "La voiture électrique est-elle vraiment écologique ? Émissions à l'usage, bilan sur le cycle de vie, batterie et mix électrique : un point factuel et nuancé.",
    h1: "La voiture électrique, un moyen de transport écologique ?",
    updated: "2026-07-15",
    lede: "La voiture électrique est souvent présentée comme plus propre. Voici un point factuel sur son bilan environnemental, sans caricature.",
    sections: [
      {
        h2: "Zéro émission à l'usage",
        paragraphs: [
          "À la conduite, une voiture électrique n'émet ni CO2 ni polluants d'échappement. C'est un atout majeur pour la qualité de l'air, en particulier en ville et dans les zones à faibles émissions.",
          "Ce point la distingue nettement d'un véhicule thermique.",
        ],
      },
      {
        h2: "Le bilan sur le cycle de vie",
        paragraphs: [
          "La fabrication, notamment de la batterie, a un coût environnemental initial plus élevé. Mais sur l'ensemble de sa durée de vie, l'électrique présente un bilan carbone généralement plus favorable, surtout avec un mix électrique peu carboné comme en France.",
          "Plus la voiture roule, plus cet avantage se creuse.",
        ],
      },
      {
        h2: "La question de la batterie",
        paragraphs: [
          "La batterie se dégrade lentement, bénéficie d'une seconde vie en stockage stationnaire, puis d'un recyclage de ses matériaux. Les filières de recyclage progressent et améliorent le bilan global.",
          "La batterie n'est donc pas un simple déchet en fin de vie automobile.",
        ],
      },
      {
        h2: "Recharger proprement",
        paragraphs: [
          "Recharger avec une électricité peu carbonée, en heures creuses, voire en autoconsommation solaire, optimise encore le bilan. Une borne à domicile pilotable facilite ces bonnes pratiques.",
          "Nos installateurs IRVE vous équipent pour une recharge sobre et économique.",
        ],
      },
    ],
    faq: [
      { q: "La voiture électrique est-elle vraiment plus propre ?", a: "À l'usage, elle n'émet pas de polluants. Sur le cycle de vie, son bilan est généralement plus favorable, surtout avec un mix électrique peu carboné." },
      { q: "Et l'impact de la batterie ?", a: "Sa fabrication a un coût, mais la seconde vie et le recyclage améliorent le bilan. Elle se dégrade lentement en usage normal." },
      { q: "Comment recharger le plus proprement ?", a: "Avec une électricité peu carbonée, en heures creuses, voire en autoconsommation solaire via une borne pilotable." },
    ],
    related: ["idees-recues-voiture-electrique", "recyclage-batterie-voiture-electrique", "borne-recharge-panneaux-solaires", "cout-reel-voiture-electrique"],
  },
  {
    slug: "obligation-borne-recharge-parking-prive",
    metaTitle: "Obligation de borne de recharge sur parking privé d'entreprise | Choisis Ta borne",
    metaDescription:
      "Quelles obligations pour équiper de bornes un parking privé d'entreprise ? Loi LOM, pré-équipement, seuils de places. Le point sur la réglementation.",
    h1: "Obligation de borne de recharge sur parking privé d'entreprise",
    updated: "2026-07-15",
    lede: "La réglementation impose progressivement l'équipement en bornes de certains parkings d'entreprise. Voici ce que prévoit la loi et comment s'y conformer.",
    sections: [
      {
        h2: "Ce que prévoit la loi LOM",
        paragraphs: [
          "La loi d'orientation des mobilités a instauré des obligations de pré-équipement et d'équipement en bornes pour les parkings, notamment ceux des bâtiments non résidentiels. L'objectif est d'accélérer le déploiement de la recharge sur les lieux de travail.",
          "Ces obligations s'appliquent selon la taille du parking et la nature du bâtiment.",
        ],
      },
      {
        h2: "Le pré-équipement des parkings",
        paragraphs: [
          "Les bâtiments neufs ou lourdement rénovés dotés d'un parking doivent être pré-équipés (fourreaux, chemins de câbles, dimensionnement) pour une part de leurs places, afin de faciliter l'installation ultérieure de bornes.",
          "Ce pré-équipement réduit fortement le coût des installations futures.",
        ],
      },
      {
        h2: "L'obligation d'un nombre minimal de bornes",
        paragraphs: [
          "Au-delà d'un certain nombre de places, les parkings de bâtiments non résidentiels doivent comporter un nombre minimal de points de recharge. Les seuils et échéances évoluant régulièrement, vérifiez ceux applicables à votre site.",
          "Un bureau d'études ou un installateur IRVE peut vous aider à faire le point.",
        ],
      },
      {
        h2: "Se mettre en conformité",
        paragraphs: [
          "Pour se conformer, l'entreprise réalise une étude, choisit une puissance et un mode de gestion adaptés, puis fait installer les bornes par un professionnel certifié IRVE. La prime ADVENIR peut soutenir le projet.",
          "Nos partenaires accompagnent les entreprises de l'étude à la mise en service.",
        ],
      },
    ],
    faq: [
      { q: "Toutes les entreprises doivent-elles installer des bornes ?", a: "Les obligations dépendent de la taille du parking et de la nature du bâtiment. Vérifiez les seuils en vigueur pour votre site." },
      { q: "Qu'est-ce que le pré-équipement ?", a: "La mise en place de fourreaux, chemins de câbles et d'un dimensionnement électrique pour installer facilement des bornes par la suite." },
      { q: "Existe-t-il des aides ?", a: "Oui, la prime ADVENIR soutient l'installation de bornes en entreprise, en complément de l'amortissement de l'investissement." },
    ],
    related: ["borne-de-recharge-entreprise", "quota-vehicules-electriques-flotte", "aides-borne-recharge-entreprise", "loi-lom-copropriete"],
  },
  {
    slug: "electrifier-flotte-automobile",
    metaTitle: "Électrifier sa flotte automobile d'entreprise : le guide | Choisis Ta borne",
    metaDescription:
      "Comment électrifier la flotte automobile de son entreprise ? Quotas légaux, coût total, recharge au dépôt et au domicile des salariés. Les étapes clés.",
    h1: "Comment électrifier sa flotte automobile d'entreprise ?",
    updated: "2026-07-15",
    lede: "Électrifier une flotte réduit les coûts d'usage et répond aux obligations légales. Voici les étapes et les points d'attention d'un projet réussi.",
    sections: [
      {
        h2: "Pourquoi électrifier sa flotte",
        paragraphs: [
          "L'électrification d'une flotte répond à la fois à une logique économique (coût au kilomètre et entretien réduits) et réglementaire, avec des quotas de véhicules à faibles émissions lors du renouvellement des grandes flottes.",
          "C'est aussi un levier d'image et de responsabilité environnementale.",
        ],
      },
      {
        h2: "Anticiper la recharge",
        paragraphs: [
          "Le succès d'une flotte électrique repose sur la recharge. Trois lieux se combinent : le dépôt de l'entreprise, le lieu de travail et le domicile des collaborateurs pour ceux qui disposent d'un véhicule de fonction.",
          "Un dimensionnement adapté évite les files d'attente et les dépassements de puissance.",
        ],
      },
      {
        h2: "Le coût total de possession",
        paragraphs: [
          "Le raisonnement se fait en coût total de possession (TCO) : achat ou location, recharge, entretien, fiscalité et aides. Sur des véhicules qui roulent beaucoup, l'électrique est souvent gagnant.",
          "Une étude TCO éclaire la décision, véhicule par véhicule.",
        ],
      },
      {
        h2: "Les étapes d'un projet réussi",
        paragraphs: [
          "Pour structurer le projet :",
        ],
        list: [
          "Auditer les usages et les kilométrages de la flotte.",
          "Choisir les véhicules et le calendrier de renouvellement.",
          "Dimensionner la recharge (dépôt, travail, domicile).",
          "Installer les bornes avec un professionnel IRVE et prévoir la supervision.",
        ],
      },
    ],
    faq: [
      { q: "L'électrification d'une flotte est-elle obligatoire ?", a: "Les grandes flottes sont soumises à des quotas de véhicules à faibles émissions lors du renouvellement. Les seuils et taux évoluent : vérifiez la réglementation en vigueur." },
      { q: "Où recharger une flotte ?", a: "En combinant le dépôt de l'entreprise, le lieu de travail et le domicile des collaborateurs en véhicule de fonction." },
      { q: "Comment évaluer la rentabilité ?", a: "Par une analyse du coût total de possession (achat, recharge, entretien, fiscalité, aides), souvent favorable pour les gros rouleurs." },
    ],
    related: ["borne-de-recharge-entreprise", "quota-vehicules-electriques-flotte", "supervision-borne-recharge", "aides-borne-recharge-entreprise"],
  },
  {
    slug: "avantage-en-nature-voiture-electrique",
    metaTitle: "Avantage en nature voiture électrique : les règles | Choisis Ta borne",
    metaDescription:
      "Comment est calculé l'avantage en nature pour un véhicule électrique de fonction et la recharge au travail ? Règles, spécificités et points à vérifier.",
    h1: "Avantage en nature pour une voiture électrique de fonction",
    updated: "2026-07-15",
    lede: "Un véhicule de fonction électrique et la recharge sur le lieu de travail relèvent de règles d'avantage en nature spécifiques. Voici les grands principes.",
    sections: [
      {
        h2: "Qu'est-ce que l'avantage en nature",
        paragraphs: [
          "Lorsqu'un salarié utilise à titre privé un véhicule de fonction, cet avantage est évalué et soumis à cotisations et à l'impôt : c'est l'avantage en nature (AEN). Son mode de calcul est encadré.",
          "Des règles particulières s'appliquent aux véhicules électriques.",
        ],
      },
      {
        h2: "Des règles favorables à l'électrique",
        paragraphs: [
          "Pour encourager l'électrique, des dispositifs ont prévu un traitement plus avantageux de l'AEN des véhicules électriques (par exemple un abattement) ainsi qu'un régime spécifique pour la recharge fournie au travail.",
          "Ces règles ayant évolué récemment, vérifiez le dispositif exact en vigueur au moment de votre calcul.",
        ],
      },
      {
        h2: "La recharge sur le lieu de travail",
        paragraphs: [
          "La mise à disposition d'une borne et de l'électricité pour recharger au travail peut bénéficier d'un traitement spécifique, souvent favorable, dans le cadre de l'avantage en nature.",
          "C'est un argument pour équiper le parking de l'entreprise.",
        ],
      },
      {
        h2: "Bien s'informer",
        paragraphs: [
          "Les modalités précises (montants, abattements, plafonds) évoluant régulièrement, appuyez-vous sur les textes en vigueur et, si besoin, sur votre expert-comptable.",
          "Côté équipement, nos installateurs IRVE aident les entreprises à déployer la recharge sur site.",
        ],
      },
    ],
    faq: [
      { q: "L'électrique bénéficie-t-il d'un AEN plus avantageux ?", a: "Des dispositifs ont prévu un traitement favorable (abattement, régime de la recharge au travail). Ces règles évoluant, vérifiez le dispositif en vigueur." },
      { q: "La recharge au travail est-elle un avantage imposable ?", a: "Elle peut bénéficier d'un traitement spécifique, souvent favorable, dans le cadre de l'avantage en nature." },
      { q: "Où trouver les montants exacts ?", a: "Dans les textes en vigueur au moment du calcul ; votre expert-comptable peut vous accompagner." },
    ],
    related: ["fiscalite-voiture-electrique-entreprise", "borne-de-recharge-entreprise", "aides-achat-voiture-electrique-entreprise", "electrifier-flotte-automobile"],
  },
  {
    slug: "fiscalite-voiture-electrique-entreprise",
    metaTitle: "Fiscalité de la voiture électrique en entreprise | Choisis Ta borne",
    metaDescription:
      "Taxes sur les véhicules, amortissement, avantage en nature : la fiscalité de la voiture électrique en entreprise et ses atouts. Le point à jour.",
    h1: "Fiscalité de la voiture électrique en entreprise",
    updated: "2026-07-15",
    lede: "La voiture électrique bénéficie d'une fiscalité globalement favorable en entreprise. Voici les principaux mécanismes à connaître.",
    sections: [
      {
        h2: "Les taxes sur les véhicules",
        paragraphs: [
          "Les taxes annuelles sur les véhicules de société pèsent surtout sur les modèles les plus émetteurs. Les véhicules électriques, sans émissions de CO2 à l'usage, en sont largement préservés, ce qui allège la facture fiscale.",
          "C'est l'un des principaux atouts fiscaux de l'électrique en entreprise.",
        ],
      },
      {
        h2: "L'amortissement du véhicule",
        paragraphs: [
          "L'amortissement déductible des véhicules de tourisme est plafonné selon leur niveau d'émissions, avec un plafond plus favorable pour les véhicules électriques. La batterie peut, dans certains cas, faire l'objet d'un traitement distinct.",
          "Ces règles rendent l'électrique plus intéressante à immobiliser.",
        ],
      },
      {
        h2: "L'avantage en nature",
        paragraphs: [
          "Pour un véhicule de fonction utilisé à titre privé, l'avantage en nature a bénéficié de règles favorables à l'électrique, tout comme la recharge fournie au travail. Ces dispositifs évoluent : vérifiez ceux en vigueur.",
          "Ils réduisent le coût pour l'employeur comme pour le salarié.",
        ],
      },
      {
        h2: "Un cadre à vérifier chaque année",
        paragraphs: [
          "La fiscalité automobile évolue régulièrement. Appuyez-vous sur les textes de l'année et sur votre expert-comptable pour un calcul exact.",
          "Côté recharge, nos installateurs IRVE équipent les sites d'entreprise, avec le soutien de la prime ADVENIR.",
        ],
      },
    ],
    faq: [
      { q: "L'électrique est-elle avantagée fiscalement en entreprise ?", a: "Oui, globalement : moindre taxation liée aux émissions, plafond d'amortissement plus favorable et règles avantageuses d'avantage en nature." },
      { q: "Ces règles changent-elles souvent ?", a: "Oui, la fiscalité automobile évolue régulièrement. Vérifiez les textes de l'année en cours." },
      { q: "La recharge en entreprise est-elle aidée ?", a: "La prime ADVENIR soutient l'installation de bornes en entreprise, en plus des avantages fiscaux du véhicule." },
    ],
    related: ["avantage-en-nature-voiture-electrique", "borne-de-recharge-entreprise", "aides-achat-voiture-electrique-entreprise", "electrifier-flotte-automobile"],
  },
  {
    slug: "supervision-borne-recharge",
    metaTitle: "Supervision des bornes de recharge : guide pour les entreprises | Choisis Ta borne",
    metaDescription:
      "À quoi sert la supervision des bornes de recharge en entreprise ? Pilotage, facturation, maintenance, reporting. Le point sur cet outil clé pour les flottes et sites.",
    h1: "Supervision des bornes de recharge : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Dès que plusieurs bornes cohabitent, la supervision devient essentielle pour piloter, facturer et maintenir l'installation. Explications.",
    sections: [
      {
        h2: "Qu'est-ce que la supervision",
        paragraphs: [
          "La supervision est un logiciel qui pilote à distance un parc de bornes : suivi des sessions de charge, gestion de la puissance, facturation, maintenance et reporting. Elle est indispensable en entreprise et en collectif.",
          "Elle transforme un ensemble de bornes en un service géré.",
        ],
      },
      {
        h2: "Les fonctions clés",
        paragraphs: [
          "Une plateforme de supervision permet généralement de :",
        ],
        list: [
          "Répartir la puissance disponible entre les bornes (load balancing).",
          "Identifier les utilisateurs et facturer la consommation.",
          "Suivre l'état des bornes et déclencher la maintenance.",
          "Produire des rapports d'usage et de coûts.",
        ],
      },
      {
        h2: "Pour quels sites",
        paragraphs: [
          "La supervision s'adresse aux flottes d'entreprise, aux parkings de bureaux et aux copropriétés équipées de plusieurs points de charge. Elle garantit une utilisation équitable et maîtrisée de l'énergie.",
          "Elle s'accompagne souvent d'un abonnement à l'opérateur qui l'assure.",
        ],
      },
      {
        h2: "La mettre en place",
        paragraphs: [
          "Le choix de la solution de supervision se fait en même temps que celui des bornes et de l'architecture électrique. Un installateur IRVE et un opérateur vous accompagnent.",
          "Nos partenaires déploient bornes et supervision adaptées à votre site.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert la supervision des bornes ?", a: "À piloter la puissance, identifier les utilisateurs, facturer la consommation, suivre l'état des bornes et produire des rapports." },
      { q: "Est-elle nécessaire en entreprise ?", a: "Dès que plusieurs bornes cohabitent, oui : elle garantit une utilisation équitable et maîtrisée de l'énergie." },
      { q: "Implique-t-elle un abonnement ?", a: "Le plus souvent, la supervision est assurée par un opérateur via un abonnement, qui inclut le pilotage et la maintenance." },
    ],
    related: ["pilotage-energetique-recharge", "operateur-borne-de-recharge", "borne-de-recharge-entreprise", "electrifier-flotte-automobile"],
  },
  {
    slug: "pilotage-energetique-recharge",
    metaTitle: "Pilotage énergétique de la recharge : quel intérêt ? | Choisis Ta borne",
    metaDescription:
      "Le pilotage énergétique optimise la recharge des voitures électriques : délestage, heures creuses, répartition de puissance. Intérêt pour les particuliers et les sites.",
    h1: "Le pilotage énergétique de la recharge",
    updated: "2026-07-15",
    lede: "Le pilotage énergétique adapte la recharge à la puissance disponible et aux tarifs. C'est un levier majeur d'économie et de fiabilité, à domicile comme sur site.",
    sections: [
      {
        h2: "Qu'est-ce que le pilotage énergétique",
        paragraphs: [
          "Le pilotage énergétique consiste à moduler la puissance de recharge en fonction des besoins du logement ou du site, des tarifs de l'électricité et de la puissance souscrite. Il évite les dépassements et optimise le coût.",
          "C'est le cerveau d'une recharge intelligente.",
        ],
      },
      {
        h2: "Le délestage dynamique",
        paragraphs: [
          "À domicile, le délestage dynamique réduit automatiquement la puissance de charge quand d'autres appareils consomment, puis l'augmente ensuite. Cela évite de faire disjoncter l'installation sans surdimensionner l'abonnement.",
          "C'est particulièrement utile sur les abonnements modestes.",
        ],
      },
      {
        h2: "La répartition de puissance sur plusieurs bornes",
        paragraphs: [
          "Sur un site avec plusieurs bornes, le pilotage répartit la puissance disponible entre les véhicules (load balancing), pour recharger le maximum de voitures sans dépasser la capacité électrique du site.",
          "C'est indispensable en entreprise et en copropriété.",
        ],
      },
      {
        h2: "Recharger au meilleur tarif",
        paragraphs: [
          "Le pilotage programme aussi la charge sur les heures creuses et peut prioriser l'énergie solaire en autoconsommation. Résultat : une recharge moins chère et plus sobre.",
          "Nos installateurs IRVE proposent des bornes pilotables adaptées à votre situation.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert le pilotage énergétique ?", a: "À adapter la puissance de recharge aux besoins et aux tarifs, éviter les dépassements et réduire le coût de la recharge." },
      { q: "Qu'est-ce que le délestage dynamique ?", a: "Une fonction qui réduit la charge quand le logement consomme, puis l'augmente ensuite, sans surdimensionner l'abonnement." },
      { q: "Est-ce utile à domicile ?", a: "Oui, surtout sur un abonnement modeste, et pour programmer la charge en heures creuses ou sur l'énergie solaire." },
    ],
    related: ["wallbox-connectee", "heures-creuses-recharge-voiture-electrique", "supervision-borne-recharge", "borne-recharge-panneaux-solaires"],
  },
  {
    slug: "quota-vehicules-electriques-flotte",
    metaTitle: "Quotas de véhicules électriques dans les flottes d'entreprise | Choisis Ta borne",
    metaDescription:
      "Les grandes flottes doivent intégrer une part croissante de véhicules à faibles émissions lors du renouvellement. Qui est concerné et comment s'y préparer.",
    h1: "Quotas de véhicules électriques dans les flottes",
    updated: "2026-07-15",
    lede: "La loi impose aux grandes flottes une part minimale de véhicules à faibles émissions lors du renouvellement. Voici ce que cela implique.",
    sections: [
      {
        h2: "Le principe des quotas",
        paragraphs: [
          "Les entreprises et gestionnaires de grandes flottes doivent intégrer, lors du renouvellement de leur parc, une proportion minimale de véhicules à faibles émissions, dont les électriques. Ce taux augmente par paliers au fil des années.",
          "L'objectif est d'accélérer la transition du parc automobile professionnel.",
        ],
      },
      {
        h2: "Qui est concerné",
        paragraphs: [
          "L'obligation vise les flottes dépassant un certain nombre de véhicules. Les seuils précis et les taux applicables évoluant régulièrement, vérifiez ceux en vigueur pour votre entreprise.",
          "Les petites flottes ne sont en principe pas soumises à ces quotas, mais peuvent anticiper.",
        ],
      },
      {
        h2: "Comment s'y préparer",
        paragraphs: [
          "La meilleure approche est d'anticiper le calendrier de renouvellement, d'auditer les usages et de planifier l'électrification progressive, recharge comprise.",
          "Une flotte se prépare autant côté véhicules que côté infrastructure de recharge.",
        ],
      },
      {
        h2: "La recharge, condition de réussite",
        paragraphs: [
          "Respecter les quotas suppose de pouvoir recharger : au dépôt, au travail et au domicile des collaborateurs. C'est un chantier à mener en parallèle du renouvellement des véhicules.",
          "Nos installateurs IRVE accompagnent les entreprises sur ce volet.",
        ],
      },
    ],
    faq: [
      { q: "Quelles flottes sont concernées par les quotas ?", a: "Les grandes flottes au-delà d'un certain nombre de véhicules. Les seuils et taux évoluent : vérifiez la réglementation en vigueur." },
      { q: "Le taux augmente-t-il avec le temps ?", a: "Oui, la part minimale de véhicules à faibles émissions au renouvellement croît par paliers." },
      { q: "Comment se mettre en conformité ?", a: "En anticipant le renouvellement, en électrifiant progressivement et en déployant l'infrastructure de recharge nécessaire." },
    ],
    related: ["electrifier-flotte-automobile", "borne-de-recharge-entreprise", "obligation-borne-recharge-parking-prive", "fiscalite-voiture-electrique-entreprise"],
  },
  {
    slug: "aides-borne-recharge-entreprise",
    metaTitle: "Aides pour l'installation de bornes en entreprise | Choisis Ta borne",
    metaDescription:
      "Quelles aides pour installer des bornes de recharge en entreprise ? Prime ADVENIR pro, amortissement, dispositifs locaux. Le point pour réduire l'investissement.",
    h1: "Aides pour installer des bornes de recharge en entreprise",
    updated: "2026-07-15",
    lede: "Plusieurs dispositifs réduisent le coût d'installation de bornes sur un site professionnel. Voici les principaux à connaître.",
    sections: [
      {
        h2: "La prime ADVENIR pour les professionnels",
        paragraphs: [
          "Le programme ADVENIR soutient l'installation de bornes pour les entreprises, notamment sur les parkings destinés aux salariés ou aux flottes. La prime prend en charge une part des coûts, dans la limite de plafonds.",
          "Les montants et conditions évoluant, vérifiez le barème ADVENIR en vigueur pour votre projet.",
        ],
      },
      {
        h2: "L'amortissement de l'investissement",
        paragraphs: [
          "L'installation de bornes est un investissement amortissable, ce qui réduit son coût net pour l'entreprise. C'est un levier fiscal à intégrer au plan de financement.",
          "Votre expert-comptable peut préciser les modalités applicables.",
        ],
      },
      {
        h2: "Les dispositifs locaux",
        paragraphs: [
          "Certaines régions et collectivités proposent des aides complémentaires pour la recharge professionnelle, parfois liées aux zones à faibles émissions. Renseignez-vous auprès de votre territoire.",
          "Ces aides peuvent se cumuler avec ADVENIR.",
        ],
      },
      {
        h2: "Monter son dossier",
        paragraphs: [
          "Un installateur IRVE et un opérateur vous aident à dimensionner le projet et à constituer les demandes d'aides. C'est aussi la garantie d'une installation conforme.",
          "Nos partenaires accompagnent les entreprises de l'étude au financement.",
        ],
      },
    ],
    faq: [
      { q: "La prime ADVENIR s'applique-t-elle aux entreprises ?", a: "Oui, ADVENIR soutient l'installation de bornes pour les salariés et les flottes, dans la limite de plafonds. Vérifiez le barème en vigueur." },
      { q: "L'investissement est-il amortissable ?", a: "Oui, l'installation de bornes est un investissement amortissable, ce qui réduit son coût net pour l'entreprise." },
      { q: "Existe-t-il des aides locales ?", a: "Certaines régions et collectivités proposent des aides complémentaires, parfois cumulables avec ADVENIR." },
    ],
    related: ["borne-de-recharge-entreprise", "obligation-borne-recharge-parking-prive", "prime-advenir", "electrifier-flotte-automobile"],
  },
  {
    slug: "aides-achat-voiture-electrique-entreprise",
    metaTitle: "Aides à l'achat d'une voiture électrique pour les entreprises | Choisis Ta borne",
    metaDescription:
      "Quelles aides pour l'achat d'un véhicule électrique en entreprise ? Dispositifs nationaux et locaux, avantages fiscaux. Le point pour réduire le coût.",
    h1: "Aides à l'achat d'une voiture électrique pour les entreprises",
    updated: "2026-07-15",
    lede: "Les entreprises peuvent réduire le coût d'acquisition d'un véhicule électrique grâce à plusieurs dispositifs. Voici les leviers principaux.",
    sections: [
      {
        h2: "Les aides à l'acquisition",
        paragraphs: [
          "Selon les périodes, des aides nationales à l'achat ou à la conversion peuvent concerner les véhicules professionnels, avec des conditions propres aux entreprises. Ces dispositifs évoluant fréquemment, vérifiez ceux en vigueur.",
          "Les collectivités proposent parfois des aides complémentaires.",
        ],
      },
      {
        h2: "Les avantages fiscaux",
        paragraphs: [
          "Au-delà des aides directes, l'électrique bénéficie d'atouts fiscaux : moindre taxation liée aux émissions, plafond d'amortissement plus favorable et règles avantageuses d'avantage en nature pour les véhicules de fonction.",
          "Ces mécanismes réduisent le coût total pour l'entreprise.",
        ],
      },
      {
        h2: "Ne pas oublier la recharge",
        paragraphs: [
          "L'achat du véhicule va de pair avec la recharge : la prime ADVENIR soutient l'installation de bornes sur site, et la recharge à domicile des collaborateurs complète le dispositif.",
          "C'est l'ensemble véhicule + recharge qui optimise le coût d'usage.",
        ],
      },
      {
        h2: "Faire le point pour votre flotte",
        paragraphs: [
          "Le meilleur réflexe est de raisonner en coût total de possession et de vérifier, chaque année, les aides et règles fiscales applicables.",
          "Nos installateurs IRVE prennent en charge le volet recharge de votre projet.",
        ],
      },
    ],
    faq: [
      { q: "Existe-t-il des aides à l'achat pour les entreprises ?", a: "Selon les périodes, des dispositifs nationaux et locaux peuvent s'appliquer. Ils évoluent souvent : vérifiez ceux en vigueur." },
      { q: "Quels avantages fiscaux pour l'électrique ?", a: "Moindre taxation liée aux émissions, amortissement plus favorable et règles avantageuses d'avantage en nature." },
      { q: "La recharge est-elle aidée aussi ?", a: "Oui, la prime ADVENIR soutient l'installation de bornes en entreprise, en complément des aides sur le véhicule." },
    ],
    related: ["fiscalite-voiture-electrique-entreprise", "avantage-en-nature-voiture-electrique", "aides-borne-recharge-entreprise", "aides-achat-voiture-electrique"],
  },
  {
    slug: "operateur-borne-de-recharge",
    metaTitle: "Opérateur de borne de recharge : quels services ? | Choisis Ta borne",
    metaDescription:
      "Que fait un opérateur de borne de recharge ? Supervision, facturation, maintenance, itinérance. Le rôle des opérateurs pour les copropriétés et les entreprises.",
    h1: "Opérateur de borne de recharge : quels services ?",
    updated: "2026-07-15",
    lede: "Derrière une infrastructure de recharge partagée se trouve souvent un opérateur. Voici ce qu'il apporte et quand il est utile.",
    sections: [
      {
        h2: "Le rôle d'un opérateur",
        paragraphs: [
          "Un opérateur de bornes exploite l'infrastructure pour le compte d'une copropriété, d'une entreprise ou d'un site : il assure la supervision, la facturation des consommations, la maintenance et parfois l'accès à des réseaux d'itinérance.",
          "Il transforme un ensemble de bornes en service clé en main.",
        ],
      },
      {
        h2: "Les services proposés",
        paragraphs: [
          "Un opérateur prend généralement en charge :",
        ],
        list: [
          "La supervision et le pilotage des bornes.",
          "La facturation individualisée de l'électricité.",
          "La maintenance et l'assistance des utilisateurs.",
          "L'accès à des badges ou applications d'itinérance.",
        ],
      },
      {
        h2: "Quand faire appel à un opérateur",
        paragraphs: [
          "L'opérateur est pertinent dès qu'une infrastructure est partagée entre plusieurs utilisateurs : copropriété, parking d'entreprise, flotte. Ses services s'accompagnent d'un abonnement.",
          "Pour une simple borne individuelle à domicile, il n'est pas nécessaire.",
        ],
      },
      {
        h2: "Opérateur ou borne individuelle ?",
        paragraphs: [
          "Si vous n'avez besoin que d'équiper votre place, une borne raccordée à votre compteur via le droit à la prise évite tout abonnement d'opérateur. Pour une infrastructure collective, l'opérateur apporte en revanche un vrai confort de gestion.",
          "Nos installateurs IRVE vous orientent vers la solution adaptée.",
        ],
      },
    ],
    faq: [
      { q: "Que fait un opérateur de borne de recharge ?", a: "Il exploite l'infrastructure : supervision, facturation, maintenance et parfois accès à des réseaux d'itinérance, moyennant un abonnement." },
      { q: "Faut-il un opérateur à domicile ?", a: "Non. Pour une borne individuelle sur votre compteur, aucun opérateur n'est nécessaire." },
      { q: "Quand un opérateur est-il utile ?", a: "Dès que l'infrastructure est partagée : copropriété, entreprise, flotte, où la gestion et la facturation sont essentielles." },
    ],
    related: ["supervision-borne-recharge", "borne-recharge-sans-abonnement", "borne-recharge-copropriete", "abonnement-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-immeuble-bureaux",
    metaTitle: "Borne de recharge en immeuble de bureaux : le guide | Choisis Ta borne",
    metaDescription:
      "Équiper un immeuble de bureaux de bornes de recharge : obligations, dimensionnement, supervision, aides. Le point pour les entreprises et gestionnaires de sites.",
    h1: "Borne de recharge en immeuble de bureaux",
    updated: "2026-07-15",
    lede: "Équiper un immeuble de bureaux de bornes répond à la fois aux obligations légales et aux attentes des salariés. Voici les points clés du projet.",
    sections: [
      {
        h2: "Pourquoi équiper un immeuble de bureaux",
        paragraphs: [
          "La recharge au travail est devenue un service attendu des salariés en véhicule électrique et un atout d'attractivité. Elle s'inscrit aussi dans les obligations d'équipement des parkings de bâtiments non résidentiels.",
          "C'est un investissement à la fois réglementaire et humain.",
        ],
      },
      {
        h2: "Dimensionner l'installation",
        paragraphs: [
          "Le nombre de bornes, la puissance et la gestion de charge se dimensionnent selon le nombre de salariés concernés, la capacité électrique du site et l'évolution prévisible de la demande.",
          "Un pilotage énergétique évite de dépasser la puissance disponible.",
        ],
      },
      {
        h2: "Supervision et facturation",
        paragraphs: [
          "En tertiaire, la supervision permet d'identifier les utilisateurs, de facturer ou de refacturer la consommation et d'assurer la maintenance. Un opérateur peut prendre en charge ce service.",
          "C'est la clé d'une exploitation sereine dans la durée.",
        ],
      },
      {
        h2: "Aides et mise en œuvre",
        paragraphs: [
          "La prime ADVENIR soutient l'installation de bornes en entreprise, et l'investissement est amortissable. Un installateur IRVE réalise l'étude et la pose.",
          "Nos partenaires accompagnent les gestionnaires d'immeubles de bureaux de bout en bout.",
        ],
      },
    ],
    faq: [
      { q: "Un immeuble de bureaux doit-il installer des bornes ?", a: "Les parkings de bâtiments non résidentiels sont soumis à des obligations d'équipement selon leur taille. Vérifiez les seuils en vigueur." },
      { q: "Comment gérer la puissance ?", a: "Par un pilotage énergétique qui répartit la puissance entre les bornes sans dépasser la capacité électrique du site." },
      { q: "Quelles aides pour le tertiaire ?", a: "La prime ADVENIR soutient l'installation, et l'investissement est amortissable pour l'entreprise." },
    ],
    related: ["borne-de-recharge-entreprise", "obligation-borne-recharge-parking-prive", "supervision-borne-recharge", "aides-borne-recharge-entreprise"],
  },
  {
    slug: "borne-recharge-igh",
    metaTitle: "Borne de recharge en immeuble de grande hauteur (IGH) | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge dans un immeuble de grande hauteur : contraintes de sécurité incendie, réglementation, solutions. Le point pour les IGH.",
    h1: "Borne de recharge en immeuble de grande hauteur (IGH)",
    updated: "2026-07-15",
    lede: "Les immeubles de grande hauteur imposent des contraintes de sécurité particulières pour la recharge. Voici comment aborder un projet en IGH.",
    sections: [
      {
        h2: "Des contraintes de sécurité renforcées",
        paragraphs: [
          "Les immeubles de grande hauteur sont soumis à une réglementation de sécurité incendie stricte, qui encadre l'installation de bornes de recharge dans leurs parkings, souvent en sous-sol.",
          "Ces contraintes visent à protéger l'ensemble des occupants.",
        ],
      },
      {
        h2: "Ce que cela implique pour la recharge",
        paragraphs: [
          "L'installation de bornes en IGH nécessite une étude spécifique : dispositions de sécurité, ventilation, détection, et parfois avis de commissions compétentes. Le projet est plus encadré qu'en immeuble classique.",
          "Un professionnel maîtrisant ces règles est indispensable.",
        ],
      },
      {
        h2: "Des solutions existent",
        paragraphs: [
          "Malgré ces contraintes, il est possible d'équiper un IGH de bornes en respectant la réglementation, avec un dimensionnement et des dispositifs de sécurité adaptés. Le droit à la prise s'applique aussi, dans ce cadre sécurisé.",
          "L'accompagnement par des spécialistes est la clé.",
        ],
      },
      {
        h2: "Mener le projet",
        paragraphs: [
          "En IGH, l'étude préalable et la coordination avec le syndic et les autorités de sécurité sont essentielles. Un installateur IRVE expérimenté en collectif sécurisé pilote le projet.",
          "Nos partenaires évaluent la faisabilité et proposent une solution conforme.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une borne dans un IGH ?", a: "Oui, mais dans un cadre de sécurité incendie renforcé, avec une étude spécifique et des dispositifs adaptés." },
      { q: "Pourquoi est-ce plus encadré ?", a: "Les immeubles de grande hauteur imposent des règles de sécurité strictes pour protéger l'ensemble des occupants." },
      { q: "Le droit à la prise s'applique-t-il ?", a: "Oui, dans le respect des contraintes de sécurité propres aux IGH." },
    ],
    related: ["borne-recharge-parking-interieur", "borne-recharge-copropriete", "droit-a-la-prise", "loi-lom-copropriete"],
  },
  {
    slug: "recharger-voiture-electrique-lyon",
    metaTitle: "Recharger sa voiture électrique à Lyon : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Lyon ? Recharge à domicile, réseau public, ZFE de la métropole : toutes les solutions pour recharger dans le Grand Lyon.",
    h1: "Comment recharger sa voiture électrique à Lyon ?",
    updated: "2026-07-15",
    lede: "À Lyon et dans la métropole, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Lyon",
        paragraphs: [
          "Entre les pavillons de l'Ouest lyonnais (Caluire, Écully, Sainte-Foy) et les copropriétés de la Presqu'île, la recharge à domicile s'adapte à chaque habitat. En maison, une borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "C'est la solution la plus économique : recharge nocturne en heures creuses, à un coût très inférieur aux bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau de recharge public dans le Grand Lyon",
        paragraphs: [
          "La métropole dispose d'un réseau de bornes en voirie et dans les parkings, complété par des bornes rapides le long des grands axes. C'est utile en dépannage ou pour les personnes sans stationnement privatif.",
          "Ces bornes publiques restent toutefois plus coûteuses et moins pratiques qu'une borne chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "De nombreuses entreprises du Grand Lyon équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile, notamment pour les gros rouleurs de l'agglomération.",
          "C'est un service de plus en plus attendu des salariés.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Lyon",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Lyonnais disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur tout le Grand Lyon et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Lyon ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Lyon ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les immeubles de la Presqu'île, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques du Grand Lyon." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-bordeaux",
    metaTitle: "Recharger sa voiture électrique à Bordeaux : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Bordeaux ? Recharge à domicile, réseau public, ZFE : toutes les solutions pour recharger dans la métropole bordelaise.",
    h1: "Comment recharger sa voiture électrique à Bordeaux ?",
    updated: "2026-07-15",
    lede: "À Bordeaux et dans la métropole, recharger sa voiture électrique est simple. Entre domicile, réseau public et travail, voici comment choisir selon votre situation.",
    sections: [
      {
        h2: "Recharger à domicile à Bordeaux",
        paragraphs: [
          "Échoppes bordelaises, maisons de Mérignac ou du Bouscat, appartements avec parking : chaque habitat a sa solution. Dans les échoppes, le tableau est souvent à l'avant et le stationnement à l'arrière, ce qui demande une étude du câblage ; en copropriété, le droit à la prise s'applique.",
          "La recharge nocturne à domicile, en heures creuses, reste la plus économique, TVA à 5,5 % et prime ADVENIR à la clé.",
        ],
      },
      {
        h2: "Le réseau de recharge public dans la métropole bordelaise",
        paragraphs: [
          "Bordeaux Métropole propose des bornes en voirie et dans les parkings, avec des points de charge rapide sur les grands axes et la rocade. Pratique pour dépanner ou sans stationnement privatif.",
          "Le coût y est cependant supérieur à celui d'une recharge chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Les entreprises de la métropole équipent de plus en plus leurs parkings. La recharge au travail complète bien la recharge à domicile pour les trajets quotidiens.",
          "C'est un vrai plus pour les salariés en véhicule électrique.",
        ],
      },
      {
        h2: "La meilleure option à Bordeaux",
        paragraphs: [
          "Avec la zone à faibles émissions et un habitat souvent individuel, la recharge à domicile s'impose pour la plupart des Bordelais : confort, économie et autonomie assurée chaque matin.",
          "Nos installateurs IRVE couvrent toute la métropole bordelaise et vous établissent un devis gratuit.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Bordeaux ?", a: "À domicile en priorité (échoppe, maison ou copropriété via le droit à la prise), avec en complément le réseau public de la métropole et la recharge au travail." },
      { q: "Recharger dans une échoppe bordelaise, est-ce compliqué ?", a: "Non, mais le tableau et le stationnement étant parfois éloignés, une étude du câblage par un installateur IRVE permet un devis juste." },
      { q: "Quelle solution est la plus économique ?", a: "La recharge à domicile en heures creuses, bien moins chère que les bornes publiques de la métropole." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-lille",
    metaTitle: "Recharger sa voiture électrique à Lille : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Lille ? Recharge à domicile, réseau public, travail : toutes les solutions pour recharger dans la métropole lilloise.",
    h1: "Comment recharger sa voiture électrique à Lille ?",
    updated: "2026-07-15",
    lede: "À Lille et dans la métropole, la recharge à domicile est la façon la plus économique de rouler à l'électrique. Voici toutes les options selon votre habitat.",
    sections: [
      {
        h2: "Recharger à domicile à Lille",
        paragraphs: [
          "Maisons de brique en bande, copropriétés du Vieux-Lille, pavillons de Villeneuve-d'Ascq : chaque configuration électrique a sa solution. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place.",
          "La recharge nocturne en heures creuses reste la plus avantageuse, avec la TVA à 5,5 % et la prime ADVENIR en immeuble collectif.",
        ],
      },
      {
        h2: "Le réseau de recharge public dans la métropole lilloise",
        paragraphs: [
          "La métropole dispose de bornes en voirie et dans les parkings, complétées par des bornes rapides sur les grands axes. Elles rendent service en dépannage et aux personnes sans place privative.",
          "Elles restent plus coûteuses qu'une recharge à domicile.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "De nombreux employeurs de la métropole équipent leurs parkings. La recharge en journée complète la recharge à domicile, surtout pour les trajets pendulaires.",
          "C'est un avantage de plus en plus courant.",
        ],
      },
      {
        h2: "La meilleure option à Lille",
        paragraphs: [
          "Entre maisons de ville et pavillons, la plupart des Lillois disposent d'un stationnement compatible avec une borne. Le domicile s'impose donc comme la solution la plus pratique et la plus économique.",
          "Nos installateurs IRVE interviennent dans toute la métropole et vous transmettent des devis gratuits sous 24h.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Lille ?", a: "À domicile en priorité (maison de ville, pavillon ou copropriété via le droit à la prise), avec en complément le réseau public et la recharge au travail." },
      { q: "Peut-on recharger dans une maison de brique en bande ?", a: "Oui, une borne dédiée s'y installe très bien ; elle est plus sûre et plus rapide qu'une prise domestique pour un usage quotidien." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, nettement moins chère que les bornes publiques." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-nantes",
    metaTitle: "Recharger sa voiture électrique à Nantes : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Nantes ? Recharge à domicile, réseau public, travail : toutes les solutions pour recharger dans la métropole nantaise.",
    h1: "Comment recharger sa voiture électrique à Nantes ?",
    updated: "2026-07-15",
    lede: "À Nantes, ville pionnière de la mobilité durable, recharger sa voiture électrique est simple. Le domicile reste la solution la plus économique et la plus pratique.",
    sections: [
      {
        h2: "Recharger à domicile à Nantes",
        paragraphs: [
          "Des maisons de Rezé et Saint-Herblain aux immeubles de l'île de Nantes, chaque habitat a sa solution de recharge. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "La recharge nocturne en heures creuses est la plus économique, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau de recharge public dans la métropole nantaise",
        paragraphs: [
          "Nantes Métropole propose des bornes en voirie et dans les parkings, avec des points rapides sur les grands axes. Ils dépannent utilement et servent aux personnes sans stationnement privatif.",
          "Le coût y est supérieur à celui d'une recharge à domicile.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Les entreprises nantaises équipent de plus en plus leurs parkings. Recharger en journée complète la recharge à domicile pour les trajets du quotidien.",
          "C'est un service apprécié des salariés en électrique.",
        ],
      },
      {
        h2: "La meilleure option à Nantes",
        paragraphs: [
          "Engagée de longue date dans la mobilité durable, la métropole nantaise facilite l'électrique. Pour la plupart des habitants disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE couvrent toute la métropole nantaise et vous établissent un devis gratuit.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Nantes ?", a: "À domicile en priorité (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible sur l'île de Nantes ?", a: "Oui, en copropriété, le droit à la prise permet d'équiper votre place de parking sans vote de l'assemblée générale." },
      { q: "Quelle solution coûte le moins cher ?", a: "La recharge à domicile en heures creuses, bien moins chère que les bornes publiques de la métropole." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-toulouse",
    metaTitle: "Recharger sa voiture électrique à Toulouse : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Toulouse ? Recharge à domicile, réseau public, ZFE : toutes les solutions pour recharger dans la Ville rose et sa métropole.",
    h1: "Comment recharger sa voiture électrique à Toulouse ?",
    updated: "2026-07-15",
    lede: "À Toulouse, la Ville rose accompagne la transition vers l'électrique. Entre domicile, réseau public et travail, voici comment recharger selon votre situation.",
    sections: [
      {
        h2: "Recharger à domicile à Toulouse",
        paragraphs: [
          "Des maisons de Blagnac, Colomiers ou Tournefeuille aux copropriétés du centre, chaque habitat a sa solution. En maison, la borne se raccorde au tableau, souvent avec un compteur bien dimensionné ; en copropriété, le droit à la prise s'applique.",
          "La recharge nocturne en heures creuses est la plus économique, la TVA à 5,5 % étant intégrée au devis et la prime ADVENIR disponible en copropriété.",
        ],
      },
      {
        h2: "Le réseau de recharge public dans la métropole toulousaine",
        paragraphs: [
          "Toulouse Métropole propose des bornes en voirie et dans les parkings, avec des bornes rapides le long du périphérique et des grands axes. Utiles en dépannage et pour les habitants sans stationnement privatif.",
          "Ces bornes restent plus coûteuses qu'une recharge à domicile.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Le tissu économique toulousain, notamment aéronautique, compte de nombreux sites qui équipent leurs parkings. La recharge au travail complète efficacement la recharge à domicile.",
          "C'est un avantage recherché par les salariés.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Toulouse",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique évite les restrictions de circulation. Pour la majorité des Toulousains disposant d'un stationnement, la borne à domicile reste la solution la plus pratique et la plus économique.",
          "Nos installateurs IRVE couvrent toute la métropole toulousaine et vous remettent 3 devis gratuits sous 24h.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Toulouse ?", a: "À domicile en priorité (maison ou copropriété via le droit à la prise), avec en complément le réseau public de la métropole et la recharge au travail." },
      { q: "La ZFE de Toulouse impose-t-elle l'électrique ?", a: "Non, mais elle restreint les véhicules les plus polluants. L'électrique n'est pas concerné par ces restrictions." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques toulousaines." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "ocpp-protocole-borne-recharge",
    metaTitle: "OCPP : le protocole des bornes de recharge expliqué | Choisis Ta borne",
    metaDescription:
      "Qu'est-ce que l'OCPP ? Le protocole ouvert qui fait communiquer les bornes de recharge avec leur supervision. Rôle, versions et pourquoi c'est important en copro et entreprise.",
    h1: "OCPP : le langage universel des bornes de recharge",
    updated: "2026-07-15",
    lede: "L'OCPP est le protocole qui permet à une borne de dialoguer avec un système de supervision. C'est un critère clé pour une installation collective évolutive.",
    sections: [
      {
        h2: "Qu'est-ce que l'OCPP",
        paragraphs: [
          "L'OCPP (Open Charge Point Protocol) est un protocole de communication ouvert entre une borne de recharge et une plateforme de supervision. Étant standardisé, il évite d'être enfermé chez un seul fournisseur : une borne OCPP peut être pilotée par différentes plateformes.",
          "C'est un gage d'interopérabilité et de pérennité pour votre installation.",
        ],
      },
      {
        h2: "À quoi il sert concrètement",
        paragraphs: [
          "Grâce à l'OCPP, la supervision peut suivre les sessions de charge, piloter la puissance, gérer l'authentification des utilisateurs et facturer la consommation. C'est indispensable dès qu'un parc de bornes est partagé.",
          "En cas de changement d'opérateur, une borne OCPP peut en principe être reprise sans être remplacée.",
        ],
      },
      {
        h2: "Les versions de l'OCPP",
        paragraphs: [
          "Plusieurs versions coexistent, les plus répandues étant l'OCPP 1.6 et l'OCPP 2.0.1, cette dernière apportant des fonctions avancées (sécurité, gestion intelligente de la charge). Vérifiez la version supportée par la borne.",
          "Une borne compatible OCPP est un choix plus sûr pour une infrastructure amenée à évoluer.",
        ],
      },
      {
        h2: "Pourquoi c'est important en copro et entreprise",
        paragraphs: [
          "En copropriété comme en entreprise, choisir des bornes compatibles OCPP garantit la liberté de superviser et de facturer via l'opérateur de votre choix, aujourd'hui comme demain.",
          "Nos installateurs IRVE privilégient des bornes ouvertes et pérennes.",
        ],
      },
    ],
    faq: [
      { q: "L'OCPP est-il obligatoire ?", a: "Non, mais il est fortement recommandé pour une installation collective : il garantit l'interopérabilité et évite d'être verrouillé chez un seul fournisseur." },
      { q: "Une borne domestique a-t-elle besoin d'OCPP ?", a: "Pas nécessairement pour une borne individuelle. L'OCPP prend tout son sens dès qu'il y a supervision d'un parc de bornes." },
      { q: "Peut-on changer d'opérateur avec une borne OCPP ?", a: "En principe oui : une borne OCPP peut être reprise par une autre plateforme de supervision compatible, sans remplacement." },
    ],
    related: ["supervision-borne-recharge", "operateur-borne-de-recharge", "borne-recharge-copropriete", "wallbox-connectee"],
  },
  {
    slug: "iso-15118-plug-and-charge",
    metaTitle: "ISO 15118 et Plug & Charge : la recharge sans badge | Choisis Ta borne",
    metaDescription:
      "L'ISO 15118 permet le Plug & Charge : la voiture s'authentifie et démarre la charge dès le branchement, sans badge. Principe, avantages et lien avec le V2G.",
    h1: "ISO 15118 : le Plug & Charge expliqué",
    updated: "2026-07-15",
    lede: "La norme ISO 15118 permet à la voiture et à la borne de dialoguer intelligemment, jusqu'au Plug & Charge : brancher suffit à lancer la recharge, sans badge ni application.",
    sections: [
      {
        h2: "Ce que définit l'ISO 15118",
        paragraphs: [
          "L'ISO 15118 est une norme internationale qui encadre la communication avancée entre le véhicule et la borne de recharge. Elle rend possibles des fonctions comme le Plug & Charge et la recharge bidirectionnelle (V2G).",
          "C'est un socle technique pour la recharge intelligente de demain.",
        ],
      },
      {
        h2: "Le Plug & Charge",
        paragraphs: [
          "Avec le Plug & Charge, la voiture s'identifie automatiquement auprès de la borne dès le branchement : la session démarre et la facturation se fait sans badge ni application. C'est plus simple et plus sûr.",
          "L'authentification est sécurisée par des certificats numériques échangés entre le véhicule et l'infrastructure.",
        ],
      },
      {
        h2: "ISO 15118 et recharge bidirectionnelle",
        paragraphs: [
          "La norme prépare aussi la recharge bidirectionnelle : la voiture peut restituer de l'énergie au réseau ou au logement (V2G / V2H). L'ISO 15118 est donc un pilier des usages futurs de la batterie.",
          "Tous les véhicules et bornes ne l'exploitent pas encore pleinement.",
        ],
      },
      {
        h2: "Faut-il s'en soucier aujourd'hui ?",
        paragraphs: [
          "Le Plug & Charge se déploie progressivement. Pour une borne à domicile, ce n'est pas indispensable, mais c'est un plus pour anticiper les usages à venir.",
          "Nos installateurs IRVE vous orientent vers des équipements adaptés à vos besoins actuels et futurs.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que le Plug & Charge ?", a: "Une fonction, permise par l'ISO 15118, où la voiture s'authentifie automatiquement au branchement : la charge démarre sans badge ni application." },
      { q: "Ma voiture est-elle compatible ?", a: "Le Plug & Charge se déploie progressivement ; toutes les voitures et bornes ne le supportent pas encore. Vérifiez les spécifications de votre modèle." },
      { q: "ISO 15118 et V2G, quel lien ?", a: "La norme prépare la recharge bidirectionnelle : elle est un socle technique pour le V2G (restitution au réseau) et le V2H (au logement)." },
    ],
    related: ["v2g-vehicle-to-grid", "wallbox-connectee", "borne-de-recharge-tesla", "recharge-rapide-voiture-electrique"],
  },
  {
    slug: "difference-kw-kwh-borne-recharge",
    metaTitle: "Différence entre kW et kWh pour la recharge électrique | Choisis Ta borne",
    metaDescription:
      "kW ou kWh ? Le kW mesure la puissance de charge, le kWh l'énergie consommée. Comprendre la différence pour choisir sa borne et estimer le coût de recharge.",
    h1: "kW et kWh : quelle différence pour la recharge ?",
    updated: "2026-07-15",
    lede: "On confond souvent kW et kWh. L'un mesure la puissance, l'autre l'énergie. Comprendre la différence aide à choisir sa borne et à estimer le coût de la recharge.",
    sections: [
      {
        h2: "Le kW : la puissance",
        paragraphs: [
          "Le kilowatt (kW) mesure la puissance, c'est-à-dire le débit auquel l'énergie est délivrée. Une borne de 7,4 kW recharge deux fois plus vite qu'une prise de 3,7 kW : plus la puissance est élevée, plus la charge est rapide.",
          "C'est la puissance qui détermine la vitesse de recharge.",
        ],
      },
      {
        h2: "Le kWh : l'énergie",
        paragraphs: [
          "Le kilowattheure (kWh) mesure une quantité d'énergie : c'est ce que contient la batterie et ce que vous consommez. Une batterie de 50 kWh stocke 50 kWh d'énergie ; c'est aussi l'unité facturée sur votre facture d'électricité.",
          "En clair : le kWh est ce que vous payez, le kW la vitesse à laquelle vous le recevez.",
        ],
      },
      {
        h2: "Le lien entre les deux",
        paragraphs: [
          "Le temps de charge dépend des deux : diviser l'énergie à recharger (kWh) par la puissance (kW) donne une estimation de la durée. Recharger 40 kWh sur une borne de 11 kW prend environ quatre heures.",
          "La puissance réelle peut être limitée par le chargeur embarqué du véhicule.",
        ],
      },
      {
        h2: "Pourquoi c'est utile à savoir",
        paragraphs: [
          "Comprendre kW et kWh aide à choisir la bonne puissance de borne et à estimer le coût de recharge : nombre de kWh consommés multiplié par le prix du kWh.",
          "Nos installateurs IRVE dimensionnent la borne selon votre véhicule et votre usage.",
        ],
      },
    ],
    faq: [
      { q: "Quelle est la différence entre kW et kWh ?", a: "Le kW mesure la puissance (vitesse de charge), le kWh l'énergie (ce que contient la batterie et ce que vous payez)." },
      { q: "Le kWh est-il ce que je paie ?", a: "Oui, votre facture d'électricité est basée sur les kWh consommés, multipliés par le prix du kWh de votre contrat." },
      { q: "Comment estimer le temps de charge ?", a: "En divisant l'énergie à recharger (kWh) par la puissance de charge (kW), sans dépasser la limite du chargeur embarqué du véhicule." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "choisir-puissance-borne", "prix-kwh-electricite", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "modes-de-recharge-electrique",
    metaTitle: "Les modes de recharge électrique (1, 2, 3, 4) expliqués | Choisis Ta borne",
    metaDescription:
      "Modes 1, 2, 3 et 4 : comprendre les différents modes de recharge d'une voiture électrique, leur sécurité et lequel choisir pour recharger à domicile.",
    h1: "Les modes de recharge électrique : 1, 2, 3 et 4",
    updated: "2026-07-15",
    lede: "On classe la recharge en quatre modes, du plus basique au plus performant. Comprendre ces modes aide à recharger en sécurité et à choisir la bonne solution.",
    sections: [
      {
        h2: "Modes 1 et 2 : sur prise domestique",
        paragraphs: [
          "Le mode 1 (branchement direct sur prise, sans dispositif de sécurité) est déconseillé, voire proscrit, pour les voitures. Le mode 2 utilise une prise domestique avec un boîtier de contrôle intégré au câble : il dépanne, mais reste lent et sollicite une prise pas toujours prévue pour un usage intensif.",
          "Ces modes ne sont pas adaptés à une recharge quotidienne.",
        ],
      },
      {
        h2: "Mode 3 : la borne dédiée (le standard à domicile)",
        paragraphs: [
          "Le mode 3 correspond à une borne (wallbox) raccordée sur un circuit dédié et protégé. C'est le mode recommandé pour la recharge à domicile : plus rapide, plus sûr, avec communication entre la borne et le véhicule.",
          "C'est ce que posent les installateurs IRVE pour un usage courant.",
        ],
      },
      {
        h2: "Mode 4 : la recharge rapide en courant continu",
        paragraphs: [
          "Le mode 4 est la recharge rapide en courant continu (DC) : le convertisseur est dans la borne, ce qui permet de très fortes puissances. On le trouve sur les stations d'autoroute, pas à domicile.",
          "Il sert pour les longs trajets, en complément de la recharge à domicile.",
        ],
      },
      {
        h2: "Quel mode choisir",
        paragraphs: [
          "Pour un usage quotidien à domicile, le mode 3 (borne dédiée) est le bon choix : sécurité, vitesse et durabilité. Le mode 2 reste un dépannage, le mode 4 un usage d'itinérance.",
          "Nos installateurs IRVE posent votre borne en mode 3, conforme aux normes.",
        ],
      },
    ],
    faq: [
      { q: "Quel mode de recharge à domicile ?", a: "Le mode 3, c'est-à-dire une borne dédiée sur circuit protégé : c'est le plus sûr et le plus adapté à un usage quotidien." },
      { q: "Le mode 2 est-il dangereux ?", a: "Il dépanne mais sollicite une prise domestique non prévue pour un usage intensif ; pour le quotidien, mieux vaut une borne en mode 3." },
      { q: "Le mode 4, c'est quoi ?", a: "La recharge rapide en courant continu des stations, avec le convertisseur dans la borne. Utile en itinérance, pas à domicile." },
    ],
    related: ["prise-renforcee-ou-wallbox", "installer-borne-de-recharge", "recharge-rapide-voiture-electrique", "recharger-voiture-prise-normale-mode-2"],
  },
  {
    slug: "prise-combo-ccs-recharge-rapide",
    metaTitle: "Prise Combo CCS : le standard de la recharge rapide | Choisis Ta borne",
    metaDescription:
      "La prise Combo CCS est le standard européen de recharge rapide en courant continu. Fonctionnement, différence avec le Type 2 et compatibilité des véhicules.",
    h1: "Prise Combo CCS : tout comprendre",
    updated: "2026-07-15",
    lede: "Le connecteur Combo CCS est le standard européen de la recharge rapide en courant continu. Voici son fonctionnement et sa place face au Type 2.",
    sections: [
      {
        h2: "Qu'est-ce que le Combo CCS",
        paragraphs: [
          "Le Combo CCS (Combined Charging System) combine, sur une même prise, le connecteur Type 2 utilisé en courant alternatif et deux broches supplémentaires pour le courant continu rapide. C'est le standard adopté en Europe pour la recharge rapide.",
          "Un seul connecteur gère ainsi la charge lente à domicile et la charge rapide en itinérance.",
        ],
      },
      {
        h2: "CCS et Type 2 : quel lien",
        paragraphs: [
          "À domicile, vous rechargez en courant alternatif via la partie Type 2 du connecteur. Sur une borne rapide, la partie DC du Combo CCS prend le relais pour des puissances bien plus élevées.",
          "C'est le même port sur la voiture, avec deux usages complémentaires.",
        ],
      },
      {
        h2: "Compatibilité des véhicules",
        paragraphs: [
          "La grande majorité des voitures électriques vendues en Europe sont équipées d'un port Combo CCS pour la recharge rapide. Vérifiez toutefois la puissance de charge rapide acceptée par votre modèle.",
          "C'est cette puissance qui détermine votre vitesse de recharge sur autoroute.",
        ],
      },
      {
        h2: "Et pour la recharge à domicile ?",
        paragraphs: [
          "À domicile, seule la partie Type 2 (courant alternatif) est utilisée : la puissance dépend de votre borne et du chargeur embarqué. Le Combo CCS ne concerne que la recharge rapide.",
          "Nos installateurs IRVE dimensionnent votre borne AC selon votre véhicule.",
        ],
      },
    ],
    faq: [
      { q: "Le Combo CCS sert-il à domicile ?", a: "Non, à domicile on utilise la partie Type 2 (courant alternatif). Le CCS sert à la recharge rapide en courant continu en itinérance." },
      { q: "Ma voiture a-t-elle une prise CCS ?", a: "La plupart des véhicules électriques vendus en Europe sont équipés d'un port Combo CCS. Vérifiez la puissance de charge rapide acceptée." },
      { q: "CCS et Type 2, c'est différent ?", a: "Le Combo CCS intègre le Type 2 plus deux broches DC : un même connecteur pour la charge lente (AC) et rapide (DC)." },
    ],
    related: ["cable-de-recharge-type-2", "recharge-rapide-voiture-electrique", "temps-de-recharge-voiture-electrique", "autonomie-voiture-electrique"],
  },
  {
    slug: "norme-ip54-borne-recharge",
    metaTitle: "Norme IP54 : la protection des bornes de recharge | Choisis Ta borne",
    metaDescription:
      "Que signifie l'indice IP54 pour une borne de recharge ? Protection contre la poussière et l'eau, importance en extérieur et indices à connaître.",
    h1: "Norme IP54 : protéger sa borne de la poussière et de l'eau",
    updated: "2026-07-15",
    lede: "L'indice IP mesure la résistance d'un équipement à la poussière et à l'eau. Pour une borne, en particulier en extérieur, c'est un critère de fiabilité essentiel.",
    sections: [
      {
        h2: "Que signifie l'indice IP",
        paragraphs: [
          "L'indice IP (Ingress Protection) comporte deux chiffres : le premier indique la protection contre les corps solides (poussière), le second contre l'eau. Pour l'IP54, le 5 signifie protégé contre la poussière, le 4 contre les projections d'eau de toutes directions.",
          "Plus les chiffres sont élevés, meilleure est la protection.",
        ],
      },
      {
        h2: "Pourquoi c'est important pour une borne",
        paragraphs: [
          "Une borne exposée aux intempéries doit résister à la pluie, à l'humidité et à la poussière. Un indice IP54 au minimum est recommandé pour une pose en extérieur ; certaines bornes affichent des indices supérieurs.",
          "Un indice insuffisant expose l'électronique à des pannes prématurées.",
        ],
      },
      {
        h2: "IP et résistance aux chocs (IK)",
        paragraphs: [
          "En complément de l'IP, l'indice IK mesure la résistance aux chocs mécaniques. Pour un parking ou un lieu accessible, un bon IK protège la borne contre les impacts.",
          "Ces deux indices se lisent ensemble pour juger de la robustesse.",
        ],
      },
      {
        h2: "Intérieur ou extérieur",
        paragraphs: [
          "En garage fermé, une borne standard convient. En extérieur, privilégiez un IP54 ou plus et une bonne résistance mécanique.",
          "Nos installateurs IRVE choisissent une borne adaptée à l'emplacement, intérieur comme extérieur.",
        ],
      },
    ],
    faq: [
      { q: "Que veut dire IP54 ?", a: "Protégé contre la poussière (5) et contre les projections d'eau de toutes directions (4). C'est un minimum recommandé pour une borne en extérieur." },
      { q: "Quel indice IP pour l'extérieur ?", a: "IP54 au minimum, parfois plus selon l'exposition. Vérifiez aussi l'indice IK de résistance aux chocs." },
      { q: "Une borne d'intérieur peut-elle aller dehors ?", a: "Non, si son indice IP est insuffisant. Une pose extérieure exige une borne conçue pour, avec un IP adapté." },
    ],
    related: ["borne-recharge-exterieure", "borne-recharge-parking-exterieur", "installer-borne-de-recharge", "quelle-borne-de-recharge-choisir"],
  },
  {
    slug: "protection-differentielle-borne-recharge",
    metaTitle: "Protection différentielle d'une borne de recharge (type A, F, B) | Choisis Ta borne",
    metaDescription:
      "Quelle protection différentielle pour une borne de recharge ? Types A, F, B, détection de courant continu : ce qu'imposent les normes pour une installation sûre.",
    h1: "Protection différentielle d'une borne de recharge",
    updated: "2026-07-15",
    lede: "Une borne de recharge doit être protégée par un dispositif différentiel adapté. Voici les types de protection et ce qu'exigent les normes pour recharger en sécurité.",
    sections: [
      {
        h2: "Le rôle de la protection différentielle",
        paragraphs: [
          "Un dispositif différentiel (souvent 30 mA) coupe le circuit en cas de fuite de courant, pour protéger les personnes. Pour une borne de recharge, cette protection est obligatoire et dimensionnée spécifiquement.",
          "C'est un élément central de la sécurité de l'installation.",
        ],
      },
      {
        h2: "Types A, F et B",
        paragraphs: [
          "Les différentiels se déclinent en types selon les formes de courant de fuite détectées. La recharge de véhicules peut générer des composantes continues : la norme impose donc une protection capable de les gérer, via un différentiel adapté (type A associé à une détection de courant continu, ou type B).",
          "Le choix dépend de la borne et de l'installation.",
        ],
      },
      {
        h2: "La détection de courant continu (6 mA)",
        paragraphs: [
          "Certaines bornes intègrent une détection de fuite de courant continu de 6 mA, ce qui permet d'utiliser un différentiel de type A en amont plutôt qu'un type B, plus coûteux. Cette fonction doit être clairement prévue.",
          "Un installateur IRVE vérifie la cohérence de l'ensemble.",
        ],
      },
      {
        h2: "Pourquoi confier cela à un IRVE",
        paragraphs: [
          "Le dimensionnement de la protection différentielle relève de la norme et engage la sécurité. Un électricien certifié IRVE garantit une installation conforme et éligible aux aides.",
          "C'est aussi la condition de la prime ADVENIR.",
        ],
      },
    ],
    faq: [
      { q: "Quelle protection différentielle pour une borne ?", a: "Un différentiel 30 mA adapté aux courants de la recharge : type A avec détection de courant continu, ou type B, selon la borne et l'installation." },
      { q: "Qu'est-ce que la détection 6 mA ?", a: "Une détection de fuite de courant continu intégrée à certaines bornes, qui permet d'utiliser un différentiel de type A plutôt qu'un type B." },
      { q: "Puis-je réutiliser un différentiel existant ?", a: "Pas forcément : la borne exige une protection dédiée et conforme. Un installateur IRVE vérifie et adapte l'installation." },
    ],
    related: ["detecteur-dc-6ma-borne-recharge", "prise-de-terre-borne-recharge", "installer-borne-de-recharge", "norme-nf-c-15-100-irve"],
  },
  {
    slug: "prise-de-terre-borne-recharge",
    metaTitle: "Prise de terre et borne de recharge : pourquoi c'est essentiel | Choisis Ta borne",
    metaDescription:
      "La prise de terre est indispensable à la sécurité d'une borne de recharge. Rôle, exigences de la norme NF C 15-100 et vérifications avant installation.",
    h1: "Prise de terre : le pilier de la sécurité de votre borne",
    updated: "2026-07-15",
    lede: "Sans une bonne prise de terre, une borne de recharge ne peut pas être installée en sécurité. Voici son rôle et ce que vérifie l'installateur.",
    sections: [
      {
        h2: "À quoi sert la prise de terre",
        paragraphs: [
          "La prise de terre évacue vers le sol un éventuel courant de défaut, protégeant les personnes d'une électrisation. Associée au différentiel, elle est la base de la sécurité de toute installation, borne comprise.",
          "Une borne ne doit jamais être posée sans terre conforme.",
        ],
      },
      {
        h2: "Ce qu'exige la norme",
        paragraphs: [
          "La norme NF C 15-100 encadre la mise à la terre. La résistance de la prise de terre doit être suffisamment basse pour que le différentiel déclenche correctement en cas de défaut ; on cite souvent une valeur de l'ordre de 100 ohms selon le dispositif.",
          "L'installateur mesure cette valeur avant de raccorder la borne.",
        ],
      },
      {
        h2: "Les vérifications avant installation",
        paragraphs: [
          "Avant la pose, l'électricien IRVE contrôle la présence et la qualité de la terre. Si elle est absente ou insuffisante, une reprise de la mise à la terre est nécessaire, ce qui peut influer sur le devis.",
          "Mieux vaut le savoir en amont pour éviter les mauvaises surprises.",
        ],
      },
      {
        h2: "Pourquoi ne pas négliger ce point",
        paragraphs: [
          "Une terre défaillante peut empêcher la borne de charger ou, pire, compromettre la sécurité. C'est un point non négociable d'une installation conforme.",
          "Nos installateurs IRVE intègrent ce contrôle systématiquement.",
        ],
      },
    ],
    faq: [
      { q: "Une prise de terre est-elle obligatoire ?", a: "Oui, absolument. Sans terre conforme, une borne de recharge ne peut pas être installée en sécurité." },
      { q: "Quelle valeur pour la prise de terre ?", a: "Elle doit être assez basse pour que le différentiel déclenche ; on cite souvent une valeur de l'ordre de 100 ohms selon le dispositif. L'installateur la mesure." },
      { q: "Que faire si ma terre est insuffisante ?", a: "Une reprise de la mise à la terre est nécessaire avant la pose ; cela peut influer sur le devis. L'installateur IRVE la vérifie en amont." },
    ],
    related: ["protection-differentielle-borne-recharge", "norme-nf-c-15-100-irve", "installer-borne-de-recharge", "consuel-irve"],
  },
  {
    slug: "type-2s-borne-recharge",
    metaTitle: "Prise Type 2S : la sécurité à obturateurs en France | Choisis Ta borne",
    metaDescription:
      "Qu'est-ce qu'une prise Type 2S ? La version à obturateurs exigée en France pour la sécurité des bornes de recharge. Différence avec le Type 2 classique.",
    h1: "Type 2S : la prise à obturateurs pour la recharge",
    updated: "2026-07-15",
    lede: "En France, les prises de recharge accessibles doivent souvent être de type 2S, équipées d'obturateurs de sécurité. Voici ce que cela change.",
    sections: [
      {
        h2: "Type 2 et Type 2S",
        paragraphs: [
          "Le Type 2 est le connecteur de recharge en courant alternatif standard en Europe. La version Type 2S ajoute des obturateurs (shutters) qui masquent les contacts tant qu'aucun connecteur n'est branché.",
          "Ces obturateurs limitent les risques de contact accidentel.",
        ],
      },
      {
        h2: "Pourquoi le 2S en France",
        paragraphs: [
          "En France, pour les points de charge dotés d'une prise accessible, la réglementation impose des obturateurs de sécurité afin de protéger les utilisateurs, notamment dans les lieux ouverts au public.",
          "C'est un point de conformité à vérifier sur la borne.",
        ],
      },
      {
        h2: "Prise ou câble attaché",
        paragraphs: [
          "Certaines bornes ont un câble attaché (pas de prise accessible), d'autres une prise sur laquelle on branche son propre câble. C'est surtout pour ce second cas que la question du Type 2S se pose.",
          "L'installateur vous conseille selon l'usage et le lieu.",
        ],
      },
      {
        h2: "Choisir une borne conforme",
        paragraphs: [
          "Pour éviter tout souci de conformité et de sécurité, mieux vaut une borne respectant les exigences françaises. Un installateur IRVE sélectionne un matériel adapté.",
          "C'est la garantie d'une installation sûre et pérenne.",
        ],
      },
    ],
    faq: [
      { q: "Quelle différence entre Type 2 et Type 2S ?", a: "Le Type 2S est un Type 2 doté d'obturateurs de sécurité qui masquent les contacts tant qu'aucun connecteur n'est branché." },
      { q: "Le Type 2S est-il obligatoire ?", a: "En France, des obturateurs de sécurité sont exigés pour les prises accessibles, notamment dans les lieux ouverts au public. Vérifiez la conformité de la borne." },
      { q: "Cela concerne-t-il une borne à câble attaché ?", a: "Moins directement : la question du Type 2S se pose surtout pour les bornes à prise sur lesquelles on branche son propre câble." },
    ],
    related: ["cable-de-recharge-type-2", "installer-borne-de-recharge", "norme-nf-c-15-100-irve", "quelle-borne-de-recharge-choisir"],
  },
  {
    slug: "detecteur-dc-6ma-borne-recharge",
    metaTitle: "Détecteur de courant continu 6 mA pour borne de recharge | Choisis Ta borne",
    metaDescription:
      "Le détecteur DC 6 mA protège l'installation contre les fuites de courant continu lors de la recharge. Rôle, intérêt face au différentiel type B et normes.",
    h1: "Détecteur DC 6 mA : à quoi ça sert ?",
    updated: "2026-07-15",
    lede: "La recharge d'un véhicule peut générer des fuites de courant continu. Le détecteur DC 6 mA gère ce risque et permet une installation plus économique.",
    sections: [
      {
        h2: "Le problème du courant continu",
        paragraphs: [
          "Lors de la recharge, l'électronique du véhicule peut provoquer une petite composante de courant continu en cas de défaut. Or un différentiel classique de type A ne détecte pas bien ce courant continu.",
          "Il faut donc une protection capable de le gérer.",
        ],
      },
      {
        h2: "La solution : la détection 6 mA",
        paragraphs: [
          "De nombreuses bornes intègrent un détecteur de fuite de courant continu de 6 mA (parfois appelé RDC-DD). En cas de défaut DC, il coupe la charge, ce qui permet d'utiliser un différentiel de type A en amont.",
          "C'est une alternative au différentiel de type B, plus coûteux.",
        ],
      },
      {
        h2: "Intérêt pour votre installation",
        paragraphs: [
          "Grâce à cette détection intégrée, l'installation est à la fois conforme et plus économique, sans sacrifier la sécurité. Encore faut-il que la borne l'intègre réellement.",
          "L'installateur vérifie la cohérence entre la borne et la protection en amont.",
        ],
      },
      {
        h2: "Confier le choix à un IRVE",
        paragraphs: [
          "Le dimensionnement de la protection contre les fuites DC relève de la norme. Un électricien certifié IRVE choisit la solution adaptée à votre borne et à votre tableau.",
          "C'est la garantie d'une installation sûre et conforme.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert le détecteur DC 6 mA ?", a: "À couper la charge en cas de fuite de courant continu, que le différentiel de type A détecte mal. Il sécurise la recharge." },
      { q: "Évite-t-il un différentiel type B ?", a: "Oui : une borne avec détection 6 mA intégrée permet d'utiliser un différentiel de type A en amont, plus économique qu'un type B." },
      { q: "Toutes les bornes l'intègrent-elles ?", a: "Non, cela dépend du modèle. L'installateur IRVE vérifie que la borne intègre cette détection ou prévoit la protection adéquate." },
    ],
    related: ["protection-differentielle-borne-recharge", "prise-de-terre-borne-recharge", "installer-borne-de-recharge", "norme-nf-c-15-100-irve"],
  },
  {
    slug: "parafoudre-borne-recharge",
    metaTitle: "Parafoudre et borne de recharge : est-ce obligatoire ? | Choisis Ta borne",
    metaDescription:
      "Faut-il un parafoudre pour protéger sa borne de recharge des surtensions ? Ce que prévoit la norme NF C 15-100 selon la région et l'installation.",
    h1: "Parafoudre et borne de recharge : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Les surtensions, notamment liées à la foudre, peuvent endommager une borne de recharge. Le parafoudre protège l'installation. Voici quand il s'impose.",
    sections: [
      {
        h2: "Le rôle du parafoudre",
        paragraphs: [
          "Un parafoudre protège les équipements électriques des surtensions transitoires, en particulier celles d'origine atmosphérique. Une borne de recharge, appareil électronique, y est sensible.",
          "Le parafoudre évite des pannes coûteuses.",
        ],
      },
      {
        h2: "Ce que prévoit la norme",
        paragraphs: [
          "La norme NF C 15-100 impose ou recommande un parafoudre selon plusieurs critères : la région (niveau kéraunique, c'est-à-dire l'exposition à la foudre), le type d'alimentation et la présence d'équipements sensibles.",
          "L'obligation dépend donc de votre situation.",
        ],
      },
      {
        h2: "Faut-il un parafoudre pour ma borne",
        paragraphs: [
          "Si votre installation en est déjà pourvue, la borne en bénéficie. Sinon, l'installateur évalue la nécessité d'en ajouter un selon la norme et votre localisation.",
          "C'est un point à intégrer au diagnostic préalable.",
        ],
      },
      {
        h2: "Le rôle de l'installateur IRVE",
        paragraphs: [
          "L'électricien IRVE vérifie la conformité de l'ensemble, parafoudre compris, pour une installation sûre et durable. C'est aussi une condition d'éligibilité aux aides.",
          "Mieux vaut anticiper ce point dès le devis.",
        ],
      },
    ],
    faq: [
      { q: "Un parafoudre est-il obligatoire pour une borne ?", a: "Cela dépend : la norme NF C 15-100 l'impose ou le recommande selon la région (exposition à la foudre), l'alimentation et les équipements sensibles." },
      { q: "Que protège le parafoudre ?", a: "Il protège l'installation et la borne des surtensions transitoires, notamment celles d'origine atmosphérique." },
      { q: "Comment savoir si j'en ai besoin ?", a: "L'installateur IRVE l'évalue selon la norme et votre localisation, lors du diagnostic préalable." },
    ],
    related: ["norme-nf-c-15-100-irve", "prise-de-terre-borne-recharge", "installer-borne-de-recharge", "consuel-irve"],
  },
  {
    slug: "chargeur-embarque-obc",
    metaTitle: "Chargeur embarqué (OBC) : la clé de la vitesse de charge AC | Choisis Ta borne",
    metaDescription:
      "Le chargeur embarqué (OBC) de votre voiture limite la puissance de recharge en courant alternatif. Rôle, puissances typiques et impact sur le choix de la borne.",
    h1: "Chargeur embarqué (OBC) : rôle et puissance",
    updated: "2026-07-15",
    lede: "La vitesse de recharge à domicile ne dépend pas que de la borne : le chargeur embarqué de la voiture fixe une limite. Voici comment il fonctionne.",
    sections: [
      {
        h2: "Qu'est-ce que le chargeur embarqué",
        paragraphs: [
          "Le chargeur embarqué (OBC, On-Board Charger) est le convertisseur intégré à la voiture qui transforme le courant alternatif (AC) de la borne en courant continu pour recharger la batterie. Il fixe la puissance maximale de charge en AC.",
          "C'est lui qui limite la vitesse de recharge à domicile.",
        ],
      },
      {
        h2: "Des puissances variables selon les modèles",
        paragraphs: [
          "Selon les véhicules, le chargeur embarqué accepte par exemple 7,4 kW, 11 kW ou 22 kW en courant alternatif. Une borne plus puissante que le chargeur embarqué ne rechargera pas plus vite : c'est le plus faible des deux qui prime.",
          "D'où l'importance de connaître la capacité de charge AC de votre voiture.",
        ],
      },
      {
        h2: "Chargeur embarqué et recharge rapide",
        paragraphs: [
          "En recharge rapide (courant continu), le chargeur embarqué n'intervient pas : le convertisseur est dans la borne. La limite AC ne concerne donc que la recharge à domicile et sur bornes lentes.",
          "Les deux logiques sont distinctes.",
        ],
      },
      {
        h2: "Bien dimensionner sa borne",
        paragraphs: [
          "Inutile d'installer une borne 22 kW si votre voiture n'accepte que 7,4 kW en AC. L'installateur adapte la puissance de la borne à votre véhicule et à votre compteur.",
          "Nos installateurs IRVE évitent ainsi les dépenses inutiles.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que le chargeur embarqué (OBC) ?", a: "Le convertisseur de la voiture qui transforme le courant alternatif de la borne en courant continu pour la batterie. Il fixe la puissance max de charge en AC." },
      { q: "Une borne plus puissante charge-t-elle plus vite ?", a: "Seulement jusqu'à la limite du chargeur embarqué. Si la voiture accepte 7,4 kW en AC, une borne 22 kW ne rechargera pas plus vite." },
      { q: "Le chargeur embarqué limite-t-il la recharge rapide ?", a: "Non : en recharge rapide (DC), le convertisseur est dans la borne. La limite du chargeur embarqué ne concerne que l'AC." },
    ],
    related: ["choisir-puissance-borne", "temps-de-recharge-voiture-electrique", "monophase-ou-triphase-borne", "difference-kw-kwh-borne-recharge"],
  },
  {
    slug: "onduleur-voiture-electrique",
    metaTitle: "Onduleur de voiture électrique : à quoi sert-il ? | Choisis Ta borne",
    metaDescription:
      "L'onduleur d'une voiture électrique convertit le courant pour alimenter le moteur. Rôle, fonctionnement et lien avec la recharge et la recharge bidirectionnelle.",
    h1: "Onduleur de voiture électrique : rôle et utilité",
    updated: "2026-07-15",
    lede: "L'onduleur est un composant clé d'une voiture électrique. Il gère la conversion du courant entre la batterie et le moteur. Explications simples.",
    sections: [
      {
        h2: "Le rôle de l'onduleur",
        paragraphs: [
          "La batterie stocke du courant continu, mais le moteur électrique fonctionne en courant alternatif. L'onduleur convertit le courant continu de la batterie en courant alternatif pour alimenter le moteur, et ajuste sa fréquence pour piloter la vitesse.",
          "C'est un organe central de la chaîne de traction.",
        ],
      },
      {
        h2: "Onduleur et récupération d'énergie",
        paragraphs: [
          "Lors du freinage régénératif, l'onduleur travaille dans l'autre sens : il transforme l'énergie du moteur devenu générateur en courant continu pour recharger la batterie. Il gère donc les deux flux.",
          "C'est ce qui permet de récupérer de l'autonomie au freinage.",
        ],
      },
      {
        h2: "Onduleur et recharge bidirectionnelle",
        paragraphs: [
          "Dans les usages bidirectionnels (V2G, V2H), la conversion du courant est également en jeu pour restituer de l'énergie. L'électronique de puissance du véhicule et de la borne y contribue.",
          "C'est un domaine en plein développement.",
        ],
      },
      {
        h2: "Ce que cela change pour vous",
        paragraphs: [
          "L'onduleur est interne au véhicule : vous n'avez pas à vous en occuper. Ce qui vous concerne, c'est la recharge : une borne bien dimensionnée assure une charge efficace et douce pour la batterie.",
          "Nos installateurs IRVE s'occupent de la partie borne.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert l'onduleur d'une voiture électrique ?", a: "À convertir le courant continu de la batterie en courant alternatif pour le moteur, et à gérer la récupération d'énergie au freinage." },
      { q: "Dois-je entretenir l'onduleur ?", a: "Non, c'est un composant interne du véhicule. Ce qui vous concerne est la recharge et la borne à domicile." },
      { q: "L'onduleur intervient-il dans le V2G ?", a: "L'électronique de puissance du véhicule et de la borne est impliquée dans la conversion nécessaire à la recharge bidirectionnelle." },
    ],
    related: ["autonomie-voiture-electrique", "v2g-vehicle-to-grid", "entretien-borne-recharge", "cout-entretien-voiture-electrique"],
  },
  {
    slug: "tic-linky-borne-recharge",
    metaTitle: "TIC Linky : optimiser sa borne de recharge | Choisis Ta borne",
    metaDescription:
      "La sortie TIC du compteur Linky permet à une borne pilotable d'ajuster la charge en temps réel. Fonctionnement et intérêt pour le délestage et les heures creuses.",
    h1: "TIC Linky : la fonction cachée pour optimiser sa borne",
    updated: "2026-07-15",
    lede: "Le compteur Linky dispose d'une sortie d'information client (TIC) que certaines bornes exploitent pour piloter intelligemment la recharge. Voici comment.",
    sections: [
      {
        h2: "Qu'est-ce que la TIC du Linky",
        paragraphs: [
          "La TIC (Télé-Information Client) est une sortie du compteur Linky qui délivre en temps réel des données de consommation et de puissance. Un équipement compatible, comme une borne pilotable, peut les lire.",
          "C'est une porte d'entrée vers la recharge intelligente.",
        ],
      },
      {
        h2: "À quoi ça sert pour la recharge",
        paragraphs: [
          "Grâce à la TIC, une borne peut connaître la consommation instantanée du logement et adapter sa puissance de charge en conséquence : c'est le délestage dynamique. Elle réduit la charge quand le logement consomme, puis l'augmente ensuite.",
          "Résultat : pas de dépassement de l'abonnement, sans le surdimensionner.",
        ],
      },
      {
        h2: "TIC et heures creuses",
        paragraphs: [
          "La TIC véhicule aussi l'information de période tarifaire (heures pleines / heures creuses). Une borne pilotable peut ainsi programmer la charge sur les plages les moins chères automatiquement.",
          "Vous rechargez au meilleur tarif sans y penser.",
        ],
      },
      {
        h2: "Comment en profiter",
        paragraphs: [
          "Il faut une borne compatible et un raccordement à la sortie TIC du Linky. L'installateur IRVE met en place cette liaison lors de la pose.",
          "Nos partenaires proposent des bornes pilotables exploitant le Linky.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que la TIC du Linky ?", a: "Une sortie d'information client du compteur qui délivre en temps réel la consommation et la période tarifaire, exploitable par une borne pilotable." },
      { q: "À quoi ça sert pour ma borne ?", a: "À faire du délestage dynamique (adapter la charge à la consommation du logement) et à programmer la charge en heures creuses automatiquement." },
      { q: "Faut-il une borne particulière ?", a: "Oui, une borne pilotable compatible, raccordée à la sortie TIC du Linky par l'installateur." },
    ],
    related: ["pilotage-energetique-recharge", "heures-creuses-recharge-voiture-electrique", "wallbox-connectee", "delesteur-borne-recharge"],
  },
  {
    slug: "recharger-voiture-prise-normale-mode-2",
    metaTitle: "Recharger sa voiture électrique sur prise normale (mode 2) | Choisis Ta borne",
    metaDescription:
      "Peut-on recharger sur une prise domestique ? Comment fonctionne le mode 2, ses limites de puissance et de sécurité, et pourquoi préférer une borne au quotidien.",
    h1: "Recharger sur une prise normale : le mode 2",
    updated: "2026-07-15",
    lede: "Brancher sa voiture sur une prise domestique est possible via le mode 2, mais avec des limites. Voici ce qu'il faut savoir avant d'en faire son quotidien.",
    sections: [
      {
        h2: "Comment fonctionne le mode 2",
        paragraphs: [
          "Le mode 2 permet de recharger sur une prise domestique grâce à un câble muni d'un boîtier de contrôle (parfois appelé CRO). Ce boîtier assure un minimum de sécurité entre la prise et la voiture.",
          "C'est la solution de dépannage la plus répandue.",
        ],
      },
      {
        h2: "Des limites de puissance",
        paragraphs: [
          "Sur une prise domestique classique, la puissance est bridée (autour de 2,3 kW), ce qui rend la recharge lente : plusieurs heures, voire une nuit entière, pour une charge partielle. La prise renforcée fait un peu mieux, sans égaler une borne.",
          "Pour un usage quotidien, c'est souvent insuffisant.",
        ],
      },
      {
        h2: "Une question de sécurité",
        paragraphs: [
          "Une prise domestique n'est pas conçue pour délivrer un courant élevé pendant des heures : risque d'échauffement si l'installation est ancienne ou de mauvaise qualité. Le mode 2 dépanne, mais ne remplace pas une installation dédiée.",
          "Une borne en mode 3 supprime ce risque.",
        ],
      },
      {
        h2: "Prise, prise renforcée ou borne ?",
        paragraphs: [
          "Pour un usage occasionnel, le mode 2 suffit. Pour recharger tous les jours, une borne dédiée (mode 3) est plus rapide, plus sûre et éligible aux aides.",
          "Nos installateurs IRVE vous orientent vers la solution adaptée à votre usage.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on recharger sur une prise normale ?", a: "Oui, via le mode 2 (câble avec boîtier de contrôle), mais lentement (autour de 2,3 kW) et en dépannage plutôt qu'au quotidien." },
      { q: "Est-ce dangereux ?", a: "Une prise domestique n'est pas prévue pour un courant élevé prolongé : risque d'échauffement sur une installation ancienne. La borne en mode 3 supprime ce risque." },
      { q: "Prise renforcée ou borne ?", a: "La prise renforcée fait un peu mieux qu'une prise classique, mais une borne dédiée reste plus rapide, plus sûre et éligible aux aides." },
    ],
    related: ["prise-renforcee-ou-wallbox", "modes-de-recharge-electrique", "installer-borne-de-recharge", "temps-de-recharge-voiture-electrique"],
  },
  {
    slug: "partage-de-puissance-bornes-recharge",
    metaTitle: "Partage de puissance : installer plusieurs bornes sans renforcer | Choisis Ta borne",
    metaDescription:
      "Le partage de puissance (load balancing) répartit l'énergie disponible entre plusieurs bornes. Idéal en copro et entreprise pour éviter de coûteux renforcements électriques.",
    h1: "Partage de puissance : plusieurs bornes sans renforcement",
    updated: "2026-07-15",
    lede: "Installer plusieurs bornes sans dépasser la puissance disponible, c'est le rôle du partage de puissance. Une fonction clé en copropriété et en entreprise.",
    sections: [
      {
        h2: "Le problème : une puissance limitée",
        paragraphs: [
          "Un immeuble ou un site dispose d'une puissance électrique limitée. Si plusieurs bornes chargent en même temps à pleine puissance, l'installation risque de la dépasser, ce qui imposerait un renforcement coûteux.",
          "Le partage de puissance résout ce problème.",
        ],
      },
      {
        h2: "Comment fonctionne le partage de puissance",
        paragraphs: [
          "Le partage de puissance (load balancing) répartit dynamiquement l'énergie disponible entre les bornes actives. Si trois voitures chargent, chacune reçoit une part ; si une se déconnecte, les autres accélèrent.",
          "L'installation reste toujours dans les limites de sa puissance.",
        ],
      },
      {
        h2: "Statique ou dynamique",
        paragraphs: [
          "Le partage peut être statique (répartition fixe) ou dynamique (ajusté en temps réel selon la consommation globale du site). Le dynamique est le plus efficace, car il exploite au mieux la puissance réellement disponible.",
          "Le choix dépend de la configuration du site.",
        ],
      },
      {
        h2: "Un atout en copro et entreprise",
        paragraphs: [
          "Le partage de puissance permet d'équiper de nombreuses places sans travaux d'augmentation de puissance, souvent onéreux. C'est une brique essentielle des installations collectives.",
          "Nos installateurs IRVE dimensionnent le partage adapté à votre site.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert le partage de puissance ?", a: "À répartir l'énergie disponible entre plusieurs bornes pour ne pas dépasser la puissance du site, sans renforcement coûteux." },
      { q: "Statique ou dynamique ?", a: "Le dynamique ajuste la répartition en temps réel selon la consommation globale : c'est le plus efficace. Le statique répartit de façon fixe." },
      { q: "Est-ce utile à domicile ?", a: "Surtout en collectif (copro, entreprise). À domicile, c'est plutôt le délestage qui adapte la charge à la consommation du logement." },
    ],
    related: ["delesteur-borne-recharge", "pilotage-energetique-recharge", "borne-recharge-copropriete", "supervision-borne-recharge"],
  },
  {
    slug: "delesteur-borne-recharge",
    metaTitle: "Délesteur pour borne de recharge : éviter les dépassements | Choisis Ta borne",
    metaDescription:
      "Le délesteur adapte la puissance de la borne à la consommation du logement pour éviter de faire disjoncter. Fonctionnement, intérêt et différence avec le partage de puissance.",
    h1: "Délesteur de borne de recharge : à quoi ça sert ?",
    updated: "2026-07-15",
    lede: "Le délesteur évite de faire disjoncter votre installation en adaptant la charge à la consommation du logement. Une fonction précieuse sur les abonnements modestes.",
    sections: [
      {
        h2: "Le rôle du délesteur",
        paragraphs: [
          "Le délesteur (ou gestion dynamique de la charge) surveille la consommation du logement et réduit automatiquement la puissance de la borne quand d'autres appareils sollicitent le réseau, pour ne pas dépasser la puissance souscrite.",
          "Il évite ainsi les coupures intempestives.",
        ],
      },
      {
        h2: "Comment il fonctionne",
        paragraphs: [
          "En lisant la consommation en temps réel (par exemple via la TIC du Linky ou une pince ampèremétrique), le délesteur module la charge : il l'abaisse lors des pics de consommation, puis la remonte ensuite.",
          "La recharge s'adapte en continu, sans intervention de votre part.",
        ],
      },
      {
        h2: "Délesteur ou partage de puissance",
        paragraphs: [
          "Le délesteur gère l'équilibre entre la borne et le reste du logement. Le partage de puissance, lui, répartit l'énergie entre plusieurs bornes. Les deux logiques sont complémentaires selon le contexte.",
          "À domicile, c'est surtout le délesteur qui compte.",
        ],
      },
      {
        h2: "Éviter de surdimensionner l'abonnement",
        paragraphs: [
          "Grâce au délesteur, inutile d'augmenter la puissance souscrite (et donc l'abonnement) juste pour la borne. C'est une économie récurrente appréciable.",
          "Nos installateurs IRVE proposent des bornes intégrant cette gestion.",
        ],
      },
    ],
    faq: [
      { q: "À quoi sert un délesteur ?", a: "À adapter la puissance de charge à la consommation du logement pour ne pas dépasser l'abonnement et éviter les disjonctions." },
      { q: "Évite-t-il d'augmenter l'abonnement ?", a: "Oui, souvent : il permet de recharger sans surdimensionner la puissance souscrite, ce qui évite un surcoût d'abonnement récurrent." },
      { q: "Délesteur ou partage de puissance ?", a: "Le délesteur équilibre borne et logement ; le partage répartit l'énergie entre plusieurs bornes. À domicile, le délesteur est l'essentiel." },
    ],
    related: ["partage-de-puissance-bornes-recharge", "pilotage-energetique-recharge", "tic-linky-borne-recharge", "wallbox-connectee"],
  },
  {
    slug: "kva-ampere-monophase-triphase",
    metaTitle: "kVA, ampères, monophasé, triphasé : comprendre sa puissance | Choisis Ta borne",
    metaDescription:
      "Comment se traduisent les kVA en ampères selon le monophasé ou le triphasé ? Comprendre sa puissance souscrite pour choisir la bonne borne de recharge.",
    h1: "kVA, ampères, monophasé et triphasé",
    updated: "2026-07-15",
    lede: "Comprendre la relation entre kVA, ampères et type de compteur aide à savoir quelle borne votre installation peut accueillir. Voici les repères clés.",
    sections: [
      {
        h2: "kVA et puissance souscrite",
        paragraphs: [
          "La puissance de votre compteur s'exprime en kVA (kilovoltampères). C'est la puissance maximale que votre installation peut appeler simultanément. Une borne de recharge vient s'ajouter aux autres usages du logement.",
          "Connaître son abonnement est le point de départ.",
        ],
      },
      {
        h2: "Monophasé ou triphasé",
        paragraphs: [
          "En monophasé (le cas le plus courant en résidentiel), l'électricité arrive sur une seule phase à 230 V. En triphasé, elle est répartie sur trois phases, ce qui permet des puissances de borne plus élevées (11 ou 22 kW).",
          "Le type de compteur détermine la puissance de borne possible.",
        ],
      },
      {
        h2: "Traduire les kVA en ampères",
        paragraphs: [
          "En monophasé, on convertit approximativement la puissance en ampères en divisant par la tension (230 V) : un abonnement de 12 kVA correspond ainsi à environ 60 A. En triphasé, la puissance se répartit sur trois phases, donc l'intensité par phase est plus faible.",
          "Ces repères aident à vérifier ce que l'installation peut supporter.",
        ],
      },
      {
        h2: "Quelle borne pour votre compteur",
        paragraphs: [
          "En monophasé, une borne 7,4 kW est la solution la plus courante. En triphasé, on peut viser 11 ou 22 kW selon le véhicule. L'installateur vérifie l'abonnement et l'installation avant de recommander une puissance.",
          "Nos installateurs IRVE réalisent ce diagnostic gratuitement.",
        ],
      },
    ],
    faq: [
      { q: "Comment convertir des kVA en ampères ?", a: "En monophasé, on divise approximativement par la tension (230 V) : 12 kVA ≈ 60 A. En triphasé, la puissance se répartit sur trois phases." },
      { q: "Quelle borne en monophasé ?", a: "La 7,4 kW est la plus courante. Les 11 et 22 kW nécessitent un compteur triphasé." },
      { q: "Comment connaître mon type de compteur ?", a: "Votre facture ou votre compteur l'indiquent ; l'installateur IRVE le vérifie lors du diagnostic préalable." },
    ],
    related: ["monophase-ou-triphase-borne", "choisir-puissance-borne", "borne-de-recharge-11-kw", "borne-de-recharge-22-kw"],
  },
  {
    slug: "borne-7kw-monophase",
    metaTitle: "Borne 7 kW monophasé : le guide d'installation | Choisis Ta borne",
    metaDescription:
      "La borne 7,4 kW monophasé est la plus installée à domicile. Pour qui, temps de charge, compatibilité et installation. Le guide complet et devis gratuit.",
    h1: "Borne 7 kW monophasé : le choix le plus courant",
    updated: "2026-07-15",
    lede: "La borne 7,4 kW en monophasé est la solution la plus répandue à domicile. Voici pourquoi elle convient à la majorité des foyers.",
    sections: [
      {
        h2: "Pourquoi la 7,4 kW s'impose",
        paragraphs: [
          "La borne de 7,4 kW se branche en monophasé, comme la plupart des logements résidentiels. Elle offre un bon compromis : nettement plus rapide qu'une prise, sans nécessiter de passer en triphasé.",
          "C'est la puissance de référence pour la recharge à domicile.",
        ],
      },
      {
        h2: "Un temps de charge adapté à la nuit",
        paragraphs: [
          "À 7,4 kW, une borne recharge une batterie complète en une nuit dans la plupart des cas. Comme la voiture reste branchée plusieurs heures, cette puissance suffit largement pour repartir chargé chaque matin.",
          "Inutile, souvent, de viser plus puissant.",
        ],
      },
      {
        h2: "Compatibilité véhicule",
        paragraphs: [
          "La 7,4 kW est compatible avec la quasi-totalité des véhicules électriques en charge AC. La vitesse réelle dépend aussi du chargeur embarqué de la voiture, mais 7,4 kW est un standard bien pris en charge.",
          "Vérifiez simplement que votre véhicule accepte cette puissance en monophasé.",
        ],
      },
      {
        h2: "Installation et aides",
        paragraphs: [
          "L'installation d'une borne 7,4 kW par un électricien IRVE ouvre droit à la TVA réduite à 5,5 % et, en copropriété, à la prime ADVENIR. Le devis dépend surtout de la distance au tableau.",
          "Nos installateurs IRVE vous établissent un devis gratuit.",
        ],
      },
    ],
    faq: [
      { q: "La borne 7,4 kW suffit-elle ?", a: "Pour la majorité des foyers, oui : elle recharge une batterie complète pendant la nuit, sans nécessiter un compteur triphasé." },
      { q: "Faut-il un compteur particulier ?", a: "Non, la 7,4 kW fonctionne en monophasé, comme la plupart des logements. Les 11 et 22 kW nécessitent le triphasé." },
      { q: "Quel prix pour une borne 7,4 kW posée ?", a: "Généralement de 990 à 1 990 € posée, avant aides (TVA 5,5 %, ADVENIR en copro), selon la distance au tableau." },
    ],
    related: ["choisir-puissance-borne", "monophase-ou-triphase-borne", "borne-de-recharge-11-kw", "prix-borne-de-recharge"],
  },
  {
    slug: "norme-nf-c-15-100-irve",
    metaTitle: "Norme NF C 15-100 et IRVE : la conformité de votre borne | Choisis Ta borne",
    metaDescription:
      "La norme NF C 15-100 encadre l'installation électrique et les bornes de recharge (partie IRVE). Ce qu'elle impose et pourquoi passer par un électricien certifié.",
    h1: "Norme NF C 15-100 : la conformité de votre installation IRVE",
    updated: "2026-07-15",
    lede: "La norme NF C 15-100 encadre les installations électriques basse tension, y compris les bornes de recharge. Voici ce qu'elle implique pour votre projet.",
    sections: [
      {
        h2: "Le cadre de la NF C 15-100",
        paragraphs: [
          "La NF C 15-100 est la norme de référence des installations électriques basse tension en France. Elle définit les règles de sécurité : protections, mise à la terre, dimensionnement des circuits, et comporte des dispositions propres aux infrastructures de recharge de véhicules électriques.",
          "Respecter cette norme est indispensable pour une installation sûre.",
        ],
      },
      {
        h2: "Ce qu'elle impose pour une borne",
        paragraphs: [
          "Pour une borne, la norme exige notamment un circuit dédié, une protection différentielle adaptée, une mise à la terre conforme et, selon les cas, des dispositifs comme la détection de courant continu ou un parafoudre.",
          "Chaque point contribue à la sécurité de l'ensemble.",
        ],
      },
      {
        h2: "Le rôle de la certification IRVE",
        paragraphs: [
          "L'installation d'une borne au-delà d'une certaine puissance doit être réalisée par un électricien certifié IRVE. Cette qualification atteste la maîtrise des règles applicables et conditionne l'éligibilité aux aides.",
          "C'est une garantie de conformité et de sécurité.",
        ],
      },
      {
        h2: "Pourquoi ne pas s'en passer",
        paragraphs: [
          "Une installation non conforme peut être dangereuse, refuser de charger, et vous priver des aides. Faire appel à un professionnel IRVE sécurise le projet de bout en bout.",
          "Nos installateurs partenaires garantissent une pose aux normes.",
        ],
      },
    ],
    faq: [
      { q: "Qu'impose la NF C 15-100 pour une borne ?", a: "Un circuit dédié, une protection différentielle adaptée, une mise à la terre conforme et, selon les cas, une détection de courant continu ou un parafoudre." },
      { q: "Faut-il un électricien IRVE ?", a: "Au-delà d'une certaine puissance, oui : la pose doit être réalisée par un installateur certifié IRVE, ce qui conditionne aussi les aides." },
      { q: "Que risque-t-on avec une installation non conforme ?", a: "Un danger pour la sécurité, une borne qui refuse de charger, et la perte du bénéfice des aides." },
    ],
    related: ["prise-de-terre-borne-recharge", "protection-differentielle-borne-recharge", "installer-borne-de-recharge", "consuel-irve"],
  },
  {
    slug: "borne-recharge-wallbox",
    metaTitle: "Borne de recharge Wallbox : gamme, atouts et usages | Choisis Ta borne",
    metaDescription:
      "La marque Wallbox propose des bornes compactes et connectées (gamme Pulsar). Atouts, cas d'usage et installation par un électricien IRVE. Le guide.",
    h1: "Borne de recharge Wallbox : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Wallbox est l'une des marques de bornes les plus connues, appréciée pour ses modèles compacts et connectés. Tour d'horizon de ses atouts.",
    sections: [
      {
        h2: "Une marque orientée grand public",
        paragraphs: [
          "Wallbox est un fabricant d'origine espagnole reconnu pour ses bornes domestiques compactes et son application mobile. Sa gamme Pulsar est très répandue chez les particuliers.",
          "Le design compact et la simplicité d'usage en font un choix populaire.",
        ],
      },
      {
        h2: "Connectivité et pilotage",
        paragraphs: [
          "Les bornes Wallbox connectées permettent de suivre la consommation, de programmer la charge en heures creuses et de piloter la borne à distance depuis une application. Certains modèles gèrent aussi le partage de puissance.",
          "C'est un atout pour optimiser la recharge au quotidien.",
        ],
      },
      {
        h2: "Pour quels usages",
        paragraphs: [
          "Wallbox convient bien à la maison individuelle et à la place en copropriété, en 7,4 kW monophasé ou en 11/22 kW triphasé selon le modèle et votre compteur.",
          "Le choix du modèle dépend de votre véhicule et de votre installation.",
        ],
      },
      {
        h2: "Installation par un IRVE",
        paragraphs: [
          "Comme toute borne, une Wallbox doit être posée par un électricien certifié IRVE pour garantir la conformité et l'éligibilité aux aides (TVA 5,5 %, prime ADVENIR en copro).",
          "Nos installateurs partenaires vous conseillent la borne adaptée, Wallbox ou autre marque de qualité.",
        ],
      },
    ],
    faq: [
      { q: "Wallbox est-elle adaptée à la maison ?", a: "Oui, ses bornes compactes et connectées conviennent bien au domicile, en 7,4 kW monophasé ou en triphasé selon le modèle." },
      { q: "Peut-on piloter une Wallbox à distance ?", a: "Oui, les modèles connectés se pilotent via une application : suivi de consommation, programmation en heures creuses, etc." },
      { q: "Qui installe une borne Wallbox ?", a: "Un électricien certifié IRVE, pour garantir la conformité et l'accès aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "wallbox-connectee", "borne-recharge-zaptec", "borne-recharge-alfen"],
  },
  {
    slug: "borne-recharge-zaptec",
    metaTitle: "Borne de recharge Zaptec : robustesse et gamme | Choisis Ta borne",
    metaDescription:
      "Zaptec, marque norvégienne, propose des bornes robustes pour la maison (Zaptec Go) et le collectif (Zaptec Pro). Atouts, usages et installation IRVE.",
    h1: "Borne de recharge Zaptec : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Zaptec est une marque norvégienne réputée pour la robustesse de ses bornes, aussi bien à domicile qu'en installation collective. Présentation.",
    sections: [
      {
        h2: "Une marque premium",
        paragraphs: [
          "Zaptec est un fabricant norvégien reconnu pour la qualité et la durabilité de ses équipements, conçus pour un climat exigeant. La marque adresse à la fois les particuliers et les installations collectives.",
          "La robustesse est l'un de ses points forts.",
        ],
      },
      {
        h2: "Domicile et collectif",
        paragraphs: [
          "La gamme couvre la borne domestique compacte et des solutions pensées pour le collectif, avec gestion et équilibrage de la puissance entre plusieurs bornes. C'est utile en copropriété ou sur un parking d'entreprise.",
          "Le modèle se choisit selon le contexte.",
        ],
      },
      {
        h2: "Gestion intelligente de la charge",
        paragraphs: [
          "Les bornes Zaptec proposent un pilotage de la puissance et un équilibrage entre points de charge, ce qui permet d'installer plusieurs bornes sans forcément renforcer l'installation électrique.",
          "C'est un atout pour les projets multi-bornes.",
        ],
      },
      {
        h2: "Installation par un IRVE",
        paragraphs: [
          "Une borne Zaptec s'installe par un électricien certifié IRVE, gage de conformité et d'éligibilité aux aides. Nos installateurs partenaires vous orientent vers le modèle adapté.",
          "Zaptec ou autre marque, le conseil reste le même : la bonne borne pour votre besoin.",
        ],
      },
    ],
    faq: [
      { q: "Zaptec convient-elle au collectif ?", a: "Oui, la marque propose des solutions pensées pour le collectif, avec équilibrage de puissance entre plusieurs bornes, en plus de ses modèles domestiques." },
      { q: "Zaptec est-elle robuste ?", a: "C'est l'un de ses points forts : des équipements norvégiens conçus pour durer, y compris en conditions exigeantes." },
      { q: "Qui installe une borne Zaptec ?", a: "Un électricien certifié IRVE, pour la conformité et l'accès aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-recharge-wallbox", "partage-de-puissance-bornes-recharge", "borne-recharge-copropriete"],
  },
  {
    slug: "borne-recharge-v2c",
    metaTitle: "Borne de recharge V2C (Trydan) : atouts et usages | Choisis Ta borne",
    metaDescription:
      "V2C, marque espagnole, propose des bornes accessibles et connectées comme la Trydan, avec gestion solaire. Atouts, usages et installation par un IRVE.",
    h1: "Borne de recharge V2C : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "V2C est une marque espagnole appréciée pour ses bornes connectées et accessibles, dont le modèle Trydan. Présentation de ses atouts.",
    sections: [
      {
        h2: "Une marque au bon rapport qualité-prix",
        paragraphs: [
          "V2C est un fabricant espagnol qui propose des bornes connectées à un tarif compétitif, dont la Trydan est le modèle phare. La marque met l'accent sur les fonctions intelligentes.",
          "C'est une option intéressante pour un budget maîtrisé.",
        ],
      },
      {
        h2: "Fonctions intelligentes et solaire",
        paragraphs: [
          "Les bornes V2C proposent le pilotage via application, la programmation en heures creuses et des fonctions de recharge sur le surplus solaire pour les foyers équipés de panneaux photovoltaïques.",
          "L'intégration solaire est un atout pour l'autoconsommation.",
        ],
      },
      {
        h2: "Pour quels usages",
        paragraphs: [
          "V2C s'adresse surtout à la maison individuelle, en 7,4 kW monophasé ou en triphasé selon le modèle et votre compteur. La borne se choisit en fonction de votre véhicule.",
          "L'installateur adapte la puissance à votre installation.",
        ],
      },
      {
        h2: "Installation par un IRVE",
        paragraphs: [
          "Une borne V2C doit être posée par un électricien certifié IRVE pour la conformité et l'éligibilité aux aides. Nos installateurs partenaires vous conseillent le modèle adapté.",
          "V2C ou autre marque, l'important est la cohérence avec votre besoin.",
        ],
      },
    ],
    faq: [
      { q: "La borne V2C gère-t-elle le solaire ?", a: "Oui, V2C propose des fonctions de recharge sur le surplus solaire, intéressantes pour les foyers équipés de panneaux photovoltaïques." },
      { q: "V2C est-elle abordable ?", a: "La marque se positionne sur un bon rapport qualité-prix, avec des bornes connectées comme la Trydan." },
      { q: "Qui installe une borne V2C ?", a: "Un électricien certifié IRVE, pour garantir la conformité et l'accès aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-recharge-panneaux-solaires", "borne-recharge-wallbox", "wallbox-connectee"],
  },
  {
    slug: "prise-green-up-legrand",
    metaTitle: "Prise Green'up de Legrand : la recharge renforcée à domicile | Choisis Ta borne",
    metaDescription:
      "La prise Green'up de Legrand est une prise renforcée pour recharger sa voiture électrique un peu plus vite qu'une prise classique. Puissance, limites et alternative borne.",
    h1: "Prise Green'up Legrand : la recharge renforcée",
    updated: "2026-07-15",
    lede: "La prise Green'up de Legrand est une prise renforcée dédiée à la recharge, plus sûre qu'une prise classique mais moins puissante qu'une borne. Le point.",
    sections: [
      {
        h2: "Qu'est-ce que la Green'up",
        paragraphs: [
          "La Green'up est une prise renforcée conçue par Legrand, fabricant français, spécifiquement pour la recharge des véhicules électriques. Associée à un câble compatible, elle délivre une puissance supérieure à une prise domestique classique.",
          "Elle offre un compromis entre la prise standard et la borne.",
        ],
      },
      {
        h2: "Puissance et temps de charge",
        paragraphs: [
          "La Green'up plafonne autour de 3,7 kW, soit environ deux fois plus qu'une prise classique bridée, mais bien moins qu'une borne de 7,4 kW ou plus. Elle convient pour de petits besoins ou en complément.",
          "Le temps de charge reste plus long qu'avec une borne dédiée.",
        ],
      },
      {
        h2: "Sécurité",
        paragraphs: [
          "Plus sûre qu'une prise domestique pour la recharge, la Green'up nécessite tout de même une installation dédiée et une protection adaptée, réalisées par un électricien.",
          "Elle ne s'improvise pas sur n'importe quelle prise existante.",
        ],
      },
      {
        h2: "Green'up ou borne ?",
        paragraphs: [
          "Pour un usage occasionnel ou un petit budget, la Green'up dépanne bien. Pour un usage quotidien, une borne dédiée reste plus rapide, plus confortable et éligible aux aides.",
          "Nos installateurs IRVE vous orientent selon votre usage et votre budget.",
        ],
      },
    ],
    faq: [
      { q: "Quelle puissance pour une prise Green'up ?", a: "Environ 3,7 kW, soit le double d'une prise classique bridée, mais moins qu'une borne de 7,4 kW." },
      { q: "La Green'up est-elle sûre ?", a: "Plus sûre qu'une prise domestique pour la recharge, mais elle exige une installation dédiée et une protection adaptée par un électricien." },
      { q: "Green'up ou borne dédiée ?", a: "La Green'up dépanne pour un usage occasionnel ou un petit budget ; la borne reste préférable pour un usage quotidien et donne droit aux aides." },
    ],
    related: ["prise-renforcee-ou-wallbox", "borne-de-recharge-pas-cher", "recharger-voiture-prise-normale-mode-2", "borne-de-recharge-maison"],
  },
  {
    slug: "borne-recharge-schneider",
    metaTitle: "Borne de recharge Schneider Electric (EVlink) : le guide | Choisis Ta borne",
    metaDescription:
      "Schneider Electric propose la gamme EVlink de bornes de recharge, répandue en résidentiel et en tertiaire. Atouts, usages et installation par un électricien IRVE.",
    h1: "Borne de recharge Schneider Electric : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Schneider Electric, groupe français, propose la gamme EVlink de bornes de recharge, appréciée en résidentiel comme en tertiaire. Présentation.",
    sections: [
      {
        h2: "Une marque de référence en électricité",
        paragraphs: [
          "Schneider Electric est un acteur français majeur du matériel électrique. Sa gamme de bornes EVlink couvre les besoins des particuliers, des copropriétés et des entreprises.",
          "La marque bénéficie d'un solide réseau et d'une bonne disponibilité des pièces.",
        ],
      },
      {
        h2: "Résidentiel et tertiaire",
        paragraphs: [
          "Les bornes Schneider s'adaptent à la maison individuelle comme aux parkings collectifs et d'entreprise, avec des fonctions de gestion de charge sur les modèles adaptés.",
          "C'est un choix cohérent quand l'installation est déjà en matériel Schneider.",
        ],
      },
      {
        h2: "Intégration à l'installation",
        paragraphs: [
          "L'un des atouts d'une marque comme Schneider est la cohérence avec le reste du tableau électrique et la disponibilité des protections associées. Cela facilite une installation propre et évolutive.",
          "L'installateur en tient compte selon votre configuration.",
        ],
      },
      {
        h2: "Installation par un IRVE",
        paragraphs: [
          "Une borne Schneider s'installe par un électricien certifié IRVE, pour la conformité et l'accès aux aides. Nos installateurs partenaires vous conseillent le modèle adapté.",
          "Schneider ou autre marque de qualité, le conseil reste personnalisé.",
        ],
      },
    ],
    faq: [
      { q: "La gamme EVlink, c'est quoi ?", a: "La gamme de bornes de recharge de Schneider Electric, couvrant le résidentiel, la copropriété et l'entreprise." },
      { q: "Schneider convient-elle à l'entreprise ?", a: "Oui, ses bornes s'adaptent aux parkings collectifs et d'entreprise, avec gestion de charge sur les modèles adaptés." },
      { q: "Qui installe une borne Schneider ?", a: "Un électricien certifié IRVE, pour garantir la conformité et l'éligibilité aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-de-recharge-entreprise", "borne-recharge-alfen", "borne-recharge-copropriete"],
  },
  {
    slug: "borne-recharge-hager",
    metaTitle: "Borne de recharge Hager (Witty) : atouts et usages | Choisis Ta borne",
    metaDescription:
      "Hager propose la gamme Witty de bornes de recharge, appréciée des électriciens pour sa robustesse et son intégration au tableau. Atouts et installation IRVE.",
    h1: "Borne de recharge Hager : ce qu'il faut savoir",
    updated: "2026-07-15",
    lede: "Hager, spécialiste du matériel électrique, propose la gamme Witty de bornes de recharge, réputée robuste et bien intégrée à l'installation. Présentation.",
    sections: [
      {
        h2: "Une marque de spécialiste électrique",
        paragraphs: [
          "Hager est un fabricant reconnu de matériel électrique, dont les bornes de la gamme Witty sont appréciées des électriciens pour leur robustesse et leur cohérence avec le reste de l'installation.",
          "C'est un gage de fiabilité et de disponibilité des composants.",
        ],
      },
      {
        h2: "Robustesse et intégration",
        paragraphs: [
          "Les bornes Hager sont conçues pour durer et s'intégrer facilement à un tableau électrique existant, ce qui simplifie l'installation et la maintenance.",
          "C'est un atout apprécié des professionnels.",
        ],
      },
      {
        h2: "Pour quels usages",
        paragraphs: [
          "La gamme couvre la maison individuelle et les besoins collectifs, en différentes puissances selon le modèle et votre compteur (monophasé ou triphasé).",
          "Le choix dépend de votre véhicule et de votre installation.",
        ],
      },
      {
        h2: "Installation par un IRVE",
        paragraphs: [
          "Une borne Hager s'installe par un électricien certifié IRVE, pour la conformité et l'accès aux aides. Nos installateurs partenaires vous orientent vers le modèle adapté.",
          "Hager ou autre marque de qualité, l'important est l'adéquation à votre besoin.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que la gamme Witty ?", a: "La gamme de bornes de recharge de Hager, appréciée pour sa robustesse et son intégration au tableau électrique." },
      { q: "Hager convient-elle à la maison ?", a: "Oui, la gamme couvre la maison individuelle comme les besoins collectifs, en différentes puissances selon le compteur." },
      { q: "Qui installe une borne Hager ?", a: "Un électricien certifié IRVE, pour garantir la conformité et l'éligibilité aux aides." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-recharge-alfen", "borne-recharge-schneider", "installer-borne-de-recharge"],
  },
  {
    slug: "comparatif-marques-borne-recharge",
    metaTitle: "Comparatif des marques de bornes de recharge : comment choisir | Choisis Ta borne",
    metaDescription:
      "Wallbox, Zaptec, V2C, Schneider, Hager, Alfen… Comment choisir la marque de sa borne de recharge ? Les critères qui comptent vraiment, au-delà du logo.",
    h1: "Comparatif des marques de bornes de recharge",
    updated: "2026-07-15",
    lede: "Le marché des bornes compte de nombreuses marques de qualité. Plutôt que le logo, ce sont quelques critères concrets qui doivent guider votre choix.",
    sections: [
      {
        h2: "Les grandes marques du marché",
        paragraphs: [
          "Parmi les marques répandues figurent Wallbox, Zaptec, V2C, Schneider Electric, Hager ou encore Alfen. Chacune a ses points forts : compacité, robustesse, rapport qualité-prix, intégration au tableau ou solutions collectives.",
          "Toutes proposent des bornes fiables ; l'essentiel est de choisir selon votre besoin.",
        ],
      },
      {
        h2: "Les critères qui comptent vraiment",
        paragraphs: [
          "Au-delà de la marque, regardez :",
        ],
        list: [
          "La puissance adaptée à votre véhicule et à votre compteur (7,4 / 11 / 22 kW).",
          "La connectivité et le pilotage (application, heures creuses, délestage).",
          "La gestion multi-bornes (partage de puissance) si vous êtes en collectif.",
          "L'indice de protection (IP) pour une pose en extérieur.",
          "La compatibilité OCPP pour une installation évolutive.",
        ],
      },
      {
        h2: "Domicile ou collectif",
        paragraphs: [
          "Pour la maison, une borne compacte et connectée suffit largement. Pour la copropriété ou l'entreprise, privilégiez des marques proposant l'équilibrage de puissance et la supervision (OCPP).",
          "Le contexte oriente le choix autant que la marque.",
        ],
      },
      {
        h2: "Le rôle du conseil IRVE",
        paragraphs: [
          "Le meilleur choix dépend de votre véhicule, de votre installation et de votre budget. Un installateur certifié IRVE vous recommande une marque et une puissance adaptées, et pose le tout aux normes.",
          "Nos partenaires vous transmettent jusqu'à 3 devis gratuits à comparer.",
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure marque de borne ?", a: "Il n'y a pas de réponse unique : Wallbox, Zaptec, V2C, Schneider, Hager, Alfen sont toutes fiables. Le bon choix dépend de votre véhicule, de votre installation et de votre usage." },
      { q: "Quels critères pour choisir ?", a: "La puissance adaptée, la connectivité, la gestion multi-bornes en collectif, l'indice de protection en extérieur et la compatibilité OCPP." },
      { q: "Qui peut me conseiller ?", a: "Un installateur certifié IRVE, qui recommande la marque et la puissance adaptées et pose la borne aux normes." },
    ],
    related: ["quelle-borne-de-recharge-choisir", "borne-recharge-wallbox", "borne-recharge-zaptec", "borne-recharge-alfen"],
  },
  {
    slug: "recharger-voiture-electrique-paris",
    metaTitle: "Recharger sa voiture électrique à Paris : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Paris ? Copropriété haussmannienne, parking souterrain, réseau Belib' et ZFE du Grand Paris : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Paris ?",
    updated: "2026-07-15",
    lede: "À Paris, où l'immense majorité des habitants vit en copropriété, la recharge à domicile passe presque toujours par le droit à la prise sur une place de parking privative ou en sous-sol.",
    sections: [
      {
        h2: "Recharger en copropriété à Paris",
        paragraphs: [
          "Intra-muros, les pavillons sont rares : l'essentiel du bâti est constitué d'immeubles haussmanniens et de copropriétés avec parking en sous-sol. C'est là que se joue la recharge à domicile. Le droit à la prise permet d'équiper sa place sans attendre un vote de l'assemblée générale, même dans les immeubles anciens.",
          "En petite couronne (Neuilly, Boulogne, Vincennes, Montreuil), la part de maisons individuelles remonte et la pose d'une borne au tableau devient plus directe. Dans tous les cas, la recharge nocturne en heures creuses reste la solution la plus économique, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public parisien",
        paragraphs: [
          "Paris dispose d'un réseau de bornes en voirie et dans les parkings concédés, complété par des bornes rapides en périphérie et sur les grands axes. C'est une solution de dépannage utile pour les Parisiens sans stationnement privatif.",
          "Ces bornes publiques restent néanmoins plus coûteuses et moins pratiques qu'une borne dédiée sur sa propre place.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "De nombreuses entreprises franciliennes équipent leurs parkings de bornes. Recharger pendant sa journée de travail complète bien la recharge à domicile, en particulier pour les salariés qui font de longs trajets domicile-travail depuis la banlieue.",
          "C'est un avantage de plus en plus recherché, notamment sur les campus tertiaires de la Défense et des pôles d'affaires.",
        ],
      },
      {
        h2: "La ZFE du Grand Paris et la meilleure option",
        paragraphs: [
          "La zone à faibles émissions de la métropole du Grand Paris renforce l'intérêt de l'électrique : circulation préservée et coût de recharge maîtrisé à domicile. Pour un Parisien disposant d'une place de parking, la borne dédiée reste de loin la solution la plus rentable.",
          "Nos installateurs IRVE interviennent dans Paris et toute la petite couronne et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Paris ?", a: "Idéalement sur sa place de parking privative ou en copropriété via le droit à la prise, complété par le réseau public (voirie et parkings) et la recharge au travail." },
      { q: "Peut-on installer une borne dans une copropriété parisienne ancienne ?", a: "Oui : le droit à la prise permet d'équiper votre place, y compris dans les immeubles haussmanniens avec parking en sous-sol, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère à Paris ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques parisiennes." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-marseille",
    metaTitle: "Recharger sa voiture électrique à Marseille : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Marseille ? Recharge à domicile dans les quartiers sud, copropriétés, réseau public et ZFE : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Marseille ?",
    updated: "2026-07-15",
    lede: "À Marseille, entre les villas des collines et les copropriétés du centre, la recharge à domicile s'adapte à chaque habitat et reste la solution la plus économique.",
    sections: [
      {
        h2: "Recharger à domicile à Marseille",
        paragraphs: [
          "Des villas des quartiers sud (Roucas-Blanc, Vauban, Le Redon) aux copropriétés des 1er et 6e arrondissements, chaque type d'habitat a sa solution. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "La recharge nocturne en heures creuses reste imbattable côté coût, bien en dessous des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public à Marseille",
        paragraphs: [
          "La ville et la métropole Aix-Marseille-Provence déploient des bornes en voirie et dans les parkings, complétées par des bornes rapides sur les grands axes et l'autoroute. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne installée chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour d'Euroméditerranée et des zones d'activités de l'est marseillais, de plus en plus d'entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile.",
          "C'est un service désormais attendu par les salariés, notamment les gros rouleurs de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Marseille",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Marseillais disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Marseille ?", a: "Idéalement à domicile (villa ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Marseille ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les copropriétés du centre, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques marseillaises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-nice",
    metaTitle: "Recharger sa voiture électrique à Nice : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Nice ? Recharge à domicile dans les collines, copropriétés du bord de mer, réseau public et ZFE : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Nice ?",
    updated: "2026-07-15",
    lede: "À Nice, des villas des collines aux copropriétés du bord de mer, la recharge à domicile s'adapte à chaque habitat et reste la solution la plus pratique et économique.",
    sections: [
      {
        h2: "Recharger à domicile à Nice",
        paragraphs: [
          "Entre les villas de Cimiez et du Mont-Boron et les copropriétés du centre et de la Promenade, la recharge à domicile a sa place partout. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "C'est la solution la plus économique : recharge nocturne en heures creuses, très en dessous du coût des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans la métropole niçoise",
        paragraphs: [
          "La métropole Nice Côte d'Azur dispose d'un réseau de bornes en voirie et dans les parkings, complété par des bornes rapides le long des grands axes et de l'autoroute. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent toutefois plus coûteuses et moins pratiques qu'une borne chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour de la plaine du Var et de la technopole de Sophia Antipolis, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile, notamment pour ceux qui font la navette.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Nice",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Niçois disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Nice ?", a: "Idéalement à domicile (villa ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Nice ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les copropriétés du bord de mer, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques niçoises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-strasbourg",
    metaTitle: "Recharger sa voiture électrique à Strasbourg : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Strasbourg ? Recharge à domicile, copropriétés, réseau public et ZFE de l'Eurométropole : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Strasbourg ?",
    updated: "2026-07-15",
    lede: "À Strasbourg et dans l'Eurométropole, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Strasbourg",
        paragraphs: [
          "Des maisons alsaciennes de la Robertsau, du Neudorf et de la couronne (Illkirch, Schiltigheim) aux copropriétés du centre, la recharge à domicile s'adapte à chaque habitat. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "La recharge nocturne en heures creuses reste la plus économique, bien en dessous des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans l'Eurométropole",
        paragraphs: [
          "L'Eurométropole de Strasbourg dispose d'un réseau de bornes en voirie et dans les parkings-relais, complété par des bornes rapides sur les grands axes. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne installée chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour des zones d'activités et du secteur européen, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Strasbourg",
        paragraphs: [
          "Avec la zone à faibles émissions de l'Eurométropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Strasbourgeois disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute l'Eurométropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Strasbourg ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de l'Eurométropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Strasbourg ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les immeubles du centre, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques strasbourgeoises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-montpellier",
    metaTitle: "Recharger sa voiture électrique à Montpellier : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Montpellier ? Recharge à domicile, copropriétés récentes, réseau public et ZFE : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Montpellier ?",
    updated: "2026-07-15",
    lede: "À Montpellier et dans la métropole, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Montpellier",
        paragraphs: [
          "Des pavillons de la périphérie (Grabels, Castelnau-le-Lez, Lattes) aux copropriétés récentes de Port-Marianne et d'Odysseum, la recharge à domicile a sa place partout. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "C'est la solution la plus économique : recharge nocturne en heures creuses, très en dessous du coût des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans la métropole",
        paragraphs: [
          "Montpellier Méditerranée Métropole dispose d'un réseau de bornes en voirie et dans les parkings-tramway, complété par des bornes rapides sur les grands axes. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour des parcs d'activités et du secteur tertiaire en pleine croissance, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Montpellier",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Montpelliérains disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Montpellier ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Montpellier ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les résidences récentes de Port-Marianne, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques montpelliéraines." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-rennes",
    metaTitle: "Recharger sa voiture électrique à Rennes : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Rennes ? Recharge à domicile, copropriétés, réseau public et ZFE de Rennes Métropole : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Rennes ?",
    updated: "2026-07-15",
    lede: "À Rennes et dans la métropole, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Rennes",
        paragraphs: [
          "Des pavillons de la couronne (Cesson-Sévigné, Saint-Grégoire, Bruz) aux copropriétés du centre et des quartiers Beauregard ou La Courrouze, la recharge à domicile s'adapte à chaque habitat. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "La recharge nocturne en heures creuses reste la plus économique, bien en dessous des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans Rennes Métropole",
        paragraphs: [
          "Rennes Métropole dispose d'un réseau de bornes en voirie et dans les parkings-relais du métro, complété par des bornes rapides sur les grands axes. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne installée chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour des parcs d'activités et de la technopole Rennes Atalante, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Rennes",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Rennais disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Rennes ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Rennes ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les résidences récentes, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques rennaises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-grenoble",
    metaTitle: "Recharger sa voiture électrique à Grenoble : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Grenoble ? Recharge à domicile au pied des massifs, copropriétés, réseau public et ZFE : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Grenoble ?",
    updated: "2026-07-15",
    lede: "À Grenoble et dans la métropole alpine, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Grenoble",
        paragraphs: [
          "Des maisons du piémont (Meylan, Corenc, Seyssins) aux copropriétés du centre et de la Villeneuve, la recharge à domicile s'adapte à chaque habitat. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "C'est la solution la plus économique : recharge nocturne en heures creuses, très en dessous du coût des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans la métropole grenobloise",
        paragraphs: [
          "Grenoble-Alpes Métropole dispose d'un réseau de bornes en voirie et dans les parkings, complété par des bornes rapides sur les axes vers les vallées alpines. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour de la presqu'île scientifique et des pôles technologiques, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile, notamment pour ceux qui montent régulièrement en station.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Grenoble",
        paragraphs: [
          "La métropole grenobloise compte parmi les plus avancées sur sa zone à faibles émissions : l'électrique y gagne encore en intérêt, sans restriction de circulation et avec une recharge maîtrisée à domicile. Pour la majorité des Grenoblois disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Grenoble ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Grenoble ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les copropriétés du centre, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques grenobloises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "recharger-voiture-electrique-rouen",
    metaTitle: "Recharger sa voiture électrique à Rouen : le guide 2026 | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique à Rouen ? Recharge à domicile sur les coteaux, copropriétés, réseau public et ZFE de la métropole : toutes les solutions.",
    h1: "Comment recharger sa voiture électrique à Rouen ?",
    updated: "2026-07-15",
    lede: "À Rouen et dans la métropole normande, plusieurs solutions permettent de recharger sa voiture électrique. La plus pratique et la plus économique reste la recharge à domicile.",
    sections: [
      {
        h2: "Recharger à domicile à Rouen",
        paragraphs: [
          "Des pavillons des coteaux de la rive droite (Bois-Guillaume, Mont-Saint-Aignan, Bihorel) aux copropriétés du centre historique et de la rive gauche, la recharge à domicile s'adapte à chaque habitat. En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place sans vote de l'assemblée.",
          "La recharge nocturne en heures creuses reste la plus économique, bien en dessous des bornes publiques, avec la TVA à 5,5 % et la prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Le réseau public dans la métropole rouennaise",
        paragraphs: [
          "La Métropole Rouen Normandie dispose d'un réseau de bornes en voirie et dans les parkings, complété par des bornes rapides sur les grands axes et l'autoroute. C'est utile en dépannage ou pour les habitants sans stationnement privatif.",
          "Ces bornes publiques restent plus coûteuses et moins pratiques qu'une borne installée chez soi.",
        ],
      },
      {
        h2: "Recharger au travail",
        paragraphs: [
          "Autour des zones d'activités et du secteur tertiaire de la rive gauche, de nombreuses entreprises équipent leurs parkings. Recharger pendant la journée complète idéalement la recharge à domicile.",
          "C'est un service de plus en plus attendu des salariés de l'agglomération.",
        ],
      },
      {
        h2: "La ZFE et la meilleure option à Rouen",
        paragraphs: [
          "Avec la zone à faibles émissions de la métropole, l'électrique gagne en intérêt : pas de restriction de circulation et une recharge maîtrisée à domicile. Pour la majorité des Rouennais disposant d'un stationnement, la borne à domicile est la solution reine.",
          "Nos installateurs IRVE interviennent sur toute la métropole et vous transmettent 3 devis gratuits.",
        ],
      },
    ],
    faq: [
      { q: "Où recharger sa voiture électrique à Rouen ?", a: "Idéalement à domicile (maison ou copropriété via le droit à la prise), complété par le réseau public de la métropole et la recharge au travail." },
      { q: "La recharge à domicile est-elle possible en copropriété à Rouen ?", a: "Oui, le droit à la prise permet d'équiper votre place, y compris dans les immeubles du centre, sans vote de l'assemblée générale." },
      { q: "Quelle est l'option la moins chère ?", a: "La recharge à domicile en heures creuses, très en dessous du coût des bornes publiques rouennaises." },
    ],
    related: ["borne-de-recharge-maison", "droit-a-la-prise", "cout-recharge-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "alternative-metropolis",
    metaTitle: "Alternative à Metropolis Recharge : la borne à domicile dans le Grand Paris | Choisis Ta borne",
    metaDescription:
      "Metropolis est le réseau public de bornes de la Métropole du Grand Paris. Plutôt que de dépendre des bornes publiques et de leur abonnement, installez votre borne à domicile : comparez 3 devis d'installateurs IRVE gratuits.",
    h1: "Alternative à Metropolis Recharge : recharger chez soi dans le Grand Paris",
    updated: "2026-07-15",
    lede: "Metropolis est le réseau public de bornes de recharge de la Métropole du Grand Paris : stations en voirie, bornes ultra-rapides et formules d'abonnement pour recharger dans l'espace public. Pratique en dépannage, mais recharger chez soi reste bien plus simple et économique au quotidien.",
    sections: [
      {
        h2: "Ce qu'est Metropolis Recharge",
        paragraphs: [
          "Metropolis est le réseau public de recharge déployé par la Métropole du Grand Paris : des stations installées en voirie dans de nombreuses communes (Montrouge, Rueil-Malmaison, Choisy-le-Roi, Issy-les-Moulineaux, Morangis…), jusqu'aux bornes ultra-rapides, avec une application mobile et plusieurs formules d'abonnement.",
          "C'est une solution utile pour ceux qui n'ont pas de stationnement privatif, ou en appoint lors d'un déplacement. Mais l'usage régulier suppose de se déplacer jusqu'à une station, de composer avec la disponibilité des bornes et de payer au tarif public.",
        ],
      },
      {
        h2: "Borne publique ou borne à domicile : ce qui change",
        paragraphs: [
          "Recharger sur le réseau public, c'est payer à l'usage (avec ou sans abonnement) à un tarif nettement supérieur à celui de l'électricité domestique. À domicile, vous rechargez la nuit en heures creuses, pour un coût par kWh très inférieur, sans abonnement ni déplacement.",
          "En maison, une borne se raccorde au tableau ; en copropriété du Grand Paris, le droit à la prise permet d'équiper sa place de parking sans vote de l'assemblée. Dans les deux cas, la TVA à 5,5 % et la prime ADVENIR en copropriété réduisent la facture d'installation.",
        ],
      },
      {
        h2: "Choisis Ta borne : le comparateur gratuit d'installateurs IRVE",
        paragraphs: [
          "Choisis Ta borne met en relation particuliers et copropriétés avec un réseau d'installateurs IRVE certifiés partout en Île-de-France et en France. Vous décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits sous 24h.",
          "Le service est 100 % gratuit et sans engagement : vous comparez, puis vous choisissez librement l'installateur qui posera votre borne à domicile — la solution la plus rentable pour un usage quotidien dans le Grand Paris.",
        ],
      },
    ],
    faq: [
      { q: "Metropolis Recharge, c'est quoi ?", a: "C'est le réseau public de bornes de recharge de la Métropole du Grand Paris : des stations en voirie (dont des bornes ultra-rapides) accessibles via une application et des formules d'abonnement." },
      { q: "Est-ce moins cher de recharger chez soi que sur une borne Metropolis ?", a: "Oui, nettement. À domicile en heures creuses, le coût du kWh est très inférieur à celui d'une borne publique, sans abonnement ni déplacement." },
      { q: "Puis-je installer une borne à domicile en copropriété dans le Grand Paris ?", a: "Oui. Le droit à la prise permet d'équiper votre place de parking sans vote de l'assemblée, et nos installateurs IRVE vous accompagnent sur la prime ADVENIR." },
    ],
    related: ["ou-recharger-voiture-electrique", "cout-recharge-voiture-electrique", "recharge-rapide-voiture-electrique", "borne-recharge-copropriete", "droit-a-la-prise"],
  },
  {
    slug: "borne-recharge-renault-zoe",
    metaTitle: "Quelle borne de recharge pour une Renault Zoe ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge choisir pour une Renault Zoe ? Puissance, temps de charge à domicile et devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Renault Zoe ?",
    updated: "2026-07-15",
    lede: "La Renault Zoe, l'une des citadines électriques les plus répandues en France, se recharge idéalement à domicile sur une borne dédiée. Voici la puissance à retenir et le temps de charge à prévoir.",
    sections: [
      {
        h2: "Recharger sa Zoe à domicile",
        paragraphs: [
          "La Zoe accepte une charge en courant alternatif jusqu'à 22 kW selon les versions, mais chez soi une borne de 7,4 kW en monophasé suffit très largement : elle recharge la batterie en une nuit, en heures creuses, pour un coût bien inférieur aux bornes publiques.",
          "En maison, la borne se raccorde au tableau ; en copropriété, le droit à la prise permet d'équiper sa place. La TVA à 5,5 % et la prime ADVENIR en copropriété s'appliquent.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Pour une citadine comme la Zoe, une borne 7,4 kW couvre l'immense majorité des usages : comptez environ 7 à 8 heures pour une charge complète, soit une simple nuit. Inutile de surdimensionner en 11 ou 22 kW si votre installation est en monophasé.",
          "Un installateur IRVE vérifie votre tableau et la distance de câblage pour dimensionner la borne au plus juste.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés près de chez vous, sous 24h.",
          "Service 100 % gratuit et sans engagement : vous comparez puis choisissez librement.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Renault Zoe ?", a: "Une borne de 7,4 kW en monophasé suffit pour recharger une Zoe en une nuit à domicile. Le 11 ou 22 kW n'est utile qu'avec une installation triphasée et un usage intensif." },
      { q: "Combien de temps pour recharger une Zoe ?", a: "Environ 7 à 8 heures sur une borne 7,4 kW pour une charge complète, soit une nuit en heures creuses." },
      { q: "Peut-on installer une borne en copropriété pour sa Zoe ?", a: "Oui, via le droit à la prise, sans vote de l'assemblée, avec l'accompagnement d'un installateur IRVE et la prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-renault", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-tesla-model-3",
    metaTitle: "Quelle borne de recharge pour une Tesla Model 3 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Tesla Model 3 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Tesla Model 3 ?",
    updated: "2026-07-15",
    lede: "La Tesla Model 3 dispose d'un chargeur embarqué de 11 kW : à domicile, une borne bien dimensionnée la recharge tranquillement pendant la nuit. Voici ce qu'il faut savoir.",
    sections: [
      {
        h2: "Recharger sa Model 3 à domicile",
        paragraphs: [
          "La Model 3 accepte jusqu'à 11 kW en courant alternatif (triphasé). Si votre logement est en triphasé, une borne 11 kW exploite pleinement le chargeur embarqué ; en monophasé, une borne 7,4 kW reste parfaitement adaptée pour une charge de nuit.",
          "La recharge à domicile en heures creuses est de loin la moins chère, très en dessous du coût des Superchargeurs ou des bornes publiques. TVA à 5,5 % et prime ADVENIR en copropriété à la clé.",
        ],
      },
      {
        h2: "7,4 ou 11 kW : quelle puissance",
        paragraphs: [
          "En monophasé (cas le plus courant), une borne 7,4 kW recharge la Model 3 en une nuit. Si vous disposez du triphasé, le 11 kW réduit encore le temps de charge et tire parti du chargeur 11 kW de la voiture.",
          "Un installateur IRVE confirme la puissance disponible à votre compteur avant de recommander la borne adaptée.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement, et choisissez librement.",
          "Une borne à domicile reste la solution la plus rentable pour un usage quotidien de votre Tesla.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Tesla Model 3 ?", a: "Une borne 7,4 kW en monophasé suffit pour une charge de nuit ; en triphasé, une borne 11 kW exploite le chargeur embarqué 11 kW de la Model 3." },
      { q: "Combien de temps pour recharger une Model 3 ?", a: "Environ 6 à 8 heures selon la version et la puissance de la borne, soit une nuit complète." },
      { q: "Faut-il une borne Tesla ou une borne standard ?", a: "N'importe quelle borne au standard Type 2 recharge une Model 3. Un installateur IRVE vous propose la marque et la puissance adaptées." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-tesla", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-tesla-model-y",
    metaTitle: "Quelle borne de recharge pour une Tesla Model Y ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Tesla Model Y ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Tesla Model Y ?",
    updated: "2026-07-15",
    lede: "SUV le plus vendu au monde, la Tesla Model Y partage le chargeur embarqué 11 kW de la Model 3. À domicile, une borne dédiée la recharge sans effort pendant la nuit.",
    sections: [
      {
        h2: "Recharger sa Model Y à domicile",
        paragraphs: [
          "La Model Y accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite tout le potentiel du chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit, en heures creuses.",
          "Avec une batterie plus généreuse qu'une citadine, la Model Y profite particulièrement d'une recharge lente à domicile, la plus économique et la plus douce pour la batterie.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "En monophasé, une borne 7,4 kW suffit pour un usage quotidien : la charge de nuit couvre largement les besoins. En triphasé, le 11 kW raccourcit le temps de charge, utile pour les gros rouleurs.",
          "L'installateur IRVE dimensionne la borne selon votre compteur et votre kilométrage.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez prix et prestations, puis choisissez l'installateur qui vous convient.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Tesla Model Y ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la Model Y." },
      { q: "Combien de temps pour recharger une Model Y ?", a: "Environ 7 à 9 heures selon la version et la borne, soit une nuit complète en heures creuses." },
      { q: "La recharge à domicile est-elle moins chère que les Superchargeurs ?", a: "Oui, nettement, surtout en heures creuses : c'est la solution la plus rentable au quotidien." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-tesla", "borne-de-recharge-maison", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-peugeot-e-208",
    metaTitle: "Quelle borne de recharge pour une Peugeot e-208 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Peugeot e-208 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Peugeot e-208 ?",
    updated: "2026-07-15",
    lede: "La Peugeot e-208, best-seller de la citadine électrique en France, se recharge idéalement chez soi. Voici la puissance de borne à retenir et le temps de charge à prévoir.",
    sections: [
      {
        h2: "Recharger sa e-208 à domicile",
        paragraphs: [
          "La e-208 dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en option triphasée selon les millésimes). Une borne 7,4 kW la recharge donc en une nuit, ce qui couvre l'usage quotidien d'une citadine.",
          "La recharge nocturne en heures creuses est la plus économique. En maison la borne se raccorde au tableau, en copropriété le droit à la prise s'applique, avec TVA à 5,5 % et prime ADVENIR.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Une borne 7,4 kW est le choix logique pour la e-208 : environ 7 heures pour une charge complète, soit une nuit. Le 11 kW n'a d'intérêt que si votre logement est en triphasé et si votre voiture dispose du chargeur 11 kW.",
          "Un installateur IRVE vérifie votre installation pour éviter tout surdimensionnement inutile.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez, puis choisissez librement l'installateur de votre borne.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Peugeot e-208 ?", a: "Une borne 7,4 kW en monophasé suffit pour recharger une e-208 en une nuit. Le 11 kW n'est utile qu'en triphasé avec le chargeur embarqué correspondant." },
      { q: "Combien de temps pour recharger une e-208 ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on installer une borne en copropriété ?", a: "Oui, via le droit à la prise, avec l'accompagnement d'un installateur IRVE et la prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-peugeot", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-fiat-500e",
    metaTitle: "Quelle borne de recharge pour une Fiat 500e ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Fiat 500e ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Fiat 500e ?",
    updated: "2026-07-15",
    lede: "Petite citadine urbaine, la Fiat 500e a une batterie compacte qui se recharge très facilement à domicile, même sur une borne d'entrée de gamme.",
    sections: [
      {
        h2: "Recharger sa 500e à domicile",
        paragraphs: [
          "Avec sa batterie de citadine, la 500e se recharge en quelques heures sur une borne 7,4 kW : largement le temps d'une nuit. Son chargeur embarqué (7,4 kW en monophasé, 11 kW selon versions) est parfaitement adapté à une borne domestique.",
          "La recharge en heures creuses à domicile est idéale pour un usage urbain quotidien, à un coût minime et avec la TVA à 5,5 % sur l'installation.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Pour une petite batterie comme celle de la 500e, une borne 7,4 kW est amplement suffisante : la charge complète prend environ 5 à 6 heures. Nul besoin de viser plus haut pour un usage citadin.",
          "Un installateur IRVE adapte la borne à votre tableau et à vos trajets.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez puis choisissez l'installateur de votre choix.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Fiat 500e ?", a: "Une borne 7,4 kW suffit largement pour recharger une 500e en une nuit, sa batterie de citadine se rechargeant en quelques heures." },
      { q: "Combien de temps pour recharger une 500e ?", a: "Environ 5 à 6 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Une borne est-elle vraiment nécessaire ?", a: "Oui : plus sûre et bien plus rapide qu'une prise classique, une borne dédiée est recommandée pour recharger quotidiennement en toute sécurité." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-dacia-spring",
    metaTitle: "Quelle borne de recharge pour une Dacia Spring ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Dacia Spring ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Dacia Spring ?",
    updated: "2026-07-15",
    lede: "La Dacia Spring, l'une des électriques les plus abordables, a une petite batterie qui se recharge rapidement à domicile sur une borne simple.",
    sections: [
      {
        h2: "Recharger sa Spring à domicile",
        paragraphs: [
          "La Spring accepte une charge en courant alternatif modérée (autour de 7 kW selon les versions). Sa batterie compacte se recharge en quelques heures sur une borne 7,4 kW, ce qui la rend idéale pour la recharge de nuit à domicile.",
          "En heures creuses, le coût de recharge est minime. La TVA à 5,5 % s'applique sur l'installation, et le droit à la prise permet d'équiper une place en copropriété.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Une borne 7,4 kW est parfaitement adaptée à la Spring : la charge complète prend environ 4 à 5 heures. Inutile d'investir dans une borne plus puissante pour ce type de citadine.",
          "L'installateur IRVE dimensionne la borne selon votre installation électrique.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez et choisissez librement l'installateur de votre borne.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Dacia Spring ?", a: "Une borne 7,4 kW suffit largement : la petite batterie de la Spring se recharge en 4 à 5 heures, soit une nuit." },
      { q: "Combien de temps pour recharger une Spring ?", a: "Environ 4 à 5 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on se contenter d'une prise classique ?", a: "C'est possible en dépannage mais lent et moins sûr ; une borne dédiée est recommandée pour une recharge quotidienne." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "borne-de-recharge-pas-cher", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-renault-megane-etech",
    metaTitle: "Quelle borne de recharge pour une Renault Megane E-Tech ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Renault Megane E-Tech ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Renault Megane E-Tech ?",
    updated: "2026-07-15",
    lede: "La Renault Megane E-Tech électrique dispose d'un chargeur embarqué performant. À domicile, une borne adaptée la recharge confortablement pendant la nuit.",
    sections: [
      {
        h2: "Recharger sa Megane E-Tech à domicile",
        paragraphs: [
          "La Megane E-Tech accepte jusqu'à 22 kW en courant alternatif selon les versions, un atout rare. Chez soi, une borne 7,4 kW en monophasé recharge la batterie en une nuit ; en triphasé, une borne 11 ou 22 kW réduit sensiblement le temps de charge.",
          "La recharge nocturne en heures creuses reste la plus économique, avec TVA à 5,5 % et prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "En monophasé, une borne 7,4 kW couvre l'usage quotidien (environ 8 heures pour une charge complète). Si vous êtes en triphasé et que votre Megane dispose du chargeur 22 kW, une borne plus puissante devient pertinente pour les gros rouleurs.",
          "Un installateur IRVE confirme la puissance disponible avant de recommander la borne adaptée.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez puis choisissez librement.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Renault Megane E-Tech ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; en triphasé, une borne 11 ou 22 kW si votre version dispose du chargeur AC correspondant." },
      { q: "Combien de temps pour recharger une Megane E-Tech ?", a: "Environ 8 heures sur une borne 7,4 kW, moins en triphasé sur une borne plus puissante." },
      { q: "La Megane E-Tech peut-elle charger en 22 kW AC ?", a: "Certaines versions acceptent jusqu'à 22 kW en courant alternatif, à condition d'avoir une installation triphasée et une borne adaptée." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-renault", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-mg4",
    metaTitle: "Quelle borne de recharge pour une MG4 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une MG4 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une MG4 ?",
    updated: "2026-07-15",
    lede: "La MG4, compacte électrique au bon rapport prix-autonomie, se recharge idéalement à domicile. Voici la puissance de borne à retenir selon votre installation.",
    sections: [
      {
        h2: "Recharger sa MG4 à domicile",
        paragraphs: [
          "La MG4 dispose d'un chargeur embarqué de 7 à 11 kW selon les versions et la taille de batterie. Une borne 7,4 kW en monophasé la recharge en une nuit ; en triphasé, le 11 kW accélère la charge des versions à grande batterie.",
          "La recharge en heures creuses à domicile est la plus économique. TVA à 5,5 % sur l'installation et prime ADVENIR en copropriété.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Pour la version standard, une borne 7,4 kW suffit (environ 7 à 8 heures de charge). Pour une MG4 grande autonomie en triphasé, une borne 11 kW réduit le temps de charge.",
          "Un installateur IRVE adapte la borne à votre compteur et à votre usage.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez puis choisissez l'installateur de votre borne.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une MG4 ?", a: "Une borne 7,4 kW en monophasé convient à la plupart des MG4 ; le 11 kW en triphasé accélère la charge des versions grande batterie." },
      { q: "Combien de temps pour recharger une MG4 ?", a: "Environ 7 à 9 heures selon la version sur une borne 7,4 kW, soit une nuit." },
      { q: "Peut-on installer la borne en copropriété ?", a: "Oui, via le droit à la prise, avec l'accompagnement d'un installateur IRVE et la prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-peugeot-e-2008",
    metaTitle: "Quelle borne de recharge pour une Peugeot e-2008 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Peugeot e-2008 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Peugeot e-2008 ?",
    updated: "2026-07-15",
    lede: "SUV urbain électrique, la Peugeot e-2008 se recharge confortablement à domicile sur une borne dédiée. Voici la puissance à retenir et le temps de charge à prévoir.",
    sections: [
      {
        h2: "Recharger sa e-2008 à domicile",
        paragraphs: [
          "La e-2008 dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en triphasé selon les millésimes). Une borne 7,4 kW la recharge en une nuit, ce qui couvre l'usage quotidien.",
          "La recharge nocturne en heures creuses est la plus économique. En maison la borne se raccorde au tableau, en copropriété le droit à la prise s'applique, TVA à 5,5 % et prime ADVENIR à l'appui.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Une borne 7,4 kW est le bon choix pour la e-2008 : environ 7 à 8 heures pour une charge complète. Le 11 kW n'a d'intérêt qu'en triphasé avec le chargeur embarqué correspondant.",
          "Un installateur IRVE vérifie votre installation pour dimensionner la borne au plus juste.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez puis choisissez librement l'installateur de votre borne.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Peugeot e-2008 ?", a: "Une borne 7,4 kW en monophasé suffit pour recharger une e-2008 en une nuit. Le 11 kW n'est utile qu'en triphasé." },
      { q: "Combien de temps pour recharger une e-2008 ?", a: "Environ 7 à 8 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on installer une borne en copropriété ?", a: "Oui, via le droit à la prise, avec l'accompagnement d'un installateur IRVE et la prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-peugeot", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-citroen-e-c3",
    metaTitle: "Quelle borne de recharge pour une Citroën ë-C3 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Citroën ë-C3 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Citroën ë-C3 ?",
    updated: "2026-07-15",
    lede: "La Citroën ë-C3, citadine électrique abordable, se recharge simplement à domicile. Voici la borne à privilégier et le temps de charge à prévoir.",
    sections: [
      {
        h2: "Recharger sa ë-C3 à domicile",
        paragraphs: [
          "La ë-C3 dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW selon versions). Une borne 7,4 kW recharge sa batterie de citadine en une nuit, pour un usage quotidien sans contrainte.",
          "La recharge en heures creuses à domicile est la plus économique. TVA à 5,5 % sur l'installation et droit à la prise en copropriété.",
        ],
      },
      {
        h2: "Quelle puissance de borne choisir",
        paragraphs: [
          "Une borne 7,4 kW est amplement suffisante pour la ë-C3 : environ 6 à 7 heures pour une charge complète. Inutile de surdimensionner en monophasé.",
          "Un installateur IRVE adapte la borne à votre tableau et à vos trajets.",
        ],
      },
      {
        h2: "Comparez l'installation avec Choisis Ta borne",
        paragraphs: [
          "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
          "Vous comparez puis choisissez l'installateur de votre choix.",
        ],
      },
    ],
    faq: [
      { q: "Quelle borne pour une Citroën ë-C3 ?", a: "Une borne 7,4 kW en monophasé suffit pour recharger une ë-C3 en une nuit." },
      { q: "Combien de temps pour recharger une ë-C3 ?", a: "Environ 6 à 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on installer une borne en copropriété ?", a: "Oui, via le droit à la prise, avec l'accompagnement d'un installateur IRVE et la prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "borne-de-recharge-pas-cher", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-hyundai-kona",
    metaTitle: "Quelle borne de recharge pour un Hyundai Kona Electric ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Hyundai Kona Electric ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Hyundai Kona Electric ?",
    updated: "2026-07-15",
    lede: "Le Hyundai Kona Electric, SUV urbain à bonne autonomie, se recharge idéalement à domicile. Voici la puissance de borne à retenir selon votre installation.",
    sections: [
      { h2: "Recharger son Kona Electric à domicile", paragraphs: [
        "Le Kona accepte 7,4 kW en monophasé, et 11 kW en triphasé selon les versions. Une borne 7,4 kW recharge sa batterie en une nuit, ce qui couvre largement l'usage quotidien d'un SUV compact.",
        "La recharge en heures creuses est la plus économique. En maison la borne se raccorde au tableau, en copropriété le droit à la prise s'applique, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW convient à la plupart des Kona (environ 8 à 9 heures de charge selon la batterie). En triphasé, le 11 kW réduit le temps de charge des versions grande autonomie.",
        "Un installateur IRVE vérifie votre compteur pour dimensionner la borne au plus juste.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement l'installateur de votre borne.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Hyundai Kona Electric ?", a: "Une borne 7,4 kW en monophasé suffit pour une charge de nuit ; le 11 kW en triphasé accélère la charge des versions grande batterie." },
      { q: "Combien de temps pour recharger un Kona ?", a: "Environ 8 à 9 heures sur une borne 7,4 kW selon la taille de batterie." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-hyundai-ioniq-5",
    metaTitle: "Quelle borne de recharge pour un Hyundai Ioniq 5 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Hyundai Ioniq 5 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Hyundai Ioniq 5 ?",
    updated: "2026-07-15",
    lede: "Le Hyundai Ioniq 5, SUV à architecture 800 volts, dispose d'un chargeur embarqué 11 kW. À domicile, une borne bien dimensionnée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son Ioniq 5 à domicile", paragraphs: [
        "L'Ioniq 5 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite pleinement ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec une batterie généreuse, l'Ioniq 5 profite particulièrement d'une recharge lente à domicile en heures creuses, la plus économique et douce pour la batterie.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit nettement le temps de charge des grandes batteries.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez l'installateur de votre choix.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Hyundai Ioniq 5 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'Ioniq 5." },
      { q: "Combien de temps pour recharger un Ioniq 5 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "L'architecture 800 V change-t-elle la recharge à domicile ?", a: "Non : le 800 V concerne la charge rapide en courant continu. À domicile, la charge en courant alternatif se fait via le chargeur 11 kW." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "recharge-rapide-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-hyundai-ioniq-6",
    metaTitle: "Quelle borne de recharge pour un Hyundai Ioniq 6 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Hyundai Ioniq 6 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Hyundai Ioniq 6 ?",
    updated: "2026-07-15",
    lede: "Berline électrique aérodynamique, le Hyundai Ioniq 6 partage la plateforme 800 V de l'Ioniq 5 et son chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge la nuit.",
    sections: [
      { h2: "Recharger son Ioniq 6 à domicile", paragraphs: [
        "L'Ioniq 6 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite tout le potentiel du chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge nocturne en heures creuses reste la plus économique, avec TVA à 5,5 % et prime ADVENIR en copropriété.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "En monophasé, une borne 7,4 kW couvre l'usage quotidien de cette berline efficiente. En triphasé, le 11 kW réduit le temps de charge.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Hyundai Ioniq 6 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué de l'Ioniq 6." },
      { q: "Combien de temps pour recharger un Ioniq 6 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "L'Ioniq 6 est-elle économe en recharge ?", a: "Oui, son aérodynamisme réduit la consommation, ce qui allonge l'autonomie pour une même charge à domicile." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "cout-recharge-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-kia-e-niro",
    metaTitle: "Quelle borne de recharge pour un Kia e-Niro ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Kia e-Niro (Niro EV) ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Kia e-Niro ?",
    updated: "2026-07-15",
    lede: "Le Kia e-Niro (Niro EV), SUV compact familial, se recharge confortablement à domicile. Voici la puissance de borne à retenir et le temps de charge à prévoir.",
    sections: [
      { h2: "Recharger son e-Niro à domicile", paragraphs: [
        "Le e-Niro accepte 7,2 kW en monophasé, et 11 kW en triphasé selon les versions. Une borne 7,4 kW recharge sa batterie en une nuit, idéal pour un usage familial quotidien.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW couvre la plupart des usages (environ 9 heures pour une charge complète de la grande batterie). En triphasé, le 11 kW réduit ce temps.",
        "Un installateur IRVE adapte la borne à votre compteur et à vos trajets.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez l'installateur de votre borne.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Kia e-Niro ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW en triphasé accélère la charge selon la version." },
      { q: "Combien de temps pour recharger un e-Niro ?", a: "Environ 9 heures sur une borne 7,4 kW pour la grande batterie." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-kia-ev6",
    metaTitle: "Quelle borne de recharge pour un Kia EV6 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Kia EV6 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Kia EV6 ?",
    updated: "2026-07-15",
    lede: "Le Kia EV6, crossover à architecture 800 V, dispose d'un chargeur embarqué 11 kW. À domicile, une borne bien choisie le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son EV6 à domicile", paragraphs: [
        "L'EV6 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite pleinement ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge lente à domicile en heures creuses est la plus économique et la plus douce pour la batterie de ce crossover.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge des grandes batteries.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Kia EV6 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'EV6." },
      { q: "Combien de temps pour recharger un EV6 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Le 800 V change-t-il la recharge à domicile ?", a: "Non : le 800 V concerne la charge rapide DC. À domicile, la charge AC passe par le chargeur 11 kW." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "recharge-rapide-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-opel-corsa-e",
    metaTitle: "Quelle borne de recharge pour une Opel Corsa-e ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Opel Corsa-e ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Opel Corsa-e ?",
    updated: "2026-07-15",
    lede: "La Opel Corsa-e, citadine électrique cousine de la Peugeot e-208, se recharge simplement à domicile. Voici la borne à privilégier.",
    sections: [
      { h2: "Recharger sa Corsa-e à domicile", paragraphs: [
        "La Corsa-e dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW la recharge en une nuit, ce qui couvre l'usage d'une citadine.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est le bon choix pour la Corsa-e : environ 7 heures pour une charge complète. Le 11 kW n'a d'intérêt qu'en triphasé.",
        "Un installateur IRVE vérifie votre installation pour éviter le surdimensionnement.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez l'installateur de votre borne.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Opel Corsa-e ?", a: "Une borne 7,4 kW en monophasé suffit pour une charge de nuit ; le 11 kW n'est utile qu'en triphasé." },
      { q: "Combien de temps pour recharger une Corsa-e ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-opel-mokka-e",
    metaTitle: "Quelle borne de recharge pour une Opel Mokka-e ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Opel Mokka-e ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Opel Mokka-e ?",
    updated: "2026-07-15",
    lede: "La Opel Mokka-e, SUV urbain électrique, se recharge confortablement à domicile. Voici la puissance de borne à retenir et le temps de charge à prévoir.",
    sections: [
      { h2: "Recharger sa Mokka-e à domicile", paragraphs: [
        "La Mokka-e dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW la recharge en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est adaptée à la Mokka-e : environ 7 heures pour une charge complète. Le 11 kW n'a d'intérêt qu'en triphasé.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Opel Mokka-e ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé." },
      { q: "Combien de temps pour recharger une Mokka-e ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-citroen-e-c4",
    metaTitle: "Quelle borne de recharge pour une Citroën ë-C4 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Citroën ë-C4 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Citroën ë-C4 ?",
    updated: "2026-07-15",
    lede: "La Citroën ë-C4, compacte électrique confortable, se recharge simplement à domicile. Voici la borne à privilégier selon votre installation.",
    sections: [
      { h2: "Recharger sa ë-C4 à domicile", paragraphs: [
        "La ë-C4 dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW la recharge en une nuit, ce qui couvre l'usage quotidien.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est adaptée à la ë-C4 : environ 7 à 8 heures pour une charge complète. Le 11 kW n'a d'intérêt qu'en triphasé.",
        "Un installateur IRVE vérifie votre installation pour dimensionner la borne au plus juste.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Citroën ë-C4 ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé." },
      { q: "Combien de temps pour recharger une ë-C4 ?", a: "Environ 7 à 8 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-peugeot-e-3008",
    metaTitle: "Quelle borne de recharge pour un Peugeot e-3008 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Peugeot e-3008 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Peugeot e-3008 ?",
    updated: "2026-07-15",
    lede: "Le Peugeot e-3008, SUV électrique familial à grande autonomie, dispose d'un chargeur embarqué performant. À domicile, une borne adaptée le recharge la nuit.",
    sections: [
      { h2: "Recharger son e-3008 à domicile", paragraphs: [
        "Le e-3008 accepte 7,4 kW en monophasé et jusqu'à 11 kW en triphasé selon les versions. Une borne 7,4 kW recharge sa grande batterie pendant la nuit ; le 11 kW en triphasé raccourcit le temps de charge.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Avec une grande batterie, le e-3008 profite d'une borne 11 kW en triphasé pour réduire le temps de charge ; en monophasé, une borne 7,4 kW reste adaptée pour une charge de nuit.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Peugeot e-3008 ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; 11 kW en triphasé pour raccourcir la charge de la grande batterie." },
      { q: "Combien de temps pour recharger un e-3008 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-peugeot", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-skoda-enyaq",
    metaTitle: "Quelle borne de recharge pour un Skoda Enyaq ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Skoda Enyaq iV ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Skoda Enyaq ?",
    updated: "2026-07-15",
    lede: "Le Skoda Enyaq, SUV électrique familial du groupe Volkswagen, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge la nuit.",
    sections: [
      { h2: "Recharger son Enyaq à domicile", paragraphs: [
        "L'Enyaq accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite pleinement ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec une batterie généreuse, l'Enyaq profite d'une recharge lente à domicile en heures creuses, la plus économique.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage familial quotidien. En triphasé, le 11 kW raccourcit le temps de charge des grandes batteries.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Skoda Enyaq ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'Enyaq." },
      { q: "Combien de temps pour recharger un Enyaq ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-volkswagen-id-3",
    metaTitle: "Quelle borne de recharge pour une Volkswagen ID.3 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Volkswagen ID.3 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Volkswagen ID.3 ?",
    updated: "2026-07-15",
    lede: "La Volkswagen ID.3, compacte électrique de référence, dispose d'un chargeur embarqué 11 kW. À domicile, une borne bien choisie la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son ID.3 à domicile", paragraphs: [
        "L'ID.3 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour l'usage quotidien de cette compacte. En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Volkswagen ID.3 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'ID.3." },
      { q: "Combien de temps pour recharger une ID.3 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-volkswagen", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-volkswagen-id-4",
    metaTitle: "Quelle borne de recharge pour une Volkswagen ID.4 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Volkswagen ID.4 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Volkswagen ID.4 ?",
    updated: "2026-07-15",
    lede: "La Volkswagen ID.4, SUV électrique familial, partage le chargeur embarqué 11 kW de l'ID.3. À domicile, une borne dédiée la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son ID.4 à domicile", paragraphs: [
        "L'ID.4 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec une batterie de SUV, l'ID.4 profite d'une recharge lente à domicile en heures creuses, la plus économique.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage familial. En triphasé, le 11 kW raccourcit le temps de charge de la grande batterie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Décrivez votre projet et recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Volkswagen ID.4 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'ID.4." },
      { q: "Combien de temps pour recharger une ID.4 ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-volkswagen", "borne-de-recharge-maison", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-cupra-born",
    metaTitle: "Quelle borne de recharge pour une Cupra Born ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Cupra Born ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Cupra Born ?",
    updated: "2026-07-15",
    lede: "La Cupra Born, compacte électrique sportive cousine de la Volkswagen ID.3, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée la recharge la nuit.",
    sections: [
      { h2: "Recharger sa Born à domicile", paragraphs: [
        "La Born accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour l'usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Cupra Born ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la Born." },
      { q: "Combien de temps pour recharger une Cupra Born ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-nissan-leaf",
    metaTitle: "Quelle borne de recharge pour une Nissan Leaf ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Nissan Leaf ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Nissan Leaf ?",
    updated: "2026-07-15",
    lede: "La Nissan Leaf, pionnière de la compacte électrique, dispose d'un chargeur embarqué autour de 6,6 kW. À domicile, une borne dédiée la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger sa Leaf à domicile", paragraphs: [
        "La Leaf accepte environ 6,6 kW en courant alternatif monophasé. Une borne 7,4 kW la recharge donc à sa puissance maximale en courant alternatif, en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Comme le chargeur embarqué de la Leaf plafonne autour de 6,6 kW en AC, une borne 7,4 kW est le choix idéal : inutile de viser 11 ou 22 kW, la voiture ne les exploiterait pas en courant alternatif.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez l'installateur de votre borne.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Nissan Leaf ?", a: "Une borne 7,4 kW est idéale : le chargeur AC de la Leaf plafonnant à environ 6,6 kW, une borne plus puissante n'apporterait rien en courant alternatif." },
      { q: "Combien de temps pour recharger une Leaf ?", a: "Environ 6 à 9 heures selon la batterie, à la puissance maximale du chargeur embarqué." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mg-zs-ev",
    metaTitle: "Quelle borne de recharge pour un MG ZS EV ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un MG ZS EV ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un MG ZS EV ?",
    updated: "2026-07-15",
    lede: "Le MG ZS EV, SUV urbain électrique au bon rapport prix-équipement, se recharge simplement à domicile. Voici la borne à privilégier.",
    sections: [
      { h2: "Recharger son ZS EV à domicile", paragraphs: [
        "Le ZS EV dispose d'un chargeur embarqué de 7 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW le recharge en une nuit, ce qui couvre l'usage quotidien.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW convient au ZS EV (environ 8 heures pour une charge complète). Le 11 kW n'a d'intérêt qu'en triphasé avec le chargeur correspondant.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un MG ZS EV ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé selon la version." },
      { q: "Combien de temps pour recharger un ZS EV ?", a: "Environ 8 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-renault-scenic-electrique",
    metaTitle: "Quelle borne de recharge pour un Renault Scénic électrique ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Renault Scénic E-Tech électrique ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Renault Scénic électrique ?",
    updated: "2026-07-15",
    lede: "Le Renault Scénic E-Tech électrique, SUV familial à grande autonomie, dispose d'un chargeur embarqué performant. À domicile, une borne adaptée le recharge la nuit.",
    sections: [
      { h2: "Recharger son Scénic électrique à domicile", paragraphs: [
        "Le Scénic E-Tech accepte 7,4 kW en monophasé et jusqu'à 22 kW en courant alternatif triphasé selon les versions. Chez soi, une borne 7,4 kW recharge sa grande batterie en une nuit ; en triphasé, une borne 11 ou 22 kW réduit le temps de charge.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "En monophasé, une borne 7,4 kW couvre l'usage familial (charge de nuit). En triphasé, une borne 11 ou 22 kW tire parti du chargeur AC du Scénic pour les gros rouleurs.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Renault Scénic électrique ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; 11 ou 22 kW en triphasé selon le chargeur AC de votre version." },
      { q: "Combien de temps pour recharger un Scénic E-Tech ?", a: "Environ 8 à 11 heures sur une borne 7,4 kW, moins en triphasé sur une borne plus puissante." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-renault", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-renault-5-electrique",
    metaTitle: "Quelle borne de recharge pour une Renault 5 électrique ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Renault 5 E-Tech électrique ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Renault 5 électrique ?",
    updated: "2026-07-15",
    lede: "La Renault 5 E-Tech électrique, citadine au design néo-rétro, se recharge idéalement à domicile. Voici la borne à privilégier et le temps de charge à prévoir.",
    sections: [
      { h2: "Recharger sa Renault 5 à domicile", paragraphs: [
        "La Renault 5 accepte 7,4 kW en monophasé et jusqu'à 11 kW en triphasé selon les versions. Une borne 7,4 kW recharge sa batterie de citadine en une nuit, voire en quelques heures.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est parfaitement adaptée à la Renault 5 : environ 5 à 7 heures pour une charge complète selon la batterie. Le 11 kW n'a d'intérêt qu'en triphasé.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Renault 5 électrique ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé selon la version." },
      { q: "Combien de temps pour recharger une Renault 5 ?", a: "Environ 5 à 7 heures sur une borne 7,4 kW selon la batterie." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-renault", "borne-de-recharge-maison", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-renault-kangoo-ze",
    metaTitle: "Quelle borne de recharge pour un Renault Kangoo E-Tech ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Renault Kangoo E-Tech / Z.E. ? Puissance conseillée, temps de charge et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Renault Kangoo électrique ?",
    updated: "2026-07-15",
    lede: "Le Renault Kangoo électrique (E-Tech / Z.E.), utilitaire et ludospace, se recharge idéalement à domicile ou sur le lieu de travail. Voici la borne à retenir.",
    sections: [
      { h2: "Recharger son Kangoo électrique à domicile", paragraphs: [
        "Le Kangoo électrique accepte 7,4 kW en monophasé, et jusqu'à 22 kW en triphasé sur certaines générations. Une borne 7,4 kW le recharge en une nuit, ce qui convient à un usage professionnel comme familial.",
        "Pour un artisan, la recharge nocturne à domicile en heures creuses est la plus économique ; la borne peut aussi être installée sur le lieu de travail.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW couvre la plupart des usages du Kangoo (environ 7 heures de charge). En triphasé, une borne plus puissante réduit le temps d'immobilisation, utile en usage professionnel intensif.",
        "Un installateur IRVE dimensionne la borne selon votre installation et vos tournées.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement, à domicile comme en entreprise.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Renault Kangoo électrique ?", a: "Une borne 7,4 kW en monophasé suffit ; en triphasé, une borne plus puissante réduit le temps de charge pour un usage professionnel." },
      { q: "Combien de temps pour recharger un Kangoo électrique ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on l'installer sur son lieu de travail ?", a: "Oui, nos installateurs IRVE interviennent aussi en entreprise pour équiper les flottes utilitaires." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-renault", "borne-de-recharge-entreprise", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-bmw-i4",
    metaTitle: "Quelle borne de recharge pour une BMW i4 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une BMW i4 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une BMW i4 ?",
    updated: "2026-07-15",
    lede: "La BMW i4, berline électrique dynamique, dispose d'un chargeur embarqué 11 kW. À domicile, une borne bien choisie la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger sa i4 à domicile", paragraphs: [
        "La i4 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec une batterie de berline, la i4 profite d'une recharge lente à domicile en heures creuses, la plus économique.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une BMW i4 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la i4." },
      { q: "Combien de temps pour recharger une i4 ?", a: "Environ 7 à 9 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-bmw-ix3",
    metaTitle: "Quelle borne de recharge pour une BMW iX3 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une BMW iX3 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une BMW iX3 ?",
    updated: "2026-07-15",
    lede: "La BMW iX3, SUV électrique premium, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger sa iX3 à domicile", paragraphs: [
        "La iX3 accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge lente à domicile en heures creuses est la plus économique et la plus douce pour la batterie de ce SUV.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge de la grande batterie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une BMW iX3 ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la iX3." },
      { q: "Combien de temps pour recharger une iX3 ?", a: "Environ 8 heures selon la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-bmw-i3",
    metaTitle: "Quelle borne de recharge pour une BMW i3 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une BMW i3 ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une BMW i3 ?",
    updated: "2026-07-15",
    lede: "La BMW i3, citadine électrique premium au gabarit compact, se recharge rapidement à domicile grâce à sa batterie mesurée. Voici la borne à privilégier.",
    sections: [
      { h2: "Recharger sa i3 à domicile", paragraphs: [
        "La i3 accepte jusqu'à 11 kW en courant alternatif selon les versions. Sa batterie de citadine se recharge en quelques heures : une borne 7,4 kW la remplit largement en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est amplement suffisante pour la i3 (environ 4 à 5 heures de charge). En triphasé, le 11 kW réduit encore ce temps, mais reste rarement nécessaire pour une citadine.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une BMW i3 ?", a: "Une borne 7,4 kW suffit largement : la batterie compacte de la i3 se recharge en 4 à 5 heures." },
      { q: "Combien de temps pour recharger une i3 ?", a: "Environ 4 à 5 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-audi-e-tron",
    metaTitle: "Quelle borne de recharge pour un Audi e-tron / Q8 e-tron ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Audi e-tron (Q8 e-tron) ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Audi e-tron ?",
    updated: "2026-07-15",
    lede: "L'Audi e-tron (devenu Q8 e-tron), grand SUV électrique premium, dispose d'un chargeur embarqué jusqu'à 22 kW selon les versions. À domicile, une borne adaptée le recharge la nuit.",
    sections: [
      { h2: "Recharger son e-tron à domicile", paragraphs: [
        "L'e-tron accepte 11 kW de série et jusqu'à 22 kW en courant alternatif triphasé en option. Chez soi, une borne 7,4 kW en monophasé recharge la grande batterie en une nuit ; en triphasé, une borne 11 ou 22 kW réduit fortement le temps de charge.",
        "La recharge en heures creuses à domicile est la plus économique pour ce grand SUV énergivore.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "En monophasé, une borne 7,4 kW couvre la charge de nuit. En triphasé, une borne 11 ou 22 kW tire parti du chargeur AC de l'e-tron, utile pour sa grande batterie.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Audi e-tron ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; 11 ou 22 kW en triphasé pour exploiter le chargeur AC et la grande batterie." },
      { q: "Combien de temps pour recharger un Audi e-tron ?", a: "Environ 8 à 11 heures sur une borne 7,4 kW, bien moins en triphasé sur une borne 22 kW." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "cout-recharge-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-audi-q4-e-tron",
    metaTitle: "Quelle borne de recharge pour un Audi Q4 e-tron ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Audi Q4 e-tron ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Audi Q4 e-tron ?",
    updated: "2026-07-15",
    lede: "L'Audi Q4 e-tron, SUV électrique compact premium, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son Q4 e-tron à domicile", paragraphs: [
        "Le Q4 e-tron accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge lente à domicile en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage familial. En triphasé, le 11 kW raccourcit le temps de charge des versions grande batterie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Audi Q4 e-tron ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW du Q4 e-tron." },
      { q: "Combien de temps pour recharger un Q4 e-tron ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mercedes-eqa",
    metaTitle: "Quelle borne de recharge pour un Mercedes EQA ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Mercedes EQA ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Mercedes EQA ?",
    updated: "2026-07-15",
    lede: "Le Mercedes EQA, SUV compact électrique premium, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son EQA à domicile", paragraphs: [
        "L'EQA accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien (environ 7 heures). En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Mercedes EQA ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'EQA." },
      { q: "Combien de temps pour recharger un EQA ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mercedes-eqb",
    metaTitle: "Quelle borne de recharge pour un Mercedes EQB ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Mercedes EQB ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Mercedes EQB ?",
    updated: "2026-07-15",
    lede: "Le Mercedes EQB, SUV électrique familial pouvant accueillir 7 places, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge la nuit.",
    sections: [
      { h2: "Recharger son EQB à domicile", paragraphs: [
        "L'EQB accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge en heures creuses est la plus économique pour ce SUV familial. Droit à la prise en copropriété, TVA à 5,5 % à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage familial. En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Mercedes EQB ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'EQB." },
      { q: "Combien de temps pour recharger un EQB ?", a: "Environ 7 à 8 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mercedes-eqc",
    metaTitle: "Quelle borne de recharge pour un Mercedes EQC ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Mercedes EQC ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Mercedes EQC ?",
    updated: "2026-07-15",
    lede: "Le Mercedes EQC, SUV électrique premium, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son EQC à domicile", paragraphs: [
        "L'EQC accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge lente à domicile en heures creuses est la plus économique pour ce SUV. Droit à la prise en copropriété, TVA à 5,5 % à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge de la grande batterie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Mercedes EQC ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de l'EQC." },
      { q: "Combien de temps pour recharger un EQC ?", a: "Environ 8 heures selon la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mercedes-eqe",
    metaTitle: "Quelle borne de recharge pour un Mercedes EQE ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Mercedes EQE ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Mercedes EQE ?",
    updated: "2026-07-15",
    lede: "Le Mercedes EQE, berline électrique haut de gamme, dispose d'un chargeur embarqué jusqu'à 22 kW selon les versions. À domicile, une borne adaptée le recharge la nuit.",
    sections: [
      { h2: "Recharger son EQE à domicile", paragraphs: [
        "L'EQE accepte 11 kW de série et jusqu'à 22 kW en courant alternatif triphasé selon les versions. Chez soi, une borne 7,4 kW en monophasé recharge la grande batterie en une nuit ; en triphasé, une borne 11 ou 22 kW réduit fortement le temps de charge.",
        "La recharge en heures creuses à domicile est la plus économique pour cette grande berline.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "En monophasé, une borne 7,4 kW couvre la charge de nuit. En triphasé, une borne 11 ou 22 kW tire parti du chargeur AC de l'EQE.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Mercedes EQE ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; 11 ou 22 kW en triphasé selon le chargeur AC de votre version." },
      { q: "Combien de temps pour recharger un EQE ?", a: "Environ 9 à 11 heures sur une borne 7,4 kW, bien moins en triphasé sur une borne 22 kW." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "cout-recharge-voiture-electrique", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-ford-mustang-mach-e",
    metaTitle: "Quelle borne de recharge pour une Ford Mustang Mach-E ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Ford Mustang Mach-E ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Ford Mustang Mach-E ?",
    updated: "2026-07-15",
    lede: "La Ford Mustang Mach-E, SUV coupé électrique, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger sa Mach-E à domicile", paragraphs: [
        "La Mach-E accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec une batterie généreuse, la Mach-E profite d'une recharge lente à domicile en heures creuses, la plus économique.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage quotidien. En triphasé, le 11 kW raccourcit le temps de charge des versions grande autonomie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Ford Mustang Mach-E ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la Mach-E." },
      { q: "Combien de temps pour recharger une Mach-E ?", a: "Environ 8 à 11 heures selon la batterie et la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-nissan-ariya",
    metaTitle: "Quelle borne de recharge pour un Nissan Ariya ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Nissan Ariya ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Nissan Ariya ?",
    updated: "2026-07-15",
    lede: "Le Nissan Ariya, SUV électrique moderne, dispose d'un chargeur embarqué jusqu'à 22 kW selon les versions. À domicile, une borne adaptée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son Ariya à domicile", paragraphs: [
        "L'Ariya accepte 7,4 kW en monophasé et jusqu'à 22 kW en courant alternatif triphasé selon les versions. Chez soi, une borne 7,4 kW recharge la batterie en une nuit ; en triphasé, une borne 11 ou 22 kW réduit le temps de charge.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "En monophasé, une borne 7,4 kW couvre l'usage quotidien. En triphasé, une borne 11 ou 22 kW tire parti du chargeur AC de l'Ariya, utile pour la grande batterie.",
        "Un installateur IRVE confirme la puissance disponible avant de recommander la borne.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Nissan Ariya ?", a: "Une borne 7,4 kW en monophasé pour une charge de nuit ; 11 ou 22 kW en triphasé selon le chargeur AC de votre version." },
      { q: "Combien de temps pour recharger un Ariya ?", a: "Environ 8 à 12 heures sur une borne 7,4 kW, moins en triphasé sur une borne plus puissante." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-mini-cooper-se",
    metaTitle: "Quelle borne de recharge pour une Mini Cooper SE électrique ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Mini Cooper SE électrique ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Mini Cooper SE ?",
    updated: "2026-07-15",
    lede: "La Mini Cooper SE électrique, citadine premium au caractère affirmé, se recharge rapidement à domicile grâce à sa batterie compacte. Voici la borne à privilégier.",
    sections: [
      { h2: "Recharger sa Mini Cooper SE à domicile", paragraphs: [
        "La Mini Cooper SE dispose d'un chargeur embarqué de 7,4 kW (11 kW selon la génération). Sa batterie de citadine se recharge en quelques heures : une borne 7,4 kW la remplit largement en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est amplement suffisante pour la Mini Cooper SE (environ 4 à 6 heures de charge). Inutile de surdimensionner pour cette citadine à batterie mesurée.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Mini Cooper SE ?", a: "Une borne 7,4 kW suffit largement : la batterie compacte de la Mini se recharge en 4 à 6 heures." },
      { q: "Combien de temps pour recharger une Mini Cooper SE ?", a: "Environ 4 à 6 heures sur une borne 7,4 kW selon la génération." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-honda-e",
    metaTitle: "Quelle borne de recharge pour une Honda e ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Honda e ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Honda e ?",
    updated: "2026-07-15",
    lede: "La Honda e, citadine électrique au style néo-rétro, a une batterie compacte pensée pour la ville. Elle se recharge facilement à domicile sur une borne simple.",
    sections: [
      { h2: "Recharger sa Honda e à domicile", paragraphs: [
        "La Honda e accepte environ 6,6 kW en courant alternatif monophasé. Une borne 7,4 kW la recharge donc à sa puissance maximale en AC, en quelques heures.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Comme son chargeur embarqué plafonne autour de 6,6 kW, une borne 7,4 kW est idéale pour la Honda e : viser plus haut n'apporterait rien en courant alternatif.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Honda e ?", a: "Une borne 7,4 kW est idéale : le chargeur AC de la Honda e plafonnant vers 6,6 kW, une borne plus puissante n'apporterait rien." },
      { q: "Combien de temps pour recharger une Honda e ?", a: "Environ 4 à 5 heures sur une borne 7,4 kW pour sa batterie de citadine." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "borne-de-recharge-pas-cher", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-volkswagen-e-up",
    metaTitle: "Quelle borne de recharge pour une Volkswagen e-up! ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Volkswagen e-up! ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Volkswagen e-up! ?",
    updated: "2026-07-15",
    lede: "La Volkswagen e-up!, mini-citadine électrique, a une batterie compacte qui se recharge très facilement à domicile, même sur une borne d'entrée de gamme.",
    sections: [
      { h2: "Recharger son e-up! à domicile", paragraphs: [
        "L'e-up! accepte environ 7,2 kW en courant alternatif monophasé. Une borne 7,4 kW la recharge à sa puissance maximale en AC, en quelques heures : idéal pour un usage urbain.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est parfaitement adaptée à l'e-up! : environ 5 à 6 heures pour une charge complète. Inutile de viser plus haut pour cette mini-citadine.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Volkswagen e-up! ?", a: "Une borne 7,4 kW suffit largement pour l'e-up!, sa batterie de mini-citadine se rechargeant en quelques heures." },
      { q: "Combien de temps pour recharger une e-up! ?", a: "Environ 5 à 6 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-volkswagen", "borne-de-recharge-maison", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-volkswagen-e-golf",
    metaTitle: "Quelle borne de recharge pour une Volkswagen e-Golf ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Volkswagen e-Golf ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Volkswagen e-Golf ?",
    updated: "2026-07-15",
    lede: "La Volkswagen e-Golf, compacte électrique polyvalente, se recharge simplement à domicile grâce à sa batterie mesurée. Voici la borne à privilégier.",
    sections: [
      { h2: "Recharger son e-Golf à domicile", paragraphs: [
        "L'e-Golf accepte environ 7,2 kW en courant alternatif monophasé. Une borne 7,4 kW la recharge à sa puissance maximale en AC, en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est le choix idéal pour l'e-Golf : environ 5 à 6 heures pour une charge complète. Son chargeur AC ne tirerait pas parti d'une borne plus puissante.",
        "Un installateur IRVE adapte la borne à votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Volkswagen e-Golf ?", a: "Une borne 7,4 kW est idéale : le chargeur AC de l'e-Golf plafonnant vers 7,2 kW, une borne plus puissante n'apporterait rien." },
      { q: "Combien de temps pour recharger une e-Golf ?", a: "Environ 5 à 6 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-recharge-volkswagen", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "borne-recharge-mg5",
    metaTitle: "Quelle borne de recharge pour un MG5 électrique ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un MG5 électrique ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un MG5 électrique ?",
    updated: "2026-07-15",
    lede: "Le MG5, break électrique familial et abordable, se recharge idéalement à domicile. Voici la puissance de borne à retenir et le temps de charge à prévoir.",
    sections: [
      { h2: "Recharger son MG5 à domicile", paragraphs: [
        "Le MG5 dispose d'un chargeur embarqué de 7 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW le recharge en une nuit, ce qui convient à un usage familial ou professionnel.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW convient au MG5 (environ 8 heures de charge). Le 11 kW n'a d'intérêt qu'en triphasé avec le chargeur correspondant.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un MG5 électrique ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé selon la version." },
      { q: "Combien de temps pour recharger un MG5 ?", a: "Environ 8 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "borne-de-recharge-pas-cher"],
  },
  {
    slug: "borne-recharge-mg-marvel-r",
    metaTitle: "Quelle borne de recharge pour un MG Marvel R ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un MG Marvel R ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un MG Marvel R ?",
    updated: "2026-07-15",
    lede: "Le MG Marvel R, SUV électrique familial, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée le recharge pendant la nuit.",
    sections: [
      { h2: "Recharger son Marvel R à domicile", paragraphs: [
        "Le Marvel R accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % à l'appui.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW suffit pour un usage familial. En triphasé, le 11 kW raccourcit le temps de charge.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un MG Marvel R ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW du Marvel R." },
      { q: "Combien de temps pour recharger un Marvel R ?", a: "Environ 7 à 8 heures selon la puissance de borne." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-suzuki-e-vitara",
    metaTitle: "Quelle borne de recharge pour un Suzuki e-Vitara ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Suzuki e-Vitara ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Suzuki e-Vitara ?",
    updated: "2026-07-15",
    lede: "Le Suzuki e-Vitara, premier SUV 100 % électrique de la marque, se recharge idéalement à domicile. Voici la puissance de borne à retenir selon votre installation.",
    sections: [
      { h2: "Recharger son e-Vitara à domicile", paragraphs: [
        "L'e-Vitara accepte 7,4 kW en monophasé, et jusqu'à 11 kW en triphasé selon les versions. Une borne 7,4 kW recharge sa batterie en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW couvre la plupart des usages de l'e-Vitara (environ 7 à 9 heures selon la batterie). En triphasé, le 11 kW réduit le temps de charge.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Suzuki e-Vitara ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW en triphasé accélère la charge selon la version." },
      { q: "Combien de temps pour recharger un e-Vitara ?", a: "Environ 7 à 9 heures sur une borne 7,4 kW selon la batterie." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-tesla-model-x",
    metaTitle: "Quelle borne de recharge pour une Tesla Model X ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une Tesla Model X ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une Tesla Model X ?",
    updated: "2026-07-15",
    lede: "La Tesla Model X, grand SUV électrique à grande batterie, dispose d'un chargeur embarqué 11 kW. À domicile, une borne dédiée la recharge pendant la nuit.",
    sections: [
      { h2: "Recharger sa Model X à domicile", paragraphs: [
        "La Model X accepte jusqu'à 11 kW en courant alternatif. En triphasé, une borne 11 kW exploite pleinement ce chargeur ; en monophasé, une borne 7,4 kW recharge la batterie en une nuit.",
        "Avec sa grande batterie, la Model X profite particulièrement d'une recharge lente à domicile en heures creuses, bien moins chère que les Superchargeurs.",
      ]},
      { h2: "7,4 ou 11 kW : quelle puissance", paragraphs: [
        "En monophasé, une borne 7,4 kW recharge la Model X en une nuit. En triphasé, le 11 kW raccourcit nettement le temps de charge de la grande batterie.",
        "Un installateur IRVE confirme la puissance disponible à votre compteur.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une Tesla Model X ?", a: "Une borne 7,4 kW en monophasé, ou 11 kW en triphasé pour exploiter le chargeur embarqué 11 kW de la Model X." },
      { q: "Combien de temps pour recharger une Model X ?", a: "Environ 10 heures sur une borne 7,4 kW, bien moins en triphasé sur une borne 11 kW." },
      { q: "La recharge à domicile est-elle moins chère que les Superchargeurs ?", a: "Oui, nettement, surtout en heures creuses : c'est la solution la plus rentable au quotidien." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-tesla", "borne-de-recharge-maison", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-ds-3-crossback-e-tense",
    metaTitle: "Quelle borne de recharge pour une DS 3 E-Tense ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour une DS 3 Crossback E-Tense ? Puissance conseillée, temps de charge à domicile et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour une DS 3 E-Tense ?",
    updated: "2026-07-15",
    lede: "La DS 3 E-Tense (Crossback), SUV urbain électrique premium, se recharge confortablement à domicile. Voici la borne à privilégier et le temps de charge à prévoir.",
    sections: [
      { h2: "Recharger sa DS 3 E-Tense à domicile", paragraphs: [
        "La DS 3 E-Tense dispose d'un chargeur embarqué de 7,4 kW en monophasé (11 kW en triphasé selon les versions). Une borne 7,4 kW la recharge en une nuit.",
        "La recharge en heures creuses est la plus économique. Droit à la prise en copropriété, TVA à 5,5 % et prime ADVENIR à l'appui.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Une borne 7,4 kW est adaptée à la DS 3 E-Tense : environ 7 heures pour une charge complète. Le 11 kW n'a d'intérêt qu'en triphasé.",
        "Un installateur IRVE dimensionne la borne selon votre installation.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour une DS 3 E-Tense ?", a: "Une borne 7,4 kW en monophasé suffit ; le 11 kW n'est utile qu'en triphasé." },
      { q: "Combien de temps pour recharger une DS 3 E-Tense ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Installation possible en copropriété ?", a: "Oui, via le droit à la prise, avec accompagnement d'un installateur IRVE et prime ADVENIR." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-maison", "prix-borne-de-recharge", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "borne-recharge-nissan-e-nv200",
    metaTitle: "Quelle borne de recharge pour un Nissan e-NV200 ? | Choisis Ta borne",
    metaDescription:
      "Quelle borne de recharge pour un Nissan e-NV200 ? Puissance conseillée, temps de charge et 3 devis d'installateurs IRVE certifiés gratuits sous 24h.",
    h1: "Quelle borne de recharge pour un Nissan e-NV200 ?",
    updated: "2026-07-15",
    lede: "Le Nissan e-NV200, utilitaire électrique et ludospace (Evalia), se recharge idéalement à domicile ou sur le lieu de travail. Voici la borne à retenir.",
    sections: [
      { h2: "Recharger son e-NV200 à domicile", paragraphs: [
        "L'e-NV200 accepte environ 6,6 kW en courant alternatif. Une borne 7,4 kW le recharge à sa puissance maximale en AC, en une nuit : adapté à un usage professionnel comme familial.",
        "Pour un artisan, la recharge nocturne à domicile en heures creuses est la plus économique ; la borne peut aussi être posée sur le lieu de travail.",
      ]},
      { h2: "Quelle puissance de borne choisir", paragraphs: [
        "Comme le chargeur AC de l'e-NV200 plafonne autour de 6,6 kW, une borne 7,4 kW est le choix idéal : inutile de viser plus haut, l'utilitaire ne l'exploiterait pas en courant alternatif.",
        "Un installateur IRVE dimensionne la borne selon votre installation et vos tournées.",
      ]},
      { h2: "Comparez l'installation avec Choisis Ta borne", paragraphs: [
        "Recevez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés sous 24h, sans engagement.",
        "Vous comparez puis choisissez librement, à domicile comme en entreprise.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un Nissan e-NV200 ?", a: "Une borne 7,4 kW est idéale : le chargeur AC de l'e-NV200 plafonnant vers 6,6 kW, une borne plus puissante n'apporterait rien." },
      { q: "Combien de temps pour recharger un e-NV200 ?", a: "Environ 7 heures sur une borne 7,4 kW pour une charge complète." },
      { q: "Peut-on l'installer sur son lieu de travail ?", a: "Oui, nos installateurs IRVE interviennent aussi en entreprise pour équiper les flottes utilitaires." },
    ],
    related: ["choisir-puissance-borne", "borne-de-recharge-entreprise", "borne-de-recharge-maison", "prix-borne-de-recharge"],
  },
  {
    slug: "prise-chademo",
    metaTitle: "Prise CHAdeMO : c'est quoi et quels véhicules ? | Choisis Ta borne",
    metaDescription:
      "Qu'est-ce que la prise CHAdeMO ? Standard de charge rapide, véhicules compatibles et différences avec le Combo CCS. Le guide pour bien comprendre.",
    h1: "La prise CHAdeMO : définition et compatibilité",
    updated: "2026-07-15",
    lede: "Le CHAdeMO est un standard japonais de recharge rapide en courant continu. De moins en moins répandu en Europe face au Combo CCS, il concerne encore certains modèles. Voici l'essentiel.",
    sections: [
      { h2: "Qu'est-ce que le CHAdeMO", paragraphs: [
        "CHAdeMO est un connecteur de recharge rapide en courant continu (DC), développé au Japon. Il permet de recharger la batterie directement, sans passer par le chargeur embarqué de la voiture, sur des bornes rapides publiques.",
        "En Europe, il a été progressivement supplanté par le standard Combo CCS, désormais majoritaire sur les bornes rapides et sur les véhicules récents.",
      ]},
      { h2: "Quels véhicules utilisent le CHAdeMO", paragraphs: [
        "Le CHAdeMO équipe surtout d'anciens modèles japonais, comme certaines Nissan Leaf ou Mitsubishi. Les véhicules européens et récents sont, eux, quasiment tous passés au Combo CCS.",
        "Si vous possédez un véhicule CHAdeMO, vérifiez la disponibilité de ce type de prise sur les bornes rapides de votre trajet, car elles se raréfient.",
      ]},
      { h2: "Et à domicile ?", paragraphs: [
        "Le CHAdeMO ne concerne que la charge rapide en courant continu, sur bornes publiques. À domicile, la recharge se fait toujours en courant alternatif via la prise Type 2, quel que soit votre véhicule.",
        "Pour recharger chez vous, c'est donc une borne Type 2 qu'il vous faut : nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Le CHAdeMO sert-il à recharger à domicile ?", a: "Non : le CHAdeMO est un standard de charge rapide en courant continu, réservé aux bornes publiques. À domicile, on recharge en courant alternatif via une prise Type 2." },
      { q: "Le CHAdeMO est-il encore utilisé ?", a: "De moins en moins en Europe : le Combo CCS est devenu le standard dominant sur les bornes rapides et les véhicules récents." },
      { q: "Quels véhicules ont une prise CHAdeMO ?", a: "Surtout d'anciens modèles japonais comme certaines Nissan Leaf ou Mitsubishi." },
    ],
    related: ["prise-combo-ccs-recharge-rapide", "cable-de-recharge-type-2", "recharge-rapide-voiture-electrique", "ou-recharger-voiture-electrique"],
  },
  {
    slug: "carte-recharge-rfid",
    metaTitle: "Carte et badge de recharge RFID : comment ça marche ? | Choisis Ta borne",
    metaDescription:
      "À quoi sert une carte ou un badge de recharge RFID ? Fonctionnement, réseaux d'itinérance et différence avec la recharge à domicile. Le guide complet.",
    h1: "Carte et badge de recharge RFID : mode d'emploi",
    updated: "2026-07-15",
    lede: "Pour recharger sur les bornes publiques, une carte ou un badge RFID sert souvent de sésame et de moyen de paiement. Voici comment ça fonctionne, et pourquoi la recharge à domicile s'en passe.",
    sections: [
      { h2: "À quoi sert une carte RFID", paragraphs: [
        "Une carte ou un badge RFID permet de s'identifier sur une borne publique d'un simple contact, de déverrouiller la recharge et d'être facturé automatiquement. C'est le moyen d'accès historique des réseaux de recharge.",
        "Les badges d'itinérance donnent accès à plusieurs réseaux avec un seul support, ce qui évite de multiplier les abonnements. De plus en plus de bornes acceptent aussi le paiement par carte bancaire ou application.",
      ]},
      { h2: "Les limites de la recharge publique", paragraphs: [
        "Recharger sur borne publique suppose de gérer un badge (ou une application), de composer avec la disponibilité des bornes et de payer un tarif souvent bien supérieur à celui de l'électricité domestique.",
        "C'est pratique en déplacement, mais coûteux et contraignant au quotidien.",
      ]},
      { h2: "À domicile, pas de badge", paragraphs: [
        "Sur une borne installée chez vous, aucun badge n'est nécessaire : vous branchez, et la recharge démarre. Vous ne payez que votre électricité, idéalement en heures creuses, sans abonnement ni carte.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h pour votre borne à domicile.",
      ]},
    ],
    faq: [
      { q: "À quoi sert un badge de recharge RFID ?", a: "À s'identifier et payer sur une borne publique d'un simple contact. Les badges d'itinérance donnent accès à plusieurs réseaux avec un seul support." },
      { q: "Faut-il un badge pour recharger à domicile ?", a: "Non : sur une borne installée chez vous, vous branchez simplement, sans badge ni abonnement." },
      { q: "La recharge à domicile est-elle moins chère qu'avec un badge public ?", a: "Oui, nettement : à domicile en heures creuses, le coût du kWh est très inférieur à celui d'une borne publique." },
    ],
    related: ["ou-recharger-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison", "abonnement-borne-de-recharge"],
  },
  {
    slug: "recharge-autoroute-voiture-electrique",
    metaTitle: "Recharger sa voiture électrique sur l'autoroute : le guide | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique sur l'autoroute ? Bornes ultra-rapides, coût, planification des longs trajets et pourquoi la recharge à domicile reste la base.",
    h1: "Recharger sa voiture électrique sur l'autoroute",
    updated: "2026-07-15",
    lede: "Sur les longs trajets, les bornes ultra-rapides des aires d'autoroute permettent de repartir en quelques dizaines de minutes. Voici comment ça marche, et pourquoi le domicile reste votre base au quotidien.",
    sections: [
      { h2: "Les bornes ultra-rapides sur autoroute", paragraphs: [
        "Les aires d'autoroute sont désormais équipées de bornes rapides et ultra-rapides (souvent 150 à 350 kW). Sur un véhicule compatible, elles permettent de récupérer une large part de l'autonomie en 20 à 40 minutes, le temps d'une pause.",
        "La puissance réellement atteinte dépend de votre voiture, de sa courbe de charge et du niveau de batterie : la charge est plus rapide entre 10 et 80 %.",
      ]},
      { h2: "Coût et planification", paragraphs: [
        "La recharge rapide sur autoroute est la plus chère au kilomètre : les tarifs y sont nettement supérieurs à la recharge à domicile. Pour un long trajet, planifiez vos arrêts (applications d'itinéraire) et profitez des pauses pour recharger.",
        "Elle reste néanmoins occasionnelle : pour l'immense majorité des conducteurs, elle ne sert que quelques fois par an.",
      ]},
      { h2: "Le domicile, votre base au quotidien", paragraphs: [
        "Au quotidien, c'est la recharge à domicile qui fait toute la différence : vous partez chaque matin avec une batterie pleine, rechargée la nuit en heures creuses à faible coût, sans dépendre des bornes publiques.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h pour votre borne à domicile.",
      ]},
    ],
    faq: [
      { q: "Combien de temps pour recharger sur autoroute ?", a: "Sur une borne ultra-rapide et un véhicule compatible, environ 20 à 40 minutes pour passer de 10 à 80 %, le temps d'une pause." },
      { q: "La recharge sur autoroute est-elle chère ?", a: "Oui, c'est la plus coûteuse : bien plus chère que la recharge à domicile. Elle reste réservée aux longs trajets occasionnels." },
      { q: "Peut-on se passer de recharge publique ?", a: "Au quotidien, oui, si vous rechargez à domicile : la recharge rapide ne sert alors que pour les longs trajets." },
    ],
    related: ["recharge-rapide-voiture-electrique", "voyager-europe-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "certification-ze-ready",
    metaTitle: "Certification ZE Ready : qu'est-ce que c'est ? | Choisis Ta borne",
    metaDescription:
      "Qu'est-ce que la certification ZE Ready pour une installation de recharge ? Ce qu'elle garantit et pourquoi passer par un installateur IRVE certifié.",
    h1: "La certification ZE Ready pour la recharge",
    updated: "2026-07-15",
    lede: "ZE Ready est un référentiel de qualité pour les infrastructures de recharge de véhicules électriques. Voici ce qu'il garantit et comment s'assurer d'une installation aux normes.",
    sections: [
      { h2: "Ce que désigne ZE Ready", paragraphs: [
        "ZE Ready est un référentiel qui encadre la qualité et la sécurité des infrastructures de recharge, du matériel à la mise en œuvre. Il vise à garantir une installation fiable et durable.",
        "Pour un particulier, l'essentiel est surtout de confier la pose à un installateur qualifié IRVE, gage d'une installation conforme aux normes en vigueur.",
      ]},
      { h2: "Pourquoi la qualité d'installation compte", paragraphs: [
        "Une borne de recharge sollicite votre installation électrique de façon soutenue et prolongée. Une pose aux normes (protections dédiées, dimensionnement, mise à la terre) est essentielle pour la sécurité et la longévité.",
        "C'est aussi une condition pour bénéficier des aides comme la prime ADVENIR, qui exigent un installateur qualifié IRVE.",
      ]},
      { h2: "Passer par un installateur IRVE certifié", paragraphs: [
        "La certification IRVE (Infrastructure de Recharge de Véhicule Électrique) est obligatoire pour installer une borne de plus de 3,7 kW et pour ouvrir droit aux aides. C'est votre principale garantie de qualité.",
        "Nos installateurs partenaires sont tous certifiés IRVE et vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Qu'est-ce que ZE Ready ?", a: "Un référentiel de qualité et de sécurité pour les infrastructures de recharge de véhicules électriques, du matériel à la pose." },
      { q: "Faut-il un installateur certifié pour ma borne ?", a: "Oui : la certification IRVE est obligatoire au-delà de 3,7 kW et pour bénéficier des aides comme la prime ADVENIR." },
      { q: "Pourquoi la qualité d'installation est-elle importante ?", a: "Une borne sollicite fortement l'installation électrique : une pose aux normes garantit sécurité et durabilité." },
    ],
    related: ["choisir-puissance-borne", "prime-advenir", "borne-recharge-copropriete", "prix-borne-de-recharge"],
  },
  {
    slug: "bonnes-pratiques-recharge-batterie",
    metaTitle: "Bonnes pratiques de recharge pour préserver la batterie | Choisis Ta borne",
    metaDescription:
      "Comment recharger sa voiture électrique pour préserver la batterie ? Les bonnes pratiques : charge à 80 %, recharge lente à domicile, heures creuses.",
    h1: "Bien recharger pour préserver la batterie",
    updated: "2026-07-15",
    lede: "Quelques habitudes simples permettent de préserver la santé de la batterie de votre voiture électrique sur le long terme. La recharge à domicile y joue un rôle clé.",
    sections: [
      { h2: "Charger à 80 % au quotidien", paragraphs: [
        "Pour un usage quotidien, il est généralement recommandé de limiter la charge autour de 80 % et d'éviter de descendre trop souvent près de 0 %. Réserver la charge à 100 % aux longs trajets ménage la batterie.",
        "La plupart des voitures et des bornes pilotables permettent de programmer un seuil de charge et des plages horaires, pour automatiser ces bonnes pratiques.",
      ]},
      { h2: "Privilégier la recharge lente", paragraphs: [
        "La recharge lente à domicile (en courant alternatif) est plus douce pour la batterie que la charge rapide en courant continu, à réserver aux longs trajets. Recharger tranquillement la nuit préserve donc la batterie.",
        "C'est aussi la solution la plus économique, en profitant des heures creuses.",
      ]},
      { h2: "Une borne à domicile pour bien faire", paragraphs: [
        "Une borne dédiée, pilotable et programmée en heures creuses, réunit toutes les bonnes conditions : charge lente, seuil maîtrisé, coût minimal. C'est l'idéal pour la santé de votre batterie comme pour votre facture.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Faut-il charger sa voiture électrique à 100 % ?", a: "Au quotidien, il est souvent conseillé de se limiter à environ 80 % et de réserver la charge complète aux longs trajets, pour préserver la batterie." },
      { q: "La recharge rapide abîme-t-elle la batterie ?", a: "Une charge rapide fréquente sollicite davantage la batterie que la recharge lente à domicile. Mieux vaut la réserver aux longs trajets." },
      { q: "Comment automatiser les bonnes pratiques ?", a: "Une borne pilotable permet de programmer un seuil de charge et des plages en heures creuses, sans y penser." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison", "pilotage-energetique-recharge"],
  },
  {
    slug: "arnaques-bornes-recharge-publiques",
    metaTitle: "Arnaques aux bornes de recharge publiques : comment les éviter | Choisis Ta borne",
    metaDescription:
      "Faux QR codes, tarifs opaques, surfacturation : comment repérer et éviter les arnaques aux bornes de recharge publiques. Et pourquoi le domicile est sans risque.",
    h1: "Arnaques aux bornes publiques : les éviter",
    updated: "2026-07-15",
    lede: "Comme partout où l'on paie, les bornes de recharge publiques attirent quelques pratiques douteuses. Voici comment les repérer, et pourquoi la recharge à domicile met à l'abri de ces risques.",
    sections: [
      { h2: "Les pièges à connaître", paragraphs: [
        "Le piège le plus courant est le faux QR code collé sur une borne, qui renvoie vers un site frauduleux pour capter vos données de paiement. Méfiez-vous d'un QR code qui semble ajouté par-dessus l'étiquette d'origine.",
        "Autres écueils : des tarifs peu lisibles avant de brancher, des frais annexes ou une facturation à la minute qui gonfle la note. La réglementation impose de plus en plus d'afficher clairement le prix.",
      ]},
      { h2: "Comment se protéger", paragraphs: [
        "Payez de préférence via l'application officielle du réseau ou par carte bancaire sur le terminal physique, jamais via un QR code suspect. Vérifiez le tarif affiché avant de lancer la charge.",
        "En cas de doute sur une borne, changez-en : le réseau public est suffisamment dense dans la plupart des zones.",
      ]},
      { h2: "À domicile, aucun risque de ce type", paragraphs: [
        "Sur une borne installée chez vous, il n'y a ni QR code, ni paiement à un tiers, ni tarif opaque : vous rechargez sur votre propre installation et ne payez que votre électricité, en heures creuses.",
        "C'est la solution la plus sûre et la plus économique au quotidien. Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Quelle est l'arnaque la plus courante sur les bornes publiques ?", a: "Le faux QR code collé sur la borne, qui renvoie vers un site frauduleux pour voler vos données de paiement. Privilégiez l'application officielle ou la carte bancaire." },
      { q: "Comment éviter les mauvaises surprises de tarif ?", a: "Vérifiez le prix affiché avant de brancher et évitez les bornes aux tarifs peu clairs ; la réglementation impose de plus en plus la transparence." },
      { q: "La recharge à domicile présente-t-elle ces risques ?", a: "Non : chez vous, pas de QR code ni de paiement à un tiers, vous ne payez que votre électricité en toute sécurité." },
    ],
    related: ["ou-recharger-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison", "recharge-rapide-voiture-electrique"],
  },
  {
    slug: "recharge-ac-ou-dc",
    metaTitle: "Recharge AC ou DC : quelle différence, quelle borne ? | Choisis Ta borne",
    metaDescription:
      "Recharge en courant alternatif (AC) ou continu (DC) : quelle différence, laquelle chez soi ? Le guide pour bien comprendre et choisir sa borne à domicile.",
    h1: "Recharge AC ou DC : comprendre et choisir",
    updated: "2026-07-15",
    lede: "AC et DC désignent deux façons de recharger une voiture électrique. L'une est celle de votre borne à domicile, l'autre celle des bornes rapides publiques. Voici la différence, simplement.",
    sections: [
      { h2: "La recharge en courant alternatif (AC)", paragraphs: [
        "En courant alternatif (AC), l'électricité passe par le chargeur embarqué de la voiture, qui la convertit pour la batterie. C'est le mode de la recharge à domicile et de la plupart des bornes en voirie, avec une prise Type 2.",
        "La puissance est modérée (7,4 à 22 kW selon la borne et le véhicule), ce qui est parfait pour une charge de nuit : suffisamment rapide pour repartir chaque matin avec une batterie pleine.",
      ]},
      { h2: "La recharge en courant continu (DC)", paragraphs: [
        "En courant continu (DC), la borne convertit elle-même l'électricité et alimente directement la batterie, ce qui permet des puissances bien plus élevées (50 à 350 kW). C'est la charge rapide des aires d'autoroute et des stations publiques.",
        "Plus coûteuse et à réserver aux longs trajets, elle sollicite davantage la batterie qu'une charge lente.",
      ]},
      { h2: "Chez soi, c'est une borne AC", paragraphs: [
        "À domicile, on installe toujours une borne en courant alternatif (AC) : c'est le bon compromis entre vitesse, coût et respect de la batterie. Une borne 7,4 kW recharge la plupart des véhicules en une nuit.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h pour votre borne à domicile.",
      ]},
    ],
    faq: [
      { q: "Quelle est la différence entre recharge AC et DC ?", a: "En AC (courant alternatif), le chargeur embarqué de la voiture convertit l'électricité : c'est la recharge à domicile. En DC (courant continu), la borne convertit elle-même et charge plus vite : c'est la charge rapide publique." },
      { q: "Quelle recharge pour la maison ?", a: "Une borne en courant alternatif (AC), typiquement 7,4 kW, qui recharge en une nuit pour un coût maîtrisé." },
      { q: "La recharge DC abîme-t-elle la batterie ?", a: "Une charge rapide DC fréquente sollicite plus la batterie que la charge lente AC à domicile. Mieux vaut la réserver aux longs trajets." },
    ],
    related: ["choisir-puissance-borne", "recharge-rapide-voiture-electrique", "difference-kw-kwh-borne-recharge", "borne-de-recharge-maison"],
  },
  {
    slug: "faut-il-recharger-tous-les-jours",
    metaTitle: "Faut-il recharger sa voiture électrique tous les jours ? | Choisis Ta borne",
    metaDescription:
      "Faut-il recharger sa voiture électrique tous les jours ? Fréquence idéale, seuil de charge et pourquoi une borne à domicile simplifie tout.",
    h1: "Faut-il recharger sa voiture électrique tous les jours ?",
    updated: "2026-07-15",
    lede: "Beaucoup de conducteurs se demandent s'il faut brancher leur voiture chaque soir. La réponse dépend de votre usage, mais quelques principes simples s'appliquent.",
    sections: [
      { h2: "Recharger selon ses besoins, pas par réflexe", paragraphs: [
        "Il n'est pas nécessaire de recharger à 100 % tous les jours. L'idéal est de maintenir la batterie dans une plage confortable (souvent autour de 20 à 80 %) et de recharger quand le niveau baisse, plutôt que de viser systématiquement la charge complète.",
        "Pour un trajet domicile-travail quotidien de quelques dizaines de kilomètres, une recharge tous les deux ou trois jours suffit souvent.",
      ]},
      { h2: "L'intérêt de brancher chaque soir", paragraphs: [
        "Brancher chaque soir n'a rien de nocif si vous limitez le seuil de charge : la voiture ne consomme que ce qu'il faut pour atteindre le niveau programmé. C'est même pratique pour partir chaque matin l'esprit tranquille.",
        "Une borne pilotable permet de programmer à la fois le seuil (par exemple 80 %) et les heures creuses, sans y penser.",
      ]},
      { h2: "Une borne à domicile pour la souplesse", paragraphs: [
        "Avec une borne à domicile, recharger devient un geste anodin : vous branchez en rentrant, la charge se fait la nuit au meilleur tarif, et vous gérez la fréquence selon votre usage réel.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Faut-il recharger sa voiture électrique tous les jours ?", a: "Non, pas nécessairement : rechargez selon votre usage, en maintenant la batterie dans une plage confortable plutôt qu'à 100 % en permanence." },
      { q: "Est-ce mauvais de brancher tous les soirs ?", a: "Non, surtout si vous limitez le seuil de charge (par exemple 80 %) : la voiture ne prend que ce dont elle a besoin." },
      { q: "Comment automatiser la charge ?", a: "Une borne pilotable programme le seuil de charge et les heures creuses, pour recharger sans y penser." },
    ],
    related: ["bonnes-pratiques-recharge-batterie", "temps-de-recharge-voiture-electrique", "cout-recharge-voiture-electrique", "borne-de-recharge-maison"],
  },
  {
    slug: "recharge-en-roulant",
    metaTitle: "Une voiture électrique se recharge-t-elle en roulant ? | Choisis Ta borne",
    metaDescription:
      "Une voiture électrique peut-elle se recharger en roulant ? Le rôle du freinage régénératif, ses limites, et pourquoi il faut toujours brancher pour recharger.",
    h1: "Une voiture électrique se recharge-t-elle en roulant ?",
    updated: "2026-07-15",
    lede: "C'est une question fréquente : une voiture électrique récupère-t-elle de l'énergie en roulant ? En partie oui, grâce au freinage régénératif, mais cela ne remplace pas la recharge.",
    sections: [
      { h2: "Le freinage régénératif", paragraphs: [
        "En décélérant ou en freinant, une voiture électrique transforme une partie de son énergie cinétique en électricité, réinjectée dans la batterie : c'est le freinage régénératif. En ville et en descente, il récupère un peu d'autonomie.",
        "Mais cette récupération reste limitée : elle prolonge légèrement l'autonomie, sans jamais recharger réellement la batterie.",
      ]},
      { h2: "Pourquoi il faut quand même brancher", paragraphs: [
        "Sur un trajet, la voiture consomme toujours plus d'énergie qu'elle n'en récupère : le bilan reste négatif. Pour refaire le plein d'électricité, il faut donc brancher la voiture sur une borne ou une prise.",
        "Aucune voiture électrique de série ne se recharge intégralement en roulant : les panneaux solaires intégrés, quand ils existent, n'apportent qu'un appoint marginal.",
      ]},
      { h2: "La recharge à domicile, la vraie solution", paragraphs: [
        "Pour refaire le plein simplement et à bas coût, rien ne remplace une borne à domicile : vous branchez en rentrant, la charge se fait la nuit en heures creuses.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Une voiture électrique se recharge-t-elle en roulant ?", a: "Elle récupère un peu d'énergie au freinage (freinage régénératif), mais cela ne recharge pas réellement la batterie : il faut brancher la voiture pour faire le plein." },
      { q: "Le freinage régénératif recharge-t-il la batterie ?", a: "Il en récupère une petite partie et prolonge légèrement l'autonomie, mais le bilan d'un trajet reste consommateur d'énergie." },
      { q: "Les panneaux solaires sur le toit suffisent-ils ?", a: "Non : quand ils existent, ils n'apportent qu'un appoint marginal. Une recharge sur borne reste indispensable." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "ou-recharger-voiture-electrique", "borne-de-recharge-maison", "cout-recharge-voiture-electrique"],
  },
  {
    slug: "peut-on-recharger-sur-toutes-les-bornes",
    metaTitle: "Peut-on recharger sa voiture électrique sur toutes les bornes ? | Choisis Ta borne",
    metaDescription:
      "Peut-on recharger sur toutes les bornes de recharge ? Compatibilité des prises (Type 2, Combo CCS), et pourquoi une borne à domicile simplifie tout.",
    h1: "Peut-on recharger sa voiture sur toutes les bornes ?",
    updated: "2026-07-15",
    lede: "Presque toutes les bornes sont compatibles avec les voitures électriques récentes, grâce à des standards communs. Voici ce qu'il faut vérifier, et pourquoi le domicile évite toute question.",
    sections: [
      { h2: "Des standards de prise communs", paragraphs: [
        "En Europe, la recharge en courant alternatif se fait via la prise Type 2, devenue le standard universel : la quasi-totalité des bornes AC et des véhicules récents la partagent. Pour la charge rapide en courant continu, c'est le Combo CCS qui s'est imposé.",
        "Concrètement, une voiture récente peut recharger sur l'immense majorité des bornes, à domicile comme en public, avec le bon câble.",
      ]},
      { h2: "Les cas particuliers", paragraphs: [
        "Quelques anciens modèles utilisent d'autres connecteurs (comme le CHAdeMO pour la charge rapide), dont la disponibilité diminue. Les Superchargeurs Tesla, longtemps réservés, s'ouvrent aussi progressivement aux autres marques.",
        "Pour la charge publique, il faut parfois un badge ou une application selon le réseau, en plus du bon connecteur.",
      ]},
      { h2: "À domicile, aucune question de compatibilité", paragraphs: [
        "Chez vous, une borne Type 2 recharge n'importe quelle voiture électrique moderne, sans badge ni réseau : vous branchez, et c'est tout. C'est la solution la plus simple et la plus économique.",
        "Nos installateurs IRVE vous transmettent 3 devis gratuits sous 24h pour votre borne à domicile.",
      ]},
    ],
    faq: [
      { q: "Peut-on recharger sur toutes les bornes ?", a: "Une voiture récente recharge sur l'immense majorité des bornes grâce aux standards communs : Type 2 en courant alternatif, Combo CCS en charge rapide." },
      { q: "Quels véhicules ont des connecteurs différents ?", a: "Quelques anciens modèles utilisent le CHAdeMO pour la charge rapide, dont la disponibilité diminue." },
      { q: "Une borne à domicile est-elle compatible avec ma voiture ?", a: "Oui : une borne Type 2 recharge toutes les voitures électriques modernes, sans badge ni réseau." },
    ],
    related: ["cable-de-recharge-type-2", "prise-combo-ccs-recharge-rapide", "prise-chademo", "borne-de-recharge-maison"],
  },
  {
    slug: "installation-borne-de-recharge",
    metaTitle: "Installation de borne de recharge : prix, étapes, devis 24h | Choisis Ta borne",
    metaDescription:
      "Installation d'une borne de recharge à domicile : prix constatés, étapes de la pose, aides (TVA 5,5 %, ADVENIR) et 3 devis gratuits d'installateurs IRVE sous 24h.",
    h1: "Installation d'une borne de recharge : prix, étapes et devis",
    updated: "2026-07-15",
    lede: "Faire installer une borne de recharge chez soi est un chantier rapide quand il est bien préparé : une demi-journée de pose dans la plupart des cas. Voici le prix à prévoir, les étapes, et comment obtenir le meilleur devis.",
    sections: [
      { h2: "Combien coûte l'installation d'une borne", paragraphs: [
        "Pour une borne 7,4 kW posée en maison, les prix constatés vont généralement de 1 200 à 2 000 € TTC pose comprise, selon la distance entre le tableau électrique et la place de stationnement, les protections à ajouter et le modèle de borne. En copropriété ou en triphasé, le budget peut être plus élevé.",
        "Deux aides réduisent la facture : la TVA à 5,5 % (logement de plus de 2 ans, appliquée directement sur le devis) et la prime ADVENIR en copropriété. Le crédit d'impôt spécifique a, lui, été supprimé — méfiez-vous des sites qui l'annoncent encore.",
      ]},
      { h2: "Les étapes de l'installation", paragraphs: [
        "1. Étude technique (souvent sur photos ou en visite) : puissance du compteur, cheminement du câble, protections nécessaires. 2. Pose par un électricien certifié IRVE : raccordement au tableau, disjoncteur et différentiel dédiés, fixation de la borne. 3. Mise en service et test avec votre véhicule.",
        "La pose elle-même prend généralement entre 2 et 4 heures pour une configuration standard. Au-delà de 3,7 kW, la qualification IRVE de l'installateur est obligatoire — c'est aussi la condition des aides.",
      ]},
      { h2: "Obtenez 3 devis gratuits sous 24h", paragraphs: [
        "Les écarts de prix entre installateurs peuvent dépasser 30 % pour la même prestation. Décrivez votre projet en 2 minutes : nous vous transmettons jusqu'à 3 devis d'installateurs IRVE certifiés de votre région, sous 24h, gratuitement et sans engagement.",
        "Vous comparez tranquillement et choisissez — ou pas. C'est vous qui décidez.",
      ]},
    ],
    faq: [
      { q: "Combien coûte l'installation d'une borne de recharge ?", a: "Généralement de 1 200 à 2 000 € TTC pose comprise pour une borne 7,4 kW en maison, selon la configuration. La TVA à 5,5 % s'applique dans un logement de plus de 2 ans." },
      { q: "Combien de temps dure l'installation ?", a: "2 à 4 heures pour une configuration standard, une fois l'étude technique réalisée." },
      { q: "Qui peut installer une borne de recharge ?", a: "Au-delà de 3,7 kW, un électricien certifié IRVE est obligatoire. C'est aussi la condition pour bénéficier des aides." },
    ],
    related: ["prix-borne-de-recharge", "devis-borne-de-recharge", "installateur-irve", "choisir-puissance-borne"],
  },
  {
    slug: "devis-borne-de-recharge",
    metaTitle: "Devis borne de recharge : comparez 3 offres gratuites sous 24h | Choisis Ta borne",
    metaDescription:
      "Obtenez jusqu'à 3 devis gratuits d'installateurs IRVE certifiés pour votre borne de recharge, sous 24h. Ce qu'un bon devis doit contenir et les pièges à éviter.",
    h1: "Devis borne de recharge : comparez avant de signer",
    updated: "2026-07-15",
    lede: "Pour une même installation, les devis peuvent varier de plusieurs centaines d'euros d'un installateur à l'autre. Comparer 2 ou 3 offres est le réflexe le plus rentable de votre projet — voici comment bien le faire.",
    sections: [
      { h2: "Ce qu'un bon devis doit contenir", paragraphs: [
        "Un devis sérieux détaille : le modèle de borne et sa puissance, les protections électriques ajoutées (disjoncteur, interrupteur différentiel dédié), la longueur de câble et le cheminement, la main-d'œuvre, la mise en service, et la TVA à 5,5 % si votre logement a plus de 2 ans.",
        "Vérifiez aussi la certification IRVE de l'installateur (obligatoire au-delà de 3,7 kW), la garantie sur la pose et le matériel, et ce qui est inclus en SAV.",
      ]},
      { h2: "Les pièges à éviter", paragraphs: [
        "Méfiez-vous des devis sans visite ni photos (le prix changera le jour J), des mentions d'aides supprimées comme le crédit d'impôt, des bornes surdimensionnées (22 kW inutile en monophasé) et des prix anormalement bas qui cachent des suppléments.",
        "Un écart de 30 % entre deux devis pour la même prestation n'a rien de rare : c'est précisément pour ça qu'il faut comparer.",
      ]},
      { h2: "Recevez 3 devis gratuits sous 24h", paragraphs: [
        "Décrivez votre projet en 2 minutes (maison ou copropriété, puissance, distance au tableau) : nous le transmettons à des installateurs IRVE certifiés près de chez vous, qui vous répondent sous 24h.",
        "Le service est 100 % gratuit et sans engagement : vous comparez les offres et choisissez librement.",
      ]},
    ],
    faq: [
      { q: "Le devis est-il vraiment gratuit ?", a: "Oui : la demande, la mise en relation et les devis sont 100 % gratuits et sans engagement." },
      { q: "Combien de devis vais-je recevoir ?", a: "Jusqu'à 3 devis d'installateurs IRVE certifiés de votre région, sous 24h en général." },
      { q: "Que faut-il vérifier sur un devis ?", a: "Le détail du matériel et des protections, la certification IRVE, la TVA appliquée, les garanties et ce que couvre le SAV." },
    ],
    related: ["installation-borne-de-recharge", "prix-borne-de-recharge", "installateur-irve", "meilleur-installateur-borne-recharge"],
  },
  {
    slug: "installateur-irve",
    metaTitle: "Installateur IRVE certifié : obligatoire, comment le choisir | Choisis Ta borne",
    metaDescription:
      "Pourquoi un installateur certifié IRVE est obligatoire pour votre borne de recharge, comment vérifier sa qualification et le choisir. 3 devis gratuits sous 24h.",
    h1: "Installateur IRVE : pourquoi c'est obligatoire et comment choisir",
    updated: "2026-07-15",
    lede: "Depuis 2017, l'installation d'une borne de plus de 3,7 kW doit être réalisée par un électricien titulaire de la qualification IRVE. Voici ce qu'elle garantit, et comment choisir le bon professionnel.",
    sections: [
      { h2: "La qualification IRVE, une obligation légale", paragraphs: [
        "IRVE signifie « Infrastructure de Recharge pour Véhicule Électrique ». La qualification (délivrée notamment par Qualifelec ou l'AFNOR) atteste que l'électricien est formé aux spécificités des bornes : protections dédiées, dimensionnement, norme NF C 15-100.",
        "Elle est obligatoire pour toute borne de plus de 3,7 kW. Sans elle : pas d'aides (TVA 5,5 %, prime ADVENIR), et votre assurance peut refuser de couvrir un sinistre lié à l'installation.",
      ]},
      { h2: "Comment choisir son installateur", paragraphs: [
        "Vérifiez la qualification IRVE et son niveau (1 à 3 selon la puissance), demandez des références de chantiers similaires au vôtre (maison, copropriété), et exigez un devis détaillé avec garanties.",
        "Surtout, comparez plusieurs installateurs : pour une même borne, les écarts de prix et de prestations sont importants. C'est le meilleur moyen d'obtenir un travail de qualité au juste prix.",
      ]},
      { h2: "Notre réseau d'installateurs IRVE certifiés", paragraphs: [
        "Nous travaillons avec des installateurs certifiés IRVE partout en France, sélectionnés pour la qualité de leur travail. Décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits sous 24h.",
        "Gratuit, sans engagement : vous comparez et choisissez librement.",
      ]},
    ],
    faq: [
      { q: "L'installateur IRVE est-il obligatoire ?", a: "Oui, pour toute borne de plus de 3,7 kW. C'est aussi la condition pour bénéficier de la TVA à 5,5 % et de la prime ADVENIR." },
      { q: "Comment vérifier la certification d'un installateur ?", a: "Demandez son attestation de qualification IRVE (Qualifelec ou AFNOR) et son niveau. Un professionnel sérieux la fournit sans difficulté." },
      { q: "Un électricien classique peut-il poser ma borne ?", a: "Seulement si elle fait 3,7 kW ou moins. Au-delà, la qualification IRVE est légalement requise." },
    ],
    related: ["meilleur-installateur-borne-recharge", "installation-borne-de-recharge", "devis-borne-de-recharge", "certification-ze-ready"],
  },
  {
    slug: "borne-recharge-hotel",
    metaTitle: "Borne de recharge pour hôtel : un service devenu incontournable | Choisis Ta borne",
    metaDescription:
      "Installer des bornes de recharge dans votre hôtel : pourquoi c'est rentable, quelle configuration choisir, aides pour les pros et devis gratuits d'installateurs IRVE.",
    h1: "Borne de recharge pour hôtel : attirer la clientèle électrique",
    updated: "2026-07-15",
    lede: "Les conducteurs de voitures électriques choisissent de plus en plus leur hôtel en fonction de la recharge : une nuit sur place est le moment idéal pour recharger. Équiper votre parking devient un vrai argument commercial.",
    sections: [
      { h2: "Pourquoi équiper votre hôtel", paragraphs: [
        "Les applications de planification d'itinéraire et les cartes de bornes affichent les hôtels équipés : c'est une visibilité gratuite auprès d'une clientèle en forte croissance, qui filtre ses réservations sur ce critère.",
        "La recharge de nuit est le scénario parfait : des bornes en courant alternatif suffisent, sans investir dans de la charge rapide coûteuse. Le client arrive, branche, et repart batterie pleine.",
      ]},
      { h2: "Quelle configuration pour un hôtel", paragraphs: [
        "Quelques bornes 7,4 à 22 kW couvrent les besoins d'une clientèle qui reste plusieurs heures. Un système de supervision permet de facturer la recharge (ou de l'offrir), de suivre la consommation et de gérer la puissance disponible entre les bornes.",
        "Le dimensionnement (nombre de points, gestion dynamique de la charge) se fait avec l'installateur selon votre abonnement électrique et votre parking.",
      ]},
      { h2: "Aides et devis pour les professionnels", paragraphs: [
        "Le programme ADVENIR propose des primes pour les entreprises et parkings privés ouverts au public — vérifiez le barème en vigueur pour votre cas. Nos installateurs IRVE certifiés gèrent le dossier.",
        "Décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits d'installateurs expérimentés en hôtellerie, sous 24h.",
      ]},
    ],
    faq: [
      { q: "Quelle puissance de borne pour un hôtel ?", a: "Des bornes 7,4 à 22 kW en courant alternatif suffisent : les clients rechargent pendant la nuit. Inutile d'investir dans de la charge rapide." },
      { q: "Peut-on facturer la recharge aux clients ?", a: "Oui, via un système de supervision qui gère la facturation, ou en l'offrant comme service premium." },
      { q: "Y a-t-il des aides pour les hôtels ?", a: "Le programme ADVENIR prévoit des primes pour les parkings privés d'entreprises, selon le barème en vigueur. Nos installateurs montent le dossier." },
    ],
    related: ["borne-de-recharge-entreprise", "borne-recharge-restaurant-commerce", "devis-borne-de-recharge", "obligation-borne-recharge-parking-prive"],
  },
  {
    slug: "borne-recharge-restaurant-commerce",
    metaTitle: "Borne de recharge pour restaurant ou commerce : le guide | Choisis Ta borne",
    metaDescription:
      "Installer une borne de recharge dans votre restaurant ou commerce : attirer une nouvelle clientèle, quelle configuration, aides pros et devis gratuits d'installateurs IRVE.",
    h1: "Borne de recharge pour restaurant ou commerce",
    updated: "2026-07-15",
    lede: "Le temps d'un repas ou d'une séance de courses correspond exactement à une recharge d'appoint utile. Équiper votre parking attire une clientèle électrique qui choisit où s'arrêter en fonction des bornes.",
    sections: [
      { h2: "Un aimant à clientèle électrique", paragraphs: [
        "Les conducteurs de VE planifient leurs arrêts là où ils peuvent recharger : un restaurant ou un commerce équipé apparaît sur les cartes de bornes et capte cette clientèle, qui reste le temps de la recharge — et consomme sur place.",
        "45 à 90 minutes de présence sur une borne 22 kW, c'est de 30 à 100 km d'autonomie récupérés : un vrai service rendu, mémorisé par le client.",
      ]},
      { h2: "Quelle configuration pour un commerce", paragraphs: [
        "Une ou deux bornes 11-22 kW en courant alternatif constituent un excellent point de départ, avec facturation à la charge ou gratuité promotionnelle. La supervision permet de suivre l'usage et d'éviter les voitures ventouses.",
        "L'installateur dimensionne selon votre abonnement électrique existant — souvent sans le modifier, grâce à la gestion dynamique de puissance.",
      ]},
      { h2: "Aides et devis pour les professionnels", paragraphs: [
        "Le programme ADVENIR prévoit des primes pour les parkings privés ouverts au public — vérifiez le barème en vigueur. Nos installateurs IRVE certifiés s'occupent du dossier.",
        "Décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits sous 24h, sans engagement.",
      ]},
    ],
    faq: [
      { q: "Quelle borne pour un restaurant ou un commerce ?", a: "Une ou deux bornes 11-22 kW en courant alternatif : le temps d'un repas ou de courses permet une recharge d'appoint significative." },
      { q: "La recharge doit-elle être payante ?", a: "C'est votre choix : facturation à la charge via supervision, ou gratuité comme argument commercial." },
      { q: "Quelles aides pour un commerce ?", a: "Le programme ADVENIR propose des primes pour les parkings privés ouverts au public, selon le barème en vigueur." },
    ],
    related: ["borne-recharge-hotel", "borne-de-recharge-entreprise", "devis-borne-de-recharge", "obligation-borne-recharge-parking-prive"],
  },
  {
    slug: "augmenter-puissance-compteur-borne",
    metaTitle: "Faut-il augmenter la puissance du compteur pour une borne ? | Choisis Ta borne",
    metaDescription:
      "Borne de recharge et puissance du compteur : faut-il passer de 6 à 9 ou 12 kVA ? Les solutions pour éviter l'augmentation (délestage, pilotage) et quand la faire.",
    h1: "Borne de recharge : faut-il augmenter la puissance du compteur ?",
    updated: "2026-07-15",
    lede: "Une borne 7,4 kW sur un abonnement 6 kVA, ça coince sur le papier. Pourtant, dans beaucoup de foyers, il n'est pas nécessaire d'augmenter son abonnement : voici comment décider.",
    sections: [
      { h2: "Comprendre le problème", paragraphs: [
        "Votre abonnement électrique limite la puissance totale disponible (6, 9 ou 12 kVA en général). Une borne 7,4 kW utilisée en même temps que le four et le chauffage peut faire disjoncter un abonnement 6 kVA.",
        "La question n'est donc pas la borne seule, mais la somme de vos usages simultanés — surtout aux heures où vous rechargez.",
      ]},
      { h2: "Les solutions sans augmenter l'abonnement", paragraphs: [
        "La recharge nocturne en heures creuses évite naturellement les pics (four, plaques, lave-linge éteints). Un délesteur ou une borne pilotée module automatiquement la puissance de charge quand la maison consomme : la borne ralentit au lieu de faire disjoncter.",
        "Grâce au compteur Linky et à ces équipements, beaucoup de foyers en 6 ou 9 kVA rechargent sans rien changer à leur abonnement.",
      ]},
      { h2: "Quand augmenter, et comment", paragraphs: [
        "Si vos usages simultanés sont élevés (chauffage électrique + gros rouleur), passer à 9 ou 12 kVA se fait par simple demande à votre fournisseur d'électricité — avec Linky, le changement est à distance, moyennant un abonnement mensuel un peu plus élevé.",
        "Le bon réflexe : demander à l'installateur IRVE de calculer votre bilan de puissance lors du devis. Nos partenaires le font systématiquement — 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Une borne 7,4 kW passe-t-elle sur un abonnement 6 kVA ?", a: "Souvent oui, à condition de recharger la nuit et/ou d'installer un délesteur qui module la charge quand la maison consomme." },
      { q: "Comment augmenter la puissance de son compteur ?", a: "Par simple demande à votre fournisseur d'électricité. Avec Linky, le changement se fait à distance, l'abonnement mensuel augmente légèrement." },
      { q: "Qui calcule la puissance nécessaire ?", a: "L'installateur IRVE réalise un bilan de puissance lors de l'étude technique et recommande la solution adaptée (délestage, pilotage ou changement d'abonnement)." },
    ],
    related: ["kva-ampere-monophase-triphase", "delesteur-borne-recharge", "tic-linky-borne-recharge", "choisir-puissance-borne"],
  },
  {
    slug: "louer-borne-de-recharge",
    metaTitle: "Louer sa borne de recharge : bonne ou mauvaise idée ? | Choisis Ta borne",
    metaDescription:
      "Location ou achat de borne de recharge : mensualités, engagement, maintenance… Ce que cache le modèle locatif et pourquoi l'achat est souvent plus rentable.",
    h1: "Louer sa borne de recharge : bonne ou mauvaise idée ?",
    updated: "2026-07-15",
    lede: "Certains opérateurs proposent la borne en location avec un loyer mensuel, maintenance incluse. Séduisant sur le papier — mais sur la durée, l'achat est souvent bien plus rentable. Voici comment comparer.",
    sections: [
      { h2: "Comment fonctionne la location de borne", paragraphs: [
        "Le modèle locatif : pas (ou peu) de frais d'installation initiaux, un loyer mensuel qui couvre la borne et sa maintenance, souvent avec une durée d'engagement de plusieurs années.",
        "L'avantage est d'étaler la dépense. Les inconvénients : les loyers courent sans fin, la borne ne vous appartient pas, et la résiliation anticipée peut coûter cher.",
      ]},
      { h2: "Achat vs location : le calcul", paragraphs: [
        "Une borne achetée et posée coûte de l'ordre de 1 200 à 2 000 € une fois pour toutes (TVA 5,5 %), pour une durée de vie de 10 ans et plus, avec une garantie de 2 ans minimum. En location, quelques dizaines d'euros par mois finissent par dépasser ce montant en quelques années — puis continuent.",
        "La maintenance d'une borne domestique est par ailleurs très limitée : c'est un équipement simple et fiable, ce qui réduit l'intérêt du « tout inclus » locatif pour un particulier.",
      ]},
      { h2: "Comparez les deux options sur devis", paragraphs: [
        "Le plus simple pour décider : obtenir le prix réel d'un achat posé chez vous, et le comparer aux loyers cumulés sur 4-5 ans. Décrivez votre projet en 2 minutes et recevez jusqu'à 3 devis gratuits d'installateurs IRVE sous 24h.",
        "Gratuit et sans engagement : vous aurez les chiffres pour choisir en connaissance de cause.",
      ]},
    ],
    faq: [
      { q: "La location de borne est-elle rentable ?", a: "Rarement pour un particulier : les loyers cumulés dépassent le prix d'achat en quelques années, alors qu'une borne achetée dure 10 ans et plus." },
      { q: "Que couvre le loyer d'une borne en location ?", a: "Généralement la borne, l'installation et la maintenance, avec une durée d'engagement de plusieurs années." },
      { q: "Comment comparer achat et location ?", a: "Comparez le prix d'achat posé (via des devis) aux loyers cumulés sur 4-5 ans, en tenant compte de l'engagement et de la propriété de l'équipement." },
    ],
    related: ["prix-borne-de-recharge", "installation-borne-de-recharge", "borne-recharge-sans-abonnement", "devis-borne-de-recharge"],
  },
  {
    slug: "chargeur-mobile-voiture-electrique",
    metaTitle: "Chargeur mobile pour voiture électrique : utile ou gadget ? | Choisis Ta borne",
    metaDescription:
      "Chargeur mobile (CRO, borne nomade) pour voiture électrique : à quoi ça sert, ses limites, et pourquoi il complète une borne fixe sans la remplacer.",
    h1: "Chargeur mobile pour voiture électrique : utile ou gadget ?",
    updated: "2026-07-15",
    lede: "Câble de recharge occasionnelle, chargeur nomade réglable, adaptateurs multi-prises : le chargeur mobile dépanne partout. Mais peut-il remplacer une borne fixe à la maison ? Voici la réponse honnête.",
    sections: [
      { h2: "Ce qu'est un chargeur mobile", paragraphs: [
        "C'est un boîtier avec câble, fourni ou vendu en option avec la voiture, qui se branche sur une prise domestique classique ou renforcée (type Green'up), parfois sur des prises industrielles avec adaptateurs. Certains modèles permettent de régler l'intensité.",
        "En déplacement — vacances, famille, résidence secondaire — c'est un excellent filet de sécurité qui transforme n'importe quelle prise en point de recharge d'appoint.",
      ]},
      { h2: "Ses limites au quotidien", paragraphs: [
        "Sur prise domestique, la puissance est limitée (2,3 kW environ, 3,7 kW sur prise renforcée) : comptez une nuit entière pour récupérer 100 à 150 km. Et une prise classique n'est pas conçue pour des charges longues répétées : échauffement et usure au rendez-vous si l'installation est ancienne.",
        "En usage quotidien, c'est lent, moins sûr et moins pratique qu'une borne : pas de programmation heures creuses fiable, pas de pilotage, pas de gestion de puissance.",
      ]},
      { h2: "Le bon duo : borne fixe + chargeur mobile", paragraphs: [
        "La configuration idéale : une borne 7,4 kW à domicile pour le quotidien (rapide, sûre, programmée en heures creuses), et le chargeur mobile dans le coffre pour les déplacements.",
        "Pour la borne fixe, nos installateurs IRVE certifiés vous transmettent 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Un chargeur mobile peut-il remplacer une borne ?", a: "Pour dépanner oui, au quotidien non : sur prise domestique la charge est lente (2,3 kW) et les prises classiques ne sont pas conçues pour des charges longues répétées." },
      { q: "Quelle puissance atteint un chargeur mobile ?", a: "Environ 2,3 kW sur prise classique, jusqu'à 3,7 kW sur prise renforcée type Green'up — contre 7,4 kW pour une borne dédiée." },
      { q: "Faut-il emporter un chargeur mobile en voyage ?", a: "Oui, c'est un excellent filet de sécurité pour recharger en appoint chez des proches ou en location." },
    ],
    related: ["recharger-voiture-prise-normale-mode-2", "prise-green-up-legrand", "cable-de-recharge-type-2", "borne-de-recharge-maison"],
  },
  {
    slug: "panne-borne-de-recharge",
    metaTitle: "Panne de borne de recharge : diagnostic et solutions | Choisis Ta borne",
    metaDescription:
      "Votre borne de recharge est en panne ? Diagnostic pas à pas : côté voiture, côté borne, côté installation électrique, et quand appeler un professionnel IRVE.",
    h1: "Panne de borne de recharge : le diagnostic pas à pas",
    updated: "2026-07-15",
    lede: "Une borne qui ne répond plus n'est pas forcément morte : dans la majorité des cas, la cause est simple à identifier. Voici la méthode pour diagnostiquer — et savoir quand appeler un professionnel.",
    sections: [
      { h2: "Étape 1 : éliminer les causes simples", paragraphs: [
        "Commencez côté voiture : câble bien verrouillé des deux côtés, charge programmée qui bloque le démarrage (heures creuses paramétrées dans la voiture ou l'application), seuil de charge déjà atteint. Un message au tableau de bord oriente souvent le diagnostic.",
        "Côté borne : vérifiez le voyant (couleur, clignotement) et, si elle est connectée, l'application. Un simple redémarrage de la borne (coupure via son disjoncteur dédié quelques secondes) résout bien des blocages logiciels.",
      ]},
      { h2: "Étape 2 : vérifier l'installation électrique", paragraphs: [
        "Regardez le tableau électrique : si le disjoncteur ou l'interrupteur différentiel de la borne a sauté, réarmez-le une fois. S'il ressaute aussitôt, n'insistez pas : un déclenchement répété signale un vrai défaut (borne, câble ou circuit).",
        "Ne démontez jamais la borne vous-même : elle reste sous tension et l'intervention est réservée à un professionnel.",
      ]},
      { h2: "Étape 3 : faire intervenir un professionnel IRVE", paragraphs: [
        "Si la panne persiste, un électricien certifié IRVE diagnostique la borne, les protections et le circuit, et remplace le matériel défectueux si besoin — souvent sous garantie si la pose est récente.",
        "Nos installateurs partenaires interviennent aussi en dépannage et remplacement : décrivez votre panne et recevez jusqu'à 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Ma borne ne répond plus, que faire en premier ?", a: "Vérifiez le câble, les programmations de charge (voiture et borne), puis redémarrez la borne via son disjoncteur dédié. La majorité des blocages se résolvent ainsi." },
      { q: "Le disjoncteur de la borne a sauté, puis-je le réarmer ?", a: "Oui, une fois. S'il ressaute immédiatement, il y a un défaut réel : n'insistez pas et faites intervenir un professionnel IRVE." },
      { q: "Qui appeler pour réparer une borne de recharge ?", a: "Un électricien certifié IRVE. Si la borne est récente, vérifiez d'abord la garantie (souvent 2 ans ou plus) auprès de votre installateur." },
    ],
    related: ["borne-de-recharge-ne-charge-pas", "borne-recharge-disjoncte", "entretien-borne-recharge", "installateur-irve"],
  },
  {
    slug: "borne-de-recharge-ne-charge-pas",
    metaTitle: "Ma borne de recharge ne charge pas : causes et solutions | Choisis Ta borne",
    metaDescription:
      "Votre voiture ne charge pas sur la borne ? Les causes les plus fréquentes (câble, programmation, alimentation, verrouillage) et comment les résoudre.",
    h1: "La borne ne charge pas : les causes les plus fréquentes",
    updated: "2026-07-15",
    lede: "Voiture branchée, mais rien ne se passe ? Avant d'imaginer le pire, passez en revue ces causes classiques : la plupart se règlent en quelques minutes, sans outil.",
    sections: [
      { h2: "Les causes côté voiture", paragraphs: [
        "La plus fréquente : une charge programmée. Beaucoup de voitures attendent les heures creuses paramétrées avant de démarrer — la charge est « en attente », pas en panne. Vérifiez aussi le seuil de charge (si la batterie est déjà au niveau cible, rien ne démarre) et le verrouillage du connecteur.",
        "Un câble mal enclenché d'un côté ou de l'autre empêche le dialogue borne-voiture : débranchez et rebranchez fermement les deux extrémités.",
      ]},
      { h2: "Les causes côté borne et installation", paragraphs: [
        "Vérifiez le voyant de la borne et son application le cas échéant : une borne connectée peut attendre un ordre de démarrage ou une plage horaire programmée. Côté tableau, contrôlez que le disjoncteur dédié est bien enclenché.",
        "Si la borne pilote la charge selon la consommation de la maison (délestage), elle peut réduire la puissance à presque rien pendant un pic : la charge reprendra d'elle-même.",
      ]},
      { h2: "Si rien ne fonctionne", paragraphs: [
        "Testez si possible avec un autre câble ou sur une autre borne pour isoler le coupable (voiture, câble ou borne). Si la borne est en cause, un professionnel IRVE la diagnostiquera — souvent sous garantie.",
        "Nos installateurs partenaires interviennent en dépannage : 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Pourquoi ma voiture ne charge pas alors qu'elle est branchée ?", a: "Le plus souvent : une charge programmée en attente des heures creuses, un seuil de charge déjà atteint, ou un câble mal enclenché. Vérifiez ces trois points d'abord." },
      { q: "Comment savoir si c'est la borne ou la voiture ?", a: "Testez avec un autre câble ou une autre borne (publique par exemple) : vous isolerez le maillon défaillant." },
      { q: "La charge démarre puis s'arrête aussitôt, pourquoi ?", a: "Souvent un défaut de communication ou une protection qui déclenche : si le phénomène se répète, faites contrôler la borne par un professionnel IRVE." },
    ],
    related: ["panne-borne-de-recharge", "borne-recharge-disjoncte", "recharge-anormalement-lente", "cable-de-recharge-type-2"],
  },
  {
    slug: "borne-recharge-disjoncte",
    metaTitle: "La borne de recharge fait disjoncter : pourquoi et que faire | Choisis Ta borne",
    metaDescription:
      "Votre borne de recharge fait sauter le disjoncteur ou le différentiel ? Les causes (puissance, protections, défaut) et les solutions, en toute sécurité.",
    h1: "La borne fait disjoncter : pourquoi et que faire",
    updated: "2026-07-15",
    lede: "Un disjoncteur qui saute pendant la charge n'est pas anodin : c'est une protection qui fait son travail. Reste à savoir contre quoi — excès de puissance, défaut d'isolement ou protection mal dimensionnée.",
    sections: [
      { h2: "Cas n°1 : le disjoncteur général saute", paragraphs: [
        "Si c'est le disjoncteur d'abonnement (général) qui coupe, votre foyer dépasse la puissance souscrite : la borne s'ajoute au four, au chauffage… La solution : recharger la nuit, installer un délesteur qui module la charge, ou augmenter l'abonnement.",
        "C'est le scénario le plus fréquent et le moins grave — un simple problème de dimensionnement.",
      ]},
      { h2: "Cas n°2 : le disjoncteur ou différentiel de la borne saute", paragraphs: [
        "Si c'est la protection dédiée de la borne qui déclenche systématiquement, le signal est différent : possible défaut d'isolement (câble abîmé, humidité), défaut de la borne ou protection inadaptée. Réarmez une fois ; si ça ressaute, arrêtez là.",
        "Un déclenchement du différentiel signale un courant de fuite : c'est précisément ce qui protège les personnes. N'insistez jamais et ne shuntez jamais une protection.",
      ]},
      { h2: "Faire contrôler par un professionnel IRVE", paragraphs: [
        "Un électricien IRVE mesure l'isolement, vérifie le dimensionnement des protections et la conformité du circuit — et corrige la cause plutôt que le symptôme.",
        "Nos installateurs partenaires interviennent en diagnostic et remise en conformité : 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Le compteur saute quand je recharge, que faire ?", a: "Votre puissance souscrite est dépassée : rechargez la nuit, installez un délesteur, ou augmentez votre abonnement après un bilan de puissance." },
      { q: "Le différentiel de la borne saute sans arrêt, c'est grave ?", a: "C'est le signe d'un courant de fuite ou d'un défaut : réarmez une seule fois, et si ça ressaute, faites intervenir un professionnel IRVE sans insister." },
      { q: "Puis-je remplacer moi-même le disjoncteur de la borne ?", a: "Non : le circuit d'une borne obéit à des règles précises (norme NF C 15-100, différentiel adapté). C'est le domaine de l'électricien IRVE." },
    ],
    related: ["augmenter-puissance-compteur-borne", "delesteur-borne-recharge", "panne-borne-de-recharge", "installateur-irve"],
  },
  {
    slug: "voyant-rouge-borne-recharge",
    metaTitle: "Voyant rouge sur la borne de recharge : que signifie-t-il ? | Choisis Ta borne",
    metaDescription:
      "Un voyant rouge ou clignotant sur votre borne de recharge ? Ce que signalent les couleurs des LED, les codes d'erreur courants et comment réagir.",
    h1: "Voyant rouge sur la borne : ce que ça signifie",
    updated: "2026-07-15",
    lede: "Vert, bleu, rouge, clignotant : le voyant de votre borne est son langage. Un rouge fixe ou clignotant signale une anomalie — voici comment l'interpréter et réagir.",
    sections: [
      { h2: "Le langage des voyants", paragraphs: [
        "Chaque marque a son code, mais les conventions se ressemblent : vert ou blanc = disponible, bleu ou vert clignotant = charge en cours, rouge = défaut. Le manuel ou l'application de votre borne détaille la signification exacte du clignotement (nombre de flashs, séquence).",
        "Sur les bornes connectées, l'application affiche généralement le code d'erreur en clair : c'est le premier réflexe à avoir.",
      ]},
      { h2: "Que faire face à un voyant rouge", paragraphs: [
        "Débranchez le véhicule, puis redémarrez la borne via son disjoncteur dédié (coupez quelques secondes, réenclenchez). Beaucoup de défauts transitoires — surtension passagère, erreur de communication — s'effacent au redémarrage.",
        "Si le rouge revient dès le branchement, notez la séquence du voyant ou le code d'erreur de l'application : ce sera précieux pour le diagnostic du professionnel.",
      ]},
      { h2: "Quand appeler un professionnel", paragraphs: [
        "Un défaut persistant (défaut de terre, courant de fuite, température) nécessite l'intervention d'un électricien IRVE, souvent prise en charge par la garantie si la borne est récente.",
        "Nos installateurs partenaires interviennent en dépannage : décrivez le code d'erreur et recevez 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Que signifie un voyant rouge sur ma borne ?", a: "Un défaut : électrique (terre, fuite), de communication ou interne. Redémarrez la borne via son disjoncteur ; si le rouge persiste, relevez le code d'erreur et contactez un professionnel." },
      { q: "Le voyant clignote pendant la charge, est-ce normal ?", a: "Un clignotement vert ou bleu indique généralement une charge en cours — c'est normal. Consultez le manuel pour la séquence exacte de votre modèle." },
      { q: "Le redémarrage efface-t-il les erreurs ?", a: "Souvent, oui, pour les défauts transitoires. Un défaut qui revient systématiquement doit être diagnostiqué par un électricien IRVE." },
    ],
    related: ["panne-borne-de-recharge", "borne-de-recharge-ne-charge-pas", "wallbox-connectee", "entretien-borne-recharge"],
  },
  {
    slug: "cable-recharge-bloque",
    metaTitle: "Câble de recharge bloqué dans la prise : que faire ? | Choisis Ta borne",
    metaDescription:
      "Le câble de recharge reste bloqué dans la voiture ou la borne ? Les causes du verrouillage et les manipulations pour le libérer sans rien casser.",
    h1: "Câble de recharge bloqué : comment le libérer",
    updated: "2026-07-15",
    lede: "Le connecteur refuse de sortir de la voiture ou de la borne ? C'est presque toujours le verrouillage automatique qui n'a pas été relâché. Voici les manipulations à connaître — et ce qu'il ne faut surtout pas faire.",
    sections: [
      { h2: "Pourquoi le câble se verrouille", paragraphs: [
        "Pendant la charge, la voiture verrouille mécaniquement le connecteur — une sécurité qui empêche de débrancher sous tension et protège du vol de câble. Le déverrouillage n'intervient que quand la charge est arrêtée ET la voiture déverrouillée.",
        "Un câble « bloqué » est donc le plus souvent un câble encore verrouillé, pas un câble coincé.",
      ]},
      { h2: "Les manipulations qui fonctionnent", paragraphs: [
        "Dans l'ordre : arrêtez la charge (depuis la voiture ou l'application), déverrouillez la voiture (bouton clé, parfois deux pressions), puis retirez le connecteur en le poussant légèrement avant de tirer. Par temps de gel, un connecteur peut geler : dégagez la glace sans forcer.",
        "La plupart des voitures ont aussi un déverrouillage d'urgence (tirette dans le coffre ou sous une trappe côté trappe de charge) : le manuel de votre modèle indique son emplacement.",
      ]},
      { h2: "Ce qu'il ne faut pas faire", paragraphs: [
        "Ne tirez jamais violemment sur le câble : vous pouvez endommager le verrou de la trappe (réparation coûteuse) ou le connecteur. Ne débranchez pas côté borne en premier si le câble est solidaire de la borne.",
        "Si le verrou de la voiture est réellement défaillant, c'est une intervention garage ; si c'est la borne qui retient son câble, un professionnel IRVE la diagnostiquera.",
      ]},
    ],
    faq: [
      { q: "Mon câble reste bloqué dans la voiture, que faire ?", a: "Arrêtez la charge, déverrouillez la voiture, poussez légèrement le connecteur puis tirez. En dernier recours, utilisez le déverrouillage d'urgence indiqué dans le manuel." },
      { q: "Le connecteur est gelé, comment faire ?", a: "Dégagez la glace autour du connecteur sans forcer (eau tiède sur le pourtour si besoin), déverrouillez puis retirez. Ne tirez jamais violemment." },
      { q: "Pourquoi la voiture verrouille-t-elle le câble ?", a: "Par sécurité : pour empêcher un débranchement sous tension et protéger le câble du vol pendant la charge." },
    ],
    related: ["cable-de-recharge-type-2", "panne-borne-de-recharge", "borne-de-recharge-ne-charge-pas", "entretien-borne-recharge"],
  },
  {
    slug: "recharge-anormalement-lente",
    metaTitle: "Recharge anormalement lente : pourquoi et que faire ? | Choisis Ta borne",
    metaDescription:
      "Votre voiture électrique charge plus lentement que prévu ? Les causes : bridage du chargeur, délestage, température, câble — et comment retrouver la pleine puissance.",
    h1: "Recharge anormalement lente : les causes possibles",
    updated: "2026-07-15",
    lede: "Votre borne 7,4 kW ne délivre que 3 kW ? Avant de suspecter une panne, plusieurs mécanismes parfaitement normaux peuvent brider la charge. Voici comment identifier le responsable.",
    sections: [
      { h2: "Les bridages normaux", paragraphs: [
        "Le chargeur embarqué de la voiture fixe le plafond : une voiture limitée à 3,7 kW en courant alternatif ne chargera jamais plus vite, même sur une borne 22 kW. Vérifiez aussi le réglage d'intensité dans la voiture (souvent réduit par défaut ou après un voyage).",
        "En fin de charge (au-delà de ~80 %), la puissance diminue naturellement pour préserver la batterie : c'est voulu. Le froid intense réduit aussi temporairement la puissance acceptée.",
      ]},
      { h2: "Les bridages liés à l'installation", paragraphs: [
        "Si votre borne fait du délestage (modulation selon la consommation de la maison), elle réduit la puissance pendant que le four ou le chauffe-eau tournent — et la remonte ensuite. C'est un fonctionnement normal, visible dans l'application.",
        "Un câble sous-dimensionné ou un réglage d'installation trop prudent peuvent aussi limiter la puissance en permanence : c'est un point à faire vérifier.",
      ]},
      { h2: "Quand faire vérifier", paragraphs: [
        "Si la charge est lente en permanence sans explication (voiture réglée au maximum, pas de délestage actif, température normale), faites contrôler la borne et son circuit par un électricien IRVE : réglage d'intensité, serrage des connexions, tension.",
        "Nos installateurs partenaires diagnostiquent et corrigent : 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Pourquoi ma borne 7,4 kW ne charge qu'à 3 kW ?", a: "Vérifiez le plafond du chargeur embarqué de la voiture, son réglage d'intensité, et si la borne fait du délestage pendant les pics de consommation de la maison." },
      { q: "La charge ralentit en fin de batterie, est-ce normal ?", a: "Oui : au-delà d'environ 80 %, la puissance diminue pour préserver la batterie. C'est le comportement attendu." },
      { q: "Le froid ralentit-il la recharge ?", a: "Oui, une batterie froide accepte moins de puissance. Certains véhicules préchauffent la batterie pour y remédier." },
    ],
    related: ["temps-de-recharge-voiture-electrique", "choisir-puissance-borne", "delesteur-borne-recharge", "voiture-electrique-hiver"],
  },
  {
    slug: "borne-recharge-deconnectee",
    metaTitle: "Borne de recharge déconnectée du wifi ou de l'app : solutions | Choisis Ta borne",
    metaDescription:
      "Votre borne connectée n'apparaît plus dans l'application ou a perdu le wifi ? Les solutions pour la reconnecter — et pourquoi elle continue de charger quand même.",
    h1: "Borne déconnectée du wifi ou de l'application : que faire",
    updated: "2026-07-15",
    lede: "Votre borne connectée a disparu de l'application ? Pas de panique : dans l'immense majorité des cas, elle continue de charger normalement — seul le pilotage à distance est perdu. Voici comment la reconnecter.",
    sections: [
      { h2: "D'abord : la charge fonctionne-t-elle encore ?", paragraphs: [
        "Une borne déconnectée du réseau reste une borne fonctionnelle : branchez, la charge démarre selon ses derniers réglages. La connexion ne sert qu'au pilotage (programmation, suivi de consommation, mises à jour).",
        "Si la charge elle-même ne fonctionne plus, le problème est ailleurs — voyez notre guide « la borne ne charge pas ».",
      ]},
      { h2: "Reconnecter la borne", paragraphs: [
        "Dans l'ordre : redémarrez votre box internet, puis la borne (via son disjoncteur dédié, quelques secondes). Vérifiez que le wifi porte jusqu'à la borne — garage et sous-sol sont souvent en limite de couverture ; un répéteur wifi règle définitivement le problème.",
        "Si la borne utilise le Bluetooth pour l'appairage initial, rapprochez-vous avec le téléphone et relancez l'appairage depuis l'application, borne sous tension.",
      ]},
      { h2: "Si la déconnexion revient sans cesse", paragraphs: [
        "Une borne qui perd la connexion en boucle signale un wifi trop faible à son emplacement (le cas le plus courant) ou un firmware à mettre à jour. Certaines bornes acceptent un câble Ethernet ou un module 4G : votre installateur peut adapter la configuration.",
        "Nos installateurs partenaires interviennent aussi sur la configuration réseau des bornes connectées : 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Ma borne n'apparaît plus dans l'application, va-t-elle encore charger ?", a: "Oui : une borne déconnectée continue de charger selon ses derniers réglages. Seul le pilotage à distance est indisponible." },
      { q: "Comment reconnecter ma borne au wifi ?", a: "Redémarrez la box puis la borne (disjoncteur dédié), vérifiez la couverture wifi jusqu'à la borne, et relancez l'appairage depuis l'application si besoin." },
      { q: "Le wifi ne porte pas jusqu'au garage, quelles solutions ?", a: "Un répéteur wifi, une prise CPL avec point d'accès, ou selon les modèles un raccordement Ethernet posé par l'installateur." },
    ],
    related: ["wallbox-connectee", "pilotage-energetique-recharge", "panne-borne-de-recharge", "borne-de-recharge-ne-charge-pas"],
  },
  {
    slug: "charge-interrompue-nuit",
    metaTitle: "La charge s'arrête pendant la nuit : causes et solutions | Choisis Ta borne",
    metaDescription:
      "Votre voiture n'est pas chargée au réveil alors qu'elle était branchée ? Programmation heures creuses, délestage, coupure : les causes d'une charge interrompue la nuit.",
    h1: "La charge s'arrête la nuit : pourquoi la batterie n'est pas pleine au matin",
    updated: "2026-07-15",
    lede: "Branchée le soir, pas chargée le matin : ce scénario agaçant a presque toujours une explication de programmation. Voici les causes classiques et comment fiabiliser la charge nocturne.",
    sections: [
      { h2: "Les conflits de programmation", paragraphs: [
        "Le grand classique : deux programmations qui se contredisent. La voiture attend les heures creuses de 23h, la borne n'autorise la charge qu'à partir de 1h, et l'application ajoute son mot... Résultat : des fenêtres qui ne se recouvrent pas et une charge partielle.",
        "La règle d'or : programmez à UN seul endroit (la borne OU la voiture) et laissez l'autre en « charge immédiate ». Vérifiez aussi que la plage programmée est assez longue pour la quantité d'énergie demandée.",
      ]},
      { h2: "Les interruptions involontaires", paragraphs: [
        "Un contacteur heures creuses mal câblé peut couper la borne au changement de tarif ; un délestage prolongé (chauffage électrique toute la nuit) peut réduire la charge à presque rien ; une microcoupure réseau peut interrompre certaines bornes qui ne redémarrent pas seules.",
        "L'historique de l'application (ou celui de la voiture) montre l'heure exacte de l'interruption : c'est l'indice clé pour identifier le coupable.",
      ]},
      { h2: "Fiabiliser la charge nocturne", paragraphs: [
        "Un électricien IRVE vérifie le câblage du contacteur, le paramétrage du délestage et la configuration de la borne pour garantir une charge complète chaque nuit, au meilleur tarif.",
        "Nos installateurs partenaires interviennent en diagnostic et reconfiguration : 3 devis gratuits sous 24h.",
      ]},
    ],
    faq: [
      { q: "Pourquoi ma voiture n'est-elle pas chargée le matin ?", a: "Le plus souvent : un conflit entre les programmations de la voiture et de la borne, ou une plage d'heures creuses trop courte. Programmez à un seul endroit et vérifiez l'historique de charge." },
      { q: "Le délestage peut-il empêcher la charge complète ?", a: "Oui, si la maison consomme beaucoup toute la nuit (chauffage électrique), la borne peut moduler longtemps. Un bilan de puissance permet d'ajuster." },
      { q: "La charge s'arrête à heure fixe chaque nuit, pourquoi ?", a: "Une programmation ou un contacteur heures creuses en est probablement la cause : l'heure exacte de l'arrêt, visible dans l'application, permet de l'identifier." },
    ],
    related: ["panne-borne-de-recharge", "delesteur-borne-recharge", "tic-linky-borne-recharge", "pilotage-energetique-recharge"],
  },
  {
    slug: "borne-recharge-syndic",
    metaTitle: "Syndic : gérer les bornes de recharge en copropriété | Choisis Ta borne",
    metaDescription:
      "Syndic de copropriété : droit à la prise, infrastructure collective, loi LOM, prime ADVENIR. Comment traiter les demandes de bornes sereinement, avec des installateurs IRVE.",
    h1: "Syndic : bien gérer les demandes de bornes de recharge",
    updated: "2026-07-15",
    lede: "Les demandes de bornes se multiplient dans les copropriétés, et le syndic est en première ligne : droit à la prise, choix d'infrastructure, aides. Voici le cadre, et comment traiter ces demandes sans friction.",
    sections: [
      { h2: "Ce que dit le droit", paragraphs: [
        "Le droit à la prise permet à tout occupant d'équiper sa place à ses frais : le syndic ne peut s'y opposer que pour un motif sérieux et légitime, dans un délai encadré. La loi LOM impose par ailleurs l'inscription de la question à l'ordre du jour et facilite les travaux d'infrastructure collective.",
        "En pratique, s'opposer est rarement tenable : mieux vaut organiser proprement l'arrivée des bornes que la subir demande par demande.",
      ]},
      { h2: "Demandes individuelles ou infrastructure collective", paragraphs: [
        "Deux voies : laisser chaque copropriétaire exercer son droit à la prise (simple, mais multiplication des raccordements), ou faire voter une infrastructure collective dimensionnée pour l'immeuble — souvent plus rationnelle au-delà de quelques demandes, et soutenue par la prime ADVENIR (jusqu'à 8 000 € HT pour l'infrastructure collective, plus une prime par point de charge).",
        "Un audit technique (colonne montante, puissance disponible, comptage) éclaire le choix et sécurise le vote en assemblée.",
      ]},
      { h2: "Comment nous aidons les syndics", paragraphs: [
        "Nous mettons les syndics en relation avec des installateurs IRVE expérimentés en copropriété : étude technique, devis comparés, dossier ADVENIR et présentation en assemblée générale.",
        "Décrivez la copropriété (nombre de places, demandes en cours) et recevez jusqu'à 3 devis gratuits sous 24h — un dossier solide à présenter aux copropriétaires.",
      ]},
    ],
    faq: [
      { q: "Un syndic peut-il refuser une borne de recharge ?", a: "Seulement pour un motif sérieux et légitime, dans le cadre du droit à la prise. En pratique, l'opposition est rarement fondée : mieux vaut organiser l'équipement de l'immeuble." },
      { q: "Faut-il un vote en AG pour une borne individuelle ?", a: "Non pour le droit à la prise (simple information/notification). Oui pour une infrastructure collective, qui bénéficie de majorités facilitées depuis la loi LOM." },
      { q: "Quelles aides pour une copropriété ?", a: "La prime ADVENIR couvre une partie de l'infrastructure collective (jusqu'à 8 000 € HT) et des points de charge, selon le barème en vigueur. Nos installateurs montent le dossier." },
    ],
    related: ["borne-recharge-copropriete", "droit-a-la-prise", "loi-lom-copropriete", "prime-advenir"],
  },
  {
    slug: "borne-recharge-promoteur-immobilier",
    metaTitle: "Promoteur immobilier : bornes et pré-équipement obligatoire | Choisis Ta borne",
    metaDescription:
      "Promoteurs : obligations de pré-équipement IRVE dans le neuf, valorisation des programmes et installation de bornes. Devis gratuits d'installateurs certifiés.",
    h1: "Promoteur immobilier : le pré-équipement IRVE, obligation et argument de vente",
    updated: "2026-07-15",
    lede: "Dans le neuf, le pré-équipement pour la recharge électrique est une obligation réglementaire — et de plus en plus un argument commercial décisif. Voici l'essentiel pour les promoteurs et maîtres d'ouvrage.",
    sections: [
      { h2: "Ce que la réglementation impose", paragraphs: [
        "Les bâtiments neufs résidentiels et tertiaires doivent pré-équiper tout ou partie des places de stationnement (fourreaux, chemins de câble, dimensionnement du tableau) pour permettre l'installation ultérieure de bornes — les seuils précis dépendent de la taille du parking et de la destination du bâtiment ; vérifiez la réglementation en vigueur pour votre permis.",
        "Anticiper au-delà du minimum réglementaire coûte peu au stade de la construction et évite des travaux lourds ensuite : c'est le calcul gagnant.",
      ]},
      { h2: "Un argument de vente devenu décisif", paragraphs: [
        "Pour un acquéreur en véhicule électrique, une place « borne-ready » ou déjà équipée pèse dans la décision d'achat. Les programmes qui livrent des bornes opérationnelles se différencient immédiatement de la concurrence.",
        "L'infrastructure collective posée dès la livraison simplifie aussi la vie de la future copropriété : pas de travaux a posteriori, un seul standard technique.",
      ]},
      { h2: "Nos installateurs pour vos programmes", paragraphs: [
        "Nous mettons promoteurs et maîtres d'ouvrage en relation avec des installateurs IRVE capables de traiter des parkings entiers : conception, pose, supervision et exploitation.",
        "Décrivez votre programme (nombre de places, phasage) et recevez des devis comparés, gratuitement.",
      ]},
    ],
    faq: [
      { q: "Le pré-équipement IRVE est-il obligatoire dans le neuf ?", a: "Oui, pour les bâtiments neufs avec parking, selon des seuils qui dépendent de la taille et de la destination du bâtiment. Vérifiez la réglementation applicable à votre permis de construire." },
      { q: "Pré-équiper ou équiper directement ?", a: "Le pré-équipement est le minimum légal ; livrer des places déjà équipées différencie le programme et évite des travaux futurs à la copropriété." },
      { q: "Qui installe les bornes d'un programme neuf ?", a: "Des installateurs certifiés IRVE, idéalement impliqués dès la conception du parking. Nous vous mettons en relation avec des professionnels habitués aux programmes neufs." },
    ],
    related: ["obligation-borne-recharge-parking-prive", "borne-recharge-copropriete", "borne-de-recharge-entreprise", "installateur-irve"],
  },
  {
    slug: "borne-recharge-domicile-collaborateur",
    metaTitle: "Borne de recharge au domicile des collaborateurs : le guide | Choisis Ta borne",
    metaDescription:
      "Équiper le domicile des salariés en voiture électrique de fonction : pourquoi, comment financer et installer les bornes chez les collaborateurs. Devis gratuits.",
    h1: "Borne de recharge au domicile des collaborateurs",
    updated: "2026-07-15",
    lede: "Pour une flotte électrique qui roule vraiment, la recharge au domicile des collaborateurs est le maillon décisif : 80 % des recharges se font là. Voici comment l'organiser proprement.",
    sections: [
      { h2: "Pourquoi équiper le domicile des salariés", paragraphs: [
        "Un collaborateur en véhicule de fonction électrique recharge principalement chez lui, la nuit : c'est le scénario le plus économique pour l'entreprise et le plus confortable pour le salarié — à condition d'avoir une borne dédiée, sûre et pilotable.",
        "Sans borne à domicile, la voiture de fonction dépend des bornes publiques : coût au kWh plus élevé, temps perdu, adoption qui patine.",
      ]},
      { h2: "Financement et remboursement", paragraphs: [
        "Plusieurs montages existent : l'entreprise finance la borne (avec des règles à prévoir en cas de départ du salarié), ou le salarié s'équipe et l'entreprise rembourse l'électricité professionnelle — des solutions de comptage dédié ou de badge permettent d'isoler les kWh du véhicule de fonction.",
        "L'avantage en nature et le traitement fiscal dépendent du montage choisi : cadrez-le avec votre expert-comptable selon les règles en vigueur.",
      ]},
      { h2: "Déployer chez plusieurs collaborateurs", paragraphs: [
        "Le défi est logistique : des dizaines de domiciles différents (maison, copropriété), autant d'études techniques. Un réseau d'installateurs IRVE couvrant tout le territoire permet un déploiement homogène, avec un standard de matériel et de pose.",
        "Décrivez votre flotte et vos collaborateurs à équiper : nous organisons les devis avec des installateurs IRVE partout en France.",
      ]},
    ],
    faq: [
      { q: "Qui paie la borne au domicile du salarié ?", a: "Selon le montage : l'entreprise (avec clause en cas de départ) ou le salarié avec remboursement des kWh professionnels. Chaque option a ses implications fiscales à valider." },
      { q: "Comment isoler l'électricité du véhicule de fonction ?", a: "Par une borne communicante avec comptage dédié ou un badge : les kWh du véhicule sont mesurés et remboursés distinctement de la consommation du foyer." },
      { q: "Et si le collaborateur habite en copropriété ?", a: "Le droit à la prise s'applique comme pour un particulier : nos installateurs gèrent la démarche auprès du syndic." },
    ],
    related: ["electrifier-flotte-automobile", "borne-de-recharge-entreprise", "avantage-en-nature-voiture-electrique", "droit-a-la-prise"],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
