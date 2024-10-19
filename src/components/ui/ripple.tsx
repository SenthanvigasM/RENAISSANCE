import React, { CSSProperties } from "react";
import './rip.css'; 
import { cn } from "@/lib/utils";

import csea from './csea.png';
import ccc from './ccc.png';
// import ccc from './ccc.png'; 

interface RippleProps {
  sizes?: {
    mainCircleSize?: number;   
    logoSize?: number;          
  };
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  sizes = { mainCircleSize: 200, logoSize: 10 },
  mainCircleOpacity = 0.50,
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-black/5 [mask-image:linear-gradient(to_bottom,white,transparent)] overflow-hidden w-full",
        className,
      )}
    >
      <img 
        src={csea} 
        alt="CSEA Logo" 
        className="absolute top-2 left-4 logo-slide-l" 
        style={{ width: `${(sizes.logoSize)*1.5}%`, height: 'auto' }} 
      />
      {
      <img 
        src={ccc} 
        alt="CCC Logo" 
        className="absolute top-1 right-4 logo-slide-r" 
        style={{ width: `${sizes.logoSize}%`, height: 'auto' }} 
      /> 
      }

      {Array.from({ length: numCircles }, (_, i) => {
        const size = sizes.mainCircleSize + i * 70; 
        const opacity = mainCircleOpacity - i * 0.01;
        const animationDelay = `${i * 0.02}s`;
        const borderOpacity = 5 + i * 9;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:${i}]`}
            style={{
              width: `${size * 1.9}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderWidth: "1px",
              borderColor: `hsl(var(--foreground), ${borderOpacity/1000})`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            } as CSSProperties}
          />
        );
      })}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="pp text-slide">RENAISSANCE</p>
        <p className="text-slide">Intra Departmental Symposium</p>
      </div>
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
