import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, hasPermission } from '../utils/auth';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredPermission?: string;
  fallbackPath?: string;
}

const ProtectedRoute = ({ 
  children, 
  requiredPermission, 
  fallbackPath = '/login' 
}: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to={fallbackPath} replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h2>
          <p className="text-gray-600 mb-4">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
          <button
            onClick={() => window.history.back()}
            className="bg-[#00B0F0] text-white px-6 py-2 rounded-lg hover:bg-[#003399] transition-colors"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
