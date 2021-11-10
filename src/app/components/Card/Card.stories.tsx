import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const exampleContentRegular = {
  name: 'Books',
  description: 'use as standing table',
};

const exampleContentDetail = {
  name: 'Books',
  description: 'use as standing table',
  categories: ['bye backpain', 'books', 'lifehack'],
};

export const Regular = (): JSX.Element => (
  <Card content={exampleContentRegular} />
);
export const Detail = (): JSX.Element => (
  <Card content={exampleContentDetail} />
);
