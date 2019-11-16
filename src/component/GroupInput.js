import React, { useState } from "react";
import store from "../store/RootStore";

export const GroupInput = () => {
  const [value, setInputValue] = useState("");

  const onChange = event => setInputValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    store.groups.add(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>Add Group</div>
      <input {...{ value }} onChange={onChange} />
    </form>
  );
};
