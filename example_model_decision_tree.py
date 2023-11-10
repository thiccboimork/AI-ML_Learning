import pandas as pd
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor


def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):
    model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)
    model.fit(train_X, train_y)
    preds_val = model.predict(val_X)
    mae = mean_absolute_error(val_y, preds_val)
    return mae


iowa_file_path = '../input/home-data-for-ml-course/train.csv'    # put in actual data i use lol

home_data = pd.read_csv(iowa_file_path)
y = home_data.SalePrice     # use actual thing i wanna predict
features = ['LotArea', 'YearBuilt', '1stFlrSF', '2ndFlrSF', 'FullBath', 'BedroomAbvGr', 'TotRmsAbvGrd']     # use actual data i want hehe
X = home_data[features]

train_X, val_X, train_y, val_y, = train_test_split(X, y, random_state=1)

iowa_model = DecisionTreeRegressor(random_state=1)
iowa_model.fit(train_X, train_y)

val_predictions = iowa_model.predict(val_X)
val_mae = mean_absolute_error(val_predictions, val_y)
print(f'Validation MAE: {val_mae:.0f}')

candidate_max_leaf_nodes = [5, 25, 50, 100, 250, 500]
scores = {max_leaf_nodes: get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y) for max_leaf_nodes
          in candidate_max_leaf_nodes}
best_tree_size = min(scores, key=scores.get)

final_model = DecisionTreeRegressor(max_leaf_nodes=best_tree_size, random_state=1)

final_model.fit(X, y)
