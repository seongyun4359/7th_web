import { useEffect, useState, useCallback } from 'react';
import { axiosInstance } from '../apis/axios-instance';

const cache = {}; // 데이터 캐싱을 위한 객체

const useCustomFetch = (url, dependencies = []) => {
    const [data, setData] = useState(cache[url] || []);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchData = useCallback(async () => {
        if (cache[url]) {
            setData(cache[url]);
            return;
        }
        setIsLoading(true);
        setIsError(false);
        setErrorMessage('');
        try {
            const response = await axiosInstance.get(url);
            setData(response.data);
            cache[url] = response.data; // 응답 데이터 캐싱
        } catch (error) {
            setIsError(true);
            setErrorMessage(error.message || '데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    }, [url, ...dependencies]);

    // 데이터 가져오기
    useEffect(() => {
        fetchData();
        return () => {
            setIsLoading(false); // 컴포넌트 언마운트 시 로딩 상태 해제
        };
    }, [fetchData]);

    // 리프레시 기능 추가
    const refresh = () => {
        delete cache[url]; // 캐시된 데이터 삭제
        fetchData();
    };

    return { data, isLoading, isError, errorMessage, refresh };
};

export default useCustomFetch;
