import { Offer } from 'types';
import * as styles from './styles';

interface Props {
  offer: Offer;
}

export const OfferItem: React.FC<Props> = ({ offer }) => {
  const { title, province, published, teleworking, author, authorLogoUrl } =
    offer;
  return (
    <div className={styles.offerItem}>
      <img
        src={authorLogoUrl}
        width={70}
        height={70}
        alt="Picture of the author"
      />
      <h3>{title}</h3>
      <span>{province}</span>
      <span>{published.toString()}</span>
      <span>{teleworking}</span>
      <span>{author}</span>
    </div>
  );
};
