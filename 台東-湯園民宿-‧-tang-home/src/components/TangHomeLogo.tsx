import React from 'react';

interface TangHomeLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'horizontal' | 'compact' | 'stacked';
  color?: string; // e.g. '#d1b07c', '#c8b08d', '#8c6d3f', '#ffffff', '#1c1917'
  textColor?: string;
  accentColor?: string;
  height?: number | string;
}

/**
 * Exact Vector Reproduction of the Official Tang Home (湯園民宿) Logo
 * - Left Twin Sloped Gable Peak
 * - Right High Mountain Peak with Inner Gable & 4-Pane Window Grid (2x2)
 * - Fluid S-Curve Ground Wave Ribbon
 */
export const TangHomeMountainIcon: React.FC<{
  color?: string;
  accentColor?: string;
  className?: string;
  size?: number;
  useGradient?: boolean;
}> = ({
  color = '#d1b07c',
  accentColor = '#e5cca0',
  className = '',
  size = 36,
  useGradient = false,
}) => {
  const gradientId = `tang-gold-grad-${Math.random().toString(36).substr(2, 6)}`;
  const strokeColor = useGradient ? `url(#${gradientId})` : color;

  return (
    <svg
      viewBox="0 0 120 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: (size * 86) / 120 }}
      aria-label="湯園民宿山嵐建築標誌"
    >
      {useGradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor="#9a7644" />
          </linearGradient>
        </defs>
      )}

      {/* Left Mountain & Twin Sloped Roof Peak */}
      <path
        d="M12 65 L43 28 L57 44"
        stroke={strokeColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 65 L43 45 L50 52"
        stroke={strokeColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right High Mountain Peak & Main Gable */}
      <path
        d="M48 50 L71 18 L104 65"
        stroke={strokeColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner House Gable under the Right Peak */}
      <path
        d="M56 65 L73 43 L91 65"
        stroke={strokeColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 4 Square Window Panes (2x2 Grid) */}
      <g stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" fill="none">
        <rect x="71" y="52" width="4" height="4" rx="0.8" />
        <rect x="78" y="52" width="4" height="4" rx="0.8" />
        <rect x="71" y="59" width="4" height="4" rx="0.8" />
        <rect x="78" y="59" width="4" height="4" rx="0.8" />
      </g>

      {/* Elegant Sweeping Wave / River Ribbon Ground Line */}
      <path
        d="M44 76 C56 70 70 73 85 75 C97 76 107 72 114 62 C107 72 95 80 78 79 C62 78 52 82 44 76 Z"
        fill={strokeColor}
      />
      <path
        d="M44 76 C56 70 70 73 85 75 C97 76 107 72 114 62 C105 73 93 81 78 79 C60 77 52 82 44 76"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TangHomeLogo: React.FC<TangHomeLogoProps> = ({
  className = '',
  variant = 'full',
  color = '#d1b07c',
  textColor = '#f5f2eb',
  accentColor = '#e5cca0',
  height = 42,
}) => {
  const iconSize = typeof height === 'number' ? height : 42;

  if (variant === 'icon-only') {
    return (
      <TangHomeMountainIcon
        color={color}
        accentColor={accentColor}
        className={className}
        size={iconSize}
        useGradient={true}
      />
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
        <TangHomeMountainIcon
          color={color}
          accentColor={accentColor}
          size={38}
          className="mb-2"
          useGradient={true}
        />
        <span
          className="font-serif text-2xl font-normal tracking-[0.25em] pl-[0.25em] leading-tight"
          style={{ color: textColor }}
        >
          湯園民宿
        </span>
        <span
          className="text-[9.5px] font-sans font-medium tracking-[0.25em] pl-[0.25em] mt-1"
          style={{ color }}
        >
          台東合法民宿 1639 號
        </span>
      </div>
    );
  }

  // Official Brand Lockup
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <div className="flex items-center space-x-3 sm:space-x-3.5">
          {/* Official Emblem Icon with Warm Golden Luster */}
          <div className="shrink-0 flex items-center justify-center">
            <TangHomeMountainIcon
              color={color}
              accentColor={accentColor}
              size={iconSize}
              useGradient={true}
            />
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline space-x-1.5">
              <span
                className="font-serif text-xl sm:text-2xl font-medium tracking-[0.18em] leading-tight"
                style={{ color: textColor }}
              >
                湯園民宿
              </span>
            </div>
            
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span
                className="text-[9.5px] sm:text-[10.5px] font-sans font-medium tracking-[0.18em] leading-none"
                style={{ color }}
              >
                台東合法民宿 1639 號
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal Clean Lockup
  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      <TangHomeMountainIcon
        color={color}
        accentColor={accentColor}
        size={iconSize}
        useGradient={true}
        className="shrink-0"
      />
      
      <div className="flex flex-col justify-center">
        <span
          className="font-serif text-lg sm:text-xl font-normal tracking-[0.16em] leading-tight"
          style={{ color: textColor }}
        >
          湯園民宿
        </span>
        <div className="flex items-center space-x-1 mt-0.5">
          <span
            className="text-[9px] sm:text-[10px] font-sans tracking-[0.15em] font-medium leading-none"
            style={{ color }}
          >
            台東合法民宿 1639 號
          </span>
        </div>
      </div>
    </div>
  );
};
