import { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms before the element animates in */
  delay?: number;
  /** Direction the element travels from */
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Wraps children in an element that fades + slides into view when scrolled to.
 * Mirrors the subtle on-enter motion used on getgreenleads.com.
 */
const Reveal = ({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  direction = "up",
}: RevealProps) => {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn(
        "reveal",
        `reveal-${direction}`,
        revealed && "reveal-in",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
