import type { GalleryPhoto } from './milestoneThreeGallery';

export type LabPhoto = {
  id: string;
  label: string;
  photos: GalleryPhoto[];
};

export type LabDemo = {
  id: string;
  title: string;
  description: { left: string; right: string };
  media?:
    | { kind: 'video'; src: string; poster?: string }
    | { kind: 'embed'; src: string };
};

// Keep these slot IDs when replacing placeholders with the supplied media.
const labMedia = (filename: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/milestone-4/${filename}`;

export const labPhotos: LabPhoto[] = [
  {
    id: 'm4-01',
    label: 'Photo 01',
    photos: [
      {
        src: labMedia('Image_20261113174628_125_41.jpg'),
        alt: 'A student using a handheld controller to drive robots on the lab road map',
      },
      { src: '', alt: 'Second photograph for M4-01, coming soon' },
    ],
  },
  {
    id: 'm4-02',
    label: 'Photo 02',
    photos: [
      {
        src: labMedia('Image_20261113174754_138_41.jpg'),
        alt: 'Students coordinating robotic vehicles on the indoor road network',
      },
      { src: '', alt: 'Second photograph for M4-02, coming soon' },
    ],
  },
  {
    id: 'm4-03',
    label: 'Photo 03',
    photos: [
      {
        src: labMedia('Image_20261113174254_107_41.jpg'),
        alt: 'Students controlling robotic vehicles throughout the Vehicle Computing Lab',
      },
      { src: '', alt: 'Second photograph for M4-03, coming soon' },
    ],
  },
];

export const labDemos: LabDemo[] = [
  {
    id: 'm4-video-01',
    title: 'Tracking a Real Robot in the Digital Lab',
    description: {
      left: "Raw camera footage showing the robot's view as it drives through the Physical Lab.",
      right: "A bird's-eye view of the Digital Lab, built offline using videos collected by students. Once this digital environment is constructed, an incoming camera feed can be used to estimate the robot's position, which is transformed into coordinates on the digital map. As the robot moves, its estimated X–Y position and driving trajectory are updated on the map, allowing us to see exactly how its movements in the real lab correspond to locations in the Digital Lab.",
    },
    media: { kind: 'video', src: labMedia('demo-tracking-60s.mp4') },
  },
  {
    id: 'm4-video-02',
    title: 'Mapping the Road Around the Robot in Real Time',
    description: {
      left: "Raw camera footage showing the robot's view as it drives through the real lab.",
      right: "A robot-centered, bird's-eye view of a vectorized HD map generated from sensor data and updated as the robot moves. Orange lines represent lane dividers, blue markings indicate pedestrian crossings, and green lines show road boundaries. Rather than simply detecting lane markings, the system builds a structured map of the road around the robot, providing spatial information that supports navigation and path planning.",
    },
    media: { kind: 'video', src: labMedia('demo-road-vision-60s.mp4') },
  },
];
