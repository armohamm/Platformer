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

/**
 * 
 */
export interface IClusterInfo
{
	/**
	 * Stores the minimum number of nodes in the cluster.
	 * A value of 0 indicates that the smallest available unit
	 * of computing should be used.
	 */
	dataNodeCount: number;
	
	/**
	 * Stores the desired amount of storage capacity on the cluster.
	 * A value of 0 indicates that the server with the smallest available
	 * disk space should be used.
	 */
	dataCapacity: number;
	
	/**
	 * 
	 */
	functionNodeCount: number;
	
	/**
	 * 
	 */
	functionNodeSize: 
}
