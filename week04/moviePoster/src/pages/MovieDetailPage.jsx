import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import styled from 'styled-components';
import CastProfile from '../components/CastProfile';

const Background = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  padding: 20px 20px 20px 40px;
`;

const MovieBackgroundImg = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  color: white;
  display: grid;
  grid-template-rows: 2fr 1.5fr 1.5fr 1.5fr 2fr 7fr;
  padding: 20px;
  background-image: ${({ backdrop }) =>
    `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4) 50%), url(${backdrop})`};
`;

const CreditHeader = styled.h1`
  color: white;
  margin: 20px 0;
`;

const ProfileContainer = styled.div`
  width: 100%;
  max-height: 500px; 
  overflow-y: auto; 
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding-right: 10px; 
`;

const LoadingMessage = styled.h1`
  color: white;
  text-align: center;
`;

const ErrorMessage = styled.h1`
  color: red;
  text-align: center;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data, isLoading: isLoadingMovie, isError: isErrorMovie } = useCustomFetch(`/movie/${movieId}?language=ko-kr`);
  const { data: credits, isLoading: isLoadingCredits, isError: isErrorCredits } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

  if (isLoadingMovie || isLoadingCredits) return <LoadingMessage>Loading...</LoadingMessage>;
  if (isErrorMovie || isErrorCredits) return <ErrorMessage>에러가 발생했습니다. 다시 시도해 주세요.</ErrorMessage>;

  const backdropUrl = data?.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : '';

  return (
    <Background>
      <MovieBackgroundImg backdrop={backdropUrl}>
        <h1>{data?.title || '제목 없음'}</h1>
        <span>평균 평점: {data?.vote_average || 'N/A'}</span>
        <span>개봉일: {data?.release_date || '정보 없음'}</span>
        <span>러닝 타임: {data?.runtime ? `${data.runtime}분` : '정보 없음'}</span>
        <h3>{data?.tagline || '태그라인 없음'}</h3>
        <span style={{ maxWidth: '800px' }}>{data?.overview || '줄거리 정보가 없습니다.'}</span>
      </MovieBackgroundImg>

      <CreditHeader>감독/출연</CreditHeader>
      <ProfileContainer>
        {credits?.cast?.length ? (
          credits.cast.map((actor) => <CastProfile key={actor.id} actor={actor} />)
        ) : (
          <span>출연진 정보가 없습니다.</span>
        )}
      </ProfileContainer>
    </Background>
  );
};

export default MovieDetailPage;
