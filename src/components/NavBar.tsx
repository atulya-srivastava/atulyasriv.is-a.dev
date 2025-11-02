import React, { useState, useEffect } from 'react';
// import { Terminal } from 'lucide-react'; // Uncomment if you're using this icon

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log("sy==  ",currentScrollY);

      if (currentScrollY <= 600) {
        // Always show if at the very top
        setIsVisible(true);
      } else if (currentScrollY >= lastScrollY + 4) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY + 2< lastScrollY){
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  return (
    <div className="w-full flex justify-center">
      <nav 
        className={`
          fixed w-1/2 z-50 rounded-full backdrop-blur-sm bg-grey/60 border-b border-border/50
          transition-all duration-600 ease-in-out
          ${isVisible ? 'top-2' : '-top-full'} 
        `}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-mono text-lg group cursor-pointer">
            {/* <Terminal className="w-5 h-5 text-blue-500 group-hover:text-cyan-500 transition-colors" /> */}
            <a href="\" className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent font-bold">&lt;atulyasriv/&gt;</a>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-sm">
            <a href="#about" className="hover:text-blue-500 transition-colors">&lt;about /&gt;</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">&lt;skills /&gt;</a>
            <a href="#projects" className="hover:text-purple-500 transition-colors">&lt;projects /&gt;</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">&lt;contact /&gt;</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;