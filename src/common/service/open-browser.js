import browserLauncher from 'james-browser-launcher';

const defaultOptions = {
  browser: 'firefox',
  proxy: 'localhost:1338'
};

export default function openBrowser(options) {
  const launchOptions = {
    ...defaultOptions,
    ...options,
    noProxy: [
      'local.mlb.com',
      'localhost',
      '127.0.0.1',
    ],
  };

  return new Promise((resolve, reject) => {
    browserLauncher((err, launch) => {
      if (err) return reject(err);
      launch('http://www.uxebu.com/', launchOptions, (launchErr) => {
        if (launchErr) return reject(launchErr);
        resolve();
      });
    });
  });
}
