import chrome from "@assets/Projects/chrome.mp4";

const projectData = [
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header: "Analysis of different Machine Learning Models",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Building basic Machine Learning Models from scratch and analysing them - Linear Regression, Logistic Regression, bayes classifier, EM Algorithm, GMM on different univariate and multivariate mixture data etc.</li>" +
      "<li>Building and analysis of PCA and KPCA(RBF kernel) from scratch and using it for Face Recognition.</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">February 2020 - March 2020</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: true,
    src: chrome,
    srcConfig: {
      // className: "mx-auto d-block",
      variant: "top",
      controls: true,
      style: {
        display: "block",
        height: "18em",
        width: "100%",
      },
    },
    header: "Built a Chrome Extension for YouTube website",
    headerConfig: { as: "h5" },
    title:
      'Won <a href="https://parsec.iitdh.ac.in/"  target="_blank" rel="noreferrer">PARSEC</a>  Hackathon!!',
    body:
      "<ul><li>Can navigate to the particular timeline given by the search results, can skip to the important part of the video you want to watch.</li>" +
      "<li>It also gives a sentimental analysis of the word/phrase in the given video.</li>" +
      "<li><strong>Tools used:</strong> HTML, CSS, Javascript, Python, NLP</li>" +
      "</ul>",
    footer:
      '<p style="margin:0;padding:0;">February 2020 <a href="https://github.com/Abhishek-Rajendra/Youtube-extention"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Hardware resource sharing over a distributed network of non-identical devices",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Using Message Passing Interface (MPI) to communicate between different devices for parallel programming.</li>" +
      "<li>It is also used to distribute different processes that the user wants to run, to different devices, making the processes complete faster.</li>" +
      "<li>Also sharing of memory (NFS file type) between the different devices to store larger files and access them faster using the distributed system.</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">September 2019 - November 2019</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Comparing and analyzing different algorithms on the bandit and atari games (using OpenAI gym)",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Comparing different algorithms such as epsilon greedy, softmax, Upper Confidence Bound, Thompson Sampling on Bandit problem.</li>" +
      "<li>Comparing SARSA, Q - Learning, Monte Carlo algorithms.</li>" +
      "<li>Implementing SARSA, Q - Learning with function approximators such as Multiple tile coding and Radial basis functions and reinforce algorithms on the OpenAI gym environment.</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">September 2019 - November 2019</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Build and Analyse architectural simulator of a RISC-V like machine",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>A Java project to implement the computer processor with 5 stages of operation Instruction fetch, Operand fetch, Execute, Memory access and Register write along with L1 and L2 cache implementation with different policies.</li>" +
      "<li>Compared Cache hit rate, latencies and other analytics.</li>" +
      "<li><strong>Tools used:</strong> Java</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">September 2018 - November 2018</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header: "Online Tutoring Website",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>It’s a website where the Instructor can upload their course online so that students who are accessible to the internet can take it. </li>" +
      "<li>The instructor can upload videos, pdf material and can add quizzes week-wise. So that students who are enrolled will have a deadline to finish the course on time.</li>" +
      "<li><strong>Tools used:</strong> PHP, HTML, CSS, Javascript, PostgreSQL</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">October 2018 - November 2018</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Separation of Vocal and Nonvocal from a Music using Digital signal processing",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Separation using Zero crossing rate and energy of the Vocal and Non-Vocal which is present in different time domains. </li>" +
      "<li>Using different low pass filters, High pass filters, and Notch filters to differentiate the Vocals and Non-Vocals which are present in the same time domain.</li>" +
      "<li>Separation using the Repeating Pattern Extraction Technique (REPET) method.</li>" +
      "<li><strong>Tools used:</strong> Matlab</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">October 2018 - November 2018</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header: "Inventory Management Website ",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>The website can be accessed by two parties i.e. admin and the client (students or faculties).</li>" +
      "<li>Admin can manage the inventory and keep track of items.</li>" +
      "<li>The client can reserve all the items he needs and return the items, which will be confirmed by the Admin. </li>" +
      "<li><strong>Tools used:</strong> PHP, HTML, CSS, Javascript, MySQL</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">October 2017 - November 2017</p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { projectData };
