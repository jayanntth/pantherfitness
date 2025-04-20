
import { useState, useRef, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  caption?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, caption }: BeforeAfterSliderProps) => {
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
        className="relative aspect-[9/16] overflow-hidden rounded-lg cursor-col-resize"
        onMouseMove={(e) => e.buttons === 1 && handleSlide(e)}
        onTouchMove={handleSlide}
      >
        {/* Before Image (Full width) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        >
          <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            Before
          </span>
        </div>
        
        {/* After Image (Clipped) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)`
          }}
        >
          <span className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            After
          </span>
        </div>

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

      {caption && (
        <p className="text-center mt-4 text-lg text-gray-300 italic">
          {caption}
        </p>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
