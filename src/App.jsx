import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;