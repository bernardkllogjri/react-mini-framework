import React from "react";
import Img from "./Img";
import Deck from "./Deck";
import Container from "./Container";
import OrbitCard, {
  CardSection,
  CardSectionHeader
} from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Loading from "@kiwicom/orbit-components/lib/Loading";

const Card = ({ header, children, loading }) => {
  return (
    <Container>
      <OrbitCard>
        <Loading type="boxLoader" loading={loading}>
          <CardSection>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {header}
              </Heading>
            </CardSectionHeader>
          </CardSection>
          <Img src="/images/placeholder.png" alt="Placeholder" />
          <Deck />
          <CardSection>
            <CardSectionHeader>{children}</CardSectionHeader>
          </CardSection>
          {/* <div style={{ padding: 10 }}> */}
          {/* </div> */}
        </Loading>
      </OrbitCard>
    </Container>
  );
};

export { Card };
