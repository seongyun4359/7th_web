React에서 이전 데이터를 전달하며 화면 이동하는 방법
조건 1
회원가입 버튼을 누르면 이전 단계에서 작성했던 모든 데이터가 alert에 노출되어야 한다.

데이터 전달 및 화면 이동 방식
React에서 화면 이동과 데이터를 전달하기 위해 두 가지 방법을 사용할 수 있다:

useNavigate
Link
useNavigate
개요
useNavigate는 React Router v6에서 제공되는 훅 중 하나로, 함수형 컴포넌트에서 라우터 객체를 얻어 프로그래밍 방식으로 페이지 간 이동을 처리할 수 있게 해준다.

사용법

import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

// 페이지 이동
navigate('/이동주소', {
  replace: true, // 브라우저 히스토리를 교체
  state: { key: value, ... } // 데이터 전달
});
예시

const onSubmitFnc = (data) => {
  navigate('/Ph_Birth', { state: { ...data } });
};
replace 옵션: true로 설정하면 브라우저의 히스토리를 변경하지 않고 페이지를 교체한다. 뒤로가기를 눌렀을 때 이전 페이지로 이동하지 않는다.
state: 데이터를 페이지 간 전달한다.
데이터 접근 방법 (useLocation)

import { useLocation } from 'react-router-dom';
const location = useLocation();
useLocation
개요
useLocation은 현재 URL 정보를 제공하며, 전달된 데이터를 받을 때 유용하게 사용된다.

예시

const onSubmitFnc = (data) => {
  const totalData = { ...location.state, ...data }; // 이전 데이터와 새로운 데이터를 병합
  setSearchParams(totalData);
  navigate('/AboutMe', { state: { ...totalData } });
};
조건 2
뒤로가기를 눌러도 이전 폼의 데이터가 그대로 유지되어야 한다.

문제점
새로고침이나 뒤로가기를 눌렀을 때 데이터가 사라지는 문제가 발생한다.

해결책: useSearchParams
useSearchParams를 사용하여 브라우저 히스토리에 데이터를 유지할 수 있다.

/코드

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import FormInput from '../../common/formInput';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EmailPW = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: EmailYup,
    passWord: PassWordYup,
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitFnc = (data) => {
    setSearchParams(data);
    navigate('/Ph_Birth', { state: { ...data } });
  };

  // 검색 매개변수를 통해 폼 데이터 설정
  if (searchParams.get('email')) {
    setValue('email', searchParams.get('email'));
  }
  if (searchParams.get('passWord')) {
    setValue('passWord', searchParams.get('passWord'));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFnc)}>
        <FormInput placeholder="email" register={register} name="email" errors={errors} />
        <FormInput placeholder="passWord" register={register} name="passWord" errors={errors} />
        <button type="submit">다음</button>
      </form>
    </div>
  );
};

export default EmailPW;
발견한 문제점
useSearchParams와 navigate를 함께 사용하면 뒤로가기를 2번 눌러야 이전 페이지로 돌아가는 문제가 발생한다.
느낀 점
조건 1은 만족했지만, 조건 2는 완전히 해결하지 못하였다.
작성한 코드를 통해 데이터 전달 및 새로고침 문제 해결 방법을 배우는 계기가 되었다.
장단점
useSearchParams
장점: 새로고침 및 뒤로가기 시 데이터가 유지된다.
단점: 쿼리 매개변수가 브라우저 주소창에 노출되므로 보안에 취약하다.
useNavigate와 useLocation
장점:
함수형 컴포넌트에서 간단하게 페이지 이동을 처리할 수 있다.
데이터를 쉽게 전달할 수 있다.
단점: 브라우저 히스토리를 직접 조작하지 않으므로 새로고침/뒤로가기 시 데이터를 유지하지 못한다.


