import { StatusBadge } from "@/components/status-badge";
import { Addendum } from "./schema";

interface SubTitleProps {
  addendum: Addendum;
}
export function SubTitle({ addendum }: SubTitleProps) {
  return (
    <div>
      {addendum?.number}
      {addendum && (
        <StatusBadge
          className="mx-2"
          code={addendum?.statusCode}
          name={addendum?.statusName}
        />
      )}
    </div>
  );
}
