import Link from 'next/link';
import Script from 'next/script';
import SEO from '../components/seo';
import Image from 'next/image';
import heroImage from '../../public/img/hero/hero-img.png';
import searchImage from '../../public/img/search/search-img.png';
import smartContract from '../../public/img/plan/smart contract.svg';
import Navbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Decentralized Scientific Publishing'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <Navbar />
      {/* <!-- ========================= hero-section start ========================= --> */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Decentralized Scientific Publishing Platform
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Promoting Open Access peer-reviewed publishing and leaving the
                  copyright ownership of publications to authors and reviewers.
                </p>
                <div className="hero-btns wow fadeInUp">
                  <div className="row g-3">
                    <div className="col-auto">
                      <Link href="#signup-for-product" passHref>
                        <a
                          className="btn btn-primary btn-lg"
                          data-wow-delay=".6s"
                        >
                          Publish With Us
                        </a>
                      </Link>
                    </div>
                    <div className="col-auto">
                      <Link href="https://app.scin.io" passHref>
                        <a
                          className="btn btn-outline-primary btn-lg"
                          data-wow-delay=".6s"
                        >
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <Image
                  src={heroImage}
                  layout="responsive"
                  width={751}
                  height={501}
                  alt="Publishing Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          {/* <!-- <img src="img/hero/hero-shape-1.svg" alt="" className="shape shape-1"> --> */}
        </div>
      </section>
      {/* <!-- ========================= hero-section end ========================= --> */}
      {/* <!-- ========================= tracking-section start ========================= --> */}
      <section id="tracking" className="tracking-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-7">
              <div className="tracking-image">
                <Image
                  src={smartContract}
                  alt="Smart Contract Image"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="tracking-content">
                <div className="section-title mb-50">
                  <h1 className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                    Why SCIN?
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    We are on a mission to revolutionize the scientific
                    publishing and empower the authors and researchers to keep
                    the ownership of their work. Authors will have the choice to
                    publish their work as Open Access with lower fees or retain
                    the ownership of their work.
                  </p>
                  <br />
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    This is achieved through our decentralized publishing
                    platform which publishes your scientific work as a smart
                    contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= tracking-section end ========================= --> */}

      {/* <!-- ========================= search-section start ========================= --> */}
      <section className="search-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 order-last order-lg-first">
              <div className="search-content">
                <div className="section-title mb-40">
                  <h1 className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                    What SCIN Brings To The Scientific Community?
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    SCIN empowers authors/researchers to own their publishing
                    and decide if they want to publish it as open access or earn
                    lifetime royalties on their work. Through our decentralized
                    nature, we are able to provide authors with a platform to
                    publish their work as a smart contract.
                  </p>
                  <br />
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    We are revolutionizing the peer-review publishing by
                    incentivizing reviewers to review the publications with more
                    accountability and responsibility. This is achieved by our
                    unique fair system of distribution of royalties.
                  </p>
                </div>
                <div className="app-info">
                  <div className="single-info">
                    <div className="icon-style color-1">
                      <h6>Open Access</h6>
                    </div>
                    <p className="icon-descr">
                      Promoting Open Access publishing by reducing the
                      publishing costs
                    </p>
                  </div>
                  <div className="single-info">
                    <div className="icon-style color-2">
                      <h6>Copyright Ownership</h6>
                    </div>
                    <p className="icon-descr">
                      Authors will retain the copyright ownership of their work.
                    </p>
                  </div>
                </div>
                <div className="app-info">
                  <div className="single-info">
                    <div className="icon-style color-3">
                      <h6>Royalty Earning</h6>
                    </div>
                    <p className="icon-descr">
                      Collaborators of the publication could choose to earn
                      royalty for their work.
                    </p>
                  </div>
                  <div className="single-info">
                    <div className="icon-style color-1">
                      <h6>Expedited Reviewing</h6>
                    </div>
                    <p className="icon-descr">
                      Incentivized peer-review process to ensure timely and high
                      quality reviews of the manuscript.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-6">
              <div className="search-img text-lg-right">
                <Image
                  src={searchImage}
                  width={828}
                  height={579}
                  layout="responsive"
                  alt="People doing research and completing a publication"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= search-section end ========================= --> */}

      {/* <!-- ========================= testimonial-section start ========================= --> */}
      <section id="signup-for-product" className="testimonial-section">
        <div className="container text-center">
          <h1>Are you intesred in publishing your paper with us?</h1>
          <br />
          <p>Please sign up and we will get back to you soon.</p>
          <div className="row justify-content-center my-4">
            <div className="col-auto">
              <form
                id="subscription-form"
                action="https://formspree.io/f/mknyrgbe"
                method="POST"
              >
                <div className="input-group mb-3">
                  <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    id="subscribe-btn"
                  >
                    Sign Up
                  </button>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>
                <p id="my-form-status"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= testimonial-section end ========================= --> */}

      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
}
