import { getSettings } from "../../services/apiSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useQuery, useMutation } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import useUpdateSetting from "./useUpdateSetting";

// b2 useQuery to fetch that settings data

function UpdateSettingsForm() {
	const { isUploading, updateSetting } = useUpdateSetting();
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

	function handleUpdate(e, field) {
		const { value } = e.target;
		updateSetting({ [field]: value });
	}

	// useMutation to update

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				{/* b3 : display value of settings */}
				<Input
					type="number"
					id="min-nights"
					defaultValue={settings.minBookingLength}
					disabled={isUploading}
					onBlur={(e) => handleUpdate(e, "minBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum nights/booking">
				<Input
					type="number"
					id="max-nights"
					defaultValue={settings.maxBookingLength}
					disabled={isUploading}
					onBlur={(e) => handleUpdate(e, "maxBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum guests/booking">
				<Input
					type="number"
					id="max-guests"
					defaultValue={settings.maxGuestsPerBooking}
					disabled={isUploading}
					onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
				/>
			</FormRow>
			<FormRow label="Breakfast price">
				<Input
					type="number"
					id="breakfast-price"
					defaultValue={settings.breakfastPrice}
					disabled={isUploading}
					onBlur={(e) => handleUpdate(e, "breakfastPrice")}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
