"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rgpdConsent: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (status !== "idle" && status !== "loading") {
      setStatus("idle");
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.rgpdConsent || status === "loading") return;

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await sendEmail(formData);

      if (response.success) {
        setStatus("success");
        setFeedbackMessage(
          response.message || "Votre message a bien été envoyé !",
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          rgpdConsent: false,
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          response.error || "Une erreur est survenue lors de l'envoi.",
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("Erreur de connexion au serveur.");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Me Contacter
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto">
          Une opportunité d&apos;alternance, un projet ou simplement envie
          d&apos;échanger ? Envoyez-moi un message !
        </p>
      </div>

      {/* =============== */}
      {/* TERMINAL UBUNTU */}
      {/* =============== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="hidden lg:flex rounded-2xl overflow-hidden border border-white/15 bg-[#0a1820]/95 shadow-2xl font-mono text-sm sm:text-base flex-col justify-between h-full">
          <div className="relative bg-[#14232c] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 select-none">
            <div className="flex items-center z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 text-xs sm:text-sm font-mono cursor-pointer transition-colors">
                ＋
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-16 sm:px-24">
              <span className="text-gray-200 font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap truncate">
                corentin-marliere@epitech.eu
              </span>
            </div>

            <div className="flex items-center justify-end gap-1.5 text-gray-300 z-10">
              <span className="px-2.5 py-1 rounded-md hover:bg-white/10 hover:text-white cursor-pointer transition-colors text-xs sm:text-sm">
                −
              </span>
              <span className="px-2.5 py-1 rounded-md hover:bg-white/10 hover:text-white cursor-pointer transition-colors text-[10px] sm:text-xs">
                □
              </span>
              <span className="px-2.5 py-1 rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-colors text-xs sm:text-sm">
                ✕
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 text-gray-200 flex flex-col justify-between flex-1 gap-6">
            <div className="space-y-3.5 leading-relaxed">
              <div>
                <span className="text-emerald-400 font-bold">➜</span>{" "}
                <span className="text-cyan-400 font-bold">~</span>{" "}
                <span className="text-white font-bold">$ </span>
                <span className="text-yellow-300">curl</span> -X POST
                https://corentin.marliere/api/contact \
              </div>

              <div className="pl-4 sm:pl-6 text-slate-300">
                -H{" "}
                <span className="text-emerald-300">
                  &quot;Content-Type: application/json&quot;
                </span>{" "}
                \
              </div>

              <div className="pl-4 sm:pl-6 text-slate-300">
                -d <span className="text-white">&#39;{"{"}</span>
              </div>

              <div className="pl-8 sm:pl-12 space-y-2 text-xs sm:text-sm md:text-base">
                <p className="wrap-break-words">
                  <span className="text-cyan-300">&quot;nom&quot;</span>:{" "}
                  <span className="text-amber-200">
                    &quot;{formData.name || "..."}&quot;
                  </span>
                  ,
                </p>
                <p className="wrap-break-word">
                  <span className="text-cyan-300">&quot;email&quot;</span>:{" "}
                  <span className="text-amber-200">
                    &quot;{formData.email || "..."}&quot;
                  </span>
                  ,
                </p>
                <p className="wrap-break-words">
                  <span className="text-cyan-300">&quot;objet&quot;</span>:{" "}
                  <span className="text-amber-200">
                    &quot;{formData.subject || "..."}&quot;
                  </span>
                  ,
                </p>
                <div className="wrap-break-words">
                  <span className="text-cyan-300">&quot;message&quot;</span>:{" "}
                  <span className="text-amber-200">
                    {!formData.message ? (
                      <span className="text-amber-200/50">&quot;...&quot;</span>
                    ) : (
                      <span>
                        &quot;
                        {formData.message.split("\n").map((line, idx, arr) => (
                          <span key={idx}>
                            {line}
                            {idx < arr.length - 1 && (
                              <>
                                <span className="text-pink-400 font-bold">
                                  \n
                                </span>
                                <br />
                                <span className="inline-block w-4 sm:w-6" />
                              </>
                            )}
                          </span>
                        ))}
                        &quot;
                      </span>
                    )}
                  </span>
                  ,
                </div>
                <p>
                  <span className="text-cyan-300">
                    &quot;consentement_rgpd&quot;
                  </span>
                  :{" "}
                  <span
                    className={
                      formData.rgpdConsent
                        ? "text-emerald-400 font-bold"
                        : "text-rose-400 font-bold"
                    }
                  >
                    {formData.rgpdConsent ? "true" : "false"}
                  </span>
                </p>
              </div>

              <div className="pl-4 sm:pl-6 text-white">{"}"}&#39;</div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-400">
              <span>&gt; Status: </span>
              {status === "idle" && (
                <span className="text-yellow-400 font-medium">
                  En attente de saisie...
                </span>
              )}
              {status === "loading" && (
                <span className="text-cyan-400 font-medium animate-pulse">
                  Envoi de la requête POST...
                </span>
              )}
              {status === "success" && (
                <span className="text-emerald-400 font-medium">
                  200 : OK - Message envoyé avec succès !
                </span>
              )}
              {status === "error" && (
                <span className="text-rose-400 font-medium">
                  Erreur 400 : Bad Request - {feedbackMessage || "Échec de l'envoi"}
                </span>
              )}
              <span className="animate-pulse text-white ml-1">_</span>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* FORMULAIRE DE CONTACT */}
        {/* ===================== */}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto lg:max-w-none bg-[#0e172f]/80 border border-blue-500/20 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between space-y-4 h-full"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
            >
              Nom & Prénom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Jean Dupont"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
            >
              Adresse E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: jean.dupont@entreprise.fr"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
            >
              Objet du message *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Opportunité d'alternance / Proposition de projet"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Bonjour Corentin, j'ai découvert votre portfolio..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all resize-none"
            />
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
            <input
              type="checkbox"
              id="rgpdConsent"
              name="rgpdConsent"
              required
              checked={formData.rgpdConsent}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  rgpdConsent: e.target.checked,
                }))
              }
              className="mt-0.5 accent-cyan-500 cursor-pointer w-4 h-4 rounded shrink-0"
            />
            <label
              htmlFor="rgpdConsent"
              className="cursor-pointer leading-relaxed text-[11px] sm:text-xs"
            >
              En cochant cette case, j&apos;accepte que mes données personnelles
              soient exclusivement réutilisées pour me recontacter.
            </label>
          </div>

          {status === "success" && (
            <div className="p-3.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
              <span>{feedbackMessage}</span>
            </div>
          )}

          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-center gap-2.5">
              <span>{feedbackMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!formData.rgpdConsent || status === "loading"}
            className={`w-full py-3.5 px-6 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              !formData.rgpdConsent || status === "loading"
                ? "bg-white/10 text-gray-500 border border-white/10 cursor-not-allowed"
                : "bg-[#ffd700] hover:bg-yellow-400 text-black shadow-lg cursor-pointer hover:scale-[1.01]"
            }`}
          >
            {status === "loading" ? (
              <>
                <span>Envoi en cours...</span>
              </>
            ) : status === "success" ? (
              <>
                <span>Message envoyé !</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
