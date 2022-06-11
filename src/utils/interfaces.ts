/* eslint-disable camelcase */
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IUser {
  user: IUserObject;
}

export interface IUserObject {
  isLogged: boolean;
  name: string;
}

export interface IButtonProps {
  isSelected: boolean;
}

export interface IMovie {
  popular: boolean;
  upcoming: boolean;
}

export interface MovieArrayListProps {
  adult: boolean;
  backdropPath: string;
  genreIds: string[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  voteAvarage: number;
  voteCount: number;
}

export interface MovieListProps {
  popular: boolean;
  upcoming: boolean;
}

export type StackParamList = {
  MovieDetails: {
    movieId: number;
    movieName: string;
    movieDate: string;
    movieBanner: string;
  };
  HomeScreen: undefined;
};

export interface Movie {
  movieId: number;
  movieName: string;
  movieDate: string;
  movieBanner: string;
}

export type MovieDetailsProps = NativeStackScreenProps<
  StackParamList,
  'MovieDetails'
>;

export type RootParamList = {
  Home: undefined;
  MovieDetails: {
    movieId: number;
    movieName: string;
    movieDate: string;
    movieBanner: string;
  };
  AuthRoutes: undefined;
};

export interface MovieGenresProp {
  id: number;
  name: string;
}

export interface MovieInfoProps {
  runtime: number;
  genres: Array<MovieGenresProp>;
  overview: string;
  backdrop_path: string;
}

export interface CastProps {
  id: number;
  original_name: string;
  character: string;
  profile_path: string;
}

export interface MovieCastProps {
  cast: Array<CastProps>;
}
