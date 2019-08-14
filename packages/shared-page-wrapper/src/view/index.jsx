import React from "react";
import { Header } from "shared-components";
import { Wrapper } from "./styles";
import Card, {
  CardSection,
  CardSectionContent,
  CardSectionHeader
} from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";

export default ({ children, header }) => (
  <Wrapper>
    <Header />
    <Card>
      <CardSection initialExpanded>
        <CardSectionHeader>
          <Heading type="title3" element="h3">
            {header}
          </Heading>
        </CardSectionHeader>
        <CardSectionContent>{children}</CardSectionContent>
      </CardSection>
    </Card>
  </Wrapper>
);
