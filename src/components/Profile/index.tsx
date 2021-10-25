import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./style.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/guilhermeviinii.png"
        alt="Guilherme Vinicius"
      />
      <div>
        <strong>Guilherme Vinicius</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          {level}
        </p>
      </div>
    </div>
  );
}
