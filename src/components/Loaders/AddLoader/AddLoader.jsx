import { RotatingLines } from 'react-loader-spinner'
import css from "./AddLoader.module.css";

export const AddLoader = () => {
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