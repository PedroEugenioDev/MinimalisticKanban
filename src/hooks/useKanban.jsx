import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext";

export default function useKanban() {
  return useContext(KanbanContext);
}
