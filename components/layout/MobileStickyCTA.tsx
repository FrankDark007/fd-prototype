
import React from 'react';
import Button from '../ui/Button';

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="p-3">
        <Button 
          to="/request/" 
          variant="primary" 
          fullWidth
          className="h-14 text-[17px] font-semibold shadow-none rounded-full"
        >
          Request Services
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
