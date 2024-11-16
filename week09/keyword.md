# 🎯 핵심 키워드
# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해 보고, 자신만의 생각을 통해 정리해 보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어 주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

- State
    - State란 무엇인가요?
        
        **State**는 React에서 컴포넌트의 상태를 나타내는 객체입니다. 예를 들어, 사용자의 입력이나 컴포넌트 내부에서 변화하는 값들을 저장합니다. State의 변화는 컴포넌트를 다시 렌더링하게 만들며, 이를 통해 React는 사용자 인터페이스의 동적 업데이트를 관리할 수 있습니다.
        
    - State를 정의할 때 중요한 점은 무엇이고, 그 이유는 무엇인가요?
        
        
        State는 불변성(immutability)을 지켜야 합니다. 직접 수정하는 것이 아닌 `setState`와 같은 메서드를 통해서만 변경해야 합니다. 이는 React의 렌더링 최적화를 돕고, 변화 감지를 쉽게 해 성능 개선과 예측 가능한 상태 관리를 가능하게 합니다.
        
    - React Component 생명주기에 대해 설명해주세요.
        
        
        React 컴포넌트의 생명주기는 **Mounting(생성)**, **Updating(갱신)**, **Unmounting(제거)**으로 나뉩니다. 컴포넌트가 DOM에 추가될 때 Mounting, 업데이트될 때 Updating, DOM에서 제거될 때 Unmounting이 발생합니다. 생명주기에 따라 React는 다양한 메서드를 제공하여 적절한 시점에 동작을 수행할 수 있게 합니다.
        
- Hooks
    - Hooks가 개발된 이유는 무엇인가요?
        
        React의 기존 클래스 기반 컴포넌트에서의 상태 관리와 라이프사이클 메서드의 복잡성을 줄이고, 함수형 컴포넌트에서도 상태 관리 및 라이프사이클 기능을 사용할 수 있도록 하기 위해 개발되었습니다. 이를 통해 코드의 가독성을 높이고, 컴포넌트를 더 쉽게 재사용할 수 있게 되었습니다.
        
    - useState에 대한 간단한 설명과 사용법을 설명해 주세요.
        
        `useState`는 함수형 컴포넌트에서 상태를 선언하고 업데이트할 수 있게 하는 Hook입니다. 사용법은 `const [state, setState] = useState(initialValue);` 형태로, 초기값을 인자로 받아 상태 변수와 상태 업데이트 함수를 반환합니다.
        
    - SideEffect의 사전적 의미와, React에서 사용되는 의미와 함께 React에서는 왜 해당 의미를 갖는지, 그 이유를 함께 설명해 주세요.
        
        SideEffect는 "부작용"이라는 의미로, React에서는 상태나 DOM을 변경하는 외부 효과를 의미합니다. 예를 들어 데이터 요청, 로깅, 타이머 설정 등이 포함됩니다. 이러한 작업이 컴포넌트의 주요 로직과 분리되어야 코드의 가독성과 유지보수성이 높아집니다.
        
    - useEffect에 대한 간단한 설명과 사용법, 그리고 useEffect 함수가 실행되는 시점을 설명해 주세요.
        
        `useEffect`는 컴포넌트가 렌더링된 후 특정 작업을 수행하기 위한 Hook입니다. 사용법은 `useEffect(() => { /* 작업 */ }, [dependencies]);` 형태로, 두 번째 인자로 전달된 의존성 배열에 따라 실행됩니다. 기본적으로 컴포넌트가 마운트될 때와 의존성이 변경될 때 실행됩니다.
        
    - effect 함수가 mount, unmount가 각각 한 번만 실행되게 하려면 어떻게 해야 하나요?
        
        
        마운트 시 한 번만 실행되게 하려면 의존성 배열을 빈 배열 `[]`로 설정합니다. 언마운트 시 한 번 실행되게 하려면 `useEffect` 내에서 `return`을 사용하여 정리 함수를 반환합니다.
        
    - Hooks의 규칙들에 대해 설명해 주세요.
        
        
        Hooks는 **최상위**에서만 호출해야 하며, 조건문이나 반복문 안에서 사용하지 말아야 합니다. 또한 **함수형 컴포넌트** 또는 **커스텀 Hook**에서만 사용 가능합니다. 이러한 규칙을 통해 React는 Hook의 호출 순서를 보장하고, 의존성 관리가 용이해집니다.
        
