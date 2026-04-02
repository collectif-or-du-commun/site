import type { Metadata } from "next";
import { AgendaClient } from "./AgendaClient";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Découvrez les prochains événements, formations et Before-Weeks du Collectif Or du Commun à Andolsheim.",
};

export default function AgendaPage() {
  return <AgendaClient />;
}
