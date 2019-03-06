// On a generate fail, return a non-0 exit code so Netlify won't deploy the build
export default function() {
  return this.nuxt.hook('generate:done', function(generator, errors) {
    if (errors.length) {
      return process.exit(1);
    }
  });
};
