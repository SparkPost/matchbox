module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            debug: false
          }
        ],
        "@babel/preset-react",
        "react-app"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties"
      ]
    },
    production: {
      presets: [
        ["@babel/preset-env"],
        "@babel/preset-react",
        "react-app"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties"
      ]
    },
    development: {
      presets: [
        ["@babel/preset-env"],
        "@babel/preset-react",
        "react-app"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties"
      ]
    }
  }
};
