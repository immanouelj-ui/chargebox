// Départements couverts — hubs /installateur-irve/{dept}.
// Chaque département listé ici a au moins une ville dans villes.ts (maillage interne).
// Pour ajouter : insérer un objet dans DEPARTEMENTS ; routes, index et sitemap suivent tout seuls.

export type Departement = {
  slug: string; // segment d'URL : /installateur-irve/hauts-de-seine
  nom: string; // "Hauts-de-Seine"
  code: string; // "92" — sert à retrouver les villes du département (champ dept de villes.ts)
  prep: string; // locution : "dans les Hauts-de-Seine"
  region: string;
  intro: string; // accroche unique du département
  local: string; // contexte habitat/usage unique
};

export const DEPARTEMENTS: Departement[] = [
  {
    slug: "paris",
    nom: "Paris",
    code: "75",
    prep: "à Paris",
    region: "Île-de-France",
    intro:
      "À Paris, l'installation de bornes se joue presque exclusivement en copropriété : parkings souterrains, immeubles haussmanniens et résidences récentes. Nos installateurs IRVE maîtrisent le droit à la prise et les démarches en assemblée.",
    local:
      "Intra-muros, la clé est l'accès au parking et le raccordement aux services généraux ou au compteur privatif : une étude technique précise fait toute la différence sur le devis.",
  },
  {
    slug: "hauts-de-seine",
    nom: "Hauts-de-Seine",
    code: "92",
    prep: "dans les Hauts-de-Seine",
    region: "Île-de-France",
    intro:
      "Des tours de La Défense aux rues pavillonnaires de Sceaux ou Rueil-Malmaison, les Hauts-de-Seine concentrent tous les cas de figure : copropriétés avec sous-sol, maisons de ville et résidences d'entreprise.",
    local:
      "La densité du 92 fait de la place de parking équipée un vrai atout patrimonial : le droit à la prise permet d'équiper la sienne sans vote, et les pavillons de l'ouest passent en pose directe au tableau.",
  },
  {
    slug: "val-d-oise",
    nom: "Val-d'Oise",
    code: "95",
    prep: "dans le Val-d'Oise",
    region: "Île-de-France",
    intro:
      "Le Val-d'Oise est un territoire très pavillonnaire — Enghien, Montmorency, Franconville, Cergy — où la borne à domicile s'installe le plus souvent en direct sur le tableau, sans contrainte de copropriété.",
    local:
      "Dans les communes de la vallée de Montmorency et autour de Cergy-Pontoise, une borne 7,4 kW posée dans le garage ou sur l'allée couvre l'immense majorité des besoins quotidiens.",
  },
  {
    slug: "val-de-marne",
    nom: "Val-de-Marne",
    code: "94",
    prep: "dans le Val-de-Marne",
    region: "Île-de-France",
    intro:
      "Entre les bords de Marne pavillonnaires et les copropriétés denses de Créteil, Vincennes ou Choisy-le-Roi, le Val-de-Marne mêle pose en maison et droit à la prise en résidence.",
    local:
      "Le 94 compte de nombreux pavillons d'après-guerre avec garage : des chantiers simples et rapides. En copropriété, nos installateurs coordonnent syndic et prime ADVENIR.",
  },
  {
    slug: "seine-saint-denis",
    nom: "Seine-Saint-Denis",
    code: "93",
    prep: "en Seine-Saint-Denis",
    region: "Île-de-France",
    intro:
      "En Seine-Saint-Denis, des pavillons du Raincy aux grandes copropriétés de Saint-Denis ou Montreuil, la demande de recharge à domicile explose avec la ZFE du Grand Paris.",
    local:
      "Le 93 combine un fort tissu pavillonnaire à l'est et de grands ensembles : selon votre cas, pose directe au tableau ou infrastructure collective avec prime ADVENIR.",
  },
  {
    slug: "yvelines",
    nom: "Yvelines",
    code: "78",
    prep: "dans les Yvelines",
    region: "Île-de-France",
    intro:
      "Département résidentiel par excellence — Versailles, Saint-Germain-en-Laye, Le Vésinet — les Yvelines offrent un terrain idéal à la borne à domicile : maisons avec garage, allées et dépendances.",
    local:
      "Les grandes maisons yvelinoises disposent souvent d'un tableau bien dimensionné, parfois en triphasé : de quoi installer une borne 7,4 à 22 kW selon vos véhicules.",
  },
  {
    slug: "essonne",
    nom: "Essonne",
    code: "91",
    prep: "en Essonne",
    region: "Île-de-France",
    intro:
      "De Massy à Morangis et jusqu'aux communes rurales du sud, l'Essonne est majoritairement pavillonnaire : la borne à domicile s'y installe simplement, en une demi-journée le plus souvent.",
    local:
      "Les trajets domicile-travail essonniens sont parmi les plus longs d'Île-de-France : recharger la nuit en heures creuses y change vraiment le budget carburant.",
  },
  {
    slug: "seine-et-marne",
    nom: "Seine-et-Marne",
    code: "77",
    prep: "en Seine-et-Marne",
    region: "Île-de-France",
    intro:
      "Plus grand département d'Île-de-France, la Seine-et-Marne est le royaume de la maison individuelle : de Meaux à Melun, la borne se pose en direct sur le tableau, sans copropriété.",
    local:
      "Avec des distances quotidiennes importantes, les Seine-et-Marnais tirent le meilleur parti d'une borne 7,4 kW programmée en heures creuses — et du triphasé quand la maison en dispose.",
  },
  {
    slug: "alpes-maritimes",
    nom: "Alpes-Maritimes",
    code: "06",
    prep: "dans les Alpes-Maritimes",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "Des villas des collines niçoises aux copropriétés du littoral entre Cannes et Menton, les Alpes-Maritimes cumulent résidences principales et secondaires à équiper.",
    local:
      "Dans le 06, beaucoup de propriétés disposent de stationnement privatif extérieur : nos installateurs posent des bornes en IP54 adaptées au climat, y compris pour les résidences secondaires pilotables à distance.",
  },
  {
    slug: "bouches-du-rhone",
    nom: "Bouches-du-Rhône",
    code: "13",
    prep: "dans les Bouches-du-Rhône",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "De Marseille à Aix-en-Provence, les Bouches-du-Rhône mêlent copropriétés urbaines et villas provençales : deux configurations que nos installateurs IRVE traitent au quotidien, ZFE oblige.",
    local:
      "Dans le 13, la maison avec garage ou jardin domine hors des centres : pose directe au tableau et recharge nocturne en heures creuses, bien plus économique que les bornes publiques de la métropole.",
  },
  {
    slug: "var",
    nom: "Var",
    code: "83",
    prep: "dans le Var",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "Entre Toulon, les stations du littoral et l'arrière-pays, le Var est un département de villas et de résidences secondaires où la borne à domicile s'impose naturellement.",
    local:
      "Beaucoup de maisons varoises stationnent en extérieur : une borne étanche bien protégée, éventuellement pilotée à distance pour les résidences secondaires, couvre tous les usages.",
  },
  {
    slug: "vaucluse",
    nom: "Vaucluse",
    code: "84",
    prep: "dans le Vaucluse",
    region: "Provence-Alpes-Côte d'Azur",
    intro:
      "D'Avignon au Luberon, le Vaucluse est un territoire de maisons individuelles et de mas : des configurations simples pour une borne posée en direct sur le tableau.",
    local:
      "Les distances quotidiennes vauclusiennes rendent la recharge nocturne particulièrement rentable ; en été, une borne extérieure correctement protégée ne craint ni chaleur ni poussière.",
  },
  {
    slug: "rhone",
    nom: "Rhône",
    code: "69",
    prep: "dans le Rhône",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "Autour de Lyon et de Villeurbanne, le Rhône concentre copropriétés urbaines, maisons des monts d'Or et pavillons de l'est lyonnais : chaque configuration a sa solution de recharge.",
    local:
      "Avec la ZFE de la métropole lyonnaise, la borne à domicile devient l'équipement de référence : droit à la prise en copropriété, pose directe en maison, prime ADVENIR à l'appui.",
  },
  {
    slug: "isere",
    nom: "Isère",
    code: "38",
    prep: "en Isère",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "De Grenoble aux communes du Grésivaudan et du Nord-Isère, l'Isère combine copropriétés urbaines et maisons de piémont — souvent en triphasé, un atout pour la recharge.",
    local:
      "Les Isérois qui montent régulièrement en station apprécient une charge complète chaque matin : une borne 7,4 ou 11 kW programmée la nuit s'en charge, même par grand froid.",
  },
  {
    slug: "haute-savoie",
    nom: "Haute-Savoie",
    code: "74",
    prep: "en Haute-Savoie",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "Entre Annecy, le Genevois et les vallées alpines, la Haute-Savoie roule de plus en plus électrique — et l'habitat individuel s'y prête parfaitement à la borne à domicile.",
    local:
      "Frontaliers et montagnards font des kilomètres : la recharge nocturne à domicile, fiable par tous les temps, y est bien plus pratique que les bornes publiques en station.",
  },
  {
    slug: "savoie",
    nom: "Savoie",
    code: "73",
    prep: "en Savoie",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "De Chambéry aux vallées de Tarentaise et de Maurienne, la Savoie s'électrifie : maisons individuelles et chalets s'équipent de bornes robustes, adaptées à l'altitude.",
    local:
      "En Savoie, une borne extérieure bien posée fonctionne par tous les temps ; recharger la nuit à la maison évite les détours par les bornes publiques, saturées en saison.",
  },
  {
    slug: "loire",
    nom: "Loire",
    code: "42",
    prep: "dans la Loire",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "Autour de Saint-Étienne et de Roanne, la Loire offre un habitat individuel abondant où la borne à domicile s'installe simplement et à bon prix.",
    local:
      "Les maisons ligériennes avec garage passent en pose directe : comptez une demi-journée de chantier pour recharger ensuite chaque nuit en heures creuses.",
  },
  {
    slug: "drome",
    nom: "Drôme",
    code: "26",
    prep: "dans la Drôme",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "De Valence à Montélimar, la Drôme est un département de maisons individuelles où l'électrique progresse vite le long du sillon rhodanien.",
    local:
      "Pavillons et fermettes drômoises disposent souvent d'un stationnement privatif : une borne 7,4 kW y couvre les trajets quotidiens, avec le triphasé en option dans l'habitat rural.",
  },
  {
    slug: "puy-de-dome",
    nom: "Puy-de-Dôme",
    code: "63",
    prep: "dans le Puy-de-Dôme",
    region: "Auvergne-Rhône-Alpes",
    intro:
      "Autour de Clermont-Ferrand et jusqu'aux communes des volcans, le Puy-de-Dôme s'équipe : l'habitat individuel dominant facilite l'installation de bornes à domicile.",
    local:
      "Les hivers auvergnats rappellent l'intérêt d'une voiture préchauffée branchée à domicile : batterie pleine et dégivrage programmé chaque matin.",
  },
  {
    slug: "gironde",
    nom: "Gironde",
    code: "33",
    prep: "en Gironde",
    region: "Nouvelle-Aquitaine",
    intro:
      "De Bordeaux au Bassin d'Arcachon, la Gironde mêle échoppes en ville, copropriétés récentes et maisons avec jardin : nos installateurs IRVE couvrent tout le département.",
    local:
      "L'échoppe bordelaise avec accès privatif se prête bien à une borne murale ; en périphérie et sur le Bassin, la pose en garage ou carport est un chantier standard.",
  },
  {
    slug: "pyrenees-atlantiques",
    nom: "Pyrénées-Atlantiques",
    code: "64",
    prep: "dans les Pyrénées-Atlantiques",
    region: "Nouvelle-Aquitaine",
    intro:
      "De Pau à la côte basque (Bayonne, Biarritz), les Pyrénées-Atlantiques offrent un habitat individuel généreux où la borne à domicile est vite rentabilisée.",
    local:
      "Sur la côte comme en Béarn, les maisons disposent souvent d'un stationnement privatif ; l'air salin du littoral impose simplement une borne bien protégée, posée dans les règles.",
  },
  {
    slug: "charente-maritime",
    nom: "Charente-Maritime",
    code: "17",
    prep: "en Charente-Maritime",
    region: "Nouvelle-Aquitaine",
    intro:
      "De La Rochelle à Royan, la Charente-Maritime conjugue résidences principales et secondaires : la borne à domicile y simplifie la vie des insulaires comme des continentaux.",
    local:
      "Pour une résidence secondaire sur la côte, une borne pilotable à distance permet d'arriver batterie pleine ; en ville, La Rochelle pionnière de l'électrique a habitué ses habitants à la recharge.",
  },
  {
    slug: "herault",
    nom: "Hérault",
    code: "34",
    prep: "dans l'Hérault",
    region: "Occitanie",
    intro:
      "De Montpellier à Béziers et jusqu'au littoral, l'Hérault s'électrifie vite : villas, résidences neuves de Port-Marianne et maisons de village s'équipent en bornes.",
    local:
      "Dans le 34, le neuf est souvent pré-équipé (obligations du bâti récent) : le raccordement final est alors rapide. Dans l'ancien, la pose directe au tableau reste un chantier d'une demi-journée.",
  },
  {
    slug: "gard",
    nom: "Gard",
    code: "30",
    prep: "dans le Gard",
    region: "Occitanie",
    intro:
      "De Nîmes à Alès, le Gard est un territoire de maisons individuelles et de mas où la borne à domicile s'installe sans complication.",
    local:
      "Les étés gardois n'inquiètent pas une borne correctement posée ; la recharge nocturne en heures creuses reste la solution la plus économique du département.",
  },
  {
    slug: "haute-garonne",
    nom: "Haute-Garonne",
    code: "31",
    prep: "en Haute-Garonne",
    region: "Occitanie",
    intro:
      "Autour de Toulouse, la Haute-Garonne combine copropriétés urbaines et un vaste tissu pavillonnaire périurbain, de Colomiers à Muret : un terrain idéal pour la recharge à domicile.",
    local:
      "Les trajets périurbains toulousains rendent la borne domestique vite indispensable ; en copropriété, le droit à la prise et la prime ADVENIR font le travail.",
  },
  {
    slug: "pyrenees-orientales",
    nom: "Pyrénées-Orientales",
    code: "66",
    prep: "dans les Pyrénées-Orientales",
    region: "Occitanie",
    intro:
      "De Perpignan à la côte Vermeille, les Pyrénées-Orientales offrent villas et maisons de village où la borne à domicile s'impose face aux bornes publiques du littoral.",
    local:
      "Le soleil catalan fait aussi le bonheur des panneaux solaires : coupler autoconsommation et borne pilotée y est particulièrement pertinent.",
  },
  {
    slug: "nord",
    nom: "Nord",
    code: "59",
    prep: "dans le Nord",
    region: "Hauts-de-France",
    intro:
      "De Lille à Valenciennes, le Nord est un grand département automobile où les maisons 1930 en briques, avec garage ou courée, accueillent très bien une borne domestique.",
    local:
      "La maison de ville nordiste a souvent un compteur à moderniser en même temps que la pose : nos installateurs IRVE vérifient protections et mise à la terre dans le même chantier.",
  },
  {
    slug: "somme",
    nom: "Somme",
    code: "80",
    prep: "dans la Somme",
    region: "Hauts-de-France",
    intro:
      "Autour d'Amiens, la Somme offre un habitat individuel dominant — amiénoises et pavillons — où l'installation d'une borne reste simple et abordable.",
    local:
      "L'amiénoise typique dispose d'une cour ou d'un garage en fond de parcelle : un cheminement de câble bien pensé et la borne est posée en une demi-journée.",
  },
  {
    slug: "seine-maritime",
    nom: "Seine-Maritime",
    code: "76",
    prep: "en Seine-Maritime",
    region: "Normandie",
    intro:
      "De Rouen au Havre, la Seine-Maritime mêle coteaux pavillonnaires, centres reconstruits et copropriétés : nos installateurs IRVE couvrent les deux agglomérations et le pays de Caux.",
    local:
      "Sur les hauteurs de Rouen comme dans les quartiers résidentiels havrais, la maison avec garage est la règle : pose directe au tableau et recharge nocturne en heures creuses.",
  },
  {
    slug: "calvados",
    nom: "Calvados",
    code: "14",
    prep: "dans le Calvados",
    region: "Normandie",
    intro:
      "De Caen à la côte fleurie, le Calvados conjugue résidences principales et secondaires : la borne à domicile y répond aux deux usages.",
    local:
      "Pour les week-ends à Deauville ou Cabourg, une borne dans la résidence secondaire évite la course aux bornes publiques estivales ; à Caen, le pavillon avec garage reste le cas d'école.",
  },
  {
    slug: "ille-et-vilaine",
    nom: "Ille-et-Vilaine",
    code: "35",
    prep: "en Ille-et-Vilaine",
    region: "Bretagne",
    intro:
      "De Rennes à Saint-Malo, l'Ille-et-Vilaine s'électrifie rapidement : couronne rennaise pavillonnaire, résidences neuves et maisons de la côte d'Émeraude.",
    local:
      "La couronne de Rennes offre des chantiers simples (garage, tableau récent) ; sur la côte, une borne étanche bien posée ne craint pas les embruns.",
  },
  {
    slug: "finistere",
    nom: "Finistère",
    code: "29",
    prep: "dans le Finistère",
    region: "Bretagne",
    intro:
      "De Brest à Quimper, le Finistère est un département de maisons individuelles où la recharge à domicile s'impose naturellement, loin des grands axes de recharge rapide.",
    local:
      "En pointe bretonne, mieux vaut partir chaque matin batterie pleine : la borne domestique y est plus qu'ailleurs l'équipement de sérénité.",
  },
  {
    slug: "morbihan",
    nom: "Morbihan",
    code: "56",
    prep: "dans le Morbihan",
    region: "Bretagne",
    intro:
      "De Vannes à Lorient et jusqu'à la côte, le Morbihan mêle résidences principales et secondaires : deux bons cas d'usage pour une borne à domicile.",
    local:
      "Les longères et maisons néo-bretonnes disposent presque toujours d'un stationnement privatif : la pose est standard, et le pilotage à distance sert les résidences secondaires du golfe.",
  },
  {
    slug: "loire-atlantique",
    nom: "Loire-Atlantique",
    code: "44",
    prep: "en Loire-Atlantique",
    region: "Pays de la Loire",
    intro:
      "De Nantes à Saint-Nazaire et à la côte, la Loire-Atlantique est l'un des départements les plus dynamiques sur l'électrique : pavillons, échoppes nantaises et copropriétés s'équipent massivement.",
    local:
      "La périphérie nantaise offre des chantiers rapides en maison ; en ville, le droit à la prise ouvre les parkings de copropriété, prime ADVENIR à la clé.",
  },
  {
    slug: "maine-et-loire",
    nom: "Maine-et-Loire",
    code: "49",
    prep: "en Maine-et-Loire",
    region: "Pays de la Loire",
    intro:
      "Autour d'Angers et de Cholet, le Maine-et-Loire cultive la maison avec jardin : un terrain idéal pour la borne à domicile posée en direct.",
    local:
      "Les maisons angevines en tuffeau comme les pavillons récents partagent un point commun : un stationnement privatif qui rend l'installation simple et le devis contenu.",
  },
  {
    slug: "sarthe",
    nom: "Sarthe",
    code: "72",
    prep: "dans la Sarthe",
    region: "Pays de la Loire",
    intro:
      "Département des 24 Heures, la Sarthe a la culture automobile : autour du Mans, l'habitat individuel accueille la borne à domicile sans difficulté.",
    local:
      "Pavillons et longères sarthoises disposent de garages et de granges : le cheminement du câble est souvent le seul vrai sujet du devis.",
  },
  {
    slug: "indre-et-loire",
    nom: "Indre-et-Loire",
    code: "37",
    prep: "en Indre-et-Loire",
    region: "Centre-Val de Loire",
    intro:
      "De Tours aux communes des châteaux, l'Indre-et-Loire s'équipe : maisons tourangelles et pavillons périurbains passent à la recharge à domicile.",
    local:
      "L'agglomération tourangelle offre des chantiers standards ; dans l'habitat ancien, nos installateurs vérifient tableau et terre avant la pose — sécurité d'abord.",
  },
  {
    slug: "loiret",
    nom: "Loiret",
    code: "45",
    prep: "dans le Loiret",
    region: "Centre-Val de Loire",
    intro:
      "Autour d'Orléans, le Loiret combine pavillons, bourgs ligériens et navetteurs franciliens : la borne à domicile y rentabilise vite les kilomètres quotidiens.",
    local:
      "Pour les trajets Orléans-Paris, partir chaque matin batterie pleine change tout : une borne 7,4 kW en heures creuses s'amortit d'autant plus vite que l'on roule.",
  },
  {
    slug: "cote-d-or",
    nom: "Côte-d'Or",
    code: "21",
    prep: "en Côte-d'Or",
    region: "Bourgogne-Franche-Comté",
    intro:
      "De Dijon aux villages de la route des vins, la Côte-d'Or passe à l'électrique : maisons de ville et pavillons s'équipent de bornes à domicile.",
    local:
      "L'agglomération dijonnaise offre des chantiers simples ; dans les villages viticoles, granges et cours intérieures accueillent la borne à l'abri.",
  },
  {
    slug: "doubs",
    nom: "Doubs",
    code: "25",
    prep: "dans le Doubs",
    region: "Bourgogne-Franche-Comté",
    intro:
      "De Besançon à Montbéliard, terre automobile, le Doubs s'électrifie : l'habitat individuel et les hivers francs-comtois plaident pour la recharge à domicile.",
    local:
      "Par -10 °C, une voiture branchée au garage préchauffe et part batterie pleine : c'est dans le Doubs que la borne domestique montre le mieux sa valeur.",
  },
  {
    slug: "bas-rhin",
    nom: "Bas-Rhin",
    code: "67",
    prep: "dans le Bas-Rhin",
    region: "Grand Est",
    intro:
      "De Strasbourg aux villages à colombages, le Bas-Rhin conjugue copropriétés urbaines et maisons alsaciennes : nos installateurs IRVE couvrent l'Eurométropole et au-delà.",
    local:
      "La maison alsacienne a souvent cour et dépendance : un emplacement idéal pour la borne. En ville, le droit à la prise ouvre les parkings collectifs.",
  },
  {
    slug: "haut-rhin",
    nom: "Haut-Rhin",
    code: "68",
    prep: "dans le Haut-Rhin",
    region: "Grand Est",
    intro:
      "De Mulhouse à Colmar, le Haut-Rhin roule de plus en plus électrique — frontaliers suisses et allemands en tête, gros rouleurs par excellence.",
    local:
      "Pour les navetteurs vers Bâle, la recharge nocturne à domicile est imbattable : batterie pleine chaque matin, coût minimal, zéro détour.",
  },
  {
    slug: "moselle",
    nom: "Moselle",
    code: "57",
    prep: "en Moselle",
    region: "Grand Est",
    intro:
      "De Metz à Thionville, la Moselle compte parmi les départements les plus frontaliers de France : les trajets vers le Luxembourg font de la borne à domicile un équipement stratégique.",
    local:
      "Un aller-retour quotidien vers Luxembourg se recharge en une nuit sur une borne 7,4 kW : les frontaliers mosellans sont les premiers gagnants de la recharge domestique.",
  },
  {
    slug: "meurthe-et-moselle",
    nom: "Meurthe-et-Moselle",
    code: "54",
    prep: "en Meurthe-et-Moselle",
    region: "Grand Est",
    intro:
      "Autour de Nancy, la Meurthe-et-Moselle mêle maisons de ville, pavillons et copropriétés : l'installation d'une borne y est un chantier bien rodé.",
    local:
      "Dans l'agglomération nancéienne, la maison avec garage est la configuration type ; en copropriété, le droit à la prise et la prime ADVENIR s'appliquent comme partout.",
  },
  {
    slug: "marne",
    nom: "Marne",
    code: "51",
    prep: "dans la Marne",
    region: "Grand Est",
    intro:
      "De Reims à Châlons-en-Champagne et Épernay, la Marne passe à l'électrique : maisons champenoises et pavillons accueillent la borne à domicile sans difficulté.",
    local:
      "Entre vignoble et grandes cultures, les distances marnaises se rechargent la nuit : une borne 7,4 kW en heures creuses couvre les trajets quotidiens du département.",
  },
  {
    slug: "aube",
    nom: "Aube",
    code: "10",
    prep: "dans l'Aube",
    region: "Grand Est",
    intro:
      "Autour de Troyes, l'Aube offre un habitat individuel abondant et abordable : la borne à domicile s'y installe simplement, souvent en une demi-journée.",
    local:
      "Maisons à pans de bois du centre comme pavillons de périphérie disposent généralement d'un stationnement privatif : le devis dépend surtout de la distance au tableau.",
  },
];

export const departementBySlug = (slug: string) => DEPARTEMENTS.find((d) => d.slug === slug);
