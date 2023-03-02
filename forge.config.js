const name = "Simple USFM Alignment";
const ignore = [ // files/folders to not copy to app (in regex format)
  '^/.idea',
  '^/.vscode',
  '^/libs',
  '^/out',
  '^/src',
];

module.exports = {
  packagerConfig: {
    ignore,
    osxUniversal: { // config options for `@electron/universal`
      x64ArchFiles: '**/fsevents.node'
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: { name },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: { name },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './public/favicon-32x32.png',
        format: 'ULFO',
        name
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: { name },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: { name },
    },
  ],
};

console.log('module.exports', JSON.stringify(module.exports));
