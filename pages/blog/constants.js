import etag from "@assets/Blog/etag.jpg";

const groupCardConfig = {
  xs: "1",
  md: "3",
  className: "g-4",
};

const blogData = [
  {
    cardConfig: {},
    isVideo: false,
    src: etag,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "15em", width: "100%" },
    },
    header: "Demystify ETag",
    headerConfig: { as: "h5" },
    title: "What is ETag?",
    body:
      'The ETag or entity tag is a part of the HTTP response header that acts as an identifier for a specific resource version. It is one of the mechanisms that HTTP provides for Web cache validation. This mechanism ... <a href="https://www.linkedin.com/pulse/demystify-eag-abhishek-r/"  target="_blank" rel="noreferrer">continue</a>',
    footer:
      '<p style="margin:0;padding:0;">2020 <a href="https://www.linkedin.com/pulse/demystify-eag-abhishek-r/"  target="_blank" rel="noreferrer">blog</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { blogData, groupCardConfig };
