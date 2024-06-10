import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";
import { ClientTitle } from "../client/ClientTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <DateTimeInput label="appointment_date" source="appointmentDate" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="note" multiline source="note" />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
