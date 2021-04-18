#!/bin/bash

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 text <voice> <speed> <pitch>"
    exit
fi

if [ -z "$2" ]; then voice="en-US"; else voice=$2 ; fi
if [ -z "$3" ]; then speed=1; else speed=$3 ; fi
if [ -z "$4" ]; then pitch=1; else pitch=$4 ; fi

echo "$1" | nanotts -v "$voice" --speed $speed --pitch $pitch --play
