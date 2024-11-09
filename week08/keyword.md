### 키워드 정리 🍠

- useMutation 🍠
    - useMutation이 무엇인가요?
        
        useMutation은 React Query에서 제공하는 훅으로, 서버에 데이터를 변경하는 비동기 작업을 수행할 때 사용. 주로 POST, PUT, DELETE 요청과 같은 데이터 변경 작업에 사용
        
    - onMutate
        
        onMutate는 뮤테이션이 시작되기 전에 호출되는 콜백으로, 현재 상태를 저장하거나, UI를 업데이트하는 데 사용 가능. 이 콜백은 뮤테이션이 시작되기 전에 호출되며, 일반적으로 낙관적 업데이트를 위한 준비 작업을 수행하는 데 유용함.
        
    - onSuccess
        
        nSuccess는 뮤테이션이 성공적으로 완료된 후 호출되는 콜백으로, 성공적인 응답을 처리하거나 관련 쿼리를 무효화(invalidate)하여 UI를 업데이트하는 데 사용.
        
    - onError
        
        onError는 뮤테이션이 실패했을 때 호출되는 콜백. 오류를 처리하거나 사용자에게 오류 메시지를 표시하는 등의 작업을 수행 가능.
        
    - onSettled
        
        onSettled는 뮤테이션이 성공하든 실패하든 상관없이 항상 호출되는 콜백. 주로 UI를 리셋하거나 정리 작업을 수행하는 데 사용.
        
    - invalidateQueries
        
        invalidateQueries는 특정 쿼리를 무효화하여 데이터가 변경되었음을 React Query에 알리는 방법. 이는 UI에서 최신 데이터를 반영하기 위해 필요한 작업임.
        
- 낙관적 업데이트 (Optimistic Update) 🍠
    - 낙관적 업데이트란?
        
        낙관적 업데이트는 데이터 변경 요청이 서버에 성공적으로 전달될 것이라고 가정하고, 즉시 UI를 업데이트하는 방식. 사용자가 변경 작업을 실행했을 때, 서버의 응답을 기다리지 않고 즉시 결과를 반영하여 사용자 경험을 향상시킴.
        
    - 낙관적 업데이트를 `useMutation`을 활용하여 구현할 수 있는 방법?
        
        useMutation의 onMutate 콜백을 사용하여 현재 상태를 저장하고, UI를 즉시 업데이트 가능.
        
        ex)
        
        ```jsx
        const mutation = useMutation(mutateFunction, {
          onMutate: async (newData) => {
            // 현재 상태를 저장
            await queryClient.cancelQueries('dataKey');
            const previousData = queryClient.getQueryData('dataKey');
        
            // 낙관적 업데이트
            queryClient.setQueryData('dataKey', (old) => ({
              ...old,
              data: [...old.data, newData],
            }));
        
            return { previousData };
          },
          onError: (err, newData, context) => {
            // 오류 발생 시 이전 데이터 복원
            queryClient.setQueryData('dataKey', context.previousData);
          },
          onSettled: () => {
            // 쿼리 무효화하여 최신 데이터 요청
            queryClient.invalidateQueries('dataKey');
          },
        });
        
        ```