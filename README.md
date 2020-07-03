# What am I Writing?

What am I Writing is a project I made to bring full-stack and machine learning development together. It uses a convolutional neural network trained on the MNIST dataset to recognize digits drawn by the user.

## How Can I Try it Out?

At the time of writing this README, the app is deployed on my server at the domain [whatamiwriting.com](http://www.whatamiwriting.com). You can visit it there and try out the app.

Alternatively, you can clone this repository and try the app running locally by starting server.js.

```bash
node server.js
```

You will then be able to access the server through your browser on [localhost:3000](http://localhost:3000)

## Model Architecture

The network is based on the LeNet5 architecture. The model was trained on the MNIST dataset modified to have binary pixels to better match the input data. After the each of the pooling layers and after the first fully connected layer, a dropout of 40% is performed. The model was trained in 20 epochs with a learning rate of 0.0001 using the Adam optimizer and cross entropy loss function. The model achieves a validation accuracy of 94.6%. The percent of digits accurately recognized through the program will likely be lower due to the lower resolution used in the drawing board and suboptimal inputs (digits that are too small or not centered).

## What is it Written in?

The frontend of the app is written in HTML, CSS, and JavaScript (with jQuery).
The backend of the app is written in Node.js, Express.js, and Python (PyTorch).

## Future Steps?

This is just a starting point for this project, and in the future I hope to implement more advanced full-stack development and machine learning techniques to make the app more compelling. Some of these future changes include the recognition of more than just one token, and non-numeric tokens. One long term project idea is to make an algorithm that transforms a PDF of a sheet of music into a machine-readable (think MIDI) format. This will require much more advanced algorithms and concepts than I have employed here.
