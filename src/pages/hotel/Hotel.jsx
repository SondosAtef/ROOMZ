import "./hotel.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Container, TextField, Box, Stack, Typography , Button } from "@mui/material";

import {useState} from "react"

import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  
	return (
		<Box sx={{ backgroundColor: "#EDE0D4" }}>
			<Navbar />
      <Container >
			<Stack mt={2}>

      {open && (
          <div className="slider">
            <CloseIcon
              className="close"
              onClick={() => setOpen(false)}
            />
            <ArrowBackIosIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <ArrowForwardIosIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}


				<Stack className="hotelWrapper" spacing={2}>
        <Typography  color="#785740" variant="h4" sx={{ fontWeight: 'bold' }}>
            Tower Street Apartments
          </Typography>  
					<Typography color="#785740" variant="body2">
						Elton St 125 New york
					</Typography>
					<Typography variant="body1" color="#ca6702" sx={{ fontWeight: 'bold' }}>
						Excellent location – 500m from center
            </Typography>
            <Typography variant="body1" color="#ca6702" >
						Book a stay over $114 at this property and get a free WIFI
            </Typography>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img
                   onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>{/* hotel Images */}

          <Stack direction="row" justifyContent="space-between"  spacing={2}>
          <Box flex="3">
          <Typography  color="#785740" variant="h4" sx={{ fontWeight: 'bold' }}>
                Stay in the heart of City</Typography>
                <Typography variant="body2" color="#785740" mt={2}>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </Typography>
            </Box>{/* hotelDetailsTexts */}

            <Stack flex="1" spacing={2} sx={{backgroundColor : "#fff" , padding: "20px" ,  borderRadius : "10px"}} >
            <Typography variant="h6" color="#785740" sx={{ fontWeight: 'bold' }}>
                Perfect for a 9-night stay! </Typography>
                <Typography variant="body1" color="#785740">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </Typography>
              <Typography variant="h5" color="#ca6702" sx={{ fontWeight: 'bold' }}>
                <b>$945</b> (9 nights)
              </Typography>
              <Button variant="contained" sx={{
              width: "100%",
              marginTop : "15px",
              background:"#9c6644" , color:"#ede0d4", "&:hover":{backgroundColor :"#7f5539"} }}>
                Reserve or Book Now!</Button>
            </Stack>{/* hotelDetailsPrice */}


          </Stack> {/* hotelDetails */}
            



				</Stack>{/* hotelWrapper */}
        
			</Stack>{/* hotelContainer */}
      </Container >
      <MailList />
          
          <Footer />
		</Box>
    
	);
};

export default Hotel;
