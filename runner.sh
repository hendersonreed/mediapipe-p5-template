#!/usr/bin/env bash

command=$1
subcommand=$2

set -euo pipefail

if [[ $command = "help" ]] ; then
	echo "Available commands:"
	printf "\t fetch: fetches dependencies from CDN.\n"
	printf "\t serve: serves files. takes an optional subcommand:\n"
	printf "\t\t empty subcommand: serves the current directory.\n"
	printf "\t\t face-detection: serves the face-detection directory.\n"
	printf "\t\t hand-detection: serves the hand-detection directory.\n"

elif [[ $command = "fetch" ]] ; then
	# wget all files in "deps.txt"
	# and place them in `face-detection/dependencies/`
	# and `hand-detection/dependencies/`
	echo "fetching dependencies."
	cd face-detection/dependencies || \
		{ echo "couldn't cd to face-detection/dependencies/, exiting."; exit 1; }
	find . -type f ! -name 'deps.txt' -exec rm {} \;
	while read -r url ; do
	wget -c "$url"
	done < deps.txt
	cd -

	cd hand-detection/dependencies || \
		{ echo "couldn't cd to hand-detection/dependencies/, exiting."; exit 1; }
	find . -type f ! -name 'deps.txt' -exec rm {} \;
	while read -r url ; do
	wget -c "$url"
	done < deps.txt

elif [[ $command = "serve" ]] ; then
	if [[ -z "$subcommand" ]] ; then
		echo "serving this directory."
		(sleep 2 && firefox "http://localhost:3030") &
		python -m http.server 3030

	elif [[ "$subcommand" = "face-detection" ]] ; then
		echo "serving face-detection."
		cd face-detection || exit 1
		(sleep 2 && firefox "http://localhost:3030") &
		python -m http.server 3030

	elif [[ "$subcommand" = "hand-detection" ]] ; then
		echo "serving hand-detection."
		cd hand-detection || exit 1
		(sleep 2 && firefox "http://localhost:3030") &
		python -m http.server 3030

	else
		echo "Received unrecognized 'serve' argument."
	fi
else
	echo "Received empty unrecognized argument to runner.sh. Run 'runner.sh help' for available commands."
fi
