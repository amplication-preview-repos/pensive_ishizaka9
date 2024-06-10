import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  appointmentDate?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
