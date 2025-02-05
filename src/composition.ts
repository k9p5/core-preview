import * as core from '@diffusionstudio/core';

export const composition = new core.Composition();

const source = await core.VideoSource.from('/377611_Father_Back_Yard_Slide_Family_Video_By_Continuous_Content_Artlist_HD.mp4');

const video = new core.VideoClip(source, {
  height: '100%',
  position: 'center',
}).subclip(2 * 30, 12 * 30); // 2 seconds to 12 seconds

// make sure video starts at 0 (with stacked)
const track = composition.createTrack('video').stacked();

await track.add(video);
