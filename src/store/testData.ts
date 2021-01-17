import { ColumnProps, PostProps, tokenType, UserProps, ResponseType, ImageProps } from './types';

export const testColumns: ColumnProps[] = [
  {
    author: "5ff9a0a79c7ab1263baba467",
    createdAt: "2021-01-09T12:25:11.199Z",
    description: "这是的16hyu@stu2.edu.cn专栏，有一段非常有意思的简介，可以更新一下欧",
    title: "16hyu@stu2.edu.cn的专栏",
    __v: 0,
    _id: "5ff9a0a79c7ab1263baba468",
    "avatar": {
        "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/6003c7b89c7ab1263baba5ed.jpg",
        "_id": "6003c7b89c7ab1263baba5ed"
    },
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "__v": 0,
      "avatar": {
          "_id": "5f3e41a8b7d9c60b68cdd1ec",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg"
      },
      "featured": true,
      "author": "5f3e86d62c56ee13bb830961",
      "description": "酒店售货机，酒店经营，共享经济，新零售，共享数据线，关注灵趣科技，了解更多",
      "title": "铺先生",
      "_id": "5f3e86d62c56ee13bb83096c",
      "key": 0
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "__v": 0,
      "avatar": {
          "_id": "5f3e3a17c305b1070f455202",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg"
      },
      "featured": true,
      "author": "5f3e86d62c56ee13bb830960",
      "description": "半吊子系统和程序狗，沉迷高端理论，日渐消瘦。",
      "title": "Vehicle攻城狮",
      "_id": "5f3e86d62c56ee13bb83096b",
      "key": 1
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "avatar": {
          "_id": "5ff92c5d9c7ab1263baba445",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ff92c5d9c7ab1263baba445.png"
      },
      "featured": true,
      "author": "5f2918ed59d0b03366c0f0ad",
      "description": "Vue  is a progressive framework for building user interfaces. The core library is focused on the view layer only1",
      "title": "这是一个专业测试1专栏 vue31",
      "_id": "5f4db92abb821789a5490ed3",
      "key": 2
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "__v": 0,
      "avatar": {
          "_id": "5f3e41a8b7d9c60b68cdd1ec",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg"
      },
      "featured": true,
      "author": "5f3e86d62c56ee13bb83095f",
      "description": "公号：高斋CATTI，细致讲解让翻译学习更轻松！",
      "title": "CATTI和MTI考研考试资料与资讯",
      "_id": "5f3e86d62c56ee13bb83096a",
      "key": 3
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "__v": 0,
      "avatar": {
          "_id": "5f3e3a17c305b1070f455202",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg"
      },
      "featured": true,
      "author": "5f3e86d62c56ee13bb830962",
      "description": "鞋神号：  sunmen123123",
      "title": "我不是鞋神",
      "_id": "5f3e86d62c56ee13bb830969",
      "key": 4
  },
  {
      "createdAt": "2020-08-20 22:21:10",
      "__v": 0,
      "avatar": {
          "_id": "5f3e41b8b7d9c60b68cdd1ef",
          "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg"
      },
      "featured": true,
      "author": "5f3e86d62c56ee13bb83095e",
      "description": "愿你有一颗热爱生活的心和一双不老的眼睛！",
      "title": "爱生活爱眼睛",
      "_id": "5f3e86d62c56ee13bb830968",
      "key": 5
  }
]

