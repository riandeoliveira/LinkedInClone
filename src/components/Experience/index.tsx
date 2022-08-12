import JobPosition from "components/JobPosition";
import type { IJobPosition } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface ExperienceProps {
  company: string;
  image: string;
  period: string;
  positions: IJobPosition[];
}

const Experience = ({
  image,
  company,
  period,
  positions,
}: ExperienceProps): JSX.Element => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Image
          src={`/assets/icons/${image}.svg`}
          alt="Imagem da empresa onde o usuário trabalhou"
          width={48}
          height={48}
        />
        <div className={styles.container}>
          <span className={styles.company}>{company}</span>
          <span className={styles.period}>{period}</span>
        </div>
      </div>
      <div className={styles.job_positions}>
        {positions.map(({ job, type, workplace, duration }, i) => (
          <JobPosition
            job={job}
            type={type}
            workplace={workplace}
            duration={duration}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
