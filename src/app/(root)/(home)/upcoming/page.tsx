import CallList from "../_components/CallList";

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-secondary-foreground">
      <h1 className="text-3xl font-bold">Upcoming meetings</h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;
