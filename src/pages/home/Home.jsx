import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

import "./home.css";
import MostRented from "../../components/mostRented/MostRented";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";


import { Box , Stack , Typography } from "@mui/material";

const Home = () => {
	return (
		<Box sx={{ backgroundColor: "#EDE0D4" }}>
			<Navbar />
			<Header />
			<Stack alignItems="center" mt={7} gap="30px">
				<Featured />
				<Typography  color="#785740" variant="h4" mt={3}>Most Rented Rooms</Typography>
				<MostRented />
				<MailList />
			</Stack>
				<Footer />
		</Box>
	);
};

export default Home;
