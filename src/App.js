import React, { Fragment } from "react";
import { observer } from "mobx-react";
import { GroupList } from "./component/GroupList";
import { TodoList } from "./component/TodoList";

function App() {
  return (
    <Fragment>
      <GroupList />
      <TodoList />
    </Fragment>
  );
}

export default observer(App);
