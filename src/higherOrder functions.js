import React from "react";

// Higher-Order Component
const withGreeting = (WrappedComponent) => {
  return (props) => {
    // Add the greeting prop dynamically
    const greeting = "Hello from the HOC!";
    return <WrappedComponent {...props} greeting={greeting} />;
  };
};

// Original Component
const UserInfo = ({ name, greeting }) => (
  <div>
    <p>{greeting}</p> {/* Greeting added dynamically by the HOC */}
    <p>User: {name}</p> {/* Name passed as a prop */}
  </div>
);

// Wrap the component with the HOC
const EnhancedUserInfo = withGreeting(UserInfo);

// App Component
const App = () => {
  // Pass props to the enhanced component
  return <EnhancedUserInfo name="John Doe" />;
};

export default App;
