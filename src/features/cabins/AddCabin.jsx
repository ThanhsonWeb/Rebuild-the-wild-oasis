import Button from "../../ui/Button";
import CreateCabinForm from "../cabins/CreateCabinForm";
import { useState } from "react";
import Modal from "../../ui/Modal";

function AddCabin() {
	// b1 create add button and control it by useState
	const [isShowForm, setIsShowForm] = useState(false);
	return (
		<div>
			<Button
				size="medium"
				variation="primary"
				onClick={() => setIsShowForm((c) => !c)}
			>
				Add new Cabin
			</Button>

			{isShowForm && (
				<Modal onClose={() => setIsShowForm((c) => !c)}>
					<CreateCabinForm onClose={() => setIsShowForm((c) => !c)} />
				</Modal>
			)}
		</div>
	);
}

export default AddCabin;
