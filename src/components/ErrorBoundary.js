import React from "react";

class CustomErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Error path
        return (
          <div>
            <h2>We are having Problems to Load your Preferred Addresses. Please Select...</h2>
            
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }
  }

  export default CustomErrorBoundary