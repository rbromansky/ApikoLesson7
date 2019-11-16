import { types as t } from "mobx-state-tree";
import { TodoListModel } from "./ToDoStore";
import { GroupListModel } from "./GroupStore";

const RootStore = t.model("RootStore", {
  todos: t.optional(TodoListModel, {}),
  groups: t.optional(GroupListModel, {})
});

const rootStore = RootStore.create({});

rootStore.todos.add("шоколад");
rootStore.todos.add("potato");
rootStore.todos.add("oil");
rootStore.todos.add("борщ");
rootStore.todos.add("water");
rootStore.todos.list[2].toggleFavorite();

rootStore.groups.add("Favorite");
rootStore.groups.add("shoping list");
rootStore.groups.add("shoping list2");
rootStore.groups.add("movies to watch");

rootStore.groups.list[0].toggleSelected();
rootStore.groups.list[2].addTodo(rootStore.todos.list[3]);
rootStore.groups.list[1].addTodo(rootStore.todos.list[0]);
rootStore.groups.list[1].addTodo(rootStore.todos.list[1]);
rootStore.groups.list[1].addTodo(rootStore.todos.list[2]);
rootStore.groups.list[3].addTodo(rootStore.todos.list[4]);

rootStore.todos.list[4].toggleCompleted();

export default rootStore;
