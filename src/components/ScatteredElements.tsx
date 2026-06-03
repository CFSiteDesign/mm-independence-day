const elements = [
  {
    src: "/images/el-bolt.png",
    style: {
      top: "12%",
      left: "3%",
      width: "52px",
      transform: "rotate(-18deg)",
      opacity: 0.75,
      animationDelay: "0s",
      animationDuration: "4.5s",
    },
  },
  {
    src: "/images/el-angular.png",
    style: {
      top: "8%",
      right: "5%",
      width: "44px",
      transform: "rotate(22deg)",
      opacity: 0.7,
      animationDelay: "1.2s",
      animationDuration: "3.8s",
    },
  },
  {
    src: "/images/el-bolt.png",
    style: {
      top: "45%",
      left: "2%",
      width: "38px",
      transform: "rotate(10deg)",
      opacity: 0.65,
      animationDelay: "0.6s",
      animationDuration: "5s",
    },
  },
  {
    src: "/images/el-angular.png",
    style: {
      bottom: "28%",
      right: "3%",
      width: "48px",
      transform: "rotate(-30deg)",
      opacity: 0.8,
      animationDelay: "2s",
      animationDuration: "4.2s",
    },
  },
  {
    src: "/images/el-bolt.png",
    style: {
      bottom: "12%",
      left: "6%",
      width: "42px",
      transform: "rotate(5deg)",
      opacity: 0.6,
      animationDelay: "1.8s",
      animationDuration: "4.8s",
    },
  },
  {
    src: "/images/el-angular.png",
    style: {
      top: "70%",
      right: "7%",
      width: "36px",
      transform: "rotate(-15deg)",
      opacity: 0.7,
      animationDelay: "0.9s",
      animationDuration: "3.5s",
    },
  },
];

export default function ScatteredElements() {
  return (
    <>
      {elements.map((el, i) => (
        <img
          key={i}
          src={el.src}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none animate-float"
          style={el.style}
        />
      ))}
    </>
  );
}
