import React from 'react'
import styles from '../Privacy/style.module.css'
const Terms = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles['Content-Privacy-wrapper']}>
            <div className={styles["Pricay-header"]}>
                <h1>Terms & Conditions</h1>
            </div>
            <div className={styles['privacy-container']}>

                <div className={styles['privacycontnet']}>
                    <h1>Terms & Conditions 1</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        consectetur, metus vel efficitur consectetur, metus velit semper ex, at luctus
                        neque turpis ac velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit. Donec euismod,
                        sapien in consectetur consectetur, ipsum dolor facilisis velit, vel malesuada
                        velit nunc sed velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit.
                    </p>
                </div>
                <div className={styles['privacycontnet']}>
                    <h1>Terms & Conditions 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        consectetur, metus vel efficitur consectetur, metus velit semper ex, at luctus
                        neque turpis ac velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit. Donec euismod,
                        sapien in consectetur consectetur, ipsum dolor facilisis velit, vel malesuada
                        velit nunc sed velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit.
                    </p>
                </div>
                <div className={styles['privacycontnet']}>
                    <h1>Terms & Conditions 3</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        consectetur, metus vel efficitur consectetur, metus velit semper ex, at luctus
                        neque turpis ac velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit. Donec euismod,
                        sapien in consectetur consectetur, ipsum dolor facilisis velit, vel malesuada
                        velit nunc sed velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit.
                    </p>
                </div>
                <div className={styles['privacycontnet']}>
                    <h1>Terms & Conditions 4</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        consectetur, metus vel efficitur consectetur, metus velit semper ex, at luctus
                        neque turpis ac velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit. Donec euismod,
                        sapien in consectetur consectetur, ipsum dolor facilisis velit, vel malesuada
                        velit nunc sed velit. Sed euismod, sapien in consectetur consectetur, ipsum
                        dolor facilisis velit, vel malesuada velit nunc sed velit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Terms