import React from "react";
import { observer } from "mobx-react";
import { GroupButton } from "./GroupButton";

export const GroupItem = observer(props => {
  return <GroupButton group={props.group}>{props.group.title}</GroupButton>;
});
