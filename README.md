
# Minimalistic Kanban

## 📃 Description

A minimalistic Kanban board for personal organization develeped with React.


## 📦 Tech Stack

**Front-end:** HTML, CSS, Javascript, React and Vite.

## 🔑 Key Features

- The user can create new task at To-do list.
- Tasks can be moved to Doing list from Todo list, then moved to Done list from Doing list.
- All datas are saved at local storage.

## 💭 Process

- I started creating all the basic React components such as tasks, lists and the board.
- I implemented a layout using flexbox and a minimalist design with CSS.
- I created a specific button to create a new task card with an unput field to add new taskt at To-do list. 
- I created a useContext hook to allow all components (different lists) to access data.
- I added useRef to  retrive data from local storage.
- I deployed the project at Vercel.

## 📚 Learnings

The learning objective of this project was to develop a sole front-end project to understand the main concepts of React framework. I also aimed to be able to deploy my first project. I had two main difficults. The first was apply complex comcepts of React as UseContext. UseRef or useState were easy to understand and apply, but creating a hook to implement a context wasn't that easy. The second was create a responsive design, flex box made a lot of things easier, but when something don't work as expected, was pretty annoying to made it work out. Finally, I realised deploys is much easier than i thought with Vercel.

## ✨ Improvement

The first improvement is a better design. I aimed to create a minimalist design because I like Minimalism, but I agree that the design could be prettier.

The second improvement is to connect the front-end to a back-end project to storage datas using a database such as MongoDB or PostgreSQL.

## 🚦 Running the Project

```bash
  git clone git@github.com:PedroEugenioDev/MinimalisticKanban.git
  cd MinimalisticKanban
  npm run dev
```
## 💻 Deploy

You can access and use a functional version of this project at Vercel:

[Minimalistc-KanBan](https://minimalistic-kanban.vercel.app/)

## 📸 Video or Image

<p align="center"><em>Light theme desktop screenshot</em></p>
<div align="center">
    <img src="/images/light-theme-screenshot.png" alt="Light theme desktop screenshot" title="Light theme desktop screenshot" width="480px">
</div>
<br>
<p align="center"><em>Dark theme desktop screenshot</em></p>
<div align="center">
    <img src="/images/dark-theme-screenshot.png" alt="dark theme desktop screenshot" title="Dark theme desktop screenshot" width="480px">
</div>