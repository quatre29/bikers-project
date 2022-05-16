import React from "react";
import adminBadge from "../../assets/badges/admin_badge.svg";
import modBadge from "../../assets/badges/mod_badge.svg";
import devBadge from "../../assets/badges/dev_badge.svg";
import blogBadge from "../../assets/badges/blog_badge.svg";
import memberBadge from "../../assets/badges/member_badge.svg";

interface Props {
  role: "admin" | "moderator" | "developer" | "member" | "blogger";
  size?: "sm" | "md" | "lg" | "xl" | "100%";
}

const roleLookup = {
  admin: adminBadge,
  moderator: modBadge,
  developer: devBadge,
  blogger: blogBadge,
  member: memberBadge,
};

const sizeLookup = {
  sm: { width: "auto", height: 100 },
  md: { width: "auto", height: 250 },
  lg: { width: "auto", height: 350 },
  xl: { width: "auto", height: 500 },
  "100%": { width: "100%", height: "100%" },
};

const RoleBadge: React.FC<Props> = ({ role, size = "100%" }) => {
  return (
    <img
      src={roleLookup[role]}
      width={sizeLookup[size].width}
      height={sizeLookup[size].height}
      alt="user role badge"
    />
  );
};

export default RoleBadge;
