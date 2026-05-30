import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { createCabin } from "../../services/apiCabins.js";
import FormRow from "../../ui/FormRow.jsx";

function CreateCabinForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();
	const { isLoading: isCreating, mutate } = useMutation({
		// mutate(data) -> createCabin(data)
		mutationFn: createCabin,
		onSuccess: () => {
			toast.success("Successfully created new Cabin");
			// change UI when supabase is on change (refesh)
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
			reset();
		},
		onError: (error) => toast.error("Could not create Cabin"),
	});

	function onSubmit(dataForm) {
		const file = dataForm.image?.[0];
		mutate({ ...dataForm, image: file });
	}

	function onError(errors) {
		console.log(errors);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			{/* component */}
			<FormRow label="Cabin name" error={errors?.name?.message}>
				<Input
					type="text"
					id="name"
					{...register("name", { required: " required" })}
				/>
			</FormRow>

			<FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
				<Input
					type="number"
					id="maxCapacity"
					{...register("maxCapacity", { required: "required" })}
				/>
			</FormRow>

			<FormRow label="Regular price" error={errors?.regularPrice?.message}>
				<Input
					type="number"
					id="regularPrice"
					{...register("regularPrice", { required: "required" })}
				/>
			</FormRow>

			<FormRow label="Discount" error={errors?.discount?.message}>
				<Input
					type="number"
					id="discount"
					defaultValue={0}
					{...register("discount", { required: "required" })}
				/>
			</FormRow>

			<FormRow
				label="Description for website"
				error={errors?.description?.message}
			>
				<Textarea
					type="number"
					id="description"
					defaultValue=""
					{...register("description", { required: "required" })}
				/>
			</FormRow>

			<FormRow label="Cabin Photo" error={errors?.image?.message}>
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", { required: "required" })}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset">
					Cancel
				</Button>
				<Button type="submit" disabled={isCreating}>
					Create cabin
				</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
