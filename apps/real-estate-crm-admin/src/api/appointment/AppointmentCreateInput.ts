import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  appointmentDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  note?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
