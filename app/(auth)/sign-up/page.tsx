"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../Layout";
import AuthForm from "@/components/AuthForm";
import { getCurrentUser } from "@/lib/actions/user.actions"; // Your function to check user auth

const SignUp = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect logged-in users to the home page
    getCurrentUser().then((user) => {
      if (user) {
        router.replace("/");
      }
    });

    // Prevent back navigation to this page
    const handleBack = () => {
      router.replace("/");
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  return (
    <Layout>
      <AuthForm type="sign-up" />
    </Layout>
  );
};

export default SignUp;
