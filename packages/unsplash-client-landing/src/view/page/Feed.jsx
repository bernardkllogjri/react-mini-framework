import { Card, Title } from "shared-components";
import React, { useEffect, useState } from "react";
import { Mock } from "shared-api";

export const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Mock.all().then(res => {
      if (res.data.success) {
        setData(res.data.data);
      }
    });
  }, []);

  return data.map(card => (
    <Card
      spacing={10}
      key={card._id}
      header={card.title}
      image="/images/placeholder.png"
      deck
    >
      <Title>{card.desc}</Title>
    </Card>
  ));
};
