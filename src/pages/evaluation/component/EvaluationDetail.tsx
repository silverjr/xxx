import { DescriptionText } from "@/components/descriptions";
import { PerfomanceEvaluation } from "../schema";
import { Section } from "@/components/section";
import { GroupEvaluationLine } from "../GroupEvaluationLine";

interface EvaluationDetailProps {
  evaluation?: PerfomanceEvaluation;
}
export function EvaluationDetail({ evaluation }: EvaluationDetailProps) {
  return (
    <>
      <Section title="Quatation information">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <DescriptionText
              label="Quatation Description:"
              value={evaluation?.description}
            />
            <DescriptionText
              label="Quatation Number:"
              value={evaluation?.number}
            />
            <DescriptionText
              label="Vendors’ Name:"
              value={evaluation?.vendor}
            />
            {/* <DescriptionText
            label="Quatation Type (Framework/Lump sum):"
            value={evaluation?.contractType}
          />
          <DescriptionText
            label="Quatation Start Date:  "
            value={evaluation?.contractStartDate}
          /> */}
          </div>
          <div>
            <DescriptionText
              label="Quatation End Date:"
              value={evaluation?.contractEndDate}
            />
            <DescriptionText
              label="Initial contract Duration (Days):"
              value={evaluation?.initialContractDuration}
            />
            <DescriptionText
              label="Final Quatation Duration (Days):"
              value={evaluation?.finalContractDuration}
            />
            <DescriptionText label="Financial year" value="2023-2024" />
            {/* <DescriptionText
            label="Initial Quatation sum:"
            value={evaluation?.initialContractSum}
          />
          <DescriptionText
            label="Quatation Manager/Team Leader:"
            value={evaluation?.finalContractSum}
          /> */}
          </div>
        </div>
      </Section>
      <Section title="Evaluation Result">
        <GroupEvaluationLine />
        {/* <div className="grid grid-cols-2 gap-2">
          <div>
            <DescriptionText
              label="Capacity:"
              value={evaluation?.capacityScore}
            />
            <DescriptionText label="Competency:" value={evaluation?.number} />
            <DescriptionText
              label="Environmental Consideration: "
              value={evaluation?.environmentConsiderationScore}
            />
            <DescriptionText
              label="Financial Capability: "
              value={evaluation?.financialCapabilityScore}
            />
            <DescriptionText
              label="Cost Management:"
              value={evaluation?.costManagementScore}
            />
            <DescriptionText
              label="Output Quality"
              value={evaluation?.qualityScore}
            />
            <DescriptionText
              label="Quality Consistency "
              value={evaluation?.qualityConsistency}
            />
             <DescriptionText
              label="Overral Score"
              value={50}
            />
          </div>
          <div>
            <DescriptionText
              label="Capacity comment"
              value={evaluation?.capicityComment}
            />

            <DescriptionText
              label="Competency comment"
              value={evaluation?.competencyComment}
            />
             <DescriptionText
              label="Environment Consideration"
              value={evaluation?.environmentConsiderationComment}
            />
            <DescriptionText
              label="Financial capabiliy comment"
              value={evaluation?.financialCapabilityComment}
            />

          </div>
        </div> */}
      </Section>
    </>
  );
}
