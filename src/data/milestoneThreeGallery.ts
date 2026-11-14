export type GalleryPhoto = {
  src: string;
  alt: string;
  position?: string;
  fit?: 'cover' | 'contain';
};

export type GalleryWindow = {
  id: string;
  caption: string;
  photos: GalleryPhoto[];
};

const milestonePhoto = (filename: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/milestone-3/${filename}`;

// Stable window numbers match the photo-submission guide: M3-01 through M3-07.
// Keep the first entry as the cover, then append photographs in display order.
export const handsOnWindows: GalleryWindow[] = [
  {
    id: 'm3-01',
    caption: 'The class and the robot fleet',
    photos: [
      {
        src: milestonePhoto('Image_20261112095312_42_41.jpg'),
        alt: 'Students together in the Vehicle Computing Lab with the robotic vehicle fleet',
      },
      {
        src: milestonePhoto('Robotics.png'),
        alt: 'Students gathered around a table with several robotic vehicles and miniature road signs',
      },
      {
        src: milestonePhoto('Image_20261112095324_47_41.jpg'),
        alt: 'Students working with laptops and robotic vehicles across the lab road map',
      },
    ],
  },
  {
    id: 'm3-02',
    caption: 'One robot per team',
    photos: [
      {
        src: milestonePhoto('Image_20261112095319_45_41.jpg'),
        alt: 'A small team working together on one robotic vehicle',
      },
      {
        src: milestonePhoto('Image_20261112095326_48_41.jpg'),
        alt: 'A student team using laptops beside small robotic vehicles on the lab map',
      },
    ],
  },
  {
    id: 'm3-03',
    caption: 'Working together on the map',
    photos: [
      {
        src: milestonePhoto('Image_20261112095307_40_41.jpg'),
        alt: 'Students working together with robotic vehicles on the lab map',
      },
      {
        src: milestonePhoto('Image_20261112095259_38_41.jpg'),
        alt: 'Students using laptops around robotic vehicles and test objects on the lab road map',
      },
    ],
  },
  {
    id: 'm3-04',
    caption: 'Hands-on object detection',
    photos: [
      {
        src: milestonePhoto('Image_20261112095314_43_41.jpg'),
        alt: 'Students using laptops beside a small robotic vehicle and traffic signals on the lab map',
      },
      {
        src: milestonePhoto('Image_20261112095317_44_41.jpg'),
        alt: 'Two students reviewing a laptop camera view beside a robotic vehicle, a stop sign, and a toy car',
      },
    ],
  },
  {
    id: 'm3-05',
    caption: 'Testing obstacle responses',
    photos: [
      {
        src: milestonePhoto('dd117f6d49998fe6c0dde64c9186ca33.jpg'),
        alt: 'Two students demonstrating a robotic vehicle beside a display of its remote-control interface',
      },
      {
        src: milestonePhoto('Image_20261112095303_39_41.jpg'),
        alt: 'Students testing how a robotic vehicle responds to objects in its path',
      },
    ],
  },
];

export const presentationWindows: GalleryWindow[] = [
  {
    id: 'm3-06',
    caption: 'Live demonstrations',
    photos: [
      {
        src: milestonePhoto('Image_20261112095350_58_41.jpg'),
        alt: 'Two students holding a robotic vehicle beside a display of their object detection results',
      },
      {
        src: milestonePhoto('Image_20261112095703_60_41.jpg'),
        alt: 'Two students presenting object detection findings with example camera images and confidence results',
      },
      {
        src: milestonePhoto('Image_20261112095712_63_41.jpg'),
        alt: 'Two students presenting programming changes that let their robot save evidence of its decisions',
      },
    ],
  },
  {
    id: 'm3-07',
    caption: 'Observations and Discussions',
    photos: [
      {
        src: milestonePhoto('Image_20261112095700_59_41.jpg'),
        alt: 'Two students presenting confidence-threshold test results beside a classroom display',
      },
      {
        src: milestonePhoto('Image_20261112095742_69_41.jpg'),
        alt: 'Two students presenting their robot traffic-light tests and observations on a classroom display',
      },
    ],
  },
];
