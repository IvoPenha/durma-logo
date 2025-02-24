import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_PIC_FILE_SIZE } from "@/env"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod" 
import { consultorFormSchema } from "./profile.form.schema"
  
 export type ConsultorFormValues = z.infer<typeof consultorFormSchema>
export type TabProps = {
    form: UseFormReturn<z.infer<typeof consultorFormSchema>>
}
