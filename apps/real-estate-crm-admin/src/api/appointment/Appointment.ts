import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  agent?: Agent | null;
  appointmentDate: Date | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  note: string | null;
  property?: Property | null;
  updatedAt: Date;
};
