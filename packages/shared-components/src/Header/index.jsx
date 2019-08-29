import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Heading type="title3" element="h3">
              HOME
            </Heading>
          </Link>
          <SearchBar />
          <Icon Icon={PassengerOutline} navigate="/profile" />
        </div>
      </CardSectionHeader>
    </CardSection>
  </Card>
);
