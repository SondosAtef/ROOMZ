import "./list.css";

import { Container, Box, Stack, Typography , Button} from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import {useState} from "react"
import {useLocation} from "react-router-dom"

import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [roommateCounter, setRoommateCounter] = useState(location.state.roommateCounter);

	return (
		<Box sx={{ backgroundColor: "#EDE0D4" }}>
			<Navbar />
			<Container sx={{ marginTop: "20px" }}>
				<Stack direction={{ xs: "column", md: "row" }} gap="20px">
					<Box className="list-search">
						<Typography color="#785740" variant="h6">
							Search
						</Typography>
            <Stack  direction="column" >
            <Typography color="#785740" variant="body1">
                Destination</Typography>
              <input  type="text" placeholder={destination} />
            </Stack>
            <Stack  direction="column" spacing={1} mt={1} >
            <Typography color="#785740" variant="body1">
                Check-in Date</Typography>
              <span className="selected-date" onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
             {openDate && <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
                }
            </Stack>
            <Stack  direction="column" spacing={1}  mt={1}>
            <Typography color="#785740" variant="body1">
                Options</Typography>
              <div className="lsOptionItem">
              <Typography color="#785740" variant="body1" mt={1}>
                    Min Price <small>per night</small>
                  </Typography >
                  <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
              <Typography color="#785740" variant="body1" mt={1}>
                    Max price <small>per night</small>
                  </Typography>
                  <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
              <Typography color="#785740" variant="body1" mt={1}>
                    Roommates Number
                    </Typography>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={roommateCounter}
                  />
                </div>
            </Stack>
            <Button variant="contained" sx={{
              width: "100%",
              marginTop : "15px",
              background:"#9c6644" , color:"#ede0d4", "&:hover":{backgroundColor :"#7f5539"} }}>
              Search</Button>
					</Box>
					<Box className="listResult" flex="3">
          <Typography color="#785740" variant="h4">
            Result
          </Typography>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default List;
