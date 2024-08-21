import { StatusBadge } from "../../../components/status-badge";
import { PerfomanceEvaluation } from "../schema";

interface SubTitleProps {
  evaluation?: PerfomanceEvaluation;
}
export function SubTitle({ evaluation }: SubTitleProps) {
  return (
    <div>
      {evaluation?.number}
      {evaluation && (
        <StatusBadge
          className="mx-2"
          code={evaluation?.statusCode}
          name={evaluation?.statusName}
        />
      )}
    </div>
  );
}
