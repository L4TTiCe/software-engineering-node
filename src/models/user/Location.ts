/**
 * @file Declares Location data type representing the {@link User}'s location
 */

/**
 * @typedef {Location} Location
 * Represents a User's location
 * @property {number} latitude - the latitude of the Location
 * @property {number} longitude - the longitude of the Location
 */
export interface Location {
    latitude: number;
    longitude: number;
}
