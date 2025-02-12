import * as core from '@diffusionstudio/core-v3';

export function setupTimeline(composition: core.Composition) {
  composition.on('currentframe', (evt) => {
    const pos = evt.detail / composition.duration.frames;

    cursor.style.left = `${timeline.clientWidth * pos}px`;
  });

  let seeking = false;
  timeline.addEventListener('mousemove', async (evt: MouseEvent) => {
    const pos = evt.offsetX / timeline.clientWidth;

    if(!seeking) {
      seeking = true;
      await composition.seek(composition.duration.frames * pos);
      seeking = false;
    }
  });

  timeline.addEventListener('click', (evt: MouseEvent) => {
    const pos = evt.offsetX / timeline.clientWidth;

    composition.seek(composition.duration.frames * pos);
  });
}

const timeline = document.querySelector('[id="timeline"]') as HTMLDivElement;
const cursor = document.querySelector('[id="timeline"] > div') as HTMLDivElement;
