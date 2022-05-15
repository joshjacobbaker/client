const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 1 },
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 1 },
  },
}

export default pageTransitionVariants
