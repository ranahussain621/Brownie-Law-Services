import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let login = localStorage.getItem('user');
    if (!login) {
      navigate('/auth/login');
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  return (
    <div>
      {isLoading ? (
        // Render a loading state here, such as a spinner or a loading message
        <div className="text-center mt-5">
        <div className="spinner-border mt-5" role="status">
          <span className="sr-only mt-5">Loading...</span>
        </div>
      </div>
      ) : (
        <Component />
      )}
    </div>
  );
};

export default Protected;
