import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
	const queryClient = useQueryClient();

	const { isLoading: isUploading, mutate: updateSetting } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			toast.success(" Successfully update");
			queryClient.invalidateQueries({ queryKey: ["settings"] });
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});
	return { updateSetting, isUploading };
}

export default useUpdateSetting;
