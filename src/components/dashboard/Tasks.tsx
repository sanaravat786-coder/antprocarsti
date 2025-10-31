import { useState } from 'react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TASKS as initialTasks, Task } from '@/lib/mock-data';
import { AddTaskDialog } from './AddTaskDialog';
import { cn } from '@/lib/utils';

const priorityVariantMap = {
  High: 'destructive',
  Medium: 'secondary',
  Low: 'outline',
} as const;

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (newTaskData: Omit<Task, 'id' | 'dueDate' | 'completed'>) => {
    const newTask: Task = {
      ...newTaskData,
      id: crypto.randomUUID(),
      dueDate: new Date(), // Set a default due date
      completed: false,
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };


  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Today's Tasks</CardTitle>
        <AddTaskDialog onAddTask={handleAddTask} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={task.id}>
              <div className="flex items-start space-x-4">
                <Checkbox 
                  id={task.id} 
                  className="mt-1" 
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                />
                <div className="flex-1">
                  <label
                    htmlFor={task.id}
                    className={cn(
                      "font-medium leading-none",
                      task.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {task.task}
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Due: {format(task.dueDate, 'PP')}
                  </p>
                </div>
                <Badge variant={priorityVariantMap[task.priority]}>
                  {task.priority}
                </Badge>
              </div>
              {index < tasks.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
