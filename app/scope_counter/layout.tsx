import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scope Page',
  description: 'Scope Counter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-4xl font-extrabold">🔱 counter layout:
      {children}
    </div>
  )
}
