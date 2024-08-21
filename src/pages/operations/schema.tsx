import { z } from "zod"
export const contractFormSchema = z.object({
    number: z.string(),
    description: z.string(),
    amount: z.string(),
    custodian: z.string(),
    expireDate: z.date(),
    startDate: z.date().nullable(),
    completeAt: z.date(),
    contractStatusId: z.string().optional(),
    contractTypeId: z.string().optional(),
    paymentStatusId: z.string().optional(),
    serviceProviderId: z.string().optional(),
    currencyId: z.string().optional(),
  })
  export const contractDetailSchema = z.object({
    id: z.string(),
    number: z.string(),
    type: z.string(),
    category: z.string(),
    description: z.string(),
    taxRegion: z.string(),
    vendor: z.string(),
    contractDuration: z.string(),
    contractStartDate: z.string(),
    expireIn: z.string(),
    hasExpired: z.boolean().optional(),
    signStartDate: z.string(),
    signEndDate: z.string(),
    contractEndDate: z.string(),
    guaranteeStartDate: z.string(),
    guaranteeEndDate: z.string(),
    currency: z.string(),
    amount: z.number(),
    contractManager: z.string(),
    statusCode: z.string(),
    statusName: z.string(),
    taxRegionName: z.string()
  })
  export type TContractDetail = z.infer<typeof contractDetailSchema>