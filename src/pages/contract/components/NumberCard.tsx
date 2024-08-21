import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NumberCardProps {
  label: string;
  value?: number;
  icon: ReactNode;
  className?: string
  linkTo?: string
}
export function NumberCard({ label, value, icon,className,linkTo }: NumberCardProps) {
  return (
    <Card className={className}>
      <Link to={linkTo}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value ? value : 0}</div>
        <p className={cn("text-xs text-muted-foreground",className)}>
          +20.1% from last 30 days
        </p>
      </CardContent>
      </Link>
     
    </Card>
  );
}
