import reconstruction from "@assets/Publication/reconstruction.png";
import rl from "@assets/Publication/rl.mp4";

const groupCardConfig = {
  xs: "1",
  md: "3",
  className: "g-4",
};

const publicationData = [
  {
    cardConfig: {},
    isVideo: false,
    src: reconstruction,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "15em", width: "100%" },
    },
    header: "arXiv",
    headerConfig: { as: "h5" },
    title: "Automated 3D solid reconstruction from 2D CAD using OpenCV",
    body:
      'Co-authors: <a href="https://www.ajaybharish.com/home"  target="_blank" rel="noreferrer">Ajay B Harish, University of California, Berkeley</s>',
    footer:
      '<p style="margin:0;padding:0;">2020 <a href="https://arxiv.org/pdf/2101.04248"  target="_blank" rel="noreferrer">arXiv</a> <a href="https://github.com/bhajay/ACADGen"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: true,
    src: rl,
    srcConfig: {
      variant: "top",
      controls: true,
      autoPlay: true,
      muted: true,
      style: { display: "block", height: "15em", width: "100%" },
    },
    header: "Thesis",
    headerConfig: { as: "h5" },
    title: "Analysis of Actor-Critic Algorithms And it’s Variants",
    body:
      'Guided by: <a href="https://scholar.google.co.uk/citations?user=JSL--pMAAAAJ&hl=en"  target="_blank" rel="noreferrer">Prabuchandran K.J</a>',
    footer:
      '<p style="margin:0;padding:0;">2019 <a href="https://drive.google.com/file/d/18apC0A7_ddQt5dAXFz6Kg76u5eIKIY79/view?usp=sharing"  target="_blank" rel="noreferrer">paper</a> <a href="https://github.com/Abhishek-Rajendra/Actor_critic_methods"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { publicationData, groupCardConfig };
