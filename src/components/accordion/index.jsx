import clsx from "clsx";
import styles from "./accordion.module.css";
export default function Accordion({
  data,
  wrapperStyle,
  detailsStyle,
  summaryStyle,
  descStyle,
}) {
  return (
    <div
      className={clsx(styles.wrapper, {
        [wrapperStyle]: !!wrapperStyle,
      })}
    >
      {data.map((x) => (
        <details
          key={x.id}
          className={clsx(styles.details, {
            [detailsStyle]: !!detailsStyle,
          })}
        >
          <summary
            className={clsx({
              [summaryStyle]: !!summaryStyle,
            })}
          >
            <p>{x.title}</p>
          </summary>
          <p
            className={clsx({
              [descStyle]: !!descStyle,
            })}
          >
            {x.desc}
          </p>
        </details>
      ))}
    </div>
  );
}
