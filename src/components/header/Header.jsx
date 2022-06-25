import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import {  Stack ,Box, Container, Typography, Button} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ManIcon from "@mui/icons-material/Man";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
	const [showDate, setShowDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [ShowRoommateCounter, setShowRoommateCounter] = useState(false);
	const [roommateCounter, setRoommateCounter] = useState(0);
	const [destination , setDestination] = useState("")
const navigate = useNavigate()
const handleSearch =()=>{
navigate("./hotels" , {state :{destination, date, roommateCounter }})
}

	return (
		<Box sx={{ background: "#b08968" }} pt={1} className="header">
			<Container>
				<Typography color="#fff" variant="h4" mt={3}>
					A lifetime of discounts? It's Genius.
				</Typography>
				<Typography color="#fff" variant="body1" mt={2} mb={2}>
					Get rewarded for your rentals – unlock instant savings of 10% or more
					with a free ROOMZ account
				</Typography>

				<Button
					color="primary"
					variant="contained"
					sx={{
						marginBottom: "75px",
						background: "#9c6644",
						color: "#ede0d4",
						"&:hover": { backgroundColor: "#7f5539" },
					}}
				>
					<Link to="/login">
						Login / Register
					</Link>
				</Button>
{/* Search Bar */}

				<Stack direction={{ xs: 'column', md: 'row' }} className="header-search" justifyContent="space-around"
					alignItems="center">
					<Box  className="header-search--item">
						<HotelIcon sx={{ color: "#D3D3D3" }} />
						<input
							type="text"
							placeholder="Where you are searching ?"
							className="header-search--input"
							onChange={e=>setDestination(e.target.value)}
						/>
					</Box>
					<Box className="header-search--item">
						<CalendarMonthIcon sx={{ color: "#D3D3D3" }} />
						<span
							className="header-search--text"
							onClick={() => {
								setShowDate(!showDate);
							}}
						>
							{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
								date[0].endDate,
								"dd/MM/yyyy"
							)} `}
						</span>
						{showDate && (
							<DateRange
								editableDateInputs={true}
								onChange={(item) => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className="date"
								minDate={new Date()}
							/>
						)}
					</Box>
					<Box className="header-search--item">
						<ManIcon sx={{ color: "#D3D3D3" }} />
						<span
							className="header-search--text"
							onClick={() => setShowRoommateCounter(!ShowRoommateCounter)}
						>
							Preferred roommates number
						</span>
						{ShowRoommateCounter && (
							<div className="options">
								<div className="optionCounter">
									<Button
										color="primary"
										variant="outlined"
										onClick={() => setRoommateCounter(roommateCounter - 1)}
									>
										-
									</Button>
									<span className="optionCounterNumber">{roommateCounter}</span>
									<Button
										color="primary"
										variant="outlined"
										onClick={() => setRoommateCounter(roommateCounter + 1)}
									>
										+
									</Button>
								</div>
							</div>
						)}
					</Box>
					<Box className="header-search--item">
						<Button
							color="primary"
							variant="contained"
							sx={{
								background: "#9c6644",
								color: "#ede0d4",
								"&:hover": { backgroundColor: "#7f5539" },
							}}
							onClick={handleSearch}
						>
							Search
						</Button>
					</Box>
				</Stack>
				{/* Search Bar */}
					</Container>
		</Box>
	);
};

export default Header;
