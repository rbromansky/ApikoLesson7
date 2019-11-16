import React, { useState } from "react";
import store from "../store/RootStore";

export const TodoInput = () => {
  const [value, setInputValue] = useState("");

  const onChange = event => setInputValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    store.todos.add(value);

    store.groups.list.map(
      group => group.isSelected && group.addTodo(store.todos.list[0])
    );

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>Add Todo</div>
      <input {...{ value }} onChange={onChange} />
    </form>
  );
};
