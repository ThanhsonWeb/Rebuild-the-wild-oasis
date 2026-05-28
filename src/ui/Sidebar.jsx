import styled from "styled-components";
const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3rem 2rem;
	border-bottom: 1px solid var(--color-grey-100);
	/* 1 (first row) |-1  (the last row )*/
	grid-row: 1/-1;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<h1>Sidebar</h1>
		</StyledSidebar>
	);
}

export default Sidebar;
