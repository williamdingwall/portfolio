var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
		serve = require('metalsmith-serve'),
		watch = require('metalsmith-watch');

Metalsmith(__dirname)
		.metadata({
			site: {
				name: 'Electroniq',
				description: "Electroniq is astrophysicist (and retro music enthusiast) Tara Himmels' blog."
			}
		})
		.source('./src')
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
    .use(markdown())
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
		.use(serve({
			port: 8081,
			verbose: true
		}))
		.use(watch({
				paths: {
					"${source}/**/*": true,
					"src/**/*": "**/*",
					"layouts/**/*": "**/*"
				}
			}))
    .destination('./build')
    .build(function (err) { if(err) console.log(err) })
