"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" }); // ✅ redirect to /login
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.links}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.links}>Write</Link>
          <span className={styles.link} onClick={() => setShowLogoutModal(true)}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>

          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={() => setShowLogoutModal(true)}>Logout</span>
            </>
          )}
        </div>
      )}

      {/* --- Logout Confirmation Modal --- */}
      {showLogoutModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className={styles.modalActions}>
              <button onClick={handleLogout} className={styles.confirmBtn}>Yes, Logout</button>
              <button onClick={() => setShowLogoutModal(false)} className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
