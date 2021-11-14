import styled from 'styled-components';

type DeleteButtonProps = { thingId: number };

const DeleteButton = styled.button.attrs((props: DeleteButtonProps) => ({
  thingId: props.thingId,
}))`
  background: #ee36d5 35%;
  width: 30px;
  height: 30px;
  font-size: 14px;
  border-radius: 50%;
  text-transform: uppercase;
  color: white;
  margin: 2px 200px -60px;
`;

export default DeleteButton;
