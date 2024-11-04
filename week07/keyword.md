# 🎯 핵심 키워드
### 키워드 정리 🍠

- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        
        Tanstack-Query(이전 이름: React-Query)는 서버 상태를 관리하는 강력한 라이브러리입니다. 초기 설정은 다음과 같은 단계로 진행됩니다:
        
        1. `npm install @tanstack/react-query` 또는 `yarn add @tanstack/react-query`로 설치합니다.
        2. 앱 최상위 컴포넌트에서 `QueryClientProvider`로 `QueryClient`를 감싸줍니다.
        
        ```jsx
        
        import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
        
        const queryClient = new QueryClient();
        
        function App() {
          return (
            <QueryClientProvider client={queryClient}>
              {/* 다른 컴포넌트 */}
            </QueryClientProvider>
          );
        }
        
        ```
        
    - Query-DevTools?
        
        
        Query-DevTools는 Tanstack-Query에서 제공하는 개발자 도구로, 현재의 쿼리 상태와 캐시 상태를 실시간으로 확인할 수 있게 해줍니다. `@tanstack/react-query-devtools` 패키지를 설치하고 `ReactQueryDevtools` 컴포넌트를 추가하면 사용 가능합니다.
        
    - useQuery
        
        `useQuery`는 데이터를 불러오는 함수로, 서버에서 데이터를 가져와 상태로 관리할 수 있게 해줍니다. 기본적인 구문은 다음과 같습니다:
        
        ```jsx
        
        const { data, error, isLoading } = useQuery(['queryKey'], fetchFunction);
        
        ```
        
    - useInfiniteQuery
        
        `useInfiniteQuery`는 무한 스크롤 또는 페이지네이션을 구현할 때 사용되며, `getNextPageParam`을 이용해 다음 데이터를 불러올 수 있습니다.
        
        ```jsx
        
        const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
          ['queryKey'],
          fetchFunction,
          { getNextPageParam: (lastPage) => lastPage.nextCursor }
        );
        
        ```
        
    - queryKey
        
        `queryKey`는 각 쿼리를 식별하는 고유한 키로, 캐싱 및 데이터 동기화를 위해 사용됩니다. `queryKey`가 같으면 캐시된 데이터를 재사용할 수 있습니다.
        
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        Pagination(페이지네이션)은 데이터를 여러 페이지로 나누어 보여주는 기법입니다. 많은 양의 데이터를 한 번에 보여주는 대신, 페이지별로 나누어 사용자가 탐색할 수 있도록 합니다.
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        - **클라이언트 사이드 페이지네이션**: 모든 데이터를 클라이언트에 불러온 후, 페이지별로 나누어 표시합니다.
        - **서버 사이드 페이지네이션**: 각 페이지에 필요한 데이터만 서버에서 받아오는 방식입니다. 효율적으로 데이터를 처리할 수 있습니다.
    - Pagination의 장점과 단점에 대해 정리해주세요.
        - **장점**: 데이터가 많아도 화면에 적은 양만 표시되어 성능이 개선됩니다. 사용자는 페이지를 이동하며 필요한 정보를 쉽게 찾을 수 있습니다.
        - **단점**: 페이지 간 이동에 추가적인 로딩이 발생하고, 사용자 경험이 끊길 수 있습니다. 특히 빠르게 연속된 정보가 필요한 경우 불편할 수 있습니다.
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        Intersection Observer API는 특정 요소가 뷰포트에 진입하거나 나갈 때를 감지하는 기능을 제공합니다. 이를 통해 스크롤 이벤트를 효율적으로 관리할 수 있습니다.
        
    - Infinite Scroll은 무엇일까요?
        
        Infinite Scroll(무한 스크롤)은 사용자가 스크롤할 때마다 데이터가 자동으로 추가 로딩되어, 계속해서 새로운 콘텐츠를 보여주는 방식입니다. 예를 들어, 소셜 미디어 피드에서 주로 사용됩니다.
        
    - Inifinite Scroll은 어떻게 구현할까요?
        - **Intersection Observer 사용**: 마지막 요소가 화면에 보일 때 새로운 데이터를 요청하는 방식으로 구현합니다.
        - **useInfiniteQuery 사용**: `@tanstack/react-query`의 `useInfiniteQuery`를 사용하여 쉽게 무한 스크롤을 구현할 수 있습니다.
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        - **장점**: 사용자는 끊김 없이 콘텐츠를 탐색할 수 있어 경험이 매끄럽습니다.
        - **단점**: 스크롤 위치를 기억하기 어렵고, 사용자가 특정 위치로 이동하려면 불편할 수 있습니다. 로딩이 너무 많으면 성능 저하가 발생할 수 있습니다.