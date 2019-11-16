import React from "react";
import { observer } from "mobx-react";
import { Icon } from "../icons/Icon";
import "../styles.css";

export const TodoItem = observer(props => {
  return (
    <div className="toDoItem">
      <div
        className={props.todo.isCompleted ? "completed" : undefined}
        onClick={() => props.todo.toggleCompleted()}
      >
        {props.todo.title}
      </div>
      <div onClick={() => props.todo.toggleFavorite()}>
        {props.todo.isFavorite ? (
          <Icon name="isFavorite" size="15" color="blue" />
        ) : (
          <Icon name="favorite" size="15" color="blue" />
        )}
      </div>
    </div>
  );
});
