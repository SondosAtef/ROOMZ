import "./list.css";

import { Container, Box, Stack, Typography } from "@mui/material";

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
            <Stack className="lsItem" >
              <label>Destination</label>
              <input placeholder={destination} type="text" />
              
            </Stack>
            <Stack className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
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
            <Stack className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                  <span className="lsOptionText">Roommates Number</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={roommateCounter}
                  />
                </div>
            </Stack>
            <button>Search</button>
					</Box>
					<Box className="listResult" flex="3">
						<p>Result</p>
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
