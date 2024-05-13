import GalleryCard from './GalleryCard';
import BodyImg from '../../../public/banner/gallery/card-main/Body.jpg';
import BrastImg from '../../../public/banner/gallery/card-main/Breast.jpg';
import FaceImg from '../../../public/banner/gallery/card-main/Face.jpg';
import MedspaImg from '../../../public/banner/gallery/card-main/Medspa.jpg';

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
    img: BodyImg,
  },
  {
    title: 'FACE',
    sub: ['Rhinoplasty', 'Chin Augmentation', 'Face Lift', 'Lower Blepharoplasty'],
    img: FaceImg,
  },
  {
    title: 'MEDSPA',
    sub: ['Filler', 'Laser Resurfacing', 'Thread Lift', 'Lip Injection'],
    img: MedspaImg,
  },
];
