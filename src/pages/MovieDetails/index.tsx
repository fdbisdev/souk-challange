/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Movie, MovieCastProps, MovieInfoProps } from '../../utils/interfaces';
import {
  Container,
  LoadingContainer,
  DetailsContainer,
  MovieBannerLarge,
  MovieInfoWrapper,
  MovieName,
  MovieDate,
  MovieDetailsWrapper,
  MovieDuration,
  MovieGenre,
  MovieCastWrapper,
  MovieDescriptionSeparator,
  MovieDescriptionWrapper,
  MovieDescriptionText,
  MovieBannerWrapper,
  BackButton,
  BackButtonWrappper,
  MovieBannerEffect,
  MovieWrapper,
  MovieBannerMini,
  MovieCastBanner,
  ActorName,
  CharacterName,
  ActorInfoWrapper,
  MovieCastEffect,
} from './styles';
import { getMovieCast, getMovieDetails } from '../../services/api';
import colors from '../../utils/colors';

const movieInfoInitialValue: MovieInfoProps = {
  runtime: 0,
  genres: [],
  overview: '',
  backdrop_path: '',
};

const movieCastInitialValue: MovieCastProps = {
  cast: [],
};

function MovieDetails({ movieName, movieDate, movieId, movieBanner }: Movie) {
  const [movieInfo, setMovieInfo] = useState<MovieInfoProps>(
    movieInfoInitialValue,
  );
  const [movieCast, setMovieCast] = useState<MovieCastProps>(
    movieCastInitialValue,
  );
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(true);

  const getMovieBackdropBaseURL = `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path} `;

  const navigation = useNavigation();

  function formateMovieYear() {
    const splitDate = movieDate.split('-');
    setReleaseYear(splitDate[0]);
  }

  function handleReturnHome() {
    navigation.goBack();
  }

  async function getMovieInfo() {
    const movieDetailsData: any = await getMovieDetails(movieId);
    setMovieInfo(movieDetailsData.data);
    const movieCastData: any = await getMovieCast(movieId);
    setMovieCast(movieCastData.data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getMovieInfo();
      formateMovieYear();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color={colors.white} />
        </LoadingContainer>
      ) : (
        <DetailsContainer>
          <BackButtonWrappper onPress={() => handleReturnHome()}>
            <BackButton />
          </BackButtonWrappper>
          <MovieBannerWrapper>
            <MovieBannerEffect colors={['black', 'transparent']} />
            <MovieBannerLarge source={{ uri: getMovieBackdropBaseURL }} />
          </MovieBannerWrapper>
          <MovieWrapper>
            <MovieInfoWrapper>
              <MovieName>{movieName} </MovieName>
              <MovieDate>{releaseYear}</MovieDate>
            </MovieInfoWrapper>
            <MovieDetailsWrapper>
              <MovieDuration>{movieInfo.runtime}m | </MovieDuration>
              {movieInfo.genres.map((genre, i: number) => (
                <MovieGenre key={genre.id}>
                  {i + 1 < movieInfo.genres.length
                    ? `${genre.name}, `
                    : `${genre.name} `}
                </MovieGenre>
              ))}
            </MovieDetailsWrapper>
          </MovieWrapper>
          <MovieCastWrapper horizontal>
            <MovieBannerMini source={{ uri: movieBanner }} />
            {movieCast.cast.map((castInfo, i: number) =>
              i < 2 ? (
                <MovieCastBanner
                  key={castInfo.id}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${castInfo.profile_path}`,
                  }}
                >
                  <MovieCastEffect colors={['transparent', 'black']} />
                  <ActorInfoWrapper>
                    <ActorName>{castInfo.original_name}</ActorName>
                    <CharacterName>{castInfo.character}</CharacterName>
                  </ActorInfoWrapper>
                </MovieCastBanner>
              ) : null,
            )}
          </MovieCastWrapper>
          <MovieDescriptionWrapper>
            <MovieDescriptionSeparator />
            <MovieDescriptionText>{movieInfo.overview}</MovieDescriptionText>
          </MovieDescriptionWrapper>
        </DetailsContainer>
      )}
    </Container>
  );
}

export default MovieDetails;
