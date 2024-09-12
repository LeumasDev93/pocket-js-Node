import z from "zod";

const envSchema = z.object({
  DATABSE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
