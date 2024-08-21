import PageDetail from "@/components/layout/page-detail";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { AddendumDetail } from "./AddendumDetail";
import { adddendumsList } from "./data";
import { SubTitle } from "./sub-title";
import { AddendumAttachments } from "./AddendumAttachments";

export function AddendumDetailPage() {
  const { addendumId } = useParams();
  const addendum = adddendumsList.find((item) => item.id === addendumId);
  return (
    <PageDetail
      left={<Button variant="outline">Edit</Button>}
      title="Addendum"
      linkTo="/addendum"
      subtitle={<SubTitle addendum={addendum} />}
      actions={
        <>
          <Button>Submit</Button>
          <Button variant="ghost">Review</Button>
          <Button variant="ghost">Approve</Button>
        </>
      }
    >
      <Card className="w-full">
        <CardContent>
          {addendum && <AddendumDetail addendum={addendum} />}
          <Tabs defaultValue="attachments" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
            </TabsList>
            <TabsContent value="attachments">
              <AddendumAttachments />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </PageDetail>
  );
}
