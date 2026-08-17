import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[20px] border border-border bg-surface ${className}`}
    >
      {children}
    </div>
  );
}