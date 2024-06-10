import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  listedDate: Date | null;
  location: string | null;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
