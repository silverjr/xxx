import { DescriptionText } from "@/components/descriptions";

import { TContractDetail } from "../schema";

interface AllocationDetailProps {
  contract?: TContractDetail;
}
export function ContractDetail({ contract }: AllocationDetailProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <DescriptionText label="Quatation Number" value={contract?.number} />
          <DescriptionText label="Quatation Type" value={contract?.type} />
          <DescriptionText
            label="Quatation Category"
            value={contract?.category}
          />
          <DescriptionText
            label="Start Date"
            value={contract?.contractStartDate}
          />
          <DescriptionText label="Tax region" value={contract?.taxRegion} />
          <DescriptionText label="Vendor" value={contract?.vendor} />
        </div>
        <div>
          <DescriptionText
            label="Start End"
            value={contract?.contractStartDate}
          />
          <DescriptionText
            label="Signed Start Date"
            value={contract?.signStartDate}
          />
          <DescriptionText
            label="Signed End Date"
            value={contract?.signEndDate}
          />
          <DescriptionText
            label="Perfomance start"
            value={contract?.guaranteeStartDate}
          />
          <DescriptionText
            label="Perfomance end"
            value={contract?.guaranteeEndDate}
          />
        </div>
      </div>
      <DescriptionText label="Description" value={contract?.description} />
    </>
  );
}
