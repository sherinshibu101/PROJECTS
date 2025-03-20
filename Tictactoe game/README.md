# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented in Python with a graphical user interface (GUI).

## 🛠 Prerequisites

Ensure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- Python 3.x (if running locally)

## 🚀 Running the Game

### 🐍 Running Locally
If you want to run the game without Docker, execute:
```sh
python tictactoe.py
```

### 🐳 Running with Docker
1. **Build the Docker Image**:
   ```sh
   docker build -t she_1001/tictactoe:latest .
   ```

2. **Run the Docker Container**:
   ```sh
   docker run -it she_1001/tictactoe:latest
   ```

## 📤 Pushing to Docker Hub
If you want to push this image to Docker Hub:
1. Log in to Docker Hub:
   ```sh
   docker login
   ```
2. Tag the image properly:
   ```sh
   docker tag tictactoe:latest she_1001/tictactoe:latest
   ```
3. Push the image:
   ```sh
   docker push she_1001/tictactoe:latest
   ```

## 📝 Author
Developed by **she_1001**. Contributions are welcome!

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).


