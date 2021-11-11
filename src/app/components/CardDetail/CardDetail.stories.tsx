import React from 'react';
import CardDetail from './CardDetail';

export default {
  title: 'Component/CardDetail',
  component: CardDetail,
};

export const Detail = (): JSX.Element => (
  <CardDetail
    name="stvar"
    description="moja stvar"
    categories={['br1', 'br', 'br3']}
  />
);
