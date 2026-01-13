import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# Parameters
mu = 0
sigma = 1
color = "tab:blue"

# Support (for smooth plot)
x = np.linspace(-4, 4, 600)

# PDF and CDF
pdf = norm.pdf(x, loc=mu, scale=sigma)
cdf = norm.cdf(x, loc=mu, scale=sigma)

# Create horizontal subplots
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# ---------- PDF ----------
axes[0].plot(x, pdf, color=color, lw=2)
axes[0].set_xlabel("x")
axes[0].set_ylabel("f_X(x)")
axes[0].set_title("PDF of N(0,1)")
axes[0].grid(True, linestyle="--")
axes[0].set_ylim(-0.01, max(pdf) * 1.1)

# ---------- CDF ----------
axes[1].plot(x, cdf, color=color, lw=2)
axes[1].set_xlabel("x")
axes[1].set_ylabel("F_X(x)")
axes[1].set_title("CDF of N(0,1)")
axes[1].grid(True, linestyle="--")
axes[1].set_ylim(-0.01, 1.01)

plt.tight_layout()
plt.show()
