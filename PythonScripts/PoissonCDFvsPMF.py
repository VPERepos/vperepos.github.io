import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import poisson

# Parameters
lam = 2
color = "tab:blue"  # single color for everything

# Support (truncate for visualization)
k = np.arange(0, 8)

# PMF and CDF
pmf = poisson.pmf(k, lam)
cdf = poisson.cdf(k, lam)

# Create horizontal subplots
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# ---------- PMF ----------
markerline, stemlines, baseline = axes[0].stem(
    k, pmf, basefmt=" ", linefmt=color, markerfmt="o"
)
plt.setp(markerline, color=color)
plt.setp(stemlines, color=color)

axes[0].scatter(k, pmf, color=color)
axes[0].set_xticks(k)
axes[0].set_xlabel("k")
axes[0].set_ylabel("P(X = k)")
axes[0].set_title("PMF of Poisson(2)")
axes[0].grid(True, linestyle="--")

# ---------- CDF ----------
for i in range(len(k)):
    left = k[i]
    right = k[i] + 1

    # horizontal stick
    axes[1].hlines(cdf[i], left, right, color=color)

    # filled dot (included)
    axes[1].plot(left, cdf[i], marker="o", color=color)

    # empty dot (excluded)
    axes[1].plot(right, cdf[i], marker="o",
                 markerfacecolor="none",
                 markeredgecolor=color)

axes[1].set_xticks(range(0, k[-1] + 2))
axes[1].set_xlabel("k")
axes[1].set_ylabel("P(X ≤ k)")
axes[1].set_title("CDF of Poisson(2)")
axes[1].set_ylim(0, 1.05)
axes[1].grid(True, linestyle="--")

plt.tight_layout()
plt.show()
