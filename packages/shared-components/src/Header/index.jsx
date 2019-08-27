import React from "react";
import { Icon, SearchBar } from "shared-components";
import Card, {
  CardSection,
  CardSectionHeader
} from "@kiwicom/orbit-components/lib/Card";
import { Heading } from "@kiwicom/orbit-components/";
import { PassengerOutline } from "@kiwicom/orbit-components/lib/icons";

export const Header = () => (
  <Card>
    <CardSection>
      <CardSectionHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Heading type="title3" element="h3">
            Header
          </Heading>
          <SearchBar />
          <Icon Icon={PassengerOutline} />
        </div>
      </CardSectionHeader>
    </CardSection>
  </Card>
);
