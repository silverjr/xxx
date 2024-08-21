import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ErrorFallback } from "@/components/error-fallback";
import PageDetail from "@/components/layout/page-detail";
import SAMPLE_PDF from "../../assets/evaluationtemplate.pdf"

export function AttachmentPreviewPage() {
  const navigate = useNavigate();

  return (
    <PageDetail
      left={
        <Button variant="outline" onClick={() => navigate(-1)}>
          Back
        </Button>
      }
      title="Sample attachment preview"
      subtitle="Sample attachment preview"
    >
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-6">
          <iframe
            width="100%"
            height="1000px"
            src={SAMPLE_PDF}
          />
        </div>
      </div>
    </PageDetail>
  );
}

export function ErrorBoundary() {
  return <ErrorFallback />;
}
