import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          priority
          src="/assets/logo.png"
          alt="Specifix Logo"
          width={165}
          height={120}
        />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/mainpage">Home</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/mainpage#patients">Patients</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
