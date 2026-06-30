import type { Metadata } from "next";
import { getFormation } from "@/lib/formations";
import { FormationPage } from "@/components/formation-page";

const f = getFormation("coup-de-pouce");

export const metadata: Metadata = {
  title: f.metaTitle,
  description: f.metaDescription,
  alternates: { canonical: "/formations/coup-de-pouce" },
};

export default function Page() {
  return <FormationPage f={f} />;
}
