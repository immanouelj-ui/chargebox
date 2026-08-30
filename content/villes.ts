// Données des pages locales « Installation borne de recharge à [Ville] ».
// Chaque ville a un intro + un angle local uniques pour éviter le contenu dupliqué.

export type Ville = {
  slug: string; // segment d'URL : /borne-de-recharge/lyon
  nom: string; // "Lyon"
  prep: string; // "à Lyon", "au Havre" -> on stocke la locution complète
  dept: string; // "Rhône (69)"
  region: string; // "Auvergne-Rhône-Alpes"
  intro: string; // paragraphe d'intro spécifique à la ville
  local: string; // angle local (habitat, copro, contexte) spécifique
  habitat?: string; // paragraphe additionnel de contexte local (habitat, secteurs, mobilité) — unique par ville, optionnel
};

export const VILLES: Ville[] = [
  {
    slug: "paris",
    nom: "Paris",
    prep: "à Paris",
    dept: "Paris (75)",
    region: "Île-de-France",
    intro:
      "À Paris, l'installation d'une borne de recharge concerne surtout les copropriétés et les places de parking en sous-sol. Nos installateurs IRVE certifiés maîtrisent le « droit à la prise » et les démarches en immeuble collectif.",
    local:
      "La majorité des Parisiens habitent en copropriété : la prime ADVENIR (jusqu'à 960 €) et le droit à la prise permettent d'équiper votre place de parking même sans l'accord préalable de tous les copropriétaires.",
    habitat:
      "À Paris, presque tout se joue en copropriété et en parking souterrain. Bonne nouvelle : le droit à la prise vous autorise à équiper votre place sans vote préalable de l'assemblée, et une borne pilotable ajuste sa puissance pour ne jamais dépasser l'abonnement de l'immeuble.",
  },
  {
    slug: "lyon",
    nom: "Lyon",
    prep: "à Lyon",
    dept: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Lyon et dans la métropole, la demande de bornes de recharge explose entre maisons individuelles de l'Ouest lyonnais et copropriétés du centre. Nos installateurs IRVE interviennent sur tout le Grand Lyon.",
    local:
      "Entre les pavillons de Caluire, Écully ou Sainte-Foy et les immeubles de la Presqu'île, nos partenaires adaptent la puissance (7,4 kW en monophasé, 11/22 kW en triphasé) au type de logement.",
    habitat:
      "À Lyon, entre pavillons de l'Ouest et immeubles de la Presqu'île, le bon réflexe est de programmer la recharge la nuit en heures creuses : le coût aux 100 km tombe alors bien en dessous d'un plein d'essence, et loin des tarifs des bornes publiques.",
  },
  {
    slug: "marseille",
    nom: "Marseille",
    prep: "à Marseille",
    dept: "Bouches-du-Rhône (13)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Marseille, l'installation d'une borne de recharge à domicile est idéale pour recharger la nuit à moindre coût. Nos installateurs IRVE certifiés couvrent les 16 arrondissements et la métropole Aix-Marseille.",
    local:
      "Villas des quartiers Sud, maisons de l'Estaque ou copropriétés du centre : nos partenaires évaluent la distance au tableau électrique pour un devis juste, sans mauvaise surprise.",
    habitat:
      "À Marseille, l'ensoleillement change la donne : couplée à des panneaux photovoltaïques, une borne pilotée peut recharger votre voiture en priorité sur votre production solaire. Nos installateurs dimensionnent l'ensemble selon votre toiture et la distance au tableau.",
  },
  {
    slug: "toulouse",
    nom: "Toulouse",
    prep: "à Toulouse",
    dept: "Haute-Garonne (31)",
    region: "Occitanie",
    intro:
      "À Toulouse, la Ville rose accompagne la transition vers l'électrique. Faites installer votre borne de recharge à domicile par un professionnel IRVE certifié et recevez 3 devis sous 24h.",
    local:
      "Des maisons de Blagnac, Colomiers ou Tournefeuille aux copropriétés du centre, nos installateurs gèrent la TVA réduite à 5,5 % directement sur le devis.",
    habitat:
      "À Toulouse, beaucoup de maisons récentes disposent déjà d'un compteur triphasé : de quoi installer une borne 11 kW et diviser par deux le temps de charge. Sur une installation plus ancienne, la 7,4 kW monophasée reste parfaitement adaptée à une recharge nocturne.",
  },
  {
    slug: "bordeaux",
    nom: "Bordeaux",
    prep: "à Bordeaux",
    dept: "Gironde (33)",
    region: "Nouvelle-Aquitaine",
    intro:
      "À Bordeaux, installer une borne de recharge chez soi devient la norme pour les propriétaires de véhicules électriques. Nos installateurs IRVE certifiés interviennent sur toute la métropole bordelaise.",
    local:
      "Échoppes bordelaises, maisons de Mérignac ou du Bouscat, appartements avec parking : nous trouvons la solution adaptée à votre habitat et à votre budget.",
    habitat:
      "À Bordeaux, les échoppes et maisons de ville ont souvent leur tableau électrique à l'avant et le stationnement à l'arrière : nos installateurs chiffrent précisément le cheminement du câble pour un devis sans surprise et une pose discrète.",
  },
  {
    slug: "lille",
    nom: "Lille",
    prep: "à Lille",
    dept: "Nord (59)",
    region: "Hauts-de-France",
    intro:
      "À Lille et dans la métropole, la recharge à domicile est le moyen le plus économique de rouler à l'électrique. Comparez les installateurs IRVE certifiés et recevez vos devis gratuits sous 24h.",
    local:
      "Maisons de brique en bande, copropriétés du Vieux-Lille, pavillons de Villeneuve-d'Ascq : nos partenaires adaptent l'installation à chaque configuration électrique.",
    habitat:
      "À Lille, dans les maisons de brique en bande, mieux vaut éviter la prise domestique sur un usage quotidien : une borne dédiée, protégée par un disjoncteur différentiel 30 mA et conforme à la norme NF C 15-100, supprime tout risque de surchauffe.",
  },
  {
    slug: "nantes",
    nom: "Nantes",
    prep: "à Nantes",
    dept: "Loire-Atlantique (44)",
    region: "Pays de la Loire",
    intro:
      "À Nantes, ville pionnière de la mobilité durable, l'installation d'une borne de recharge à domicile séduit de plus en plus de foyers. Nos installateurs IRVE couvrent toute la métropole nantaise.",
    local:
      "Des maisons de Rezé et Saint-Herblain aux immeubles de l'île de Nantes, nous vous mettons en relation avec des professionnels certifiés Qualifelec.",
    habitat:
      "À Nantes, des bords de Loire aux communes de la périphérie, l'intérêt d'une borne à domicile est d'abord le confort : vous branchez le soir, vous repartez chaque matin avec une batterie pleine, sans détour par une station.",
  },
  {
    slug: "nice",
    nom: "Nice",
    prep: "à Nice",
    dept: "Alpes-Maritimes (06)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Nice, sur la Côte d'Azur, faites installer votre borne de recharge par un artisan IRVE certifié. Devis gratuit sous 24h, aides déduites (TVA 5,5 %, prime ADVENIR en copropriété).",
    local:
      "Villas des collines niçoises ou résidences en bord de mer : la forte proportion de copropriétés rend la prime ADVENIR et le droit à la prise particulièrement utiles ici.",
    habitat:
      "À Nice, installer une borne valorise aussi votre bien : un emplacement équipé et éligible aux aides est un argument de vente ou de location de plus en plus recherché sur la Côte d'Azur.",
  },
  {
    slug: "strasbourg",
    nom: "Strasbourg",
    prep: "à Strasbourg",
    dept: "Bas-Rhin (67)",
    region: "Grand Est",
    intro:
      "À Strasbourg, capitale européenne engagée pour la qualité de l'air, l'installation d'une borne de recharge à domicile est un vrai atout. Comparez les installateurs IRVE certifiés près de chez vous.",
    local:
      "Maisons alsaciennes de la couronne, copropriétés du centre : nos partenaires vérifient votre installation électrique et gèrent la TVA réduite à 5,5 %.",
    habitat:
      "À Strasbourg, les hivers plus rigoureux invitent à programmer la recharge en fin de nuit et à préconditionner la batterie avant le départ, borne branchée : la voiture est à température sans puiser dans l'autonomie.",
  },
  {
    slug: "rennes",
    nom: "Rennes",
    prep: "à Rennes",
    dept: "Ille-et-Vilaine (35)",
    region: "Bretagne",
    intro:
      "À Rennes, l'essor du véhicule électrique va de pair avec la recharge à domicile. Nos installateurs IRVE certifiés interviennent dans toute la métropole rennaise pour une pose rapide et sécurisée.",
    local:
      "Pavillons de Cesson-Sévigné et Bruz ou appartements du centre historique : nous adaptons la puissance de la borne à votre compteur et à vos besoins.",
    habitat:
      "À Rennes, sur un abonnement électrique standard, une borne pilotable avec délestage dynamique évite de faire disjoncter le logement quand le chauffe-eau ou les plaques fonctionnent en même temps que la charge.",
  },
  {
    slug: "montpellier",
    nom: "Montpellier",
    prep: "à Montpellier",
    dept: "Hérault (34)",
    region: "Occitanie",
    intro:
      "À Montpellier, ville en pleine croissance, installer une borne de recharge chez soi permet de rouler électrique en toute sérénité. Recevez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Maisons de Castelnau-le-Lez ou Lattes, copropriétés récentes de Port Marianne : nos partenaires proposent la solution la plus adaptée à votre logement.",
    habitat:
      "À Montpellier, les résidences récentes comme celles de Port Marianne sont souvent pré-câblées pour la recharge : l'installation se limite alors à poser la borne et à la raccorder, pour un coût réduit.",
  },
  {
    slug: "grenoble",
    nom: "Grenoble",
    prep: "à Grenoble",
    dept: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Grenoble, ville leader de la transition énergétique, la borne de recharge à domicile s'impose. Comparez gratuitement les installateurs IRVE certifiés de l'agglomération grenobloise.",
    local:
      "Entre les maisons des communes de la vallée et les copropriétés du centre, la ZFE grenobloise renforce l'intérêt de passer à l'électrique et de recharger chez soi.",
    habitat:
      "À Grenoble, la Zone à Faibles Émissions de la métropole accélère le passage à l'électrique. L'habitat est contrasté : copropriétés denses du centre, où le droit à la prise et la prime ADVENIR sont décisifs, et maisons des communes de la vallée, où la borne se pose simplement au tableau.",
  },

  /* --- Île-de-France : zones pavillonnaires (maison individuelle = installation idéale) --- */

  {
    slug: "enghien-les-bains",
    nom: "Enghien-les-Bains",
    prep: "à Enghien-les-Bains",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Enghien-les-Bains, les villas autour du lac et les quartiers pavillonnaires se prêtent idéalement à l'installation d'une borne de recharge à domicile. Nos installateurs IRVE certifiés du Val-d'Oise interviennent rapidement pour un devis gratuit sous 24h.",
    local:
      "Dans une maison individuelle avec garage ou allée, une borne 7,4 kW en monophasé suffit à recharger toute la nuit — sans les contraintes de la copropriété. La TVA à 5,5 % s'applique directement sur la pose.",
    habitat:
      "À Enghien-les-Bains, les villas autour du lac disposent souvent d'un tableau bien dimensionné : selon vos besoins, nos installateurs posent une borne de 7,4 à 22 kW et programment les plages de charge depuis une application.",
  },
  {
    slug: "montmorency",
    nom: "Montmorency",
    prep: "à Montmorency",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Montmorency, ville de coteaux et de maisons individuelles au nord de Paris, la recharge à domicile s'impose pour les propriétaires de véhicules électriques. Comparez les installateurs IRVE certifiés du Val-d'Oise et recevez 3 devis gratuits.",
    local:
      "Les pavillons de Montmorency disposent presque tous d'un stationnement privatif : l'installation d'une borne y est simple et rapide, généralement en 7,4 kW monophasé.",
    habitat:
      "À Montmorency, ville de collines bordée par sa forêt, l'habitat pavillonnaire prédomine, avec quelques copropriétés dans le centre historique. Maison ou immeuble, nos installateurs adaptent la puissance et le raccordement à votre configuration.",
  },
  {
    slug: "ermont",
    nom: "Ermont",
    prep: "à Ermont",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Ermont, commune résidentielle du Val-d'Oise, installer une borne de recharge dans son garage ou sur sa place privative est le moyen le plus économique de rouler électrique. Nos installateurs IRVE certifiés vous établissent un devis gratuit.",
    local:
      "Maison de ville ou pavillon avec allée : nos partenaires évaluent la distance au tableau électrique pour un devis juste, avec la TVA réduite à 5,5 % déjà intégrée.",
    habitat:
      "À Ermont, l'habitat mêle pavillons de la vallée de Montmorency et petites copropriétés proches de la gare d'Ermont-Eaubonne. Pour une maison, la borne se raccorde directement au tableau ; en immeuble avec parking, le droit à la prise et la prime ADVENIR permettent d'équiper votre place sans accord préalable de tous les copropriétaires.",
  },
  {
    slug: "franconville",
    nom: "Franconville",
    prep: "à Franconville",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Franconville, l'une des grandes villes pavillonnaires du Val-d'Oise, la borne de recharge à domicile séduit de plus en plus de foyers. Recevez jusqu'à 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Avec une majorité de maisons individuelles, Franconville est idéale pour une recharge nocturne : une borne 7,4 kW monophasé recharge votre véhicule pendant la nuit à tarif réduit.",
    habitat:
      "À Franconville, les quartiers résidentiels du Val-d'Oise sont dominés par la maison individuelle avec garage ou allée. La distance entre le tableau et l'emplacement de la borne y est souvent courte, ce qui limite le coût du câblage et rend le devis compétitif.",
  },
  {
    slug: "le-vesinet",
    nom: "Le Vésinet",
    prep: "au Vésinet",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "Au Vésinet, ville-parc réputée pour ses grandes propriétés et ses pavillons arborés, l'installation d'une borne de recharge à domicile est un vrai atout. Nos installateurs IRVE certifiés des Yvelines interviennent pour un devis gratuit.",
    local:
      "Les vastes terrains du Vésinet impliquent parfois une distance importante entre le tableau et la borne : nos partenaires chiffrent précisément le câblage pour éviter toute mauvaise surprise.",
    habitat:
      "Au Vésinet, sur les grands terrains arborés, nos installateurs privilégient un cheminement discret et protégé du câble entre le tableau et la borne, pour préserver l'esthétique de la propriété tout en respectant la norme.",
  },
  {
    slug: "chatou",
    nom: "Chatou",
    prep: "à Chatou",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Chatou, sur les bords de Seine, les quartiers pavillonnaires se prêtent parfaitement à la recharge électrique à domicile. Comparez gratuitement les installateurs IRVE certifiés des Yvelines.",
    local:
      "Dans une maison individuelle avec garage, la pose d'une borne 7,4 kW se fait en quelques heures, TVA à 5,5 % comprise et sans démarche en copropriété.",
    habitat:
      "À Chatou, l'habitat est très majoritairement pavillonnaire : maisons avec jardin et stationnement privatif le long de la Seine et près de l'Île des Impressionnistes. Dans ce type de logement, une borne murale 7,4 kW se pose en quelques heures, sans démarche de copropriété, et reste bien plus sûre qu'une prise domestique.",
  },
  {
    slug: "maisons-laffitte",
    nom: "Maisons-Laffitte",
    prep: "à Maisons-Laffitte",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Maisons-Laffitte, la « cité du cheval » et les pavillons de son parc offrent le cadre idéal pour installer une borne de recharge chez soi. Nos installateurs IRVE certifiés vous accompagnent avec un devis gratuit sous 24h.",
    local:
      "Les maisons du parc de Maisons-Laffitte disposent d'un stationnement privatif : une borne dédiée y est plus sûre et plus rapide qu'une simple prise renforcée.",
    habitat:
      "À Maisons-Laffitte, une borne programmée sur les heures creuses recharge votre véhicule pendant la nuit au tarif le plus bas ; sur les grandes parcelles du parc, nos installateurs anticipent la longueur de câble nécessaire dès le devis.",
  },
  {
    slug: "rueil-malmaison",
    nom: "Rueil-Malmaison",
    prep: "à Rueil-Malmaison",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Rueil-Malmaison, grande ville résidentielle des Hauts-de-Seine, l'installation d'une borne de recharge à domicile accompagne le passage à l'électrique. Recevez 3 devis d'installateurs IRVE certifiés.",
    local:
      "Entre pavillons et petites copropriétés, nos partenaires adaptent la solution à votre habitat : 7,4 kW en maison individuelle, prime ADVENIR en copropriété.",
    habitat:
      "À Rueil-Malmaison, une borne connectée vous laisse suivre la consommation, verrouiller l'accès et lancer la charge à distance depuis votre smartphone — pratique en maison comme sur une place de résidence partagée.",
  },
  {
    slug: "le-plessis-robinson",
    nom: "Le Plessis-Robinson",
    prep: "au Plessis-Robinson",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "Au Plessis-Robinson, ville fleurie aux quartiers pavillonnaires soignés, recharger sa voiture électrique à domicile devient la norme. Comparez les installateurs IRVE certifiés des Hauts-de-Seine.",
    local:
      "De nombreux logements du Plessis-Robinson bénéficient d'un stationnement privatif, idéal pour une borne 7,4 kW rechargée pendant la nuit.",
    habitat:
      "Au Plessis-Robinson, réputé pour son renouveau urbain, l'habitat associe maisons de ville et résidences récentes souvent dotées de parkings. Selon votre logement, nos installateurs posent une borne au tableau ou accompagnent la demande de droit à la prise en copropriété.",
  },
  {
    slug: "garches",
    nom: "Garches",
    prep: "à Garches",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Garches, commune résidentielle prisée de l'ouest parisien, la borne de recharge à domicile s'impose pour les propriétaires de véhicules électriques. Devis gratuit sous 24h par un installateur IRVE certifié.",
    local:
      "Villas et pavillons de Garches disposent d'un garage ou d'une allée : l'installation d'une borne dédiée y est simple, avec TVA réduite à 5,5 %.",
    habitat:
      "À Garches, sur un usage quotidien, une borne dédiée est plus sûre qu'une prise renforcée : elle intègre sa propre protection différentielle et communique avec le véhicule pour couper le courant en cas d'anomalie.",
  },
  {
    slug: "saint-maur-des-fosses",
    nom: "Saint-Maur-des-Fossés",
    prep: "à Saint-Maur-des-Fossés",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Saint-Maur-des-Fossés, l'une des plus grandes villes pavillonnaires du Val-de-Marne dans sa boucle de Marne, la recharge à domicile est incontournable. Nos installateurs IRVE certifiés établissent votre devis gratuit.",
    local:
      "Des quartiers de La Varenne, Adamville ou du Vieux Saint-Maur, presque toutes les maisons ont un stationnement privatif : une borne 7,4 kW monophasé y recharge votre véhicule chaque nuit.",
    habitat:
      "À Saint-Maur-des-Fossés, équiper sa maison d'une borne, c'est aussi valoriser le bien : dans ces quartiers recherchés de la boucle de Marne, un stationnement déjà prêt pour l'électrique séduit acquéreurs et locataires.",
  },
  {
    slug: "nogent-sur-marne",
    nom: "Nogent-sur-Marne",
    prep: "à Nogent-sur-Marne",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Nogent-sur-Marne, ville résidentielle des bords de Marne, installer une borne de recharge chez soi est un vrai plus. Comparez gratuitement les installateurs IRVE certifiés du Val-de-Marne.",
    local:
      "Maisons de ville et pavillons de Nogent se prêtent à une pose rapide ; en petite copropriété, la prime ADVENIR jusqu'à 960 € s'ajoute à la TVA réduite.",
    habitat:
      "À Nogent-sur-Marne, la recharge nocturne programmée revient à quelques euros pour 100 km, très loin du coût d'un plein — un calcul vite rentabilisé pour les trajets quotidiens vers Paris.",
  },
  {
    slug: "le-perreux-sur-marne",
    nom: "Le Perreux-sur-Marne",
    prep: "au Perreux-sur-Marne",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "Au Perreux-sur-Marne, commune pavillonnaire prisée du Val-de-Marne, la borne de recharge à domicile accompagne la transition vers l'électrique. Recevez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Avec une forte proportion de maisons individuelles, Le Perreux est idéal pour une recharge nocturne en 7,4 kW, à un tarif bien inférieur aux bornes publiques.",
    habitat:
      "Au Perreux-sur-Marne, les quartiers des bords de Marne sont surtout composés de maisons individuelles avec stationnement privatif. Un logement idéal pour une borne dédiée : recharge complète pendant la nuit, sans dépendre des bornes publiques.",
  },
  {
    slug: "sucy-en-brie",
    nom: "Sucy-en-Brie",
    prep: "à Sucy-en-Brie",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Sucy-en-Brie, ville verte et pavillonnaire du Val-de-Marne, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent un devis gratuit.",
    local:
      "Les pavillons de Sucy disposent d'un garage ou d'une allée : la pose d'une borne 7,4 kW s'y fait rapidement, sans démarche en copropriété.",
    habitat:
      "À Sucy-en-Brie, pour éviter de surdimensionner votre abonnement, une borne à délestage dynamique répartit la puissance disponible : elle réduit automatiquement la charge quand d'autres appareils consomment, puis l'accélère ensuite.",
  },
  {
    slug: "le-raincy",
    nom: "Le Raincy",
    prep: "au Raincy",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "Au Raincy, ville résidentielle de Seine-Saint-Denis connue pour ses pavillons et ses avenues arborées, la borne de recharge à domicile s'impose. Comparez les installateurs IRVE certifiés proches de chez vous.",
    local:
      "Les maisons du Raincy bénéficient presque toutes d'un stationnement privatif : une borne dédiée y est plus rapide et plus sûre qu'une prise renforcée.",
    habitat:
      "Au Raincy, au-delà des pavillons et des avenues arborées, certaines résidences disposent de parkings collectifs. Le droit à la prise permet d'y installer votre borne sur votre emplacement, et la prime ADVENIR (jusqu'à 960 €) réduit nettement la facture.",
  },
  {
    slug: "gagny",
    nom: "Gagny",
    prep: "à Gagny",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Gagny, grande commune pavillonnaire de Seine-Saint-Denis, l'installation d'une borne de recharge à domicile séduit de plus en plus de foyers. Recevez jusqu'à 3 devis d'installateurs IRVE certifiés.",
    local:
      "Avec ses nombreux pavillons, Gagny est idéale pour une recharge nocturne : une borne 7,4 kW monophasé recharge votre véhicule pendant la nuit, TVA à 5,5 % incluse.",
    habitat:
      "À Gagny, sur les coteaux de l'est parisien, l'habitat pavillonnaire domine, avec de nombreuses maisons disposant d'un garage ou d'une cour. Une borne dédiée y remplace avantageusement la prise renforcée pour recharger la nuit, en heures creuses.",
  },
  {
    slug: "les-pavillons-sous-bois",
    nom: "Les Pavillons-sous-Bois",
    prep: "aux Pavillons-sous-Bois",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "Aux Pavillons-sous-Bois, commune de Seine-Saint-Denis au tissu essentiellement pavillonnaire, la recharge électrique à domicile est un choix évident. Nos installateurs IRVE certifiés établissent votre devis gratuit sous 24h.",
    local:
      "Comme son nom l'indique, la ville est faite de maisons individuelles avec stationnement privatif : le cadre parfait pour une borne 7,4 kW rechargée la nuit.",
    habitat:
      "Aux Pavillons-sous-Bois, l'habitat porte bien son nom : la maison individuelle avec stationnement y est la norme. La borne se raccorde directement au tableau, souvent proche du garage, pour une installation rapide et un devis maîtrisé.",
  },
  {
    slug: "yerres",
    nom: "Yerres",
    prep: "à Yerres",
    dept: "Essonne (91)",
    region: "Île-de-France",
    intro:
      "À Yerres, ville pavillonnaire et verdoyante de l'Essonne, installer une borne de recharge dans son garage ou sur son allée est simple et économique. Comparez gratuitement les installateurs IRVE certifiés.",
    local:
      "Les maisons individuelles de Yerres se prêtent à une recharge nocturne en 7,4 kW monophasé, à un tarif bien inférieur aux bornes publiques.",
    habitat:
      "À Yerres, sur les nombreuses maisons anciennes, nos installateurs vérifient d'abord le tableau et la mise à la terre : une borne conforme à la norme NF C 15-100 protège durablement l'installation, ce qu'une simple prise ne garantit pas.",
  },
  {
    slug: "verrieres-le-buisson",
    nom: "Verrières-le-Buisson",
    prep: "à Verrières-le-Buisson",
    dept: "Essonne (91)",
    region: "Île-de-France",
    intro:
      "À Verrières-le-Buisson, commune résidentielle et boisée de l'Essonne, la borne de recharge à domicile accompagne le passage à l'électrique. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Pavillons avec garage ou allée : nos partenaires évaluent la distance au tableau électrique pour un devis précis, avec la TVA réduite à 5,5 % déjà intégrée.",
    habitat:
      "À Verrières-le-Buisson, une borne connectée programme la charge sur les heures creuses et affiche votre consommation en temps réel : vous gardez la main sur le budget, sans y penser au quotidien.",
  },
  {
    slug: "sarcelles",
    nom: "Sarcelles",
    prep: "à Sarcelles",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Sarcelles, dans le Val-d'Oise, l'installation d'une borne de recharge concerne aussi bien les maisons individuelles que les copropriétés. Nos installateurs IRVE certifiés interviennent rapidement et vous transmettent 3 devis gratuits sous 24h.",
    local:
      "Des Flanades aux quartiers pavillonnaires de Sarcelles-Village, nos partenaires adaptent la pose — wallbox en garage ou borne sur parking collectif — avec la prime ADVENIR en copropriété et la TVA à 5,5 %.",
    habitat:
      "À Sarcelles, en grand ensemble, la démarche est balisée : notification au syndic, étude de l'installation, puis pose sur votre place. La prime ADVENIR peut couvrir une large part du coût des infrastructures collectives.",
  },
  {
    slug: "argenteuil",
    nom: "Argenteuil",
    prep: "à Argenteuil",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Argenteuil, plus grande ville du Val-d'Oise, la recharge à domicile séduit pavillons et copropriétés. Comparez gratuitement des installateurs IRVE certifiés et recevez 3 devis sous 24h.",
    local:
      "Des bords de Seine aux coteaux d'Orgemont et du Val d'Argent, nos partenaires ajustent la puissance (7,4 kW monophasé, 11/22 kW triphasé) au logement et à l'abonnement électrique.",
    habitat:
      "À Argenteuil, un emplacement équipé d'une borne devient un atout à la revente ou à la location : l'acheteur d'un véhicule électrique cherche en priorité un logement déjà prêt pour la recharge.",
  },
  {
    slug: "cergy",
    nom: "Cergy",
    prep: "à Cergy",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Cergy, cœur de l'agglomération de Cergy-Pontoise, l'installation d'une borne de recharge accompagne les nombreuses résidences et maisons de ville. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des quartiers de l'Axe Majeur aux résidences récentes, nos partenaires dimensionnent l'installation du garage individuel au parking de copropriété, dans le respect de la norme NF C 15-100.",
    habitat:
      "À Cergy, une partie du parc récent est déjà pré-câblée pour la recharge, conformément à la réglementation sur les bâtiments neufs : l'installation se résume alors à poser et raccorder la borne, pour un coût contenu.",
  },
  {
    slug: "pontoise",
    nom: "Pontoise",
    prep: "à Pontoise",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Pontoise, ville historique des bords de l'Oise, faites installer votre borne de recharge par un professionnel IRVE certifié. Recevez 3 devis gratuits sous 24h, aides comprises.",
    local:
      "Entre centre ancien en pente et quartiers pavillonnaires, nos partenaires étudient le cheminement entre le tableau électrique et la borne pour une pose propre et sécurisée.",
    habitat:
      "À Pontoise, dans les rues en pente du centre ancien, l'emplacement de stationnement n'est pas toujours contigu au logement : nos installateurs étudient le tracé le plus court et le plus sûr jusqu'à la borne.",
  },
  {
    slug: "taverny",
    nom: "Taverny",
    prep: "à Taverny",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Taverny, ville pavillonnaire adossée à la forêt de Montmorency, la recharge à domicile est idéale pour recharger la nuit à moindre coût. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Les maisons individuelles avec garage ou allée se prêtent à une borne 7,4 kW, avec la TVA réduite à 5,5 % directement intégrée au devis.",
    habitat:
      "À Taverny, une borne pilotable ajuste sa puissance à votre abonnement et lance la charge en heures creuses automatiquement — inutile de surveiller, la voiture est prête au matin.",
  },
  {
    slug: "sannois",
    nom: "Sannois",
    prep: "à Sannois",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Sannois, commune pavillonnaire des coteaux du Val-d'Oise, installer une borne de recharge dans son garage est simple et rentable. Comparez gratuitement les installateurs IRVE certifiés.",
    local:
      "Autour du quartier du Moulin et des zones résidentielles, la maison individuelle domine : nos partenaires posent votre borne jusqu'à 22 kW en toute conformité.",
    habitat:
      "À Sannois, si votre compteur est en triphasé, une borne 11 ou 22 kW recharge en une fraction du temps ; en monophasé, la 7,4 kW suffit largement pour la nuit. Nos installateurs vérifient votre abonnement avant de recommander la puissance.",
  },
  {
    slug: "cormeilles-en-parisis",
    nom: "Cormeilles-en-Parisis",
    prep: "à Cormeilles-en-Parisis",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Cormeilles-en-Parisis, entre buttes du Parisis et nouvelles résidences des Bois-Rochefort, la borne de recharge à domicile accompagne le passage à l'électrique. Devis gratuit sous 24h avec nos installateurs IRVE certifiés.",
    local:
      "Pavillons et maisons de ville : nos partenaires adaptent la puissance au compteur et intègrent la TVA à 5,5 % et la prime ADVENIR le cas échéant.",
    habitat:
      "À Cormeilles-en-Parisis, sur un usage quotidien, la borne dédiée s'impose face à la prise domestique : protection différentielle 30 mA, dialogue avec le véhicule et coupure automatique en cas de défaut.",
  },
  {
    slug: "saint-ouen-laumone",
    nom: "Saint-Ouen-l'Aumône",
    prep: "à Saint-Ouen-l'Aumône",
    dept: "Val-d'Oise (95)",
    region: "Île-de-France",
    intro:
      "À Saint-Ouen-l'Aumône, aux portes de Cergy, la recharge concerne autant les particuliers que les entreprises de sa vaste zone d'activités. Nos installateurs IRVE certifiés couvrent tous les besoins, avec 3 devis gratuits sous 24h.",
    local:
      "Des quartiers résidentiels aux parkings d'entreprise, nos partenaires installent aussi bien une wallbox domestique que des bornes multiples pour flotte, en coordonnant avec Enedis si besoin.",
    habitat:
      "À Saint-Ouen-l'Aumône, côté résidentiel, une borne à domicile supprime les détours par les stations : on recharge chez soi, la nuit, et l'on récupère chaque matin l'autonomie nécessaire aux trajets de la journée.",
  },
  {
    slug: "versailles",
    nom: "Versailles",
    prep: "à Versailles",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Versailles, ville royale des Yvelines, l'installation d'une borne de recharge concerne aussi bien les maisons de ville que les copropriétés du centre. Nos installateurs IRVE certifiés vous transmettent 3 devis gratuits sous 24h.",
    local:
      "Des quartiers pavillonnaires de Montreuil et Clagny aux immeubles de Notre-Dame et Saint-Louis, nos partenaires adaptent la pose — raccordement direct en maison ou droit à la prise en copropriété.",
    habitat:
      "À Versailles, dans les quartiers anciens, nos installateurs soignent l'intégration : cheminement de câble discret et borne au design sobre, pour respecter le cachet du bâti tout en gagnant en confort d'usage.",
  },
  {
    slug: "saint-germain-en-laye",
    nom: "Saint-Germain-en-Laye",
    prep: "à Saint-Germain-en-Laye",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Saint-Germain-en-Laye, ville résidentielle cossue bordée par sa forêt, la recharge à domicile séduit les nombreuses maisons individuelles. Comparez gratuitement des installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Villas et pavillons du Bel-Air ou d'Hennemont : nos partenaires posent une borne de 7,4 à 22 kW dans le garage ou sur la place privative, TVA 5,5 % intégrée au devis.",
    habitat:
      "À Saint-Germain-en-Laye, la recharge programmée sur les heures creuses ramène le coût du kilomètre électrique à quelques centimes ; sur les grandes propriétés, nos installateurs anticipent la longueur de câble dès l'étude.",
  },
  {
    slug: "poissy",
    nom: "Poissy",
    prep: "à Poissy",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Poissy, berceau de l'industrie automobile, la mobilité électrique fait partie de l'ADN local. Faites installer votre borne de recharge par un professionnel IRVE certifié et recevez 3 devis sous 24h.",
    local:
      "Des quartiers pavillonnaires de Beauregard aux copropriétés du centre, nos partenaires dimensionnent l'installation selon votre logement et votre abonnement électrique.",
    habitat:
      "À Poissy, terre d'automobile, passer à l'électrique se prolonge naturellement à la maison : une borne connectée pilote la charge, suit la consommation et s'adapte à votre abonnement sans le saturer.",
  },
  {
    slug: "sartrouville",
    nom: "Sartrouville",
    prep: "à Sartrouville",
    dept: "Yvelines (78)",
    region: "Île-de-France",
    intro:
      "À Sartrouville, grande ville pavillonnaire des bords de Seine, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Les maisons individuelles avec garage se prêtent à une recharge nocturne en 7,4 kW, à un tarif bien inférieur aux bornes publiques.",
    habitat:
      "À Sartrouville, avant la pose, nos installateurs contrôlent le tableau et la terre du logement : une borne conforme NF C 15-100 encaisse une charge quotidienne sans échauffement, contrairement à une prise standard.",
  },
  {
    slug: "nanterre",
    nom: "Nanterre",
    prep: "à Nanterre",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Nanterre, préfecture des Hauts-de-Seine entre La Défense et zones pavillonnaires, l'installation d'une borne de recharge concerne particuliers et copropriétés. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Du Mont-Valérien au Petit-Nanterre, nos partenaires raccordent votre garage ou montent le dossier du droit à la prise en immeuble collectif.",
    habitat:
      "À Nanterre, sur un abonnement modeste, le délestage dynamique de la borne évite tout disjonctage : elle abaisse la puissance de charge quand le logement consomme, puis la restitue ensuite, sans intervention de votre part.",
  },
  {
    slug: "boulogne-billancourt",
    nom: "Boulogne-Billancourt",
    prep: "à Boulogne-Billancourt",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Boulogne-Billancourt, ville dense des Hauts-de-Seine, la recharge se fait surtout en copropriété avec parking. Nos installateurs IRVE certifiés maîtrisent le droit à la prise et vous remettent 3 devis sous 24h.",
    local:
      "Parkings souterrains et résidences : nos partenaires coordonnent avec le syndic et intègrent la prime ADVENIR (jusqu'à 960 €) au devis.",
    habitat:
      "À Boulogne-Billancourt, en parking souterrain, une borne communicante permet une facturation individuelle de l'électricité consommée — un point clé pour convaincre le syndic et les autres copropriétaires.",
  },
  {
    slug: "colombes",
    nom: "Colombes",
    prep: "à Colombes",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Colombes, quatrième ville des Hauts-de-Seine à l'habitat mixte, installer une borne de recharge s'adapte aussi bien aux pavillons qu'aux copropriétés. Devis gratuit sous 24h avec nos installateurs IRVE certifiés.",
    local:
      "Des Fossés-Jean au Petit-Colombes, nos partenaires évaluent la distance au tableau électrique pour un devis juste, sans mauvaise surprise.",
    habitat:
      "À Colombes, entre pavillons et copropriétés, nos installateurs proposent la solution adaptée à chaque cas : raccordement direct au tableau en maison, ou montage du dossier « droit à la prise » avec prime ADVENIR en immeuble collectif.",
  },
  {
    slug: "asnieres-sur-seine",
    nom: "Asnières-sur-Seine",
    prep: "à Asnières-sur-Seine",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Asnières-sur-Seine, ville résidentielle des bords de Seine, la borne de recharge à domicile accompagne le passage à l'électrique. Comparez gratuitement les installateurs IRVE certifiés.",
    local:
      "Entre pavillons des Bourguignons et copropriétés proches de la gare, nos partenaires adaptent la puissance et la pose à chaque logement.",
    habitat:
      "À Asnières-sur-Seine, ville dense des bords de Seine, la recharge se joue surtout en copropriété : une borne pilotable, programmée en heures creuses, y recharge à bas coût sans peser sur l'installation commune.",
  },
  {
    slug: "montreuil",
    nom: "Montreuil",
    prep: "à Montreuil",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Montreuil, deuxième ville d'Île-de-France après Paris, l'installation d'une borne de recharge concerne pavillons du Bas-Montreuil et nombreuses copropriétés. Nos installateurs IRVE certifiés proposent 3 devis sous 24h.",
    local:
      "Des Murs à Pêches aux résidences du haut de la ville, nos partenaires raccordent votre garage ou gèrent le dossier d'assemblée générale.",
    habitat:
      "À Montreuil, des ateliers réhabilités aux maisons de ville, disposer d'une borne chez soi change le quotidien : plus de détour par les stations, une batterie pleine chaque matin et un coût au kilomètre imbattable.",
  },
  {
    slug: "aulnay-sous-bois",
    nom: "Aulnay-sous-Bois",
    prep: "à Aulnay-sous-Bois",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Aulnay-sous-Bois, grande ville pavillonnaire de Seine-Saint-Denis, recharger à domicile est simple pour les nombreuses maisons individuelles. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Du Vieux Pays aux quartiers résidentiels, une borne 7,4 kW en garage recharge la plupart des véhicules en une nuit, TVA 5,5 % comprise.",
    habitat:
      "À Aulnay-sous-Bois, dans les secteurs pavillonnaires, la borne dédiée branchée au tableau recharge la nuit en toute sécurité — protection 30 mA intégrée — là où une prise domestique s'échaufferait à l'usage.",
  },
  {
    slug: "noisy-le-grand",
    nom: "Noisy-le-Grand",
    prep: "à Noisy-le-Grand",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Noisy-le-Grand, ville moderne à la lisière de Marne-la-Vallée, la borne de recharge équipe résidences récentes et maisons individuelles. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Du Mont d'Est aux quartiers pavillonnaires du Village, nos partenaires dimensionnent la borne selon votre logement et votre usage.",
    habitat:
      "À Noisy-le-Grand, les résidences récentes sont fréquemment pré-équipées pour la recharge : nos installateurs posent alors une borne connectée, pilotable à distance et compatible avec la facturation individuelle.",
  },
  {
    slug: "creteil",
    nom: "Créteil",
    prep: "à Créteil",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Créteil, préfecture du Val-de-Marne organisée autour de son lac, l'installation d'une borne de recharge s'adapte aux copropriétés comme aux pavillons. Nos installateurs IRVE certifiés remettent 3 devis sous 24h.",
    local:
      "Du Mont-Mesly au Village, nos partenaires raccordent directement votre garage ou montent le dossier du droit à la prise en résidence.",
    habitat:
      "À Créteil, en grand ensemble comme en résidence, le droit à la prise vous permet d'équiper votre place sans attendre un vote de l'assemblée. Nos installateurs coordonnent l'étude avec le syndic et intègrent la prime ADVENIR.",
  },
  {
    slug: "vincennes",
    nom: "Vincennes",
    prep: "à Vincennes",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Vincennes, ville dense proche du bois et du château, la recharge se fait surtout en copropriété. Nos installateurs IRVE certifiés maîtrisent le droit à la prise et vous transmettent 3 devis sous 24h.",
    local:
      "Parkings souterrains et résidences : nos partenaires coordonnent avec le syndic pour équiper votre place, prime ADVENIR à l'appui.",
    habitat:
      "À Vincennes, aux portes du bois, l'habitat est surtout collectif : en parking d'immeuble, une borne communicante mesure précisément votre consommation pour une refacturation juste entre copropriétaires.",
  },
  {
    slug: "vitry-sur-seine",
    nom: "Vitry-sur-Seine",
    prep: "à Vitry-sur-Seine",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Vitry-sur-Seine, plus grande ville du Val-de-Marne, la borne de recharge concerne particuliers, copropriétés et entreprises. Comparez gratuitement les installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Des quartiers pavillonnaires du Plateau aux grandes résidences, nos partenaires adaptent chaque installation, du garage individuel au parking collectif.",
    habitat:
      "À Vitry-sur-Seine, recharger chez soi la nuit revient à une fraction du prix des bornes publiques : sur des trajets quotidiens vers Paris, l'installation d'une borne est rentabilisée en quelques mois.",
  },
  {
    slug: "evry-courcouronnes",
    nom: "Évry-Courcouronnes",
    prep: "à Évry-Courcouronnes",
    dept: "Essonne (91)",
    region: "Île-de-France",
    intro:
      "À Évry-Courcouronnes, préfecture de l'Essonne, installer une borne de recharge accompagne résidences et maisons de ville. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des quartiers pavillonnaires aux copropriétés du centre, nos partenaires évaluent la puissance adaptée à votre compteur et intègrent la TVA 5,5 %.",
    habitat:
      "À Évry-Courcouronnes, nos installateurs dimensionnent la borne selon l'habitat : 7,4 kW pour un pavillon en monophasé, solution mutualisée en résidence, avec le droit à la prise pour sécuriser votre place.",
  },
  {
    slug: "massy",
    nom: "Massy",
    prep: "à Massy",
    dept: "Essonne (91)",
    region: "Île-de-France",
    intro:
      "À Massy, ville dynamique de l'Essonne reliée au pôle scientifique de Saclay, la recharge à domicile séduit pavillons et résidences. Comparez gratuitement les installateurs IRVE certifiés.",
    local:
      "Maisons individuelles avec garage ou allée : nos partenaires posent une borne de 7,4 à 22 kW rapidement, sans démarche lourde en maison.",
    habitat:
      "À Massy, les quartiers récents autour des gares sont souvent pré-câblés pour la recharge : la pose se limite à installer une borne connectée et à la programmer sur vos heures creuses.",
  },
  {
    slug: "meaux",
    nom: "Meaux",
    prep: "à Meaux",
    dept: "Seine-et-Marne (77)",
    region: "Île-de-France",
    intro:
      "À Meaux, sous-préfecture de Seine-et-Marne dominée par sa cathédrale, la borne de recharge à domicile accompagne la transition électrique. Nos installateurs IRVE certifiés remettent 3 devis sous 24h.",
    local:
      "Du centre historique aux quartiers pavillonnaires de Beauval, nos partenaires adaptent l'installation à chaque logement, maison ou copropriété.",
    habitat:
      "À Meaux, l'habitat plus pavillonnaire qu'en petite couronne facilite l'installation : la borne se fixe au garage ou en façade, se raccorde au tableau et recharge la nuit au tarif heures creuses.",
  },
  {
    slug: "chelles",
    nom: "Chelles",
    prep: "à Chelles",
    dept: "Seine-et-Marne (77)",
    region: "Île-de-France",
    intro:
      "À Chelles, plus grande ville de Seine-et-Marne aux bords de Marne, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent un devis gratuit.",
    local:
      "Les nombreuses maisons individuelles de Chelles se prêtent à une recharge nocturne en 7,4 kW, à un tarif bien inférieur aux bornes publiques.",
    habitat:
      "À Chelles, la maison individuelle domine : une borne dédiée, plus sûre et plus rapide qu'une prise renforcée, vous rend l'autonomie chaque nuit sans jamais dépendre des bornes publiques.",
  },
  {
    slug: "reims",
    nom: "Reims",
    prep: "à Reims",
    dept: "Marne (51)",
    region: "Grand Est",
    intro:
      "À Reims, capitale du champagne, l'installation d'une borne de recharge à domicile séduit maisons de ville et copropriétés. Nos installateurs IRVE certifiés vous transmettent 3 devis gratuits sous 24h.",
    local:
      "Des quartiers pavillonnaires de la périphérie aux immeubles du centre historique, nos partenaires adaptent la puissance (7,4 à 22 kW) et la pose à chaque logement, TVA 5,5 % comprise.",
    habitat:
      "À Reims, entre maisons de ville et copropriétés, la recharge à domicile accompagne l'amélioration de la qualité de l'air : programmée la nuit, elle profite des heures creuses et d'un coût au kilomètre très bas.",
  },
  {
    slug: "le-havre",
    nom: "Le Havre",
    prep: "au Havre",
    dept: "Seine-Maritime (76)",
    region: "Normandie",
    intro:
      "Au Havre, grand port normand à l'architecture reconstruite classée à l'UNESCO, recharger sa voiture électrique à domicile est simple et économique. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des pavillons des hauteurs de Sanvic et Bléville aux appartements du centre Perret, nos partenaires dimensionnent l'installation selon votre logement et votre abonnement électrique.",
    habitat:
      "Au Havre, des quartiers reconstruits aux pavillons des hauteurs, une borne à domicile valorise le logement et supprime les contraintes de la recharge publique. Nos installateurs adaptent la fixation aux façades exposées au vent du littoral.",
  },
  {
    slug: "saint-etienne",
    nom: "Saint-Étienne",
    prep: "à Saint-Étienne",
    dept: "Loire (42)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Saint-Étienne, ville du design et de la métropole stéphanoise, l'installation d'une borne de recharge accompagne pavillons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des maisons de ville des collines aux immeubles du centre, nos partenaires évaluent la distance au tableau électrique pour un devis juste, sans mauvaise surprise.",
    habitat:
      "À Saint-Étienne, ville étirée sur ses collines, l'habitat va des maisons de faubourg aux copropriétés : nos installateurs étudient le relief et la distance au tableau pour un raccordement propre, en maison comme en parking collectif.",
  },
  {
    slug: "toulon",
    nom: "Toulon",
    prep: "à Toulon",
    dept: "Var (83)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Toulon, blottie autour de sa rade méditerranéenne, la recharge à domicile est idéale pour recharger la nuit à moindre coût. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Villas du Mourillon, maisons du Cap Brun ou copropriétés du centre : nos partenaires adaptent la borne (7,4 à 22 kW) au type de logement et au compteur.",
    habitat:
      "À Toulon, le fort ensoleillement rend l'autoconsommation intéressante : associée à des panneaux, une borne pilotée recharge en priorité sur votre production solaire. Nos installateurs calibrent l'ensemble selon la maison et la place de stationnement.",
  },
  {
    slug: "dijon",
    nom: "Dijon",
    prep: "à Dijon",
    dept: "Côte-d'Or (21)",
    region: "Bourgogne-Franche-Comté",
    intro:
      "À Dijon, capitale des Ducs de Bourgogne, installer une borne de recharge à domicile séduit pavillons et copropriétés. Comparez gratuitement des installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Des quartiers résidentiels des Grésilles et de la Toison d'Or aux hôtels particuliers du centre, nos partenaires posent votre borne en toute conformité NF C 15-100.",
    habitat:
      "À Dijon, où les hivers sont marqués, la borne branchée permet de préconditionner l'habitacle et la batterie avant le départ : la voiture est à température sans entamer l'autonomie, et la charge se fait la nuit en heures creuses.",
  },
  {
    slug: "angers",
    nom: "Angers",
    prep: "à Angers",
    dept: "Maine-et-Loire (49)",
    region: "Pays de la Loire",
    intro:
      "À Angers, ville verte réputée pour sa douceur de vivre, la borne de recharge à domicile accompagne le passage à l'électrique. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Des maisons de Belle-Beille et de la Roseraie aux immeubles du centre historique, nos partenaires adaptent la puissance et la pose à chaque configuration.",
    habitat:
      "À Angers, régulièrement citée pour sa qualité de vie, une borne à domicile prolonge ce confort : recharge silencieuse la nuit, batterie pleine au réveil et logement valorisé pour une future revente.",
  },
  {
    slug: "nimes",
    nom: "Nîmes",
    prep: "à Nîmes",
    dept: "Gard (30)",
    region: "Occitanie",
    intro:
      "À Nîmes, ville d'art et d'histoire aux arènes romaines, recharger sa voiture électrique à domicile est simple et économique. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Des mas et villas des garrigues aux appartements de l'Écusson, nos partenaires évaluent la distance au tableau pour un devis précis, TVA 5,5 % intégrée.",
    habitat:
      "À Nîmes, sous le climat méditerranéen, nos installateurs privilégient un emplacement de borne à l'abri de la chaleur directe et programment la charge en soirée : l'électronique travaille au frais et vous profitez des heures creuses.",
  },
  {
    slug: "villeurbanne",
    nom: "Villeurbanne",
    prep: "à Villeurbanne",
    dept: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Villeurbanne, deuxième ville de la métropole de Lyon, l'installation d'une borne de recharge concerne surtout les copropriétés et quelques secteurs pavillonnaires. Nos installateurs IRVE certifiés proposent 3 devis sous 24h.",
    local:
      "Des Gratte-Ciel aux quartiers résidentiels, nos partenaires maîtrisent le droit à la prise en copropriété et intègrent la prime ADVENIR au devis.",
    habitat:
      "À Villeurbanne, ville dense de la métropole lyonnaise, la recharge se fait surtout en copropriété : une borne communicante en parking d'immeuble mesure la consommation de chacun pour une refacturation équitable, prime ADVENIR à l'appui.",
  },
  {
    slug: "le-mans",
    nom: "Le Mans",
    prep: "au Mans",
    dept: "Sarthe (72)",
    region: "Pays de la Loire",
    intro:
      "Au Mans, ville des 24 Heures et de la cité Plantagenêt, la recharge à domicile est idéale pour les nombreuses maisons individuelles. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Une borne 7,4 kW en garage recharge la plupart des véhicules en une nuit, à un tarif bien inférieur aux bornes publiques, aides déduites.",
    habitat:
      "Au Mans, terre de l'automobile, l'habitat majoritairement pavillonnaire se prête idéalement à la recharge : borne au garage, charge nocturne en heures creuses et coût au kilomètre sans commune mesure avec l'essence.",
  },
  {
    slug: "aix-en-provence",
    nom: "Aix-en-Provence",
    prep: "à Aix-en-Provence",
    dept: "Bouches-du-Rhône (13)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Aix-en-Provence, ville d'eaux et d'art chère à Cézanne, l'installation d'une borne de recharge séduit bastides et copropriétés. Comparez gratuitement des installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Des villas des quartiers Sud et du Pont-de-l'Arc aux appartements du centre, nos partenaires adaptent la borne au logement et à l'abonnement électrique.",
    habitat:
      "À Aix-en-Provence, des bastides aux résidences de standing, un stationnement équipé d'une borne éligible aux aides est un vrai argument immobilier. Nos installateurs soignent l'intégration esthétique de la borne et du câblage.",
  },
  {
    slug: "brest",
    nom: "Brest",
    prep: "à Brest",
    dept: "Finistère (29)",
    region: "Bretagne",
    intro:
      "À Brest, grand port de la pointe bretonne, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des maisons des quartiers de Saint-Pierre et Lambézellec aux immeubles reconstruits du centre, nos partenaires dimensionnent l'installation selon votre logement.",
    habitat:
      "À Brest, face au climat océanique, nos installateurs posent des bornes conçues pour l'extérieur (indice de protection élevé) et soignent l'étanchéité du raccordement : la recharge reste fiable, pluie ou embruns.",
  },
  {
    slug: "tours",
    nom: "Tours",
    prep: "à Tours",
    dept: "Indre-et-Loire (37)",
    region: "Centre-Val de Loire",
    intro:
      "À Tours, au cœur des châteaux de la Loire, l'installation d'une borne de recharge à domicile accompagne pavillons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des maisons de Sainte-Radegonde et des Prébendes aux appartements du Vieux-Tours, nos partenaires posent votre borne en toute conformité.",
    habitat:
      "À Tours, entre maisons de ville et pavillons des coteaux, la borne à domicile combine économie et confort : charge nocturne en heures creuses, autonomie retrouvée chaque matin et bien immobilier valorisé.",
  },
  {
    slug: "amiens",
    nom: "Amiens",
    prep: "à Amiens",
    dept: "Somme (80)",
    region: "Hauts-de-France",
    intro:
      "À Amiens, ville de la plus grande cathédrale gothique de France, la borne de recharge à domicile séduit maisons de ville et pavillons. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des quartiers résidentiels de Saint-Acheul et Henriville aux abords des hortillonnages, nos partenaires adaptent la puissance et la pose à chaque logement.",
    habitat:
      "À Amiens, sur un usage quotidien et par temps froid, la borne dédiée reste bien plus sûre qu'une prise domestique : protection différentielle intégrée, conformité NF C 15-100 et dialogue permanent avec le véhicule.",
  },
  {
    slug: "annecy",
    nom: "Annecy",
    prep: "à Annecy",
    dept: "Haute-Savoie (74)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Annecy, la « Venise des Alpes » au bord de son lac, l'installation d'une borne de recharge à domicile est prisée des maisons individuelles. Nos installateurs IRVE certifiés vous proposent 3 devis sous 24h.",
    local:
      "Des villas des coteaux et de Seynod aux copropriétés du centre, nos partenaires adaptent la borne (7,4 à 22 kW) au compteur, TVA 5,5 % comprise.",
    habitat:
      "À Annecy, entre lac et montagnes, le froid hivernal réduit l'autonomie : brancher la borne permet de préchauffer la batterie avant de partir et de compenser cette baisse, tout en rechargeant la nuit en heures creuses.",
  },
  {
    slug: "perpignan",
    nom: "Perpignan",
    prep: "à Perpignan",
    dept: "Pyrénées-Orientales (66)",
    region: "Occitanie",
    intro:
      "À Perpignan, cité catalane baignée de soleil, recharger sa voiture électrique à domicile est idéal pour recharger la nuit à moindre coût. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des villas des quartiers résidentiels aux appartements du centre catalan, nos partenaires évaluent la distance au tableau pour un devis juste.",
    habitat:
      "À Perpignan, sous le soleil catalan, nos installateurs placent la borne à l'abri de la chaleur directe et programment la recharge de nuit ; pour les maisons équipées de panneaux, la charge peut prioriser l'énergie solaire.",
  },
  {
    slug: "metz",
    nom: "Metz",
    prep: "à Metz",
    dept: "Moselle (57)",
    region: "Grand Est",
    intro:
      "À Metz, ville d'art à l'architecture jaune de Jaumont, l'installation d'une borne de recharge à domicile accompagne pavillons et copropriétés. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des maisons de Queuleu et Montigny-lès-Metz aux immeubles du centre impérial, nos partenaires posent votre borne en toute conformité NF C 15-100.",
    habitat:
      "À Metz, l'habitat mêle immeubles du centre et maisons de la périphérie : selon le cas, nos installateurs raccordent la borne au tableau ou montent le dossier « droit à la prise » en copropriété, avec la prime ADVENIR.",
  },
  {
    slug: "besancon",
    nom: "Besançon",
    prep: "à Besançon",
    dept: "Doubs (25)",
    region: "Bourgogne-Franche-Comté",
    intro:
      "À Besançon, capitale horlogère lovée dans une boucle du Doubs, la borne de recharge à domicile séduit maisons et copropriétés. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des maisons des collines de Bregille et Planoise aux appartements du centre, nos partenaires adaptent la borne au logement et à l'abonnement électrique.",
    habitat:
      "À Besançon, dans la boucle du Doubs et sur ses collines, nos installateurs étudient le cheminement du câble jusqu'à la borne ; par temps froid, le préconditionnement de la batterie, borne branchée, préserve l'autonomie.",
  },
  {
    slug: "orleans",
    nom: "Orléans",
    prep: "à Orléans",
    dept: "Loiret (45)",
    region: "Centre-Val de Loire",
    intro:
      "À Orléans, cité de Jeanne d'Arc sur les bords de Loire, l'installation d'une borne de recharge à domicile accompagne pavillons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des maisons de La Source et Saint-Marceau aux immeubles du centre, nos partenaires dimensionnent l'installation selon votre logement et votre usage.",
    habitat:
      "À Orléans, les quartiers récents de la métropole sont souvent pré-câblés pour la recharge, tandis que les pavillons se raccordent simplement au tableau : dans les deux cas, la charge de nuit en heures creuses réduit fortement la facture.",
  },
  {
    slug: "rouen",
    nom: "Rouen",
    prep: "à Rouen",
    dept: "Seine-Maritime (76)",
    region: "Normandie",
    intro:
      "À Rouen, ville aux cent clochers immortalisée par Monet, recharger sa voiture électrique à domicile est simple et économique. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Des maisons des coteaux de Bihorel et Mont-Saint-Aignan aux appartements du centre médiéval, nos partenaires adaptent la puissance et la pose à chaque logement.",
    habitat:
      "À Rouen, engagée dans l'amélioration de la qualité de l'air, la recharge à domicile facilite le passage à l'électrique : en copropriété comme en maison, nos installateurs adaptent la solution et intègrent les aides disponibles.",
  },
  {
    slug: "mulhouse",
    nom: "Mulhouse",
    prep: "à Mulhouse",
    dept: "Haut-Rhin (68)",
    region: "Grand Est",
    intro:
      "À Mulhouse, ville industrielle et musées de l'automobile, l'installation d'une borne de recharge à domicile séduit pavillons et copropriétés. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Des maisons ouvrières de la Cité aux immeubles du centre, nos partenaires évaluent la distance au tableau électrique pour un devis précis, TVA 5,5 % intégrée.",
    habitat:
      "À Mulhouse, beaucoup de logements disposent d'un bon dimensionnement électrique : selon le compteur, une borne 11 kW triphasée accélère la charge, sinon la 7,4 kW monophasée suffit pour une nuit complète.",
  },
  {
    slug: "caen",
    nom: "Caen",
    prep: "à Caen",
    dept: "Calvados (14)",
    region: "Normandie",
    intro:
      "À Caen, cité de Guillaume le Conquérant, la borne de recharge à domicile accompagne le passage à l'électrique. Comparez gratuitement des installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Des maisons de la Guérinière et de Vaucelles aux appartements du centre reconstruit, nos partenaires posent votre borne en toute conformité.",
    habitat:
      "À Caen, des quartiers reconstruits aux pavillons de la périphérie, une borne à domicile ajoute de la valeur au bien et supprime les trajets vers les bornes publiques : on recharge chez soi, la nuit, à moindre coût.",
  },
  {
    slug: "nancy",
    nom: "Nancy",
    prep: "à Nancy",
    dept: "Meurthe-et-Moselle (54)",
    region: "Grand Est",
    intro:
      "À Nancy, joyau de l'Art nouveau autour de la place Stanislas, l'installation d'une borne de recharge à domicile séduit maisons et copropriétés. Nos installateurs IRVE certifiés proposent 3 devis sous 24h.",
    local:
      "Des maisons de Villers-lès-Nancy et du Haut-du-Lièvre aux immeubles du centre, nos partenaires adaptent la borne au logement et au compteur.",
    habitat:
      "À Nancy, dans les immeubles du centre comme dans les maisons des faubourgs, nos installateurs soignent l'intégration de la borne et du câblage, et accompagnent la démarche en copropriété avec la prime ADVENIR.",
  },
  {
    slug: "clermont-ferrand",
    nom: "Clermont-Ferrand",
    prep: "à Clermont-Ferrand",
    dept: "Puy-de-Dôme (63)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Clermont-Ferrand, au pied de la chaîne des Puys, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Des maisons de Chamalières et Montferrand aux appartements du centre en pierre de Volvic, nos partenaires dimensionnent l'installation selon votre logement.",
    habitat:
      "À Clermont-Ferrand, adossée à ses volcans, l'altitude et le froid pèsent sur l'autonomie en hiver : la borne à domicile permet de préchauffer la batterie avant le départ et de recharger la nuit au tarif heures creuses.",
  },
  {
    slug: "avignon",
    nom: "Avignon",
    prep: "à Avignon",
    dept: "Vaucluse (84)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Avignon, cité des Papes au bord du Rhône, l'installation d'une borne de recharge à domicile est idéale pour recharger la nuit à moindre coût. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Des villas des quartiers résidentiels et de Montfavet aux appartements intra-muros, nos partenaires adaptent la borne (7,4 à 22 kW) au type de logement.",
    habitat:
      "À Avignon, entre intra-muros et quartiers résidentiels, une borne éligible aux aides valorise le logement ; nos installateurs adaptent le raccordement au bâti ancien comme aux maisons récentes de la périphérie.",
  },
  {
    slug: "cannes",
    nom: "Cannes",
    prep: "à Cannes",
    dept: "Alpes-Maritimes (06)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Cannes, célèbre pour son festival et sa Croisette, l'installation d'une borne de recharge à domicile séduit villas et copropriétés. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des villas des hauteurs de la Californie aux appartements du centre, nos partenaires adaptent la borne (7,4 à 22 kW) au logement et au compteur.",
    habitat:
      "À Cannes, où l'habitat est très majoritairement collectif, une borne communicante en parking de résidence permet une facturation individuelle précise — un atout pour l'accord du syndic et le partage des coûts.",
  },
  {
    slug: "antibes",
    nom: "Antibes",
    prep: "à Antibes",
    dept: "Alpes-Maritimes (06)",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "À Antibes Juan-les-Pins, entre mer et vieille ville, recharger sa voiture électrique à domicile est idéal pour recharger la nuit à moindre coût. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des villas du Cap d'Antibes aux résidences de Juan-les-Pins, nos partenaires évaluent la distance au tableau pour un devis précis, TVA 5,5 % intégrée.",
    habitat:
      "À Antibes, des villas du Cap aux résidences du front de mer, la recharge à domicile valorise le bien ; sur une maison ensoleillée, coupler la borne à des panneaux photovoltaïques réduit encore le coût de la recharge.",
  },
  {
    slug: "la-rochelle",
    nom: "La Rochelle",
    prep: "à La Rochelle",
    dept: "Charente-Maritime (17)",
    region: "Nouvelle-Aquitaine",
    intro:
      "À La Rochelle, ville portuaire pionnière de la mobilité durable, l'installation d'une borne de recharge à domicile accompagne pavillons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des maisons des Minimes et de Tasdon aux appartements du centre, nos partenaires dimensionnent l'installation selon votre logement et votre usage.",
    habitat:
      "À La Rochelle, ville pionnière de la mobilité douce, nos installateurs posent des bornes prévues pour l'extérieur et bien protégées des embruns : la recharge nocturne reste fiable toute l'année, au plus près de votre logement.",
  },
  {
    slug: "pau",
    nom: "Pau",
    prep: "à Pau",
    dept: "Pyrénées-Atlantiques (64)",
    region: "Nouvelle-Aquitaine",
    intro:
      "À Pau, au pied des Pyrénées, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des villas des coteaux et de Jurançon aux appartements du centre, nos partenaires adaptent la borne au logement et à l'abonnement électrique.",
    habitat:
      "À Pau, au pied des Pyrénées, l'habitat pavillonnaire facilite l'installation : borne au garage, raccordement direct au tableau et charge de nuit en heures creuses, avec préchauffage possible de la batterie les matins frais.",
  },
  {
    slug: "bayonne",
    nom: "Bayonne",
    prep: "à Bayonne",
    dept: "Pyrénées-Atlantiques (64)",
    region: "Nouvelle-Aquitaine",
    intro:
      "À Bayonne, capitale du Pays basque au confluent de l'Adour et de la Nive, la borne de recharge à domicile accompagne le passage à l'électrique. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des maisons basques des quartiers résidentiels aux appartements du Petit Bayonne, nos partenaires posent votre borne en toute conformité NF C 15-100.",
    habitat:
      "À Bayonne, des maisons de ville aux quartiers résidentiels, disposer d'une borne à domicile simplifie le quotidien : plus de détour par les stations, une recharge silencieuse la nuit et un logement valorisé.",
  },
  {
    slug: "colmar",
    nom: "Colmar",
    prep: "à Colmar",
    dept: "Haut-Rhin (68)",
    region: "Grand Est",
    intro:
      "À Colmar, joyau de la route des vins d'Alsace, l'installation d'une borne de recharge à domicile séduit maisons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des maisons alsaciennes des quartiers résidentiels aux appartements de la Petite Venise, nos partenaires adaptent la puissance et la pose à chaque logement.",
    habitat:
      "À Colmar, dans le bâti ancien du centre comme dans les maisons alsaciennes de la périphérie, nos installateurs soignent le cheminement du câble et posent une borne conforme, prête à préchauffer la batterie l'hiver.",
  },
  {
    slug: "chambery",
    nom: "Chambéry",
    prep: "à Chambéry",
    dept: "Savoie (73)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Chambéry, cité des Ducs de Savoie entre lacs et montagnes, recharger sa voiture électrique à domicile est idéal. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Des maisons des coteaux et de Bissy aux appartements du centre historique, nos partenaires évaluent la distance au tableau pour un devis juste.",
    habitat:
      "À Chambéry, entre les massifs, le froid hivernal réduit sensiblement l'autonomie : la borne branchée permet de préconditionner la batterie avant le départ, et la charge de nuit en heures creuses maintient un coût très bas.",
  },
  {
    slug: "valence",
    nom: "Valence",
    prep: "à Valence",
    dept: "Drôme (26)",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "À Valence, porte du Midi sur les bords du Rhône, l'installation d'une borne de recharge à domicile accompagne pavillons et copropriétés. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Des maisons des quartiers résidentiels aux appartements du centre, nos partenaires dimensionnent l'installation selon votre logement.",
    habitat:
      "À Valence, dans la vallée du Rhône, les résidences récentes sont souvent pré-câblées pour la recharge tandis que les pavillons se raccordent au tableau : la charge nocturne en heures creuses réduit nettement la facture.",
  },
  {
    slug: "troyes",
    nom: "Troyes",
    prep: "à Troyes",
    dept: "Aube (10)",
    region: "Grand Est",
    intro:
      "À Troyes, ville d'art aux maisons à pans de bois, la borne de recharge à domicile séduit maisons et copropriétés. Comparez gratuitement des installateurs IRVE certifiés, réponse sous 24h.",
    local:
      "Des pavillons des quartiers résidentiels aux appartements du centre médiéval, nos partenaires adaptent la borne au logement et au compteur.",
    habitat:
      "À Troyes, du centre à pans de bois aux pavillons de la périphérie, nos installateurs adaptent la pose : intégration discrète en secteur ancien, raccordement direct en maison et droit à la prise en copropriété.",
  },
  {
    slug: "beziers",
    nom: "Béziers",
    prep: "à Béziers",
    dept: "Hérault (34)",
    region: "Occitanie",
    intro:
      "À Béziers, ville viticole surplombant l'Orb, recharger sa voiture électrique à domicile est idéal pour recharger la nuit à moindre coût. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des villas des quartiers résidentiels aux appartements du centre, nos partenaires évaluent la distance au tableau pour un devis précis.",
    habitat:
      "À Béziers, sous le climat méditerranéen, nos installateurs placent la borne à l'abri de la chaleur directe et intègrent les aides au devis ; un stationnement équipé valorise durablement le logement.",
  },
  {
    slug: "quimper",
    nom: "Quimper",
    prep: "à Quimper",
    dept: "Finistère (29)",
    region: "Bretagne",
    intro:
      "À Quimper, capitale de la Cornouaille, l'installation d'une borne de recharge à domicile accompagne le passage à l'électrique. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des maisons des quartiers résidentiels de Penhars et Kerfeunteun aux appartements du centre, nos partenaires posent votre borne en toute conformité.",
    habitat:
      "À Quimper, face au climat breton, nous posons des bornes conçues pour l'extérieur, au raccordement parfaitement étanche : la recharge nocturne reste fiable, et vous retrouvez chaque matin l'autonomie utile à vos trajets.",
  },
  {
    slug: "lorient",
    nom: "Lorient",
    prep: "à Lorient",
    dept: "Morbihan (56)",
    region: "Bretagne",
    intro:
      "À Lorient, ville portuaire du Morbihan, recharger sa voiture électrique à domicile est simple et économique. Nos installateurs IRVE certifiés vous proposent 3 devis gratuits sous 24h.",
    local:
      "Des maisons des quartiers résidentiels de Keryado et Merville aux appartements du centre reconstruit, nos partenaires dimensionnent l'installation selon votre logement.",
    habitat:
      "À Lorient, des quartiers reconstruits aux pavillons alentour, une borne extérieure bien protégée assure une recharge fiable toute l'année. Un logement déjà équipé séduit acquéreurs et locataires sensibles à l'électrique.",
  },
  {
    slug: "saint-denis",
    nom: "Saint-Denis",
    prep: "à Saint-Denis",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Saint-Denis, ville historique au nord de Paris et cité de la basilique royale, l'installation d'une borne de recharge concerne pavillons et copropriétés. Nos installateurs IRVE certifiés proposent 3 devis sous 24h.",
    local:
      "Des maisons du Vieux Saint-Denis aux résidences proches du Stade de France, nos partenaires raccordent votre garage ou gèrent le dossier de droit à la prise en copropriété.",
    habitat:
      "À Saint-Denis, où l'habitat collectif domine, la recharge passe par le parking d'immeuble : une borne communicante mesure votre consommation pour une refacturation juste, et le droit à la prise sécurise l'accès à votre place.",
  },
  {
    slug: "neuilly-sur-seine",
    nom: "Neuilly-sur-Seine",
    prep: "à Neuilly-sur-Seine",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Neuilly-sur-Seine, ville résidentielle prisée aux portes de Paris, l'installation d'une borne de recharge concerne surtout les copropriétés et les hôtels particuliers. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Parkings d'immeubles et maisons de maître : nos partenaires maîtrisent le droit à la prise et coordonnent avec le syndic, prime ADVENIR à l'appui.",
    habitat:
      "À Neuilly-sur-Seine, en parking souterrain d'immeuble, nos installateurs posent des bornes communicantes à la facturation individuelle et au design sobre, et accompagnent la validation du projet auprès du syndic.",
  },
  {
    slug: "levallois-perret",
    nom: "Levallois-Perret",
    prep: "à Levallois-Perret",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Levallois-Perret, l'une des villes les plus denses de France, la recharge se fait surtout en copropriété avec parking. Nos installateurs IRVE certifiés maîtrisent le droit à la prise et vous remettent 3 devis sous 24h.",
    local:
      "Parkings souterrains et résidences : nos partenaires coordonnent avec le syndic et intègrent la prime ADVENIR (jusqu'à 960 €) au devis.",
    habitat:
      "À Levallois-Perret, l'une des villes les plus denses de France, tout se joue en copropriété : le droit à la prise vous autorise à équiper votre place de parking, et une borne pilotable préserve l'abonnement de l'immeuble.",
  },
  {
    slug: "issy-les-moulineaux",
    nom: "Issy-les-Moulineaux",
    prep: "à Issy-les-Moulineaux",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Issy-les-Moulineaux, ville tournée vers le numérique au sud-ouest de Paris, l'installation d'une borne de recharge concerne copropriétés et quelques pavillons. Comparez gratuitement des installateurs IRVE certifiés.",
    local:
      "Des résidences des Bords de Seine et du Fort aux maisons des Hauts d'Issy, nos partenaires adaptent la borne au logement, en gérant le droit à la prise en copropriété.",
    habitat:
      "À Issy-les-Moulineaux, ville à la pointe du numérique, les résidences récentes sont fréquemment pré-équipées : nos installateurs y posent des bornes connectées, pilotables à distance et compatibles avec la facturation individuelle.",
  },
  {
    slug: "antony",
    nom: "Antony",
    prep: "à Antony",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Antony, grande ville résidentielle du sud des Hauts-de-Seine, la borne de recharge à domicile séduit pavillons et copropriétés. Nos installateurs IRVE certifiés proposent un devis gratuit sous 24h.",
    local:
      "Des quartiers pavillonnaires du Noyer Doré et de Pajeaud aux résidences du centre, nos partenaires adaptent la puissance et la pose à chaque logement.",
    habitat:
      "À Antony, entre pavillons et grandes copropriétés, nos installateurs proposent la solution adaptée : borne au garage raccordée au tableau, ou installation sur parking collectif via le droit à la prise, charge programmée en heures creuses.",
  },
  {
    slug: "clamart",
    nom: "Clamart",
    prep: "à Clamart",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Clamart, ville verte bordée par la forêt de Meudon, l'installation d'une borne de recharge à domicile concerne maisons et copropriétés. Comparez 3 devis d'installateurs IRVE certifiés sous 24h.",
    local:
      "Des pavillons du Petit-Clamart et de la Plaine aux résidences du centre, nos partenaires raccordent votre garage ou gèrent le dossier en copropriété.",
    habitat:
      "À Clamart, du plateau boisé aux quartiers pavillonnaires, l'habitat est varié : nos installateurs étudient la distance au tableau en maison et montent le dossier « droit à la prise » en copropriété, prime ADVENIR incluse.",
  },
  {
    slug: "drancy",
    nom: "Drancy",
    prep: "à Drancy",
    dept: "Seine-Saint-Denis (93)",
    region: "Île-de-France",
    intro:
      "À Drancy, ville pavillonnaire de Seine-Saint-Denis, recharger sa voiture électrique à domicile est simple pour les nombreuses maisons individuelles. Nos installateurs IRVE certifiés vous proposent un devis gratuit sous 24h.",
    local:
      "Une borne 7,4 kW en garage recharge la plupart des véhicules en une nuit, à un tarif bien inférieur aux bornes publiques, aides déduites.",
    habitat:
      "À Drancy, entre pavillons et résidences, la borne dédiée remplace avantageusement la prise domestique : protection 30 mA, conformité NF C 15-100 et, en immeuble, une solution partagée éligible à la prime ADVENIR.",
  },
  {
    slug: "ivry-sur-seine",
    nom: "Ivry-sur-Seine",
    prep: "à Ivry-sur-Seine",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Ivry-sur-Seine, ville dense aux portes de Paris, la recharge se fait surtout en copropriété. Nos installateurs IRVE certifiés maîtrisent le droit à la prise et vous transmettent 3 devis sous 24h.",
    local:
      "Parkings souterrains et résidences du centre comme d'Ivry-Port : nos partenaires coordonnent avec le syndic, prime ADVENIR à l'appui.",
    habitat:
      "À Ivry-sur-Seine, aux portes de Paris, la recharge se fait surtout en copropriété : une borne pilotable programmée en heures creuses y recharge à bas coût, et le droit à la prise vous garantit l'accès à votre emplacement.",
  },
  {
    slug: "montrouge",
    nom: "Montrouge",
    prep: "à Montrouge",
    dept: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    intro:
      "À Montrouge, commune dense limitrophe du 14e arrondissement, la recharge se joue essentiellement en copropriété. Nos installateurs IRVE certifiés des Hauts-de-Seine maîtrisent le droit à la prise et vous transmettent 3 devis gratuits sous 24h.",
    local:
      "Entre les immeubles du centre et les résidences proches de la porte d'Orléans, la plupart des habitants disposent d'une place en parking souterrain : le droit à la prise permet de l'équiper sans vote de l'assemblée, prime ADVENIR à l'appui.",
    habitat:
      "À Montrouge, plutôt que de dépendre des bornes publiques du secteur, une borne installée sur votre place et programmée en heures creuses recharge à bas coût toute la nuit — la solution la plus économique pour un usage quotidien aux portes de Paris.",
  },
  {
    slug: "choisy-le-roi",
    nom: "Choisy-le-Roi",
    prep: "à Choisy-le-Roi",
    dept: "Val-de-Marne (94)",
    region: "Île-de-France",
    intro:
      "À Choisy-le-Roi, le long de la Seine, l'habitat mêle pavillons et copropriétés — la recharge à domicile s'adapte aux deux. Nos installateurs IRVE certifiés du Val-de-Marne interviennent pour un devis gratuit sous 24h.",
    local:
      "En maison, une borne 7,4 kW se raccorde au tableau et recharge toute la nuit ; en résidence, le droit à la prise permet d'équiper sa place sans attendre l'assemblée générale. La TVA à 5,5 % s'applique dans les deux cas.",
    habitat:
      "À Choisy-le-Roi, les quartiers pavillonnaires des bords de Seine se prêtent bien à une borne à domicile : posée dans le garage ou sur l'allée, elle évite les déplacements vers les bornes publiques et recharge à un coût très inférieur en heures creuses.",
  },
  {
    slug: "morangis",
    nom: "Morangis",
    prep: "à Morangis",
    dept: "Essonne (91)",
    region: "Île-de-France",
    intro:
      "À Morangis, commune pavillonnaire de l'Essonne, la maison individuelle avec garage ou allée est idéale pour une borne de recharge à domicile. Nos installateurs IRVE certifiés interviennent rapidement pour un devis gratuit sous 24h.",
    local:
      "Dans un pavillon avec stationnement privatif, une borne 7,4 kW en monophasé suffit à recharger toute la nuit, sans les contraintes de la copropriété. La TVA à 5,5 % s'applique directement sur la pose.",
    habitat:
      "À Morangis, en grande couronne, la plupart des foyers disposent d'un tableau bien dimensionné : nos installateurs posent une borne de 7,4 à 22 kW pilotable, programmée en heures creuses, bien plus économique que les bornes publiques du secteur.",
  },
];

export const villeBySlug = (slug: string) => VILLES.find((v) => v.slug === slug);
