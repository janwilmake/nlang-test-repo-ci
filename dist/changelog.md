# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-01-15

### Added
- Introduced API key scoping with endpoint-level permissions to provide finer-grained access control for client applications.
- Added webhook delivery retry policies with configurable backoff and dead-letter event logging in the developer dashboard.
- Added usage analytics endpoints for retrieving per-project request volume, latency percentiles, and error-rate summaries.

### Changed
- Improved rate limiting behavior to return standardized quota headers across REST and GraphQL endpoints.
- Updated the OAuth token introspection response to include token origin and last-used timestamp metadata.

### Fixed
- Fixed an issue where paginated list endpoints could return duplicate records when sorting by `updated_at`.
- Fixed intermittent webhook signature validation failures caused by inconsistent canonicalization of JSON payloads.