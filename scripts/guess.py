"""
The guess module that takes in a matrix in hex form and uses a CNN to guess what number the user drew
Author: David Corbo
Last Edited: 6/13/20
"""

# import torch
# from torchvision import datasets, transforms
# import numpy as np
# import matplotlib.pyplot as plt
# from torch import nn
# import torch.nn.functional as F
import sys, argparse

def guess(data):
    





def main(argv):
    try:
        opt, data = argv
    except:
        raise Exception("You need an option and data")
    if (opt == "--data"):
        print(guess(data))
    else:
        print("opt 1 is not --data")

if __name__ == "__main__":
    main(sys.argv[1:])
    