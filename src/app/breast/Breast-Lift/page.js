import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/breast/BreastAugmentationImg.jpg';
import WHAT_IS_IMG from '@img/detailpage/breast/BreastImg1.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const img_count = 10;
const img_name = 'breast-lift';
const images_data = [...Array(img_count)].map((_, i) => `/banner/gallery/${img_name}/${i + 1}.jpg`);

const benefits = [
  {
    title: 'Youthful Contours',
    desc: 'Achieve a rejuvenated and more youthful breast contour by lifting and reshaping sagging breasts.',
  },
  {
    title: 'Improved Breast Symmetry',
    desc: 'Address asymmetry and achieve a more balanced and symmetrical appearance.',
  },
  {
    title: 'Enhanced Self-Confidence',
    desc: 'Experience a boost in self-esteem and confidence as you regain a firmer and more aesthetically pleasing breast profile.',
  },
  {
    title: 'Clothing Fit',
    desc: 'Enjoy a broader range of clothing options and styles with breasts that are lifted and more proportionate.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'While the natural aging process continues, the results of a breast lift are long-lasting, providing enduring improvements to the shape and position of your breasts.',
  },
];

const whyChoose_desc =
  "At Cara Plastic Surgery & Laser Center Las Vegas, we are committed to delivering personalized and compassionate care throughout your breast lift journey. Our surgeons prioritize your comfort, safety, and satisfaction, utilizing state-of-the-art techniques to ensure optimal and natural-looking results./If you're considering a breast lift or have questions about the procedure, we invite you to contact us for a consultation. Discover the possibilities and regain your confidence with a rejuvenated breast profile at Cara Plastic Surgery & Laser Center Las Vegas.";
const whatIs =
  'Mastopexy, or a breast lift, is a cosmetic surgical intervention designed to counteract the effects of aging, pregnancy, weight fluctuations, and gravity on the breasts. This procedure involves the removal of excess skin, reshaping of breast tissue, and repositioning of the nipple to restore a more youthful and lifted appearance. Our skilled surgeons at Cara Plastic Surgery & Laser Center utilize advanced techniques to create results that are not only aesthetically pleasing but also tailored to your unique anatomy.';
const whoNeeds =
  'Individuals experiencing sagging or drooping breasts due to aging, pregnancy, breastfeeding, or weight loss may find a breast lift beneficial. If your breasts have lost their youthful shape and firmness, a breast lift could be the solution to restore and rejuvenate your silhouette. Our experienced surgeons will assess your unique concerns and goals to determine the most appropriate approach for your specific needs.';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={TOP_BANNER_IMG}
        title="Breast Lift"
        contents="The Breast Lift page at Cara Plastic Surgery& Laser Center Las Vegas offers a specialized approach to rejuvenating and enhancing the natural beauty of your breasts through the transformative procedure known as mastopexy."
      />
      <Section1 desc={whatIs} title={'What is Breast Lift?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'Who Needs Breast Lift?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Breast Lift'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
