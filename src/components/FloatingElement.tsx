import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function FloatingElement({ children, className, style }: FloatingElementProps) {
  return (
    <div
      className={cn("absolute z-30 pointer-events-none", className)}
      style={style}
    >
      {children}
    </div>
  );
}
