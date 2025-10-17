"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ redirect when authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Loader while checking session
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Show buttons only if user is NOT logged in */}
        {status === "unauthenticated" && (
          <>
            <div
              className={styles.socialButton}
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </div>
            <div
              className={styles.socialButton}
              onClick={() => signIn("github")}
            >
              Sign in with Github
            </div>
            <div
              className={styles.socialButton}
              onClick={() => signIn("facebook")}
            >
              Sign in with Facebook
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
