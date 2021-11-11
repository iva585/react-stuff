import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail/CardDetail';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const [thing, setThing] = useState<null | Thing>(null);
  const { thingID } = useParams();

  //const { myStuff } = useParams();

  useEffect(() => {
    async function fetchThing() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingID}`
      );
      const newThing = await response.json();
      setThing(newThing);
    }
    fetchThing();
  }, []);

  return (
    <>
      {thing && (
        <CardDetail
          name={thing.name}
          description={thing.description}
          categories={thing.categories}
        />
      )}
    </>
  );
}
