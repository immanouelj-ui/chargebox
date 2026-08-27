export interface UserSession {
  id: string;
  email: string;
  name: string | null;
  role: "ADMIN" | "CUSTOMER" | "PRO";
  companyName?: string | null;
  siret?: string | null;
  vatNumber?: string | null;
  phone?: string | null;
}

export interface ProductWithDetails {
  id: string;
  reference: string;
  sku: string;
  slug: string;
  name: string;
  brandId: string;
  brand: {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
  };
  categoryId: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  shortDescription: string | null;
  description: string;
  priceHT: number;
  priceTTC: number;
  vatRate: number;
  compareAtPrice: number | null;
  stock: number;
  inStock: boolean;
  leadTimeDays: number;
  powerKw: number;
  phaseType: string;
  connectorType: string;
  cableLengthMeters: number | null;
  ipRating: string | null;
  ikRating: string | null;
  ocppVersion: string | null;
  hasDynamicLoad: boolean;
  hasSolarMode: boolean;
  hasWifi: boolean;
  hasRfid: boolean;
  has4G: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  isActive: boolean;
  isAdvenirEligible: boolean;
  images: {
    id: string;
    url: string;
    alt: string | null;
    isPrimary: boolean;
    order: number;
  }[];
  specifications: {
    id: string;
    group: string;
    name: string;
    value: string;
    order: number;
  }[];
  reviews?: {
    id: string;
    authorName: string;
    rating: number;
    title: string | null;
    comment: string;
    createdAt: Date | string;
  }[];
}

export interface CartItemType {
  id: string;
  productId: string;
  slug: string;
  name: string;
  reference: string;
  sku: string;
  brandName: string;
  priceHT: number;
  priceTTC: number;
  vatRate: number;
  image: string;
  powerKw?: number;
  quantity: number;
}

export interface AppliedCoupon {
  code: string;
  description: string | null;
  discountType: "PERCENT" | "FIXED";
  value: number;
}

export interface FilterState {
  search?: string;
  brand?: string[];
  power?: number[];
  phase?: string[];
  connector?: string[];
  hasSolar?: boolean;
  hasDynamicLoad?: boolean;
  has4G?: boolean;
  hasRfid?: boolean;
  inStockOnly?: boolean;
  minPrice?: number;
  maxPrice?: number;
  sort?: "price-asc" | "price-desc" | "power-desc" | "popular" | "newest";
}

export interface OrderDetailType {
  id: string;
  orderNumber: string;
  createdAt: string | Date;
  status: "PENDING" | "PAID" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  paymentStatus: "UNPAID" | "PAID" | "FAILED" | "REFUNDED";
  subtotalHT: number;
  taxAmount: number;
  shippingCost: number;
  discountAmount: number;
  totalTTC: number;
  customerEmail: string;
  customerName: string;
  customerPhone: string | null;
  isB2B: boolean;
  companyName: string | null;
  siret: string | null;
  vatNumber: string | null;
  shippingAddress: string;
  billingAddress: string;
  carrier: string | null;
  trackingNumber: string | null;
  installationRequested: boolean;
  notes: string | null;
  items: {
    id: string;
    productId: string;
    productName: string;
    productSku: string;
    unitPriceHT: number;
    unitPriceTTC: number;
    vatRate: number;
    quantity: number;
    totalHT: number;
    totalTTC: number;
  }[];
}
