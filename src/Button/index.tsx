import styled from "styled-components";

export default styled.button<{ isError?: boolean }>`
  border: 2px solid
    ${({ isError }: { isError?: boolean }) => (isError ? "tomato" : "white")};
`;
