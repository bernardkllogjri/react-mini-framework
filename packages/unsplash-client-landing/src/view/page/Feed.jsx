import { Animation, Card, Title } from "shared-components";
import React, { useEffect, useState } from "react";
import { Mock } from "shared-api";

export const Feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Mock.all().then(res => {
      if (res.data.success) {
        setData(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    });
  }, []);

  return loading ? (
    <Animation path="/animations/camera.json" />
  ) : (
    data.map(card => (
      <Card
        spacing={10}
        key={card._id}
        header={card.title}
        image="/images/placeholder.png"
        deck
      >
        <Title>{card.desc}</Title>
      </Card>
    ))
  );
};
