import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomAuth0Provider from './auth/CustomAuth0Provider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

//learn
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <CustomAuth0Provider>
        <AppRoutes />
        <Toaster visibleToasts={1} position='top-right' richColors />
        </CustomAuth0Provider>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
