import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
	// b1 create add button and control it by useState
	const [isShowForm, setIsShowForm] = useState(false);
	return (
		<Row>
			<Row type="horizontal">
				<Heading as="h1">All cabins</Heading>
				<p>Filter / Soft</p>
			</Row>
			<Row>
				<CabinTable />
				<Button
					size="medium"
					variation="primary"
					onClick={() => setIsShowForm((c) => !c)}
				>
					Add new Cabin
				</Button>

				{isShowForm && <CreateCabinForm />}
			</Row>
		</Row>
	);
}

export default Cabins;
