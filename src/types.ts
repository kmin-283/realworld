export type Author = {
  bio: any,
  following: boolean,
  image: string,
  username: string
}

export type Tag = string;

export type Article = {
  author : Author,
  body: string,
  createdAt: string,
  description: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string
  title: string,
  tagList: Tag[],
  updatedAt: string,
};

export type User = {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string,
}

export type Profile = {
  username: string,
  bio: string,
  image: string,
  following: boolean,
}