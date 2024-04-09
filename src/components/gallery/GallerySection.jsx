import GalleryCard from './GalleryCard';
import BrastImg from '../../../public/banner/gallery/GalleryCardImg.png';

export default function GallerySection({sort}) {
  return (
    <>
      <div
        className={` mt-20 mb-20 ${
          sort == 'main'
            ? 'xl:mt-40 lg:px-28 flex flex-col gap-x-14 gap-y-28 2xl:px-44 md:grid md:grid-cols-2 xl:grid-cols-4'
            : 'mx-auto'
        }   `}>
        {sort == 'main'
          ? menus.map(menu => {
              return <GalleryCard key={menu.title} info={menu} />;
            })
          : [menus.find(item => item.title == sort.toUpperCase())].map(menu => {
              return <GalleryCard key={menu.title} info={menu} />;
            })}
      </div>
    </>
  );
}

export const menus = [
  {
    title: 'BREAST',
    sub: ['Asian Breast Augmentation', 'Breast Augmentation', 'Breast Lift'],
    img: BrastImg,
  },
  {
    title: 'BODY',
    sub: ['Liposuction', 'Tummy Tuck', 'Brazilian Butt Lift'],
    img: BrastImg,
  },
  {
    title: 'FACE',
    sub: ['Rhinoplasty', 'Chin Augmentation', 'Face Lift', 'Lower Blepharoplasty'],
    img: BrastImg,
  },
  {
    title: 'MEDSPA',
    sub: ['Filler', 'Laser Resurfacing', 'Thread Lift'],
    img: BrastImg,
  },
];