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
  movieType: string;
}
