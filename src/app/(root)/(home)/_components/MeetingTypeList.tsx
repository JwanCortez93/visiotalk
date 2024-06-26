"use client";

import { CalendarClock, Plus, UserRoundPlus, Videotape } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { HomeCardProps } from "../../../../../types";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";

export const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and a time",
        });
        return;
      }

      const callId = crypto.randomUUID();
      const call = client.call("default", callId);
      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Meeting created",
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
      <HomeCard
        bg="bg-card-1"
        icon={<Plus />}
        title="New Meeting"
        subtitle="Start an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
      />
      <HomeCard
        bg="bg-card-2"
        icon={<UserRoundPlus />}
        title="Join Meeting"
        subtitle="via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        bg="bg-card-3"
        icon={<CalendarClock />}
        title="Schedule meeting"
        subtitle="Plan your next meeting"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
      />
      <HomeCard
        bg="bg-card-4"
        icon={<Videotape />}
        title="View recordings"
        subtitle="Check your previous meetings"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={() => {
          createMeeting();
        }}
      />
    </section>
  );
};

const HomeCard = ({
  bg,
  icon,
  title,
  subtitle,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      onClick={handleClick}
      className={`${bg} px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer`}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{subtitle}</p>
      </div>
    </div>
  );
};
