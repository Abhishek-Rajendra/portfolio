const { alias, configPaths } = require("react-app-rewire-alias");

const aliasMap = configPaths("./jsconfig.paths.json"); // or jsconfig.paths.json

module.exports = alias(aliasMap);

const { exec } = require("child_process");
exec(`node ${__dirname}/server.js`);

// const { override, useBabelRc } = require("customize-cra");
// // eslint-disable-next-line react-hooks/rules-of-hooks
// module.exports = override(useBabelRc());

// // const { alias } = require("react-app-rewire-alias");

// // module.exports = function override(config) {
// //   alias({
// //     "@components": "src/components",
// //     "@lib": "lib", // in root of app outside of src
// //   })(config);
// //   return config;
// // };
