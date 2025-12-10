"use client";

import { useState } from "react";
import styles from "./page.module.css";

const greetings = [
  { language: "Español", text: "Hola" },
  { language: "English", text: "Hello" },
  { language: "Français", text: "Salut" },
  { language: "Deutsch", text: "Hallo" },
  { language: "Português", text: "Olá" },
  { language: "Italiano", text: "Ciao" }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % greetings.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + greetings.length) % greetings.length);
  };

  const current = greetings[index];

  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <p className={styles.intro}>Un saludo global</p>
        <h1 className={styles.greeting}>{current.text}</h1>
        <p className={styles.language}>{current.language}</p>
        <div className={styles.controls}>
          <button type="button" onClick={handlePrev}>
            Anterior
          </button>
          <button type="button" onClick={handleNext}>
            Siguiente
          </button>
        </div>
      </section>
    </main>
  );
}
