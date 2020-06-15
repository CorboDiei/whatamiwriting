"""
The guess module that takes in a matrix in hex form and uses a CNN to guess what number the user drew
Author: David Corbo
Last Edited: 6/13/20
"""

import torch
import numpy as np
from torch import nn
import torch.nn.functional as F
import sys, os

class LeNet(nn.Module):
    def __init__(self):
      super().__init__()
      self.dropout1 = nn.Dropout(0.4)
      self.conv1 = nn.Conv2d(1, 32, 5, 1)
      self.conv2 = nn.Conv2d(32, 64, 5, 1)
      self.fc1 = nn.Linear(1600, 128)
      self.fc2 = nn.Linear(128, 10)
   
    def forward(self, x):
      x = F.relu(self.conv1(x))
      x = F.max_pool2d(x, 2, 2)
      x = self.dropout1(x)
      x = F.relu(self.conv2(x))
      x = F.max_pool2d(x, 2, 2)
      x = self.dropout1(x)
      x = x.view(-1, 1600)
      x = F.relu(self.fc1(x))
      x = self.dropout1(x)
      x = self.fc2(x)
      return x
  
  
def blockPrint():
    sys.stdout = open(os.devnull, 'w')
    
def enablePrint():
    sys.stdout = sys.__stdout__

def guess(data):
    device = torch.device('cuda:0' if torch.cuda.is_available() else "cpu")
    model = LeNet().to(device)
    model.load_state_dict(torch.load(os.path.join(os.getcwd(), "scripts", "model.pt")))
    mat = np.ndarray((196, 1), int)
    for i in range(len(data)):
        mat[i] = int(data[i]) 
    mat = np.tile(mat, 2)
    mat = np.reshape(mat, (14, 28))
    mat = np.transpose(mat)
    mat = np.reshape(mat, (392, 1))
    mat = np.tile(mat, 2)
    mat = np.reshape(mat, (28, 28))
    mat = np.transpose(mat)
    tens = torch.from_numpy(mat)
    fullTens = torch.zeros(32, 32)
    fullTens[2:30, 2:30] = tens
    fullTens = fullTens.to(device)
    fullTens = fullTens.unsqueeze(0).unsqueeze(0)
    output = model(fullTens)
    _, pred = torch.max(output, 1)
    return pred.item()
    

def main(argv):
    try:
        opt, data = argv
    except:
        raise Exception("You need an option and data")
    if (opt == "--data"):
        print(guess(data), flush=True)
        # print(3)
    else:
        print("opt 1 is not --data")

if __name__ == "__main__":
    main(sys.argv[1:])
    