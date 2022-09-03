import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events {footerYear}</p>
      <p>
        <Link href="/about">About this Project</Link>
      </p>
    </footer>
  );
};

export default Footer;
