import { faker } from '@faker-js/faker';

export type Task = {
  id: string;
  task: string;
  dueDate: Date;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
};

export const createRandomTask = (): Task => {
  return {
    id: faker.string.uuid(),
    task: faker.lorem.sentence(4),
    dueDate: faker.date.future(),
    priority: faker.helpers.arrayElement(['High', 'Medium', 'Low']),
    completed: faker.datatype.boolean(),
  };
};

export const TASKS: Task[] = faker.helpers.multiple(createRandomTask, {
  count: 5,
});

export const ANALYTICS_DATA = [
    { date: 'Mon', tasksCompleted: faker.number.int({ min: 2, max: 5 }) },
    { date: 'Tue', tasksCompleted: faker.number.int({ min: 3, max: 6 }) },
    { date: 'Wed', tasksCompleted: faker.number.int({ min: 1, max: 4 }) },
    { date: 'Thu', tasksCompleted: faker.number.int({ min: 4, max: 8 }) },
    { date: 'Fri', tasksCompleted: faker.number.int({ min: 5, max: 7 }) },
    { date: 'Sat', tasksCompleted: faker.number.int({ min: 2, max: 5 }) },
    { date: 'Sun', tasksCompleted: faker.number.int({ min: 1, max: 3 }) },
];

export const TASK_COMPLETION_DATA = [
    { status: 'Completed', value: faker.number.int({ min: 10, max: 20 }), fill: 'hsl(var(--primary))' },
    { status: 'Pending', value: faker.number.int({ min: 5, max: 10 }), fill: 'hsl(var(--muted-foreground))' },
];
