import { Toaster } from "sonner";
import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'
import { getUser } from "../api/DevTreeAPI";
import DevTree from "../components/DevTree";

export default function AppLayout() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(),
        retry: 1,
        refetchOnWindowFocus: false
    })
    if (isLoading) return <p>cargando..</p>
    if (isError) return <Navigate to={'/auth/login'} />

    if (data) return (
        <>
            <DevTree data={data}/>
            <Toaster position="top-right" />
        </>
    )
}