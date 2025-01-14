# joplin-api

[![npm version](https://badge.fury.io/js/joplin-api.svg)](https://www.npmjs.com/package/joplin-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A JavaScript wrapper library for accessing the Joplin Data API, providing type-safe and intuitive interfaces.

## Features

- 🚀 Support multiple runtime environments: Browser, NodeJS and Joplin plugin
- 📦 Complete TypeScript type definitions
- 🔒 Type-safe API calls
- 📚 Compliant with official API specifications

## Installation

```bash
npm install joplin-api
# or
yarn add joplin-api
# or
pnpm add joplin-api
```

## Quick Start

### REST API Mode (Browser/NodeJS)

```typescript
import { joplinDataApi } from 'joplin-api'

const api = joplinDataApi({
  type: 'rest',
  token: 'your-token-here',
  baseUrl: 'http://localhost:41184',
})

// Get note list
const notes = await api.note.list()
console.log(notes)
```

### Plugin Mode (Joplin Plugin)

```typescript
import { joplinDataApi } from 'joplin-api'

const api = joplinDataApi({
  type: 'plugin',
})

// API call example
const notes = await api.note.list()
```

## Documentation

For complete API documentation, please refer to:

- [Joplin Official REST API Documentation](https://joplinapp.org/help/api/references/rest_api/)
- [Project TypeScript Type Definitions](https://joplin-utils.rxliuli.com/en-US/api/joplin-api/)

## Contributing

Issues and Pull Requests are welcome!

## License

MIT License

---

> 📝 Note: To use REST API mode, you need to enable Web Clipper service in Joplin settings and obtain an authorization token first.
