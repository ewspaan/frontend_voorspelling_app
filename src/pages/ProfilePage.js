import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Page.module.css";
import ProfileUser from "../components/organisms/profile/ProfileUser";
import { Button } from "../components/atoms/buttons/Button";

function ProfilePage(){

    const  navigate  = useNavigate();


    return(
        <div className={styles.page}>
            <ProfileUser/>
            <Button
                onClick={() => navigate("/profiel/verander/profiel")}
            >Edit profiel</Button>
            <Button
                onClick={() => navigate("/profiel/verander/wachtwoord")}
            >Verander wachtwoord</Button>
        </div>
    );
}


export default ProfilePage;
