import React from 'react';
import Card from '../../components/Card/Card';

export default function Dashboard(): JSX.Element {
  const exampleContentRegular = {
    name: 'Books',
    description: 'use as standing table',
  };
  return (
    <main>
      <h1>Dashboard</h1>
      <Card content={exampleContentRegular} />
    </main>
  );
}
