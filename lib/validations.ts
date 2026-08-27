import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Le nom complet est requis"),
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  phone: z.string().optional(),
  isB2B: z.boolean().default(false),
  companyName: z.string().optional(),
  siret: z.string().optional(),
  vatNumber: z.string().optional(),
}).refine((data) => {
  if (data.isB2B) {
    return !!data.companyName && !!data.siret;
  }
  return true;
}, {
  message: "La raison sociale et le numéro de SIRET sont obligatoires pour les professionnels",
  path: ["companyName"],
});

export const addressSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  company: z.string().optional(),
  street: z.string().min(5, "L'adresse de rue est requise"),
  complement: z.string().optional(),
  postalCode: z.string().min(4, "Le code postal est requis"),
  city: z.string().min(2, "La ville est requise"),
  country: z.string().default("France"),
  phone: z.string().min(8, "Numéro de téléphone requis pour le transporteur"),
});

export const checkoutSchema = z.object({
  email: z.string().email("Adresse email valide requise"),
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
  isB2B: z.boolean().default(false),
  companyName: z.string().optional(),
  siret: z.string().optional(),
  vatNumber: z.string().optional(),
  
  // Shipping Address
  shippingStreet: z.string().min(5, "L'adresse de livraison est requise"),
  shippingComplement: z.string().optional(),
  shippingPostalCode: z.string().min(4, "Code postal requis"),
  shippingCity: z.string().min(2, "Ville requise"),
  shippingCountry: z.string().default("France"),
  
  // Billing Address
  sameAsShipping: z.boolean().default(true),
  billingStreet: z.string().optional(),
  billingPostalCode: z.string().optional(),
  billingCity: z.string().optional(),
  billingCountry: z.string().optional(),
  
  // Options
  installationRequested: z.boolean().default(false),
  notes: z.string().optional(),
});

export const productSchema = z.object({
  name: z.string().min(3, "Le nom du produit est requis"),
  slug: z.string().min(3, "Le slug est requis"),
  sku: z.string().min(3, "Le SKU est requis"),
  reference: z.string().min(3, "La référence est requise"),
  brandId: z.string().min(1, "La marque est requise"),
  categoryId: z.string().min(1, "La catégorie est requise"),
  priceHT: z.coerce.number().positive("Le prix HT doit être positif"),
  priceTTC: z.coerce.number().positive("Le prix TTC doit être positif"),
  compareAtPrice: z.coerce.number().optional().nullable(),
  stock: z.coerce.number().int().min(0, "Le stock ne peut être négatif"),
  powerKw: z.coerce.number().positive("La puissance doit être positive"),
  phaseType: z.enum(["MONO", "TRI", "MONO_TRI"]),
  connectorType: z.enum(["T2S", "ATTACHED_CABLE"]),
  cableLengthMeters: z.coerce.number().optional().nullable(),
  ipRating: z.string().default("IP55"),
  ikRating: z.string().default("IK10"),
  hasDynamicLoad: z.boolean().default(false),
  hasSolarMode: z.boolean().default(false),
  hasWifi: z.boolean().default(true),
  hasRfid: z.boolean().default(false),
  has4G: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  isBestSeller: z.boolean().default(false),
  isActive: z.boolean().default(true),
  isAdvenirEligible: z.boolean().default(true),
  shortDescription: z.string().optional(),
  description: z.string().min(10, "Une description détaillée est requise"),
});
