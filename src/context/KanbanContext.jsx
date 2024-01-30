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
    setTodoList([todoList, kanbanDatabase[1], kanbanDatabase[2]]);
  };

  const kanban = {
    kanbanDatabase,
    todoList,
    doingList,
    doneList,
    createNewTask,
  };

  return (
    <KanbanContext.Provider value={kanban}>{children}</KanbanContext.Provider>
  );
}
