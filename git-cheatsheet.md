# Git Commands Cheatsheet

### Official documentation

- [Git Documentation](https://git-scm.com/docs)

### Basics

- `git init`

- `git status`
- `git diff`

- `git add .`
- `git commit -m "message"`

- `git restore .`

- `git log`
- `git show`

### Ignoring Files (.env, node_modules, etc.)

- Create `.gitignore` file and add files or directories there

### Branches

- `git branch`
- `git switch -c new branch`
- `git switch master`

### Merging Branches

- `git switch main`
- `git merge feature`

### Resolving Merge Conflicts

- Resolve conflicts using VSCode or other editor
- `git add .`
- `git commit`

### Resolving Merge Conflicts When Pulling

- `git pull`
- Resolve conflicts using VSCode or other editor
- `git add .`
- `git commit`

- `git config pull.rebase false` - Merge (default behavior)
- `git config pull.rebase true` - Rebase (your commits on top of pulled commits)
- `git config pull.ff only` - Fast-forward only (no merge commits, only if no local changes)

### GitHub

- `git remote add origin (url)`
- `git remote -v`
- `git push -u origin master`

- `git pull`
- `git pull origin main`

- `git clone (url)`

### Semantic Commit Messages

- `feat: add new feature`
- `fix: fix a bug`
- `docs: update documentation`
- `refactor: refactor code`

- [Guide to Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Semantic Versioning

- `x.x.PATCH` - Bug fixes
- `x.MINOR.x` - New features (backwards compatible)
- `MAJOR.x.x` - Breaking changes

- [Guide to Semantic Versioning](https://semver.org/)
