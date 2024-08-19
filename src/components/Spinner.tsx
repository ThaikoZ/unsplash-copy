import { styled } from "styled-components";

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-radius: 75%;
  border-top-color: #bcbcbc;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <SpinnerWrapper />;
};

export default Spinner;
