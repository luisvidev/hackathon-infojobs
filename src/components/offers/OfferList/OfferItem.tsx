import { Offer } from 'types';
import * as styles from './styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatTimestamp } from '@utils/formatTimestamp';

interface Props {
  offer: Offer;
}

export const OfferItem: React.FC<Props> = ({ offer }) => {
  const router = useRouter();
  const {
    id,
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

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as any)?.closest('a')) return;
    router.push(`/offers/${id}`);
  };

  return (
    <div className={styles.offerItem} onClick={handleOnClick}>
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
            {formatTimestamp(published.toString(), 'short')}
          </li>
        </ul>
        <ul className={styles.offerItemDataList}>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mxr-2">
            Contrato {contractType}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 border-r after:mr-2 mx-2">
            Jornada {workDay}
          </li>
          <li className="md:whitespace-nowrap text-slate-500 ">
            {' '}
            {salaryDescription}
          </li>
        </ul>
      </div>
    </div>
  );
};
