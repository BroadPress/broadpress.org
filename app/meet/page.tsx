import { Metadata } from "next";
import MeetClient from "./meetclient";

export const metadata: Metadata = {
  title: "Join Virtual Meeting | BroadPress",
  description: "Join our virtual meetings and discussions at BroadPress.",
};

export default function MeetPage() {
  return <MeetClient />;
}
