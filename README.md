# arogya
This project Arogya AI powered medical diagnosis aims to develop an intelligent diagnostics system leveraging deep learning (CNN model like ResNet 50 and EfficientNet) to automate disease detection from medical images.
# TB Diagnosis Predictor

This is a web-based application built using AI to predict whether an X-ray image is positive or negative for Tuberculosis (TB). The system uses machine learning models to analyze the uploaded X-ray and provide the diagnosis result.

## Features

- **AI-powered Diagnosis**: Upload an X-ray image, and the AI model will predict if the result indicates TB or not.
- **Simple Interface**: User-friendly interface for easy image upload and quick results.
- **Healthcare Information**: Links to relevant tuberculosis resources from the WHO and government schemes for TB treatment and prevention.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask framework)
- **Machine Learning**: AI model for TB diagnosis (trained on medical X-ray datasets)
- **Libraries**: TensorFlow, Keras, NumPy, OpenCV

## Project Structure

Here's a breakdown of how the project files are organized:


- *app.py*: This is the main Python script that contains the Flask app logic. It handles the HTTP routes, file uploads, and model predictions.
- *static/*: This folder contains static files such as CSS, JavaScript, and images that are served to the frontend.
  - *css/*: Contains stylesheets for the project.
- *templates/*: This folder contains the HTML templates used by Flask to render the webpages.
  - *index.html*: The homepage where users can upload X-ray images for prediction.
  - *result.html*: Displays the result of the prediction (positive or negative for TB).
- *model/*: This folder stores the pre-trained machine learning model file.
  - *tb_model.h5*: The model file that is used to predict TB from X-ray images.
- *requirements.txt*: This file lists all the Python libraries required to run the project.
- 'README.md': This documentation file explaining the project, setup, and usage.

