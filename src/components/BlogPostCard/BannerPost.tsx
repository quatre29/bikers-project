import React from "react";
import {
  AdvancedImage,
  responsive,
  accessibility,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import { scale, fill } from "@cloudinary/url-gen/actions/resize";
import cloudinary from "../../utils/cloudinary";

interface Props {
  publicId: string;
}

const BlogPostBanner: React.FC<Props> = ({ publicId }) => {
  const img = cloudinary.image(publicId);

  img.resize(scale().height(300));

  return <AdvancedImage cldImg={img} plugins={[placeholder()]} />;
};

export default BlogPostBanner;
