import * as X from "./X";

/**
 * Describes a cloud provider supported by this library.
 */
export enum ICloudProvider
{
	amazon,
	digitalOcean
}

/**
 * Describes a pair of credentials used to authenticate
 * into a cloud provider (different providers use different
 * names to refer to these two pieces of information.
 */
export interface ICloudCredentials
{
	key: string;
	secret: string;
}
