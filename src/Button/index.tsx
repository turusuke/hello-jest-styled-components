import React, { FC } from "react";
import styled from "styled-components";

export default styled.button`
  border: 2px solid
    ${({ isError }: { isError?: boolean }) => (isError ? "white" : "tomato")};
`;
