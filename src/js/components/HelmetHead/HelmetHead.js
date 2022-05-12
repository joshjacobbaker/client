import react from "react"
import { Helmet } from "react-helmet"

// Helmet
import FavIcon from "../../../images/favicon_io/favicon.ico"
import FavIconAppleTouch from "../../../images/favicon_io/apple-touch-icon.png"
import FavIconLarge from "../../../images/favicon_io/favicon-32x32.png"
import FavIconSmall from "../../../images/favicon_io/favicon-16x16.png"

const HelmetHead = () => {
  return (
    <Helmet>
      <title>Y.O.U.</title>
      <link rel="apple-touch-icon" sizes="180x180" href={FavIconAppleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={FavIconLarge} />
      <link rel="icon" type="image/png" sizes="16x16" href={FavIconSmall} />
      <link rel="icon" type="image/png" sizes="16x16" href={FavIcon} />
      <link rel="manifest" href="../favicon_io/site.webmanifest" />
    </Helmet>
  )
}

export default HelmetHead

// https://favicon.io/emoji-favicons/smiling-face-with-hearts
