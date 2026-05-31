import { getSettings } from "../../services/apiSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";

// b2 useQuery to fetch that settings data

function UpdateSettingsForm() {
	const {
		data: settings,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["settings"],
		queryFn: getSettings,
	});

	if (isLoading) return <Spinner />;
	if (error) return <p>Something went wrong ! Can't fetch setting</p>;

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				{/* b3 : display value of settings */}
				<Input
					type="number"
					id="min-nights"
					defaultValue={settings.minBookingLength}
				/>
			</FormRow>
			<FormRow label="Maximum nights/booking">
				<Input
					type="number"
					id="max-nights"
					defaultValue={settings.maxBookingLength}
				/>
			</FormRow>
			<FormRow label="Maximum guests/booking">
				<Input
					type="number"
					id="max-guests"
					defaultValue={settings.maxGuestsPerBooking}
				/>
			</FormRow>
			<FormRow label="Breakfast price">
				<Input
					type="number"
					id="breakfast-price"
					defaultValue={settings.breakfastPrice}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
