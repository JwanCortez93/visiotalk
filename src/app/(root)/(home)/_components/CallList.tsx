"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { CalendarClock, Play, SquareCheckBig, Videotape } from "lucide-react";
import Loader from "@/components/Loader";
import { useToast } from "@/components/ui/use-toast";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { toast } = useToast();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const router = useRouter();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return { calls: endedCalls, icon: <SquareCheckBig /> };
      case "upcoming":
        return { calls: upcomingCalls, icon: <CalendarClock /> };
      case "recordings":
        return { calls: recordings, icon: <Videotape /> };
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map((meeting) => meeting.queryRecordings())
        );
        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);
        setRecordings(recordings);
      } catch (error) {
        toast({ title: "Try again later" });
      }
    };
    if (type === "recordings") fetchRecordings();
  }, [type, callRecordings]);

  const { calls, icon } = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call)?.id}
            icon={icon}
            title={
              (meeting as Call).state?.custom.description?.substring(0, 26) ||
              (meeting as CallRecording).filename?.substring(0, 20) ||
              "Personal Meeting"
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon={type === "recordings" ? <Play /> : undefined}
            buttonText={type === "recordings" ? "Play" : "Start"}
            handleClick={
              type === "recordings"
                ? () => {
                    router.push(`${(meeting as CallRecording).url}`);
                  }
                : () => {
                    router.push(`/meeting/${(meeting as Call).id}`);
                  }
            }
            link={
              type === "recordings"
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (meeting as Call).id
                  }`
            }
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
