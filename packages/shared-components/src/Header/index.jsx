import React from "react";
import Card, {
  CardSection,
  CardSectionHeader,
  CardSectionContent
} from "@kiwicom/orbit-components/lib/Card";
import Text from "@kiwicom/orbit-components/lib/Text";
import Heading from "@kiwicom/orbit-components/lib/Heading";

export const Header = () => (
  <Card>
    <CardSection expandable initialExpanded>
      <CardSectionHeader>
        <Heading type="title3" element="h3">
          Header
        </Heading>
      </CardSectionHeader>
      <CardSectionContent>
        <Text>Site Description</Text>
      </CardSectionContent>
    </CardSection>
  </Card>
);
