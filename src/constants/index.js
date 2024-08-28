import cubes from "../../public/cubes.png";
import chart from "../../public/chart-line.png";
import resource from "../../public/resourse.png";
import checkList from "../../public/check-list.png";
import setting from "../../public/setting-sidebar.png";

export const navItems = [
  {
    label: "Bosh sahifa",
    icon: cubes,
    path: "/home",
  },
  {
    label: "Tayyorlanish",
    icon: chart,
    path: "/learning",
  },
  {
    label: "Resurslar",
    icon: resource,
    path: "/resource",
  },
  {
    label: "Test",
    icon: checkList,
    path: "/tests",
  },
  {
    label: "Sozlamalar",
    icon: setting,
    path: "/setting",
  },
];
