import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import expon

# Parameters
lam = 1
color = "tab:blue"

# Support (for smooth plot)
x = np.linspace(0, 6, 600)  # exponential is supported on [0, ∞)

# PDF and CDF
pdf = expon.pdf(x, scale=1/lam)
cdf = expon.cdf(x, scale=1/lam)

# Create horizontal subplots
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# ---------- PDF ----------
axes[0].plot(x, pdf, color=color, lw=2)
axes[0].set_xlabel("x")
axes[0].set_ylabel("f_X(x)")
axes[0].set_title("PDF of Exp(1)")
axes[0].grid(True, linestyle="--")
axes[0].set_ylim(-0.01, max(pdf) * 1.1)

# ---------- CDF ----------
axes[1].plot(x, cdf, color=color, lw=2)
axes[1].set_xlabel("x")
axes[1].set_ylabel("F_X(x)")
axes[1].set_title("CDF of Exp(1)")
axes[1].grid(True, linestyle="--")
axes[1].set_ylim(-0.01, 1.01)

plt.tight_layout()
plt.show()
