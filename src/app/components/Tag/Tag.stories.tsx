import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

//export const myTag = (): JSX.Element => <Tag categories={['category']} />;

export const Regular = (): JSX.Element => <Tag>some text</Tag>;
export const Other = (): JSX.Element => <Tag>looonger text</Tag>;
