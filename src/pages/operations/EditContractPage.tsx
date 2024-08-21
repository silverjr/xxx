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
import { ContractAmount } from "./form/ContractAmount";
import { ContractAttachments } from "./components/ContractAttachments";
import { TeamMembers } from "./components/TeamMembers";
import { GeneralInformationForm } from "./form/GeneralInformationForm";
import { ContractTeamMember } from "./components/ContractTeamMember";
export default function EditContractPage() {
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
          <Button key="create">Submit</Button>
          <Button variant="outline" key="review">
            Review
          </Button>
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
                  <TabsTrigger value="contract_amount">
                    Quatation Amount
                  </TabsTrigger>
                  <TabsTrigger value="team_members">Team members</TabsTrigger>
                  <TabsTrigger value="attachments">Attachments</TabsTrigger>
                  {/* <TabsTrigger value="config">Configuration</TabsTrigger> */}
                </TabsList>
                <TabsContent value="general">
                  <GeneralInformationForm form={form} />
                </TabsContent>
                <TabsContent value="contract_amount">
                  <ContractAmount />
                </TabsContent>
                <TabsContent value="attachments">
                  <ContractAttachments />
                </TabsContent>
                <TabsContent value="team_members">
                  <ContractTeamMember form={form} />
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