export const columnArticles = {
    count: 11,
    currentPage: 2,
    pageSize: 6,
    list: [
        
            {
                "createdAt": "2021-01-10 15:00:45",
                "excerpt": "test8",
                "image": {
                    "_id": "5ffaa6179c7ab1263baba47f",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa6179c7ab1263baba47f.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "test8",
                "_id": "5ffaa61d9c7ab1263baba480",
            },
            {
                "createdAt": "2021-01-10 15:00:30",
                "excerpt": "test7",
                "image": {
                    "_id": "5ffaa6079c7ab1263baba47d",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa6079c7ab1263baba47d.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试7",
                "_id": "5ffaa60e9c7ab1263baba47e",
            },
            {
                "createdAt": "2021-01-10 15:00:14",
                "excerpt": "ceshi6",
                "image": {
                    "_id": "5ffaa5f69c7ab1263baba47b",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5f69c7ab1263baba47b.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试6",
                "_id": "5ffaa5fe9c7ab1263baba47c",
            },
            {
                "createdAt": "2021-01-10 14:59:57",
                "excerpt": "测试5",
                "image": {
                    "_id": "5ffaa5e49c7ab1263baba479",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5e49c7ab1263baba479.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试5",
                "_id": "5ffaa5ed9c7ab1263baba47a",
            },
            {
                "createdAt": "2021-01-10 14:59:35",
                "excerpt": "测试4",
                "image": {
                    "_id": "5ffaa5cf9c7ab1263baba477",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5cf9c7ab1263baba477.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试4",
                "_id": "5ffaa5d79c7ab1263baba478",
            },
            {
                "createdAt": "2021-01-10 14:59:19",
                "excerpt": "测试3",
                "image": {
                    "_id": "5ffaa5c69c7ab1263baba475",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5c69c7ab1263baba475.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试3",
                "_id": "5ffaa5c79c7ab1263baba476",
            },
            {
                "createdAt": "2021-01-10 14:58:01",
                "excerpt": "测试2",
                "image": {
                    "_id": "5ffaa5739c7ab1263baba473",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5739c7ab1263baba473.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "测试2",
                "_id": "5ffaa5799c7ab1263baba474",
            },
            {
                "createdAt": "2021-01-10 14:57:40",
                "excerpt": "内容",
                "image": {
                    "_id": "5ffaa5629c7ab1263baba471",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffaa5629c7ab1263baba471.jpg"
                },
                "author": "5ff9a0a79c7ab1263baba467",
                "column": "5ff9a0a79c7ab1263baba468",
                "title": "ceshi1",
                "_id": "5ffaa5649c7ab1263baba472",
            }
    ]
}


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

export const mockUploadPicData: ResponseType<ImageProps>  = {
  code: 0,
  message: '上传成功',
  data: {
    createdAt: "2021-01-10T02:18:58.354Z",
    extname: ".jpg",
    filename: "8.jpg",
    url: "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ffa64129c7ab1263baba46d.jpg",
    _id: "5ffa64129c7ab1263baba46d",
  }
}

// 单条专栏mock数据
export const singleMockColumn: ColumnProps = {
    author: "5ff9a0a79c7ab1263baba467",
    createdAt: "2021-01-09T12:25:11.199Z",
    description: "这是的16hyu@stu2.edu.cn专栏，有一段非常有意思的简介，可以更新一下欧",
    title: "16hyu@stu2.edu.cn的专栏",
    __v: 0,
    _id: "5ff9a0a79c7ab1263baba468",
    avatar: {
        "_id": "5f3e3a17c305b1070f455202",
        "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg"
    }
}
// 带有页码的专栏mock数据
export const mockColumnRes = {
        "count": 11,
        "list": [
            {
                author: "5ff9a0a79c7ab1263baba467",
                createdAt: "2021-01-09T12:25:11.199Z",
                description: "这是的16hyu@stu2.edu.cn专栏，有一段非常有意思的简介，可以更新一下欧",
                title: "16hyu@stu2.edu.cn的专栏",
                __v: 0,
                _id: "5ff9a0a79c7ab1263baba468",
                avatar: {
                    "_id": "5f3e3a17c305b1070f455202",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/6003c7b89c7ab1263baba5ed.jpg"
                }
            },
            {
                "createdAt": "2020-08-20 22:21:10",
                "__v": 0,
                "avatar": {
                    "_id": "5f3e3a17c305b1070f455202",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg"
                },
                "featured": true,
                "author": "5f3e86d62c56ee13bb830960",
                "description": "半吊子系统和程序狗，沉迷高端理论，日渐消瘦。",
                "title": "Vehicle攻城狮",
                "_id": "5f3e86d62c56ee13bb83096b",
                "key": 1
            },
            {
                "createdAt": "2020-08-20 22:21:10",
                "avatar": {
                    "_id": "5ff92c5d9c7ab1263baba445",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ff92c5d9c7ab1263baba445.png"
                },
                "featured": true,
                "author": "5f2918ed59d0b03366c0f0ad",
                "description": "Vue  is a progressive framework for building user interfaces. The core library is focused on the view layer only1",
                "title": "这是一个专业测试1专栏 vue31",
                "_id": "5f4db92abb821789a5490ed3",
                "key": 2
            },
            {
                "createdAt": "2020-08-20 22:21:10",
                "__v": 0,
                "avatar": {
                    "_id": "5f3e41a8b7d9c60b68cdd1ec",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg"
                },
                "featured": true,
                "author": "5f3e86d62c56ee13bb83095f",
                "description": "公号：高斋CATTI，细致讲解让翻译学习更轻松！",
                "title": "CATTI和MTI考研考试资料与资讯",
                "_id": "5f3e86d62c56ee13bb83096a",
                "key": 3
            },
            {
                "createdAt": "2020-08-20 22:21:10",
                "__v": 0,
                "avatar": {
                    "_id": "5f3e3a17c305b1070f455202",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg"
                },
                "featured": true,
                "author": "5f3e86d62c56ee13bb830962",
                "description": "鞋神号：  sunmen123123",
                "title": "我不是鞋神",
                "_id": "5f3e86d62c56ee13bb830969",
                "key": 4
            },
            {
                "createdAt": "2020-08-20 22:21:10",
                "__v": 0,
                "avatar": {
                    "_id": "5f3e41b8b7d9c60b68cdd1ef",
                    "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg"
                },
                "featured": true,
                "author": "5f3e86d62c56ee13bb83095e",
                "description": "愿你有一颗热爱生活的心和一双不老的眼睛！",
                "title": "爱生活爱眼睛",
                "_id": "5f3e86d62c56ee13bb830968",
                "key": 5
            }
        ],
        "pageSize": 6,
        "currentPage": 1
    }

export const mockArticleDetail = {
    "code": 0,
    "data": {
        "_id": "6002e1509c7ab1263baba5e4",
        "title": "测试markdown",
        "content": "```\n这里是用markdown写的内容\n```",
        "column": "5ff9a0a79c7ab1263baba468",
        "author": {
            "_id": "5ff9a0a79c7ab1263baba467",
            "email": "16hyu@stu2.edu.cn",
            "nickName": "16hyu@stu2.edu.cn"
        },
        "image": {
            "_id": "6002e1399c7ab1263baba5e3",
            "url": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/6002e1399c7ab1263baba5e3.jpg"
        },
        "excerpt": "这里是用markdown写的内容\n`",
        "__v": 0,
        "updatedAt": "2021-01-16T12:51:28.826Z",
        "createdAt": "2021-01-16 20:51:28"
    },
    "msg": "请求成功"
}