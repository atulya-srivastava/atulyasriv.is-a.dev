import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Define the character blocks, separating Devanagari and Japanese.
  const devanagariBlock = { name: "Devanagari", start: 0x0900, range: 128 };
  
  const japaneseBlocks = [
    { name: "Hiragana",   start: 0x3040, range: 96 },
    { name: "Katakana",   start: 0x30A0, range: 96 },
    { name: "Kanji (Common)", start: 0x4E00, range: 20992 }
  ];

  const getRandomChar = () => {
    const rand = Math.random();

    if (rand < 0.33) {
      return Math.random() < 0.5 ? '0' : '1';
    } 
    else if (rand < 0.80) {
      const charCode = devanagariBlock.start + Math.floor(Math.random() * devanagariBlock.range);
      return String.fromCharCode(charCode);
    } 
    else {
      const randomBlock = japaneseBlocks[Math.floor(Math.random() * japaneseBlocks.length)];
      
      const charCode = randomBlock.start + Math.floor(Math.random() * randomBlock.range);
      return String.fromCharCode(charCode);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate columns and initialize drops
    const columns = canvas.width / 20; // 20px per character
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      // Start drops at random negative (off-screen) positions
      drops[i] = Math.random() * -canvas.height / 20;
    }

    const draw = () => {
      // Use transparent black to create the fading trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set character style
      ctx.fillStyle = 'hsl(200,100%,60%)'; // Cyan color
      ctx.font = '15px monospace';

      // Loop through each column
      for (let i = 0; i < drops.length; i++) {
        const text = getRandomChar();
        
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top if it's off-screen and passes a random check
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };

    // --- Animation Loop ---
    const interval = setInterval(draw, 50); // ~30 FPS

    // --- Cleanup ---
    // Handle window resize to re-initialize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recalculate columns and reset drops
      const newColumns = canvas.width / 20;
      drops.length = 0; // Clear old drops
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.random() * -canvas.height / 20;
      }
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // This canvas will sit behind all other content
  return (
    <div className="bg-black/45 backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 inset-0 opacity-55 pointer-events-none z-0"
      />
    </div>
  );
};

export default MatrixRain;