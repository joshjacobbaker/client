const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 1 },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 1 },
  },
}

export default pageTransitionVariants
