import {
  CalendarClock,
  History,
  Home,
  SquareUserRound,
  Videotape,
} from "lucide-react";

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Home",
    route: "/",
    icon: <Home />,
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    icon: <CalendarClock />,
  },
  {
    label: "Previous",
    route: "/previous",
    icon: <History />,
  },
  {
    label: "Recordings",
    route: "/recordings",
    icon: <Videotape />,
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    icon: <SquareUserRound />,
  },
];
