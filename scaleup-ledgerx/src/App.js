import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded p-6">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="mt-4 text-center">
          <button 
            onClick={toggleForm} 
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Don’t have an account? Register' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
