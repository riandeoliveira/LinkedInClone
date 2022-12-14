import Activity from "components/Activity";
import activities from "./content.json";
import styles from "./styles.module.scss";

const Activities = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Atividades</h2>
          <span className={styles.followers}>??? seguidores</span>
        </div>
        <div className={styles.activities}>
          {activities.map(
            ({ author, content, post, date, reactions, comments }, i, list) => {
              const lastPost: number = list.length - 1;
              const isLastPost: boolean = lastPost === i;

              return (
                <Activity
                  author={author}
                  content={content}
                  post={post}
                  date={date}
                  reactions={reactions}
                  comments={comments}
                  isLastPost={isLastPost}
                  key={i}
                />
              );
            }
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>Exibir todas as atividades</button>
      </div>
    </section>
  );
};

export default Activities;
