import dayjs from "dayjs";
import { MeetingTypeList } from "./_components/MeetingTypeList";



const Home = () => {
  const time = dayjs().format("HH:mm");
  const amPm = dayjs().format("A");
  const date = dayjs().format("dddd, MMMM D, YYYY");
  return (
    <section className="flex size-full flex-col gap-10 text-secondary-foreground">
      <div className="h-[300px] w-full rounded-[20px] bg-cover bg-hero ">
        <div className="flex h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30PM
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-end">
              <h1 className="text-4xl font-extrabold  lg:text-7xl pl-2 ">
                {time}
              </h1>
              <p className="pl-1 font-light text-sm ">{amPm}</p>
            </div>
            <p className="text-lg font-medium text-primary-foreground glassmorphism rounded px-2">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
