
import { NavLink } from "../types";

export const getRoutes = (
  role: "super_admin" | "company_admin" | "department_admin" | "employee"
): NavLink[] => {
  switch (role) {
    case "super_admin":
      return [];

    case "company_admin":
      return [
        {
          label: "Company",
          link: "/company_admin",
          icon: "",
        },
        {
          label: "Departments",
          link: "/company_admin/departments",
          icon: "",
        },
        {
          label: "All Members",
          link: "/company_admin/members",
          icon: "",
        },
        {
          label: "Projects",
          link: "/company_admin/projects",
          icon: "",
        },
        {
          label: "Profile",
          link: "/common/profile",
          icon: "",
        },
        {
          label: "Settings",
          link: "/common/settings",
          icon: "",
        },
      ];

    case "department_admin":
      return [];

    case "employee":
      return [];

    default:
      return [];
  }
};
