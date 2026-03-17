# Changelog

## [1.2.0] - 2025-01-15

### Added
- Introduced a new endpoint for user authentication using OAuth 2.0, enhancing security and user experience.
- Added support for batch processing of API requests, allowing users to send multiple requests in a single call.
- Implemented detailed logging for all API requests, providing better insights and easier debugging for developers.

### Changed
- Updated the rate limiting policy to allow for higher throughput during peak usage times, improving performance for high-demand applications.
- Refactored the API response structure to include additional metadata, making it easier for developers to parse and utilize the data.

### Fixed
- Resolved an issue where the API would return incorrect status codes for certain error conditions, ensuring more accurate error handling.
- Fixed a bug that caused intermittent timeouts on the data retrieval endpoint, improving reliability and user experience.