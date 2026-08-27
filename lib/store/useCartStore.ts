import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItemType, AppliedCoupon } from "@/types";

export interface CartStore {
  items: CartItemType[];
  isDrawerOpen: boolean;
  appliedCoupon: AppliedCoupon | null;
  installationOption: boolean; // Forfait pose certifiée IRVE
  
  // Actions
  addItem: (item: Omit<CartItemType, "quantity" | "id">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  applyCoupon: (coupon: AppliedCoupon) => void;
  removeCoupon: () => void;
  setInstallationOption: (enabled: boolean) => void;

  // Computed Helpers
  getItemCount: () => number;
  getSubtotalHT: () => number;
  getSubtotalTTC: () => number;
  getTaxAmount: () => number;
  getShippingCost: () => number;
  getDiscountAmount: () => number;
  getInstallationCost: () => number;
  getTotalTTC: () => number;
}

const FREE_SHIPPING_THRESHOLD = 300; // Livraison offerte dès 300€
const STANDARD_SHIPPING_COST = 14.90;
const IRVE_INSTALLATION_PACKAGE_PRICE = 590.0; // Forfait installation standard IRVE TTC

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      appliedCoupon: null,
      installationOption: false,

      addItem: (newItem, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (i) => i.productId === newItem.productId
          );

          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += quantity;
            return { items: updated, isDrawerOpen: true };
          }

          return {
            items: [
              ...state.items,
              {
                ...newItem,
                id: `${newItem.productId}-${Date.now()}`,
                quantity,
              },
            ],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], appliedCoupon: null, installationOption: false });
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

      applyCoupon: (coupon) => set({ appliedCoupon: coupon }),
      removeCoupon: () => set({ appliedCoupon: null }),
      setInstallationOption: (enabled) => set({ installationOption: enabled }),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotalTTC: () => {
        return get().items.reduce(
          (total, item) => total + item.priceTTC * item.quantity,
          0
        );
      },

      getSubtotalHT: () => {
        return get().items.reduce(
          (total, item) => total + item.priceHT * item.quantity,
          0
        );
      },

      getInstallationCost: () => {
        return get().installationOption ? IRVE_INSTALLATION_PACKAGE_PRICE : 0;
      },

      getShippingCost: () => {
        const subtotal = get().getSubtotalTTC();
        if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) {
          return 0;
        }
        return STANDARD_SHIPPING_COST;
      },

      getDiscountAmount: () => {
        const coupon = get().appliedCoupon;
        if (!coupon) return 0;
        const subtotal = get().getSubtotalTTC();

        if (coupon.discountType === "PERCENT") {
          return (subtotal * coupon.value) / 100;
        }
        return Math.min(coupon.value, subtotal);
      },

      getTaxAmount: () => {
        const subtotalTTC = get().getSubtotalTTC();
        const subtotalHT = get().getSubtotalHT();
        return Math.max(0, subtotalTTC - subtotalHT);
      },

      getTotalTTC: () => {
        const subtotal = get().getSubtotalTTC();
        const shipping = get().getShippingCost();
        const discount = get().getDiscountAmount();
        const installation = get().getInstallationCost();

        return Math.max(0, subtotal + shipping + installation - discount);
      },
    }),
    {
      name: "chargebox_cart_storage",
      partialize: (state) => ({
        items: state.items,
        appliedCoupon: state.appliedCoupon,
        installationOption: state.installationOption,
      }),
    }
  )
);
