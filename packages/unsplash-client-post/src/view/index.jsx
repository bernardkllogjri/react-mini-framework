import { Card, Stack, Container } from "shared-components";
import Layout from "shared-page-wrapper";
import React from "react";

export default props => (
    <Layout>
      <Container>
        <Stack centered>
            <Card header="op" image="/images/placeholder.png">
              op
          </Card>
          <Card header="op">op</Card>
        </Stack>
      </Container>
    </Layout>
);
