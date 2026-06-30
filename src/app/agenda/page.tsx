import type { Metadata } from "next";
import { AgendaClient } from "./AgendaClient";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Découvrez les prochains événements, formations et Before-weeks du Collectif Or du commun à Andolsheim.",
  alternates: {
    canonical: "/agenda",
  },
};

export default function AgendaPage() {
  return <AgendaClient />;
}
