"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";


export default function NavLink({
    href,
    children,
}: Readonly<{
    href: string;
    children: React.ReactNode;
}>) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${styles.active} ${styles.link}` : styles.link}>
            {children}
        </Link>
    );
}