import { FormTextArea } from "@/components/form";
import { Section } from "@/components/section";
import { FormRadioGroup } from "./FormRadioGroup";
import { UseFormReturn } from "react-hook-form";

interface EvaluationFormProps {
  form: UseFormReturn<any>;
  options: any;
  totalScore: number;
}
export function EvaluationRatingCheck({
  form,
  options,
  totalScore,
}: EvaluationFormProps) {
  return (
    <Section title="Evaluation">
      <div>Overral Score: {totalScore}</div>
      <FormRadioGroup
        name="capacity"
        label="Capacity: Vendors capacity to deliver the contracted goods/service"
        options={options}
        form={form}
      />
      <FormTextArea
        name="capacityComment"
        // label="Additional Comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="knowledge_of_assigment"
        label="Knowledge of the Assignments: Vendors knowledge on the TRA’s requirements"
        options={options}
        form={form}
      />
      <FormTextArea
        name="knowledge_of_assigment_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="competency"
        label="Competency: Vendors’ capability to complete the task in a given period of Time"
        options={options}
        form={form}
      />
      <FormTextArea
        name="competency_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="cost_management"
        label="Cost Management: Vendors’ costs stability during contract period"
        options={options}
        form={form}
      />
      <FormTextArea
        name="cost_management_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="quality_output"
        label="Output Quality: The quality of vendors’ output in compliance with contract "
        options={options}
        form={form}
      />
      <FormTextArea
        name="quality_output_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="quality_consistency"
        label="Quality Consistency: Vendors’ quality consistency"
        options={options}
        form={form}
      />
      <FormTextArea
        name="quality_consistency_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="commiment_to_quality"
        label="Commitment to Quality: Vendors’ Quality Management."
        options={options}
        form={form}
      />
      <FormTextArea
        name="commiment_to_quality_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="environmental_consideration"
        label="Environmental Consideration: Maintenance of clean and healthy environment."
        options={options}
        form={form}
      />
      <FormTextArea
        name="environmental_consideration_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="communication_to_vendor"
        label="Communication: Vendor Cooperation with Quatation Management Team"
        options={options}
        form={form}
      />
      <FormTextArea
        name="communication_to_vendor_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
      <FormRadioGroup
        name="financial_capability"
        label="Financial Capability: Vendors’ capability to meet financial requirements during contract implementation"
        options={options}
        form={form}
      />
      <FormTextArea
        name="financial_capability_comment"
        form={form}
        placeholder="Additional Comment"
        rows={4}
      />
    </Section>
  );
}
