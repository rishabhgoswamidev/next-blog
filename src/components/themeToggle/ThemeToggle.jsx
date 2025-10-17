"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Skip server render

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <img src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <img src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
