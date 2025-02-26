export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
export const MAX_PROFILE_PIC_FILE_SIZE = 5000000 // 5MB

export const env = {
  SUPABASE_URL: process.env.SUPABASE_URL as string,
  SUPABASE_KEY: process.env.SUPABASE_KEY as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
}
