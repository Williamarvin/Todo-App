# Todo App - Docker Compose Quick Start

## Common Commands

### Start all services in the background
```
docker compose up -d
```

### Open dev toolbox shell (access both frontend and backend folders)
```
docker compose exec dev bash
```

Inside the dev container:
```
cd backend   # Run backend commands, e.g.:
./mvnw spring-boot:run   # or run tests, etc.

cd ../frontend   # Run frontend commands, e.g.:
npm i
npm run lint
```

### Exec into individual services
- Backend:
  ```
  docker compose exec backend sh
  ```
- Frontend:
  ```
  docker compose exec frontend sh
  ```

### View logs for all services
```
docker compose logs -f
```

### Stop and remove all containers
```
docker compose down
```