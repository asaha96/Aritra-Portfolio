import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import useMagnetic from "@/hooks/use-magnetic";

type MagneticCardProps = PropsWithChildren<{
  className?: string;
  strength?: number;
  scale?: number;
}>;

const MagneticCard = ({ className, strength, scale, children }: MagneticCardProps) => {
  const ref = useMagnetic<HTMLDivElement>({ strength, scale });

  return (
    <div ref={ref} className={cn("magnetic-card", className)}>
      {children}
    </div>
  );
};

export default MagneticCard;
