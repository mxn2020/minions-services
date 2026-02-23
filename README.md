# minions-services

**Service catalog, packages, pricing tiers, case studies, and target industries**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-services/sdk minions-sdk

# Python
pip install minions-services

# CLI (global)
npm install -g @minions-services/cli
```

---

## CLI

```bash
# Show help
services --help
```

---

## Python SDK

```python
from minions_services import create_client

client = create_client()
```

---

## Project Structure

```
minions-services/
  packages/
    core/           # TypeScript core library (@minions-services/sdk on npm)
    python/         # Python SDK (minions-services on PyPI)
    cli/            # CLI tool (@minions-services/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [services.minions.help](https://services.minions.help)
- Blog: [services.minions.blog](https://services.minions.blog)
- App: [services.minions.wtf](https://services.minions.wtf)

---

## License

[MIT](LICENSE)
