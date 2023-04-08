import React from "react";
import styles from "@/styles/Header.module.scss";
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Shelf",
      route: "/shelf",
    },
    {
      title: "Libraries",
      route: "/libraries",
    },
    {
      title: "Requests",
      route: "/requests",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.placeholder}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              style={{
                width: "24px",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.title}>Shared Shelves</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          {links.map((link) => (
            <div className={styles.link} key={link.title}>
              <a href={link.route}>{link.title}</a>
            </div>
          ))}
        </div>
        <div className={styles.avatar}>
          <div className={styles.placeholder}>
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={40}
              height={40}
              style={{
                width: "24px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
