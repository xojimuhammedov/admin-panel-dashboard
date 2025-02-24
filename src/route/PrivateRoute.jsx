import { Navigate } from 'react-router-dom';
import storage from '../services/storage';

const PrivateRoute = ({ children, path }) => {
  const token = storage.get('userToken');
  console.log(path)

//   const protectRole = () => {
//     if (token) {
//       return children;
//     } else {
//       return <Navigate to={'/login'} replace />;
//     }
//   };

  if (!token) {
    return <Navigate to={'/login'} replace />;
  }

  return children
};

export default PrivateRoute;
