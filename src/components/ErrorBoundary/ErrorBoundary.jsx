import React from 'react'
import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    // TODO: Send error to error reporting service in production
    // Example: logErrorToService(error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__container">
            <div className="error-boundary__content">
              <h1 className="error-boundary__title">Something went wrong</h1>
              <p className="error-boundary__message">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="error-boundary__details">
                  <h2>Error Details:</h2>
                  <pre className="error-boundary__stack">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              )}

              <div className="error-boundary__actions">
                <button
                  onClick={this.handleReload}
                  className="error-boundary__button error-boundary__button--primary"
                >
                  Reload Page
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="error-boundary__button error-boundary__button--secondary"
                >
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
