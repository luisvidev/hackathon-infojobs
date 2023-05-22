import { Offer } from 'types';
import * as styles from './styles';
import Link from 'next/link';

interface Props {
  offer: Offer;
}

export const OfferItem: React.FC<Props> = ({ offer }) => {
  const {
    title,
    province,
    published,
    teleworking,
    author,
    authorLogoUrl,
    authorUri,
    salaryDescription,
    workDay,
    contractType,
  } = offer;
  return (
    <div className={styles.offerItem}>
      <div className={styles.offerItemLogoContainer}>
        <img
          src={authorLogoUrl}
          alt="Picture of the author"
          className={styles.offerItemLogo}
        />
      </div>
      <div className={styles.offerItemData}>
        <div>
          <h2 className={styles.offerItemDataTitle}>{title}</h2>
          <Link
            target="_blank"
            href={authorUri}
            className={styles.offerItemDataAuthorLink}
            rel="noreferrer"
          >
            {author}
          </Link>
        </div>
        <ul className={styles.offerItemDataList}>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mxr-2">
            {province}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mx-2">
            {teleworking}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 ">
            {published.toString()}
          </li>
        </ul>
        <ul className={styles.offerItemDataList}>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mxr-2">
            {contractType}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mx-2">
            Jornada {workDay}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 ">
            {' '}
            Contrato {salaryDescription}
          </li>
        </ul>
      </div>
    </div>
  );
};
