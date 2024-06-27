"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const PersonalRoom = () => {
  const { user } = useUser();

  if (!user) return <h1>Please Log In</h1>;

  const client = useStreamVideoClient();
  const { toast } = useToast();
  const router = useRouter();
  const meetingId = user.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const { call } = useGetCallById(meetingId);

  const startRoom = async () => {
    if (!client) return;

    const newCall = client.call("default", meetingId);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-secondary-foreground">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table
          title="Topic"
          description={`${
            user.username!.charAt(0).toUpperCase() + user.username!.slice(1)
          }'s Meeting Room`}
        />
      </div>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Meeting ID" description={meetingId} />
      </div>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-primary  text-secondary-foreground"
          onClick={startRoom}
        >
          Start Meeting
        </Button>
        <Button
          className="bg-foreground text-secondary-foreground"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-secondary-foreground lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

export default PersonalRoom;
