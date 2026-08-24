# SenseGuard vibration experiment plot
# This file now contains valid R code matching its .R extension.

vibration <- factor(c("Low", "Medium", "High"),
                    levels = c("Low", "Medium", "High"))

results <- data.frame(
  vibration = rep(vibration, 6),
  model = rep(c("PointPillars", "PointPillars", "SECOND", "SECOND",
                "CenterPoint", "CenterPoint"), each = 3),
  method = rep(c("Baseline", "RL", "Baseline", "RL", "Baseline", "RL"), each = 3),
  map50 = c(
    67, 60, 52,
    82, 71, 69,
    62, 57, 51,
    80, 74, 68,
    73, 68, 53,
    85, 77, 70
  )
)

models <- c("PointPillars", "SECOND", "CenterPoint")
line_types <- c(1, 2, 3)
point_types <- c(1, 0, 2)
colors <- c("#1B2A4A", "#C05E3C", "#0F716B")

pdf("senseguard_vibration_map50.pdf", width = 4.8, height = 3.2)
par(mar = c(3.8, 4.0, 0.6, 0.5), mgp = c(2.2, 0.7, 0),
    family = "sans", cex = 0.82)

plot(1:3, c(48, 88), type = "n", xaxt = "n",
     xlab = "Vibration Level", ylab = "mAP@50 (%)")
axis(1, at = 1:3, labels = levels(vibration))
grid(nx = NA, ny = NULL, lty = 3, col = "#D7D7D7")

legend_labels <- character()
legend_colors <- integer()
legend_lty <- integer()
legend_pch <- integer()
legend_bg <- character()

for (i in seq_along(models)) {
  model_name <- models[i]
  baseline <- subset(results, model == model_name & method == "Baseline")$map50
  rl <- subset(results, model == model_name & method == "RL")$map50

  lines(1:3, baseline, type = "o", lty = line_types[i], lwd = 1.5,
        pch = point_types[i], col = colors[i], bg = "white")
  lines(1:3, rl, type = "o", lty = line_types[i], lwd = 1.5,
        pch = point_types[i], col = colors[i], bg = colors[i])

  legend_labels <- c(legend_labels,
                     paste(model_name, "(Baseline)"),
                     paste(model_name, "(RL)"))
  legend_colors <- c(legend_colors, i, i)
  legend_lty <- c(legend_lty, line_types[i], line_types[i])
  legend_pch <- c(legend_pch, point_types[i], point_types[i])
  legend_bg <- c(legend_bg, "white", colors[i])
}

legend("bottomleft", legend = legend_labels, col = colors[legend_colors],
       lty = legend_lty, pch = legend_pch, pt.bg = legend_bg,
       ncol = 2, cex = 0.62, bty = "n")

dev.off()