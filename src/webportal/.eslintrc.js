module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true,
  },
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended",
    "google"
  ],
  "globals": {
    "cookies": false,
    "userLogout": false,
  },
  "rules": {
    "max-len": [0, 80],
    "require-jsdoc": 0,
    "valid-jsdoc": 0,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "overrides": [
    {
      "files": ["**/*.jsx", "src/app/job/job-view/fabric/**/*.js"],
      "parser": "babel-eslint"
    }
  ]
};
