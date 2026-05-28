import styled, { css } from "styled-components";

// const test = css`
// 	text-align: center;
//    color: red;
// `;

const Heading = styled.h1`
	${(props) =>
		props.as === "h1" &&
		css`
			font-size: 30px;
			font-weight: 600;
			color: red;
		`}

	${(props) =>
		props.as === "h4" &&
		css`
			font-size: 20px;
			font-weight: 400;
			color: yellow;
		`}

      background-color: #d5c8c8;
	padding: 1rem;
`;

export default Heading;
