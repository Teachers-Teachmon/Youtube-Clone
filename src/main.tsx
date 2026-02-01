import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalStyles from '@/styles/GlobalStyles'
import App from '@/App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5분간 fresh 상태 유지, 불필요한 API 호출 줄임
      refetchOnWindowFocus: false, //창 포커스 시 자동 리패칭 끄기
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> {/*App 전체를 감싸서 모든 컴포넌트에서 React Query 사용 가능하게 만듦*/}
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
