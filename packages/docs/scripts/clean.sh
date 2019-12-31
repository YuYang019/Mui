#!/bin/bash

folder="../.temp"

if [ ! -d "$folder" ]; then
  exit 0
fi

rm -r $folder