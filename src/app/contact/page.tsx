import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contactez le Collectif Or du commun pour visiter nos espaces, vous inscrire à une formation ou en savoir plus.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
