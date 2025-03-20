# Use the official Python base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the application code to the container
COPY tictactoe.py .

# Install Tkinter (required for GUI applications)
RUN apt-get update && apt-get install -y python3-tk && apt-get clean

# Set the command to run the application
CMD ["python", "tictactoe.py"]
