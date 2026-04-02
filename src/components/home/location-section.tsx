import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, Clock, ArrowRight } from "lucide-react";

export function LocationSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-bleu mb-6">
              Venez nous rencontrer
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3 text-gris text-sm">
                <MapPin className="h-5 w-5 text-bleu mt-0.5 shrink-0" />
                <span>4 Grand'Rue, 68280 Andolsheim (Haut-Rhin)</span>
              </div>
              <div className="flex items-start gap-3 text-gris text-sm">
                <Car className="h-5 w-5 text-bleu mt-0.5 shrink-0" />
                <span>A 10 min de Colmar · Parking gratuit · Bus ligne 400</span>
              </div>
              <div className="flex items-start gap-3 text-gris text-sm">
                <Clock className="h-5 w-5 text-bleu mt-0.5 shrink-0" />
                <span>Lun–Ven : 8h–18h · Sam–Dim : fermé</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-or text-bleu-dark px-7 py-3.5 rounded-lg font-semibold hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <Image
              src="https://collectiforducommun.org/wp-content/uploads/2026/03/odc-exterieur-batiment.jpg"
              alt="Batiment du Collectif Or du Commun a Andolsheim"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
