export type LogementType = "domicile" | "copropriete" | "";
export type RoleType = "proprietaire" | "locataire" | "syndic" | "";
export type VehiculeStatut = "oui" | "commande" | "projet" | "";
export type Puissance = "7.4" | "11" | "22" | "unknown" | "";
export type Compteur = "mono" | "tri" | "unknown" | "";
export type Distance = "<5" | "5-15" | ">15" | "";
export type Delai = "asap" | "1m" | "3m" | "compare" | "";
export type Budget = "<1000" | "1000-2000" | "2000-5000" | "tbd" | "";

export interface FunnelData {
  logement: LogementType;
  role: RoleType;
  codePostal: string;
  vehicule: VehiculeStatut;
  marque: string;
  marqueAutre: string;
  puissance: Puissance;
  borneModele: string;
  nbBornes: number | null;
  compteur: Compteur;
  distance: Distance;
  delai: Delai;
  budget: Budget;
  photos: File[];
  nom: string;
  telephone: string;
  email: string;
  rgpd: boolean;
}

export const initialData: FunnelData = {
  logement: "",
  role: "",
  codePostal: "",
  vehicule: "",
  marque: "",
  marqueAutre: "",
  puissance: "",
  borneModele: "",
  nbBornes: null,
  compteur: "",
  distance: "",
  delai: "",
  budget: "",
  photos: [],
  nom: "",
  telephone: "",
  email: "",
  rgpd: false,
};
