import styled from 'styled-components';

const AuthButton = styled.div`
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalContents = styled.div`
  padding: 2rem 3rem;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background: #c9d6df;
  width: 25rem;
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .footer {
    margin-top: 2rem;
    text-align: right;
    color: #433d3c;
    span {
      color: #88304e;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const CloseModal = styled.div`
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  &:before,
  &:after {
    width: 24px;
    height: 4px;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: width 1s ease-in-out;
    background: #020202;
    border-radius: 2px;
    top: 13px;
  }
  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 2px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 2px;
  }
`;

const Form = styled.form`
  input,
  button {
    font-size: 1.3rem;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    border: none;
    border-radius: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  color: #737373;
  padding-left: 1rem;
  margin-bottom: 1.2rem;
  background: #333333;
`;
const Button = styled.button`
  color: white;
  font-weight: bold;
  margin-top: 1.2rem;
  width: 100%;
  background: #ce202c;
  outline: none;
  cursor: pointer;
  &:hover {
    background: red;
    transition: background 0.5s ease-in-out;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4646;
`;
export {
  AuthButton,
  ModalWrapper,
  ModalContents,
  CloseModal,
  Form,
  Input,
  Button,
  ErrorMessage,
};
