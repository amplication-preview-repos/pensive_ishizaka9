import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  listedDate?: Date | null;
  location?: string | null;
  price?: number | null;
  title?: string | null;
};
