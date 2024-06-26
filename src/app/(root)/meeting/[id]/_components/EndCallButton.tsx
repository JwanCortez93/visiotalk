"use client";

import { Button } from "@/components/ui/button";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();

  const localParticpant = useLocalParticipant();

  const isMeetingOwner =
    localParticpant &&
    call?.state.createdBy &&
    localParticpant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.push("/");
      }}
      className="bg-red-500 text-secondary-foreground hover:filter hover:brightness-110"
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
