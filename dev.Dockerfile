# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine

WORKDIR /app

# ⭐ AJOUT : Install OpenSSL (requis par Prisma)
RUN apk add --no-cache openssl libc6-compat

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
COPY prisma ./prisma/

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install && npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

# ⭐ AJOUT : Generate Prisma Client
RUN \
  if [ -f yarn.lock ]; then yarn prisma generate; \
  elif [ -f package-lock.json ]; then npm run prisma:generate || npx prisma generate; \
  elif [ -f pnpm-lock.yaml ]; then pnpm prisma generate; \
  else npx prisma generate; \
  fi

# ✅ Solution 3 : NE PAS copier le code source
# Le code sera monté dynamiquement via docker-compose volumes
# => Les changements sur votre machine sont détectés instantanément
# COPY app ./app
# COPY public ./public
# COPY next.config.ts .
# COPY tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV=development

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD ["sh", "-c", "if [ -f yarn.lock ]; then yarn dev; elif [ -f package-lock.json ]; then npm run dev; elif [ -f pnpm-lock.yaml ]; then pnpm dev; else npm run dev; fi"]
