import { PrivateRoutes, PublicRoutes } from './route';
import PrivateRoute from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
        <div>
            <Routes>
                {PublicRoutes.map((evt, key) => (
                    <Route key={key} path={evt.path} element={evt.element} />
                ))}
                {PrivateRoutes.map((evt, key) => (  
                    <Route
                        key={key}
                        path={evt.path}
                        element={
                            <>
                                <PrivateRoute>{evt.element}</PrivateRoute>
                            </>
                        }
                    />
                ))}
                <Route path="*" element={<>Hello 404 page</>} />
            </Routes>
        </div>
    );
}

export default AppRoutes;
