import { Stack, Typography } from "@mui/material";
import { Rating } from "@mui/material";
import {useState} from  "react"

const Item = () => {
const [roomRating , setRoomRating] = useState(4)

	return (
		<Stack flex="1" gap="10px" className="fpItem">
			<img
				src="https://t-ec.bstatic.com/images/hotel/max1024x768/453/45343804.jpg"
				alt="Room"
				className="mostRented-img"
			/>
			<Typography color="#785740" fontWeight="bold">
				Aparthotel Stare Miasto
			</Typography>
			<Typography color="#785740" fontWeight="400">
				Madrid
			</Typography>
			<Typography color="#785740" fontWeight="500">
				Starting from $120
			</Typography>
			<Rating
				name="simple-controlled"
				value={roomRating}
				onChange={(event, newValue) => {
					setRoomRating(newValue);
				}}
			/>
		</Stack>
	);
};

export default Item;
