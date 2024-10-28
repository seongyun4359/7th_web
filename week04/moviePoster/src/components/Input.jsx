import React from 'react';
import styled from 'styled-components';

const Input = React.forwardRef(({ label, error, ...props }, ref) => {
  return (
    <Label>
      {label}
      <StyledInput ref={ref} {...props} />
      {error && <Error>{error.message}</Error>}
    </Label>
  );
});

// 스타일드 컴포넌트
const Label = styled.label`
  color: white; // 글씨 색상 흰색
  margin-bottom: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px; 
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #444; 
  outline: none;
  background-color: white; 
  color: black; // 입력 색상 검정
`;

const Error = styled.p`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

export default Input;
