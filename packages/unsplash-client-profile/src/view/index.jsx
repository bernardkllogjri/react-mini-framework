import { Container, Masonry, Card, Modal } from "shared-components";
import Layout from "shared-page-wrapper";
import React, { useState } from "react";
import mock from "./mock.json";

export default () => {
  const [opened, setOpened] = useState(false);

  return (
    <Layout>
      {opened && <Modal onClose={() => setOpened(false)} />}
      <Container>
        <Card
          onClick={() => setOpened(true)}
          header="Profile"
          image="http://via.placeholder.com/640x360"
        />
        <Masonry columns={3} gaps={10}>
          {mock.map(({ header, image }) => (
            <Card
              onClick={() => setOpened(true)}
              header={header}
              {...(image ? { image: image } : {})}
            />
          ))}
        </Masonry>
      </Container>
    </Layout>
  );
};
