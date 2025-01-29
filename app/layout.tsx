import React from "react"
import { Provider } from "@/components/molecules/Providers"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
            {children}
        </Provider>
      </body>
    </html >
  )
}