import { useDogApi } from "./api/useDogApi";
import styles from "../styles/dogPage.module.css";
import Link from "next/link";

export async function getServerSideProps() {
  const response = await useDogApi().getRandomDog(50);

  return {
    props: {
      dogs: response.message,
    },
  };
}

export default function Dog({ dogs }) {
  const list = dogs.map((dog, index) => {
    return (
      <li key={index}>
        <img src={dog} alt="" />
      </li>
    );
  });

  return (
    <div>
      <Link href={"/"}>
        <a className={styles.link}>Voltar a pagina inicial</a>
      </Link>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
}
