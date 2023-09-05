import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Mitsunori Code";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
                        />
                        <h1 className="{utilstyles..heading2xl}">Mitsunori Code</h1>
                    </>
                ) : (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utilStyles.borderCircle} `}
                        />
                        <h1 className="{utilstyles..heading2xl}">Mitsunori Code</h1>
                    </>
                )}

                {/* <h1>{children}</h1> */}
            </header>
            {/* <main>{children}</main> */}          
        </div>
    );
}

export default Layout;