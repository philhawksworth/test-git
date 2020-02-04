# test-git

Testing detection of git operations for ignoring builds

```bash
# find what tags where in a given commit
git describe --tag <commit-id>

# does the latest commit point to a tag?
git describe --exact-match HEAD


# fatal if no tags on this commit
git describe --tags --exact-match HEAD

#echo out if a branch is detected
if git describe --tags --exact-match HEAD; then echo "A BRANCH"; fi

```
