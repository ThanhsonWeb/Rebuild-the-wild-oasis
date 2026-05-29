import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${({ type = "vertical" }) =>
    type === "horizontal"
      ? css`
          justify-content: space-between;
          align-items: center;
        `
      : css`
          gap: 1rem;
          flex-direction: column;
        `}
`;

export default Row;
