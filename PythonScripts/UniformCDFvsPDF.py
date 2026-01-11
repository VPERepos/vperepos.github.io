import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import uniform

# Parameters
a = 0
b = 1
color = "tab:blue"

# Support (for smooth plot)
x = np.linspace(-0.2, 1.2, 500)  # slightly beyond 0 and 1 for visualization

# PDF and CDF
pdf = uniform.pdf(x, loc=a, scale=b-a)
cdf = uniform.cdf(x, loc=a, scale=b-a)

# Create horizontal subplots
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# ---------- PDF ----------
axes[0].plot(x, pdf, color=color, lw=2)
axes[0].set_xlabel("x")
axes[0].set_ylabel("f_X(x)")
axes[0].set_title("PDF of Uniform(0,1)")
axes[0].grid(True, linestyle="--")
axes[0].set_ylim(-0.05, 1.2)  # start slightly below 0

# ---------- CDF ----------
axes[1].plot(x, cdf, color=color, lw=2)
axes[1].set_xlabel("x")
axes[1].set_ylabel("F_X(x)")
axes[1].set_title("CDF of Uniform(0,1)")
axes[1].grid(True, linestyle="--")
axes[1].set_ylim(-0.05, 1.05)

plt.tight_layout()
plt.show()
