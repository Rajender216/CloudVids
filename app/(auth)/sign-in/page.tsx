import React from "react";
import Layout from "../Layout";
import AuthForm from "@/components/AuthForm";

const SingIn = () => {
  return (
    <Layout>
      <AuthForm type="sign-in" />
    </Layout>
  );
};

export default SingIn;
