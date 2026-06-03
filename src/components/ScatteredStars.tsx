interface StarConfig {
  top: string
  left: string
  size: number
  rotate: number
}

function StarIcon({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="white"
        opacity="0.18"
      />
    </svg>
  )
}

const STAR_POSITIONS: StarConfig[] = [
  { top: '8%', left: '3%', size: 18, rotate: 15 },
  { top: '15%', left: '88%', size: 22, rotate: -25 },
  { top: '32%', left: '5%', size: 16, rotate: 45 },
  { top: '45%', left: '92%', size: 20, rotate: -15 },
  { top: '62%', left: '8%', size: 18, rotate: 30 },
  { top: '75%', left: '87%', size: 19, rotate: -40 },
  { top: '85%', left: '4%', size: 12, rotate: 50 },
  { top: '92%', left: '90%', size: 16, rotate: -20 },
]

export default function ScatteredStars() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      {STAR_POSITIONS.map((config, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: config.top, left: config.left }}
        >
          <StarIcon size={config.size} rotate={config.rotate} />
        </div>
      ))}
    </div>
  )
}
