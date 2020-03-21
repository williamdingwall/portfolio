// Metalsmith

var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets'),
    sass = require('metalsmith-sass'),
    markdown = require('metalsmith-markdown'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve');

Metalsmith(__dirname)
    .metadata({
      site: {
        name: 'William Dingwall | Designer + Developer',
        description: "I build stuff"
      }
    })
    .source('./src')
    .use(markdown())
    .use(collections({
      pages: {
        pattern: '*.md'
      },
      posts: {
        pattern: 'src/posts/**/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(permalinks({
      relative: false,
      pattern: ':collections/:title'
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: './src/layouts',
      default: 'article.html',
      pattern: ["*/*/*html","*/*html","*html"],
      partials: {
        header: 'partials/header',
        footer: 'partials/footer',
        feature: 'partials/feature'
      }
    }))
    .use(assets({
      source: './src',
      destination: './'
    }))
    .use(sass({
      outputDir: 'css/'
    }))
    .destination('./build')
    .use(
      watch({
        paths: {
          "${source}/**/*": true,
          "src/scss/**/*": "**/*",
          "src/layouts/**/*": "**/*",
          "src/content/**/*": "**/*",
        },
        livereload: true,
      })
    )
    .use(serve({
      port: 8081,
      verbose: true
    }))
    .build(function(err, files) {
      if (err) throw err;
      else console.log('Success!! Start building!');
    });