import uuid from "uuid/v4";
import { types as t } from "mobx-state-tree";
import { TodoModel } from "./ToDoStore";

const GroupModel = t
  .model("GroupModel", {
    id: t.string,
    title: t.string,
    todos: t.array(t.reference(TodoModel)),
    isSelected: t.optional(t.boolean, false)
  })
  .actions(store => ({
    addTodo(todo) {
      store.todos.push(todo);
    },
    toggleSelected() {
      store.isSelected = !store.isSelected;
    }
  }));

export const GroupListModel = t
  .model("GroupListModel", {
    list: t.array(GroupModel)
  })
  .actions(store => ({
    add(title) {
      const group = {
        id: uuid(),
        title
      };

      store.list.push(group);
    }
  }));
