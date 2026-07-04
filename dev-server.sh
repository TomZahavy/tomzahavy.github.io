#!/bin/bash
export PATH="/Users/tomzahavy/.nvm/versions/node/v24.18.0/bin:$PATH"
cd "$(dirname "$0")"
exec npm run dev
