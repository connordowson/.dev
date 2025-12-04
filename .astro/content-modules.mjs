export default new Map([
	[
		"src/content/playground/holo-pokemon-card.mdx",
		() =>
			import(
				"astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fplayground%2Fholo-pokemon-card.mdx&astroContentModuleFlag=true"
			),
	],
]);
