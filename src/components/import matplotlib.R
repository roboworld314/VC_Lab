import matplotlib.pyplot as plt

# -----------------------------
# Data
# -----------------------------
vibration = ["Low", "Medium", "High"]
x = range(len(vibration))

data = {
    "PointPillars": {
        "baseline": [67, 60, 52],
        "rl":       [82, 71, 69]
    },
    "SECOND": {
        "baseline": [62, 57, 51],
        "rl":       [80, 74, 68]
    },
    "CenterPoint": {
        "baseline": [73, 68, 53],
        "rl":       [85, 77, 70]
    }
}

markers = ["o", "s", "^"]  # distinct shapes per model
linestyles = ["-", "--", ":"]

# -----------------------------
# Plot
# -----------------------------
plt.figure(figsize=(4.8, 3.2))  # fits IEEE single column

for (model, style, marker) in zip(data.keys(), linestyles, markers):
    # Baseline (hollow markers)
    plt.plot(
        x,
        data[model]["baseline"],
        linestyle=style,
        marker=marker,
        markersize=6,
        markerfacecolor="none",
        linewidth=1.5,
        label=f"{model} (Baseline)"
    )

    # RL (filled markers)
    plt.plot(
        x,
        data[model]["rl"],
        linestyle=style,
        marker=marker,
        markersize=6,
        linewidth=1.5,
        label=f"{model} (RL)"
    )

# -----------------------------
# Formatting
# -----------------------------
plt.xticks(x, vibration)
plt.ylabel("mAP@50 (%)")
plt.xlabel("Vibration Level")
plt.grid(axis="y", linestyle=":", linewidth=0.6)
plt.legend(fontsize=7, ncol=2, frameon=False)
plt.tight_layout()

plt.show()