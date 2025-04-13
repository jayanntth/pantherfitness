
import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react';

interface FitnessOptionCardProps {
  name: string;
  className?: string;
}

const FitnessOptionCard = ({ name, className }: FitnessOptionCardProps) => {
  return (
    <div className={cn(
      "bg-gray-900 border border-panther-gold/20 rounded-lg p-6 hover:border-panther-gold/80 transition-all",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <Activity className="w-8 h-8 text-panther-gold mb-3" />
        <h3 className="font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default FitnessOptionCard;
