import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full text-primary-foreground bg-transparent">
      <Loader2 size={50} className="animate-spin" />
      <h1 className="text-5xl pl-6"></h1>
    </div>
  );
};

export default Loader;
