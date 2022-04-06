import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo/logo.svg';

interface SocialMediumInformation {
  name: string;
  url: string;
  isActive: boolean;
  iconClassName: string;
}

const SOCIAL_MEDIA: SocialMediumInformation[] = [
  {
    name: 'twitter',
    url: 'https://twitter.com/scinhq',
    isActive: true,
    iconClassName: 'lni lni-twitter-filled',
  },
  {
    name: 'facebook',
    url: '',
    isActive: false,
    iconClassName: 'lni lni-facebook-filled',
  },
  {
    name: 'instagram',
    url: '',
    isActive: false,
    iconClassName: 'lni lni-instagram-filled',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/company/scinhq',
    isActive: true,
    iconClassName: 'lni lni-linkedin-original',
  },
];

export default function FooterView() {
  const socialButtons = (socialMediumInfo: SocialMediumInformation) => {
    return (
      <div className="btn-group me-2" role="group">
        <button type="button" className="btn btn-secondary">
          <Link href={socialMediumInfo.url} passHref>
            <a target="_blank">
              <em className={socialMediumInfo.iconClassName}></em>
            </a>
          </Link>
        </button>
      </div>
    );
  };

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <Image src={Logo} alt="" width="40" height="55" />
          <small className="d-block mb-3 text-muted">&copy; 2021</small>
          <div>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              {SOCIAL_MEDIA.map((socialMed) => {
                return socialMed.isActive ? socialButtons(socialMed) : <></>;
              })}
            </div>
          </div>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Cool stuff
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Random feature
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Team feature
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Stuff for developers
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Another one
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Resource
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Resource name
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Another resource
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Team
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Locations
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Privacy
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}