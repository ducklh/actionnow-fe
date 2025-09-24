#!/bin/bash

echo "🐳 Building Docker image for forex-news..."

# Build the Docker image
docker build -t forex-news:latest .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo "🚀 You can now run: docker-compose up -d"
else
    echo "❌ Docker build failed!"
    exit 1
fi
