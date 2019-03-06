import * as X from "./X";

/**
 * Place all well-known URLs that the library uses internally
 * to perform it's operations, so that these are all kept in a
 * central location.
 */
export const WellKnownUrls = Object.freeze(new class
{
	readonly terraformWindowsUrl = "https://";
	readonly terraformMacUrl = "https://...";
	readonly terraformLinuxUrl = "https://...";
	
	// Other URLs can go here.
});
