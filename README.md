# AshbyHQ API TypeScript Client

A TypeScript client for interacting with the AshbyHQ API. This client provides a simple and type-safe way to interact with AshbyHQ's recruitment platform API.

## Installation

```bash
npm install ashbyhq-client
```

## Usage

First, initialize the client with your API key:

```typescript
import AshbyClient from 'ashbyhq';

const client = new AshbyClient({
  auth: {
    apiKey: 'YOUR_API_KEY',
  },
});
```

### Features

#### Candidates

1. **List Candidates**
```typescript
const candidates = await client.candidate.list({
  limit: 10,
  // Optional parameters:
  // cursor: 'string',
  // syncToken: 'string',
});
```

2. **Create a Candidate**
```typescript
const candidate = await client.candidate.create({
  name: "John Doe",
  email: "john@example.com",
  location: {
    city: "San Francisco",
    region: "CA",
    country: "USA"
  },
  // Optional fields
  alternateEmailAddresses: ["john.doe@example.com"],
  phoneNumber: "+1234567890",
  linkedinUrl: "https://www.linkedin.com/in/johndoe",
  githubUrl: "https://www.github.com/johndoe",
  website: "https://www.johndoe.com",
  sourceId: "source_id",
  creditedToUserId: "user_id",
});
```

3. **Search for a Candidate**
```typescript
const candidate = await client.candidate.search({
  email: 'john@example.com'
});
```

4. **Update a Candidate**
```typescript
const updatedCandidate = await client.candidate.update({
  candidateId: 'candidate_id',
  name: 'John Smith',
  email: 'john.smith@example.com',
  location: {
    city: 'San Francisco',
    region: 'CA',
    country: 'USA'
  }
});
```

5. **Find a Candidate**
```typescript
const candidate = await client.candidate.find({
  id: 'candidate_id',
});
```

6. **Upload Resume**
```typescript
const resume = await client.candidate.uploadResume({
  candidateId: 'candidate_id',
  resume: File, // File object containing the resume
});
```

## Dependencies

- axios: HTTP client for making API requests
- TypeScript: For type safety and better development experience

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 