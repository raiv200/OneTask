import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerLabel = {
  readonly id?: string | null;
  readonly text?: string | null;
  readonly color?: string | null;
}

type LazyLabel = {
  readonly id?: string | null;
  readonly text?: string | null;
  readonly color?: string | null;
}

export declare type Label = LazyLoading extends LazyLoadingDisabled ? EagerLabel : LazyLabel

export declare const Label: (new (init: ModelInit<Label>) => Label)

type EagerTask = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly completed?: boolean | null;
}

type LazyTask = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly completed?: boolean | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task)

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly displayName?: string | null;
  readonly imageUrl?: string | null;
  readonly notes?: (Notes | null)[] | null;
  readonly Boards?: (Boards | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly displayName?: string | null;
  readonly imageUrl?: string | null;
  readonly notes: AsyncCollection<Notes>;
  readonly Boards: AsyncCollection<Boards>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly priority?: string | null;
  readonly date?: string | null;
  readonly userprofileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly priority?: string | null;
  readonly date?: string | null;
  readonly userprofileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}

type EagerBoards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Boards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boardTitle?: string | null;
  readonly userprofileID: string;
  readonly cards?: (TaskCard | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Boards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly boardTitle?: string | null;
  readonly userprofileID: string;
  readonly cards: AsyncCollection<TaskCard>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Boards = LazyLoading extends LazyLoadingDisabled ? EagerBoards : LazyBoards

export declare const Boards: (new (init: ModelInit<Boards>) => Boards) & {
  copyOf(source: Boards, mutator: (draft: MutableModel<Boards>) => MutableModel<Boards> | void): Boards;
}

type EagerTaskCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly tasks?: Task | null;
  readonly labels?: Label | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly boardsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly tasks?: Task | null;
  readonly labels?: Label | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly boardsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskCard = LazyLoading extends LazyLoadingDisabled ? EagerTaskCard : LazyTaskCard

export declare const TaskCard: (new (init: ModelInit<TaskCard>) => TaskCard) & {
  copyOf(source: TaskCard, mutator: (draft: MutableModel<TaskCard>) => MutableModel<TaskCard> | void): TaskCard;
}