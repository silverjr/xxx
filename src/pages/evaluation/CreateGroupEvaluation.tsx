import Page from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema, contractOptions } from "./CreatePerfomanceEvaluation";
import { Section } from "@/components/section";
import { FormSelect, FormText } from "@/components/form";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GroupEvaluationParticipants } from "./GroupEvaluationParticipants";
import { GroupEvaluationLine } from "./GroupEvaluationLine";

export function CreateGroupEvaluation() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const contactId = form.watch("contractId");
  const currentContract = useMemo(
    () => contractOptions.find((item) => item.value === contactId),
    [contactId]
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
  return (
    <Page title="Create Group Evaluation">
      <Card>
        <CardContent>
          <Form {...form}>
            <form
              ref={formRef}
              //   onSubmit={form.handleSubmit(onSubmit)}
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
            </form>
            <Tabs defaultValue="general" className="w-full py-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="participants">Participants</TabsTrigger>
                <TabsTrigger value="evaluation_lines">
                  Evaluation Lines
                </TabsTrigger>
              </TabsList>
              <TabsContent value="participants">
                <GroupEvaluationParticipants />
              </TabsContent>
              <TabsContent value="evaluation_lines">
                <GroupEvaluationLine />
              </TabsContent>
            </Tabs>
          </Form>
        </CardContent>
      </Card>
    </Page>
  );
}
