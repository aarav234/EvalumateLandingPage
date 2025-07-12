import { useEffect, useState } from "react";

export default function ScrollIntro({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const phrases = [
    { text: "This October November\nexam session", className: "phrase-1" },
    {
      text: "Supercharge your student's\npast paper prep",
      className: "phrase-2",
    },
    { text: "WITH", className: "phrase-3" },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      setCurrent((prev) => {
        const next = prev + 1;

        if (next === 1) {
          const indicator = document.querySelector(".scroll-indicator");
          if (indicator) indicator.classList.add("hidden");
        }

        if (next < phrases.length) {
          return next;
        } else if (next === phrases.length) {
          return next; // ✅ allow rendering the last phrase
        } else {
          onFinish(); // ✅ only finish after last phrase is shown
          return prev;
        }
      });
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (deltaY > 50) handleScroll({ deltaY: 1 });
    };

    let touchStartY = 0;

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [phrases.length, onFinish]);

  return (
    <>
      {phrases.map((item, i) => (
        <section className="scroll-section" key={i}>
          <div
            className={`phrase ${item.className} ${
              i < current ? "visible" : ""
            }`}
          >
            {item.text.split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
