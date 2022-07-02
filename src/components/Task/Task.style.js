import styled from "styled-components";

export const TaskWrapper = styled.ul`
  user-select: none;
  display: flex;
  padding: 0 2rem;
  line-height: 4rem;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 5rem;

  &:hover button {
    visibility: visible;
  }
`;
export const StyledLi = styled.li`
  font-size: 1.4rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledButton = styled.button`
  cursor: pointer;
  color: #f00;
  font-size: 1.4rem;
  visibility: hidden;
  position: absolute;
  right: 2rem;
`;
