import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/basic/grade'>성적표</Link> </li>
        <li className={styles.li}> <Link href='/basic/login'>Login</Link> </li>

      </ul>
    </nav>
  );
};