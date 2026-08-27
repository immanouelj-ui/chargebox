import React from "react";

interface SpecItem {
  id: string;
  group: string;
  name: string;
  value: string;
}

interface ProductSpecsTableProps {
  specifications: SpecItem[];
}

export function ProductSpecsTable({ specifications }: ProductSpecsTableProps) {
  // Group specifications by category (e.g. Électrique, Connectique, Boîtier, Normes)
  const grouped = specifications.reduce<Record<string, SpecItem[]>>((acc, spec) => {
    if (!acc[spec.group]) acc[spec.group] = [];
    acc[spec.group].push(spec);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900">
        Caractéristiques Techniques Détaillées
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(grouped).map(([groupName, items]) => (
          <div
            key={groupName}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
          >
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-700 pb-3 border-b border-slate-100 mb-3">
              {groupName}
            </h4>

            <dl className="divide-y divide-slate-100 text-xs">
              {items.map((item) => (
                <div key={item.id} className="py-2.5 flex justify-between gap-4">
                  <dt className="text-slate-500 font-medium">{item.name}</dt>
                  <dd className="text-slate-900 font-bold text-right">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
