import { createContext, useState } from "react";

export const KanbanContext = createContext({});

export function KanbanContextProvider({ children }) {
  const [kanbanDatabase, setKanbanDatabase] = useState(() => {
    const storedData = localStorage.getItem("minimalisticKanbanDatabase");
    if (!storedData)
      return [
        [{ name: "Create your tasks here" }],
        [{ name: "Focus on what you have to complete" }],
        [{ name: "See how much you have done alright" }],
      ];
    const data = JSON.parse(storedData);
    return data;
  });

  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const addTask = (name) => {
    if (name) {
      const newTask = {
        name: name /* 
        description: description,
        createdAt: Date(), */,
      };

      const todoList = kanbanDatabase[0];

      todoList.push(newTask);
      console.log(todoList);
      setKanbanDatabase([todoList, kanbanDatabase[1], kanbanDatabase[2]]);
      localStorage.setItem(
        "minimalisticKanbanDatabase",
        JSON.stringify(kanbanDatabase)
      );
    }
  };

  const startTask = (taskName) => {
    const todoList = kanbanDatabase[0];
    const doingList = kanbanDatabase[1];
    const index = todoList.findIndex((item) => {
      return item.name === taskName;
    });
    const taskToStart = todoList.splice(index, 1);
    doingList.push(taskToStart[0]);
    setKanbanDatabase([todoList, doingList, kanbanDatabase[2]]);
    localStorage.setItem(
      "minimalisticKanbanDatabase",
      JSON.stringify(kanbanDatabase)
    );
  };

  const finishTask = (taskName) => {
    const doingList = kanbanDatabase[1];
    const doneList = kanbanDatabase[2];
    const index = doingList.findIndex((item) => {
      return item.name === taskName;
    });
    const taskToFinish = doingList.splice(index, 1);
    doneList.push(taskToFinish[0]);
    setKanbanDatabase([kanbanDatabase[0], doingList, doneList]);
    localStorage.setItem(
      "minimalisticKanbanDatabase",
      JSON.stringify(kanbanDatabase)
    );
  };

  const deleteTask = (taskName) => {
    const doneList = kanbanDatabase[2];
    const index = doneList.findIndex((item) => {
      return item.name === taskName;
    });
    doneList.splice(index, 1);
    console.log(doneList);
    setKanbanDatabase([kanbanDatabase[0], kanbanDatabase[1], doneList]);
    localStorage.setItem(
      "minimalisticKanbanDatabase",
      JSON.stringify(kanbanDatabase)
    );
  };

  const kanban = {
    kanbanDatabase,
    todoList,
    doingList,
    doneList,
    addTask,
    startTask,
    finishTask,
    deleteTask,
  };

  return (
    <KanbanContext.Provider value={kanban}>{children}</KanbanContext.Provider>
  );
}