- Props-Drilling
    - Props-Drilling은 무엇인가요?
        
        Props-Drilling은 데이터를 여러 하위 컴포넌트에 전달하기 위해 중간 컴포넌트를 거쳐 내려보내는 과정을 말합니다. 복잡한 구조에서는 코드 가독성과 유지보수성이 떨어질 수 있습니다.
        
    - 이를 어떻게 해결할 수 있을까요?
        
        Context API나 상태 관리 라이브러리(Redux)를 사용하여 계층 구조에 상관없이 데이터에 접근할 수 있게 합니다.
        
- Context-Api
    
    React에서 전역적으로 상태를 공유할 수 있는 방법으로, 컴포넌트 트리 내에서 필요한 데이터에 직접 접근할 수 있게 해줍니다. 이를 통해 Props-Drilling 문제를 해결할 수 있습니다.
    
- Redux
    - 상태관리는 왜 필요한가요?
        
        애플리케이션이 커질수록 여러 컴포넌트에서 상태를 공유하고 관리하는 것이 복잡해지기 때문에, 효율적이고 일관된 상태 관리가 필요합니다.
        
    - 상태 관리 툴은 어떤 문제를 해결해 주나요?
        
        상태를 중앙에서 관리하여 데이터의 흐름을 명확하게 하고, 예측 가능한 상태 업데이트를 통해 디버깅과 테스트를 용이하게 합니다.
        
    - Redux의 기본 개념 세 가지에 대해 설명해 주세요.
        - **Store**: 애플리케이션의 상태를 저장하는 객체입니다.
        - **Action**: 상태에 어떤 변경을 가하고자 할 때 사용하는 객체로, type 필드와 필요한 데이터를 포함합니다.
        - **Reducer**: 현재 상태와 액션을 기반으로 새로운 상태를 반환하는 함수입니다.
    - Store, Action, Reducer의 의미와 특징에 대해 설명해 주세요.
        - **Store**는 애플리케이션 전체의 상태를 보유합니다.
        - **Action**은 상태 변경의 의도를 나타내는 객체입니다.
        - **Reducer**는 상태와 액션을 인자로 받아 새로운 상태를 반환하며, 상태 업데이트의 논리를 관리합니다.
    - Redux의 장점을 설명해 주세요.
        
        중앙 집중식 상태 관리로 예측 가능성이 높아지며, 디버깅 및 유지보수가 용이합니다.
        
