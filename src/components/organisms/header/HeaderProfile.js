import React from "react";
import styles from "./Header.module.css"
import  { useNavigate }  from "react-router-dom"
import { Button } from "../../atoms/buttons/Button";

function HeaderProfile() {

    const navigate = useNavigate();

    return(
           <header className={styles.headerProfile}>
               <Button
                   type="button"
                   onClick={() => navigate('/profiel')}
               >
                   Profiel
               </Button>
           </header>
   );
}

export default HeaderProfile;

