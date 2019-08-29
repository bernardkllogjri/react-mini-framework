import React from "react";
import Img from "./Img";
import Deck from "./Deck";
import Container from "./Container";
import OrbitCard, {
  CardSection,
  CardSectionHeader
} from "@kiwicom/orbit-components/lib/Card";
import { Heading, Loading } from "@kiwicom/orbit-components";

const Card = ({ header, children, loading, deck, image, onClick }) => {
  return (
    <Container clickable={!!onClick} onClick={onClick}>
      <OrbitCard>
        <Loading type="boxLoader" loading={loading}>
          <CardSection>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {header}
              </Heading>
            </CardSectionHeader>
          </CardSection>
          {image && <Img src={image} alt="Placeholder" />}
          {deck && <Deck />}
          {children && (
            <CardSection>
              <CardSectionHeader>{children}</CardSectionHeader>
            </CardSection>
          )}
        </Loading>
      </OrbitCard>
    </Container>
  );
};

export { Card };
