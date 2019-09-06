import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "shared-components";
import Card, {
  CardSection,
  CardSectionHeader
} from "@kiwicom/orbit-components/lib/Card";
import { PassengerOutline } from "@kiwicom/orbit-components/lib/icons";
import { Heading, Popover, ListChoice } from "@kiwicom/orbit-components/";
import SearchBar from "unsplash-client-searchbar";
const navigate = (history, to) => history.push(to);

export default ({ history, auth }) => (
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
          <Popover
            noPadding
            content={
              <>
                <ListChoice
                  title="Profile"
                  onClick={() => navigate(history, "/profile")}
                />
                <ListChoice
                  title={auth ? "Logout" : "Login"}
                  onClick={() => navigate(history, auth ? "/logout" : "/login")}
                />
              </>
            }
          >
            <Icon Icon={PassengerOutline} />
          </Popover>
        </div>
      </CardSectionHeader>
    </CardSection>
  </Card>
);
