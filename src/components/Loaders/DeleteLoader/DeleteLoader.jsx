import { RotatingLines } from 'react-loader-spinner'
import css from "./DeleteLoader.module.css";

export const DeleteLoader = () => {
    return (
        // <div className={css.loaderContainer}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="40"
                visible={true}
            />
        // </div>
    );
};