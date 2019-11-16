import React from "react";
import "../styles.css";
import { values } from "mobx";
import store from "../store/RootStore";
import { TodoItem } from "./TodoItem";
import uuid from "uuid/v4";
import { observer } from "mobx-react";
import { TodoInput } from "./TodoInput";
import { prettyPrint } from "../store/utils";

export const TodoList = observer(() => {
  return (
    <div className="div2">
      {!store.groups.list[0].isSelected && <TodoInput />}
      {store.groups.list[0].isSelected
        ? store.todos.favoriteList.map(todo => (
            <TodoItem todo={todo} key={uuid()} />
          ))
        : values(store.groups.list).map(
            group =>
              group.isSelected &&
              values(group.todos).map(todo => (
                <TodoItem todo={todo} key={uuid()} />
              ))
          )}
    </div>
  );
});
