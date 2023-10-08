import React from "react";
import styles from "./styles.module.css";

function New() {
  return (
    <form>
      <input
        name="todo"
        className="bg-transparent border border-slate-300 rounded-sm w-full"
        type="text"
      />
      <div className="float-right">
        <input className={styles.formButton} type="reset" />
        <input className={styles.formButton} type="reset" />
      </div>
    </form>
  );
}

export default New;
