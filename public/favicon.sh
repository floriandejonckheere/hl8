#!/usr/bin/sh -e
#
# Generate various sized favicons
#

SOURCE="health-and-safety.svg"
FAVICON="favicon.ico"

convert -background none -resize 16x16 ${SOURCE} /tmp/favicon-16.png
convert -background none -resize 32x32 ${SOURCE} /tmp/favicon-32.png
convert -background none -resize 64x64 ${SOURCE} /tmp/favicon-64.png
convert /tmp/favicon-16.png /tmp/favicon-32.png /tmp/favicon-64.png ${FAVICON}

echo "Generated ${FAVICON}"
