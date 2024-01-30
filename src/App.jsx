import KanbanBoard from "./Components/KanbanBoard";
import { KanbanContextProvider } from "./context/KanbanContext";

export default function App() {
  return (
    <>
      <KanbanContextProvider>
        <KanbanBoard />
      </KanbanContextProvider>
    </>
  );
}
