import styled from "styled-components";

export const InputTaskWrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .fa-solid.fa-bars {
    left: 2rem;
  }

  .fa-solid.fa-paper-plane {
    right: 2rem;
    cursor: pointer;
  }
`;
export const StyledInput = styled.input`
  background-color: #353a40;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  height: 4.5rem;
  width: 100%;
  padding-left: 4rem;
  font-size: 1.4rem;
`;
