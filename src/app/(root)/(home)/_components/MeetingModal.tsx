import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MeetingModalProps } from "../../../../../types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  icon,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col w-full max-w-[520px] gap-6 border-none bg-secondary px-6 py-9 text-black">
        {icon && (
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">{icon}</div>
          </div>
        )}
        <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
          {title}
        </h1>
        {children}
        <Button
          className="bg-primary text-secondary-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonIcon} &nbsp;
          {buttonText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
