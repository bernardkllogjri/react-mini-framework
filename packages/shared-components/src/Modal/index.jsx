import React from "react";
import { Modal as OrbitModal, Stack, Text } from "@kiwicom/orbit-components";
import { Card } from "shared-components";
import { ModalHeader, ModalSection } from "@kiwicom/orbit-components/lib/Modal";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Control = styled.div`
  width: 25px;
  color: white;
  height: 25px;
  font-size: 25px;
  cursor: pointer;
  line-height: 0.8;
  text-align: center;
  border-radius: 50%;
  background-color: #4c4c4ca3;
  box-shadow: 0px 0px 5px #000000a3;
  ${({ position }) => `margin-${position}:10px`};
`;

export const Modal = ({ onClose }) => (
  <OrbitModal onClose={onClose} fixedFooter size="large">
    <ModalHeader
      title={
        <Link to={{ pathname: "/post", state: { _id: "dsadsad" } }}>Title</Link>
      }
      description="Deeeesssscccccc…"
    />
    <ModalSection suppressed>
      <Stack justify="center">
        <div style={{ width: "50%" }}>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <Control onClick={previousSlide} position="left">
                ‹
              </Control>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Control onClick={nextSlide} position="right">
                ›
              </Control>
            )}
          >
            <img src="http://via.placeholder.com/640x360" />
            <img src="http://via.placeholder.com/640x360" />
            <img src="http://via.placeholder.com/640x360" />
          </Carousel>
        </div>
        <div style={{ width: "50%" }}>
          <Card header={<Text weight="bold">Comments</Text>}>
            <Text>Op</Text>
            <Text>Op</Text>
            <Text>Op</Text>
            <Text>Op</Text>
          </Card>
        </div>
      </Stack>
    </ModalSection>
  </OrbitModal>
);
