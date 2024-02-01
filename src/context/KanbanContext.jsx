import { createContext, useState } from "react";

export const KanbanContext = createContext({});

const teste = [
  [{ name: "Estudar useContext" }, { name: "revisar React Router" }],
  [{ name: "Fazer site de Kanban" }],
  [
    { name: "Atualizar chave SSH do Git" },
    { name: "Corrigir o diretòrio do Git" },
  ],
];

export function KanbanContextProvider({ children }) {
  const [kanbanDatabase, setKanbanDatabase] = useState(teste);
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const createNewTask = (name) => {
    const newTask = {
      name: name /* 
      description: description,
      createdAt: Date(), */,
    };

    const todoList = kanbanDatabase[0];
    todoList.push(newTask);
    console.log(todoList);
    setKanbanDatabase([todoList, kanbanDatabase[1], kanbanDatabase[2]]);
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
  };

  const deleteTask = (taskName) => {
    const doneList = kanbanDatabase[2];
    const index = doneList.findIndex((item) => {
      return item.name === taskName;
    });
    doneList.splice(index, 1);
    console.log(doneList);
    setKanbanDatabase([kanbanDatabase[0], kanbanDatabase[1], doneList]);
  };

  const kanban = {
    kanbanDatabase,
    todoList,
    doingList,
    doneList,
    createNewTask,
    startTask,
    finishTask,
    deleteTask,
  };

  return (
    <KanbanContext.Provider value={kanban}>{children}</KanbanContext.Provider>
  );
}
