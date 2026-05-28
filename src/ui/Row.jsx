import styled, { css } from "styled-components";

const Row = styled.div`
	display: flex;
	${(props) =>
		props.type === "horizontal" &&
		css`
			justify-content: center;
			align-items: center;
			gap: 10px;
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			gap: 1rem;
			flex-direction: column;
		`}
`;
// make the default
Row.defaultProps = {
	type: "vertical",
};

export default Row;
