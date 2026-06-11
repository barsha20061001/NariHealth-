import pandas as pd

df = pd.read_csv("../datasets/anemia.csv")

print("Shape:", df.shape)
print("Columns:", df.columns.tolist())
print(df.head())