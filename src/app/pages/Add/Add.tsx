import React from 'react';

export default function Add(): JSX.Element {
  return (
    <form>
      <label>Name</label>
      <input type="text" />
      <label>Description</label>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
