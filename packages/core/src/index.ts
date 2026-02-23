/**
 * Minions Services SDK
 *
 * Service catalog, packages, pricing tiers, case studies, and target industries
 *
 * @module @minions-services/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Services.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
