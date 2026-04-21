import {Link} from 'react-router-dom';

export function SidebarPagelinksButton({name = "NONE"}) {

    return (
        <li className='text-center text-3xl mt-4 mb-4 group/linkbtn hover:scale-112 duration-500 ease-in-out'>
            <Link to={name}>
              <button className='styles.sidebar_pagelinks_button text-center group-hover/linkbtn:text-clr-10-2'>
                      {name}
              </button>
            </Link>
        </li>
    );
}