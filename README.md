# 🧠 AROGYA – AI Powered TB Diagnosis Predictor

**Arogya** is an AI-driven medical diagnosis platform designed to detect **Tuberculosis (TB)** from chest X-ray images using deep learning. With a user-friendly web interface and powerful backend intelligence, it delivers fast, reliable predictions to assist medical professionals and patients.

---

## 🔍 What is Arogya?

Arogya aims to revolutionize TB detection by integrating **AI & Deep Learning (ResNet50, EfficientNet)** into the diagnostic process. It simplifies medical imaging analysis by enabling users to **upload an X-ray and receive an instant diagnosis** – positive or negative for TB.

> ⚕️ Early diagnosis saves lives. Arogya bridges the gap between technology and accessible healthcare.

---

## 🚀 Features

- 🧠 **AI-powered Diagnosis**  
  Upload a chest X-ray and get real-time predictions on TB presence.

- 🖼️ **Simple, Intuitive Interface**  
  Seamless UI for quick uploads and clear results.

- 🏥 **Healthcare Resources**  
  Links to verified **WHO** guidelines and **government TB treatment programs**.

---

## 🛠️ Tech Stack

| Layer       | Technologies Used                                     |
|-------------|--------------------------------------------------------|
| 🖥️ Frontend | HTML, CSS, JavaScript                                  |
| 🧠 AI Model | ResNet50, EfficientNet, TensorFlow, Keras              |
| ⚙ Backend   | Python, Flask                                          |
| 🧰 Utilities | OpenCV, NumPy                                          |

---

## 📁 Project Structure

📦 Arogya/ 
<br>├── app.py → Flask backend logic 
<br>├── model/ 
<br>│ └── tb_model.h5 → Pre-trained TB diagnosis model 
<br>├── static/ 
<br>│ └── css/ → Custom stylesheets 
<br>│ └── style.css 
<br>├── templates/ 
<br>│ ├── index.html → Upload page for X-ray 
<br>│ └── result.html → Display prediction result 
<br>├── requirements.txt → Python dependencies 
<br>└── README.md → Project documentation


---

## 🔬 How It Works

1. 📤 User uploads a chest X-ray image.
2. 🧠 AI Model processes the image using CNN architecture.
3. ✅ Output is generated – **TB Positive** or **TB Negative**.
4. 🔗 Resources and guidance are provided.

---

## 📌 Setup Instructions

> 💻 Make sure you have Python 3.7+ and pip installed.

```bash
# Clone the repository
git clone https://github.com/yourusername/arogya-tb-diagnosis.git
cd arogya-tb-diagnosis
```
```bash
# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
```bash
# Install dependencies
pip install -r requirements.txt
```
```bash
# Run the application
python app.py
Now open your browser and go to http://localhost:5000 🚀
```

---
## 🧪 Dataset Used
We trained our model on publicly available chest X-ray datasets:
<br>
Shenzhen TB Chest X-ray Set
<br>
Montgomery TB Dataset
<br>
These datasets include annotated X-rays labeled for TB-positive and TB-negative cases.

---
## 🧠 Model Performance<br>
Metric	Value <br>
Accuracy	94.5% <br>
Precision	92.3% <br>
Recall	95.1% <br>
Model Format	.h5, .tflite (for mobile deployment) <br>

---

## 📚 Resources
🌐 WHO - Tuberculosis Information
<br>
🏥 Indian Government TB Schemes (NTEP)
<br>
📘 TB Treatment Guidelines – MoHFW
<br>

---
## 👨‍💻 Contributor
This project was fully developed and maintained by:

Armaan Samir Jena : [🔗Linked](www.linkedin.com/in/jena-armaan)<br>
AI Model | Backend Development | UI Integration | Deployment
<br>
Built with dedication to bring AI-powered health solutions closer to the people. 💙

---
## 📄 License
This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction.

---
## 🌟 Support
If you find this project helpful, give it a ⭐ and share it with others. Let's make healthcare smarter and more accessible together.

---
