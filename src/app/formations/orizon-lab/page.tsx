import type { Metadata } from "next";
import { getFormation } from "@/lib/formations";
import { FormationPage } from "@/components/formation-page";

const f = getFormation("orizon-lab");

export const metadata: Metadata = {
  title: f.metaTitle,
  description: f.metaDescription,
  alternates: { canonical: "/formations/orizon-lab" },
};

export default function Page() {
  return <FormationPage f={f} />;
}
