"use client";

import React, { useState } from "react";
import { Zap, Clock, BatteryCharging } from "lucide-react";
import { estimateChargingTime } from "@/lib/utils";

interface ChargingTimeCalculatorProps {
  chargerPowerKw: number;
}

export function ChargingTimeCalculator({ chargerPowerKw }: ChargingTimeCalculatorProps) {
  const evModels = [
    { name: "Tesla Model Y / Model 3", batteryKWh: 60, brand: "Tesla" },
    { name: "Renault Megane E-Tech", batteryKWh: 60, brand: "Renault" },
    { name: "Peugeot e-208 / e-2008", batteryKWh: 50, brand: "Peugeot" },
    { name: "Volkswagen ID.4 / ID.3", batteryKWh: 77, brand: "Volkswagen" },
    { name: "Hyundai Ioniq 5 / Kia EV6", batteryKWh: 77.4, brand: "Hyundai/Kia" },
    { name: "BMW i4 / iX3", batteryKWh: 80, brand: "BMW" },
  ];

  const [selectedCar, setSelectedCar] = useState(evModels[0]);

  const estimate = estimateChargingTime(selectedCar.batteryKWh, chargerPowerKw);

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 shadow-md">
      <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">
        <BatteryCharging className="w-4 h-4" />
        <span>Simulateur de Temps de Recharge (20% à 80%)</span>
      </div>

      <h4 className="text-lg font-bold text-white mb-4">
        Combien de temps pour recharger votre véhicule avec cette borne ({chargerPowerKw} kW) ?
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium">
            Sélectionnez votre véhicule électrique :
          </label>
          <select
            value={selectedCar.name}
            onChange={(e) => {
              const found = evModels.find((m) => m.name === e.target.value);
              if (found) setSelectedCar(found);
            }}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
          >
            {evModels.map((car) => (
              <option key={car.name} value={car.name}>
                {car.name} ({car.batteryKWh} kWh)
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl bg-slate-800/80 border border-slate-700/80 p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Temps estimé (20% &rarr; 80%)</span>
            <span className="text-2xl font-black text-brand-400">{estimate.label}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <p className="text-[11px] text-slate-400 mt-3">
        * Estimation basée sur le chargeur embarqué standard du véhicule et un rendement de charge de 90%.
      </p>
    </div>
  );
}
