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
  extname?: string;
  filename?: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
  createdAt?: string;
  __v?: number;
  featured?: boolean;
  author?: string;
  key?: number;
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
  avatar?: ImageProps;
  description?: string;
}

interface ListProps<p> {
  [id: string]: p
}

export interface LoadedPostProps {
  columnId?: string;
  currentPage?: number;
  total?: number;
}

export interface GlobalDataProps {
  columns: {
    data: ListProps<ColumnProps>;
    currentPage: number;
    total: number;
  };
  // posts: PostProps[];
  user: UserProps,
  loading: boolean,
  error: GlobalErrorProps,
  token: string,
  posts: {  // 主要是为了作缓存，避免跳转到同一个页面重复发请求
    data: ListProps<PostProps>;
    loadedColumns: ListProps<LoadedPostProps>;
  }
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

export interface LoginInfoProps {
  hasLogin: boolean;
  nickName?: string;
  id?: number;
}

export interface tokenType {
  token: string
}

export interface ResponseType<P = {}> {
  code: number,
  message: string,
  data: P
} 

