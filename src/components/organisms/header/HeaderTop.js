import React from "react";
import styles from "../header/Header.module.css";
import {useNavigate} from 'react-router-dom';
import { Button } from "../../atoms/buttons/Button";
import { useAuthState } from "../../../context/authContext/AuthContext";
import { Heading } from "../../atoms/heading/Heading";
import HeaderProfile from "./HeaderProfile";

function HeaderTop(){


    const { isAuthenticated ,logout} = useAuthState();
    const navigate = useNavigate();

    return(
        <>
        <header className={styles.headerTop}>
            <Heading children="PersoneelsApp" level={1}/>
            <div className={styles.divTop}>
                <Button
                    type="button"
                    onClick={() => navigate('/')}
                >
                   Home
                </Button>
                {isAuthenticated ? (
                    <Button
                        type="button"
                        onClick={() => {
                            logout()
                            navigate('/')
                        }}
                    >
                        Log uit
                    </Button>
                ) : (
                    <>
                        <Button
                            type="button"
                            onClick={() => navigate('/login')}
                        >
                            Log in
                        </Button>
                        <Button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </Button>
                    </>
                )}
            </div>
        </header>
            {isAuthenticated === true && <HeaderProfile/>}
            </>
    );

}

export default HeaderTop;
