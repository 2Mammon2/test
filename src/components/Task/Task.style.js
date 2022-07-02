import styled from "styled-components";

export const TaskWrapper = styled.ul`
  user-select: none;
  display: flex;
  padding: 0 2rem;
  line-height: 4rem;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  &:hover button {
    visibility: visible;
  }
`;
export const StyledLi = styled.li`
  font-size: 1.3rem;
  width: 100%;
`;
export const StyledButton = styled.button`
  cursor: pointer;
  color: #f00;
  font-size: 1.2rem;
  visibility: hidden;
  position: absolute;
  right: 2rem;
`;
