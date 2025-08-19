from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    
    # Convert incoming data to a NumPy array for the model
    input_data = [
        data['age'], data['sex'], data['cp'], data['trestbps'], data['chol'], 
        data['fbs'], data['restecg'], data['thalach'], data['exang'], 
        data['oldpeak'], data['slope'], data['ca'], data['thal']
    ]
    input_array = np.asarray(input_data).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(input_array)
    
    # Return prediction as JSON
    result = "Affected by Defective Heart Disease" if prediction[0] == 1 else "Don't Worry , Healthy Heart"
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)