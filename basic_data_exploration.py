import pandas as pd
from sklearn.tree import DecisionTreeRegressor

# read in csv file name
dataset = pd.read_csv("csv_name.csv")
# print out dataset
dataset.describe()
# names all of the columns in dataset
dataset.columns
# drops all millsing values
dataset = dataset.dropna(axis=0)

# How to find a "prediction target" y
focus_column_Y = dataset.ColumnName
# Create a list of features
dataset_features = ['List', 'Of', 'Columns', 'Wanted', 'In', 'Data']
# How to make model with a few features
focus_column_X = dataset[dataset_features]
# print out data
focus_column_X.describe()
# print out first few rows
focus_column_X.head()