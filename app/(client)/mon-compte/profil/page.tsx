import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User, ShieldCheck, Mail, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default async function ClientProfilPage() {
  const sessionUser = await getCurrentUser();

  const user = await prisma.user.findUnique({
    where: { id: sessionUser?.id },
  });

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-900">
          Profil &amp; Sécurité
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Modifiez vos informations personnelles et vos paramètres de sécurité
        </p>
      </div>

      <div className="space-y-6 max-w-xl">
        <div className="space-y-4">
          <Input
            label="Nom Complet"
            defaultValue={user.name || ""}
            leftIcon={<User className="w-4 h-4" />}
          />

          <Input
            label="Adresse Email"
            defaultValue={user.email}
            type="email"
            leftIcon={<Mail className="w-4 h-4" />}
            disabled
            helperText="L'adresse email est votre identifiant de connexion sécurisé."
          />

          <Input
            label="Téléphone"
            defaultValue={user.phone || ""}
            type="tel"
            leftIcon={<Phone className="w-4 h-4" />}
          />

          {user.role === "PRO" && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase">Informations Société (B2B)</h4>
              <Input
                label="Raison Sociale"
                defaultValue={user.companyName || ""}
                leftIcon={<Building2 className="w-4 h-4" />}
              />
              <Input
                label="Numéro SIRET"
                defaultValue={user.siret || ""}
              />
              <Input
                label="Numéro TVA Intracommunautaire"
                defaultValue={user.vatNumber || ""}
              />
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Button variant="electric" size="md">
            Enregistrer les modifications
          </Button>
        </div>
      </div>
    </div>
  );
}
