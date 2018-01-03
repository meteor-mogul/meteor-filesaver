Package.describe({
  name: "meteormogul:filesaver",
	summary: "FileSaver.js packaged for use in Meteor.",
  version: "1.3.2",
  git: "https://github.com/meteor-mogul/meteor-filesaver.git"
});

Package.onUse(function (api) {
  api.export(['saveAs'])
  api.versionsFrom("METEOR@1.0");
	api.add_files('lib/FileSaver.js', 'client');
});
