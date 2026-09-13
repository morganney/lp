const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
const revealElements = [...document.querySelectorAll("[data-reveal]")]

if (!reduceMotion && revealElements.length > 0) {
  document.documentElement.classList.add("has-reveal-animations")

  const revealVisibleElements = () => {
    for (const element of revealElements) {
      // Reveal when the element enters the bottom 15% of the viewport.
      if (element.getBoundingClientRect().top < innerHeight * 0.85) {
        element.classList.add("is-visible")
      }
    }

    const remainingElements = revealElements.filter(
      (element) => !element.classList.contains("is-visible"),
    )

    if (remainingElements.length === 0) {
      removeEventListener("scroll", revealVisibleElements)
      removeEventListener("resize", revealVisibleElements)
    }
  }

  addEventListener("scroll", revealVisibleElements, { passive: true })
  addEventListener("resize", revealVisibleElements)
  revealVisibleElements()
}
