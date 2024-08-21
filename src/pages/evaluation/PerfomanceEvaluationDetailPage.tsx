import PageDetail from "@/components/layout/page-detail";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { peformanceEvaluationsLines } from "./data";
import { EvaluationLines } from "./component/EvaluationLines";
import { SubTitle } from "./component/sub-title";
import { EvaluationDetail } from "./component/EvaluationDetail";
import { Button } from "@/components/ui/button";

export function PerfomanceEvaluationDetailPage2() {
  const { performanceEvaluationId } = useParams();
  const performanceEvaluation = peformanceEvaluationsLines.find(
    (item) => item.id === performanceEvaluationId
  );
  return (
    <PageDetail
      left={<></>}
      title="Perfomance Evaluation"
      subtitle={
        performanceEvaluation && <SubTitle evaluation={performanceEvaluation} />
      }
      actions={<Button>Print Evaluation Form</Button>}
    >
      <Card className="w-full">
        <CardContent>
          {performanceEvaluation && (
            <EvaluationDetail evaluation={performanceEvaluation} />
          )}
          {/* <Tabs defaultValue="evaluation_lines" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="evaluation_lines">
                Evaluation Lines
              </TabsTrigger>
            </TabsList>
            <TabsContent value="evaluation_lines">
              <EvaluationLines />
            </TabsContent>
          </Tabs> */}
        </CardContent>
      </Card>
    </PageDetail>
  );
}
