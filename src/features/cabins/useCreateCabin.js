import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinFn } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

function useCreateCabin() {
	const queryClient = useQueryClient();
	const { isLoading: isCreating, mutate: createCabin } = useMutation({
		// mutate(data) -> createCabin(data)
		mutationFn: createCabinFn,
		onSuccess: () => {
			toast.success("Successfully created new Cabin");
			// change UI when supabase is on change (refesh)
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
		},
		onError: (error) => toast.error("Could not create Cabin"),
	});
	return { isCreating, createCabin };
}

export default useCreateCabin;
