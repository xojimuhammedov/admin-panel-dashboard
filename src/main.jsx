import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/useAuthContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>
)
