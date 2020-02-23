import styled from 'styled-components';

const CounterWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 15px;
`;

const Input = styled.input`
 
  width: 40px;
  height: 40px;
  border: 2px solid #dbdbe0;
  border-radius: 4px;
  text-align: center;
  
    &[type="number"] {
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }

    appearance: textfield;
  }
`;

const Button = styled.button`
    padding: 0 8px;
    height: 40px;
    border: none;
    background: transparent;
 
    font-weight: bold;
    cursor: pointer;
`;


export { CounterWrapper, Input, Button };
