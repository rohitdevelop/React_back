import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-cyan-700 to-blue-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to the Home Page 🎉</h1>
    </div>
  );
};

export default Home;
