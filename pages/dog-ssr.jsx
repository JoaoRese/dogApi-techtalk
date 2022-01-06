import styles from "../styles/dogPage.module.css";
import Link from "next/link";
import axios from "axios";

export async function getServerSideProps() {
  const dogPics = await axios.get("https://dog.ceo/api/breeds/image/random/50");

  const dogFacts = await axios.get(
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=50"
  );

  return {
    props: {
      dogs: dogPics.data.message,
      facts: dogFacts.data,
    },
  };
}

export default function Dog({ dogs, facts }) {
  const list = dogs.map((dog, index) => {
    return (
      <li key={index}>
        <img src={dog} alt="" />
        <p>{facts[index].fact}</p>
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
