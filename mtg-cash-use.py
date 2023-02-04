import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
import tensorflow as tf
import numpy as np
import logging


def create_model():
    model =  tf.keras.models.load_model('model/model')
    return model

def predict(model):
    with open('Card.txt', 'r') as f:
        text = f.read()
    answer = model.predict(np.array([text]))
    print(answer)
    

def main():
    #remove warnings
    logging.getLogger("tensorflow").setLevel(logging.ERROR)
    logging.getLogger("tensorflow").addHandler(logging.NullHandler(logging.ERROR))
        
    #load model
    model = create_model()
    
    #simple prediction
    predict(model)

if __name__ == "__main__":
    main()
