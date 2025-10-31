import { ThemeProvider } from "@/components/theme-provider"
import { DashboardPage } from "@/pages/DashboardPage"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <DashboardPage />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
