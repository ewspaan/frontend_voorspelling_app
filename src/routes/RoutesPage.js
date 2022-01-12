import React from "react";
import {Route, Routes} from "react-router-dom";
import HeaderTop from "../components/organisms/header/HeaderTop";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import ProfilePage from "../pages/ProfilePage";



function RoutesPage() {

    return(
        <>
                <HeaderTop/>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> } />
                    <Route path="/login" element={ <LoginPage/> }/>
                    <Route path="/signup" element={ <SignUp/> }/>
                    <Route path="/profiel" element={ <ProfilePage/> }/>
                    {/*<UserRoute exact path="/profiel">*/}
                    {/*    <ProfilePage/>*/}
                    {/*</UserRoute>*/}
                    {/*<AdminRoute exact path="/bedrijf">*/}
                    {/*</AdminRoute>*/}
                </Routes>
        </>
    )
}

export default RoutesPage
