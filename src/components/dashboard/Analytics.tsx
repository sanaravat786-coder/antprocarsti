import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis } from 'recharts';
import { ANALYTICS_DATA, TASK_COMPLETION_DATA } from '@/lib/mock-data';

export function Analytics() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4 text-center">Productivity Trend</h3>
          <ChartContainer config={{}} className="w-full h-[250px]">
            <BarChart accessibilityLayer data={ANALYTICS_DATA}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="tasksCompleted" fill="hsl(var(--primary))" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 text-center">Task Completion</h3>
          <ChartContainer config={{}} className="w-full h-[250px]">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie data={TASK_COMPLETION_DATA} dataKey="value" nameKey="status" innerRadius={60} outerRadius={80} paddingAngle={5} />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
