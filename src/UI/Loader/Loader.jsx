import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
    return (
        <div>
            <div>
                <div className={cl.L}>L</div>
                <div className={cl.outter}>
                    <div className={cl.mid}>

                    </div>
                </div>
                <div className={cl.ADING}>ADING</div>
            </div>
        </div>
    );
};

export default Loader;