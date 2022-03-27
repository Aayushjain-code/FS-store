import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const RequireAuth = () => {
	const { authState: { userId } } = useAuth();
	const location = useLocation();
	return userId ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
