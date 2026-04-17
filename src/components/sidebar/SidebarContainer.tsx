import styles from "./sidebar-style.module.css"

export function SidebarContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.sidebar_container}>
            {children}
        </div>
    )
}