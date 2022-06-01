import Item from "./Item";
import "./mostRented.css"
import {Container , Stack} from "@mui/material"

const MostRented = () => {
  return (
      <Container >
    <Stack direction={{ xs: 'column', md: 'row' }} gap="20px">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
      </Container>
  );
};


export default MostRented