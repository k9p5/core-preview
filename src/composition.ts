import * as core from '@diffusionstudio/core-v3';

export const composition = new core.Composition();

const video = new core.VideoClip('/377611_Father_Back_Yard_Slide_Family_Video_By_Continuous_Content_Artlist_HD.mp4', {
  height: '100%',
  position: 'center',
}).subclip('2s', '12s'); // 2 seconds to 12 seconds

// make sure video starts at 0 (with sequential)
const layer = composition.createLayer().sequential();

await layer.add(video);
