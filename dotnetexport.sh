#!/bin/bash
yarn install
yarn run dotnet
find dist/dotnet -name '*.cshtml' -exec sed -i 's_href="/pdfs_href="~/pdfs_g' "{}" \;
find dist/dotnet -name '*.cshtml' -exec sed -i 's_href="/documents_href="~/documents_g' "{}" \;
find dist/dotnet -name '*.cshtml' -exec sed -i 's_href="http://_href="//_g' "{}" \;
find dist/dotnet -name '*.cshtml' -exec sed -i 's_src="/images_src="~/images_g' "{}" \;
find . -name ".DS_Store" -delete
mkdir -p dist/assets
cp -R --strip-trailing-slashes src/scss dist/assets/scss
cp -R --strip-trailing-slashes dist/js dist/assets/js
cp -R --strip-trailing-slashes dist/images dist/assets/images
cp -R --strip-trailing-slashes dist/pdfs dist/assets/pdfs
cp -R --strip-trailing-slashes dist/documents dist/assets/documents
cp -R --strip-trailing-slashes dist/resources dist/assets/resources
tar -cvf dotnet.tar dist/dotnet
tar -cvf assets.tar dist/assets
tar -cvf videos.tar dist/videos