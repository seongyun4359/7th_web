# 🎯 핵심 키워드
# 📝 학습 목표

---

1. **`useNavigate`** Hook에 대해 학습합니다.
2. **`useLocation`** Hook에 대해 학습합니다.
3. **`useParams`** Hook에 대해 학습합니다.
4. **`custom-hook`**을 활용하여, 데이터 통신을 효율적으로 관리하는 방법에 대해 알아봅니다.


# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- `useEffect`  🍠
    
    `useEffect`는 리액트에서 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있게 해주는 Hook입니다. 사이드 이펙트(side effect)라고 불리는, 데이터 가져오기(fetching), DOM 업데이트, 타이머 설정 등의 작업을 처리할 때 사용됩니다. 기본적으로 컴포넌트가 렌더링된 직후 실행되며, 종속성 배열을 통해 특정 값이 변경될 때만 실행되도록 제어할 수 있습니다.
    
- `try, catch, finally` 구문  🍠
    
    
    JavaScript에서 에러 핸들링을 위해 사용하는 구문입니다. `try` 블록에서 코드를 실행하고, 오류가 발생하면 `catch` 블록으로 넘어가 에러를 처리합니다. `finally` 블록은 에러 발생 여부와 상관없이 항상 실행됩니다. 비동기 처리에서 예외 처리를 할 때 유용하게 쓰입니다.
    
- `axios`  🍠
    
    `axios`는 Promise 기반의 HTTP 클라이언트 라이브러리로, 브라우저와 Node.js 환경에서 모두 사용할 수 있습니다. AJAX 요청을 더 간단하게 작성할 수 있으며, 비동기적으로 서버와 데이터를 주고받을 때 자주 사용됩니다. 자동으로 JSON 데이터를 처리해주고, 요청/응답 인터셉터 기능, 타임아웃 설정 등이 가능합니다.
    
- `fetch`  🍠
    
    `fetch`는 브라우저 내장 API로, 네트워크 요청을 보내고 결과를 받아올 수 있게 해줍니다. Promise 기반으로 작동하며, 간단하게 HTTP 요청을 만들 수 있습니다. `axios`와 달리 추가적인 설정 없이 사용할 수 있지만, `axios`와 비교해 에러 핸들링이나 기능이 제한적일 수 있습니다.
    
- `axios` vs `fetch` (차이점)  🍠
    
    `axios`는 JSON 데이터를 자동으로 처리하지만, `fetch`는 `response.json()`을 호출해야 합니다. 또한, `axios`는 요청과 응답 인터셉터를 제공하고, 타임아웃 설정이 가능하며, 오래된 브라우저에서도 지원됩니다. 반면 `fetch`는 표준 API로, 브라우저에 내장되어 있어 별도의 설치가 필요 없고, 다만 구형 브라우저에서는 폴리필이 필요할 수 있습니다.
    
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    `.env` 파일은 환경 변수를 저장하는 파일로, 주로 프로젝트에서 API 키나 데이터베이스 URL과 같은 민감한 정보를 관리하는 데 사용됩니다. 환경 변수를 사용하면 코드를 깔끔하게 유지하고 보안을 강화할 수 있습니다. 리액트에서는 Vite나 CRA를 통해 이 환경 변수를 쉽게 관리할 수 있습니다.
    
- **`custom hook ?`**
    
    
    리액트의 `custom hook`은 재사용 가능한 로직을 Hook으로 만들어서, 여러 컴포넌트에서 사용할 수 있도록 하는 기능입니다. 주로 상태 관리나 사이드 이펙트를 처리할 때 사용됩니다. `useState`, `useEffect` 등의 Hook을 조합해 특정 기능을 구현하고 이를 재사용할 수 있는 형태로 만드는 것이 `custom hook`입니다.
    

### useNavigate, useLocation

