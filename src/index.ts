import { setupControls } from './controls';
import { setupTimeline } from './timeline';

import { composition } from './composition';

// connect to ui
setupControls(composition);
setupTimeline(composition);
