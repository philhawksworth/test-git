# test-git

Testing detection of git operations for ignoring builds

Github needs to fire a webhook for _new branches and tags_

```bash
# fatal if no tags on this commit
git describe --tags --exact-match HEAD

# exit with 1 if a tag is detected, else exit 0 to ignore the build
! git describe --tags --exact-match HEAD

```
