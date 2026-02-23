/**
 * @module @minions-services/sdk/schemas
 * Custom MinionType schemas for Minions Services.
 */

import type { MinionType } from 'minions-sdk';

export const serviceType: MinionType = {
  id: 'services-service',
  name: 'Service',
  slug: 'service',
  description: 'A service offered by the agency.',
  icon: '💼',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'pricingModel', type: 'select', label: 'pricingModel' },
    { name: 'basePrice', type: 'number', label: 'basePrice' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'targetIndustries', type: 'string', label: 'targetIndustries' },
    { name: 'caseStudyIds', type: 'string', label: 'caseStudyIds' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const servicepackageType: MinionType = {
  id: 'services-service-package',
  name: 'Service package',
  slug: 'service-package',
  description: 'A bundled offering of multiple services.',
  icon: '📦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'serviceIds', type: 'string', label: 'serviceIds' },
    { name: 'totalPrice', type: 'number', label: 'totalPrice' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'discount', type: 'number', label: 'discount' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const casestudyType: MinionType = {
  id: 'services-case-study',
  name: 'Case study',
  slug: 'case-study',
  description: 'A success story used to sell a service.',
  icon: '🏆',
  schema: [
    { name: 'serviceId', type: 'string', label: 'serviceId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'clientIndustry', type: 'string', label: 'clientIndustry' },
    { name: 'challenge', type: 'string', label: 'challenge' },
    { name: 'solution', type: 'string', label: 'solution' },
    { name: 'results', type: 'string', label: 'results' },
    { name: 'publishedUrl', type: 'string', label: 'publishedUrl' },
  ],
};

export const customTypes: MinionType[] = [
  serviceType,
  servicepackageType,
  casestudyType,
];

