'use client'
import { useEffect, useRef, useState } from 'react'
import AddBlog from '@/components/Blog/AddBlog'
import { verifyAdmin } from '@/server/auth/verifyAdmin'
import { useRouter } from 'next/navigation'

const Page: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false)
  const loginTicket = useRef(1)

  const router = useRouter()

  useEffect(() => {
    const checkCookie = () => {
      const isLoggedIn = document.cookie.includes('adminLoggedIn=true')

      if (!(loginTicket.current > 0)) return

      if (isLoggedIn) {
        setIsVerified(true)
      } else {
        const authentication = async () => {
          const username = prompt('Masukkan nama pengguna:') || ''
          const password = prompt('Masukkan kata sandi:') || ''

          if (await verifyAdmin(username, password)) {
            setIsVerified(true)
            const expirationDate = new Date(
              Date.now() + 7 * 24 * 60 * 60 * 1000,
            ).toUTCString()
            document.cookie = `adminLoggedIn=true; expires=${expirationDate}; path=/`
          } else {
            router.push('/')
          }
        }
        authentication()
      }

      loginTicket.current = 0
    }

    checkCookie()
  }, [router])

  return (
    <main className="container mx-auto h-full">
      {isVerified && <AddBlog />}
    </main>
  )
}

export default Page
