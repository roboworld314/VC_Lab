import type { GalleryPhoto } from './milestoneThreeGallery';

export type LabPhoto = {
  id: string;
  label: string;
  photos: GalleryPhoto[];
};

export type LabDemo = {
  id: string;
  title: string;
  description: { label: string; text: string }[];
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
      {
        src: labMedia('Image_20261113174216_104_41.jpg'),
        alt: 'Students using handheld controllers to drive small robotic vehicles around the lab road network',
      },
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
      {
        src: labMedia('Image_20261113173824_95_41.jpg'),
        alt: 'Two students beside robotic vehicles, with a laptop and printed map in the Vehicle Computing Lab',
      },
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
      {
        src: labMedia('Image_20261113174525_112_41.jpg'),
        alt: 'A student holding a controller beside robotic vehicles while classmates observe in the lab',
      },
    ],
  },
];

export const labDemos: LabDemo[] = [
  {
    id: 'm4-video-01',
    title: 'Tracking a Real Robot in the Digital Lab',
    description: [
      {
        label: 'Left',
        text: "Raw camera footage showing the robot's view as it drives through the Physical Lab.",
      },
      {
        label: 'Right',
        text: "A bird's-eye view of the Digital Lab, built offline using videos collected by students. Once this digital environment is constructed, an incoming camera feed can be used to estimate the robot's position, which is transformed into coordinates on the digital map. As the robot moves, its estimated X–Y position and driving trajectory are updated on the map, allowing us to see exactly how its movements in the real lab correspond to locations in the Digital Lab.",
      },
    ],
    media: { kind: 'video', src: labMedia('demo-tracking-60s.mp4') },
  },
  {
    id: 'm4-video-02',
    title: 'Mapping the Road Around the Robot in Real Time',
    description: [
      {
        label: 'Left',
        text: "Raw camera footage showing the robot's view as it drives through the real lab.",
      },
      {
        label: 'Right',
        text: "A robot-centered, bird's-eye view of a vectorized HD map generated from sensor data and updated as the robot moves. Orange lines represent lane dividers, blue markings indicate pedestrian crossings, and green lines show road boundaries. Rather than simply detecting lane markings, the system builds a structured map of the road around the robot, providing spatial information that supports navigation and path planning.",
      },
    ],
    media: { kind: 'video', src: labMedia('demo-road-vision-60s.mp4') },
  },
  {
    id: 'm4-video-03',
    title: 'From Digital Waypoints to Autonomous Driving',
    description: [
      {
        label: 'Top Right',
        text: 'Users select waypoints on the Digital Lab map, and the real robotic vehicle autonomously follows the planned route, visiting each waypoint in sequence.',
      },
      {
        label: 'Top Left',
        text: "The robot's camera view shows the planned driving path (blue) and road markings (green) overlaid on the real-world scene.",
      },
      {
        label: 'Bottom Left',
        text: 'A robot-centered HD map displays the surrounding road structure, including lane dividers (orange), pedestrian crossings (blue), and road boundaries (green).',
      },
      {
        label: 'Bottom Right',
        text: 'A mission dashboard tracks waypoint progress, estimated robot location, speed, steering, and navigation status.',
      },
    ],
    media: {
      kind: 'video',
      src: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/videos/waypoint.mp4`,
    },
  },
];