- Redux Toolkit
    
    <aside>
    💡 전역 상태 관리를 바로 이해하는 것은 쉽지 않으나, 차근차근, 공식문서와 블로그 등을 참고해서 꼼꼼하게 정리해 보세요! (매튜/김용민)
    
    </aside>
    
    [Getting Started | Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
    
    - redux-toolkit과 redux의 차이
        - **Redux Toolkit**은 Redux 사용을 간소화한 라이브러리로, Redux의 보일러플레이트 코드를 줄여주고 코드 가독성을 높이는 역할을 합니다. Redux를 사용할 때 자주 발생하는 복잡한 설정 문제를 해결하기 위해 나온 공식 도구로, 기본적으로 Redux와 함께 동작하며 보다 쉽게 상태 관리를 설정할 수 있습니다.
        - **Redux**는 상태와 액션의 처리 로직을 정의하고 상태를 중앙에서 관리하기 위한 규칙들을 제공합니다. 하지만 초기에 설정할 코드가 많고, 많은 보일러플레이트가 요구되어 프로젝트가 커질수록 복잡해질 수 있습니다. Redux Toolkit은 이러한 과정을 단순화하여 더 쉽게 상태 관리를 구현할 수 있도록 돕습니다.
    - redux-toolkit 사용법 (자세하게)
        - Provider
            - `Provider`는 `react-redux`에서 제공하는 컴포넌트로, Redux의 스토어를 컴포넌트 트리에 전달합니다. `Provider`를 최상위 컴포넌트에 감싸서 자식 컴포넌트들이 Redux 스토어에 접근할 수 있게 해줍니다.
            
            ```jsx
            
            import { Provider } from 'react-redux';
            import { store } from './store';
            
            function App() {
              return (
                <Provider store={store}>
                  <YourComponent />
                </Provider>
              );
            }
            
            ```
            
        - configureStore
            - Redux Toolkit의 `configureStore`는 Redux 스토어를 구성하는 간단한 방법을 제공합니다. `configureStore`를 사용하면 Redux의 미들웨어 설정과 개발자 도구 설정 등이 자동으로 처리되어 초기 설정이 매우 간편해집니다.
            
            ```jsx
            
            import { configureStore } from '@reduxjs/toolkit';
            import counterReducer from './counterSlice';
            
            const store = configureStore({
              reducer: {
                counter: counterReducer,
              },
            });
            
            export default store;
            
            ```
            
        - createSlice
            - `createSlice`는 Redux에서 리듀서와 액션을 함께 생성해주는 도구입니다. `createSlice`를 사용하면 보일러플레이트가 줄어들고 가독성이 좋아집니다.
            
            ```jsx
            
            import { createSlice } from '@reduxjs/toolkit';
            
            const counterSlice = createSlice({
              name: 'counter',
              initialState: { value: 0 },
              reducers: {
                increment: (state) => { state.value += 1; },
                decrement: (state) => { state.value -= 1; },
              },
            });
            
            export const { increment, decrement } = counterSlice.actions;
            export default counterSlice.reducer;
            
            ```
            
        - useSelector
            - `useSelector`는 Redux 스토어에서 특정 상태를 추출하여 사용할 때 사용합니다. 함수형 컴포넌트 내부에서 사용되며, 필요한 상태를 반환합니다.
            
            ```jsx
            
            import { useSelector } from 'react-redux';
            
            function CounterDisplay() {
              const count = useSelector((state) => state.counter.value);
              return <div>{count}</div>;
            }
            
            ```
            
        - useDispatch
            - `useDispatch`는 액션을 발생시키기 위해 사용하는 훅으로, 컴포넌트에서 직접 리듀서를 호출할 수 있게 해줍니다.
            
            ```jsx
            
            import { useDispatch } from 'react-redux';
            import { increment } from './counterSlice';
            
            function IncrementButton() {
              const dispatch = useDispatch();
              return <button onClick={() => dispatch(increment())}>+</button>;
            }
            
            ```
            
        - 기타 사용 방법을 상세하게 정리해 보세요
            - **비동기 작업 처리 (createAsyncThunk)**: `createAsyncThunk`는 Redux Toolkit에서 비동기 로직을 쉽게 처리할 수 있도록 하는 함수입니다. 이를 통해 외부 API 요청과 같은 비동기 작업을 실행할 수 있으며, `pending`, `fulfilled`, `rejected` 상태에 따라 자동으로 상태가 관리됩니다.
            
            ```jsx
            
            import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
            
            export const fetchData = createAsyncThunk('data/fetch', async () => {
              const response = await fetch('/api/data');
              return response.json();
            });
            
            const dataSlice = createSlice({
              name: 'data',
              initialState: { data: [], loading: false },
              extraReducers: (builder) => {
                builder
                  .addCase(fetchData.pending, (state) => { state.loading = true; })
                  .addCase(fetchData.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                  })
                  .addCase(fetchData.rejected, (state) => { state.loading = false; });
              },
            });
            
            ```
            
- Zustand
    
    Zustand는 React 애플리케이션에서 상태를 관리하기 위한 라이브러리로, Redux보다 더 간단한 API를 제공합니다. 훅을 사용하여 전역 상태를 쉽게 정의하고 접근할 수 있으며, 불필요한 리렌더링을 줄이기 위해 최적화된 방식으로 설계되어 가볍고 빠르게 작동합니다.