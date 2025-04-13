
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

export type Branch = 'andrahalli' | 'mallathahalli';

interface BranchSelectorProps {
  selectedBranch: Branch;
  onBranchChange: (branch: Branch) => void;
}

const BranchSelector = ({ selectedBranch, onBranchChange }: BranchSelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden">
      <button
        className={cn(
          'flex-1 py-4 px-6 flex items-center justify-center font-semibold transition-colors',
          selectedBranch === 'andrahalli' 
            ? 'bg-panther-gold text-black' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        )}
        onClick={() => onBranchChange('andrahalli')}
      >
        <MapPin size={20} className="mr-2" />
        Andrahalli Branch
      </button>
      
      <button
        className={cn(
          'flex-1 py-4 px-6 flex items-center justify-center font-semibold transition-colors',
          selectedBranch === 'mallathahalli' 
            ? 'bg-panther-gold text-black' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        )}
        onClick={() => onBranchChange('mallathahalli')}
      >
        <MapPin size={20} className="mr-2" />
        Mallathahalli Branch
      </button>
    </div>
  );
};

export default BranchSelector;
