import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>{" "}
    </ErrorBoundary>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <QueryClientProvider client={testQueryClient}>
            {rerenderUi}
          </QueryClientProvider>
        </ErrorBoundary>
      ),
  };
}
