'use server'
export const verifyAdmin = async (username: string, password: string) => {
  if (username !== process.env.APP_USERNAME) return false
  if (password !== process.env.APP_PASSWORD) return false
  return true
}
