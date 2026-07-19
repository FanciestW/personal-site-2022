import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";

// Smooth ease-in-out for the snap animation.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Enables Lenis smooth scrolling and registers each section as a snap point.
 * `anchors` lets Lenis smoothly handle NavBar's `#id` links, and `proximity`
 * snapping animates to a section only when the user rests near its top edge —
 * so full-screen sections snap cleanly while a section taller than the
 * viewport (the work timeline) stays freely scrollable.
 */
const useSmoothScroll = (sectionIds: string[]) => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true });
    const snap = new Snap(lenis, {
      type: "proximity",
      duration: 1.2,
      easing: easeInOutCubic,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        snap.addElement(element, { align: ["start"] });
      }
    });

    return () => {
      snap.destroy();
      lenis.destroy();
    };
  }, [sectionIds]);
};

export default useSmoothScroll;
