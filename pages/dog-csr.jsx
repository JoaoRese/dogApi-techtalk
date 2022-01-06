import { useDogApi } from "./api/useDogApi";
import styles from "../styles/dogPage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dog() {
  const [dogs, setDogs] = useState([]);
  const [facts, setFacts] = useState([]);
  const dogApi = useDogApi();

  useEffect(() => {
    async function getDogs() {
      const response = await dogApi.getRandomDog(50);
      const dogFacts = await axios.get(
        "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=50"
      );
      setDogs(response.message);
      setFacts(dogFacts.data);
    }

    getDogs();
  }, []);

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
