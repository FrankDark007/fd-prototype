import React from 'react';
import Button from '../ui/Button';

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border p-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto">
        <Button 
          to="/request/" 
          variant="primary" 
          fullWidth
          className="shadow-md h-[44px] text-[15px]"
        >
          Request Services
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;