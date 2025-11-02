// import { useEffect, useRef, useState } from "react";

// interface TextScrambleProps {
//   text: string;
//   className?: string;
//   children?: React.ReactNode;
//   isPaused?: boolean;
//   runOnce?: boolean;
// }

// const TextScramble = ({ text, className = "", children, isPaused = false, runOnce = false }: TextScrambleProps) => {
//   const [displayText, setDisplayText] = useState(text);
//   const elementRef = useRef<HTMLHeadingElement>(null);
//   const hasRunRef = useRef(false);

//   useEffect(() => {
//     if (runOnce) {
//       if (!hasRunRef.current) {
//         scrambleText();
//         hasRunRef.current = true;
//       }
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !isPaused) {
//             scrambleText();
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isPaused]);

//   const scrambleText = () => {
//     const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const targetText = text;
//     let iteration = 0;

//     const interval = setInterval(() => {
//       setDisplayText(
//         targetText
//           .split("")
//           .map((char, index) => {
//             if (index < iteration) {
//               return targetText[index];
//             }
//             if (char === " ") return " ";
//             return chars[Math.floor(Math.random() * chars.length)];
//           })
//           .join("")
//       );

//       if (iteration >= targetText.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 30);
//   };

//   return (
//     <h2 ref={elementRef} className={className}>
//       {children}
//       {displayText}
//     </h2>
//   );
// };

// export default TextScramble;
