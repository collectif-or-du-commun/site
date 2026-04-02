"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const sujet = String(formData.get("sujet") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!nom || !email || !sujet || !message) {
    return { success: false, error: "Tous les champs obligatoires sont requis." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante");
    return { success: false, error: "Service d'envoi temporairement indisponible." };
  }

  const html = `
    <h2>Nouveau message depuis le site</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;font-weight:bold;width:140px">Nom</td><td style="padding:8px">${nom}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      ${telephone ? `<tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${telephone}</td></tr>` : ""}
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Sujet</td><td style="padding:8px">${sujet}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
    </table>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Site Or du Commun <contact@odc.vjacquet.fr>",
        to: ["contact@collectiforducommun.org"],
        reply_to: email,
        subject: `[Site] ${sujet} — ${nom}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return { success: false, error: "L'envoi a échoué. Merci de nous contacter directement par email." };
    }

    return { success: true };
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, error: "Erreur réseau. Merci de réessayer." };
  }
}
