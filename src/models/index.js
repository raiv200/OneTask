// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Notes, Boards, TaskCard, Label, Task } = initSchema(schema);

export {
  UserProfile,
  Notes,
  Boards,
  TaskCard,
  Label,
  Task
};