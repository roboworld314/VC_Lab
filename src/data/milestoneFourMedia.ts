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
// Local URLs should include import.meta.env.BASE_URL, as in milestoneThreeGallery.ts.
export const labPhotos: LabPhoto[] = [
  { id: 'm4-01', label: 'Photo 01', alt: 'Students controlling robots and collecting camera data in the lab' },
  { id: 'm4-02', label: 'Photo 02', alt: 'Students controlling robots and collecting camera data in the lab' },
  { id: 'm4-03', label: 'Photo 03', alt: 'Students controlling robots and collecting camera data in the lab' },
];

export const labDemos: LabDemo[] = [
  { id: 'm4-video-01', title: 'Tracking a Real Robot in the Digital Lab' },
  { id: 'm4-video-02', title: 'Seeing the Road Beyond the Camera' },
];
