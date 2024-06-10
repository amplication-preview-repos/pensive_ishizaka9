import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AgentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Agents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="first_name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="last_name" source="lastName" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
