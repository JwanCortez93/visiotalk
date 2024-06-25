declare type SidebarLink = {
  label: string;
  route: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

declare type HomeCardProps = {
  bg: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle: string;
  handleClick: () => void;
};
