import "./searchItem.css"
import { Stack, Box, Container, Typography , Button } from "@mui/material";
const SearchItem = () => {
    return (
        <Stack direction="row" spacing={2} className="search-item">
        <img src="https://irenasjourney.files.wordpress.com/2009/09/my-room-to-the-right-of-the-door.jpg" alt="room"
          className="search-result-img" />
        <Stack direction="column" spacing={2} flex="2" >
        <Typography  color="#785740" variant="h5" sx={{ fontWeight: 'bold' }}>
            Tower Street Apartments
            </Typography>
            <Typography color="#785740" variant="body2">
            500m from center
            </Typography>
          <span className="offer">Free WIFI</span>
          <Typography variant="subtitle2" color="#785740" sx={{ fontWeight: 'bold' }}>
            Studio Apartment with Air conditioning
          </Typography>
          <Typography variant="body2" color="#785740" sx={{ fontWeight: 'bold' }}>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </Typography>
          <Typography variant="body2" color="#ca6702" sx={{ fontWeight: 'bold', fontSize :"12px" }}>
            Free cancellation </Typography>
            <Typography variant="body2" color="#ca6702" sx={{ fontSize :"12px" }}>
            You can cancel later, so lock in this great price today!
          </Typography>
        </Stack>
        <Stack flex="1" justifyContent="space-between">
        <Stack justifyContent="space-between" direction="row">
        <Typography variant="body1" color="#785740"  sx={{ fontWeight: 'bold' }}>
              Excellent</Typography>
            <button className="rating">8.9</button>
          </Stack>
          <Stack sx={{textAlign :"right"}} spacing={1}>
            <span className="price">$112</span>
            <span className="tax">Includes taxes and fees</span>
            <Button variant="contained" sx={{background:"#9c6644" , color:"#ede0d4", "&:hover":{backgroundColor :"#7f5539"} }}>
              See availability</Button>
          </Stack>
        </Stack>
      </Stack>
    )
  }
  
  export default SearchItem