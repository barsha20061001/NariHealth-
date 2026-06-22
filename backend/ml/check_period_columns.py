# backend/ml/check_period_columns.py

import pandas as pd

df = pd.read_csv("../datasets/FedCycleData071012 (2).csv")

print("Shape:", df.shape)
print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 rows:")
print(df.head())