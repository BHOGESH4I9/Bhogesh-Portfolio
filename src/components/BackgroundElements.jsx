import React from 'react';

const BackgroundElements = ({ mousePosition }) => {
  return (
    <>
      {/* Enhanced Background Elements with Neon Effects */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-bounce" />
      </div>

      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute text-green-400 text-xs font-mono animate-pulse">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackgroundElements;