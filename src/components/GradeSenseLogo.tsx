import React from 'react'

interface GradeSenseLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

export const GradeSenseLogo: React.FC<GradeSenseLogoProps> = ({ 
  className = "h-10 w-10", 
  showText = true,
  textClassName = "text-2xl font-bold text-black"
}) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Shield Logo */}
      <div className={`${className} relative flex-shrink-0`}>
        <svg 
          viewBox="0 0 100 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Shield Background */}
          <path
            d="M50 5L85 20V50C85 75 70 95 50 115C30 95 15 75 15 50V20L50 5Z"
            fill="#F97316"
            stroke="#EA580C"
            strokeWidth="2"
          />
          
          {/* Inner Shield */}
          <path
            d="M50 15L75 25V45C75 65 62.5 80 50 95C37.5 80 25 65 25 45V25L50 15Z"
            fill="#FFFFFF"
            stroke="#F97316"
            strokeWidth="1"
          />
          
          {/* Grade Lines (representing evaluation sheets) */}
          <g stroke="#F97316" strokeWidth="2" fill="none">
            <line x1="35" y1="35" x2="65" y2="35" />
            <line x1="35" y1="45" x2="65" y2="45" />
            <line x1="35" y1="55" x2="55" y2="55" />
          </g>
          
          {/* Checkmark */}
          <path
            d="M40 60L45 65L60 50"
            stroke="#F97316"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* G Letter in center */}
          <text
            x="50"
            y="75"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#F97316"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            G
          </text>
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <span className={textClassName}>
          GradeSense
        </span>
      )}
    </div>
  )
}

export default GradeSenseLogo