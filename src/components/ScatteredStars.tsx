type StarConfig =
  | { top: string; left: string; size: number; rotate: number }
  | { top: string; right: string; size: number; rotate: number }

const StarIcon = ({ size = 20, opacity = 0.18 }: { size?: number; opacity?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      fill="white"
    />
  </svg>
)

const SCATTERED: StarConfig[] = [
  { top: '8%', left: '3%', size: 18, rotate: 15 },
  { top: '15%', right: '6%', size: 14, rotate: -10 },
  { top: '30%', left: '1%', size: 22, rotate: 5 },
  { top: '55%', right: '2%', size: 16, rotate: 20 },
  { top: '70%', left: '4%', size: 12, rotate: -5 },
  { top: '85%', right: '8%', size: 20, rotate: 10 },
  { top: '42%', left: '96%', size: 14, rotate: -20 },
  { top: '22%', left: '90%', size: 18, rotate: 8 },
]

const ScatteredStars = () => {
  return (
    <>
      {SCATTERED.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none z-0 select-none"
          style={{
            top: s.top,
            left: 'left' in s ? s.left : undefined,
            right: 'right' in s ? s.right : undefined,
            transform: `rotate(${s.rotate}deg)`,
          }}
        >
          <StarIcon size={s.size} />
        </div>
      ))}
    </>
  )
}

export default ScatteredStars
