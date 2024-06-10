import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  appointmentDate?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
