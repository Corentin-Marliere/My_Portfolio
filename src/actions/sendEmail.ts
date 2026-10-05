"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  rgpdConsent: boolean;
}

export interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendEmail(
  payload: SendEmailPayload,
): Promise<SendEmailResponse> {
  const { name, email, subject, message, rgpdConsent } = payload;

  if (!rgpdConsent) {
    return {
      success: false,
      error: "Le consentement RGPD est obligatoire.",
    };
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return {
      success: false,
      error: "Tous les champs obligatoires doivent être renseignés.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Format d'adresse e-mail invalide.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      error: "Clé API Resend manquante sur le serveur.",
    };
  }

  const destinationEmail =
    process.env.CONTACT_EMAIL || "corentin-marliere@epitech.eu";

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const formattedHtmlMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [destinationEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject} - ${name}`,
      text: `Nouveau message de contact :\n\nDe : ${name} (${email})\nObjet : ${subject}\n\nMessage :\n${message}\n\nConsentement RGPD : Validé`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #ffd700; padding-bottom: 12px; margin-top: 0;">
            📬 Nouveau message reçu depuis le Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Expéditeur :</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>E-mail :</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Objet :</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${safeSubject}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #06b6d4; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message :</p>
            <div style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6;">${formattedHtmlMessage}</div>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0 0; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            ✅ Consentement RGPD validé par l'utilisateur.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur renvoyée par Resend:", error);
      return {
        success: false,
        error: error.message || "Erreur lors de l'envoi de l'e-mail.",
      };
    }

    return {
      success: true,
      message: "Message envoyé avec succès !",
    };
  } catch (err: unknown) {
    console.error("Exception serveur:", err);
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "Une erreur inattendue est survenue côté serveur.",
    };
  }
}
