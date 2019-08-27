import { Container } from "shared-components";
import Layout from "shared-page-wrapper";
import { Feed } from "./page";
import React from "react";

export default () => {
  return (
    <Layout>
      <Container>
        <Feed />
      </Container>
    </Layout>
  );
};
