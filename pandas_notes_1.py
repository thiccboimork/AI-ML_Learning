# %%
import pandas as pd

pd.DataFrame({'Yes': [50, 21], 'No': [131, 2]})

# %% [markdown]
# DataFrame makes a chart with the data specified.

# %%
pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'], 'Sue': ['Pretty good.', 'Bland.']})

pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'], 'Sue': ['Pretty good.', 'Bland.']},
             index=['Product A', 'Product B'])

# %%
pd.Series([1, 2, 3, 4, 5])

pd.Series([30, 35, 40], index=['2015 Sales', '2016 Sales', '2017 Sales'], name='Product A')

# %% [markdown]
# A series is just a list, if a DataFrame is a table. Essentially, it is just a single column of a DataFrame.

# %% [markdown]
# 'csv_name'.shape will return two numbers: first, the number of rows, then the number of rows.
# Using 'index_col' in read_csv() will tell pandas which column is the actual first column.
# To make something into a csv, use 'dataframe'.to_csv('name_of_file.csv')
