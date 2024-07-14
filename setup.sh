# Exit immediately if a command exits with a non-zero status
set -e

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Set up Husky
echo "Setting up Husky..."
npm run prepare

echo "Setup completed successfully."