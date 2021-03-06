import React from "react";
import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import cloudinary from "../../utils/cloudinary";
import {
  AdvancedImage,
  responsive,
  accessibility,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import { scale, fill, crop } from "@cloudinary/url-gen/actions/resize";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

interface AvatarProps {
  className?: { [prop: string]: string };
  userId?: string;
  online?: boolean;
  size?: {
    width: number | string;
    height: number | string;
  };
  variant?: "square" | "circular" | "rounded";
  image?: string;
}

const UserAvatar: React.FC<AvatarProps> = ({
  className,
  userId,
  online,
  size,
  variant,
  image,
}) => {
  const img = cloudinary.image(image && image);

  if (size) {
    img.resize(fill().width(size?.width).height(size?.height));
  } else {
    img.resize(fill().width(40).height(40));
  }

  return (
    <>
      {online ? (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            variant={variant}
            sx={size}
            alt="user avatar"
            // src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
            // src={
            //   image
            //     ? image
            //     : "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
            // }
          >
            <AdvancedImage cldImg={img} plugins={[responsive()]} />
          </Avatar>
        </StyledBadge>
      ) : (
        <Avatar alt="user avatar" variant={variant} sx={size}>
          <AdvancedImage cldImg={img} plugins={[responsive()]} />
        </Avatar>
      )}
    </>
  );
};

export default UserAvatar;
