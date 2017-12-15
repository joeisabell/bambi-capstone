import { injectGlobal } from 'styled-components'

export default {
  // colors
  primary: '#fff',
  secondary: '#0069ff',
  shadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)',
  // fonts
  primaryFont: 'mr-eaves-xl-modern, sans-serif',
  secondaryFont: 'league-gothic, sans-serif',
  // screen sizes
  xl: 1250,
  desktop: 950,
  tablet: 768,
  phone: 414
}


// Inject reset.css into main style sheet;
export const inject = injectGlobal`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    font-family: mr-eaves-xl-modern;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  select {
    outline: none;
  }

  #root > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

`
