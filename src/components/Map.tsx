
import { useEffect, useRef } from 'react';

interface MapProps {
  src: string;
  title: string;
}

const Map = ({ src, title }: MapProps) => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-panther-gold/30">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      ></iframe>
    </div>
  );
};

export default Map;
