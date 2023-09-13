import React from 'react';
import Chefs from './Chefs1';

const CtaItem = ({ iconSrc, title, description, buttonText }) => (
  <div className="Inset__StyledInset-sc-1phi2ey-0 usgfm sc-c4ef60d6-3 fspiST">
    <div className="sc-c4ef60d6-2 cYfCbx">
      <img src={iconSrc} alt={title} />
    </div>
    <div className="sc-c4ef60d6-6 jhnQxj">
      <div className="StackChildren__StyledStackChildren-sc-5x3aej-0 gJoNDG">
        <h2 display="block" className="styles__TextElement-sc-3qedjx-0 ducrgg sc-c4ef60d6-0 ibDTmW">
          {title}
        </h2>
        <h3 display="block" className="styles__TextElement-sc-3qedjx-0 QAtIP sc-c4ef60d6-1 kuazpv">
          {description}
        </h3>
      </div>
      <button className="sc-c4ef60d6-7 dNJxLJ">
        <span display="block" color="TextAction" className="styles__TextElement-sc-3qedjx-0 kVzTiw">
          {buttonText}
        </span>
        <div className="sc-c4ef60d6-8 bwenkR"></div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="styles__StyledInlineSvg-sc-12l8vvi-0 djCUZq"
        >
          <path
            d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289C7.90237 3.68342 7.90237 4.31658 8.29289 4.70711L10.5858 7L3 7C2.44772 7 2 7.44771 2 8C2 8.55228 2.44772 9 3 9L10.5858 9L8.29289 11.2929Z"
            fill="#EB1700"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

const Chefs1 = () => {
  return (
    <div className="sc-b96e9362-10 iOAEjv">
      <div className="Inset__StyledInset-sc-1phi2ey-0 cwcxyG sc-fc735bb4-0 kVGKhi">
        <div data-testid="secondary-cta-sections-container" className="sc-fc735bb4-1 kLUBVW">
          <CtaItem
            iconSrc="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
            title="Become a Delivery"
            description="As a delivery driver, you'll make reliable money—working anytime, anywhere."
            buttonText="Start earning"
          />
          <CtaItem
            iconSrc="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"
            title="Become a Partner/Chef"
            description="Grow your business and reach new customers by partnering with us."
            buttonText="Sign up your store"
          />
          <CtaItem
            iconSrc="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
            title="Get the best DoorDash experience"
            description="Experience the best your neighborhood has to offer, all in one site."
            buttonText="Sign up to start ordering"
          />
        </div>
      </div>
    </div>
  );
};

export default Chefs1;