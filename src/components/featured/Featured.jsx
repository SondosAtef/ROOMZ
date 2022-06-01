import { Stack, Box, Container, Typography } from "@mui/material";
import "./featured.css"

const Featured = () => {
  return (
      <Container>
    <Stack direction="row" gap={5} width="100%" >
        <Box className="featured-item">
            <img src="https://irenasjourney.files.wordpress.com/2009/09/my-room-to-the-right-of-the-door.jpg" alt="room" className="featured-img" />
            <Box className="featured-titles">
                <Typography>Cairo</Typography>
                <Typography>321 Properties</Typography>
            </Box>
        </Box>
        <Box className="featured-item">
            <img src="https://www.thehotelbalmoral.co.uk/wp-content/uploads/2014/02/Room-three-300x224.jpg" alt="room"  className="featured-img"/>
            <Box className="featured-titles">
                <Typography>
Alexandria</Typography>
                <Typography>210 Properties</Typography>
            </Box>
        </Box>
        <Box className="featured-item">
            <img src="https://th.bing.com/th/id/OIP.XWzXgR4D2AfC5RnIknlyuwHaE6?pid=ImgDet&w=665&h=441&rs=1" alt="room" className="featured-img" />
            <Box className="featured-titles">
                <Typography>Cairo</Typography>
                <Typography>321 Properties</Typography>
            </Box>
        </Box>
    </Stack>
    </Container>
  )
}

export default Featured