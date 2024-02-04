'use server'
export const verifyAdmin = async (username: string, password: string) => {
  if (username !== process.env.NEXT_PUBLIC_APP_USERNAME) return false
  if (password !== process.env.NEXT_PUBLIC_APP_PASSWORD) return false
  return true
}
