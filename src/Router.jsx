import { element } from "prop-types";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <KanbanBoard />,
  },
]);
