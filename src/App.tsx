import CeobeAvatar from "@/assets/ceobe.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import "@/index.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme/provider";
import { ThemeToggle } from "@/theme/toggle";

import { CardLinks } from "./CardLinks";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="z-40 h-full flex-1 flex-col space-y-4 p-8 flex min-w-96">
        <div className="flex items-center justify-between space-y-2">
          <img src={CeobeAvatar} alt="Ceobe" className="w-12 h-12 rounded-sm" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">小刻食堂直达</h2>
            <p className="text-muted-foreground">在这里前往食堂的各个地方</p>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="mt-0 pt-0">
          <Separator />
        </div>
        <ScrollArea className={cn(" h-[calc(100vh-13vh)] overflow-y-auto")}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardLinks />
          </div>
        </ScrollArea>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
