import React, { useState, useMemo, useEffect } from "react"

const useElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false)
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
    console.log("RUnning")
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)
    console.log(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, optionsMemo])

  return isVisible
}

export default useElementOnScreen
