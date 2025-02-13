import React from "react";

export const Timeline = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`relative border-l-4 border-purple-500 pl-6 space-y-8 ${className}`}>{children}</div>;
};

export const TimelineItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative bg-gray-900 p-5 rounded-lg shadow-lg ${className}`}>
      <span className="absolute -left-4 top-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white"></span>
      {children}
    </div>
  );
};
