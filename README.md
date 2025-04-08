# Bruce's Frontend Instagram Clone – React Starter Project

This project is based on a course by **Bruce's Frontend**, and I'm using it to learn **React** and **Redux**.  
It's a hands-on practice project that mimics basic Instagram features to help understand modern frontend development.

---

## 🚀 How to Use This Project

### 1. Install dependencies

```bash
npm install

```

### 2. Start the development server

```

npm run start

```

### Code Formatting with Prettier

```

npm run prettier

```

## Run the JSON Server

```

npm run server

```

## Sample API Data Structure

```
Located in: db.json

{
  "posts": [
    {
      "id": 1,
      "location": "布魯斯前端",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
        {
      "id": 1,
      "location": "Melbourne",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main3.png",
      "likes": 224,
      "description": "Hello from Melbourne!",
      "hashTags": "#Mel",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 2,
      "location": "7-11你好門市",
      "account": "__0831_xxx__",
      "avatar": "/images/avatars/a2.png",
      "photo": "/images/posts/main2.png",
      "likes": 333,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 3,
      "location": "Taipei",
      "account": "gogogo_0214",
      "avatar": "/images/avatars/a3.png",
      "photo": "/images/posts/main3.png",
      "likes": 777,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "6 HOURS AGO"
    },
    {
      "id": 4,
      "location": "信義區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a4.png",
      "photo": "/images/posts/main4.png",
      "likes": 824,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "7 HOURS AGO"
    },
    {
      "id": 5,
      "location": "南港區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a5.png",
      "photo": "/images/posts/main5.png",
      "likes": 98,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "10 HOURS AGO"
    }
  ],
  "stories": [
    {
      "id": 1,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a1.png"
    },
    {
      "id": 2,
      "name": "max",
      "avatar": "/images/avatars/a2.png"
    },
    {
      "id": 3,
      "name": "fm",
      "avatar": "/images/avatars/a3.png"
    },
    {
      "id": 4,
      "name": "joanne",
      "avatar": "/images/avatars/a4.png"
    },
    {
      "id": 5,
      "name": "focus",
      "avatar": "/images/avatars/a5.png"
    },
    {
      "id": 6,
      "name": "louis",
      "avatar": "/images/avatars/a6.png"
    },
    {
      "id": 7,
      "name": "alvin",
      "avatar": "/images/avatars/a7.png"
    },
    {
      "id": 8,
      "name": "grace",
      "avatar": "/images/avatars/a8.png"
    },
    {
      "id": 9,
      "name": "rance",
      "avatar": "/images/avatars/a9.png"
    },
    {
      "id": 10,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a10.png"
    }
  ]
}


```

## **Tech Stack:**

- **React** – JavaScript library for building user interfaces
- **Redux** – State management library for managing the app's state
- **Tailwind CSS** – Utility-first CSS framework for fast UI development
- **TypeScript** – A superset of JavaScript that adds static types for improved development experience
- **JSON Server** – A simple mock API to simulate backend for development
- **Prettier** – Code formatter to maintain code style consistency
- **npm** – Node package manager for handling dependencies and scripts

---

## Future Goals

- **Make the app interactive**: Allow users to leave comments, ✅ like posts, and ✅ follow other users.
  ✅ **Enable profile viewing**: Enable users to click on a username and view their profile.
- **Enhance social feature**: Add features like following users and seeing their posts
- **Create Log in / Authentication**:
  Frontend: Users are able to log in with their account (e.g., using a username/email and password, or through a third-party authentication provider like Google).

  Backend: Issue a token (like a JWT) to validate the user credentials.
