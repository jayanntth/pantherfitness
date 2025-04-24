
import { cn } from '@/lib/utils';

export type Branch = 'andrahalli1' | 'andrahalli2' | 'mallathahalli';

interface BranchSelectorProps {
  selectedBranch: Branch;
  onBranchChange: (branch: Branch) => void;
}

const BranchSelector = ({ selectedBranch, onBranchChange }: BranchSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={() => onBranchChange('andrahalli1')}
        className={cn(
          'px-6 py-3 rounded-lg font-semibold transition-colors',
          selectedBranch === 'andrahalli1'
            ? 'bg-panther-gold text-black'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        )}
      >
        Andrahalli Branch 1
      </button>
      
      <button
        onClick={() => onBranchChange('andrahalli2')}
        className={cn(
          'px-6 py-3 rounded-lg font-semibold transition-colors',
          selectedBranch === 'andrahalli2'
            ? 'bg-panther-gold text-black'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        )}
      >
        Andrahalli Branch 2
      </button>

      <button
        onClick={() => onBranchChange('mallathahalli')}
        className={cn(
          'px-6 py-3 rounded-lg font-semibold transition-colors',
          selectedBranch === 'mallathahalli'
            ? 'bg-panther-gold text-black'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        )}
      >
        Mallathahalli Branch
      </button>
    </div>
  );
};

export default BranchSelector;
