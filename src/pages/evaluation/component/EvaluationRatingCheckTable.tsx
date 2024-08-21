import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormRadioGroup } from "./FormRadioGroup";
import { UseFormReturn } from "react-hook-form";
import { FormTextArea } from "@/components/form";

interface EvaluationFormProps {
  form: UseFormReturn<any>;
  options: any;
  totalScore: number;
}
export function EvaluationCheckTable({
  form,
  options,
  totalScore,
}: EvaluationFormProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Performance criteria</TableHead>
          <TableHead>Method</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            Capacity: Vendors capacity to deliver the contracted goods/service
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="capacity"
              label="Capacity: Vendors capacity to deliver the contracted goods/service"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Knowledge of the Assignments: Vendors knowledge on the TRA’s
            requirements"
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="knowledge_of_assigment"
              label="Knowledge of the Assignments: Vendors knowledge on the TRA’s requirements"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Competency: Vendors’ capability to complete the task in a given
            period of Time
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="competency"
              label="Competency: Vendors’ capability to complete the task in a given period of Time"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Cost Management: Vendors’ costs stability during contract period
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="cost_management"
              label="Cost Management: Vendors’ costs stability during contract period"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Output Quality: The quality of vendors’ output in compliance with
            contract
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="quality_output"
              label="Output Quality: The quality of vendors’ output in compliance with contract "
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Quality Consistency: Vendors’ quality consistency
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="quality_consistency"
              label="Quality Consistency: Vendors’ quality consistency"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Commitment to Quality: Vendors’ Quality Management.
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="commiment_to_quality"
              label="Commitment to Quality: Vendors’ Quality Management."
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Environmental Consideration: Maintenance of clean and healthy
            environment.
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="environmental_consideration"
              label="Environmental Consideration: Maintenance of clean and healthy environment."
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Communication: Vendor Cooperation with Quatation Management Team
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="communication_to_vendor"
              label="Communication: Vendor Cooperation with Quatation Management Team"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Financial Capability: Vendors’ capability to meet financial
            requirements during contract implementation
          </TableCell>
          <TableCell>
            <FormRadioGroup
              name="financial_capability"
              label="Financial Capability: Vendors’ capability to meet financial requirements during contract implementation"
              options={options}
              form={form}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span className="text-xl font-bold">Overrall score</span>
          </TableCell>
          <TableCell>
            <span className="text-xl font-bold">{totalScore}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
