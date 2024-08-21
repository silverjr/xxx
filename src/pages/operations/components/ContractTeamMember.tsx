import { FormSelect } from "@/components/form";
import { TeamMembers } from "./TeamMembers";
import { contractManagers } from "../form/data";
import { UseFormReturn } from "react-hook-form";

interface ContractTeamMemberFormProps {
  form: UseFormReturn<any>;
}
export function ContractTeamMember({ form }: ContractTeamMemberFormProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <FormSelect
          form={form}
          name="manager"
          label="Quatation Manager"
          options={contractManagers}
        />
      </div>
      <div>
        <TeamMembers />
      </div>
    </div>
  );
}
