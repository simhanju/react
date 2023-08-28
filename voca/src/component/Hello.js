import World from "./World";
import styles from "./Hello.module.css";

const Hello = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className={styles.box}>Hello box</div>
    </>
    
  );
};

export default Hello;