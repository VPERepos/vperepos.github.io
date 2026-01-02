import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import hypergeom

# Parameters
N = 100  # total population size
ns = [10, 10, 10]  # sample size
Ks = [10, 30, 50]  # total successes in population
labels = ['K=10', 'K=30', 'K=50']
colors = ['blue', 'green', 'red']

# Create a figure with 3 vertically stacked subplots
fig, axes = plt.subplots(3, 1, figsize=(8, 10), sharex=True)

for ax, K, n, label, color in zip(axes, Ks, ns, labels, colors):
    # Support: possible number of successes
    k = np.arange(0, min(K, n)+1)
    # Hypergeometric PMF
    pmf = hypergeom.pmf(k, N, K, n)
    # Bar plot
    ax.bar(k, pmf, color=color, alpha=0.7, edgecolor='black')
    ax.set_ylabel('P(X=k)')
    ax.set_title(f'Hypergeometric Distribution (N={N}, {label}, n={n})')
    ax.set_xticks(k)
    ax.grid(True, linestyle='--', alpha=0.5)

axes[-1].set_xlabel('Number of Successes in Sample (k)')
plt.tight_layout()
plt.show()