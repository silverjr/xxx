import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import CreateContractPage from "./pages/contract/CreateContractPage";
import { ContractDetailPage } from "./pages/contract/ContractDetailPage";
import { ContractListPage } from "./pages/contract/ContractList";
import { PerfomanceEvaluationLineListPage } from "./pages/evaluation/PerfomanceEvaluationLine";
import { PerfomanceEvaluationListPage } from "./pages/evaluation/PerfomanceEvaluation";
import { PerfomanceEvaluationDetailPage } from "./pages/evaluation/PerfomanceEvaluationDetail";
import { CreatePerfomanceEvaluation } from "./pages/evaluation/CreatePerfomanceEvaluation";
import { PerfomanceEvaluationDetailPage2 } from "./pages/evaluation/PerfomanceEvaluationDetailPage";
import EditContractPage from "./pages/contract/EditContractPage";
import { AddendumListPage } from "./pages/addendum/AddendumList";
import { AddendumDetailPage } from "./pages/addendum/AddendumDetailPage";
import CreateAddendumPage from "./pages/addendum/CreateAddendumPage";
import { ConstractDashboard } from "./pages/dashboard";
import { AttachmentPreviewPage } from "./pages/attachments/AttachmentPreviewPage";
import { EvaluationPeriod } from "./pages/evaluation/EvaluationPeriodList";
import { EvaluationRemainderList } from "./pages/evaluation/EvaluationRemainderList";
import { ThemeProvider } from "./theme-provider";
import { CreateGroupEvaluation } from "./pages/evaluation/CreateGroupEvaluation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="operations/create" element={<CreateContractPage />} />
        <Route path="operations" element={<ContractListPage />}>
          {/* <Route path="contract-amount" element={<AddContractDialog />}/> */}
        </Route>
        <Route path="operations/:contractId" element={<ContractDetailPage />} />
        <Route
          path="operations/:contractId/edit"
          element={<EditContractPage />}
        />
        <Route
          path="evaluations-lines"
          element={<PerfomanceEvaluationLineListPage />}
        />
        <Route
          path="evaluations-group"
          element={<PerfomanceEvaluationListPage />}
        />
        <Route
          path="evaluations-group/create"
          element={<CreateGroupEvaluation />}
        />
        <Route path="evaluations" element={<PerfomanceEvaluationListPage />} />
        <Route
          path="evaluations-lines/create"
          element={<CreatePerfomanceEvaluation />}
        />

        <Route
          path="evaluations-lines/:performanceEvaluationId"
          element={<PerfomanceEvaluationDetailPage2 />}
        />
        <Route
          path="evaluations/:performanceEvaluationId"
          element={<PerfomanceEvaluationDetailPage />}
        />

        <Route path="addendums" element={<AddendumListPage />} />
        <Route path="/addendum/create" element={<CreateAddendumPage />} />
        <Route path="addendums/:addendumId" element={<AddendumDetailPage />} />
        <Route path="dashboards" element={<ConstractDashboard />} />
        <Route path="attachments/preview" element={<AttachmentPreviewPage />} />

        <Route path="/evaluations-period" element={<EvaluationPeriod />} />
        <Route
          path="/evaluations-remainder"
          element={<EvaluationRemainderList />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
