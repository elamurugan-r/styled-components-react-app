Eslint configuration: 

Open the below .eslintrc.json contents in vscode and see the commented lines for clarification.

File: .eslintrc.json

{
    "env": {
        // 'document' is not defined and 'window' is not defined 
        "browser": true,

        // 'process' is not defined 
        "node": true,

        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    // Parsing error: Must use import to load ES Module: /media/elamurugan/Development/Reactjs/react-with-styled-components/node_modules/eslint/node_modules/eslint-scope/lib/definition.js
    // require() of ES modules is not supported. require() of /media/elamurugan/Development/Reactjs/react-with-styled-components/node_modules/eslint/node_modules/eslint-scope/lib/definition.js from /media/elamurugan/Development/Reactjs/react-with-styled-components/node_modules/babel-eslint/lib/require-from-eslint.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
    // Instead rename definition.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /media/elamurugan/Development/Reactjs/react-with-styled-components/node_modules/eslint/node_modules/eslint-scope/package.json
    "parser": "@babel/eslint-parser",
    // In order to add the above line, need to install *npm i -D @babel/eslint-parser*

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",

        // Parsing error: No Babel config file detected for /media/elamurugan/Development/Reactjs/react-with-styled-components/src/reportWebVitals.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files
        "requireConfigFile": false,

        // Parsing error: This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}


Referrences:
https://www.youtube.com/watch?v=lHAeK8t94as
https://www.youtube.com/watch?v=qhuFviJn-es
https://stackoverflow.com/questions/69554485/eslint-error-must-use-import-to-load-es-module

Steps:
1) install: npm i -D eslint
2) init: ./node_modules/.bin/eslint --init
3) Answer all the questions asked during (step 2)
4) Step 3 will create .eslintrc.json (or) .eslintrc.js file in the root.
5) Create .env file in the root and add 
    *SKIP_PREFLIGHT_CHECK=true* 
  in the file.
6) Add the below 2 lines
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
   inside the package.json scripts.
7) Try to run npm run lint and resolve the errors.
8) Try to run npm start and resolve the errors as commented above in the .eslintrc content.