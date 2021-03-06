import React from "react"
import { parseISO, formatDistanceToNow } from "date-fns"

const TimeAgo = ({ timestamp }) => {
  let timeAgo = ""
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  console.log("TimeAgo Mounted")
  return (
    <span title={timestamp}>
      &nbsp; <i>Posted: {timeAgo}</i>
    </span>
  )
}

export default TimeAgo
