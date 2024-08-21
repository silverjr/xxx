import PageDetail from "@/components/layout/page-detail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { z } from "zod";
import { perfomanceEvaluationFormSchema } from "./schema";
import { Form } from "@/components/ui/form";
import { FormRadioGroup } from "./component/FormRadioGroup";
import { Section } from "@/components/section";
import { FormSelect, FormText, FormTextArea } from "@/components/form";
import { suppliers } from "../contract/form/data";
import { EvaluationRatingVertical } from "./component/EvaluationRatingVertical";

const FormSchema = z.object({
  contractId: z.string(),
  supplier: z.string(),
  contractTotalAmt: z.string(),
  contractNumber: z.string(),
  capacity: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must rate contract capacity",
  }),
  capacityComment: z.string(),
  knowledge_of_assigment: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select knowledge of assingment",
  }),
  knowledge_of_assigment_comment: z.string(),
  competency: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select competency",
  }),
  competency_comment: z.string(),
  cost_management: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select cost management",
  }),
  cost_management_comment: z.string(),
  quality_output: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality output",
  }),
  quality_output_comment: z.string(),
  quality_consistency: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality consistency",
  }),
  quality_consistency_comment: z.string(),
  commiment_to_quality: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality consistency",
  }),
  commiment_to_quality_comment: z.string(),
  environmental_consideration: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality consistency",
  }),
  communication_to_vendor: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality consistency",
  }),
  communication_to_vendor_comment: z.string(),
  financial_capability: z.enum(["5", "4", "3", "2", "1", "0"], {
    required_error: "You must select quality consistency",
  }),
  financial_capability_comment: z.string(),
});
const options = [
  { value: "5", label: "Excellent" },
  { value: "4", label: "Very good" },
  { value: "3", label: "Good" },
  { value: "2", label: "Fair" },
  { value: "1", label: "Poor" },
  { value: "0", label: "Worse" },
];
const contractOptions = [
  {
    value: "1",
    label: "Supply of Kyocera Printer",
    contractNumber: "AE/023/2022-2023/0001",
    contractTotalAmt: "TZS 50,000,000",
    supplier: "Softnet technologies",
  },
];
export function CreatePerfomanceEvaluation() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const watchFields = form.watch([
    "capacity",
    "commiment_to_quality",
    "communication_to_vendor",
    "competency",
    "cost_management",
    "environmental_consideration",
    "financial_capability",
    "knowledge_of_assigment",
    "quality_consistency",
    "quality_output",
  ]);
  const contactId = form.watch("contractId");
  const currentContract = useMemo(
    () => contractOptions.find((item) => item.value === contactId),
    [contactId]
  );
  const totalScore = useMemo(
    () =>
      watchFields
        .filter((item) => item != undefined)
        .reduce((acc, curr) => acc + Number(curr), 0),
    [watchFields]
  );
  useEffect(() => {
    if (contactId) {
      const contract = contractOptions.find((item) => item.value === contactId);
      if (contract) {
        form.setValue("supplier", contract.supplier);
        form.setValue("contractNumber", contract.contractNumber);
        form.setValue("contractTotalAmt", contract.contractTotalAmt);
      }
    }
  }, [contactId]);
  const onSubmit = (values: z.infer<typeof FormSchema>) => {};
  return (
    <PageDetail
      left={
        <>
          <Button
            onClick={form.handleSubmit(onSubmit, (err) => console.log(err))}
            variant="outline"
          >
            Save
          </Button>
        </>
      }
      title="Perfomance Evaluation Form"
      actions={
        <>
          <Button>Submit</Button>
          <Button variant="ghost">Review</Button>
          <Button variant="ghost">Approve</Button>
        </>
      }
    >
      <Card className="w-2/3">
        <CardContent>
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <Section title="Quatation">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <FormSelect
                      name="contractId"
                      label="Quatation"
                      form={form}
                      options={contractOptions}
                    />
                    {currentContract && (
                      <FormText
                        name="contractNumber"
                        label="Quatation number"
                        form={form}
                        disabled
                      />
                    )}
                  </div>
                  <div>
                    {currentContract && (
                      <>
                        <FormText
                          name="supplier"
                          label="Supplier"
                          form={form}
                          disabled
                        />
                        <FormText
                          name="contractTotalAmt"
                          label="Total amount"
                          form={form}
                          disabled
                        />
                      </>
                    )}
                  </div>
                </div>
              </Section>
              <FormSelect
                name="evaluationId"
                label="Evaluation period"
                form={form}
                options={[
                  {
                    value: "1",
                    label: "Quarter 1",
                  },
                  {
                    value: "2",
                    label: "Quarter 2",
                  },
                  {
                    value: "3",
                    label: "Quarter 3",
                  },
                  {
                    value: "4",
                    label: "Quarter 4",
                  },
                ]}
              />
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
            </form>
          </Form>
        </CardContent>
      </Card>
      <Outlet />
    </PageDetail>
  );
}
