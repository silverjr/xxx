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
import { Rating } from "@/components/rating";
import { RatingOne } from "@/components/ui/rating1";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EvaluationRatingVertical } from "./component/EvaluationRatingVertical";
import { EvaluationRatingCheck } from "./component/EvaluationRatingCheck";
import { EvaluationCheckTable } from "./component/EvaluationRatingCheckTable";

export const FormSchema = z.object({
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
export const options = [
  { value: "5", label: "Excellent" },
  { value: "4", label: "Very good" },
  { value: "3", label: "Good" },
  { value: "2", label: "Fair" },
  { value: "1", label: "Poor" },
  { value: "0", label: "Worse" },
];
export const contractOptions = [
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
      <Card>
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
              {/* <EvaluationRatingCheck
                form={form}
                totalScore={totalScore}
                options={options}
              /> */}
              <EvaluationCheckTable
                form={form}
                options={options}
                totalScore={totalScore}
              />
              {/* <EvaluationRatingVertical form={form} /> */}
              <FormTextArea
                name="description"
                placeholder="Additional comments"
                form={form}
                rows={8}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <Outlet />
    </PageDetail>
  );
}
