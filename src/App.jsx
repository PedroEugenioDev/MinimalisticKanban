import KanbanBoard from "./Components/KanbanBoard";
import { KanbanContextProvider } from "./context/KanbanContext";

export default function App() {
  return (
    <>
      <KanbanContextProvider>
        <div className="screen">
          <KanbanBoard />
        </div>
      </KanbanContextProvider>
    </>
  );
}
