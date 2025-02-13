import React from "react";
import Layout from "../Layout";
import AuthForm from "@/components/AuthForm";

const SignUp = () => {
  return (
    <Layout>
      <AuthForm type="sign-up" />
    </Layout>
  );
};

export default SignUp;
