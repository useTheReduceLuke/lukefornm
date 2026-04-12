import React, {useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const validEmail = (email) =>
	email?.indexOf("@") > -1;

export const phoneNumberAutoFormat = (phoneNumber) => {
	const number = phoneNumber.trim().replace(/[^0-9]/g, "");

	if (number.length < 4) return number;
	if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
	if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
	return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};


// a basic form
const CustomForm = ({ status, message, onValidated, backAction }) => {

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [canUsePhoneNumber, setCanUsePhoneNumber] = useState(false);
	const [knock, setKnock] = useState(0);
	const [drive, setDrive] = useState(0);
	const [bank, setBank] = useState(0);
	const [writing, setWriting] = useState(0);

	const submit = () => {
		return validEmail(email) &&
		onValidated({
			EMAIL: email,
			FNAME: firstName,
			LNAME: lastName,
			PHONE: canUsePhoneNumber ? phoneNumber : '',
			KNOCK: knock,
			DRIVE: drive,
			BANK: bank,
			WRITING: writing
		});
	}

	const updateEmail = (event) => {
		const email = event.target.value;
		setEmail(email);
	}

	const updateFirstName = (event) => {
		const firstName = event.target.value;
		setFirstName(firstName);
	}

	const updateLName = (event) => {
		const lastName = event.target.value;
		setLName(lastName);
	}

	const updatePhoneNumber = (event) => {
		const phoneNumber = event.target.value;
		const formattedNumber = phoneNumberAutoFormat(phoneNumber);
		console.log(formattedNumber)
		setPhoneNumber(formattedNumber);
	}

	const updateKnock = (event) => {
		const knock = event.target.checked;
		setKnock(knock ? 1 : 0);
	}

	const updateDrive = (event) => {
		const drive = event.target.checked;
		setDrive(drive ? 1 : 0);
	}

	const updateBank = (event) => {
		const bank = event.target.checked;
		setBank(bank ? 1 : 0);
	}
	const updateWriting = (event) => {
		const writing = event.target.checked;
		setWriting(writing ? 1 : 0);
	}

	const updateCanUsePhoneNumber = (event) => {
		const canUsePhoneNumber = event.target.checked;
		setCanUsePhoneNumber(canUsePhoneNumber);
	}

	return (
		<div
			className={"flex flex-col items-center gap-2 max-w-[720px] text-black [text-shadow:_none]"}
		>
			<p className={"text-xl"}>Get information on future volunteer opportunities!</p>
			<div className={"flex flex-col md:flex-row gap-4"}>
				<input
					className={"text-black border-b border-black/50 hover:border-black/80 px-2 py-1 text-sm md:text-xl flex-1 disabled:bg-gray-300"}
					onChange={updateFirstName}
					name="firstName"
					id="firstName"
					autoComplete="given-name"
					type="text"
					disabled={status === "sending"}
					required
					placeholder="First*"
				/>
				<input
					className={"text-black border-b border-black/50 hover:border-black/80  px-2 py-1 text-sm md:text-xl flex-1 disabled:bg-gray-300"}
					onChange={updateLName}
					name="lastName"
					id="lastName"
					autoComplete="family-name"
					type="text"
					disabled={status === "sending"}
					required
					placeholder="Last*"
				/>
			</div>
			<input
				className={"text-black border-b border-black/50 hover:border-black/80  px-2 py-1 text-sm md:text-xl w-full disabled:bg-gray-300"}
				onChange={updateEmail}
				name="email"
				id="email"
				type="email"
				disabled={status === "sending"}
				required
				placeholder="Email*"
			/>
			<input
				className={"text-black border-b border-black/50 hover:border-black/80  px-2 py-1 text-sm md:text-xl w-full disabled:bg-gray-300"}
				onChange={updatePhoneNumber}
				name="phoneNumber"
				id="phoneNumber"
				type="tel"
				value={phoneNumber}
				disabled={status === "sending"}
				placeholder="Phone Number"
			/>
			{phoneNumber && (<div className={"flex w-full"}>
				<input name="canUsePhoneNumber"
					   id="canUsePhoneNumber"
					   type="checkbox"
					   className={"mr-2"}
					   disabled={status === "sending"}
					   onChange={updateCanUsePhoneNumber}
				/>
				<label className="text-xs" htmlFor="canUsePhoneNumber">Confirm you'd like to receive text messages about
					volunteering events</label>
			</div>)}
			<p className="mt-4">How would you like to volunteer?</p>
			<div className={"flex flex-col gap-2 w-max items-start"}>
				<div className={"flex w-max"}>
					<input name="knock"
						   id="knock"
						   type="checkbox"
						   className={"mr-2 "}
						   disabled={status === "sending"}
						   onChange={updateKnock}
					/>
					<label htmlFor="knock">Door Knocking</label>
				</div>
				<div className={"flex w-max"}>
					<input name="drive"
						   id="drive"
						   type="checkbox"
						   className={"mr-2"}
						   disabled={status === "sending"}
						   onChange={updateDrive}
					/>
					<label htmlFor="drive">Driving Door Knockers</label>
				</div>
				<div className={"flex w-max"}>
					<input name="bank"
						   id="bank"
						   type="checkbox"
						   className={"mr-2 "}
						   disabled={status === "sending"}
						   onChange={updateBank}
					/>
					<label htmlFor="bank">Phone Banking</label>
				</div>
				<div className={"flex w-max"}>
					<input name="writing"
						   id="writing"
						   type="checkbox"
						   className={"mr-2 "}
						   disabled={status === "sending"}
						   onChange={updateWriting}
					/>
					<label htmlFor="writing">Letter Writing</label>
				</div>
			</div>
			<div className={"w-full flex justify-end items-center gap-3 pt-4"}>
				{status === "success" && (
					<div className={"text-sm"}>Successfully registered, thank you for signing up to volunteer!</div>
				)}
				{status === "error" && (
					<div
						className={"text-sm"}>
						{message}
					</div>
				)}
				{backAction ? (<button
					className={"text-black text-lg px-4 shadow-none hover:shadow-md transition-all py-1 rounded disabled:text-gray-500 disabled:border-gray-400"}
					onClick={backAction}>
					Back
				</button>) : <span className={"w-0 h-0"}></span>}
				<button className={"border-2 border-black/50 text-black text-lg px-4 py-1 rounded disabled:text-gray-400 disabled:border-gray-300"}
				        onClick={submit}
				        disabled={status === "sending" || status === "success" || !validEmail(email)}>
					{status === "sending" ? "Sending..." : "Submit"}
				</button>
			</div>
		</div>
	);
};

const MailChimp = ({backAction}) => {

	const url = "https://lukefornm.us8.list-manage.com/subscribe/post?u=967d30d5b44583db32c477f5f&amp;id=811ecd4b95&amp;f_id=00f430e3f0";

	return(
		<MailchimpSubscribe
			url={url}
			render={({subscribe, status, message}) => (
				<CustomForm
					status={status}
					backAction={backAction}
					message={message}
					onValidated={formData => {
						subscribe(formData)
					}}
				/>
			)}
		/>
	)
}

export default MailChimp;
