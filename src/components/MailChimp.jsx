import React, {useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://lukefornm.us8.list-manage.com/subscribe/post?u=967d30d5b44583db32c477f5f&amp;id=811ecd4b95&amp;f_id=00cd74e0f0";

const validEmail = (email) =>
	email?.indexOf("@") > -1;

// a basic form
const CustomForm = ({ status, message, onValidated }) => {

	const [email, setEmail] = useState('')

	const submit = () => {
		return validEmail(email) &&
		onValidated({
			EMAIL: email,
		});
	}

	const updateEmail = (event) => {
		const email = event.target.value;
		setEmail(email);
	}

	return (
		<div
			className={"bg-gray-300/90 rounded p-4 flex flex-col gap-2 max-w-[720px] text-black [text-shadow:_none]"}
		>
			<p className={"text-xl"}>Enter your email here to get updates on events and more!</p>
			<input
				className={"text-black px-2 py-1 text-sm md:text-xl w-full disabled:bg-gray-300"}
				onChange={updateEmail}
				type="email"
				disabled={status === "sending"}
				placeholder="john.doe@email.com"
			/>
			{status === "success" && (
				<div
					className={"text-sm"}
					dangerouslySetInnerHTML={{ __html: message }}
				/>
			)}
			{status === "error" && (
				<div
					className={"text-sm"}
					dangerouslySetInnerHTML={{ __html: message }}
				/>
			)}
			<div className={"w-full flex justify-end"}>
				<button className={"border-2 border-black/50 text-black text-xl px-4 py-1 rounded disabled:text-gray-600 disabled:border-gray-400"}
				        onClick={submit}
				        disabled={status === "sending" || !validEmail(email)}>
					{status === "sending" ? "Sending..." : "Submit"}
				</button>
			</div>
		</div>
	);
};

const MailChimp = () =>
	<MailchimpSubscribe
		url={url}
	    render={({ subscribe, status, message }) => (
	        <CustomForm
	            status={status}
	            message={message}
	            onValidated={formData => subscribe(formData)}
	        />
	    )}
/>

export default MailChimp;
