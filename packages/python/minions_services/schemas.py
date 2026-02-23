"""
Minions Services SDK — Type Schemas
Custom MinionType schemas for Minions Services.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

service_type = MinionType(
    id="services-service",
    name="Service",
    slug="service",
    description="A service offered by the agency.",
    icon="💼",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="pricingModel", type="select", label="pricingModel"),
        FieldDefinition(name="basePrice", type="number", label="basePrice"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="targetIndustries", type="string", label="targetIndustries"),
        FieldDefinition(name="caseStudyIds", type="string", label="caseStudyIds"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

service_package_type = MinionType(
    id="services-service-package",
    name="Service package",
    slug="service-package",
    description="A bundled offering of multiple services.",
    icon="📦",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="serviceIds", type="string", label="serviceIds"),
        FieldDefinition(name="totalPrice", type="number", label="totalPrice"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="discount", type="number", label="discount"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

case_study_type = MinionType(
    id="services-case-study",
    name="Case study",
    slug="case-study",
    description="A success story used to sell a service.",
    icon="🏆",
    schema=[
        FieldDefinition(name="serviceId", type="string", label="serviceId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="clientIndustry", type="string", label="clientIndustry"),
        FieldDefinition(name="challenge", type="string", label="challenge"),
        FieldDefinition(name="solution", type="string", label="solution"),
        FieldDefinition(name="results", type="string", label="results"),
        FieldDefinition(name="publishedUrl", type="string", label="publishedUrl"),
    ],
)

custom_types: list[MinionType] = [
    service_type,
    service_package_type,
    case_study_type,
]

