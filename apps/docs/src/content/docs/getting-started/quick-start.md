---
title: Quick Start
description: Get up and running with Minions Services in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-services/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_services import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
services info
```
