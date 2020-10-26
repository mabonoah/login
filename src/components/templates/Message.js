import { Message } from "./../organisms";

export const MessageTemplate = ({ type, onClick }) => (
  <Message type={type} onClick={onClick}></Message>
);
