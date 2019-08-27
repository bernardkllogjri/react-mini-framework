import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import StarFull from "@kiwicom/orbit-components/lib/icons/StarFull";
import { Icon } from "shared-components";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
`;

export default ({ liked }) => (
  <Container>
    {!liked ? <Icon Icon={StarEmpty} /> : <Icon Icon={StarFull} />}
  </Container>
);
