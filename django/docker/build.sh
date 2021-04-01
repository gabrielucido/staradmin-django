#!/usr/bin/env bash

if [ "$MODE" = "production" ]; then
    echo "Installing production requirements..."
    pip3 install --no-input --no-cache-dir -r /app/django/project/requirements/prod.txt
else
    echo "Installing development requirements..."
    pip3 install --no-input --no-cache-dir -r /app/django/project/requirements/dev.txt
fi
