import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/basic/basicnav'>BASIC</Link> </li>
        <li className={styles.li}> <Link href='/board/boardnav'>게시판</Link> </li>        
        <li className={styles.li}> <Link href='/game/game-list'>경기</Link> </li>        
        <li className={styles.li}> <Link href='/game/teamnav'>TeamList</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>스케쥴</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-in'>SignIn</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-up'>SignUp</Link> </li>
        <li className={styles.li}> <Link href='/user/user-list'>User List</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>board List</Link> </li>

      </ul>
    </nav>
  );
};