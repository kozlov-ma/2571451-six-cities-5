import { ReviewForm } from '@/components/offer/review-form';
import { Reviews } from '@/components/offer/reviews';
import { comments as mockComments } from '@/mocks/comments';
import { places as mockPlaces } from '@/mocks/places';
import { offer as mockOffer } from '@/mocks/offer';
import Map from '@/components/map/map';
import { Nearby } from '@/components/offer/nearby';

export default function Offer(): JSX.Element {
  const offer = mockOffer;
  const descriptions = offer.description.split('\n');
  const reviews = mockComments;
  const nearby = mockPlaces;

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='/'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offer.images.map((image) => (
                <div className='offer__image-wrapper' key={image}>
                  <img
                    className='offer__image'
                    src={image}
                    alt='Photo studio'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offer.isPremium && (
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{offer.title}</h1>
                <button className='offer__bookmark-button button' type='button'>
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>
                  {offer.rating}
                </span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  {offer.type}
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              {offer.goods.length > 0 && (
                <div className='offer__inside'>
                  <h2 className='offer__inside-title'>What&apos;s inside</h2>
                  <ul className='offer__inside-list'>
                    {offer.goods.map((good) => (
                      <li className='offer__inside-item' key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='offer__avatar user__avatar'
                      src={offer.host.avatarUrl}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='offer__user-name'>{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className='offer__user-status'>Pro</span>
                  )}
                </div>
                {descriptions.length > 0 && (
                  <div className='offer_descriptions'>
                    {descriptions.map((description) => (
                      <p key={description} className='offer__text'>
                        {description}
                      </p>
                    ))}
                  </div>
                )}
                <section className='offer__reviews reviews'>
                  <h2 className='reviews__title'>
                    Reviews &middot;{' '}
                    <span className='reviews__amount'>{reviews.length}</span>
                  </h2>
                  <Reviews comments={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
          </div>
          <section className='offer__map map'>
            <Map
              location={offer.location}
              places={nearby}
              selectedPlace={offer}
            />
          </section>
        </section>
        <Nearby places={nearby} />
      </main>
    </div>
  );
}
