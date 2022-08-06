import PostFooter from "components/PostFooter";
import type { IActivityPost } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface ActivityPostProps extends IActivityPost {
  isLastPost: boolean;
}

const ActivityPost = ({
  author,
  date,
  post,
  content,
  reactions,
  comments,
  isLastPost,
}: ActivityPostProps): JSX.Element => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.heading}>
          <span className={styles.author}>{author} publicou isso</span>
          <span>{date}</span>
        </div>
        <div className={styles.post_container}>
          <Image
            src={`/assets/icons/${post}.svg`}
            alt="Imagem de postagem do usuário"
            width={64}
            height={64}
          />
          <p className={styles.content}>{content}</p>
        </div>
        <PostFooter reactions={reactions} comments={comments} />
      </div>
      {!isLastPost && <hr className={styles.bar} />}
    </>
  );
};

export default ActivityPost;