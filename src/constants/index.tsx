import {
  CalendarClock,
  History,
  Home,
  SquareUserRound,
  Videotape,
} from "lucide-react";
import { SidebarLink } from "../../types";

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

export const avatarImages = [
  "https://robohash.org/voluptasvoluptateautem.png?size=50x50&set=set1",
  "https://robohash.org/animidoloresdolores.png?size=50x50&set=set1",
  "https://robohash.org/temporeaccusantiumquaerat.png?size=50x50&set=set1",
  "https://robohash.org/afacereconsequatur.png?size=50x50&set=set1",
  "https://robohash.org/magnievenietdolorem.png?size=50x50&set=set1",
];
