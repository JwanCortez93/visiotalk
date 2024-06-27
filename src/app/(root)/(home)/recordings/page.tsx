import CallList from "../_components/CallList";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-secondary-foreground">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
