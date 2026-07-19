```markdown
# my-website Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `my-website` repository, a TypeScript project built with Next.js. It covers file naming, code style, commit message conventions, and testing patterns to ensure consistency and maintainability across the codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.tsx`, `apiRoutes.ts`

### Import Style
- Mixed import styles are used:
  - **Default imports**:
    ```typescript
    import React from 'react';
    ```
  - **Named imports**:
    ```typescript
    import { useState } from 'react';
    ```
  - **Combined imports**:
    ```typescript
    import React, { useEffect } from 'react';
    ```

### Export Style
- Prefer **default exports** for modules.
  - Example:
    ```typescript
    const UserProfile = () => { /* ... */ };
    export default UserProfile;
    ```

### Commit Message Conventions
- Use **Conventional Commits** with the following prefixes:
  - `chore`: Maintenance tasks
  - `feat`: New features
  - `docs`: Documentation changes
- Average commit message length: ~61 characters
- Example:
  ```
  feat: add user authentication to login page
  ```

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- Test files follow the pattern: `*.test.*`
  - Example: `userProfile.test.ts`
- Testing framework is **unknown** (not detected), but standard test file naming is used.
- Example test file:
  ```typescript
  // userProfile.test.ts
  import { render } from '@testing-library/react';
  import UserProfile from './userProfile';

  test('renders user profile', () => {
    const { getByText } = render(<UserProfile />);
    expect(getByText('User Profile')).toBeInTheDocument();
  });
  ```

## Commands
| Command | Purpose |
|---------|---------|
| /commit-convention | Show commit message guidelines |
| /file-naming       | Show file naming convention    |
| /test-pattern      | Show test file naming pattern  |
```