import React, { useState, useEffect, useCallback } from "react";
import { Container, Card, Modal } from "shared-components";
import Masonry from "react-responsive-masonry";
import Layout from "shared-page-wrapper";
import mock from "./mock.json";

export default () => {
  const [opened, setOpened] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const addResponsiveness = useCallback(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener("resize", addResponsiveness);
    return () => {
      window.removeEventListener("resize", addResponsiveness);
    };
  }, []);
  return (
    <Layout>
      {opened && <Modal onClose={() => setOpened(false)} />}
      <Container>
        <Card
          onClick={() => setOpened(true)}
          header="Profile"
          image="http://via.placeholder.com/640x360"
        />
        <Masonry columnsCount={width < 700 ? 2 : 3} gutter={5}>
          {mock.map(({ header, image }, i) => (
            <Card
              key={i}
              onClick={() => setOpened(true)}
              header={header}
              {...(image ? { image } : {})}
            />
          ))}
        </Masonry>
      </Container>
    </Layout>
  );
};
