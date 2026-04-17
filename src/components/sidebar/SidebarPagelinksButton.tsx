import styles from './sidebar-style.module.css'

import {Link} from 'react-router-dom';

export function SidebarPagelinksButton({name = "NONE", isHighlighted = false}) {
    return (
        <Link to={name}>
          <button className={styles.sidebar_pagelinks_button}>
              <p className={isHighlighted ? styles.sidebar_pagelinks_button_text : styles.sidebar_pagelinks_button_text_wHover}>
                  {name}
              </p>
          </button>
        </Link>
    );
}