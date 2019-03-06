import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [{
	input: "build/X.js",
	output: {
		name: "Platformer",
		sourcemap: "inline",
		format: "iife",
		file: "bundle.js",
		footer: `typeof module === "object" && (module.exports = Platformer);`
	},
	treeshake: false,
	onwarn: warning =>
	{
		if (warning.code === "THIS_IS_UNDEFINED")
			return;
		
		if (warning.code === "CIRCULAR_DEPENDENCY")
			return;
		
		console.warn(warning.message);
	},
	plugins: [
		sourcemaps(),
		resolve(),
		commonjs()
	]
}];
