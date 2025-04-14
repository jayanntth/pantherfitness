
import { ExternalLink } from 'lucide-react';

interface MapProps {
  src: string;
  title: string;
}

const Map = ({ src, title }: MapProps) => {
  return (
    <div className="w-full rounded-lg overflow-hidden border-2 border-panther-gold/30 p-4 bg-black/20">
      <a 
        href={src} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-panther-gold hover:text-panther-gold/80 transition-colors"
      >
        <ExternalLink size={20} className="mr-2" />
        <span>View {title} in Google Maps</span>
      </a>
    </div>
  );
};

export default Map;
