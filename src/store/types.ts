export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  description?: string;
  avatar?: ImageProps;
}

export interface ImageProps {
  _id?: string;
  url?: string;
  fitUrl?: string;
  createdAt?: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}

export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  column: string;
  author?: string | UserProps;
  createdAt?: string;
  isHTML?: boolean;
}

interface ListProps<p> {
  [id: string]: p
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps,
  loading: boolean,
  error: GlobalErrorProps,
  token: ''
}

export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  column: string;
  author?: string | UserProps;
  createdAt?: string;
  isHTML?: boolean;
}

// 接口返回的报错信息
export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}

export type MessageType = 'success' | 'error' | 'default'
