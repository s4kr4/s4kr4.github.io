const {
  FuseBox,
  CSSPlugin,
  SassPlugin,
  BabelPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  ImageBase64Plugin,
  JSONPlugin,
  Sparky
} = require('fuse-box')

let fuse, app, isProduction

const CSSSettings = {
  minify: true
}

Sparky.task('config', () => {
  fuse = new FuseBox({
    homeDir: 'src/',
    sourceMaps: !isProduction,
    output: 'public/$name.js',
    target: 'browser',
    experimentalFeatures: true,
    plugins: [
      BabelPlugin({
        sourceMaps: !isProduction,
        presets: ['es2015', 'react', 'flow'],
      }),
      CSSPlugin(CSSSettings),
      [SassPlugin(), CSSPlugin(CSSSettings)],
      ImageBase64Plugin(),
      JSONPlugin(),
      WebIndexPlugin({
        template: 'src/index.html'
      }),
      isProduction && QuantumPlugin({
        bakeApiIntoBundle: 'bundle',
        treeshake: true,
        uglify: true,
      }),
    ],
  })

  app = fuse.bundle('bundle').instructions('> javascripts/index.js')
})

Sparky.task('clean', () => Sparky.src('public/').clean('public/'))
Sparky.task('copy', () => Sparky.src('index.html', {base: 'public'}).dest('.'))
Sparky.task('prod-env', () => { isProduction = true })
Sparky.task('build', ['prod-env', 'clean', 'config'], () => fuse.run())
Sparky.task('release', ['build', 'copy'], () => Sparky.src('service-worker.js', {base: 'src'}).dest('.'))

Sparky.task('default', ['clean', 'config'], () => {
  fuse.dev({
    port: 8000,
  })
  app.watch().hmr()
  return fuse.run()
})
