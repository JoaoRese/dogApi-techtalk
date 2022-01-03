import Link from "next/link";
import styles from "../styles/main.module.css";

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <h1>Pagina principal</h1>
      <Link href={"/dog-csr"}>
        <a>Dog API CSR</a>
      </Link>
      <Link href={"/dog-ssr"}>
        <a>Dog API SSR</a>
      </Link>
    </div>
  );
}
