// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('vr', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );

  const leftPanel = new Surface(800, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(800, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  // const s = r360.getDefaultSurface();
  // s.resize(600, 600);
  r360.renderToSurface(
    r360.createRoot('vr'),
    leftPanel,
  );
  // const location = new Location([0, -1, -2]);
  r360.renderToSurface(
    r360.createRoot('node'),
    rightPanel,
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('matrix.jpg'));
}

window.React360 = {init};
