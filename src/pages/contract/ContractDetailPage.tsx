import PageDetail from "@/components/layout/page-detail";
import { Card, CardContent } from "@/components/ui/card";
import { ContractDetail } from "./components/ContractDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContractAmount } from "./form/ContractAmount";
import { ContractAttachments } from "./components/ContractAttachments";
import { TeamMembers } from "./components/TeamMembers";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { constractList } from "./form/data";
import { ContractHistory } from "./components/ContractHistory";
import { SubTitle } from "./sub-title";
import { Mail } from "lucide-react";
import { EvaluationSchedule } from "./ContractEvaluationSchedule";
import Page from "@/components/PageHeader";
import ContractApproveDialog from "./ContractApproveDialog";
import CloseContractDialog from "./CloseContractDialog";

export function ContractDetailPage() {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const contract = constractList.find((item) => item.id === contractId);
  return (
    <Page
      left={<Button variant="outline">Edit</Button>}
      title="Quatation"
      linkTo="/operations"
      center={
        <div className="flex items-center space-x-0">
          <Button
            onClick={() => navigate("/evaluations")}
            variant="outline"
            className="rounded-none first:rounded-l-lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            Evaluations (100)
          </Button>
          <Button
            onClick={() => navigate("/addendums")}
            variant="outline"
            className="rounded-none"
          >
            <Mail className="mr-2 h-4 w-4" />
            Addendums (10)
          </Button>
          <Button
            onClick={() => navigate("/addendums")}
            variant="outline"
            className="rounded-none last:rounded-r-lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            Team members (100)
          </Button>
        </div>
      }
      subtitle={<SubTitle contract={contract} />}
      actions={
        <>
          <Button>Submit</Button>
          {/* <Button variant="ghost">Review</Button> */}
          <ContractApproveDialog
            title="Approve Quatation"
            buttonTitle="approve"
          />
          <ContractApproveDialog
            title="Review Quatation"
            buttonTitle="review"
          />
          <CloseContractDialog
            title="Close Quatation"
            buttonTitle="Close contact"
          />
          {/* <Button variant="ghost">Close contract</Button> */}
          {/* <Button variant="ghost">Create Evaluation</Button> */}
          {/* <Button variant="ghost">Create Addendum</Button> */}
          <Button variant="ghost">Print Closure report</Button>
        </>
      }
    >
      <div className="grid lg:grid-cols-6  gap-4">
        <div className="lg:col-span-4">
          <Card className="w-full">
            <CardContent>
              {contract && <ContractDetail contract={contract} />}
              <Tabs defaultValue="contract_amount" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="contract_amount">
                    Quatation Amount
                  </TabsTrigger>
                  <TabsTrigger value="team_members">Team members</TabsTrigger>
                  <TabsTrigger value="attachments">Attachments</TabsTrigger>
                  <TabsTrigger value="config">Configuration</TabsTrigger>
                  {/* <TabsTrigger value="history">History</TabsTrigger> */}
                  {/* <TabsTrigger value="evaluation_schedule">
                    Evaluation Schedule
                  </TabsTrigger> */}
                </TabsList>
                <TabsContent value="contract_amount">
                  <ContractAmount />
                </TabsContent>
                <TabsContent value="attachments">
                  <ContractAttachments />
                </TabsContent>
                <TabsContent value="team_members">
                  <TeamMembers />
                </TabsContent>
                {/* <TabsContent value="history">
                  <ContractHistory />
                </TabsContent> */}
                <TabsContent value="evaluation_schedule">
                  <EvaluationSchedule />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="py-4">
            <CardContent>
              <ContractHistory />
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  );
}
