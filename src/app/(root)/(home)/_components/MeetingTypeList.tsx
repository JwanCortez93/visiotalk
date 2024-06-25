"use client";

import {
  Calendar,
  CalendarClock,
  Plus,
  UserRoundPlus,
  Videotape,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
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
