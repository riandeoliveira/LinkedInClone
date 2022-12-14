import PostFooter from "components/PostFooter";
import type { IPost } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ActivityProps extends IPost {
  author: string;
  date: string;
  post: string;
  content: string;
  isLastPost: boolean;
}

const Activity = ({
  author,
  date,
  post,
  content,
  reactions,
  comments,
  isLastPost,
}: ActivityProps): JSX.Element => {
  return (
    <>
      <Link href="/">
        <a className={styles.post}>
          <div className={styles.heading}>
            <span className={styles.author_container}>
              <span className={styles.author}>{author}</span> publicou isso
            </span>
            <span>{date}</span>
          </div>
          <div className={styles.post_container}>
            <Image
              src={`/assets/icons/${post}.svg`}
              alt="Imagem de postagem do usuário"
              width={64}
              height={64}
              objectFit="cover"
            />
            <p className={styles.content}>{content}</p>
          </div>
          <PostFooter reactions={reactions} comments={comments} />
        </a>
      </Link>
      {!isLastPost && <hr className={styles.bar} />}
    </>
  );
};

export default Activity;
