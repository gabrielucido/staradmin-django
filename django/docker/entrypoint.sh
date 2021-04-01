#!/usr/bin/env bash

if [ "$MODE" = "production" ]; then
    echo "Installing production requirements..."
    pip3 install --no-input --no-cache-dir -r /app/django/project/requirements/prod.txt

    echo "Compressing content..."
    python3 manage.py compress
    echo "Content compressed"
else
    echo "Generating migrations..."
    python3 manage.py makemigrations --noinput
    echo "Migrations generated"
fi

echo "Applying migrations..."
python3 manage.py migrate --noinput
echo "Migrations applied"

exec "$@"
