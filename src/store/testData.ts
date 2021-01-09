import { ColumnProps, PostProps, tokenType, UserProps } from './types';

export const testColumns: ColumnProps[] = [
  {
    _id: '1',
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: {
      url: 'https://cdn2.thecatapi.com/images/aeh.jpg'
      // url: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    }
  },
  {
    _id: '2',
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    _id: '3',
    title: 'test3的专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧'
  },
  {
    _id: '4',
    title: 'test4的专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧'
  }
]

export const testPosts: PostProps[] = [
  {
    _id: '1',
    title: '这是我的第一篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    // image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  },
  {
    _id: '2',
    title: '这是我的第一篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  },
  {
    _id: '3',
    title: '这是我的第一篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  }
]


export const mockToken: tokenType = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmZjlhMGE3OWM3YWIxMjYzYmFiYTQ2NyIsImVtYWlsIjoiMTZoeXVAc3R1Mi5lZHUuY24iLCJwYXNzd29yZCI6IiQyYSQxMCRpbFl5TW5xRE80aXovdzBTWDNxUmFlbHR4ZWRxUS85VkdJU1p2UDhNRzE5eDRoZXhRS1EzLiIsIm5pY2tOYW1lIjoiMTZoeXVAc3R1Mi5lZHUuY24iLCJyb2xlIjp7Il9pZCI6IjVlNjA2OThiZGI2MGY2NGI1N2UzNjEzMyIsIm5hbWUiOiJub3JtYWxVc2VyIiwiX192IjowLCJjcmVhdGVkQXQiOiIyMDIwLTAzLTA1VDAyOjUyOjU5LjgwOFoiLCJhY2Nlc3MiOiJ1c2VyIn0sIl9fdiI6MCwiY29sdW1uIjoiNWZmOWEwYTc5YzdhYjEyNjNiYWJhNDY4IiwiY3JlYXRlZEF0IjoiMjAyMS0wMS0wOVQxMjoyNToxMS4xOTdaIn0sImV4cCI6MTYxMDgwNDE2NSwiaWF0IjoxNjEwMTk5MzY1fQ.rGLfRf__rj8KAqSjjOzzAoexOnAzSsDIEUIRi_MOX5k"
}

export const mockLoginData: UserProps = {
    column: "5ff9a0a79c7ab1263baba468",
    email: "16hyu@stu2.edu.cn",
    nickName: "大帅逼",
    _id: "5ff9a0a79c7ab1263baba467",
    isLogin: true
}