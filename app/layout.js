import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My Firs Page</title>
      </head>
      <body>
        <h1>My Layout</h1>
        {children}
      </body>
    </html>
  )
}
