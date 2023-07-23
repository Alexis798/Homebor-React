import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth"
import { HomePage } from "../Home/pages"
import { useAuthStore } from "../hooks"
import { ManagerPage } from "../manager/pages"
import { StudentInfoPage } from "../manager/pages/StudentInfoPage"
import { HomeInfoPage } from "../manager/pages/HomeInfoPage"
import { DirectorySchoolPage } from "../manager/pages/DirectorySchoolPage"
import { useEffect } from "react"
import { StudentDirectoryPage } from "../manager/pages/StudentsDirectoryPage"



export const AppRouter = () => {

    const { status, user, checkAuthToken } = useAuthStore()

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    useEffect(() => {
        checkAuthToken()
    }, [])

    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
       <Routes>
            {
                ( status === 'not-authenticated' ) 
                    ? (
                        <>
                            <Route path="/login" element={ <LoginPage /> } />
                            <Route path="/register" element={ <RegisterPage /> } />
                            <Route path="/" element={ <HomePage /> } />
                            <Route path="/about_us" element={ <HomePage /> } />
                            <Route path="/services" element={ <HomePage /> } />
                            <Route path="/contact_us" element={ <HomePage /> } />

                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
                    :
                    ( user.userType == 'Manager') ?
                            (
                                <>
                                    
                                                <Route path="/manager" element={ <ManagerPage /> } />
                                                <Route path="/studentinfo/:id" element={ <StudentInfoPage /> } />
                                                <Route path="/homeinfo" element={ <HomeInfoPage /> } />
                                                <Route path="/directory_school" element={ <DirectorySchoolPage /> } />
                                                <Route path="/students_directory" element={ <StudentDirectoryPage /> } />
                                                <Route path="/*" element={ <Navigate to="/students_directory" /> } />
                                            
                                  
                                </>
                            )
                        :
                            ( user.userType == 'Student') ?
                                (
                                    <>
                                        <Route path="/studentinfo" element={ <StudentInfoPage /> } />
                                        <Route path="/*" element={ <Navigate to="/studentinfo" /> } />
                                    </>
                                )
                            :
                                (
                                    <>
                                        <Route path="/homeinfo" element={ <HomeInfoPage /> } />
                                        <Route path="/*" element={ <Navigate to="/homeinfo" /> } />
                                    </>
                                )
            }
       </Routes>
    )
}
