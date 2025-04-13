
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface EquipmentCardProps {
  name: string;
  icon: LucideIcon;
  className?: string;
}

const EquipmentCard = ({ name, icon: Icon, className }: EquipmentCardProps) => {
  return (
    <div className={cn(
      "bg-gray-900 border border-panther-gold/20 rounded-lg p-6 hover:border-panther-gold/80 transition-all",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-panther-gold mb-4" />
        <h3 className="font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default EquipmentCard;
