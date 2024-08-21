import PageDetail from "@/components/layout/page-detail";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useMemo, useRef } from "react";
// import { contractFormSchema } from "./schema";
// import { ContractForm } from "./form/ContractForm";
import { Outlet } from "react-router-dom";
import { addendumFormSchema } from "./schema";
import { FormCheckBoxGroup } from "./components/FormCheckBoxGroup";
import {
  FormDatePicker,
  FormSelect,
  FormText,
  FormTextArea,
} from "@/components/form";
import { constractList } from "../contract/form/data";
import { Section } from "@/components/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddendumAttachments } from "./AddendumAttachments";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { GeneralInformationForm } from "./form/GeneralInformationForm";
const contractOptions = [
  {
    value: "1",
    label: "Supply of Kyocera Printer",
    contractNumber: "AE/023/2022-2023/0001",
    contractTotalAmt: "TZS 50,000,000",
    supplier: "Softnet technologies",
    startDate: new Date(),
    endDate: new Date(),
  },
];
export default function CreateAddendumPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof addendumFormSchema>>({
    resolver: zodResolver(addendumFormSchema),
    defaultValues: {
      items: [],
    },
  });
  const contactId = form.watch("contractId");
  const fields = form.watch("items");
  const currentContract = useMemo(
    () => contractOptions.find((item) => item.value === contactId),
    [contactId]
  );
  const onSubmit = (values: any) => {
    console.log("Submitted");
    console.log(values);
  };
  const onSubmitError = (values: any) => {
    console.log("Error");
    console.log(values);
  };
  useEffect(() => {
    if (contactId) {
      const contract = contractOptions.find((item) => item.value === contactId);
      if (contract) {
        form.setValue("supplier", contract.supplier);
        form.setValue("contractNumber", contract.contractNumber);
        form.setValue("contractTotalAmt", contract.contractTotalAmt);
        form.setValue("currentDescription", contract.label);
        form.setValue("currentStartDate", new Date());
        form.setValue("currentEndDate", new Date());
        form.setValue("financialYear", "2023-2024");
      }
    }
  }, [contactId]);
  return (
    <PageDetail
      left={
        <>
          <Button
            onClick={form.handleSubmit(onSubmit, onSubmitError)}
            variant="outline"
          >
            Save
          </Button>
        </>
      }
      title="Create Addendum"
      actions={
        <>
          <Button>Submit</Button>
          <Button variant="ghost">Review</Button>
          <Button variant="ghost">Approve</Button>
        </>
      }
    >
      <div>
        <Card className="">
          <CardContent>
            <Form {...form}>
              <form ref={formRef} className="space-y-4 my-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <FormSelect
                      name="contractId"
                      label="Quatation"
                      form={form}
                      options={contractOptions}
                    />
                    {currentContract && (
                      <>
                        <FormText
                          name="contractNumber"
                          label="Quatation number"
                          form={form}
                          disabled
                        />
                        <FormText
                          name="financialYear"
                          label="Financial year"
                          form={form}
                          disabled
                        />
                      </>
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
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="general">Amend Quatation</TabsTrigger>
                    <TabsTrigger value="attachments">Attachments</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general">
                    <Section title="Section 2">
                      <FormCheckBoxGroup
                        form={form}
                        name="items"
                        label="Select field"
                        options={[
                          {
                            value: "description",
                            label: "Description",
                          },
                          {
                            value: "startDate",
                            label: "Start date",
                          },
                          {
                            value: "endDate",
                            label: "End date",
                          },
                          {
                            value: "other",
                            label: "Other",
                          },
                        ]}
                      />
                      {fields.includes("description") && (
                        <Section title="Description">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormText
                                name="currentDescription"
                                label="Current value"
                                form={form}
                                disabled
                              />
                            </div>
                            <div>
                              <FormText
                                name="description"
                                label="New value"
                                form={form}
                              />
                            </div>
                          </div>
                        </Section>
                      )}
                      {fields.includes("startDate") && (
                        <Section title="Start Date">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormDatePicker
                                name="currentStartDate"
                                label="Current Value"
                                form={form}
                                disabled
                              />
                            </div>
                            <div>
                              <FormDatePicker
                                name="startDate"
                                label="New value"
                                form={form}
                              />
                            </div>
                          </div>
                        </Section>
                      )}
                      {fields.includes("endDate") && (
                        <Section title="End date">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormDatePicker
                                name="currentEndDate"
                                label="Current value"
                                form={form}
                                disabled
                              />
                            </div>
                            <div>
                              <FormDatePicker
                                name="endDate"
                                label="New value"
                                form={form}
                              />
                            </div>
                          </div>
                        </Section>
                      )}
                      {fields.includes("other") && (
                        <Section title="Description">
                          <div>
                            <FormTextArea
                              name="describe"
                              label="Description"
                              form={form}
                              rows={2}
                            />
                          </div>
                        </Section>
                      )}
                    </Section>
                  </TabsContent>
                  <TabsContent value="attachments">
                    <AddendumAttachments />
                  </TabsContent>
                </Tabs>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Outlet />
    </PageDetail>
  );
}
