import css from "./NoContactsYet.module.css";

import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';


export const NoContactsYet = () => {
    return (
        <div className={css.container}>
              <AutoStoriesSharpIcon
              sx={{color: "#1876D1"}}
              />
              <p className={css.paragraph}>
                You have no contacts... yet !
              </p>
        </div>
    );
};