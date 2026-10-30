import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string; // champ honeypot anti-spam, doit rester vide
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : un bot remplit ce champ caché, un humain ne le voit jamais.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return NextResponse.json({ error: "Message invalide." }, { status: 400 });
  }

  // TODO avant mise en production : brancher un vrai fournisseur d'e-mail
  // transactionnel (ex. Resend, Postmark) avec une clé API stockée en
  // variable d'environnement. Pour l'instant la soumission est validée
  // côté serveur mais seulement journalisée.
  console.info("[contact] nouveau message", {
    name,
    email,
    company: body.company?.trim() || undefined,
    message,
  });

  return NextResponse.json({ ok: true });
}
