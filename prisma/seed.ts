import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("⚡ Démarrage du seed Chargebox...");

  // Nettoyage préalable
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.productSpecification.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.address.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.user.deleteMany();

  console.log("🧹 Base de données réinitialisée.");

  // 1. Utilisateurs
  const passwordHash = await bcrypt.hash("Chargebox2026!", 10);
  const adminPasswordHash = await bcrypt.hash("AdminChargebox2026!", 10);

  const adminUser = await prisma.user.create({
    data: {
      email: "admin@chargebox.fr",
      name: "Alexandre Martin",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
      phone: "+33 6 12 34 56 78",
      companyName: "Chargebox SAS",
      siret: "91234567800012",
      vatNumber: "FR89912345678",
    },
  });

  const clientUser = await prisma.user.create({
    data: {
      email: "client.demo@chargebox.fr",
      name: "Thomas Dupont",
      passwordHash: passwordHash,
      role: "CUSTOMER",
      phone: "+33 6 98 76 54 32",
      addresses: {
        create: [
          {
            type: "SHIPPING",
            isDefault: true,
            firstName: "Thomas",
            lastName: "Dupont",
            street: "14 Rue de la République",
            postalCode: "75011",
            city: "Paris",
            country: "France",
            phone: "+33 6 98 76 54 32",
          },
          {
            type: "BILLING",
            isDefault: true,
            firstName: "Thomas",
            lastName: "Dupont",
            street: "14 Rue de la République",
            postalCode: "75011",
            city: "Paris",
            country: "France",
            phone: "+33 6 98 76 54 32",
          },
        ],
      },
    },
  });

  const proUser = await prisma.user.create({
    data: {
      email: "flotte@transport-pro.fr",
      name: "Jean-Marc Vasseur",
      passwordHash: passwordHash,
      role: "PRO",
      companyName: "Vasseur Logistique SAS",
      siret: "84512398700024",
      vatNumber: "FR45845123987",
      phone: "+33 1 42 68 00 11",
    },
  });

  console.log("👤 Utilisateurs créés (Admin, Client, Pro).");

  // 2. Marques
  const brandTeltonika = await prisma.brand.create({
    data: {
      name: "Teltonika Energy",
      slug: "teltonika",
      description: "Leader européen des solutions IoT et bornes de recharge premium ultra-robustes et personnalisables (Lithuanie).",
      logo: "/images/brands/teltonika.svg",
      originCountry: "Lituanie (UE)",
      isFeatured: true,
      displayOrder: 1,
      website: "https://teltonika-energy.com",
    },
  });

  const brandWallbox = await prisma.brand.create({
    data: {
      name: "Wallbox",
      slug: "wallbox",
      description: "Pionnier espagnol des bornes de recharge compactes, intelligentes et connectées (Pulsar Max, Commander).",
      logo: "/images/brands/wallbox.svg",
      originCountry: "Espagne",
      isFeatured: true,
      displayOrder: 2,
      website: "https://wallbox.com",
    },
  });

  const brandV2C = await prisma.brand.create({
    data: {
      name: "V2C Trydan",
      slug: "v2c",
      description: "Spécialiste de la recharge intelligente avec délestage dynamique et intégration solaire photovoltaïque avancée.",
      logo: "/images/brands/v2c.svg",
      originCountry: "Espagne",
      isFeatured: true,
      displayOrder: 3,
      website: "https://v2charge.com",
    },
  });

  const brandSchneider = await prisma.brand.create({
    data: {
      name: "Schneider Electric",
      slug: "schneider",
      description: "Géant français de l'énergie et des infrastructures électriques de pointe certifiées NF et ZeReady.",
      logo: "/images/brands/schneider.svg",
      originCountry: "France",
      isFeatured: true,
      displayOrder: 4,
      website: "https://se.com",
    },
  });

  const brandHager = await prisma.brand.create({
    data: {
      name: "Hager",
      slug: "hager",
      description: "Spécialiste franco-allemand de l'appareillage électrique et des bornes Witty éprouvées par les installateurs IRVE.",
      logo: "/images/brands/hager.svg",
      originCountry: "France / Allemagne",
      isFeatured: true,
      displayOrder: 5,
      website: "https://hager.fr",
    },
  });

  const brandLegrand = await prisma.brand.create({
    data: {
      name: "Legrand",
      slug: "legrand",
      description: "Référence mondiale des infrastructures électriques et de la gamme Green'up pour véhicules électriques.",
      logo: "/images/brands/legrand.svg",
      originCountry: "France",
      isFeatured: true,
      displayOrder: 6,
      website: "https://legrand.fr",
    },
  });

  console.log("🏷️ Marques créées.");

  // 3. Catégories
  const catResidential = await prisma.category.create({
    data: {
      name: "Bornes Résidentielles",
      slug: "bornes-residentielles",
      description: "Bornes de recharge 7.4 kW et 11 kW idéales pour maisons individuelles et copropriétés avec éligibilité crédit d'impôt.",
      displayOrder: 1,
    },
  });

  const catPro = await prisma.category.create({
    data: {
      name: "Bornes Professionnelles & Tertiaires",
      slug: "bornes-professionnelles",
      description: "Bornes 22 kW triphasées avec protocole OCPP 1.6J, lecteur RFID et supervision pour entreprises et flottes.",
      displayOrder: 2,
    },
  });

  const catCables = await prisma.category.create({
    data: {
      name: "Câbles de Recharge",
      slug: "cables-de-recharge",
      description: "Câbles Type 2 vers Type 2 monophasés et triphasés 32A haute résistance 5m et 7.5m.",
      displayOrder: 3,
    },
  });

  const catProtections = await prisma.category.create({
    data: {
      name: "Protections Électriques IRVE",
      slug: "protections-electriques",
      description: "Kits différentiels 30mA Type F / Type A-EV et disjoncteurs obligatoires selon la norme NF C 15-100.",
      displayOrder: 4,
    },
  });

  const catAccessories = await prisma.category.create({
    data: {
      name: "Supports & Accessoires",
      slug: "supports-accessoires",
      description: "Pieds de fixation en aluminium, supports de câble, compteurs MID et badges RFID.",
      displayOrder: 5,
    },
  });

  console.log("📂 Catégories créées.");

  // 4. Produits Réalistes
  // Produit 1 : Teltonika TeltoCharge 7.4 kW (Mise en avant principale)
  const teltoChargeMono = await prisma.product.create({
    data: {
      reference: "CB-TELTO-74-T2S",
      sku: "TELTO-74KW-T2S-BK",
      slug: "teltonika-teltocharge-7-4kw-monophase-prise-t2s",
      name: "Borne Teltonika TeltoCharge 7.4 kW Monophasé - Prise T2S",
      brandId: brandTeltonika.id,
      categoryId: catResidential.id,
      shortDescription: "Borne de recharge connectée premium avec façade personnalisable, connectivité WiFi/BLE/NFC et compatible délestage dynamique.",
      description: `La borne **Teltonika TeltoCharge 7.4 kW** combine une qualité de fabrication industrielle européenne exceptionnelle avec un design scandinave épuré et élégant.
      
Dotée d'une prise **Type 2S avec obturateurs de sécurité** conforme à la réglementation française, elle délivre jusqu'à 32A pour recharger rapidement tout véhicule électrique ou hybride rechargeable.

### Points forts :
- **Design premium personnalisable** : Finition ardoise ou bois noble avec bandeau LED dynamique.
- **Connectivité complète** : Application mobile Teltonika Energy (iOS/Android) via Bluetooth, Wi-Fi et Ethernet.
- **Protocole OCPP 1.6J** : Intégration transparente avec tous les opérateurs de recharge.
- **Robustesse certifiée** : Indice IP55 (étanchéité totale extérieur) et résistance aux chocs IK10.
- **Éligibilité aides** : Crédit d'impôt de 500 € et Prime Advenir.`,
      priceHT: 624.17,
      priceTTC: 749.00,
      vatRate: 20.0,
      compareAtPrice: 849.00,
      stock: 45,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "T2S",
      cableLengthMeters: null,
      ipRating: "IP55",
      ikRating: "IK10",
      ocppVersion: "1.6J",
      hasDynamicLoad: true,
      hasSolarMode: true,
      hasWifi: true,
      hasRfid: true,
      has4G: false,
      isFeatured: true,
      isBestSeller: true,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/teltonika-teltocharge.jpg", alt: "Teltonika TeltoCharge 7.4kW Face Avant", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance de charge", value: "1.4 kW à 7.4 kW réglable", order: 1 },
          { group: "Électrique", name: "Tension & Courant", value: "230V AC Monophasé · Jusqu'à 32A", order: 2 },
          { group: "Connecteur", name: "Type de prise", value: "Type 2 avec obturateurs (T2S)", order: 3 },
          { group: "Connectivité", name: "Protocoles sans fil", value: "Wi-Fi 2.4 GHz, Bluetooth 5.0, NFC / RFID", order: 4 },
          { group: "Logiciel", name: "Protocole de communication", value: "OCPP 1.6J JSON", order: 5 },
          { group: "Boîtier", name: "Indices de protection", value: "IP55 (Résistant intempéries) · IK10", order: 6 },
          { group: "Garantie", name: "Durée constructeur", value: "3 ans pièces et main d'œuvre", order: 7 },
        ],
      },
    },
  });

  // Produit 2 : Teltonika TeltoCharge 22 kW Triphasé 4G Pro
  const teltoChargeTri = await prisma.product.create({
    data: {
      reference: "CB-TELTO-22-4G",
      sku: "TELTO-22KW-4G-T2S",
      slug: "teltonika-teltocharge-22kw-triphase-4g-rfid",
      name: "Borne Teltonika TeltoCharge 22 kW Triphasé - Modem 4G LTE & RFID",
      brandId: brandTeltonika.id,
      categoryId: catPro.id,
      shortDescription: "La version ultime pour entreprises, commerces et copropriétés avec modem 4G LTE intégré, lecteur RFID et supervision OCPP 1.6J.",
      description: `Conçue pour les exigences professionnelles et les environnements tertiaires, la borne **Teltonika TeltoCharge 22 kW Triphasée** permet une recharge ultra-rapide (jusqu'à 100 km d'autonomie récupérés en 1 heure).
      
Son modem **4G LTE intégré** assure une connectivité continue sans dépendre du réseau Wi-Fi local, idéal pour les parkings extérieurs et sites d'entreprise.`,
      priceHT: 832.50,
      priceTTC: 999.00,
      vatRate: 20.0,
      compareAtPrice: 1149.00,
      stock: 28,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 22.0,
      phaseType: "TRI",
      connectorType: "T2S",
      ipRating: "IP55",
      ikRating: "IK10",
      ocppVersion: "1.6J",
      hasDynamicLoad: true,
      hasSolarMode: false,
      hasWifi: true,
      hasRfid: true,
      has4G: true,
      isFeatured: true,
      isBestSeller: true,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/teltonika-teltocharge.jpg", alt: "Teltonika TeltoCharge 22kW Triphasé", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance de charge", value: "Jusqu'à 22 kW Triphasé (32A / 400V)", order: 1 },
          { group: "Connectivité", name: "Réseau cellulaire", value: "Modem 4G LTE intégré + Wi-Fi + Ethernet", order: 2 },
          { group: "Identification", name: "Contrôle d'accès", value: "Lecteur RFID / NFC (cartes incluses) & App", order: 3 },
          { group: "Supervision", name: "Gestion de flotte", value: "Compatible toutes plateformes OCPP 1.6J", order: 4 },
        ],
      },
    },
  });

  // Produit 3 : Wallbox Pulsar Max 22 kW
  const wallboxPulsar = await prisma.product.create({
    data: {
      reference: "CB-WALL-PULSAR-MAX",
      sku: "WALL-PULSAR-MAX-22",
      slug: "wallbox-pulsar-max-22kw-coul-noir",
      name: "Borne Wallbox Pulsar Max 22 kW - Noir Mat",
      brandId: brandWallbox.id,
      categoryId: catResidential.id,
      shortDescription: "La borne connectée la plus compacte du marché avec commande vocale Alexa/Google et gestion de charge intelligente.",
      description: `La **Wallbox Pulsar Max** allie format ultra-compact et puissance remarquable. Elle s'intègre discrètement dans votre garage ou en extérieur tout en offrant un suivi précis de vos consommations via l'application myWallbox.`,
      priceHT: 699.17,
      priceTTC: 839.00,
      vatRate: 20.0,
      compareAtPrice: 929.00,
      stock: 35,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 22.0,
      phaseType: "MONO_TRI",
      connectorType: "ATTACHED_CABLE",
      cableLengthMeters: 5.0,
      ipRating: "IP55",
      ikRating: "IK10",
      ocppVersion: "1.6J",
      hasDynamicLoad: true,
      hasSolarMode: true,
      hasWifi: true,
      hasRfid: false,
      has4G: false,
      isFeatured: true,
      isBestSeller: true,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/wallbox-pulsar-max.jpg", alt: "Wallbox Pulsar Max", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance maximale", value: "22 kW (réglable de 6A à 32A)", order: 1 },
          { group: "Câble", name: "Longueur câble attaché", value: "5 mètres Type 2", order: 2 },
          { group: "Connectivité", name: "Sans fil", value: "Wi-Fi & Bluetooth", order: 3 },
          { group: "Intelligence", name: "Fonctions solaires", value: "Mode Eco-Smart (Recharge 100% solaire)", order: 4 },
        ],
      },
    },
  });

  // Produit 4 : V2C Trydan 7.4 kW / 22 kW Solaire
  const v2cTrydan = await prisma.product.create({
    data: {
      reference: "CB-V2C-TRYDAN-74",
      sku: "V2C-TRYDAN-74-SOLAR",
      slug: "v2c-trydan-7-4kw-gestion-dynamique-solaire",
      name: "Borne V2C Trydan 7.4 kW - Délestage Dynamique & Optimisation Solaire",
      brandId: brandV2C.id,
      categoryId: catResidential.id,
      shortDescription: "La référence absolue pour l'autoconsommation photovoltaïque avec communication directe onduleurs (Huawei, Fronius, Enphase, SMA).",
      description: `La borne **V2C Trydan** réinvente la recharge à domicile grâce à son intelligence solaire intégrée. Elle communique directement sans fil avec vos pinces de mesure ou votre onduleur photovoltaïque pour charger votre voiture exclusivement avec le surplus de vos panneaux solaires.`,
      priceHT: 658.33,
      priceTTC: 790.00,
      vatRate: 20.0,
      compareAtPrice: 870.00,
      stock: 20,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "ATTACHED_CABLE",
      cableLengthMeters: 5.0,
      ipRating: "IP54",
      ikRating: "IK10",
      ocppVersion: "1.6J",
      hasDynamicLoad: true,
      hasSolarMode: true,
      hasWifi: true,
      hasRfid: false,
      has4G: false,
      isFeatured: true,
      isBestSeller: false,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/v2c-trydan.jpg", alt: "V2C Trydan Solaire", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance", value: "7.4 kW Monophasé (32A)", order: 1 },
          { group: "Solaire", name: "Compatibilité Onduleurs", value: "Enphase, SolarEdge, Fronius, Huawei, Shelly", order: 2 },
          { group: "Délestage", name: "Pince tore incluse", value: "Oui, réglage dynamique en temps réel", order: 3 },
          { group: "Connectivité", name: "Protocoles", value: "Wi-Fi, Bluetooth, API Rest, MQTT, Home Assistant", order: 4 },
        ],
      },
    },
  });

  // Produit 5 : Schneider Electric Charge 7.4 kW
  const schneiderCharge = await prisma.product.create({
    data: {
      reference: "CB-SE-CHARGE-74",
      sku: "SE-EVH4S07N2",
      slug: "schneider-electric-charge-7-4kw-t2s",
      name: "Borne Schneider Electric Charge 7.4 kW - Prise T2S",
      brandId: brandSchneider.id,
      categoryId: catResidential.id,
      shortDescription: "La fiabilité industrielle Schneider Electric au service de votre domicile avec gestion heures creuses simplifiée.",
      description: `Développée par **Schneider Electric**, cette borne résidentielle robuste s'intègre parfaitement dans l'écosystème Wiser. Elle permet une programmation intuitive sur les plages d'heures creuses pour réduire drastiquement votre facture d'électricité.`,
      priceHT: 582.50,
      priceTTC: 699.00,
      vatRate: 20.0,
      compareAtPrice: 799.00,
      stock: 30,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "T2S",
      ipRating: "IP55",
      ikRating: "IK10",
      ocppVersion: "1.6J",
      hasDynamicLoad: true,
      hasSolarMode: false,
      hasWifi: true,
      hasRfid: false,
      has4G: false,
      isFeatured: false,
      isBestSeller: false,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/schneider-charge.jpg", alt: "Schneider Electric Charge", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance", value: "7.4 kW Monophasé réglable", order: 1 },
          { group: "Norme", name: "Sécurité", value: "NF C 15-100 & Certification EV Ready", order: 2 },
          { group: "Connectivité", name: "Application", value: "Wiser by Schneider Electric", order: 3 },
        ],
      },
    },
  });

  // Produit 6 : Hager Witty XEV1K
  const hagerWitty = await prisma.product.create({
    data: {
      reference: "CB-HAG-WITTY-74",
      sku: "HAG-XEV1K07T2TP",
      slug: "hager-witty-borne-recharge-7-4kw-t2s-tic",
      name: "Borne Hager Witty 7.4 kW Monophasé - Prise T2S + Prise TE",
      brandId: brandHager.id,
      categoryId: catResidential.id,
      shortDescription: "Borne fabriquée en France plébiscitée par les installateurs IRVE avec connexion directe télé-information client Linky (TIC).",
      description: `La borne **Hager Witty** est la référence des électriciens qualifiés IRVE en France. Dotée d'une prise Type 2S sécurisée et d'une prise domestique 230V d'appoint, elle gère nativement la télé-information Linky (TIC) pour moduler la puissance en temps réel sans coupure.`,
      priceHT: 749.17,
      priceTTC: 899.00,
      vatRate: 20.0,
      compareAtPrice: 990.00,
      stock: 18,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "T2S",
      ipRating: "IP55",
      ikRating: "IK10",
      ocppVersion: null,
      hasDynamicLoad: true,
      hasSolarMode: false,
      hasWifi: false,
      hasRfid: false,
      has4G: false,
      isFeatured: false,
      isBestSeller: false,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/hager-witty.jpg", alt: "Hager Witty XEV1K", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance", value: "7.4 kW Monophasé 32A", order: 1 },
          { group: "Linky", name: "Liaison TIC", value: "Entrée directe Télé-Information Client", order: 2 },
          { group: "Origine", name: "Fabrication", value: "Made in France (Obernai)", order: 3 },
        ],
      },
    },
  });

  // Produit 7 : Legrand Green'up Premium
  const legrandGreenup = await prisma.product.create({
    data: {
      reference: "CB-LEG-GREENUP-74",
      sku: "LEG-059002-74KW",
      slug: "legrand-greenup-premium-7-4kw-plastique-t2s",
      name: "Borne Legrand Green'up Premium 7.4 kW Monophasé - Prise T2S",
      brandId: brandLegrand.id,
      categoryId: catResidential.id,
      shortDescription: "La qualité éprouvée Legrand avec communication Bluetooth & Ethernet pour une recharge sécurisée au quotidien.",
      description: `La borne **Legrand Green'up Premium** permet de recharger en toute sécurité l'ensemble des véhicules électriques du marché en mode 3. Compatible avec l'application EV Charge pour le pilotage et la programmation des cycles de charge.`,
      priceHT: 715.83,
      priceTTC: 859.00,
      vatRate: 20.0,
      compareAtPrice: 940.00,
      stock: 22,
      inStock: true,
      leadTimeDays: 2,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "T2S",
      ipRating: "IP44",
      ikRating: "IK08",
      ocppVersion: null,
      hasDynamicLoad: true,
      hasSolarMode: false,
      hasWifi: true,
      hasRfid: true,
      has4G: false,
      isFeatured: false,
      isBestSeller: false,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/legrand-greenup.jpg", alt: "Legrand Green'up Premium", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Électrique", name: "Puissance", value: "3.7 à 7.4 kW réglable", order: 1 },
          { group: "Connectivité", name: "Pilotage", value: "Bluetooth & WebApp Legrand EV Charge", order: 2 },
          { group: "Sécurité", name: "Verrouillage", value: "Badges RFID configurables", order: 3 },
        ],
      },
    },
  });

  // Produit 8 : Câble T2-T2 22kW 5m
  const cableT2 = await prisma.product.create({
    data: {
      reference: "CB-CAB-T2-22KW-5M",
      sku: "CAB-T2T2-32A-5M-TRI",
      slug: "cable-recharge-type-2-type-2-triphase-32a-22kw-5m",
      name: "Câble de Recharge Type 2 / Type 2 - 32A Triphasé (22 kW) - 5 Mètres",
      brandId: brandTeltonika.id,
      categoryId: catCables.id,
      shortDescription: "Câble premium renforcé résistant aux torsions et intempéries avec connecteurs plaqués argent pour une conductivité maximale.",
      description: `Câble indispensable pour recharger sur les bornes publiques et résidentielles en Type 2. Supporte jusqu'à 22 kW en triphasé (32A) et reste 100% compatible avec les véhicules bridés à 7.4 kW ou 11 kW.`,
      priceHT: 157.50,
      priceTTC: 189.00,
      vatRate: 20.0,
      compareAtPrice: 229.00,
      stock: 90,
      inStock: true,
      leadTimeDays: 1,
      powerKw: 22.0,
      phaseType: "TRI",
      connectorType: "T2S",
      cableLengthMeters: 5.0,
      ipRating: "IP55",
      ikRating: "IK10",
      hasDynamicLoad: false,
      hasSolarMode: false,
      hasWifi: false,
      hasRfid: false,
      has4G: false,
      isFeatured: false,
      isBestSeller: true,
      isActive: true,
      isAdvenirEligible: false,
      images: {
        create: [
          { url: "/images/products/cable-t2-t2-32a.jpg", alt: "Câble Type 2 32A 22kW", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Spécifications", name: "Capacité", value: "32A Triphasé (jusqu'à 22 kW)", order: 1 },
          { group: "Longueur", name: "Longueur utile", value: "5 mètres", order: 2 },
          { group: "Protection", name: "Étanchéité", value: "IP55 avec capuchons de protection", order: 3 },
        ],
      },
    },
  });

  // Produit 9 : Kit de protection électrique différentiel IRVE
  const kitProtection = await prisma.product.create({
    data: {
      reference: "CB-PROT-KIT-MONO40A",
      sku: "KIT-IRVE-DIFF40A-DISJ40A",
      slug: "kit-protection-electrique-irve-differentiel-type-f-disjoncteur-40a",
      name: "Kit Protection Électrique IRVE Monophasé - Interrupteur Différentiel Type F 40A 30mA + Disjoncteur Courbe C 40A",
      brandId: brandSchneider.id,
      categoryId: catProtections.id,
      shortDescription: "Ensemble complet conforme NF C 15-100 obligatoire pour toute installation de borne de recharge résidentielle 7.4 kW.",
      description: `Ce kit de protection certifié protège efficacement votre installation et votre véhicule contre les composantes continues et défauts d'isolement :
- 1 Interrupteur différentiel 40A 30mA Type F / A-EV haute immunité
- 1 Disjoncteur monophasé 40A Courbe C pouvoir de coupure 4.5kA
- 1 Déclencheur à émission de tension (Bobine MX) pour arrêt d'urgence.`,
      priceHT: 165.83,
      priceTTC: 199.00,
      vatRate: 20.0,
      compareAtPrice: 249.00,
      stock: 60,
      inStock: true,
      leadTimeDays: 1,
      powerKw: 7.4,
      phaseType: "MONO",
      connectorType: "T2S",
      hasDynamicLoad: false,
      hasSolarMode: false,
      hasWifi: false,
      hasRfid: false,
      has4G: false,
      isFeatured: false,
      isBestSeller: true,
      isActive: true,
      isAdvenirEligible: true,
      images: {
        create: [
          { url: "/images/products/protection-kit-irve.jpg", alt: "Kit de protection IRVE", isPrimary: true, order: 0 },
        ],
      },
      specifications: {
        create: [
          { group: "Norme", name: "Conformité", value: "NF C 15-100 & NF C 17-200", order: 1 },
          { group: "Différentiel", name: "Type", value: "Type F / HI (Haute Immunité) 30mA", order: 2 },
          { group: "Disjoncteur", name: "Calibre", value: "40A Courbe C", order: 3 },
        ],
      },
    },
  });

  console.log("⚡ 9 Produits de démonstration créés.");

  // 5. Coupons Promotionnels
  await prisma.coupon.createMany({
    data: [
      {
        code: "BIENVENUE50",
        description: "50 € de réduction immédiate pour votre première commande (dès 500 € d'achat)",
        discountType: "FIXED",
        value: 50.0,
        minSpend: 500.0,
        isActive: true,
      },
      {
        code: "CHARGEBOX10",
        description: "10% de remise sur l'ensemble de votre panier",
        discountType: "PERCENT",
        value: 10.0,
        minSpend: 200.0,
        isActive: true,
      },
      {
        code: "PROIRVE2026",
        description: "Remise spéciale installateurs électriciens IRVE",
        discountType: "PERCENT",
        value: 15.0,
        minSpend: 800.0,
        isActive: true,
      },
    ],
  });

  console.log("🎟️ Codes promotionnels créés.");

  // 6. Avis clients réalistes
  await prisma.review.createMany({
    data: [
      {
        productId: teltoChargeMono.id,
        authorName: "Marc L. (Propriétaire Tesla Model Y)",
        rating: 5,
        title: "Borne Teltonika superbe et application au top",
        comment: "Installée dans mon garage en 2h par un électricien IRVE. La finition ardoise est magnifique et l'application permet de programmer la charge en heures creuses très simplement.",
        isVerifiedPurchase: true,
        isApproved: true,
      },
      {
        productId: teltoChargeMono.id,
        authorName: "Aurélie B.",
        rating: 5,
        title: "Recharge rapide et design soigné",
        comment: "Très satisfaite de mon achat. Reçu en 48h avec le kit de protection. Mon Peugeot e-2008 charge à 7.4 kW sans chauffer.",
        isVerifiedPurchase: true,
        isApproved: true,
      },
      {
        productId: v2cTrydan.id,
        authorName: "Stéphane G. (Installateur Solaire)",
        rating: 5,
        title: "L'intégration photovoltaïque est bluffante !",
        comment: "Couplée avec mes micro-onduleurs Enphase, la borne n'utilise que le surplus de production solaire. Zéro euro d'électricité payée sur mes trajets quotidiens.",
        isVerifiedPurchase: true,
        isApproved: true,
      },
    ],
  });

  // 7. Commande de démonstration
  const demoOrder = await prisma.order.create({
    data: {
      orderNumber: "CB-2026-08491",
      userId: clientUser.id,
      status: "PROCESSING",
      paymentStatus: "PAID",
      subtotalHT: 790.0,
      taxAmount: 158.0,
      shippingCost: 0.0,
      discountAmount: 50.0,
      totalTTC: 898.0,
      customerEmail: clientUser.email,
      customerName: clientUser.name || "Thomas Dupont",
      customerPhone: clientUser.phone,
      isB2B: false,
      shippingAddress: JSON.stringify({
        firstName: "Thomas",
        lastName: "Dupont",
        street: "14 Rue de la République",
        postalCode: "75011",
        city: "Paris",
        country: "France",
      }),
      billingAddress: JSON.stringify({
        firstName: "Thomas",
        lastName: "Dupont",
        street: "14 Rue de la République",
        postalCode: "75011",
        city: "Paris",
        country: "France",
      }),
      carrier: "Chronopost Express IRVE",
      trackingNumber: "CH982145712FR",
      installationRequested: true,
      notes: "Demande de mise en relation avec installateur IRVE certifié pour maison individuelle.",
      items: {
        create: [
          {
            productId: teltoChargeMono.id,
            productName: teltoChargeMono.name,
            productSku: teltoChargeMono.sku,
            unitPriceHT: teltoChargeMono.priceHT,
            unitPriceTTC: teltoChargeMono.priceTTC,
            vatRate: teltoChargeMono.vatRate,
            quantity: 1,
            totalHT: teltoChargeMono.priceHT,
            totalTTC: teltoChargeMono.priceTTC,
          },
          {
            productId: kitProtection.id,
            productName: kitProtection.name,
            productSku: kitProtection.sku,
            unitPriceHT: kitProtection.priceHT,
            unitPriceTTC: kitProtection.priceTTC,
            vatRate: kitProtection.vatRate,
            quantity: 1,
            totalHT: kitProtection.priceHT,
            totalTTC: kitProtection.priceTTC,
          },
        ],
      },
      payments: {
        create: [
          {
            provider: "STRIPE",
            transactionId: "pi_3MmockStripePaymentSuccess2026",
            amount: 898.0,
            currency: "EUR",
            status: "SUCCEEDED",
            paymentMethod: "card",
          },
        ],
      },
    },
  });

  console.log(`📦 Commande de test #${demoOrder.orderNumber} créée avec succès.`);
  console.log("✅ SEED CHARGEBOX TERMINÉ AVEC SUCCÈS !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur pendant le seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
