import { useCookie, useState } from "#app";
import type { Router } from "vue-router";
import type { UserData, GoogleAuthResponse, UserToken } from "@/types/auth";

/** Retrieves user authentication state */
export const getUserAuthState = () => {
  const userToken = useState<UserToken>("userToken", () => null);
  const userData = useState<UserData | null>("userData", () => null);

  if (process.client) {
    try {
      userToken.value = localStorage.getItem("userToken") || null;
      userData.value = JSON.parse(localStorage.getItem("userData") || "null");
    } catch (error) {
      console.error("Failed to parse userData:", error);
      userData.value = null;
    }
  }

  return { userToken, userData };
};

/** Logs out the user and clears session */
export const logoutUser = (router: Router) => {
  const userCookie = useCookie("userData");

  userCookie.value = null;
  localStorage.removeItem("userData");
  localStorage.removeItem("userToken");
  // reload the page to clear the user state
  window.location.reload();
  router.push("/");
};

/** Loads Google Sign-In script */
export const loadGoogleSignIn = (
  googleClientId: string,
  callback: (response: GoogleAuthResponse) => void,
) => {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  script.onload = () => {
    window.google.accounts.id.initialize({
      client_id: googleClientId,
      callback,
    });
    window.google.accounts.id.renderButton(
      document.querySelector(".g_id_signin"),
      { theme: "outline", size: "large" },
    );
  };
  document.head.appendChild(script);
};

/** Handles Google authentication response */
export const handleCredentialResponse = (
  response: GoogleAuthResponse,
  user: globalThis.Ref<UserData | null>,
) => {
  const idToken = response.credential;
  localStorage.setItem("userToken", idToken);

  const userData = parseJwt(idToken);
  user.value = userData;
  localStorage.setItem("userData", JSON.stringify(userData));

  if (userData) {
    window.location.reload();
  }
};

/** Parses a JWT token */
export const parseJwt = (token: string): UserData | null => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    console.error("Error parsing JWT:", e);
    return null;
  }
};

/** Redirects authenticated users */
export const checkUserAndRedirect = (
  router: Router,
  userToken: globalThis.Ref<UserToken>,
) => {
  if (userToken.value) {
    router.push("/");
  }
};
