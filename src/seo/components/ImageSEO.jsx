import { imageSeoProps } from "../builders/imageBuilder";

export default function ImageSEO({ src, alt, title, priority, ...props }) {
  return <img src={src} {...imageSeoProps({ alt, title, priority })} {...props} />;
}
