import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinFn } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

function useDeleteCabin() {
	const queryClient = useQueryClient();
	const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
		mutationFn: deleteCabinFn,
		onSuccess: () => {
			toast.success("success deleted cabin");
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return { deleteCabin, isDeleting };
}

export default useDeleteCabin;
