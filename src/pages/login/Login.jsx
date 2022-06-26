import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { TextField, Box, Stack, Typography , Button } from "@mui/material";
const Login = () => {
	return (
		<div>
			<Navbar />
			<Box sx={{ backgroundColor: "#EDE0D4" }}>
				<Stack direction="row" justifyContent="center" alignItems="center">
				<Stack
                    spacing={3}
						sx={{
							backgroundColor: "white",
							border: " 6px solid #DDB892",
							borderRadius: "10px",
							textAlign: "center",
                            margin :"110px",
                            padding : "20px 80px 40px",
                            width : "350px"
						}}
					>
						<Typography color="#785740" variant="h4" mt={3}>
                            Welcome back!
						</Typography>

						<TextField
							id="outlined-basic"
							label="User Name"
							variant="outlined"
							
						/>
                        <br/>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
						/>
                        <Button variant="contained" sx={{background:"#9c6644", width : "100%" , color:"#ede0d4" , "&:hover":{backgroundColor :"#7f5539"}  }}> 
                            Login
                        </Button>
					</Stack>
				</Stack>
			</Box>
			<Footer />
		</div>
	);
};

export default Login;
