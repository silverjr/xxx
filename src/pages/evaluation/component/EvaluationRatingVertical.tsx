import { FormTextArea } from "@/components/form";
import { Rating } from "@/components/rating";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UseFormReturn } from "react-hook-form";

interface EvaluationFormProps {
  form: UseFormReturn<any>;
}
export function EvaluationRatingVertical({ form }: EvaluationFormProps) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader></TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            Vendors capacity to deliver the contracted goods/service
          </TableCell>
          <TableCell>
            <Rating />
          </TableCell>
          <TableCell>
            <FormTextArea name="commnet" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow></TableRow>
        <TableRow>
          <TableHead>
            Knowledge of the Assignments: Vendors knowledge on the TRA’s
            requirements
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet1" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Vendors’ capability to complete the task in a given period of Time
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet2" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Cost Management: Vendors’ costs stability during contract period
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet3" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Output Quality: The quality of vendors’ output in compliance with
            contract
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet4" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Quality Consistency: Vendors’ quality consistency
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet5" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Commitment to Quality: Vendors’ Quality Management.
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet6" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Environmental Consideration: Maintenance of clean and healthy
            environment.
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet7" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Communication: Vendor Cooperation with Quatation Management Team
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet8" form={form} rows={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            Financial Capability: Vendors’ capability to meet financial
            requirements during contract implementation
          </TableHead>
          <TableHead>
            <Rating />
          </TableHead>
          <TableCell>
            <FormTextArea name="commnet9" form={form} rows={3} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
