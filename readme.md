# test-git

Testing detection of git operations for ignoring builds

```bash
# find what tags where in a given commit
git describe --tag <commit-id>

# does the latest commit point to a tag?
git describe --exact-match HEAD


# fatal if no tags on this commit
git describe --tags --exact-match HEAD

# exit with 1 if a tag is detected, else exit 0 to ignore the build
if git describe --tags --exact-match HEAD; then exit 1; else exit 0; fi

```
