import { Header } from "@/components/layout/Header";
import { Tasks } from "@/components/dashboard/Tasks";
import { FocusTimer } from "@/components/dashboard/FocusTimer";
import { Analytics } from "@/components/dashboard/Analytics";
import { Quote } from "@/components/dashboard/Quote";

export function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <main className="p-4 md:p-8 grid gap-8 grid-cols-1 lg:grid-cols-3">
        <Tasks />
        <div className="space-y-8">
          <FocusTimer />
          <Quote />
        </div>
        <Analytics />
      </main>
    </div>
  );
}
