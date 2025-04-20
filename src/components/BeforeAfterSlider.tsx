
import { useState, useRef, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  clientName?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage }: BeforeAfterSliderProps) => {
  const [sliderValue, setSliderValue] = useState([50]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleSlide = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderValue([Math.min(Math.max(position, 0), 100)]);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg cursor-col-resize"
        onMouseMove={(e) => e.buttons === 1 && handleSlide(e)}
        onTouchMove={handleSlide}
      >
        {/* Before Image (Full width) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        />
        
        {/* After Image (Clipped) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)`
          }}
        />

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-panther-gold"
          style={{ 
            left: `${sliderValue[0]}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-panther-gold rounded-full flex items-center justify-center cursor-grab">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="mt-4 px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
