
import React, { useState, useEffect } from 'react';
import { Clock, Truck, Activity, Signal } from 'lucide-react';

interface EmergencyServiceCardProps {
  className?: string;
  showPointer?: boolean;
  variant?: 'compact' | 'expanded';
}

const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({ 
  className = '', 
  showPointer = false,
  variant = 'compact'
}) => {
  const [dateTime, setDateTime] = useState<string>('');
  const [activeCrews, setActiveCrews] = useState<number>(0);
  const [responseTime, setResponseTime] = useState<number>(0);

  // Simple seeded random number generator
  const getSeededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    const updateStatus = () => {
        const now = new Date();
        const currentTimestamp = now.getTime();
        const hourMs = 3600000;

        // 1. Date Time String (Live with Seconds)
        const options: Intl.DateTimeFormatOptions = { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit',
            second: '2-digit'
        };
        // Use toLocaleString to ensure seconds are included and formatted correctly
        setDateTime(now.toLocaleString('en-US', options));

        // 2. Response Time: Updates every 4 hours, Range 67-90
        const responseSeed = Math.floor(currentTimestamp / (4 * hourMs)); 
        const randomResponse = getSeededRandom(responseSeed);
        const calculatedResponseTime = Math.floor(randomResponse * (90 - 67 + 1) + 67);
        setResponseTime(calculatedResponseTime);

        // 3. Crews Active: Updates every 8 hours, Range 5-12
        const crewsSeed = Math.floor(currentTimestamp / (8 * hourMs));
        const randomCrews = getSeededRandom(crewsSeed + 100); 
        const calculatedCrews = Math.floor(randomCrews * (12 - 5 + 1) + 5);
        setActiveCrews(calculatedCrews);
    };
    
    updateStatus();
    const interval = setInterval(updateStatus, 1000); // Update every second for live clock
    return () => clearInterval(interval);
  }, []);

  // --- LIVE NET ANIMATION SVG ---
  const NetAnimation = () => (
    <svg width="12" height="12" viewBox="0 0 10 10" className="text-[#1e8e3e]">
        <rect x="1" y="4" width="2" height="4" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="4;8;3;6;4" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="y" values="3;1;3.5;2;3" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="4" y="2" width="2" height="6" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="6;3;8;4;6" dur="1.5s" repeatCount="indefinite" begin="0.1s" />
            <animate attributeName="y" values="2;3.5;1;3;2" dur="1.5s" repeatCount="indefinite" begin="0.1s" />
        </rect>
        <rect x="7" y="5" width="2" height="3" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="3;7;2;5;3" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="3.5;1.5;4;2.5;3.5" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
        </rect>
    </svg>
  );

  // --- ANIMATED HEARTBEAT (Monitor Style) ---
  const AnimatedHeartbeat = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" opacity="0.8">
         {/* Simulate EKG drawing effect */}
         <animate attributeName="stroke-dasharray" values="0 100; 100 0; 0 100" dur="2.5s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );

  // --- ANIMATED SIGNAL BARS ---
  const AnimatedSignal = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="8" width="3" height="4" rx="1" fill="#34a853">
            <animate attributeName="height" values="4;8;3;4" dur="1.2s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="y" values="8;4;9;8" dur="1.2s" repeatCount="indefinite" begin="0s" />
        </rect>
        <rect x="5.5" y="4" width="3" height="8" rx="1" fill="#34a853">
            <animate attributeName="height" values="8;12;6;8" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="4;0;6;4" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
        </rect>
        <rect x="10" y="0" width="3" height="12" rx="1" fill="#34a853">
            <animate attributeName="height" values="12;6;10;12" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="y" values="0;6;2;0" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
        </rect>
    </svg>
  );

  // --- EXPANDED VARIANT (Sidebar) ---
  if (variant === 'expanded') {
    return (
      <div className={`bg-white rounded-3xl shadow-google border border-gray-200 p-6 relative overflow-hidden ${className}`}>
        
        {/* Shimmer Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>

        {/* Header - Centered Alignment */}
        <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 relative">
                    <AnimatedHeartbeat />
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                    </span>
                </div>
                <div>
                    <div className="font-bold text-gray-900 text-base leading-tight">System Status</div>
                    {/* Aligned text without bullet point for cleaner alignment */}
                    <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                        Connected to Dispatch
                    </div>
                </div>
            </div>
            
            {/* Live Data Badge */}
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md border border-gray-200/60 shadow-sm self-start">
                <span className="text-[9px] font-mono font-bold text-gray-500 tracking-wider">NET</span>
                <NetAnimation />
            </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
            {/* Crews Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 text-center flex flex-col justify-center min-h-[110px] relative group hover:border-blue-100 transition-colors">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <AnimatedSignal />
                </div>
                <div className="text-4xl font-display font-bold text-gray-900 mb-1 leading-none tracking-tight">{activeCrews}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
                    <Truck size={12} className="text-primary" /> Active Crews
                </div>
            </div>
            
            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 text-center flex flex-col justify-center min-h-[110px] relative group hover:border-blue-100 transition-colors">
                <div className="text-4xl font-display font-bold text-gray-900 mb-1 leading-none tracking-tight">
                    {responseTime}<span className="text-lg font-medium text-gray-400 ml-0.5">m</span>
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
                    <Clock size={12} className="text-primary" /> Avg Wait
                </div>
            </div>
        </div>

        {/* Status Text Footer - High Contrast */}
        <div className="bg-blue-50/60 rounded-xl p-3.5 border border-blue-100/50 relative z-10 flex items-start gap-3">
            <div className="mt-1">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </div>
            </div>
            <div>
                <p className="text-[11px] font-medium text-blue-950 leading-snug">
                    <span className="font-bold">Real-time coverage:</span> High availability in Northern Virginia, DC, and Maryland.
                </p>
                <div className="text-[10px] text-blue-950 font-mono mt-1 font-bold">
                    Last updated: {dateTime}
                </div>
            </div>
        </div>

      </div>
    );
  }

  // --- COMPACT VARIANT (Dropdown/Mobile) ---
  return (
    <div className={`bg-white rounded-xl shadow-google-hover border border-gray-200 p-4 relative overflow-hidden ${className}`}>
      
      {/* Subtle background scan line animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="flex items-start gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
           <Clock size={20} className="text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
              <div className="font-bold text-gray-900 text-sm leading-tight">
                Live Status
              </div>
              {/* Live Data Animation SVG */}
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                  <span className="text-[9px] font-mono text-gray-400">NET</span>
                  <NetAnimation />
              </div>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 mb-2 font-medium">
            {dateTime}
          </p>
          <div className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 leading-relaxed">
            <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <div className="flex items-center gap-1.5 text-green-700 font-bold uppercase text-[10px] tracking-wide">
                    <Truck size={12} className="text-green-700 stroke-[2.5]" />
                    <span>Crews Active:</span>
                </div>
                <span className="text-green-700 font-bold text-xs bg-green-100 px-1.5 py-0.5 rounded">{activeCrews > 0 ? activeCrews : '-'}</span>
            </div>
            Our current response time is <span className="font-bold text-gray-900">{responseTime > 0 ? responseTime : '--'} minutes</span> in Northern Virginia, Maryland, and DC.
          </div>
        </div>
      </div>
      
      {/* Arrow pointer for popover usage */}
      {showPointer && (
        <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
      )}
    </div>
  );
};

export default EmergencyServiceCard;
