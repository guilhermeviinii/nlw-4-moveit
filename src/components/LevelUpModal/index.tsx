import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.css";

export function LevelUpModal() {
  const { level, closeModalLevelUp } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parábens</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={closeModalLevelUp} type="button">
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
