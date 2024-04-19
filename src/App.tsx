import { ThemeProvider } from "@/theme/provider";

import { ThemeToggle } from "./theme/toggle";
import "@/index.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ThemeToggle></ThemeToggle>
    </ThemeProvider>
  );
}

export default App;
