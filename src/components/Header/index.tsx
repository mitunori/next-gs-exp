import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*  */}
      <h1 className={styles.header__title}>Next.jsで開発しよう！</h1>

      <ul className={styles.header__menu}>
        <li>
          <Link href={"/login"}>ログイン</Link>
        </li>
        <li>
          <Link href={"/signup"}>サインアップ</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
