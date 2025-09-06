## Installation

Step-by-step instructions on how to get the development environment running. Developed by William. 

### Clone this project and navigate to project dir

```sh
cd /Desktop/
git clone git@github.com:Williamarvin/Todo-App.git
cd Todo_app
```

## Docker guide
Project is set up using Docker Compose, a tool for setting up multi-container applications in development (check https://docs.docker.com/compose/ for more info)


### Run the following command if you are building project for the first time, or whenever you change pom.xml, docker-compose.yaml, or Dockerfile

```sh
docker compose up --build -d
```

### If you did not change any build-related setup, just the project code, run the following command instead

```sh
docker compose up -d
```

### To shut down container, run the following command

```sh
docker compose down
```

### Volume Mounts

Even though we shut down the container, JDBM data is persisted because a volume has been mounted from local at `$(pwd)/backend/data` to /app/data in container at `/app/data`.
A volume is also mounted for the source code from local to container with the `$(pwd)/backend/src:/app/src`
For more details regarding how Docker Volume works, check https://docs.docker.com/engine/storage/volumes/.

## How to run Java applications?

### Backend server guide

#### Execute into the terminal of the backend Java environment

```sh
docker exec -it todo_app-backend-1 sh
```

#### Inside the container terminal, run the following to initialize the Spring server

```sh
sh -c "java $JAVA_OPTS -jar /app/app.jar"
```

#### Execute into the terminal of the frontend react environment

```sh
docker exec -it todo_app-frontend-1 sh
```

#### Inside the container terminal, run the following to initialize the frontend server

```sh
npm start
```
