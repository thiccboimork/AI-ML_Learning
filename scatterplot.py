import pandas as pd
import matplotlib.pyplot as plt

# Load data from CSV file
df = pd.read_csv('2A_Scatterplot_Zoom.csv')

# Extract x-values
x_values = df['X']

# Extract y-values
y_values = df['Y']

# Create scatter plot for each series
plt.scatter(x_values, df['Hash0'], label='Hash0')
#plt.scatter(x_values, df['Hash1'], label='Hash1')
#plt.scatter(x_values, df['Hash2'], label='Hash2')
plt.scatter(x_values, df['Hash3'], label='Hash3')
#plt.scatter(x_values, df['Hash4'], label='Hash4')

# Add labels and title
plt.xlabel('Table Size')
plt.ylabel('Comparisons/Test')
plt.title('Hashtable Size v. Comparisons/Tests, Hash0 v. Hash3')

# Add legend
plt.legend()

# Show the plot
plt.show()
