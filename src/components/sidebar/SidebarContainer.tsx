import styles from "./sidebar-style.module.css"

export function SidebarContainer({ children }: { children: React.ReactNode }) {
    return (
        /*shadow-[-10px_0_20px_10px_rgba(0,0,0,1.0)]*/
        <div className='min-w-3xs max-w-3xs flex flex-col bg-clr-30-1 ring-3 ring-clr-10-1 self-start sticky top-0 h-dvh ' >
            {children}
        </div>
    )
}