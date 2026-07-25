```markdown
# my-website Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `my-website` repository, a TypeScript-based Next.js project. You'll learn how to structure files, write and commit code, and organize tests according to the established standards of this codebase.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file and folder names.
  - **Example:**  
    ```
    user-profile.tsx
    api-handler.ts
    components/navbar/index.tsx
    ```

### Import Style
- Use **alias imports** for modules.
  - **Example:**  
    ```typescript
    import Button from '@/components/button';
    import { fetchData } from '@/utils/api';
    ```

### Export Style
- Use **default exports** for modules and components.
  - **Example:**  
    ```typescript
    // components/button.tsx
    const Button = () => { /* ... */ };
    export default Button;
    ```

### Commit Messages
- Follow **Conventional Commits** with the `feat` prefix for features.
- Keep commit messages concise (average 84 characters).
  - **Example:**  
    ```
    feat: add user profile page with avatar upload
    ```

## Workflows

_No explicit workflows detected in this repository._

## Testing Patterns

- Test files use the pattern `*.test.*`
  - **Example:**  
    ```
    user-profile.test.ts
    api-handler.test.tsx
    ```
- The specific testing framework is not detected, but tests should be colocated with or near the code they test, following the naming pattern above.

## Commands
| Command | Purpose |
|---------|---------|
| /new-feature | Scaffold a new feature module following conventions |
| /add-test | Create a new test file for a module |
| /commit | Format and commit changes using the conventional commit pattern |
```
