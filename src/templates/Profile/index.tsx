import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const Profile = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}></div>
      <div className={styles.section_container}>
        <div className={styles.about}>
          <div className={styles.avatar}>
            <Image
              src="/assets/icons/user-avatar.svg"
              alt="Imagem de perfil do usuário"
              width={160}
              height={160}
            />
          </div>
          <div className={styles.user_main}>
            <h1 className={styles.title}>Nome Sobrenome</h1>
            <span>Desenvolvedora | HTML | CSS | Typescript | Node</span>
          </div>
          <span className={styles.keywords}>
            Fala sobre #javascript, #frontend, #reactjs, e #backend
          </span>
          <div>
            <span className={styles.local}>Cidade, estado e país</span>
            <Link href="/contact">
              <a className={styles.contact}>informações de contato</a>
            </Link>
          </div>
          <div>
            <span className={styles.followers}>??? seguidores</span>
            <span className={styles.connections}>??? conexões</span>
          </div>
          <div className={styles.button_container}>
            <button type="button" className={styles.primary}>
              Mensagem
            </button>
            <button type="button" className={styles.secondary}>
              Mais
            </button>
          </div>
        </div>
        <div className={styles.experience}>
          <div className={styles.experience_container}>
            <Image
              src="/assets/icons/company.svg"
              alt=""
              width={32}
              height={32}
            />
            <span>Empresa</span>
          </div>
          <div className={styles.experience_container}>
            <Image
              src="/assets/icons/educational-institution.svg"
              alt=""
              width={32}
              height={32}
            />
            <span>Instituição de ensino</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
