
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

const CallToAction = ({ size = 'md', className }: CallToActionProps) => {
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
    full: 'text-base py-3 w-full'
  };

  return (
    <a href="tel:9900412321">
      <Button 
        variant="default" 
        className={cn(
          'bg-panther-gold text-black hover:bg-panther-gold/90 font-semibold animate-pulse-gold',
          sizeClasses[size],
          className
        )}
      >
        <Phone size={size === 'sm' ? 16 : 20} className="mr-2" />
        Call for Membership
      </Button>
    </a>
  );
};

export default CallToAction;
