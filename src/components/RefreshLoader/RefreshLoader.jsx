import { RotatingLines } from 'react-loader-spinner'
import css from "./RefreshLoader.module.css";

export const RefreshLoader = () => {
    return (
        <div className={css.loaderContainer}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="100"
                visible={true}
            />
        </div>
    );
};