import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { TextField, Box, Stack, Typography , Button } from "@mui/material";
const Login = () => {
	return (
		<div>
			<Navbar />
			<Box sx={{ backgroundColor: "#EDE0D4" }}>
				<Stack direction="row" justifyContent="center" alignItems="center">
					<Box
						sx={{
							backgroundColor: "white",
							border: " 6px solid #DDB892",
							borderRadius: "5px",
							textAlign: "center",
                            margin :"110px"
						}}
					>
						<Typography color="#785740" variant="h4" mt={3}>
                            Welcome!
						</Typography>

						<TextField
							id="outlined-basic"
							label="User Name"
							variant="outlined"
							sx={{ margin: "40px 100px" }}
						/>
                        <br/>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							sx={{ margin: "18px 100px"  }}
						/>
                        <Button variant="contained" sx={{background:"#9c6644", width : "80%" , color:"#ede0d4" , "&:hover":{backgroundColor :"#7f5539"} , margin: "30px 20px"  }}> 
                            Login
                            </Button>
					</Box>
				</Stack>
			</Box>
			<Footer />
		</div>
	);
};

export default Login;
