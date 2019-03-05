export const imports = {
  'components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'),
  'components/Foobar/Foobar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-foobar-foobar" */ 'components/Foobar/Foobar.mdx'),
}
