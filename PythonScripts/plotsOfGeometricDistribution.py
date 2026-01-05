import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import geom

# Parameters
ps = [1/4, 1/2, 3/4]
labels = ["Geom(1/4)", "Geom(1/2)", "Geom(3/4)"]
colors = ['blue', 'green', 'red']

# Support (truncated for visualization)
k = np.arange(1, 15)

# Create vertically arranged subplots
fig, axes = plt.subplots(3, 1, figsize=(6, 8), sharex=True)

for ax, p, label, color in zip(axes, ps, labels, colors):
    pmf = geom.pmf(k, p)
    ax.bar(k, pmf, color=color, alpha=0.7, edgecolor='black')
    ax.set_title(label)
    ax.set_ylabel("P(X = k)")
    ax.grid(True, linestyle="--")

axes[-1].set_xlabel("k")
axes[-1].set_xticks(k)

plt.tight_layout()
plt.show()
