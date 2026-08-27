import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formate un nombre en euros (ex: 749,00 €)
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Calcule le montant HT à partir du TTC et du taux de TVA
 */
export function calculateHT(priceTTC: number, vatRate: number = 20.0): number {
  return priceTTC / (1 + vatRate / 100);
}

/**
 * Calcule le montant TTC à partir du HT et du taux de TVA
 */
export function calculateTTC(priceHT: number, vatRate: number = 20.0): number {
  return priceHT * (1 + vatRate / 100);
}

/**
 * Formate une date en français
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Génère un slug propre pour le référencement
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Estimation du temps de recharge (0 à 80%) selon la capacité de batterie en kWh et la puissance en kW
 */
export function estimateChargingTime(batteryCapacityKWh: number, chargerPowerKw: number): {
  hours: number;
  minutes: number;
  label: string;
} {
  // Efficacité de charge ~90%
  const effectiveEnergyNeeded = batteryCapacityKWh * 0.8 * 1.1;
  const totalHours = effectiveEnergyNeeded / chargerPowerKw;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  let label = "";
  if (hours > 0 && minutes > 0) {
    label = `${hours}h ${minutes}min`;
  } else if (hours > 0) {
    label = `${hours}h`;
  } else {
    label = `${minutes} min`;
  }

  return { hours, minutes, label };
}
