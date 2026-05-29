import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3rem 2rem;
	border-bottom: 1px solid var(--color-grey-100);
	/* 1 (first row) |-1  (the last row )*/
	grid-row: 1/-1;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<Logo />
			<MainNav />
		</StyledSidebar>
	);
}

export default Sidebar;
