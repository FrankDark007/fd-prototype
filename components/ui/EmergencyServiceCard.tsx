
import React from 'react';
import { Clock, Truck, AlertTriangle } from 'lucide-react';
import { useEmergencyData } from '../../contexts/EmergencyContext';

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
  const { dateTime, activeCrews, responseTime, isEmergencyMode } = useEmergencyData();

  // --- LIVE NET ANIMATION SVG ---
  const NetAnimation = () => (
    <svg width="12" height="12" viewBox="0 0 10 10" className={isEmergencyMode ? "text-red-600" : "text-[#1e8e3e]"}>
        <rect x="1" y="4" width="2" height="4" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="4;8;3;6;4" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" />
            <animate attributeName="y" values="3;1;3.5;2;3" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" />
        </rect>
        <rect x="4" y="2" width="2" height="6" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="6;3;8;4;6" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" begin="0.1s" />
            <animate attributeName="y" values="2;3.5;1;3;2" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" begin="0.1s" />
        </rect>
        <rect x="7" y="5" width="2" height="3" rx="0.5" fill="currentColor">
            <animate attributeName="height" values="3;7;2;5;3" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="3.5;1.5;4;2.5;3.5" dur={isEmergencyMode ? "0.8s" : "1.5s"} repeatCount="indefinite" begin="0.2s" />
        </rect>
    </svg>
  );

  // --- ANIMATED HEARTBEAT (Monitor Style) ---
  const AnimatedHeartbeat = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isEmergencyMode ? "#fff" : "#ea4335"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" opacity="0.8">
         {/* Simulate EKG drawing effect */}
         <animate attributeName="stroke-dasharray" values="0 100; 100 0; 0 100" dur={isEmergencyMode ? "1.5s" : "2.5s"} repeatCount="indefinite" />
         <animate attributeName="opacity" values="0;1;0" dur={isEmergencyMode ? "1.5s" : "2.5s"} repeatCount="indefinite" />
      </path>
    </svg>
  );

  // --- ANIMATED SIGNAL BARS ---
  const AnimatedSignal = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="8" width="3" height="4" rx="1" fill={isEmergencyMode ? "#ef4444" : "#34a853"}>
            <animate attributeName="height" values="4;8;3;4" dur="1.2s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="y" values="8;4;9;8" dur="1.2s" repeatCount="indefinite" begin="0s" />
        </rect>
        <rect x="5.5" y="4" width="3" height="8" rx="1" fill={isEmergencyMode ? "#ef4444" : "#34a853"}>
            <animate attributeName="height" values="8;12;6;8" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="4;0;6;4" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
        </rect>
        <rect x="10" y="0" width="3" height="12" rx="1" fill={isEmergencyMode ? "#ef4444" : "#34a853"}>
            <animate attributeName="height" values="12;6;10;12" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="y" values="0;6;2;0" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
        </rect>
    </svg>
  );

  // --- EXPANDED VARIANT (Sidebar) ---
  if (variant === 'expanded') {
    return (
      <div className={`rounded-3xl shadow-google border p-6 relative overflow-hidden transition-colors duration-500 ${isEmergencyMode ? 'bg-red-50/50 border-red-100' : 'bg-white border-gray-200'} ${className}`}>
        
        {/* Shimmer Effect */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent -translate-x-full animate-[shimmer_2s_infinite] ${isEmergencyMode ? 'via-red-400/50' : 'via-green-400/50'}`}></div>
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>

        {/* Header - Centered Alignment */}
        <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative transition-colors duration-300 ${isEmergencyMode ? 'bg-red-600 shadow-lg shadow-red-200' : 'bg-red-50'}`}>
                    <AnimatedHeartbeat />
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isEmergencyMode ? 'bg-white' : 'bg-green-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-3 w-3 border-2 ${isEmergencyMode ? 'bg-red-500 border-red-200' : 'bg-green-500 border-white'}`}></span>
                    </span>
                </div>
                <div>
                    <div className="font-bold text-gray-900 text-base leading-tight">
                        {isEmergencyMode ? 'Emergency Active' : 'System Status'}
                    </div>
                    <div className={`text-[11px] font-medium mt-0.5 ${isEmergencyMode ? 'text-red-600' : 'text-gray-500'}`}>
                        {isEmergencyMode ? 'High Priority Dispatch' : 'Connected to Dispatch'}
                    </div>
                </div>
            </div>
            
            {/* Live Data Badge */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border shadow-sm self-start ${isEmergencyMode ? 'bg-white border-red-200' : 'bg-gray-50 border-gray-200/60'}`}>
                <span className={`text-[9px] font-mono font-bold tracking-wider ${isEmergencyMode ? 'text-red-500' : 'text-gray-500'}`}>NET</span>
                <NetAnimation />
            </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
            {/* Crews Card */}
            <div className={`rounded-2xl p-4 border text-center flex flex-col justify-center min-h-[110px] relative group transition-colors ${isEmergencyMode ? 'bg-white border-red-100' : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:border-blue-100'}`}>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <AnimatedSignal />
                </div>
                <div className="text-4xl font-display font-bold text-gray-900 mb-1 leading-none tracking-tight">
                    {isEmergencyMode ? '1' : activeCrews}
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
                    <Truck size={12} className={isEmergencyMode ? "text-red-500" : "text-primary"} /> 
                    {isEmergencyMode ? 'Crew Assigned' : 'Active Crews'}
                </div>
            </div>
            
            {/* Response Time Card */}
            <div className={`rounded-2xl p-4 border text-center flex flex-col justify-center min-h-[110px] relative group transition-colors ${isEmergencyMode ? 'bg-white border-red-100' : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:border-blue-100'}`}>
                <div className="text-4xl font-display font-bold text-gray-900 mb-1 leading-none tracking-tight">
                    {isEmergencyMode ? '<45' : responseTime}<span className="text-lg font-medium text-gray-400 ml-0.5">m</span>
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
                    <Clock size={12} className={isEmergencyMode ? "text-red-500" : "text-primary"} /> 
                    {isEmergencyMode ? 'Your ETA' : 'Avg Wait'}
                </div>
            </div>
        </div>

        {/* Status Text Footer - High Contrast */}
        <div className={`rounded-xl p-3.5 border relative z-10 flex items-start gap-3 ${isEmergencyMode ? 'bg-red-600 text-white border-red-500' : 'bg-blue-50/60 border-blue-100/50 text-blue-950'}`}>
            <div className="mt-1">
                <div className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isEmergencyMode ? 'bg-white' : 'bg-blue-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isEmergencyMode ? 'bg-white' : 'bg-blue-600'}`}></span>
                </div>
            </div>
            <div>
                <p className={`text-[11px] font-medium leading-snug ${isEmergencyMode ? 'text-white' : 'text-blue-950'}`}>
                    <span className="font-bold">{isEmergencyMode ? 'PRIORITY STATUS:' : 'Real-time coverage:'}</span> {isEmergencyMode ? 'A restoration coordinator is reviewing your request.' : 'High availability in Northern Virginia, DC, and Maryland.'}
                </p>
                <div className={`text-[10px] font-mono mt-1 font-bold ${isEmergencyMode ? 'text-red-100' : 'text-blue-950'}`}>
                    Last updated: {dateTime}
                </div>
            </div>
        </div>

      </div>
    );
  }

  // --- COMPACT VARIANT (Dropdown/Mobile) ---
  return (
    <div className={`rounded-xl shadow-google-hover border p-4 relative overflow-hidden ${isEmergencyMode ? 'bg-red-50 border-red-100' : 'bg-white border-gray-200'} ${className}`}>
      
      {/* Subtle background scan line animation */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent -translate-x-full animate-[shimmer_2s_infinite] ${isEmergencyMode ? 'via-red-400/50' : 'via-green-400/50'}`}></div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="flex items-start gap-3 relative z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isEmergencyMode ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-primary'}`}>
           {isEmergencyMode ? <AlertTriangle size={20} /> : <Clock size={20} />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
              <div className="font-bold text-gray-900 text-sm leading-tight">
                {isEmergencyMode ? 'Emergency Active' : 'Live Status'}
              </div>
              {/* Live Data Animation SVG */}
              <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border ${isEmergencyMode ? 'bg-white border-red-100' : 'bg-gray-50 border-gray-100'}`}>
                  <span className="text-[9px] font-mono text-gray-400">NET</span>
                  <NetAnimation />
              </div>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 mb-2 font-medium">
            {dateTime}
          </p>
          <div className={`text-xs p-2.5 rounded-lg border leading-relaxed ${isEmergencyMode ? 'bg-white border-red-100 text-red-800' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
            <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <div className={`flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-wide ${isEmergencyMode ? 'text-red-700' : 'text-green-700'}`}>
                    <Truck size={12} className="stroke-[2.5]" />
                    <span>{isEmergencyMode ? 'Dispatching:' : 'Crews Active:'}</span>
                </div>
                <span className={`font-bold text-xs px-1.5 py-0.5 rounded ${isEmergencyMode ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'}`}>
                    {isEmergencyMode ? 'PRIORITY' : (activeCrews > 0 ? activeCrews : '-')}
                </span>
            </div>
            {isEmergencyMode 
                ? "Your request has been flagged for immediate response."
                : <span>Our current response time is <span className="font-bold text-gray-900">{responseTime > 0 ? responseTime : '--'} minutes</span> in Northern Virginia.</span>
            }
          </div>
        </div>
      </div>
      
      {/* Arrow pointer for popover usage */}
      {showPointer && (
        <div className={`absolute -top-1.5 left-6 w-3 h-3 border-l border-t transform rotate-45 ${isEmergencyMode ? 'bg-red-50 border-red-100' : 'bg-white border-gray-200'}`}></div>
      )}
    </div>
  );
};

export default EmergencyServiceCard;
