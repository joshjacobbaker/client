import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component"

const LazyLoadedImage = ({ isActive, children, ...props }) => {
  return <LazyLoadImage {...props}>{children}</LazyLoadImage>
}

export default trackWindowScroll(LazyLoadedImage)

// https://www.npmjs.com/package/react-lazy-load-image-component
