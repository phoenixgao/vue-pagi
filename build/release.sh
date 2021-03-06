set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."
  VERSION=$VERSION yarn run build

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  yarn version --new-version $VERSION

  # publish
  git push origin refs/tags/v$VERSION
  git push
  yarn publish
fi
