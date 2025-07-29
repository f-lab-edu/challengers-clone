import { ErrorBoundary, ErrorBoundaryProps } from "react-error-boundary"

type ErrorBoundaryWithLoggingProps = ErrorBoundaryProps & React.PropsWithChildren;

export default function ErrorBoundaryWithLogging({ children, ...props }: ErrorBoundaryWithLoggingProps) {
  const handleError = (e: Error) => {
    console.error("error: ", e)
  }

  return (
    <ErrorBoundary
      {...props}
      onError={props.onError ? props.onError : handleError}
    >
      {children}
    </ErrorBoundary>
  )
}
