
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export function SidebarContainer({ children, isMobileSidebar }: { children: React.ReactNode, isMobileSidebar:boolean }) {

   /* const sidebarPopoutBtn = useRef<HTMLDivElement>(0);
    const sidebarOuterdiv = useRef<HTMLDivElement>(0);*/
    const [sidebarState, setSidebarState] = useState<boolean>(false);

    const location = useLocation();
    useEffect(() => {
        setSidebarState(false);
    }, [location])

    function ClickSidebarPopout()
    {
        setSidebarState(!sidebarState);
        console.log("Clicked sidebar popout! NewState is: " + !sidebarState);
    }

    /*if (sidebarPopoutBtn !== undefined && sidebarPopoutBtn.current !== undefined)
    {
        /!*sidebarPopoutBtn.current.addEventListener("visibilitychange", (event) =>
        {
            event.preventDefault();

            if (sidebarPopoutBtn !== undefined && sidebarPopoutBtn.current !== undefined)
            {
                console.log("SIDEBAR POPOUT IS: " + sidebarPopoutBtn.current.checkVisibility() ? "VISIBLE" : "HIDDEN");
            }
            else
            {
                console.log("sidebarPopoutBtn is undefined!");
            }
        })*!/
    }*/

    return (
        /*shadow-[-10px_0_20px_10px_rgba(0,0,0,1.0)]*/
        <div /*ref={sidebarOuterdiv}*/
             style={sidebarState && isMobileSidebar ? {marginLeft:0, position:"fixed"} : {position: isMobileSidebar ? "fixed" : "sticky"}}
             className='transition-all ml-[-259px] xl:ml-0 sticky min-w-3xs max-w-3xs bg-clr-30-1 ring-3 ring-clr-10-1 self-start h-dvh top-0' >
            <div /*ref={sidebarPopoutBtn}*/ onClick={ClickSidebarPopout}
                 className='block xl:hidden reg-30-div absolute w-[96px] h-[96px] top-0 right-0 mr-[-96px] mt-[-3px] ring-0 border-b-3 border-r-3 border-clr-10-1'>


            </div>
            <div className='flex flex-col'>
                {children}
            </div>
        </div>
    /*<div /!*style={sidebarState && isMobileSidebar ? {marginLeft:0, position:"absolute"} : {position: isMobileSidebar ? "absolute" : "static"}}*!/
        className=''>
    </div>*/
)
}

