export type LabPhoto = {
  id: string;
  label: string;
  alt: string;
  src?: string;
};

export type LabDemo = {
  id: string;
  title: string;
  media?:
    | { kind: 'video'; src: string; poster?: string }
    | { kind: 'embed'; src: string };
};

// Keep these slot IDs when replacing placeholders with the supplied media.
const labPhoto = (filename: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/milestone-4/${filename}`;

export const labPhotos: LabPhoto[] = [
  {
    id: 'm4-01',
    label: 'Photo 01',
    alt: 'A student using a handheld controller to drive robots on the lab road map',
    src: labPhoto('Image_20261113174628_125_41.jpg'),
  },
  {
    id: 'm4-02',
    label: 'Photo 02',
    alt: 'Students coordinating robotic vehicles on the indoor road network',
    src: labPhoto('Image_20261113174754_138_41.jpg'),
  },
  {
    id: 'm4-03',
    label: 'Photo 03',
    alt: 'Students controlling robotic vehicles throughout the Vehicle Computing Lab',
    src: labPhoto('Image_20261113174254_107_41.jpg'),
  },
];

export const labDemos: LabDemo[] = [
  { id: 'm4-video-01', title: 'Tracking a Real Robot in the Digital Lab' },
  { id: 'm4-video-02', title: 'Seeing the Road Beyond the Camera' },
];
