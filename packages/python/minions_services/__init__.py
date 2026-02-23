"""
Minions Services Python SDK

Service catalog, packages, pricing tiers, case studies, and target industries
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Services.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
