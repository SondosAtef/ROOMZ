import "./mailList.css";
import { Stack, Button, TextField } from "@mui/material";

const MailList = () => {
	return (
		<Stack
			alignItems="center"
			gap="20px"
			sx={{
				background: "#B08968",
				width: "100%",
				margin: "50px 0",
				padding: "50px 0",
				color: "white",
			}}
		>
			<h1 className="mailTitle">Save time, save money!</h1>
			<span className="mailDesc">
				Sign up and we'll send the best deals to you
			</span>
			<div className="mail-inputs">
				<input
					placeholder="Your Email"
				/>
				<Button
					variant="contained"
					sx={{
						background: "#9c6644",
						color: "#ede0d4",
						"&:hover": { backgroundColor: "#7f5539" },
						height: "50px",
					}}
				>
					Subscribe
				</Button>
			</div>
		</Stack>
	);
};

export default MailList;