- useNavigate, useLocation
    
    ### useNavigate
    
    `useNavigate`은, 페이지를 이동할 떄 사용합니다.
    
     `react-router`에서 재공해주는 `Link` 태그로도, 이동할 수 있는 것 아니냐는 의문이 있을 것 입니다. 어떠한 이벤트(클릭, 더블클릭, 키보드 입력 etc..)가 일어난 이후 페이지를 이동시키고 싶거나, 페이지 이동 후 추가적인 로직이 필요한 경우 **`useNavigate`**을 활용하면 됩니다.
    
    **`navigate`**은 2개의 인자를 받습니다.
    
    ```jsx
    <button onClick={() => navigate('/profile', {
      replace: false,
      state: { userId: 123, userName: 'JohnDoe' }
    })}>
      View Profile
    </button>
    ```
    
    ### replace
    
    - **`replace: true`**
        
        `replace` 속성을 `true`로 설정하면 현재의 히스토리 항목을 새로운 URL로 대체합니다. 즉, 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지가 아니라 이동 전의 페이지가 아닌 경우에는 메인 페이지("/")로 돌아가게 됩니다. 이렇게 하면 브라우저의 히스토리에 새로운 항목이 추가되지 않으므로 사용자가 이전 페이지로 돌아가지 못하게 됩니다.
        
    - **`replace: false`**
        
        `replace` 속성을 false로 설정하거나 생략하면 기본값이 적용됩니다. 이 경우, 이동한 페이지가 브라우저의 히스토리에 새로운 항목으로 추가됩니다. 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지로 돌아갈 수 있습니다. 이는 브라우저의 히스토리 스택에 새로운 항목을 추가하는 방식입니다.
        
    
    ### state
    
    - 위 예시에서 버튼을 클릭하면 사용자는 `/profile` 페이지로 이동합니다. 이때 `state` 객체를 통해 `userId`와 `userName` 정보를 전달하게 됩니다. 이 정보는 `/profile` 페이지에서 `useLocation` 훅을 사용해 접근할 수 있습니다.
    
    ```jsx
    import { useLocation } from 'react-router-dom';
    
    const ProfilePage = () => {
      const location = useLocation();
      const { userId, userName } = location.state || {}; // state를 안전하게 접근
    
      return (
        <div>
          <h1>Profile Page</h1>
          <p>User ID: {userId}</p>
          <p>User Name: {userName}</p>
        </div>
      );
    };
    
    ```
    
    위의 `ProfilePage` 컴포넌트에서는 `useLocation` 훅을 통해 `state`에 접근하여 `userId`와 `userName`을 출력합니다. 이 정보를 이용해 페이지에서 사용자 관련 데이터를 동적으로 표시할 수 있습니다.
    

### useParams

- useParams
    
    ### useParams
    
    우리가, 만약에 **`Dynamic Routing`**을 설정했다고 가정해보겠습니다.
    
    ```jsx
    {
        path: '/movie/:movieId',
        element: <MovieDetailPage/>
    }
    ```
    
    이전에, 제가 설명드린 내용에서, **`Dynamic Routing`**은 **`:`**을 앞에 붙인 형태로, 작성된다고 말씀드렸고, **`뒤의 이름을 기억`**해야 한다고 전달해드렸습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const params = useParams();
      console.log(params)
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { params.movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    ![스크린샷 2024-09-14 오전 1.37.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7ae8b375-053b-43b4-8507-8c05feaecd82/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.37.32.png)
    
    이런식으로, **`params`**의 값이 입력됨을 알 수 있다. 우리가 실제로 위에서 설정한 `movieId` 라는 이름으로, 파라미터의 값이 전달됨을 확인할 수 있습니다.
    
    조금 더 깔끔하게 적기 위해서, **`구조분해 할당`**을 활용할 수 있습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const {movieId} = useParams();
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    보통, **`데이터 개별 조회`**를 하는 경우에, 이 **`해당하는 ID를 활용`**해서, 데이터 조회 요청을 하므로, 매우 유용한 패턴이니 꼭 익히시길 바랍니다!
    
