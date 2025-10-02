import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image?: string
      role: 'USER' | 'ADMIN'
    }
  }

  interface User {
    role: 'USER' | 'ADMIN'
  }
}
