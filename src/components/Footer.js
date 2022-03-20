import styled from "styled-components";

const ListItem = styled.li`
  color: #000;

  &:hover {
    color: #4B244A;
    cursor: context-menu;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: #EFC7C2;
`;

function Footer() {
  return (
    <List>
      <ListItem>Ir ao Topo</ListItem>
      <ListItem>Artist</ListItem>
      <ListItem>Singles</ListItem>
    </List>
  );
}

export default Footer;