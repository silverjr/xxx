import { DescriptionText } from "@/components/descriptions";
import { Addendum } from "./schema";

interface AddendumDetailProps {
  addendum?: Addendum;
}

export function AddendumDetail({ addendum }: AddendumDetailProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <DescriptionText label="Number" value={addendum?.number} />
          <DescriptionText label="Description" value={addendum?.description} />
        </div>
        <div>
          <DescriptionText
            label="Quatation Number"
            value={addendum?.contractNumber}
          />
          <DescriptionText
            label="Quatation description"
            value={addendum?.contractDescription}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <DescriptionText label="Submitted by" value={addendum?.submittedBy} />
          <DescriptionText
            label="Submitted date"
            value={addendum?.submittedDate}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <DescriptionText label="Reviewed by" value={addendum?.reviewedBy} />
          <DescriptionText
            label="Reviewed date"
            value={addendum?.reviewedDate}
          />
        </div>
        <div>
          <DescriptionText
            label="Review comment"
            value={addendum?.reviewerComment}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <DescriptionText label="Approved by" value={addendum?.approvedBy} />
          <DescriptionText
            label="Approved date"
            value={addendum?.approvedDate}
          />
        </div>
        <div>
          <DescriptionText
            label="Review comment"
            value={addendum?.approverComment}
          />
        </div>
      </div>
    </>
  );
}
