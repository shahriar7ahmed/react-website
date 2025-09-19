import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white">
      <h1 className="text-3xl md:text-5xl font-bold">
        {userid ? `User: ${userid}` : "No User ID provided"}
      </h1>
    </div>
  );
}

export default User;
