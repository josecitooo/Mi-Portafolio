import { useEffect } from "react";

const WORKER_URL = "https://just-another.onrender.com/api/track";

/**
 * Registra la visita una sola vez por sesión de navegador.
 * No bloquea el render, no muestra nada, no espera respuesta.
 */
export function useTrackVisitor() {
  useEffect(() => {
    if (sessionStorage.getItem("visit_tracked")) return;

    fetch(WORKER_URL, { method: "POST" }).catch(() => {
      // Si falla (sin internet, adblock, etc.) no hacemos nada,
      // simplemente no se registra esa visita.
    });

    sessionStorage.setItem("visit_tracked", "true");
  }, []);
}