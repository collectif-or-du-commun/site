import type { Metadata } from "next";
import { AgendaClient } from "./AgendaClient";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Decouvrez les prochains evenements, formations et Before-Weeks du Collectif Or du Commun a Andolsheim.",
};

export default function AgendaPage() {
  return <AgendaClient />;
}
