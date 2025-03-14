from flask import Flask, render_template, request, redirect, url_for
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
model = tf.keras.models.load_model(r"C:\\Users\\armaa\\arogya\\TB_Model.h5")

@app.route('/')
def home():
    return render_template('index.html')  # Render the HTML form

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    
    # Save the file temporarily
    img_path = "static/uploads/" + file.filename
    file.save(img_path)

    # Process the image and make predictions
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array / 255.0  # Normalize

    # Make prediction
    prediction = model.predict(img_array)
    
    # You can adjust this part based on your model's output
    result = "Positive" if prediction[0][0] > 0.5 else "Negative"
    
    # Redirect to the result page with the prediction result
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
