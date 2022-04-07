import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function boardNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='board-form'>BoardForm</Link> </li>      
    
      </ul>
    
  );
};