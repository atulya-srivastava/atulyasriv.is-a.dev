// import React, { useState, useEffect, useRef } from 'react';

// // A full list of characters for a better scramble effect
// const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// /**
//  * @param {string} text - The text to animate.
//  * @param {string} [className] - Optional CSS class.
//  * @param {boolean} [runOnce=false] - If true, the animation only runs one time.
//  * @param {boolean} [isPaused=false] - If true, pauses the animation.
//  */
// const TextScramble = ({ text, className = "", runOnce = false, isPaused = false, children }: any) => {
//   const [displayText, setDisplayText] = useState(text);
//   const [isInView, setIsInView] = useState(false);
//   const [hasRun, setHasRun] = useState(false); // Tracks if the "runOnce" animation has completed
//   const ref = useRef<HTMLSpanElement>(null);

//   // --- 1. Intersection Observer to trigger animation ---
//   // This effect sets up an observer to check when the component
//   // scrolls into the viewport.
//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     // Set up the observer
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // If the component is intersecting (visible)
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           // If it only runs once, we can stop observing
//           if (runOnce) {
//             observer.unobserve(node);
//           }
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is visible
//     );

//     // Start observing the <span> element
//     observer.observe(node);

//     // Cleanup: stop observing when the component unmounts
//     return () => observer.unobserve(node);
//   }, [runOnce]); // The observer only needs to re-setup if `runOnce` changes

//   // --- 2. The Animation Effect ---
//   // This effect runs the scramble animation.
//   useEffect(() => {
//     // Conditions to *stop* the animation from running:
//     // 1. It's paused.
//     // 2. It's not in the viewport yet.
//     // 3. It's set to `runOnce` and has *already* run.
//     if (isPaused || !isInView || (runOnce && hasRun)) return;

//     let iteration = 0;

//     const interval = setInterval(() => {
//       setDisplayText(
//         text
//           .split('')
//           .map((char, index) => {
//             // If index is "caught up" to the iteration, return the original char
//             if (index < iteration) {
//               return text[index];
//             }
//             // Otherwise, return a random "scramble" character
//             return CHARS[Math.floor(Math.random() * CHARS.length)];
//           })
//           .join('')
//       );

//       // Increase the "revealed" characters
//       iteration += 1 / 3;

//       // Once all characters are revealed
//       if (iteration >= text.length) {
//         clearInterval(interval);
//         setDisplayText(text); // Ensure the final text is correct
//         if (runOnce) {
//           setHasRun(true); // Mark as "run"
//         }
//       }
//     }, 30); // Animation speed (30ms)

//     // Cleanup: clear the interval if the component unmounts
//     // or if the dependencies change (e.g., `text` prop changes)
//     return () => clearInterval(interval);

//     // --- FIX: Corrected dependency array ---
//     // Original was `texat`. Corrected to `text`.
//     // Added other dependencies that control the effect.
//   }, [text, isInView, isPaused, runOnce, hasRun]);

//   return (
//     <span ref={ref} className={className}>
//       {children}{displayText}
//     </span>
//   );
// };

// export default TextScramble;







// -----------------------------------------


import { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
  isPaused?: boolean;
  runOnce?: boolean;
}

const TextScramble = ({ text, className = "", children, isPaused = false, runOnce = false }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (runOnce) {
      if (!hasRunRef.current) {
        scrambleText();
        hasRunRef.current = true;
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPaused) {
            scrambleText();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isPaused]);

  const scrambleText = () => {
    const chars = "abcdefghijklmnopqrstuvwxyze";
    const targetText = text;
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <h2 ref={elementRef} className={className}>
      {children}
      {displayText}
    </h2>
  );
};

export default TextScramble;
