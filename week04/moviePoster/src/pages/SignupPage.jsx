import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// yup을 사용해 스키마 정의
const schema = yup.object().shape({
  email: yup.string()
    .email('올바른 이메일 형식을 입력해 주세요.') // 이메일 형식 검사
    .required('이메일은 필수 입력 사항입니다.'), // 필수 입력
  password: yup.string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.') // 최소 길이
    .max(16, '비밀번호는 최대 16자 이하여야 합니다.') // 최대 길이
    .required('비밀번호는 필수 입력 사항입니다.'), // 필수 입력
});

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('폼 데이터 제출:', data);
  };

  const email = watch("email");
  const password = watch("password");

  const isDisabled = !email || errors.email || !password || errors.password;

  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title> {/* Title 컴포넌트를 사용 */}
        <Label>
          ID 
          <Input type="email" {...register("email")} required />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </Label>
        <Label>
          Password
          <Input type="password" {...register("password")} required />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </Label>
        <SubmitButton type="submit" disabled={isDisabled}>회원가입</SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

// 스타일드 컴포넌트
const Wrapper = styled.div`
  background-color: black; // 배경색 검정
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: black; 
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
`;

const Title = styled.h1`
  color: white; // h1 글씨 색상 흰색
  margin-bottom: 20px; // 아래 여백 추가
`;

const Label = styled.label`
  color: white; // 글씨 색상 흰색
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px; 
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #444; 
  outline: none;
  background-color: white; 
  color: black; // 입력 색상 검정으로 변경
`;

const Error = styled.p`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #e10f57; 
  color: white; // 글씨 색상 흰색
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #c0074a; 
  }

  &:disabled {
    background-color: #555; 
    cursor: not-allowed; 
  }
`;

export default SignUpPage;
