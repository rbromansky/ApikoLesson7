import React from "react";
import "../styles.css";
import { observer } from "mobx-react";
import store from "../store/RootStore";
import { values } from "mobx";

export const GroupButton = observer(props => {
  const onClick = () => {
    props.group.toggleSelected();
    store.groups.list.map(
      group =>
        group.id !== props.group.id &&
        group.isSelected &&
        group.toggleSelected()
    );
  };

  const countCompleted = () => {
    let count = 0;
    values(props.group.todos).map(todo => !todo.isCompleted && count++);

    return count;
  };

  return (
    <button
      onClick={onClick}
      className={
        props.group.isSelected ? "button-input-completed" : "button-input"
      }
    >
      <div>
        {props.children} {props.group.title !== "Favorite" && countCompleted()}
      </div>
    </button>
  );
});
