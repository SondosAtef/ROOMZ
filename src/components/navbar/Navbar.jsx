
import { Stack, Box, Container, Typography , Button } from "@mui/material";
import {Link} from "react-router-dom"

const Navbar = () => {
	return (
        <Box sx={{ background: "#b08968" ,  height: "50px"}} pt={1}>
		<Container >
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Box>
                    <Typography color="#fff" variant="h4" sx={{fontWeight: "bold"}}>
					<Link to="/">
                            ROOMZ
					</Link>
                    </Typography>
                </Box>
				<Box>
				<Stack direction="row" spacing={2} >
                <Button variant="contained" sx={{background:"#9c6644" , color:"#ede0d4", "&:hover":{backgroundColor :"#7f5539"} }}>
					<Link to="/" >Register</Link>
					</Button>
				<Button variant="contained" sx={{background:"#9c6644" , color:"#ede0d4" , "&:hover":{backgroundColor :"#7f5539"}  }}> 
					<Link to="/login" >Login </Link>
				</Button>
                </Stack>
				</Box>
			</Stack>
		</Container>
        </Box>
	);
};

export default Navbar;
