import React from "react";
import uuid from "uuid/v4";
import { GroupItem } from "./GroupItem";
import store from "../store/RootStore";
import { values } from "mobx";
import { GroupInput } from "./GroupInput";
import { observer } from "mobx-react";
import "../styles.css";

export const GroupList = observer(() => {
  return (
    <div className="div1">
      <GroupInput />
      {values(store.groups.list).map(group => (
        <GroupItem group={group} key={uuid()} />
      ))}
    </div>
  );
});
