import PageDetail from "@/components/layout/page-detail";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRef } from "react";
import { contractFormSchema } from "./schema";
import { ContractForm } from "./form/ContractForm";
import { Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralInformationForm } from "./form/GeneralInformationForm";
export default function CreateContractPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof contractFormSchema>>({
    resolver: zodResolver(contractFormSchema),
  });
  return (
    <PageDetail
      left={
        <>
          <Button variant="outline">Save</Button>
        </>
      }
      title="Quatation"
      actions={[
        <>
          <Button variant="outline" key="creates">
            Submit
          </Button>
          <Button variant="outline" key="review">
            Review
          </Button>
          ,
          <Button variant="outline" key="approve">
            Approve
          </Button>
        </>,
      ]}
    >
      <Card className="w-full">
        <CardContent>
          <Form {...form}>
            <form ref={formRef} className="space-y-4 my-4">
              <ContractForm form={form} />
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="general">General Information</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <GeneralInformationForm form={form} />
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Outlet />
    </PageDetail>
  );
}
