import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor


def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):
    model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)
    model.fit(train_X, train_y)
    predicted_val = model.predict(val_X)
    mae = mean_absolute_error(val_y, predicted_val)
    return mae


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
# make a model, specify a random_state number (I've seen most use 42)
data_model = DecisionTreeRegressor(random_state=1)
# fit model
data_model.fit(focus_column_X, focus_column_Y)

print("Making predictions for the following 5 houses: ")
print(focus_column_X.head())
print("The predictions are: ")
# Make the actual predictions from the model! (.head not needed)
print(data_model.predict(focus_column_X.head()))

predicted_target = data_model.predict(focus_column_X)
# find the mean absolute error, aka how different we are from the actual data
mean_absolute_error(focus_column_Y, predicted_target)
# how to make training and validation data !!
train_X, val_X, train_y, val_y = train_test_split(focus_column_X, focus_column_Y, random_state=0)
data_model.fit(train_X, train_y)
# make predictions from actual model
data_predictions = data_model.predict(val_X)

# print each mean absolute errors
for max_leaf_nodes in [5, 50, 500, 5000]:
    curr_mae = get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y)
    print(f"Max leaf nodes: {max_leaf_nodes} \t\t Mean Absolute Error: {curr_mae}")

forest_model = RandomForestRegressor(random_state=1)
forest_model.fit(train_X, train_y)
forest_prediction = forest_model.predict(val_X)
print(mean_absolute_error(val_y, forest_prediction))
