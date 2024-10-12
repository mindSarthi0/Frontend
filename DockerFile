# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine AS base

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use an optimized production base image
FROM node:18-alpine AS production

# Step 8: Set working directory in the production image
WORKDIR /app

# Step 9: Copy the built application from the previous stage
COPY --from=base /app ./

# Step 10: Install only production dependencies
RUN npm install --production

# Step 11: Expose the necessary port
EXPOSE 3000

# Step 12: Define the default command to run the Next.js application
CMD ["npm", "run", "start"]
