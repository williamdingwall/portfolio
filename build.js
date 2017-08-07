// Metalsmith

var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets'),
    markdown = require('metalsmith-markdown'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
    .metadata({
      site: {
        name: 'William Dingwall | Designer + Developer',
        description: "I build stuff"
      }
    })
    .source('./content')
    .use(markdown())
    .use(collections({
      pages: {
        pattern: '*.md'
      },
      posts: {
        pattern: 'posts/**/*.md',
        sortBy: 'order',
        reverse: true
      }
    }))
    .use(permalinks({
      relative: false,
      pattern: ':collections/:title'
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: './layouts',
      default: 'article.html',
      pattern: ["*/*/*html","*/*html","*html"],
      partials: {
        header: 'partials/header',
        footer: 'partials/footer',
        feature: 'partials/feature'
      }
    }))
    .use(assets({
      source: './assets',
      destination: './'
    }))
    .destination('./build')
    .build(function(err, files) {
      if (err) throw err;
      else console.log('Success!! Portfolio Built');
    });
