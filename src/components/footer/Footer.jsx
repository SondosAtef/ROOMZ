import "./footer.css";
import {Stack , Box , Container} from "@mui/material"

const Footer = () => {
  return (
    <Container>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="space-between" width="100%">
      <Box>
        <ul className="footer-list">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        </Box>
        <Box>
        <ul className="footer-list">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        </Box>
        <Box>

        <ul className="footer-list">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        </Box>
        <Box>
        <ul className="footer-list">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
        </Box>
    </Stack>
      <Box textAlign="center">Copyright © 2022 ROOMZ.</Box>
      </Container>
  );
};

export default Footer;