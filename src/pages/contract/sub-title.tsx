import { StatusBadge } from "@/components/status-badge";
import { TContractDetail } from "./schema";


interface SubTitleProps {
  contract: TContractDetail
}
export function SubTitle({ contract }: SubTitleProps) {
  return (
    <div>
      {contract?.number}
      {contract && (
        <StatusBadge
          className="mx-2"
          code={contract?.statusCode}
          name={contract?.statusName}
        />
      )}
    </div>
  );
}
