export default {
  entry: './jsnext/test.js',
  targets: [
      { dest: 'build/d3-jsx.js', format: 'umd' },
      { dest: 'example/d3-jsx.js', format: 'umd' }
  ]
};