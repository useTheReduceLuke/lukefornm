import React, {useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const validEmail = (email) =>
	email?.indexOf("@") > -1;

// a basic form
const CustomForm = ({ status, message, onValidated, backAction }) => {

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLName] = useState('');

	const submit = () => {
		return validEmail(email) &&
		onValidated({
			EMAIL: email,
			FNAME: firstName,
			LNAME: lastName
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

	return (
		<div
			className={"flex flex-col gap-2 max-w-[720px] text-black [text-shadow:_none]"}
		>
			<p className={"text-xl"}>Get information on future volunteer opportunities!</p>
			<span className={"flex flex-col md:flex-row gap-4"}>
				<input
					className={"text-black border-b border-black/50 hover:border-black/80 px-2 py-1 text-sm md:text-xl flex-1 disabled:bg-gray-300"}
					onChange={updateFirstName}
					name="firstName"
					id="firstName"
					autoComplete="given-name"
					type="text"
					disabled={status === "sending"}
					placeholder="John"
				/>
				<input
					className={"text-black border-b border-black/50 hover:border-black/80  px-2 py-1 text-sm md:text-xl flex-1 disabled:bg-gray-300"}
					onChange={updateLName}
					name="lastName"
					id="lastName"
					autoComplete="family-name"
					type="text"
					disabled={status === "sending"}
					placeholder="Doe"
				/>
			</span>
			<input
				className={"text-black border-b border-black/50 hover:border-black/80  px-2 py-1 text-sm md:text-xl w-full disabled:bg-gray-300"}
				onChange={updateEmail}
				name="email"
				id="email"
				type="email"
				disabled={status === "sending"}
				placeholder="john.doe@email.com"
			/>
			{status === "success" && (
				<div className={"text-sm"}>Email registered!</div>
			)}
			{status === "error" && (
				<div
					className={"text-sm"}>
					{message}
				</div>
			)}
			<div className={"w-full flex justify-between pt-4"}>
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

	const url = "https://lukefornm.us8.list-manage.com/subscribe/post?u=967d30d5b44583db32c477f5f&amp;id=811ecd4b95&amp;f_id=00cd74e0f0";

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
