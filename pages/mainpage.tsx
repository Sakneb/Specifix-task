import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Header from "@/components/header/index";

const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <Header />

      <div className={styles.main__container}>
        <h1>List Of Patients</h1>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Mainpage;
