import { OfferItem } from './OfferItem';
import * as styles from './styles';
import { useOfferStore } from '@store/offer-store/useOfferStore';
import { OFFER_SECTION } from '../../../constants';
import {
  getCurrentPage,
  getIsLoading,
  getOffers,
  getSearch,
  getTotalOffers,
  getTotalPages,
  setIsLoading,
  setOffersRequest,
} from '@store/offer-store/selectors';
import { Spinner } from '@components/ui/spinner/Spinner';
import ReactPaginate from 'react-paginate';
import { getOffersRequest } from '@services/website/getOffers';
import useMedia from '@components/ui/hooks/useMedia';

export const OfferList = () => {
  const smallScreen = useMedia('smallScreen');
  const totalOffers = useOfferStore(getTotalOffers);
  const isLoading = useOfferStore(getIsLoading);
  const offers = useOfferStore(getOffers);
  const searchBy = useOfferStore(getSearch);
  const totalPages = useOfferStore(getTotalPages);
  const currentPage = useOfferStore(getCurrentPage);
  const setIsRequestLoading = useOfferStore(setIsLoading);
  const setOfferData = useOfferStore(setOffersRequest);

  if (offers === null && !isLoading) return null;

  const handlePageClick = async (props: { selected: number }) => {
    const selectedPage = props.selected + 1;

    setIsRequestLoading(true);
    const data = await getOffersRequest({
      keyWord: searchBy,
      page: selectedPage,
    });
    document
      .getElementById(OFFER_SECTION)
      ?.scrollIntoView({ behavior: 'smooth' });

    setOfferData({
      page: data.currentPage,
      totalResults: data.totalResults,
      offers: data.offers.map((item) => ({ ...item })),
      totalPages: data.totalPages,
    });
    setIsRequestLoading(false);
  };

  return (
    <div id={OFFER_SECTION} className={styles.offersContainer}>
      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <Spinner color="primary" size="lg" />
        </div>
      ) : (
        <>
          {offers?.length === 0 ? (
            <div className={styles.spinnerContainer}>
              <p className={styles.title}>No se han encontrado ofertas</p>
            </div>
          ) : (
            <>
              <p className={styles.title}>
                ¡{totalOffers} ofertas encontradas!
              </p>
              <hr />
              <ul className={styles.offerList}>
                {(offers ?? []).map((offer) => (
                  <li key={offer.id}>
                    <OfferItem offer={offer} />
                  </li>
                ))}
              </ul>
              <div />
              <ReactPaginate
                containerClassName={styles.paginationContainer}
                breakLabel="..."
                nextLabel="SIGUIENTE  >"
                nextClassName={styles.paginationItem}
                onPageChange={async (e) => await handlePageClick(e)}
                pageClassName={styles.paginationItem}
                // pageRangeDisplayed={ITEMS_PER_PAGE * currentPage}
                pageCount={totalPages}
                previousLabel="<  ANTERIOR"
                previousClassName={styles.paginationItem}
                renderOnZeroPageCount={null}
                activeClassName="text-white !bg-primary"
                disableInitialCallback
                forcePage={currentPage - 1}
                marginPagesDisplayed={smallScreen ? 0 : 3}
                pageRangeDisplayed={1}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
