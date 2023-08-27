#!/bin/bash
# react bootstrap script

export TERM="xterm-color"
app="streamify-frontend"
source .env
export REACT_APP_PORT=${REACT_APP_PORT}

if screen -list | grep -q "\.${app}"; then
  echo "[${app}] info: quitting existing screen session..."
  screen -S "${app}" -X quit 1>/dev/null
fi

echo "[${app}] info: deploying ${app} app..."
screen -dmSL "${app}" -Logfile "screen.log" yarn start:prod 1>/dev/null

sleep 2s

if screen -list | grep -q "\.${app}"; then
  echo "[${app}] ok: successfully deployed ${app} app"
  exit 0
else
  echo "[${app}] error: failed to deploy ${app} app"
  exit 1
fi
