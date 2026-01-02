import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import binom

# Parameters
n = 10
ps = [0.5, 1/8, 7/8]
labels = ['p=1/2', 'p=1/8', 'p=7/8']
colors = ['blue', 'green', 'red']

# Values of k
k = np.arange(0, n+1)

# Create a figure with 3 vertically stacked subplots
fig, axes = plt.subplots(3, 1, figsize=(8, 10), sharex=True)

for ax, p, label, color in zip(axes, ps, labels, colors):
    pmf = binom.pmf(k, n, p)
    ax.bar(k, pmf, color=color, alpha=0.7, edgecolor='black')
    ax.set_ylabel('P(X=k)')
    ax.set_title(f'Binomial Distribution (n={n}, {label})')
    ax.set_xticks(k)
    ax.grid(True, linestyle='--', alpha=0.5)

axes[-1].set_xlabel('Number of Successes (k)')
plt.tight_layout()
plt.show()