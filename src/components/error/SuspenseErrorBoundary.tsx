import React, { ErrorInfo, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

type SuspenseErrorBoundaryProps = {
  loading: React.ReactNode;
  // rejectedFallback: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>
  rejectedFallback: React.ReactNode
  children: React.ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
}

export default function SuspenseErrorBoundary({ loading, rejectedFallback, children, onError }: SuspenseErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={rejectedFallback} onError={onError}>
      <Suspense fallback={loading}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}
