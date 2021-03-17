import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */
      /* latin-ext */
      @font-face {
font-family:"freight-text-pro";
src:url("https://use.typekit.net/af/1aea0d/000000000000000000012106/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/1aea0d/000000000000000000012106/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/1aea0d/000000000000000000012106/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:300;
}

@font-face {
font-family:"freight-micro-pro";
src:url("https://use.typekit.net/af/6f88f7/00000000000000000001322a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/6f88f7/00000000000000000001322a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/6f88f7/00000000000000000001322a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"freight-micro-pro";
src:url("https://use.typekit.net/af/f0834a/00000000000000000001322b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/f0834a/00000000000000000001322b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/f0834a/00000000000000000001322b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"freight-micro-pro";
src:url("https://use.typekit.net/af/51014d/000000000000000000013230/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/51014d/000000000000000000013230/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/51014d/000000000000000000013230/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"freight-micro-pro";
src:url("https://use.typekit.net/af/262f01/000000000000000000013231/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/262f01/000000000000000000013231/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/262f01/000000000000000000013231/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;
}

@font-face {
font-family:"freight-big-pro";
src:url("https://use.typekit.net/af/8de680/0000000000000000000132c1/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/8de680/0000000000000000000132c1/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/8de680/0000000000000000000132c1/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"freight-big-pro";
src:url("https://use.typekit.net/af/486b15/0000000000000000000132c2/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/486b15/0000000000000000000132c2/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/486b15/0000000000000000000132c2/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;
}

@font-face {
font-family:"freight-big-pro";
src:url("https://use.typekit.net/af/ca7ae5/0000000000000000000132c3/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/ca7ae5/0000000000000000000132c3/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/ca7ae5/0000000000000000000132c3/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"freight-big-pro";
src:url("https://use.typekit.net/af/0203fc/0000000000000000000132c4/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/0203fc/0000000000000000000132c4/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/0203fc/0000000000000000000132c4/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"freight-display-pro";
src:url("https://use.typekit.net/af/6f4412/0000000000000000000132cd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/6f4412/0000000000000000000132cd/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/6f4412/0000000000000000000132cd/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"freight-display-pro";
src:url("https://use.typekit.net/af/aa7769/0000000000000000000132ce/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/aa7769/0000000000000000000132ce/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/aa7769/0000000000000000000132ce/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;
}

@font-face {
font-family:"freight-display-pro";
src:url("https://use.typekit.net/af/f15774/0000000000000000000132cf/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/f15774/0000000000000000000132cf/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/f15774/0000000000000000000132cf/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"freight-display-pro";
src:url("https://use.typekit.net/af/51f389/0000000000000000000132d0/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/51f389/0000000000000000000132d0/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/51f389/0000000000000000000132d0/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"freight-macro-pro";
src:url("https://use.typekit.net/af/c1b4f7/000000000000000000017774/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/c1b4f7/000000000000000000017774/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/c1b4f7/000000000000000000017774/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"freight-macro-pro";
src:url("https://use.typekit.net/af/f96583/000000000000000000017775/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/f96583/000000000000000000017775/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/f96583/000000000000000000017775/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;
}

@font-face {
font-family:"freight-macro-pro";
src:url("https://use.typekit.net/af/e67d8d/000000000000000000017776/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/e67d8d/000000000000000000017776/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/e67d8d/000000000000000000017776/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"freight-macro-pro";
src:url("https://use.typekit.net/af/32d1b5/000000000000000000017777/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/32d1b5/000000000000000000017777/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/32d1b5/000000000000000000017777/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}
      `}
	/>
);

export default Fonts;
