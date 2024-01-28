import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const Post = () => {
  return (
    <div className={styles.post}>
      {/* アイコンの画像の設定が入る予定 */}
      <img src="" alt="" />

      <p>xx 名前が入る予定</p>
      <p>xx 日付が入る予定</p>

      <p>登録されたデータの文字が表示される予定</p>
      {/*  */}
    </div>
  );
};

export default Post;
