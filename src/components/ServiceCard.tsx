
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  className?: string;
}

const ServiceCard = ({ name, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-gray-900 border border-panther-gold/20 rounded-lg p-6 hover:border-panther-gold/40 transition-all flex items-center",
      className
    )}>
      <CheckCircle className="w-5 h-5 text-panther-gold mr-3 flex-shrink-0" />
      <h3 className="font-semibold text-white">{name}</h3>
    </div>
  );
};

export default ServiceCard;
