import React from "react";

// Icon 1: Trophy/Award with Circle Top
export const IconTrophyCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Black Shadow Offset */}
    <g transform="translate(2.5, 2.5)">
      <circle cx="32" cy="18" r="8" fill="#1a1a1a" />
      <path d="M 28 18 C 28 32 36 32 36 18 C 36 36 34 48 34 48 L 30 48 C 30 48 28 36 28 18" fill="#1a1a1a" />
      <polygon points="22,48 42,48 39,54 25,54" fill="#1a1a1a" />
    </g>
    {/* Main Artwork */}
    {/* Stem */}
    <path d="M 28 18 C 28 32 36 32 36 18 C 36 36 34 48 34 48 L 30 48 C 30 48 28 36 28 18" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Base */}
    <polygon points="22,48 42,48 39,54 25,54" fill="#A8E6CF" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Circle Top */}
    <circle cx="32" cy="18" r="8" fill="#4ECDC4" stroke="#1a1a1a" strokeWidth="3" />
  </svg>
);

// Icon 2: Folded Flag / Banner Document
export const IconFlagDocument = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="26,18 38,18 38,48 26,48" fill="#1a1a1a" />
      <rect x="22" y="40" width="20" height="10" rx="1" fill="#1a1a1a" />
    </g>
    {/* Flag Body */}
    <polygon points="26,18 38,18 38,40 26,40" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Triangle roof-like shape on flag */}
    <polygon points="26,18 38,18 32,10" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Black Base */}
    <rect x="22" y="40" width="20" height="10" rx="1" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="3" />
  </svg>
);

// Icon 3: Faceted Trophy
export const IconFacetedTrophy = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="24,18 40,18 44,38 32,46 20,38" fill="#1a1a1a" />
      <polygon points="22,46 42,46 39,52 25,52" fill="#1a1a1a" />
    </g>
    {/* Cup Body */}
    <polygon points="24,18 40,18 44,38 32,46 20,38" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Vertical Facet Lines */}
    <line x1="32" y1="18" x2="32" y2="46" stroke="#1a1a1a" strokeWidth="3" />
    <line x1="28" y1="18" x2="26" y2="38" stroke="#1a1a1a" strokeWidth="3" />
    <line x1="36" y1="18" x2="38" y2="38" stroke="#1a1a1a" strokeWidth="3" />
    {/* Base */}
    <polygon points="22,46 42,46 39,52 25,52" fill="#FF8B94" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

// Icon 4: Ribbon Medal
export const IconRibbonMedal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="25,14 39,14 43,38 21,38" fill="#1a1a1a" />
      <circle cx="32" cy="42" r="10" fill="#1a1a1a" />
    </g>
    {/* Purple Ribbon */}
    <polygon points="25,14 39,14 43,38 21,38" fill="#C3AED6" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Gold Medal Circle */}
    <circle cx="32" cy="42" r="10" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" />
    {/* Star/Diamond Inset */}
    <polygon points="32,36 34,42 40,42 35,44 37,50 32,46 27,50 29,44 24,42 30,42" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// Icon 5: Shield Badge
export const IconShieldBadge = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="22,18 42,18 42,36 32,48 22,36" fill="#1a1a1a" />
    </g>
    {/* Shield Body */}
    <polygon points="22,18 42,18 42,36 32,48 22,36" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Inner Shield (Yellow) */}
    <polygon points="25,21 39,21 39,34 32,43 25,34" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* White Circle */}
    <circle cx="32" cy="30" r="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
  </svg>
);

// Icon 6: Diamond Crystal Trophy
export const IconDiamondTrophy = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="32,10 42,26 32,42 22,26" fill="#1a1a1a" />
      <polygon points="20,46 44,46 41,52 23,52" fill="#1a1a1a" />
    </g>
    {/* Base */}
    <polygon points="20,46 44,46 41,52 23,52" fill="#74B9FF" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Left Diamond Facet */}
    <polygon points="32,10 22,26 32,42" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Right Diamond Facet */}
    <polygon points="32,10 42,26 32,42" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Center Dark Facet */}
    <polygon points="32,10 35,26 32,42 29,26" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

// Icon 7 (Capstone): Golden Crown
export const IconCapstoneCrown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} width="100%" height="100%">
    {/* Shadow */}
    <g transform="translate(2.5, 2.5)">
      <polygon points="16,44 48,44 50,22 41,32 32,18 23,32 14,22" fill="#1a1a1a" />
      <rect x="14" y="44" width="36" height="6" rx="1" fill="#1a1a1a" />
    </g>
    {/* Crown Body */}
    <polygon points="16,44 48,44 50,22 41,32 32,18 23,32 14,22" fill="#FFE66D" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Base Band */}
    <rect x="14" y="44" width="36" height="6" rx="1" fill="#FF6B6B" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
    {/* Gems on peaks */}
    <circle cx="14" cy="22" r="3" fill="#4ECDC4" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="32" cy="18" r="3.5" fill="#C3AED6" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="50" cy="22" r="3" fill="#FF8B94" stroke="#1a1a1a" strokeWidth="2" />
    {/* Center Gem in Crown Body */}
    <polygon points="32,28 35,32 32,36 29,32" fill="#74B9FF" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
